import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  MapPin,
  Ticket,
  Award,
  HandHeart,
  UserPlus,
  Mail,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { SponsorTierCard } from "@/components/SponsorTierCard";
import { HonoreeCard } from "@/components/HonoreeCard";
import { AwardCategoryCard } from "@/components/AwardCategoryCard";
import { GalleryCard } from "@/components/GalleryCard";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Badge } from "@/components/Badge";
import { sponsorshipTiers } from "@/data/sponsors";
import { currentHonorees } from "@/data/honorees";
import { awardCategories } from "@/data/awards";
import { gallery } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Annual Insurance Industry Awards Dinner",
  description:
    "The Water Street Club's flagship Insurance Industry Awards Dinner celebrates diversity, inclusion, and leadership in insurance. Tickets, sponsorship packages, honorees, agenda, venue, and FAQ.",
};

const VENUE = "The View at Battery Park, 1 Battery Place, New York, NY 10004";

const agenda = [
  { time: "[SAMPLE] 6:00 PM", title: "Cocktail reception & networking" },
  { time: "[SAMPLE] 7:00 PM", title: "Welcome & opening remarks" },
  { time: "[SAMPLE] 7:30 PM", title: "Dinner service" },
  { time: "[SAMPLE] 8:15 PM", title: "Awards presentation & honoree remarks" },
  { time: "[SAMPLE] 9:00 PM", title: "Dessert reception & closing networking" },
];

const faqs = [
  {
    q: "When and where is the Awards Dinner held?",
    a: "Recent dinners have been held at The View at Battery Park (1 Battery Place, New York, NY 10004). The next edition's exact date is being confirmed — check back or join our network for announcements.",
    sample: true,
  },
  {
    q: "What is the attire?",
    a: "[SAMPLE — confirm] Business or cocktail attire is typical for the evening.",
    sample: true,
  },
  {
    q: "How do I purchase tickets or a table?",
    a: "Individual tickets and tables will be available through this page. Ticketing is not yet open in this prototype — the purchase flow is a placeholder.",
    sample: true,
  },
  {
    q: "Can my company sponsor the dinner?",
    a: "Yes. We offer Platinum, Gold, Silver, and Supporting packages, plus event-specific sponsorships. Benefits shown are samples pending confirmation; reach out for current packages.",
    sample: true,
  },
  {
    q: "How are honorees selected?",
    a: "[SAMPLE — confirm] Honorees are recognized for measurable leadership advancing diversity and inclusion in insurance. A nomination process informs selection.",
    sample: true,
  },
  {
    q: "Are tickets tax-deductible?",
    a: "The Water Street Club is a 501(c)(3) nonprofit and files IRS Form 990-EZ. Contributions may be tax-deductible to the extent allowed by law; please consult your tax advisor.",
    sample: false,
  },
];

function DinnerCTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="#tickets"
        className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-softGold"
      >
        <Ticket size={16} /> Purchase Tickets
      </Link>
      <Link
        href="#sponsorship"
        className="inline-flex items-center gap-2 rounded-md bg-offWhite/10 px-5 py-3 text-sm font-semibold text-offWhite ring-1 ring-inset ring-offWhite/30 transition-colors hover:bg-offWhite/20"
      >
        <HandHeart size={16} /> Become a Sponsor
      </Link>
    </div>
  );
}

