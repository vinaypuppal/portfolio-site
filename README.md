# Preact example

This is a fully working example of Next.js 9.3 running on [Preact](https://github.com/preactjs/preact) instead of React.

This reduces the base JavaScript weight of pages to 21kB.

> 🔭 In the future, this can be even smaller with some additional Webpack optimizations.

## How to use

Clone this repo and run `npm install`:

```sh
git clone git@github.com:developit/nextjs-preact-demo
cd nextjs-preact-demo
npm install

npm run build
```

## How does it work?

The example takes advantage of npm/yarn aliases, which essentially allow installing `preact/compat` at `node_modules/react`.

Here's how this example repo was set up:

- Set up a basic Next.js app using `create-next-app`
- Install `preact`, uninstall `react` and `react-dom`.
- Install [preact-compat/react](https://github.com/preact-compat/react) and [preact-compat/react-dom](https://github.com/preact-compat/react-dom) for aliasing.
- Use an [npm alias](https://github.com/npm/rfcs/blob/latest/implemented/0001-package-aliases.md#detailed-explanation) to replace `react-ssr-prepass` with `preact-ssr-prepass` (also [works](https://twitter.com/sebmck/status/873958247304232961) with Yarn).

# Reports

1. CSP (via `report-uri`)

```
{
    "csp-report": {
        "document-uri": "https://cinspector.glitch.me/",
        "referrer": "",
        "violated-directive": "style-src-elem",
        "effective-directive": "style-src-elem",
        "original-policy": "default-src * data:; script-src 'self' https://unpkg.com https://cdnjs.cloudflare.com; style-src 'self'; report-uri https://cinspector.glitch.me/violations;",
        "disposition": "enforce",
        "blocked-uri": "https://unpkg.com/tailwindcss@1.2.0/dist/tailwind.min.css",
        "line-number": 19,
        "source-file": "https://cinspector.glitch.me/",
        "status-code": 0,
        "script-sample": ""
      }
}
```
Check this for explanation about properties `https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#Violation_report_syntax`

2. CSP (via `Report-To`)
It queues these violations and sends them after a delay/in-batch and each object has age which is The number of milliseconds between report’s timestamp and the current time
```
{
  "type": "csp",
  "age": 10,
  "url": "https://example.com/vulnerable-page/",
  "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
  "body": {
    "blocked": "https://evil.com/evil.js",
    "directive": "script-src",
    "policy": "script-src 'self'; object-src 'none'",
    "status": 200,
    "referrer": "https://evil.com/"
  }
}
```
