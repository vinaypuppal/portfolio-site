import { Policy, hash } from './utils';
import { NonceHandler, proxyHandler } from './handlers';
import { securityHeaders } from './config';
import { fetchCss } from './fetch-assets';

export async function handleSecurityHeaders(event, options) {
  const nonce = btoa(crypto.getRandomValues(new Uint32Array(2)));

  const response = await proxyHandler(event, options);

  // If its not an HTML Document Request then just add headers
  // Why? Becuase HTMLRewrite API does not work well with other content types and might break site
  const accept = event.request.headers.get('accept');
  if (accept && accept.indexOf('text/html') === -1) {
    return addSecurityHeaders(response, { nonce });
  }

  const styleHashePromises = [];
  const cssPromises = [];
  const responseBuffer = await new HTMLRewriter()
    .on('script', new NonceHandler(nonce))
    .on('style', new NonceHandler(nonce))
    .on('link', {
      element(element) {
        if (element.hasAttribute('href')) {
          const href = element.getAttribute('href');
          if (/(https?:)?\/\/fonts.googleapis.com\/css\?.*/.test(href)) {
            cssPromises.push({
              url: href,
              css: fetchCss(href, event),
            });
          }
        }
        element.setAttribute('nonce', nonce);
      },
    })
    .on('*', {
      element(element) {
        if (element.hasAttribute('style')) {
          const value = element.getAttribute('style');
          styleHashePromises.push(hash('SHA-256', value));
        }
      },
    })
    .transform(response)
    .arrayBuffer();

  const newResponse = new Response(responseBuffer, response);
  const responseWithHeaders = await addSecurityHeaders(newResponse, {
    nonce,
    styleHashePromises,
  });

  // HACK: until element handler can be async https://github.com/cloudflare/lol-html/issues/28
  const cssTobeInlined = await Promise.all(
    cssPromises.map(async ({ css, url }) => ({
      url,
      css: await css,
    }))
  );

  return new HTMLRewriter()
    .on('link', {
      element(element) {
        if (element.hasAttribute('href')) {
          const href = element.getAttribute('href');
          if (
            /(https?:)?\/\/fonts.googleapis.com\/css\?.*/.test(href) &&
            cssTobeInlined.length > 0
          ) {
            const css = cssTobeInlined.find(({ url }) => url === href);
            if (!css) {
              return;
            }
            element.replace(`<style nonce="${nonce}">${css.css}</style>`, {
              html: true,
            });
          }
        }
      },
    })
    .transform(responseWithHeaders);
}

export async function addSecurityHeaders(
  response,
  { nonce, styleHashePromises = [] }
) {
  let resHeaders = new Headers(response.headers);

  const styleHashes = await Promise.all(styleHashePromises);
  for (const item of securityHeaders) {
    if (typeof item.value !== 'string') {
      const policy = Policy.stringify(item.value, { nonce, styleHashes });
      resHeaders.set(item.name, policy);
    } else {
      resHeaders.set(item.name, item.value);
    }
  }

  return new Response(response.body, {
    headers: resHeaders,
    status: response.status,
    statusText: response.statusText,
  });
}
