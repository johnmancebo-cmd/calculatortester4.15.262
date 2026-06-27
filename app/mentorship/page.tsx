import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Mic2,
  Presentation,
  TrendingUp,
  Sparkles,
  Briefcase,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Career & Mentorship",
  description:
    "Mentorship from industry leaders, client-development opportunities, and a professional network for diverse insurance professionals at every career stage.",
};

const programs = [
  {
    icon: Users,
    title: "Mentorship Circles",
    body: "[SAMPLE] Small-group mentorship pairing emerging professionals with experienced industry leaders.",
  },
  {
    icon: Mic2,
    title: "Career Panels",
    body: "[SAMPLE] Candid conversations with leaders about building a career across the insurance industry.",
  },
  {
    icon: Presentation,
    title: "Skills Workshops",
    body: "[SAMPLE] Practical sessions on client development, leadership, and professional growth.",
  },
  {
    icon: TrendingUp,
    title: "Leadership Development",
    body: "[SAMPLE] Programming designed to prepare diverse talent for senior and executive roles.",
  },
  {
    icon: Sparkles,
    title: "Young Professionals Network",
    body: "[SAMPLE] Networking and community built for early-career insurance professionals.",
  },
  {
    icon: Briefcase,
    title: "Client-Development Opportunities",
    body: "[SAMPLE] Connections and forums that help members grow relationships and business.",
  },
];

const opportunities = [
  { title: "[PLACEHOLDER: opportunity title]", org: "[PLACEHOLDER: organization]", type: "Mentorship" },
  { title: "[PLACEHOLDER: opportunity title]", org: "[PLACEHOLDER: organization]", type: "Panel" },
  { title: "[PLACEHOLDER: opportunity title]", org: "[PLACEHOLDER: organization]", type: "Workshop" },
];

export default function MentorshipPage() {
  return (
    <>
      <Hero
        eyebrow="Grow With Us"
        title="Career & Mentorship"
        subtitle="We empower insurance professionals through mentorship from industry leaders, client-development opportunities, and a supportive professional network."
        ctas={[
          { label: "Become a Mentor", href: "/contact", variant: "primary" },
          { label: "Join the Network", href: "/contact", variant: "secondary" },
          { label: "Submit an Opportunity", href: "/contact", variant: "ghost" },
        ]}
      />

      {/* Overview */}
      <section className="bg-offWhite py-20">
        <div className="container-content max-w-3xl">
          <SectionHeading
            eyebrow="Why Mentorship"
            title="Connecting talent with opportunity"
          />
          <div className="mt-5 space-y-4 text-charcoal/75">
            {/* SAMPLE COPY — client to revise; grounded in the confirmed mentorship pillar */}
            <p>
              One of the Club&apos;s core commitments is to empower insurance
              professionals — connecting them to mentorship from established
              leaders, to client-development opportunities, and to a network that
              spans carriers, brokerages, and agencies.
            </p>
            <p>
              Whether you&apos;re early in your career or ready to give back as a
              mentor, there&apos;s a place for you here.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-white py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Programs"
            title="Ways to participate"
            intro="The programs below are sample concepts illustrating how the Club's mentorship pillar comes to life. Final offerings to be confirmed."
          />
          <div className="mt-4">
            <Badge tone="sample">Programs — sample concepts</Badge>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-xl bg-offWhite p-6 shadow-card ring-1 ring-navy/5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured opportunities */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Get Involved"
            title="Featured opportunities"
            intro="Placeholder listings — real mentorship and development opportunities will appear here."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {opportunities.map((o, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-5 shadow-card ring-1 ring-navy/5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                    {o.type}
                  </span>
                  <Badge tone="placeholder" />
                </div>
                <h3 className="mt-2 font-semibold text-navy">{o.title}</h3>
                <p className="text-sm text-charcoal/60">{o.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-offWhite">
        <div className="container-content text-center">
          <h2 className="mx-auto max-w-2xl text-display-md font-semibold">
            Ready to mentor — or be mentored?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-softGold"
            >
              Become a Mentor
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-offWhite/10 px-5 py-3 text-sm font-semibold text-offWhite ring-1 ring-inset ring-offWhite/30 hover:bg-offWhite/20"
            >
              Join the Network
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-offWhite/10 px-5 py-3 text-sm font-semibold text-offWhite ring-1 ring-inset ring-offWhite/30 hover:bg-offWhite/20"
            >
              Submit an Opportunity
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
