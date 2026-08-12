# HANDOFF — Olea Careers site

Paste this whole file into a new chat to pick the project up cold.

---

## 1. What this is

A single-page **agent-recruitment site** for **The Olea Group Real Estate & Construction, LLC** (Broker/Owner **Heidy Olea**, Cape Coral / Fort Myers, SWFL).

**Its only job:** convert experienced licensed agents into booking a confidential chat with Heidy. It is not a brand site, not a home-search site, not a lead-gen site for buyers. The main site (myoleagroup.com, on Lofty) owns buyer/seller. This subdomain owns recruiting. No page targets both — that anti-cannibalization rule is a hard design constraint, not a preference.

Built July 2026 across a 9-phase plan (Phase 0 setup → Phase 8 QA/handoff). All phases complete. The current local revision incorporates Heidy's July 17 service-model feedback and has not been pushed live.

---

## 2. Where the code is

| | |
|---|---|
| **Local** | `C:/Users/apirr/OneDrive/Desktop/olea-careers/` |
| **Repo** | `AugDog214/olea-careers` (https://github.com/AugDog214/olea-careers.git) |
| **Live (temp)** | https://augdog214.github.io/olea-careers/ |
| **Live (final)** | https://careers.myoleagroup.com — pending content/integration approval and DNS |
| **Deploy** | GitHub Actions → GitHub Pages, auto on every push to `main` |
| **Git state** | Local `main` is intentionally ahead of `origin/main`; do not push without August's approval. Use `git status` and `git log -3` for the current commit. |

**Stack:** Vite 6 + vanilla JS (no React, no Tailwind — deliberate), GSAP + ScrollTrigger + Lenis, forms → Google Apps Script → Gmail + Google Sheets backup. Lofty CRM remains an optional later integration. ~3,200 lines across 10 source files. Runtime is self-hosted except for form submission.

### File map

```
index.html               545 lines · 7 sections, one h1, JSON-LD @graph, meta/OG, font preloads
src/main.js               70 · wiring + header condense + stats-hide + melt-CTA visibility
src/js/i18n.js           279 · EN/ES string map, setLang/currentLang/onLangChange
src/js/motion.js         244 · all GSAP/Lenis; reduced-motion early-return at the top
src/js/calculator.js     129 · split comparison; exact monthly/transaction fees stay null until confirmed
src/js/form.js           129 · validation, UTM capture, honeypot, response-confirmed Apps Script transport
src/js/nav.js             47 · mobile menu + MyOleaGroup.com dropdown
src/styles/tokens.css     87 · palette, fluid type scale, 8px spacing, glass vars, easings
src/styles/base.css      583 · reset, type roles, glass header, CTAs, reduced-motion kill-switch
src/styles/sections.css 1115 · every section's layout, including open MLS logo row
public/fonts/            Season Serif (TRIAL) + Montserrat (variable) + League Spartan, woff2
public/                  CNAME.hold, robots.txt, sitemap.xml, llms.txt, favicon, assets/
.github/workflows/deploy.yml
DECISIONS.md             LOCKED / OPEN / CUT tracker
GO-LIVE-CHECKLIST.md     every human step, in priority order
REVISION-PROMPT.md
```

### The 7 sections, in psychological order

hero → offer → edge → proof → included → faq → contact

Order is load-bearing. The commission model gets attention; the decision layer is independence with practical access, bilingual reach, clear broker/compliance review, and optional paid services. Do not restore the removed inventory or unlimited-support claims.

---

## 3. Design law (violating these = redo the work)

These came from August's `anti-slop-design/RULES.md` + `august-system/SKILL.md`. **Read both before touching design:** see memory `august_operating_rules.md` for their paths.

- **NO content boxes.** Open editorial surface, eXp-style. No cards, no rounded containers around copy. (When the build plan said "two cards" for The Edge, the no-boxes law won → open numbered blocks.)
- **Glass/backdrop-filter ONLY** on the header bar and the sticky CTA. Nowhere else.
- **Exact brand hexes only.** No invented colors — an error state once got a salmon `#ffb3a7` and it was ripped out for white + weight. The CTA yellow `#ECC72B` is sampled from the real moving-truck lettering.
- One icon set. One bold moment. 8px grid. Sentence case. Real content only.
- `prefers-reduced-motion` disables **all** motion, and every piece of content works without JS.

### Palette — sampled from real logo pixels, not from the brief

```
--royal: #15489F   --sky: #2499D5   --cyan: #3DC5F3
--navy:  #0A1A3A (derived)   --yellow: #ECC72B (truck artwork)
--ice:   #C3E0E5             --white                    --ink: #0B0B0F
```
⚠️ The original brief specified `#013CA4`. **That was wrong** — sampling the logo proved it. Don't "restore" it.

### Type — one job each

- **The Seasons / Season Serif** — display only ⚠️ currently **TRIAL** files
- **League Spartan** — labels, stats
- **Montserrat** — body (variable font; same gstatic file across weights)

---

## 4. Honesty guardrails (non-negotiable, Heidy's reputation is on the line)

- **Never headline or promise leads.** Qualified leads may be a paid option; volume is never included or guaranteed.
- **No fee number published on the page.** The calculator config uses `null` for both amounts until Heidy confirms them and cannot render invented savings.
- **Testimonials do not render until real approved quotes, names, and photos exist.**
- Included oversight is **broker & compliance review**, not unlimited support. CRM, leads, and one-on-one mentorship are optional.
- **Every missing asset is flagged `<!-- REPLACE -->`** in the code. No silently-shipped stock photos.
- No home-search/IDX. No off-site CTA links.

---

## 5. The two configurations that must change before launch

```js
// src/js/calculator.js
const FEE_MODEL = {
  monthlyAmount: null,
  perTransactionAmount: null,
  monthsPerYear: 12,
};

// src/js/form.js
const FORM_ENDPOINT = (import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || '').trim();
```

Form payload (this is the contract the Google Apps Script receiver validates):
```
requestId, name, phone, email, currentBrokerage, reason,
source: 'Agent Recruiting',
utm_source, utm_campaign, utm_content, pageUrl, submittedAt, formStartedAt
```
The GitHub Actions workflow reads the endpoint from the `GOOGLE_APPS_SCRIPT_URL` repository secret. The Apps Script hardcodes `theoleagroup@gmail.com` as the recipient, records a Google Sheets backup, and confirms success back to the browser. Setup files and exact human steps live in `google-apps-script/`.

---

## 6. The DNS switch (do this first, it's one record)

**GoDaddy → DNS for myoleagroup.com → add ONE record:**
`Type: CNAME · Host: careers · Value: augdog214.github.io · TTL: default`

Purely additive. The root `@` and `www` records stay pointed at Lofty — this cannot break the main site.

**Then, in the repo (2 changes):**
1. Delete the `env: VITE_BASE: /olea-careers/` lines from `.github/workflows/deploy.yml`
2. `git mv CNAME.hold public/CNAME`
3. Push → Settings → Pages → verify domain → tick **Enforce HTTPS** once the cert issues

(`vite.config.js` reads `base: process.env.VITE_BASE || '/'`, so removing the env line is all it takes to go root-relative.)

---

## 7. What's next — human steps only, priority order

Full detail in `GO-LIVE-CHECKLIST.md`.

1. **Buy the Season Serif webfont license** (VJ Type) — TRIAL files are live right now. **Legal blocker for real launch.** Drop licensed files into `public/fonts/` with the same names.
2. **Real monthly and transaction fees from Heidy** → `calculator.js`.
3. **Google Apps Script deployment** → follow `google-apps-script/SETUP.md`, then add the production `/exec` URL as GitHub secret `GOOGLE_APPS_SCRIPT_URL`. Confirm both the inbox email and Sheet row with one test submission. Lofty can be connected later.
4. **Confirm Heidy's exact MLS memberships.** Visible labels use verified names: Stellar MLS, MIAMI REALTORS, and Florida Gulf Coast MLS. The third mark is Royal Palm Coast Realtor Association from the official SWFL Matrix login.
5. **Real assets** — hero photo, edge photos, 3 offer-deck photos, Heidy headshot, 4 culture photos, tools backdrop, real testimonials, production stats, 1200×630 og-image, white/knockout logo, office address + email.
6. **GoDaddy CNAME** after launch approval (§6 above).
7. **Lofty-side launch** — repoint the Careers nav link from the external licensing school → the subdomain; trim the homepage recruiting block to a teaser.
8. **Search Console** — add `careers.myoleagroup.com` as its own property and submit the sitemap.
9. Optional: GBP "hiring experienced agents" post linking to the subdomain.

Two nice automatic behaviors: the **stats row hides itself** while values are `—` placeholders (hollow dashes are worse than absence) and **count-up animation activates by itself** the moment real numbers land.

---

## 8. Known state / gotchas for the next session

- **Never edit files with PowerShell `-replace`.** It corrupted `index.html`'s encoding once (em-dashes → `â€”`) and cost a recovery round-trip. Use the Edit tool.
- **Never use `mcp__claude-in-chrome__*`** — CLAUDE.md forbids it. Use the gstack `/browse` skill for all browsing/QA.
- The hero is `position: sticky; top: 0; z-index: 0` and sections scroll over it — that's why `.section` carries `background: var(--white)` and `.section-wash` needs an explicit `background-color` under its translucent gradient. Don't "simplify" it.
- Last Lighthouse: **Perf 91 · A11y 100 · Best Practices 100 · SEO 100**, CLS ~0. Got there by converting fonts OTF→woff2 (185KB→63KB), self-hosting everything, and dropping Cormorant + external Google CSS.
- Verified locally after the July 17 revision (mobile 375 / desktop 1280): one h1, no horizontal scroll, no console errors, EN/ES copy swap, calculator fallback, MLS marks, and safe unconfigured-form behavior.

**Nothing is locked.** When Heidy reacts, bring her notes and iterate. Track decisions in `DECISIONS.md`.
