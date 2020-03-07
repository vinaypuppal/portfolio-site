import { getCacheKey } from './utils';

// In-memory cache for high-traffic sites
const FONT_CACHE = {};
/**
 * Fetch the font css from Google using the same browser user-agent string to make sure the
 * correct CSS is returned and rewrite the font URLs to proxy them through the worker (on
 * the same origin to avoid a new connection).
 */
export async function fetchCss(url, event) {
  if (url.startsWith('/')) {
    url = 'https:' + url;
  }

  const request = event.request;
  const userAgent = request.headers.get('user-agent');
  const clientAddr = request.headers.get('cf-connecting-ip');
  const browser = userAgent ? getCacheKey(userAgent) : null;
  const cacheKey = browser ? `${url}&${browser}` : url;
  const cacheKeyRequest = new Request(cacheKey);
  if (cacheKey in FONT_CACHE) {
    // hit in the memory cache
    return FONT_CACHE[cacheKey];
  }

  if (caches.default) {
    try {
      // check in cache API
      const cache = caches.default;
      const response = await cache.match(cacheKeyRequest);
      if (response) {
        return await response.text();
      }
    } catch (error) {
      console.log(error);
    }
  }

  try {
    // fetch from origin
    const headers = new Headers();
    headers.set(
      'User-Agent',
      browser
        ? userAgent
        : `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)`
    );
    headers.set('Referer', request.url);
    if (clientAddr) {
      headers.set('X-Forwarded-For', clientAddr);
    }
    const response = await fetch(url, {
      headers,
    });

    if (response && response.status === 200) {
      const css = await response.text();

      // Rewrite all of the font URLs to come through the worker
      const fontCSS = css.replace(
        /(https?:)?\/\/fonts\.gstatic\.com\//gim,
        '/fonts.gstatic.com/'
      );

      // Add the css info to the in-memory font caches
      FONT_CACHE[cacheKey] = fontCSS;
      try {
        // Add the css info to the cache API
        if (caches.default) {
          const cache = caches.default;
          const cacheResponse = new Response(fontCSS, { ttl: 86400 });
          event.waitUntil(cache.put(cacheKeyRequest, cacheResponse));
        }
      } catch (error) {
        console.log(error);
      }

      return fontCSS;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
}
