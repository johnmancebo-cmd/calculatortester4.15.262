# Design Notes — The Water Street Club

This document records information-architecture decisions, the reference patterns that informed them (structure/function only — nothing copied), and assumptions made where the brief left room for judgment.

---

## 1. Positioning

The site leads with **insurance industry** diversity and inclusion. Law, claims, risk management, and brokerage are presented as participating sectors and audiences (e.g., the "Who We Serve" list on About), **not** co-equal headline themes. Mission scope is held exactly to the four confirmed pillars — no broadening.

The **Annual Awards Dinner** is treated as the centerpiece of the entire site: it has a top-level nav slot, a home-page feature block, and a standalone microsite route (`/awards-dinner`) with its own hero, ticketing, sponsorship, agenda, venue, gallery, and FAQ.

---

## 2. Information architecture

Nine routes with a shared responsive header/footer, in the brief's order:

| Route | Purpose | Primary conversion |
| --- | --- | --- |
| `/` | Mission + signposting to every major area | Awards Dinner / Sponsor / Join |
| `/about` | Story, mission/vision, what we do, who we serve, leadership, John Street Club | Trust-building |
| `/awards-dinner` | Flagship event microsite | Tickets / Sponsor / Nominate |
| `/honorees` | Award taxonomy + current honorees + archive by year | Nominate |
| `/events` | Upcoming + filterable past archive | Attend |
| `/sponsors` | Why sponsor + tiers + logos + inquiry | Sponsor inquiry |
| `/mentorship` | Programs + opportunities | Mentor / Join |
| `/gallery` | Photos by year + news + press | Engagement |
| `/contact` | Routed inquiry form + details | Contact |

**Header:** full nav on desktop, clean hamburger drawer on mobile (scroll-locked, closes on route change), plus a persistent **Become a Sponsor** button — the highest-value action for the Club. The sponsor button and the Awards Dinner CTA are repeated at natural decision points rather than crowding a single hero.

**Cross-linking:** The Awards Dinner sponsorship section links to the Sponsors inquiry anchor; honoree CTAs route to Contact (nomination); the home page funnels to all major hubs. This keeps each page single-purpose while channeling visitors toward the three core conversions (attend, sponsor, join).

---

## 3. Reference patterns (informed IA only — not copied)

Per the brief, these mission-driven professional associations informed **structure and feature set**, never design, copy, assets, or code:

- **Mission-driven professional associations** with prominent news/events and join/partner CTAs → drove the home-page signposting, the events hub, and the always-visible sponsor CTA.
- **Tiered career-stage program presentation with a members portal** → drove the Career & Mentorship program-card layout and the "ways to participate" framing (implemented as content, with portal/login intentionally stubbed, not real auth).
- **Insurance-sector charitable foundation gala patterns** → drove the Awards Dinner microsite shape: tiered sponsorship packages, ticket tiers, run-of-show agenda, honoree recognition, and event FAQ.

Everything visual and textual is original to this build.

---

## 4. Design system & re-skin layer

- **Tokens** live in `tailwind.config.ts` (colors, fluid type scale, shadows, max-width) and are mirrored as CSS custom properties in `app/globals.css`. Re-skinning is a two-file edit.
- **Typography** is wired through `next/font` CSS variables (`--font-display`, `--font-sans`) so swapping families is one change in `app/layout.tsx`.
- **Imagery** is component-driven (`PlaceholderImage`, `Avatar`, `Wordmark`) so swapping in real photography/logos is a prop/asset change, not a layout rewrite.

---

## 5. Content-integrity system

A small `Badge` component renders three states — `confirmed`, `sample`, `placeholder` — as visible pills, driven by booleans in the data layer (`confirmed`, `dateConfirmed`, `sample`). This makes unverified content obvious on-screen and greppable, and sets up a future admin/CMS view that can filter on the same flags. Generic prose blocks carry inline `{/* SAMPLE COPY — client to revise */}` markers.

---

## 6. Assumptions made (where the brief left judgment room)

1. **Existing `index.html`** in the repo (an unrelated "compensation modeler") was treated as out of scope and left untouched; the new app is a standard Next.js project at the repo root. _Assumption: the Club wants a fresh site, not a migration of that file._
2. **Tailwind v3 over v4** and **hand-rolled components over a full shadcn/ui install** — to keep dependencies minimal, pinned, and the build reliably clean on a fresh clone. shadcn patterns are echoed in the component API but without the runtime footprint.
3. **Member login/portal** is represented through content and "Join the Network" CTAs that route to the stubbed contact flow, rather than standing up real auth (explicitly out of scope per guardrails).
4. **Vision statement** is original sample copy (the brief confirms the mission but not a vision); it is labeled `[SAMPLE — confirm]`.
5. **Award taxonomy beyond the confirmed 2025 Trailblazer** is rendered from an editable list and labeled sample, never presented as official.
6. **Date handling:** the static footer year is hard-coded (2026) to keep the build deterministic; noted in source for annual update. Default Awards Dinner venue is the confirmed The View at Battery Park, while date/venue-pairing remains sample-labeled until confirmed.
7. **Production domain** (`site.url`) is a placeholder used for canonical/OG/sitemap URLs; update before launch.

---

## 7. Accessibility & performance posture

- WCAG 2.1 AA targets: semantic landmarks (`header`/`main`/`footer`/`nav`), skip link, visible focus, labeled fields, `aria-current`, `aria-pressed` on filters, `aria-live` on filter results, alt text on generated imagery, and contrast-conscious token pairings (navy/offWhite, gold-on-navy).
- Static generation + `next/font` self-hosting + lightweight SVG imagery keep payloads small (first-load JS ~105–112 kB shared). No client JS on purely static pages beyond the header and the few interactive islands (forms, events filter).
- `prefers-reduced-motion` disables smooth scroll and transitions.