export default function AwardsDinnerPage() {
  return (
    <>
      <Hero
        eyebrow="Our Signature Annual Event"
        title="The Insurance Industry Awards Dinner"
        subtitle="An evening celebrating the leaders advancing diversity and inclusion across the insurance industry — honorees, colleagues, and corporate partners together."
      >
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Badge tone="sample">Date — confirm</Badge>
          <Badge tone="confirmed">Venue: The View at Battery Park</Badge>
        </div>
        <div className="mt-6">
          <DinnerCTAButtons />
        </div>
      </Hero>

      {/* Event details */}
      <section className="bg-offWhite py-16">
        <div className="container-content">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: CalendarDays,
                label: "Date",
                value: "[SAMPLE — confirm] Fall 2026",
                sample: true,
              },
              {
                icon: Clock,
                label: "Time",
                value: "[SAMPLE] 6:00 PM – 9:30 PM",
                sample: true,
              },
              {
                icon: MapPin,
                label: "Venue",
                value: VENUE,
                sample: false,
              },
            ].map(({ icon: Icon, label, value, sample }) => (
              <div
                key={label}
                className="rounded-xl bg-white p-6 shadow-card ring-1 ring-navy/5"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                  <Icon size={22} />
                </span>
                <div className="mt-4 flex items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/55">
                    {label}
                  </p>
                  {sample ? <Badge tone="sample" /> : <Badge tone="confirmed" />}
                </div>
                <p className="mt-1 font-medium text-navy">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the dinner */}
      <section className="bg-white py-20">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About the Evening"
              title="A night of recognition and connection"
            />
            <div className="mt-5 space-y-4 text-charcoal/75">
              {/* SAMPLE COPY — client to revise */}
              <p>
                The Insurance Industry Awards Dinner is the centerpiece of the
                Club&apos;s year — an elegant evening that brings together
                executives, brokers, attorneys, claims and risk professionals,
                and the corporate partners who champion diversity and inclusion.
              </p>
              <p>
                Guests enjoy a reception, dinner, and an awards presentation
                recognizing individuals and organizations whose leadership has
                measurably advanced inclusion across the industry. Confirmed
                editions have been held in 2018, 2019, 2022, 2023, and 2024.
              </p>
            </div>
          </div>
          <PlaceholderImage
            label="Awards Dinner reception"
            palette="gold"
            ratio="aspect-[4/3]"
            seed={5}
          />
        </div>
      </section>

      {/* Honorees */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="This Year's Honorees"
            title="Celebrating leadership"
            intro="Honoree names and bios are placeholders until the Club confirms this year's recipients."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentHonorees.map((h) => (
              <HonoreeCard key={h.award} honoree={h} />
            ))}
          </div>
        </div>
      </section>

      {/* Award categories */}
      <section className="bg-white py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Recognition"
            title="Award categories"
            intro="The taxonomy below is an editable, sample draft — except the Insurance Executive Diversity Trailblazer, which was presented in 2025 and is confirmed."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awardCategories.map((c) => (
              <AwardCategoryCard key={c.name} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Tickets (stub) */}
      <section id="tickets" className="scroll-mt-20 bg-navy py-20 text-offWhite">
        <div className="container-content">
          <SectionHeading
            eyebrow="Attend"
            title="Purchase tickets"
            tone="light"
            intro="Individual seats and full tables will be available here. Pricing is not published in this prototype, and the purchase flow is a clearly-marked stub."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: "Individual Seat", desc: "[SAMPLE] One reserved seat at the dinner." },
              { name: "Table of Ten", desc: "[SAMPLE] A full table for your team or guests." },
              { name: "Patron Ticket", desc: "[SAMPLE] Premium seating with added recognition." },
            ].map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-xl bg-offWhite/5 p-6 ring-1 ring-inset ring-offWhite/15"
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-offWhite">{t.name}</h3>
                  <Badge tone="sample" />
                </div>
                <p className="mt-2 flex-1 text-sm text-offWhite/75">{t.desc}</p>
                <p className="mt-4 text-sm text-offWhite/55">
                  Pricing on request — not published.
                </p>
                <button
                  type="button"
                  // TODO: integrate ticketing/payment service (e.g. Stripe / Eventbrite)
                  disabled
                  aria-disabled="true"
                  className="mt-5 cursor-not-allowed rounded-md bg-gold/80 px-4 py-2.5 text-sm font-semibold text-navy"
                  title="Ticketing not yet enabled in this prototype"
                >
                  Purchase (coming soon)
                </button>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-offWhite/50">
            Stub only — no payment is processed. Integration boundary:{" "}
            <code>{"// TODO: integrate ticketing/payment service"}</code>.
          </p>
        </div>
      </section>

      {/* Sponsorship */}
      <section id="sponsorship" className="scroll-mt-20 bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Partner With Us"
            title="Sponsorship packages"
            intro="Align your organization with a celebration of diversity and inclusion in insurance. Benefits shown are samples pending confirmation; no pricing is published."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sponsorshipTiers
              .filter((t) => !t.eventOnly)
              .map((tier) => (
                <SponsorTierCard key={tier.name} tier={tier} />
              ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/sponsors#inquiry"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-offWhite transition-colors hover:bg-deepBlue"
            >
              <HandHeart size={16} /> Inquire about sponsorship
            </Link>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="bg-white py-20">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            eyebrow="The Evening"
            title="Sample agenda"
            intro="A representative run of show. Final timing will be confirmed closer to the event."
          />
          <ol className="relative space-y-6 border-l border-navy/15 pl-6">
            {agenda.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-offWhite" />
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-navy">{item.time}</p>
                  <Badge tone="sample" />
                </div>
                <p className="text-charcoal/75">{item.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Venue / map */}
      <section className="bg-offWhite py-20">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Getting There"
              title="Venue & location"
            />
            <p className="mt-5 text-charcoal/75">
              Recent dinners have been held at{" "}
              <span className="font-medium text-navy">The View at Battery Park</span>,
              1 Battery Place, New York, NY 10004 — in the heart of lower
              Manhattan&apos;s Financial District, near the harbor that gives the
              Club its name.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge tone="confirmed">Venue confirmed</Badge>
              <Badge tone="sample">Date for next edition — confirm</Badge>
            </div>
            <p className="mt-5 text-sm text-charcoal/60">
              {/* TODO: integrate interactive map (e.g. Google Maps / Mapbox embed) */}
              Interactive map to be embedded at launch.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-card ring-1 ring-navy/5">
            <PlaceholderImage
              label="Map placeholder — 1 Battery Place, NYC"
              palette="harbor"
              ratio="aspect-[4/3]"
              seed={7}
              className="rounded-none"
            />
          </div>
        </div>
      </section>

      {/* Prior-year gallery */}
      <section className="bg-white py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Looking Back"
            title="Prior-year gallery"
            intro="Placeholder imagery from past dinners — real photography to be supplied by the Club."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery
              .slice(0, 2)
              .flatMap((g) => g.items.slice(0, 2).map((item, i) => ({ item, key: `${g.year}-${i}` })))
              .map(({ item, key }, i) => (
                <GalleryCard key={key} item={item} index={i} />
              ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="text-sm font-semibold text-navy hover:text-gold"
            >
              View the full gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offWhite py-20">
        <div className="container-content max-w-3xl">
          <SectionHeading
            eyebrow="Good to Know"
            title="Frequently asked questions"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 divide-y divide-navy/10 rounded-xl bg-white shadow-card ring-1 ring-navy/5">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-navy">
                  <span className="flex items-center gap-2">
                    {faq.q}
                    {faq.sample ? <Badge tone="sample" /> : null}
                  </span>
                  <span className="text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTAs */}
      <section className="bg-navy py-16 text-offWhite">
        <div className="container-content text-center">
          <h2 className="mx-auto max-w-2xl text-display-md font-semibold">
            Be part of the evening
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="#tickets"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-softGold"
            >
              <Ticket size={16} /> Purchase Tickets
            </Link>
            <Link
              href="/sponsors#inquiry"
              className="inline-flex items-center gap-2 rounded-md bg-offWhite/10 px-5 py-3 text-sm font-semibold text-offWhite ring-1 ring-inset ring-offWhite/30 hover:bg-offWhite/20"
            >
              <HandHeart size={16} /> Become a Sponsor
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-offWhite/10 px-5 py-3 text-sm font-semibold text-offWhite ring-1 ring-inset ring-offWhite/30 hover:bg-offWhite/20"
            >
              <UserPlus size={16} /> Nominate an Honoree
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-offWhite/10 px-5 py-3 text-sm font-semibold text-offWhite ring-1 ring-inset ring-offWhite/30 hover:bg-offWhite/20"
            >
              <Mail size={16} /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
