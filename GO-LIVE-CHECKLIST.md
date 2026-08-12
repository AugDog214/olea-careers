# Go-live checklist — careers.myoleagroup.com

Everything below is a 🧑 HUMAN step (things only you/Heidy control). Do not push the current local revision until August explicitly approves deployment.

## 1. DNS (GoDaddy) — custom-domain switch
- [ ] Log in to GoDaddy → DNS for **myoleagroup.com**
- [ ] Add ONE record: `Type: CNAME · Host: careers · Value: augdog214.github.io · TTL: default`
- [ ] Touch nothing else — the root `@` and `www` records stay pointed at Lofty. This is purely additive and cannot break the main site.
- [ ] Wait for DNS to resolve (minutes to ~1 hour), then in the repo: Settings → Pages → confirm the domain shows verified and check **Enforce HTTPS** once the cert is issued.

## 2. Google Apps Script → Gmail + Google Sheets lead pipeline
- [ ] Follow `google-apps-script/SETUP.md` while signed into the Google account that should own the recruiting leads.
- [ ] Deploy the script as a web app that executes as the owner and allows access to **Anyone**. Copy the production `/exec` URL, not the `/dev` test URL.
- [ ] Add the `/exec` URL as the GitHub Actions secret `GOOGLE_APPS_SCRIPT_URL`. The workflow exposes it to Vite as `VITE_GOOGLE_APPS_SCRIPT_URL` at build time.
- [ ] Submit one real production test. Confirm an email arrives at **theoleagroup@gmail.com** and the same lead appears in the `Agent Recruiting Leads` Sheet tab.
- [ ] Optional later phase: connect the Sheet or webhook payload to Lofty and tag the contact **source: Agent Recruiting**. Confirm Heidy's Lofty package includes API access first.

## 3. The Seasons font license (legal — before launch)
- [ ] The site currently uses **TRIAL** files (SeasonSerif-TRIAL). Purchase a webfont license for Season Serif (VJ Type), then drop the licensed `.otf`/`.woff2` files into `public/fonts/` using the same file names.

## 4. Fee numbers
- [ ] Get the exact monthly fee and per-transaction fee from Heidy and update `FEE_MODEL.monthlyAmount` and `FEE_MODEL.perTransactionAmount` in `src/js/calculator.js`. Both intentionally remain `null` until confirmed.

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
- [ ] **Edge section photos** — the clean Olea office in use + Heidy/team with clients.
- [ ] **Offer deck photos (3)** — (1) closing-table handshake/keys, (2) clean desk with one closing statement (the flat fee), (3) the payoff — agent enjoying SWFL life. Warm, real, minimal.
- [ ] **Heidy headshot** — small circle next to her quote in Proof.
- [ ] **Culture photos (4)** — (1) candid team laughing at a closing (warm natural light, real joy, not stock), (2) Heidy mentoring an agent 1:1 at a desk, (3) closing-day celebration with keys, (4) community/local SWFL moment.
- [ ] **Tools panel backdrop** — office/tools-in-use photo behind the icon panel in What's Included (desktop).
- [ ] **3 testimonials** — real approved quotes with names + face photos, focused on independence, compliance clarity, bilingual culture, or the fee model. Placeholder testimonials are not rendered.
- [ ] **Production stats** — closed volume / transactions / agents (count-up animation activates automatically once real numbers replace the "—" placeholders).
- [ ] **OG share image** — 1200×630 `public/assets/og-image.png` (build from the hero photo when it exists).
- [ ] **White/knockout logo** for the navy footer (currently the color logo on a small white plate).
- [ ] **Office street address + office email** for the footer (mirror from the Lofty site).
- [ ] Confirm FAQ claims with Heidy: contract terms, switching mechanics wording.
- [ ] Confirm Heidy's exact MLS memberships. Visible labels currently use verified names: Stellar MLS, MIAMI REALTORS, and Florida Gulf Coast MLS. The third mark is the Royal Palm Coast Realtor Association logo shown in the official SWFL Matrix login.
