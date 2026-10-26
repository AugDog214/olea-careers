// GitHub Pages cannot set custom response headers. Apply supported meta controls
// to production HTML; header-only controls remain an owner/CDN action.
export const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'none'",
  "object-src 'none'",
  "script-src 'self'",
  // Existing GSAP animations and authored style attributes require inline CSS.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self'",
  // Apps Script's existing iframe transport redirects into Google's wrapper.
  'frame-src https://script.google.com https://script.googleusercontent.com https://*.googleusercontent.com',
  'form-action https://script.google.com https://script.googleusercontent.com https://*.googleusercontent.com',
].join('; ');

export function securityMeta() {
  return {
    name: 'olea-security-meta',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler() {
        return [
          { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: contentSecurityPolicy }, injectTo: 'head-prepend' },
          { tag: 'meta', attrs: { name: 'referrer', content: 'strict-origin-when-cross-origin' }, injectTo: 'head-prepend' },
        ];
      },
    },
  };
}
