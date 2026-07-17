# REVISION PROMPT — Olea "Join Us" page v2 (superseded by July 17 feedback)

**Reference:** join.exprealty.com — huge type, open editorial surface, guided eye, zero repetition.
**Governing law (unchanged):** anti-slop RULES.md — exact brand hexes, glass on chrome only, one bold moment, 8px grid, sentence case, `prefers-reduced-motion` disables all motion. NO content boxes unless a decision below explicitly overrides it.

Historical revision notes remain here for motion and layout context. Service claims below reflect Heidy's July 17 feedback; do not restore earlier inventory or unlimited-support positioning.

---

## A · STRUCTURE & COPY

### A1 — De-duplicate the Offer vs the Edge (the core fix)
The Offer and Edge have separate jobs:

- **THE OFFER:** keep 100%; optional paid one-on-one mentorship; low monthly fee + flat transaction fee + no caps.
- **THE EDGE:** independent-agent infrastructure and bilingual reach.
- **PROOF:** broker and compliance review without implying unlimited supervision. Paid mentorship remains optional.

### A2 — Hero headline: cut to 2 lines so it can be huge
The h1 remains the short two-line money/independence statement. Heidy's longer brokerage description now sits in the supporting paragraph.

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
   - `Keep 100%. Never work alone.` — current selection; pair it with independence and optional-service language so it does not promise unlimited support.

2. **Proof section:** send real numbers now / cut it for launch / keep placeholders and wire later.

3. **The Edge treatment:** eXp *motion* on open editorial blocks (keeps your no-box law) **vs** literal bordered cards (would override your own anti-slop rule — only if you explicitly want it).
