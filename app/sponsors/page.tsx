import type { Metadata } from "next";
import { Users, ShieldCheck, Handshake, Sprout } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { SponsorTierCard } from "@/components/SponsorTierCard";
import { SponsorLogoGrid } from "@/components/SponsorLogoGrid";
import { SponsorInquiryForm } from "@/components/SponsorInquiryForm";
import { StatBand } from "@/components/StatBand";
import { sponsors, sponsorshipTiers, whySponsor } from "@/data/sponsors";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sponsors & Sponsorship",
  description:
    "Sponsor The Water Street Club and demonstrate your organization's commitment to diversity and inclusion in the insurance industry. Platinum, Gold, Silver, Supporting, and event sponsorship opportunities.",
};

const whyIcons = [Users, ShieldCheck, Handshake, Sprout];

export default function SponsorsPage() {
  return (
    <>
      <Hero
        eyebrow="Partner With Us"
        title="Sponsor diversity & inclusion in insurance"
        subtitle={
          <>
            Connect your brand with roughly {site.reachPerYear} diverse insurance
            professionals each year and show your commitment to a more inclusive
            industry.
          </>
        }
        ctas={[
          { label: "Explore packages", href: "#packages", variant: "primary" },
          { label: "Start an inquiry", href: "#inquiry", variant: "secondary" },
        ]}
      >
        <div className="mt-10">
          <StatBand tone="dark" />
        </div>
      </Hero>

      {/* Why sponsor */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Why Sponsor"
            title="Your partnership creates impact"
            intro="Sponsorship fuels the events, mentorship, and platform that connect and elevate diverse talent across the insurance industry."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whySponsor.map((item, i) => {
              const Icon = whyIcons[i] ?? Users;
              return (
                <div
                  key={item.title}
                  className="rounded-xl bg-white p-6 shadow-card ring-1 ring-navy/5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="scroll-mt-20 bg-white py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Sponsorship Levels"
            title="Choose a partnership that fits"
            intro="Benefits below are sample drafts pending confirmation. No pricing is published — packages and amounts are shared on request."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {sponsorshipTiers.map((tier) => (
              <SponsorTierCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Current sponsors */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Our Partners"
            title="Sponsors & supporters"
            intro="Sponsor logos shown are placeholders. The Club's real partners will appear here."
            align="center"
          />
          <div className="mt-12">
            <SponsorLogoGrid sponsors={sponsors} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy py-20 text-offWhite">
        <div className="container-content">
          <SectionHeading
            eyebrow="Simple Process"
            title="How sponsorship works"
            tone="light"
            intro="No pricing is published online — we tailor recognition to your goals. Getting started takes one short conversation."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Tell us your goals",
                body: "Share your interest and what matters to your organization using the inquiry form below.",
              },
              {
                step: "2",
                title: "Review your package",
                body: "We follow up with current levels, benefits, and pricing tailored to your visibility goals.",
              },
              {
                step: "3",
                title: "Make an impact",
                body: "Activate your partnership across the Awards Dinner, events, and year-round recognition.",
              },
            ].map((s) => (
              <li
                key={s.step}
                className="rounded-xl bg-offWhite/5 p-6 ring-1 ring-inset ring-offWhite/15"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-lg font-semibold text-navy">
                  {s.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-offWhite">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-offWhite/75">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquiry" className="scroll-mt-20 bg-white py-20">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Get Started"
              title="Sponsor inquiry"
              intro="Tell us a little about your organization and interest, and our team will follow up with current packages and details."
            />
            <p className="mt-6 text-sm text-charcoal/70">
              Prefer email? Reach us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-navy underline underline-offset-2 hover:text-gold"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
          <div className="rounded-2xl bg-offWhite p-6 shadow-card ring-1 ring-navy/5 sm:p-8">
            <SponsorInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
