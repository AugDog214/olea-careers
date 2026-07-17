# HANDOFF — Olea Careers site

Paste this whole file into a new chat to pick the project up cold.

---

## 1. What this is

A single-page **agent-recruitment site** for **The Olea Group Real Estate & Construction, LLC** (Broker/Owner **Heidy Olea**, Cape Coral / Fort Myers, SWFL).

**Its only job:** convert experienced licensed agents into booking a confidential chat with Heidy. It is not a brand site, not a home-search site, not a lead-gen site for buyers. The main site (myoleagroup.com, on Lofty) owns buyer/seller. This subdomain owns recruiting. No page targets both — that anti-cannibalization rule is a hard design constraint, not a preference.

Built July 2026 across a 9-phase plan (Phase 0 setup → Phase 8 QA/handoff). All phases complete. Design iterated to **v3**.

---

## 2. Where the code is

| | |
|---|---|
| **Local** | `C:/Users/apirr/OneDrive/Desktop/olea-careers/` |
| **Repo** | `AugDog214/olea-careers` (https://github.com/AugDog214/olea-careers.git) |
| **Live (temp)** | https://augdog214.github.io/olea-careers/ |
| **Live (final)** | https://careers.myoleagroup.com — **blocked on one DNS record** |
| **Deploy** | GitHub Actions → GitHub Pages, auto on every push to `main` |
| **Git state** | clean; HEAD = `d5aca6d` |

**Stack:** Vite 6 + vanilla JS (no React, no Tailwind — deliberate), GSAP + ScrollTrigger + Lenis, forms → n8n webhook → Lofty CRM. ~3,100 lines across 10 source files. Zero external network requests at runtime (all fonts self-hosted).

### File map

```
index.html               541 lines · 7 sections, one h1, JSON-LD @graph, meta/OG, font preloads
src/main.js               57 · wiring + header condense + stats-hide + melt-CTA observer
src/js/i18n.js           292 · ~75-key EN/ES string map, setLang/currentLang/onLangChange
src/js/motion.js         244 · all GSAP/Lenis; reduced-motion early-return at the top
src/js/calculator.js     108 · fee-vs-split math  ⚠️ placeholder fee lives here
src/js/form.js           119 · validation, UTM capture, honeypot  ⚠️ stub endpoint lives here
src/js/nav.js             47 · mobile menu + MyOleaGroup.com dropdown
src/styles/tokens.css     87 · palette, fluid type scale, 8px spacing, glass vars, easings
src/styles/base.css      583 · reset, type roles, glass header, CTAs, reduced-motion kill-switch
src/styles/sections.css 1065 · every section's layout
public/fonts/            Season Serif (TRIAL) + Montserrat (variable) + League Spartan, woff2
public/                  CNAME.hold, robots.txt, sitemap.xml, llms.txt, favicon, assets/
.github/workflows/deploy.yml
DECISIONS.md             LOCKED / OPEN / CUT tracker
GO-LIVE-CHECKLIST.md     every human step, in priority order
REVISION-PROMPT.md
```

### The 7 sections, in psychological order

hero → offer → edge → proof → included → faq → contact

Order is load-bearing. The converters are **the un-copyable edges** (in-house construction inventory, bilingual market access) plus **broker-answers-the-phone proof** — not the commission split. The split gets you read; the edges get you signed.

---

## 3. Design law (violating these = redo the work)

These came from August's `anti-slop-design/RULES.md` + `august-system/SKILL.md`. **Read both before touching design:** see memory `august_operating_rules.md` for their paths.

- **NO content boxes.** Open editorial surface, eXp-style. No cards, no rounded containers around copy. (When the build plan said "two cards" for The Edge, the no-boxes law won → open numbered blocks.)
- **Glass/backdrop-filter ONLY** on the header bar and the sticky CTA. Nowhere else.
- **Exact brand hexes only.** No invented colors — an error state once got a salmon `#ffb3a7` and it was ripped out for white + weight.
- One icon set. One bold moment. 8px grid. Sentence case. Real content only.
- `prefers-reduced-motion` disables **all** motion, and every piece of content works without JS.

### Palette — sampled from real logo pixels, not from the brief

```
--royal: #15489F   --sky: #2499D5   --cyan: #3DC5F3
--navy:  #0A1A3A (derived)   --ice: #C3E0E5   --white   --ink: #0B0B0F
```
⚠️ The original brief specified `#013CA4`. **That was wrong** — sampling the logo proved it. Don't "restore" it.

### Type — one job each

- **The Seasons / Season Serif** — display only ⚠️ currently **TRIAL** files
- **League Spartan** — labels, stats
- **Montserrat** — body (variable font; same gstatic file across weights)

---

## 4. Honesty guardrails (non-negotiable, Heidy's reputation is on the line)

- **Never headline or promise leads.** Leads are situational to some agents, never guaranteed. This language does not appear anywhere and must not be added.
- **No fee number published on the page.** The FAQ says to ask Heidy for the exact fee. The calculator uses a flagged placeholder.
- **Testimonials are visible bracketed placeholders.** Nothing fabricated ever shipped.
- **Every missing asset is flagged `<!-- REPLACE -->`** in the code. No silently-shipped stock photos.
- No home-search/IDX. No off-site CTA links.

---

## 5. The two placeholders that must change before launch

```js
// src/js/calculator.js
const FEE_MODEL = { type: 'perTransaction', amount: 495 /* ⚠️ REPLACE — get real number from Heidy */ };

// src/js/form.js
const FORM_ENDPOINT = 'REPLACE_WITH_N8N_WEBHOOK_URL';
```

Form payload (this is the contract the n8n → Lofty node must map):
```
name, phone, email, currentBrokerage, reason,
source: 'Agent Recruiting',
utm_source, utm_campaign, utm_content, pageUrl, submittedAt
```
Verified end-to-end against a local Node webhook catcher — schema matches exactly.

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

1. **GoDaddy CNAME** ← the only thing blocking launch (§6 above)
2. **Real fee from Heidy** → `calculator.js`
3. **n8n webhook URL** → `form.js`, then build the n8n → Lofty node tagged `source: Agent Recruiting`. ⚠️ Confirm Heidy's Lofty package includes API access. Submit a test lead and confirm it lands with the right tag so her follow-up automations fire.
4. **Buy the Season Serif webfont license** (VJ Type) — TRIAL files are live right now. **Legal blocker for real launch.** Drop licensed files into `public/fonts/` with the same names.
5. **Real assets** — hero photo, edge photos, 3 offer-deck photos, Heidy headshot, 4 culture photos, tools backdrop, 3 real testimonials (EN+ES, in `i18n.js`), production stats, 1200×630 og-image, white/knockout logo, office address + email.
6. **Lofty-side launch** — repoint the Careers nav link from the external licensing school → the subdomain (turns a leak into a funnel); trim the homepage recruiting block to a teaser.
7. **Search Console** — add `careers.myoleagroup.com` as its own property (subdomains are separate), submit the sitemap.
8. Optional: GBP "hiring experienced agents" post linking to the subdomain.

Two nice automatic behaviors: the **stats row hides itself** while values are `—` placeholders (hollow dashes are worse than absence) and **count-up animation activates by itself** the moment real numbers land.

---

## 8. Known state / gotchas for the next session

- **Never edit files with PowerShell `-replace`.** It corrupted `index.html`'s encoding once (em-dashes → `â€”`) and cost a recovery round-trip. Use the Edit tool.
- **Never use `mcp__claude-in-chrome__*`** — CLAUDE.md forbids it. Use the gstack `/browse` skill for all browsing/QA.
- The hero is `position: sticky; top: 0; z-index: 0` and sections scroll over it — that's why `.section` carries `background: var(--white)` and `.section-wash` needs an explicit `background-color` under its translucent gradient. Don't "simplify" it.
- Last Lighthouse: **Perf 91 · A11y 100 · Best Practices 100 · SEO 100**, CLS ~0. Got there by converting fonts OTF→woff2 (185KB→63KB), self-hosting everything, and dropping Cormorant + external Google CSS.
- Verified live on resume (mobile 390 / desktop 1280): one h1, no horizontal scroll, no console errors, 0 external deps, form + calculator present.

**Nothing is locked.** When Heidy reacts, bring her notes and iterate. Track decisions in `DECISIONS.md`.
