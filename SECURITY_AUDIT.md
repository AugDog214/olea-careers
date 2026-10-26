# Olea Group recruitment website security audit

Audit date: 2026-10-26. Baseline commit: `367cf932f95b2966901cea7b39256c7bc33fb903`.
Scope: `AugDog214/olea-careers` and its existing recruiting receiver. The separate main brokerage website and all other websites are outside the final scope.
Working branch: `security/olea-audit-2026-10-26`. The owner authorized publication with "pushlive" on 2026-10-26 after reviewing the local audit handoff. Website publication is now authorized through the existing GitHub Pages pipeline. DNS and protected account/security-setting changes remain outside that authorization.

## Baseline recorded before implementation

- **VERIFIED / EXISTING:** Vite 6 and vanilla JavaScript, with GSAP and Lenis. Four HTML routes build to `dist/`. GitHub Actions publishes that directory to GitHub Pages at `careers.myoleagroup.com`.
- **VERIFIED / EXISTING:** GitHub Pages reports HTTPS enforced and an approved certificate expiring 2026-12-19. The site's public DNS CNAME targets GitHub Pages. A normal HTTPS homepage request succeeded.
- **VERIFIED / EXISTING:** Recruiting inquiries go to the existing Google Apps Script receiver, Google Sheets backup, and broker email. The source already includes server validation, HTML escaping, spreadsheet formula escaping, a honeypot, timing checks, quotas, a script lock, duplicate detection, and an explicit postMessage destination. There are no resumes, file uploads, user accounts, or site database.
- **VERIFIED / EXISTING:** GitHub secret scanning and push protection are enabled; the API returned zero open secret-scanning alerts. Default Actions permissions are read-only and workflows cannot approve pull requests.
- **VERIFIED:** No rulesets or `main` branch protection. Dependabot alerts and automated security fixes are disabled. Code scanning returned "no analysis found". These settings remain unchanged.
- **VERIFIED:** The deployment build job inherits `pages: write` and `id-token: write`; its four official Actions use movable version tags. No PR-expression interpolation or untrusted PR deployment trigger was found.
- **VERIFIED:** npm registry advisory metadata matches four locked development/build package names: Vite 6.4.3, PostCSS 8.5.16, nanoid 3.3.15, and source-map-js 1.2.1. This does not establish exploitation of the public static deployment. GSAP 3.15.0 and Lenis 1.3.25 had no matching advisories in the same query.
- **VERIFIED:** `src/js/form.js` copies `window.location.href` into lead email/Sheet data; query strings and fragments can carry unnecessary personal information. The receiver logs raw exception stacks and silently truncates oversized fields.
- **VERIFIED:** The sampled live homepage has no CSP, nosniff, Referrer-Policy, Permissions-Policy, frame-ancestors/X-Frame-Options, or HSTS response header. GitHub Pages does not apply repository `_headers` files. No account-bound CDN header controls were accessed.
- **VERIFIED:** Redacted local pattern review found zero candidates in 137 tracked files and 226 historical text blobs. This is a bounded pattern review, not a full entropy-based scanner or a guarantee that no secrets exist.
- **NOT ASSESSED:** The live Apps Script deployment version, Sheet sharing, account access, retention, quotas, email delivery, and Google account protection. No live recruiting submission was sent.

## Final outcome

**VERIFIED locally:** Four affected build/development package nodes were updated within their existing major versions; native `npm audit` now reports zero known vulnerabilities across 65 locked package nodes. Twelve receiver tests pass. The production build and existing 14-FAQ/schema check pass. All four routes passed browser comparisons at 390, 768, and 1440 pixels. No confirmed public-site XSS, exposed credential, or P0 exploit was established.

This report records the local audit checkpoint before publication. The owner subsequently authorized the website release on 2026-10-26; GitHub's PR/deployment history is the authoritative publication record. The existing Pages pipeline does not deploy Google Apps Script. Receiver changes remain pending owner deployment access; protected repository settings and DNS/CDN work still require separate approval. No live lead submission was sent during verification.

## Architecture, data and boundaries

