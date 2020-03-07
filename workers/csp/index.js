import { Policy } from "./utils";

// This should come from KV store
const securityHeaders = [
  {
    name: "strict-transport-security",
    value: "max-age=63072000; includeSubdomains; preload"
  },
  {
    name: "content-security-policy",
    value: {
      "default-src": [`'self'`],
      "script-src": [
        `'self'`,
        `'unsafe-inline'`,
        `https:`,
        `'report-sample'`,
        `'strict-dynamic'`,
        `'nonce'`
      ],
      "style-src": [
        `'self'`,
        `'unsafe-inline'`,
        `https:`,
        `'report-sample'`,
        `'strict-dynamic'`,
        `'nonce'`
      ],
      "base-uri": [`'none'`],
      "object-src": [`'none'`],
      "frame-ancestors": [`'none'`],
      "form-action": [`'self'`],
      "report-uri": [`https://aws-csp-test.glitch.me/violations`]
    }
  },
  {
    name: "feature-policy",
    value: {
      accelerometer: ["'none'"],
      camera: ["'none'"],
      geolocation: ["'none'"],
      gyroscope: ["'none'"],
      magnetometer: ["'none'"],
      microphone: ["'none'"],
      payment: ["'none'"],
      usb: ["'none'"]
    }
  },
  { name: "X-Content-Type-Options", value: "nosniff" },
  { name: "X-Frame-Options", value: "DENY" },
  { name: "X-XSS-Protection", value: "1; mode=block" },
  { name: "Referrer-Policy", value: "same-origin" }
];

export class NonceHandler {
  constructor(nonce) {
    this.nonce = nonce;
  }
  element(element) {
    element.setAttribute("nonce", this.nonce);
  }
}

export function addSecurityHeaders(response, nonce) {
  let resHeaders = response.headers;

  for (const item of securityHeaders) {
    if (typeof item.value !== "string") {
      const policy = Policy.stringify(item.value, { nonce });
      resHeaders.set(item.name, policy);
    } else {
      resHeaders.set(item.name, item.value);
    }
  }

  return new Response(response.body, {
    headers: resHeaders,
    status: response.status,
    statusText: response.statusText
  });
}
