# Go-live checklist — careers.myoleagroup.com

Everything below is a 🧑 HUMAN step (things only you/Heidy control). The code side is done and auto-deploys from `main`.

## 1. DNS (GoDaddy) — the only step blocking the site going live
- [ ] Log in to GoDaddy → DNS for **myoleagroup.com**
- [ ] Add ONE record: `Type: CNAME · Host: careers · Value: augdog214.github.io · TTL: default`
- [ ] Touch nothing else — the root `@` and `www` records stay pointed at Lofty. This is purely additive and cannot break the main site.
- [ ] Wait for DNS to resolve (minutes to ~1 hour), then in the repo: Settings → Pages → confirm the domain shows verified and check **Enforce HTTPS** once the cert is issued.

## 2. n8n → Lofty lead pipeline
- [ ] Create an n8n Webhook node (POST). Copy its production URL.
- [ ] Paste it into `src/js/form.js` replacing `REPLACE_WITH_N8N_WEBHOOK_URL`, commit, push.
- [ ] In n8n, map the payload to a Lofty "create/update contact" call, tagged **source: Agent Recruiting**. Payload fields: `name, phone, email, currentBrokerage, reason, source, utm_source, utm_campaign, utm_content, pageUrl, submittedAt`.
- [ ] Submit a test lead on the live site and confirm the contact lands in Lofty with the right source tag so Heidy's follow-up automations fire.
- [ ] ⚠️ Confirm Heidy's Lofty package includes API access (affects how the n8n node connects).

## 3. The Seasons font license (legal — before launch)
- [ ] The site currently uses **TRIAL** files (SeasonSerif-TRIAL). Purchase a webfont license for Season Serif (VJ Type), then drop the licensed `.otf`/`.woff2` files into `public/fonts/` using the same file names.

## 4. Fee number
- [ ] Get the exact per-transaction fee from Heidy and update `FEE_MODEL.amount` in `src/js/calculator.js` (currently a flagged $495 placeholder).

## 5. Lofty-side launch (anti-cannibalization)
- [ ] Repoint the **Careers** nav link on myoleagroup.com (Lofty) from the external licensing school → `https://careers.myoleagroup.com`. Turns a leak into a funnel.
- [ ] Trim the homepage recruiting block on the Lofty site to a one-line teaser + button to the subdomain (or remove it) so the main site stops competing for recruiting terms.
- [ ] Keyword lanes from here on: Lofty site = buyer/seller terms ONLY; subdomain = ALL recruiting terms. No page targets both.

## 6. Google Search Console
- [ ] Add `careers.myoleagroup.com` as its own property (subdomains are separate properties).
- [ ] Submit `https://careers.myoleagroup.com/sitemap.xml`.

## 7. Optional local signal
- [ ] Add a "We're hiring experienced agents" post/attribute to the Google Business Profile linking to the subdomain.

## Placeholder manifest (real assets still needed)
Every one of these is flagged `<!-- REPLACE -->` in the code and cannot ship silently:
- [ ] **Hero photo** — Heidy or a real SWFL Olea listing (her "Under Contract" post style). Swap in `src/styles/sections.css` → `.hero`.
- [ ] **Edge section photos** — a real Olea construction project + Heidy/team with clients.
- [ ] **Offer deck photos (3)** — (1) closing-table handshake/keys, (2) clean desk with one closing statement (the flat fee), (3) the payoff — agent enjoying SWFL life. Warm, real, minimal.
- [ ] **Heidy headshot** — small circle next to her quote in Proof.
- [ ] **Culture photos (4)** — (1) candid team laughing at a closing (warm natural light, real joy, not stock), (2) Heidy mentoring an agent 1:1 at a desk, (3) closing-day celebration with keys, (4) community/local SWFL moment.
- [ ] **Tools panel backdrop** — office/tools-in-use photo behind the icon panel in What's Included (desktop).
- [ ] **3 testimonials** — real quotes from current Olea agents with names + face photos, hitting: broker access, construction inventory, the fee change in dollars. (EN + ES versions in `src/js/i18n.js`.)
- [ ] **Production stats** — closed volume / transactions / agents (count-up animation activates automatically once real numbers replace the "—" placeholders).
- [ ] **OG share image** — 1200×630 `public/assets/og-image.png` (build from the hero photo when it exists).
- [ ] **White/knockout logo** for the navy footer (currently the color logo on a small white plate).
- [ ] **Office street address + office email** for the footer (mirror from the Lofty site).
- [ ] Confirm FAQ claims with Heidy: contract terms, switching mechanics wording.