| Component | Evidence and behavior | Status |
|---|---|---|
| Source | Local original folder `%USERPROFILE%/OneDrive/Desktop/olea-careers`; Git remote `https://github.com/AugDog214/olea-careers.git` | VERIFIED |
| Isolated review tree | `%USERPROFILE%/OneDrive/Documents/Olea group- Agent recruiter site/security-worktrees/olea`; branch `security/olea-audit-2026-10-26` | VERIFIED |
| Frontend | HTML, CSS, vanilla ES modules; GSAP 3.15.0 and Lenis 1.3.25; no account/session/database layer | VERIFIED / EXISTING |
| Build/deploy | `package.json`, `vite.config.js`, `.github/workflows/deploy.yml`; Vite builds four routes into `dist/`; existing GitHub Pages artifact/environment preserved | VERIFIED / EXISTING |
| Domain | `public/CNAME`; public CNAME to `augdog214.github.io`; parent domain uses GoDaddy nameservers. HTTPS request succeeds and an HTTP navigation ends on HTTPS | VERIFIED / EXISTING; browser HTTPS upgrade versus server redirect status chain not independently separated |
| Hosting | GitHub API: Pages `build_type=workflow`, custom domain, HTTPS enforced, approved certificate. Live response identifies GitHub/Fastly/Varnish and public cache TTL 600 seconds | VERIFIED / EXISTING |
| Lead submission | Browser POST in a hidden iframe to the existing Google Apps Script `/exec` URL; Google returns a request-ID/status acknowledgement using `postMessage` | VERIFIED source; Google production execution NOT ASSESSED |
| Data | Name, phone, email; optional brokerage and reason; explicit UTM attribution; page path, timestamps, request ID and delivery status | VERIFIED source |
| Recipients | Existing broker inbox and Google Sheet. No applicant-read/list endpoint is implemented. Sheet identifier stays in Script Properties | VERIFIED source; sharing/account permissions NOT ASSESSED |
| Environment variables | `VITE_GOOGLE_APPS_SCRIPT_URL` and optional `VITE_HEIDY_CALENDAR_URL` are browser-public configuration, not a place for credentials. GitHub stores the existing receiver URL as `GOOGLE_APPS_SCRIPT_URL`; its value was not printed or changed | VERIFIED |
| Integrations | Google Apps Script/Sheets/Mail; external brokerage and social links. No third-party analytics script found in this repository or the sampled live script origins | VERIFIED inventory; external account internals NOT ASSESSED |
| Browser persistence | No application storage/cookie writes found; clean local checks showed empty local/session storage and no site-owned cookie names | VERIFIED for sampled pages; Google-frame cookies NOT ASSESSED |
| Uploads/auth/CORS | No resume or other file upload, custom login, session cookie, private browser API, or user-controlled server URL fetch | NOT APPLICABLE; no such systems added |

The internet-to-receiver boundary accepts untrusted input. The receiver runs with its Google owner's privileges and writes to that owner's mail/Sheet services. Browser validation is convenience; receiver validation remains authoritative. The claimed page URL is not authenticated origin evidence. The repository-to-deployment boundary depends on write access, Actions, dependencies and the Pages environment. One collaborator with the admin role, no deploy keys, and no repository webhooks were returned by the accessible GitHub API. Account MFA, OAuth apps, Google access and all provider-internal protections were not independently audited.

## Security tools discovered and used

See [the complete tool inventory](docs/security/TOOLS.md) for every admitted skill, source commit, exact installation base, integrity results, available but inactive research copies, missing scanner binaries, operational tools and hosted protection status. Seven admitted review skills were applied; all sixteen were integrity-checked. The held helper stayed inactive. No new scanner executable or application dependency was added.

## Findings and disposition

Priorities refer to this site's context. Advisory severity is kept separate from demonstrated public-site exploitability. Missing defense-in-depth controls are not presented as proven compromises.

