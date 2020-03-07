export class Policy {
  static parse(policy) {
    const directives = policy.split(";");
    return directives
      .map(directive => directive.split(/\s/).filter(Boolean))
      .reduce((p, n) => {
        const [name, ...rules] = n;
        return {
          ...p,
          [name]: rules
        };
      }, {});
  }
  static stringify(obj, { nonce } = {}) {
    return Object.keys(obj).reduce((p, key) => {
      const sourceList = obj[key]
        .map(value => {
          if (value === `'nonce'` && nonce) {
            return `'nonce-${nonce}'`;
          }
          return value;
        })
        .join(" ");
      return `${p}${key} ${sourceList}; `;
    }, "");
  }
}
