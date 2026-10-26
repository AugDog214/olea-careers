# Olea header deployment proposal

**NEEDS APPROVAL.** No hosting/DNS/CDN rule was changed. GitHub Pages is the actual host and does not offer repository-controlled custom response headers. Adding `_headers`, Netlify or Vercel configuration would not activate headers on this deployment.

## What is implemented locally

`scripts/security-policy.mjs` emits the following enforced **meta** CSP into production HTML before scripts/resources:

```text
default-src 'self'; base-uri 'none'; object-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; media-src 'self'; connect-src 'self'; frame-src https://script.google.com https://script.googleusercontent.com https://*.googleusercontent.com; form-action https://script.google.com https://script.googleusercontent.com https://*.googleusercontent.com
```

Inline CSS is necessary for the existing authored styles and animation behavior; inline/eval JavaScript is not allowed. Self-hosted fonts/media and bundled scripts work in the local browser checks. The Google wildcard is confined to frame/form destinations because Apps Script uses variable `*-script.googleusercontent.com` wrapper hosts. It is not a script-source wildcard. No external analytics/font/image execution origins were added speculatively.

An explicit `strict-origin-when-cross-origin` referrer meta policy is also emitted. [MDN documents the supported meta mechanisms](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv); meta CSP cannot implement report-only mode, frame-ancestors, nosniff, Permissions-Policy or HSTS. No frame-busting JavaScript is substituted for a real clickjacking header.

## If an approved edge/CDN is later available

Scope any rules to **`careers.myoleagroup.com` only**. Start additional CSP restrictions in `Content-Security-Policy-Report-Only` and inspect browser violations using synthetic, approved staging data. Do not remove required Google frame/form sources. Meta CSP will continue to enforce its existing allowlist while the new header is being evaluated; header and meta policies both apply, rather than one replacing the other.

Candidate header values to review at that time:

| Header | Proposed value / condition |
|---|---|
| `X-Content-Type-Options` | `nosniff` after confirming production MIME types |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=()`; this recruiting page does not require these browser features |
| `X-Frame-Options` | `DENY`, after confirming no legitimate site embedding requirement |
| `Content-Security-Policy-Report-Only` | The tested policy above plus `frame-ancestors 'none'`; later promote to enforcing header after compatibility review |
| `Strict-Transport-Security` | Optional staged `max-age=300` only after owner validates HTTPS/certificate renewal and redirects across this hostname. Increase gradually after observation. No `includeSubDomains` or preload proposed |
| Caching | Keep public static assets/pages publicly cacheable. Do not blanket-set `no-store` for public media. No private applicant responses are served by GitHub Pages |

No report collector was created. Report-only observations can be reviewed in DevTools; adding an external collector would require a separate privacy/destination review. Never transmit form bodies or personal information in CSP reports or monitoring URLs.

## Cloudflare free-plan evaluation

Cloudflare is optional. Its [Transform Rules documentation](https://developers.cloudflare.com/rules/transform/) currently lists free-plan availability with 10 active rules and requires proxied DNS records. A single hostname-scoped response-header rule could supply the missing headers. Its [WAF availability table](https://developers.cloudflare.com/waf/) lists a free managed ruleset, custom rules and a limited rate-limit rule; paid features should not be assumed active or necessary.

No Cloudflare proxy was observed in this site's DNS/response chain. Domain DNS currently uses GoDaddy and directly points careers to GitHub Pages. A free-plan adoption could involve nameserver/account work affecting brokerage/mail records beyond this site's scope. It needs a separate reviewed migration plan and explicit approval, not an automatic step in hardening.

Proxying the static site would **not protect direct requests to the separate Google Apps Script receiver**. A WAF on the careers hostname cannot solve that receiver's spam/quota risk. Any bot challenge would need Google-side verification and approved account/secrets/scopes. No service or permission expansion is included here.