| ID | Priority / severity | Baseline evidence, impact and disposition |
|---|---|---|
| OG-01 | P1 / upstream high; development/build context | `package-lock.json` pinned Vite 6.4.3, PostCSS 8.5.16, nanoid 3.3.15 and source-map-js 1.2.1. Native baseline audit returned four high affected package nodes. Updated to 6.4.5, 8.5.31, 3.3.20 and 1.2.2; **VERIFIED** native audit now zero, clean install/build succeeds. No package paths or runtime libraries added. These tools are not served as a Vite server by GitHub Pages; live exploitability was not established |
| OG-02 | P2 / medium privacy | Baseline `src/js/form.js:164` copied the full page URL into receiver email/Sheet fields. A crafted landing link could cause incidental query/hash personal details to be retained with an inquiry. Current `src/js/form.js:168` sends origin/path only; `google-apps-script/Code.gs:116` also strips query/hash on direct submissions. Explicit UTM fields remain, capped at 160 characters. **VERIFIED locally** by browser interception and receiver tests |
| OG-03 | P2 / low preventive privacy | Baseline `index.html` form omitted a method, so the native HTML fallback defaults to GET if JavaScript does not intercept submission. This could put form fields into a URL/history. `index.html:614` now explicitly uses POST; normal JS transport is unchanged. The new CSP also prevents native same-site form submission. **VERIFIED** DOM method and intercepted normal submission; no live no-JavaScript submission performed |
| OG-04 | P2 / medium conditional privacy | Baseline `Code.gs:84` put raw provider error messages in delivery status and `:89` logged raw exceptions/stacks. Some provider errors may contain personal data. Current `Code.gs:83` and `:90` keep categorical messages. **VERIFIED locally** using a provider-error fixture containing synthetic private text. Actual historical log contents/disclosure **NOT ASSESSED** |
| OG-05 | P2 / low input hardening | Baseline `Code.gs:94` silently truncated overlong fields before validating. There was no application body-size or duplicate-field check. `Code.gs:95` and `:261` now reject overflow, repeated parameters and bodies above the 64 KiB processing limit; HTML/client lengths match. **VERIFIED locally** at boundaries and negative cases. This is hardening, not a proven memory-safety exploit; Google parses requests before this handler |
| OG-06 | P2 / medium CI defense in depth | Baseline deployment workflow granted the build job Pages/OIDC write permissions and used four movable direct Action tags. Current `.github/workflows/deploy.yml` limits those writes to the deployment job, disables persisted checkout credentials, pins direct Actions to official commits and skips dependency lifecycle scripts. **VERIFIED by local review/build; IMPLEMENTED BUT UNVERIFIED on GitHub.** A compromised build step was a prerequisite, not an observed token leak. The upstream Pages artifact composite still calls `actions/upload-artifact@v4`; direct SHA pins do not freeze all transitive Actions |
| OG-07 | P2 / medium browser defense in depth | Sampled live HTML has none of the requested security response headers. `scripts/security-policy.mjs:3` adds a tested production meta CSP and explicit referrer policy to all four built pages. **VERIFIED locally:** injected inline JavaScript blocked, legitimate scripts/styles/fonts/media and structured data continue to work. **NEEDS APPROVAL / Pending deployment verification:** live policy, Google redirect/iframe compatibility, header-only clickjacking, nosniff, Permissions-Policy and any HSTS setting |
| OG-08 | P2 / medium repository maintenance | GitHub API returned Dependabot alerts/security updates disabled, no rulesets/branch protection, no CodeQL analysis, and default setup `not-configured`. Weekly dependency/Action PR configuration and one advanced security workflow are prepared. **IMPLEMENTED BUT UNVERIFIED** until approved publication/runs. Protected settings remain **NEEDS APPROVAL**; see maintenance instructions |
| OG-09 | P2 / low preventive secret hygiene | Baseline `.gitignore` covered local overrides but not plain `.env` or common private-key files. Added `.env*` exclusions with `.env.example` allowed, plus `*.key`/`*.pem`. **VERIFIED** with `git check-ignore`; no exposed credential was found by the bounded source/history checks |
| OG-10 | P2 / residual spam/availability | `Code.gs:224` enforces global quotas (6/minute, 40/hour, 75/day) plus timing/honeypot/duplicate checks. These are **EXISTING** controls, not proof of bot prevention. Direct callers can forge page/timing fields and consume the global allowance; cache-based minute/hour limits are best effort. **NOT ASSESSED** against production; no load/abuse requests sent. A provider-side bot challenge would need separate account/secret/scope approval if justified by actual abuse |
| OG-11 | Owner review / unresolved privacy authorization | Public system screenshots under `public/assets/facts/` include operational business/listing information. The two system screenshots were visually inspected; they do not expose lead-form records or credentials. Whether every depicted detail is approved for publication is **NOT ASSESSED**. No customer details are reproduced here, and no supplied content was removed or altered |

