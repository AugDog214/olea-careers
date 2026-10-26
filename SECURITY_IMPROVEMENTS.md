# Olea Group security improvements

Date: 2026-10-26. Branch: `security/olea-audit-2026-10-26`, based on `367cf932f95b2966901cea7b39256c7bc33fb903`. Tests below record the pre-publication audit checkpoint. The owner subsequently authorized website publication with "pushlive"; the release proceeds through a reviewed PR and the existing Pages pipeline. Google Apps Script deployment remains separate and pending owner access. No production-secret, DNS or protected account-setting change is included.

## What changed

| Files | Change and reason | Status |
|---|---|---|
| `package.json`, `package-lock.json` | Vite 6.4.3 → 6.4.5, PostCSS 8.5.16 → 8.5.31, nanoid 3.3.15 → 3.3.20, source-map-js 1.2.1 → 1.2.2; all within existing major versions. No new package paths. Added a native test command | VERIFIED locally |
| `src/js/form.js`, `index.html` | Match field length limits, cap explicit attribution, omit incidental query/hash data, and specify native POST fallback. Existing copy, values, transport, destinations and failure input retention preserved | VERIFIED locally |
| `google-apps-script/Code.gs` | Reject oversized/repeated fields and oversized bodies; independently remove URL query/hash; keep errors categorical. Existing mail/Sheet destinations, HTML/formula escaping, lock, quotas, honeypot, timing and duplicate behavior retained | VERIFIED with service mocks; live update Pending deployment verification |
| `scripts/security-policy.mjs`, `vite.config.js` | Inject production-only meta CSP/referrer controls into all four routes. Scripts are self-hosted; inline/eval scripts prohibited. Inline styles remain permitted for existing GSAP/authored styles. Google origins are allowed only for the existing form/frame transport | VERIFIED locally; live policy/Google integration Pending deployment verification |
| `.github/workflows/deploy.yml` | Move Pages/OIDC writes to deployment job; checkout credentials not persisted; direct Actions pinned; install scripts disabled; add tests/FAQ verification and timeouts | Source review and analogous local checks VERIFIED; GitHub run IMPLEMENTED BUT UNVERIFIED |
| `.github/workflows/security.yml` | One non-deploying workflow: PR/scheduled/manual tests, build and native npm audit; JavaScript/TypeScript and Actions CodeQL jobs. Push builds remain in the existing deployment workflow to avoid a duplicate security build | IMPLEMENTED BUT UNVERIFIED on GitHub |
| `.github/dependabot.yml` | Weekly npm and Action update PRs; npm major-version PRs excluded. No automatic merge. Does not itself enable disabled Dependabot security-alert settings | IMPLEMENTED BUT UNVERIFIED until published |
| `.gitignore` | Ignore env/private-key files; keep the non-secret example tracked | VERIFIED |
| `scripts/security.test.mjs` | Twelve native Node tests run the actual receiver source with local mail/Sheet/cache/property/lock fakes | VERIFIED |
| `SECURITY_AUDIT.md`, this report, `SECURITY_MAINTENANCE.md`, `docs/security/TOOLS.md`, `docs/security/HEADERS.md` | Findings, evidence, exact installed-tool inventory, deployment limits and maintenance instructions | VERIFIED documentation |

## Verification performed

