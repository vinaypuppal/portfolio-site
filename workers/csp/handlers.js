import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export class NonceHandler {
  constructor(nonce) {
    this.nonce = nonce;
  }
  element(element) {
    element.setAttribute('nonce', this.nonce);
  }
}

export async function proxyHandler(event, options = {}) {
  const request = event.request;
  const url = new URL(request.url);

  if (
    event.request.method === 'GET' &&
    url.pathname.startsWith('/fonts.gstatic.com/')
  ) {
    return proxyGoggleFonts(`https:/${url.pathname}${url.search}`, request);
  }

  return getAssetFromKV(event, {
    ...options,
    cacheControl: request => {
      const accept = request.headers.get('accept');
      const url = new URL(request.url);
      if (
        accept &&
        accept.indexOf('text/html') === -1 &&
        url.pathname.startsWith('/_next')
      ) {
        return { browserTTL: 31536000 };
      }
      return {};
    },
  });
}

async function proxyGoggleFonts(url, request) {
  let init = {
    method: request.method,
    headers: {},
  };

  const proxyHeaders = [
    'Accept',
    'Accept-Encoding',
    'Accept-Language',
    'Referer',
    'User-Agent',
  ];

  for (let name of proxyHeaders) {
    let value = request.headers.get(name);
    if (value) {
      init.headers[name] = value;
    }
  }
  const clientAddr = request.headers.get('cf-connecting-ip');
  if (clientAddr) {
    init.headers['X-Forwarded-For'] = clientAddr;
  }

  // Only include a strict subset of response headers
  const response = await fetch(url, init);
  if (response) {
    const responseHeaders = [
      'Content-Type',
      'Cache-Control',
      'Expires',
      'Accept-Ranges',
      'Date',
      'Last-Modified',
      'ETag',
    ];
    let responseInit = {
      status: response.status,
      statusText: response.statusText,
      headers: {},
    };
    for (let name of responseHeaders) {
      let value = response.headers.get(name);
      if (value) {
        responseInit.headers[name] = value;
      }
    }
    const newResponse = new Response(response.body, responseInit);
    return newResponse;
  }

  return response;
}