Selected primary advisory evidence for OG-01: [Vite Windows editor integration](https://github.com/advisories/GHSA-587h-7wmj-h5pm), [PostCSS source-map traversal](https://github.com/advisories/GHSA-r28c-9q8g-f849), [nanoid generator bounds](https://github.com/advisories/GHSA-2v37-7h3g-55p8), and [source-map-js indexed-map denial of service](https://github.com/advisories/GHSA-68fv-2mgg-jv7q). Full native results were retained locally. Attacker-controlled CSS/source maps, generator arguments, or reachable development tooling are prerequisites for these classes; no production exploit was attempted.

## Web and API coverage

| OWASP web category | Result |
|---|---|
| A01 Access control | Public pages intentionally public; receiver has no lead-read endpoint. Google Sheet/account access NOT ASSESSED |
| A02 Cryptography | EXISTING HTTPS enforced and certificate approved. Provider encryption-at-rest/account configuration NOT ASSESSED |
| A03 Injection | No confirmed attacker-controlled DOM XSS path. Static quote/calculator HTML sinks use repository-controlled text/templates. Form status uses textContent, hidden inputs use value, email HTML is escaped, spreadsheet formula prefixes are neutralized; local tests pass |
| A04 Insecure design | Spam/global-quota exhaustion remains a residual risk; no unnecessary login/backend invented |
| A05 Misconfiguration | Local CSP/referrer/input/secret-ignore changes verified; actual header-only controls remain pending |
| A06 Vulnerable components | Four known affected build package nodes to zero matching native audit results |
| A07 Authentication | NOT APPLICABLE to website visitor flows; owner/provider account protection NOT ASSESSED |
| A08 Integrity | Direct Actions pinned and permissions narrowed; branch rules and transitive Action trust remain owner/maintenance work |
| A09 Logging/monitoring | Explicit receiver error logs minimized; historic provider logs, retention and alert handling NOT ASSESSED |
| A10 SSRF | NOT APPLICABLE: no user-selected URL is fetched server-side |

| OWASP API category | Existing receiver result |
|---|---|
| API1 object authorization, API2 authentication, API5 function authorization | No user/session/object-read/admin HTTP APIs in source; NOT APPLICABLE to this public inquiry endpoint. Owner-account authorization remains a provider responsibility |
| API3 object properties | Explicit parsed fields, fixed mail recipient, acknowledgement contains request ID/status rather than applicant records; no arbitrary model assignment |
| API4 resource consumption | Local body/field bounds added; existing global quotas retained; deliberate quota consumption remains unresolved |
| API6 business-flow abuse | Honeypot/timing/duplicate checks retained; they are bypassable signals, not authenticated bot protection |
| API7 SSRF | No user-driven server URL fetch; NOT APPLICABLE |
| API8 misconfiguration | Error privacy/bounds improved; Apps Script hosting settings and live version NOT ASSESSED |
| API9 inventory | Source exposes `doGet` health text and `doPost` inquiry handling; live deployment/version mapping requires owner confirmation |
| API10 unsafe consumption | Mail/Sheet exceptions handled with generic output; provider service contracts mocked locally; no live service/inbox/Sheet test performed |

Pattern concerns rejected after tracing: the trusted quote/calculator `innerHTML` operations do not establish DOM XSS; public CORS `*` for static assets is not credentialed API access; absence of visitor authentication is intentional; the browser-public Apps Script URL is not an authentication secret. No discovered credential was used or validated.

## Tests, limits and remaining approvals

See [SECURITY_IMPROVEMENTS.md](SECURITY_IMPROVEMENTS.md) for exact changes and fresh tests, and [SECURITY_MAINTENANCE.md](SECURITY_MAINTENANCE.md) for owner actions. Local receiver mocks cannot verify Google's actual mail delivery, sharing, retention, consent/account configuration or iframe redirect chain. The mocked iframe test produced the existing Chrome warning about `allow-scripts` plus `allow-same-origin` on the initial blank frame; the real Google frame is cross-origin, and those flags were deliberately preserved for compatibility. No application console errors appeared during normal route checks. The intentional CSP-negative test generated an expected blocked-script error.

There is no local CodeQL, Gitleaks, entropy scanner, Actionlint or zizmor result. The new GitHub workflow was reviewed statically, not executed; Linux/Node 22 behavior and GitHub-hosted CodeQL are **IMPLEMENTED BUT UNVERIFIED**. This assessment does not certify the site free of vulnerabilities.
