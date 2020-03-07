export class Policy {
  static parse(policy) {
    const directives = policy.split(';');
    return directives
      .map(directive => directive.split(/\s/).filter(Boolean))
      .reduce((p, n) => {
        const [name, ...rules] = n;
        return {
          ...p,
          [name]: rules,
        };
      }, {});
  }
  static stringify(obj, { nonce, styleHashes } = {}) {
    return Object.keys(obj).reduce((p, key) => {
      const sourceList = obj[key]
        .map(value => {
          if (value === `'nonce'` && nonce) {
            return `'nonce-${nonce}'`;
          }
          if (
            key === 'style-src-attr' &&
            value === `'inline-hash'` &&
            styleHashes
          ) {
            return styleHashes.map(hash => `'sha256-${hash}'`).join(' ');
          }
          return value;
        })
        .join(' ');
      return `${p}${key} ${sourceList}; `;
    }, '');
  }
}

export async function hash(algo, text) {
  const buff = await crypto.subtle.digest(algo, new TextEncoder().encode(text));
  return btoa(
    new Uint8Array(buff).reduce((s, b) => s + String.fromCharCode(b), '')
  );
}

/**
 * Identify the common browsers (and versions) for using browser-specific css.
 * Others will use a common fallback css fetched without a user agent string (ttf).
 *
 * @param {*} userAgent - Browser user agent string
 * @returns {*} A browser-version-specific string like Chrome61
 */
export function getCacheKey(userAgent) {
  let os = '';
  const osRegex = /^[^(]*\(\s*(\w+)/gim;
  let match = osRegex.exec(userAgent);
  if (match) {
    os = match[1];
  }

  let mobile = '';
  if (userAgent.match(/Mobile/gim)) {
    mobile = 'Mobile';
  }

  // Detect Edge first since it includes Chrome and Safari
  const edgeRegex = /\s+Edge\/(\d+)/gim;
  match = edgeRegex.exec(userAgent);
  if (match) {
    return 'Edge' + match[1] + os + mobile;
  }

  // Detect Chrome next (and browsers using the Chrome UA/engine)
  const chromeRegex = /\s+Chrome\/(\d+)/gim;
  match = chromeRegex.exec(userAgent);
  if (match) {
    return 'Chrome' + match[1] + os + mobile;
  }

  // Detect Safari and Webview next
  const webkitRegex = /\s+AppleWebKit\/(\d+)/gim;
  match = webkitRegex.exec(userAgent.match);
  if (match) {
    return 'WebKit' + match[1] + os + mobile;
  }

  // Detect Firefox
  const firefoxRegex = /\s+Firefox\/(\d+)/gim;
  match = firefoxRegex.exec(userAgent);
  if (match) {
    return 'Firefox' + match[1] + os + mobile;
  }

  return null;
}
