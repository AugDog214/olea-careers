# REVISION PROMPT — Olea "Join Us" page v2

**Reference:** join.exprealty.com — huge type, open editorial surface, guided eye, zero repetition.
**Governing law (unchanged):** anti-slop RULES.md — exact brand hexes, glass on chrome only, one bold moment, 8px grid, sentence case, `prefers-reduced-motion` disables all motion. NO content boxes unless a decision below explicitly overrides it.

The build currently reads like a draft in three spots: duplicated offer/edge, hollow proof, and a paragraph-length hero that's too long to render large. The fixes below are ordered so the type can finally go big.

---

## A · STRUCTURE & COPY

### A1 — De-duplicate the Offer vs the Edge (the core fix)
The two sections overlap: Offer points 01–04 already cover inventory + bilingual, then Edge repeats them. Split cleanly by job:

- **THE OFFER = money only.** Three points, nothing else:
  - `01` Keep 100% of every commission.
  - `02` One flat fee per closed transaction — no splits, no caps, no royalties.
  - `03` You built the business. Keep what it pays.
- **THE EDGE = the two un-copyable advantages** (this is "what sets us apart"):
  - `01` In-house new-construction inventory (free listings = income).
  - `02` Bilingual / Hispanic-market reach.
- **"A broker who answers"** (the fear-disarm) leaves the Offer. It moves to **lead the Proof section** — because "she actually answers" is a claim you *prove* with testimonials, not one you list. It also stays in the hero subhead.

### A2 — Hero headline: cut to 2 lines so it can be huge
Current h1 is a full 3-beat sentence — too long to be big. Shorten to two lines of large serif; the subhead carries SWFL + experienced-agents + the edges. ⚠️ **DECISION — wording** (see decisions block).

### A3 — Proof: real numbers or cut
The section renders as `$—M / — / —` and three bracketed quotes. It's the single most important trust block; shipping it hollow is worse than not shipping it. ⚠️ **DECISION** (see block).

### A4 — Language toggle shows state
Replace the single "ES" button with a segmented **EN | ES** control, active side highlighted (royal), so current language is always visible. Same full-site swap under the hood.

### A5 — Calculator (no change needed — confirming)
Already collapsed by default (`hidden`), expands on click, recalculates live, reduced-motion safe. Verified functional. Only restyle to match the new larger scale.

---

## B · VISUAL & MOTION

### B1 — Scale everything up (eXp "in your face")
Now that the headline is short, push the whole type scale up: hero, section titles, and statement lines noticeably larger, mobile especially. Big confident serif, generous air. This is the main visual change.

### B2 — Header layout
Logo hard **left**; nav tabs pushed **right**, grouped with the EN|ES toggle and the CTA. (Currently nav sits center-left.)

### B3 — Signature accent — the drawing blue line
A royal-blue line (`--royal`, ~3px) **draws left → right** beneath each section-title as it scrolls into view (~0.8s, weighty ease-out, no bounce). Reduced-motion = the full line is simply present, no draw. On-brand, type-based, no box — this becomes a repeated signature down the page.

### B4 — "What sets us apart" (the Edge) — eXp-style card motion
Give the two Edge advantages the distinctive eXp feel: **staggered scroll-reveal** (rise + fade, ~120ms stagger), a **hover accent-line draw**, and an **image reveal** (clip-path wipe) on the paired photo. ⚠️ **DECISION — cards vs open blocks** (see block).

---

## GUARDRAILS (do not violate)
Exact hexes only (royal `#15489F`, sky `#2499D5`, cyan `#3DC5F3`, navy `#0A1A3A`); no new hues, no purple. Glass only on header + sticky CTA. One bold moment (the hero). 8px grid. All B-section motion gated behind `prefers-reduced-motion`. Real content only — keep every `<!-- REPLACE -->` flag until the real asset lands.

---

## ⚠️ THREE DECISIONS BEFORE EXECUTION

1. **Hero wording** (must stay short + huge):
   - `Keep 100%. Answer to no one.` — your pick. Punchy, but "answer to no one" accidentally signals *being on your own* — the exact fear the brief says we must disarm ("100% doesn't mean alone").
   - `Keep 100%. Never work alone.` — money + support; directly disarms the fear.
   - `100% yours. Plus listings that aren't.` — money + the inventory hook.

2. **Proof section:** send real numbers now / cut it for launch / keep placeholders and wire later.

3. **The Edge treatment:** eXp *motion* on open editorial blocks (keeps your no-box law) **vs** literal bordered cards (would override your own anti-slop rule — only if you explicitly want it).
