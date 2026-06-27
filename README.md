# The Water Street Club — Website

A production-quality marketing, events, and membership website for **The Water Street Club**, a 501(c)(3) nonprofit advancing diversity and inclusion in the insurance industry. Built as a functional front-end prototype (not a wireframe): real, seeded content where confirmed; clearly-labeled samples/placeholders everywhere else.

- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v3 · lucide-react
- **Rendering:** Fully statically generatable — no backend required
- **Deploy target:** Vercel (clean clone, no extra config)

---

## Quick start

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:3000
npm run build      # production build (must pass clean)
npm run start      # serve the production build locally
npm run lint       # eslint
```

Requirements: Node.js 18.18+ (developed on Node 22). No environment variables are required to run or build.

---

## Deploy to Vercel

This project deploys from a clean clone with **no configuration**:

1. Push the repo to GitHub (already in progress on the feature branch).
2. In Vercel, **New Project → Import** this repository.
3. Framework preset auto-detects **Next.js**. Build command `next build`, output handled automatically.
4. Deploy.

One-command path (Vercel CLI):

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

No env vars are needed today. The placeholder variables below would only be required **once real integrations are added** (see "Stubbed integration boundaries"):

```
# .env.local (placeholders — NOT required for the current prototype)
NEXT_PUBLIC_SITE_URL=            # production domain for canonical/OG/sitemap
NEWSLETTER_API_KEY=              # newsletter provider (e.g. Mailchimp)
CONTACT_FORM_ENDPOINT=           # contact form handler (e.g. Formspree / serverless)
SPONSOR_CRM_ENDPOINT=            # sponsor inquiry routing (e.g. HubSpot)
TICKETING_PUBLIC_KEY=            # ticketing/payments (e.g. Stripe / Eventbrite)
MAPS_EMBED_KEY=                  # venue map embed (e.g. Google Maps / Mapbox)
```

> Do not commit real keys. All of the above are placeholders only.

---

## Design proposal — ⚠️ FOR CLIENT APPROVAL

The visual direction below is a **proposal**. It is implemented as a small, swappable token layer so the Club can re-skin quickly. Please review and confirm or adjust.

**Tone:** Sophisticated, professional, inclusive, event-ready — for insurance executives, attorneys, brokers, claims/risk professionals, and corporate sponsors. A restrained Financial-District / harbor motif nods to the Club's Water Street namesake.

**Color tokens** (`tailwind.config.ts` + `app/globals.css`):

| Token | Hex | Role |
| --- | --- | --- |
| `navy` | `#071A2F` | Primary dark surfaces, hero, footer |
| `deepBlue` | `#0B2341` | Secondary dark surfaces |
| `gold` | `#C9A227` | Accents, primary CTAs, rules |
| `softGold` | `#E6D28A` | Highlights on dark backgrounds |
| `offWhite` | `#F8F6F0` | Page background |
| `charcoal` | `#1F2933` | Body text |
| `lightGray` | `#E5E7EB` | Borders, muted fills |

**Typography:** Playfair Display (display serif, headings) + Inter (body), loaded via `next/font/google` (self-hosted at build, no layout shift). Fluid `clamp()` display scale.

**Imagery:** 100% original generated placeholders — an SVG wordmark (not any real logo), gradient/harbor-motif blocks, and initials avatars. Sponsor logos are labeled placeholder tiles. Swap in real assets later.

**Re-skinning:** Change the tokens in `tailwind.config.ts` and the mirrored CSS variables in `app/globals.css`. Fonts swap in `app/layout.tsx`.

---

## Content integrity model

- **Confirmed facts** appear as real content (org name, New York NY, contact email, 501(c)(3) / Form 990-EZ status, ~400 professionals/year reach, the four mission pillars, confirmed Awards Dinner years 2018/2019/2022/2023/2024, the John Street Club partnership, the 2025 Insurance Executive Diversity Trailblazer award, real recurring venues).
- **Unverified specifics** are visibly flagged on-screen with a `Badge` component (`[SAMPLE — confirm]` / `[PLACEHOLDER]`) and are driven by `confirmed` / `dateConfirmed` / `sample` booleans in the typed data files under `/data`.
- **Generic marketing prose** is annotated in source with `{/* SAMPLE COPY — client to revise */}`.
- Everything the client must supply or confirm is catalogued in **`CONTENT-TODO.md`**.

All content lives in typed files under `/data` (`site`, `board`, `events`, `honorees`, `sponsors`, `awards`, `gallery`, `news`) so real content swaps in without touching components.

---

## Stubbed integration boundaries

All dynamic features are **front-end stubs** that show a success state and stop at a clearly-marked `// TODO: integrate [service]` boundary. No real auth, payments, storage, or keys are wired.

| Feature | Component | Boundary marker | Suggested service |
| --- | --- | --- | --- |
| Newsletter signup | `components/NewsletterSignup.tsx` | `// TODO: integrate newsletter service` | Mailchimp / Constant Contact |
| Contact form | `components/ContactForm.tsx` | `// TODO: integrate contact/email service` | Formspree / SendGrid / route handler |
| Sponsor inquiry | `components/SponsorInquiryForm.tsx` | `// TODO: integrate sponsorship CRM / email service` | HubSpot / route handler |
| Ticket purchase | `app/awards-dinner/page.tsx` (Tickets section) | `// TODO: integrate ticketing/payment service` | Stripe / Eventbrite |
| Venue map | `app/awards-dinner/page.tsx` (Venue section) | `// TODO: integrate interactive map` | Google Maps / Mapbox |

The "Member login" / portal concept from the brief is intentionally **not** stood up as real auth; the join/network CTAs route to the stubbed contact flow.

---

## Project structure

```
app/                 # App Router routes (9 pages + sitemap/robots/404/icon)
components/           # Reusable UI (header, footer, hero, cards, forms, placeholders)
data/                # Typed, seeded content (confirmed facts + labeled samples)
tailwind.config.ts   # Design tokens
app/globals.css      # Token CSS vars + accessibility base styles
```

Routes: `/` · `/about` · `/awards-dinner` · `/honorees` · `/events` · `/sponsors` · `/mentorship` · `/gallery` · `/contact`.

---

## Accessibility, performance & SEO

- Semantic landmarks, skip link, keyboard navigation, visible gold focus rings, labeled form fields, alt text on generated imagery, `prefers-reduced-motion` support.
- Responsive from 320px to large desktop with no horizontal scroll.
- Per-route metadata + Open Graph tags, `sitemap.xml`, `robots.txt`.
- Targets Lighthouse 90+ across Performance / Accessibility / Best Practices / SEO. (Run Lighthouse against `npm run build && npm run start`.)

See **`DESIGN-NOTES.md`** for information-architecture decisions and assumptions, and **`CONTENT-TODO.md`** for the full list of items the client must supply or confirm.