| Check | Result |
|---|---|
| Baseline production build | VERIFIED: existing Vite 6.4.3 build succeeds in the isolated tree |
| Existing FAQ check before and after | VERIFIED: 14 static FAQs, English/Spanish entries and exact JSON-LD parity |
| Clean dependency install | VERIFIED: existing project dependencies installed from local npm cache with `npm ci --ignore-scripts --offline --no-audit --no-fund`; no dependency lifecycle scripts executed |
| Receiver tests | VERIFIED: 12/12 pass; valid delivery, duplicate handling, URL minimization, all field boundaries, duplicate/body bounds, invalid fields/origins/timing, honeypot, formula escaping, email HTML/subject safety, error privacy, minute quota and safe response-script encoding |
| Updated production build | VERIFIED: Vite 6.4.5 builds all four routes |
| Native npm audit | VERIFIED: exact baseline lock 4 high affected package nodes; updated lock 0 total known vulnerabilities. Initial network errors were superseded by successful native baseline and updated scans |
| Independent npm registry bulk advisory query | VERIFIED: baseline 4 affected package names; updated exact versions 0. Only public package names/versions sent |
| Browser route comparisons | VERIFIED: all 4 routes × 3 widths (390, 768, 1440) preserve title/meta/canonical/hreflang/structured data, headings and link attributes; no new console errors, horizontal overflow, broken local fragments or browser storage |
| Visual review | VERIFIED: before/after desktop and mobile screenshots inspected; CSS outputs are byte-identical. Hero video frame time differs naturally; design/assets/animations unchanged |
| Native mobile interactions | VERIFIED in Chromium: mobile menu opens, Escape closes it; English/Spanish homepage and hub toggle work; FAQ count remains 14 |
| Form browser checks | VERIFIED: 14 assertions in an isolated mock build; no real submissions. Invalid/oversized/honeypot inputs blocked, payload minimized, UTM preserved/bounded, correct destination retained, wrong origins/IDs ignored, success resets, failure retains input, transport cleans up, native method POST |
| Unconfigured form | VERIFIED: existing phone fallback status, retained input and zero outbound submissions |
| CSP-negative fixture | VERIFIED: inline injected script blocked and violation observed; legitimate motion and JSON-LD still work. No attack against a live target |
| Local links/resources | VERIFIED: 139 same-site references across four HTML routes resolve; no missing files/fragments. External brokerage/social URLs and rel protections preserved |
| Public artifacts | VERIFIED: no generated source maps, environment/private-key files, receiver `.gs`, package lock, or agent instructions in `dist/` |
| Secrets review | VERIFIED bounded local pattern review; baseline 137 tracked files and 226 historical text blobs, zero candidates. Final tree: 146 tracked/new files, 56 eligible UTF-8 text files, zero high-confidence provider-token/private-key/credential-URL candidates; no secret values printed |
| GitHub settings | VERIFIED using authenticated GET-only APIs; settings/alerts evidence in audit report. No new CodeQL analysis, protected settings or deployed headers claimed |
| Git whitespace | VERIFIED: `git diff --check` passes |

No real applicant information was used. Browser transport was intercepted before native submission, and Google services were represented by in-memory test fakes. External account settings, social-account ownership and all external destination internals were not tested. Google receiver compatibility, production CSP/headers, Linux CI/Node 22 and CodeQL results are **Pending deployment verification**.

## Security-focused change review

**Recommendation: CONDITIONAL for publication**, subject to explicit owner approval and the staged checks in the maintenance guide. No confirmed new security regression was found in the reviewed local change. This is not authorization to publish.

The receiver's parsing and error path are the highest-risk changes because every inquiry passes through them. `parseLead_` has one production caller (`doPost`); `field_` has thirteen bounded-field call sites. New rejection paths occur before any write/email. Accepted ordinary inquiries, source/destinations, escaped output, quotas, lock release, success acknowledgements and failure input retention are covered by tests. Oversized submissions now fail rather than silently alter submitted values; browser limits prevent ordinary users reaching those rejections.

History was inspected with `git show`, `git blame` and `git log`. Receiver validation/error handling originates in `cdcff926`; later confirmation-origin fixes (`7680839`, `a36efe8`) and email-subject behavior (`f8770b9`) were preserved. The Google sandbox flags and variable wrapper-depth handling were not tightened blindly.

The CSP build hook affects all four output pages. It does not run for the development server, and production policy contains no development exceptions. Metadata, CSS and browser comparisons cover its visible blast radius. Google redirects have not been exercised; that remains the principal integration coverage gap before publishing.

Deployment logic still publishes the same `dist/` artifact through the same Pages environment on the same triggers/domain. All direct Action commit references were resolved from official repositories. `upload-pages-artifact` internally uses a movable `upload-artifact@v4` reference, so this change does not claim complete transitive supply-chain pinning. GitHub workflow execution, schema validation by GitHub and Linux optional-binary behavior cannot be proven from the Windows-only local run.

The original working directory changed during discovery; this audit preserved it and made its own changes in the isolated worktree. Compare/reconcile any other local branch before publication. No files in another website were modified by this work.
