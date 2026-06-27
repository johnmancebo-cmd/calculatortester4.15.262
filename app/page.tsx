import Link from "next/link";
import { ArrowRight, Award, Users, Calendar, Heart } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { HonoreeCard } from "@/components/HonoreeCard";
import { SponsorLogoGrid } from "@/components/SponsorLogoGrid";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Badge } from "@/components/Badge";
import { missionPillars, site } from "@/data/site";
import { upcomingEvents } from "@/data/events";
import { currentHonorees } from "@/data/honorees";
import { sponsors } from "@/data/sponsors";

const pillarIcons = [Award, Users, Calendar, Heart];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Diversity & Inclusion in the Insurance Industry"
        title={
          <>
            Connecting and elevating diverse talent across insurance.
          </>
        }
        subtitle={
          <>
            The Water Street Club brings together roughly {site.reachPerYear}{" "}
            diverse insurance professionals each year — through leadership,
            mentorship, networking, and our signature annual awards dinner.
          </>
        }
        ctas={[
          { label: "Attend the Annual Awards Dinner", href: "/awards-dinner", variant: "primary" },
          { label: "Become a Sponsor", href: "/sponsors", variant: "secondary" },
          { label: "Join Our Network", href: "/contact", variant: "ghost" },
        ]}
      />

      {/* Mission pillars */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Our Mission"
            title="Four pillars guide our work"
            intro="We exist to amplify diversity and inclusion efforts already underway across carriers, brokerages, and agencies — and to build something lasting for the next generation."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {missionPillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? Award;
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl bg-white p-6 shadow-card ring-1 ring-navy/5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Dinner feature */}
      <section className="bg-navy py-20 text-offWhite">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-softGold">
              Our Signature Event
            </p>
            <h2 className="text-display-md font-semibold">
              The Insurance Industry Awards Dinner
            </h2>
            <p className="mt-5 text-offWhite/80">
              {/* SAMPLE COPY — client to revise */}
              Each year, the Club&apos;s flagship evening gathers executives,
              brokers, attorneys, claims and risk professionals, and corporate
              sponsors to celebrate the leaders advancing diversity and
              inclusion in insurance. Recent dinners have been held at The View
              at Battery Park.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge tone="confirmed">Editions: 2018, 2019, 2022, 2023, 2024</Badge>
              <Badge tone="sample">2026 date — confirm</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/awards-dinner"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-softGold"
              >
                Explore the Awards Dinner
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/honorees"
                className="inline-flex items-center rounded-md bg-offWhite/10 px-5 py-3 text-sm font-semibold text-offWhite ring-1 ring-inset ring-offWhite/30 transition-colors hover:bg-offWhite/20"
              >
                View Honorees
              </Link>
            </div>
          </div>
          <PlaceholderImage
            label="Annual Awards Dinner — The View at Battery Park"
            palette="gold"
            ratio="aspect-[4/3]"
            seed={2}
          />
        </div>
      </section>

      {/* Featured honorees */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Recognizing Leadership"
              title="Featured honorees"
              intro="Celebrating individuals whose leadership advances diversity and inclusion across insurance."
            />
            <Link
              href="/honorees"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold"
            >
              All honorees & archive
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentHonorees.map((h) => (
              <HonoreeCard key={h.award} honoree={h} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="bg-white py-20">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="What's Next"
              title="Upcoming events"
              intro="Soirées, panels, mentorship, and our flagship dinner — all designed to connect diverse insurance professionals."
            />
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold"
            >
              All events
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((e, i) => (
              <EventCard key={e.slug} event={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor band */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Our Partners"
            title="Sponsors who make it possible"
            intro="Forward-looking organizations partner with us to demonstrate their commitment to diversity and inclusion across the insurance industry."
            align="center"
          />
          <div className="mt-12">
            <SponsorLogoGrid sponsors={sponsors} />
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-offWhite transition-colors hover:bg-deepBlue"
            >
              Become a Sponsor
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-deepBlue py-16">
        <div className="container-content">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-md font-semibold text-offWhite">
              Stay connected
            </h2>
            <p className="mt-3 text-offWhite/80">
              Join our network for invitations to events, mentorship
              opportunities, and Awards Dinner announcements.
            </p>
            <div className="mt-8 text-left">
              <NewsletterSignup tone="light" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
