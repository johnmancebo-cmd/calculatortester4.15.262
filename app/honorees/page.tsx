import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { HonoreeCard } from "@/components/HonoreeCard";
import { AwardCategoryCard } from "@/components/AwardCategoryCard";
import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import { awardCategories } from "@/data/awards";
import { currentHonorees, honoreeArchive } from "@/data/honorees";

export const metadata: Metadata = {
  title: "Awards & Honorees",
  description:
    "Meet the honorees recognized by The Water Street Club for advancing diversity, inclusion, and leadership in the insurance industry, and browse the awards archive by year.",
};

export default function HonoreesPage() {
  return (
    <>
      <Hero
        eyebrow="Recognizing Leadership"
        title="Awards & Honorees"
        subtitle="Each year we celebrate individuals and organizations whose leadership has measurably advanced diversity and inclusion across the insurance industry."
        ctas={[
          { label: "About the Awards Dinner", href: "/awards-dinner", variant: "primary" },
          { label: "Nominate an Honoree", href: "/contact", variant: "secondary" },
        ]}
      />

      {/* Award categories */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="The Awards"
            title="Award categories"
            intro="The Insurance Executive Diversity Trailblazer award (presented in 2025) is confirmed. The remaining categories are an editable, sample taxonomy pending confirmation."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awardCategories.map((c) => (
              <AwardCategoryCard key={c.name} category={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Current honorees */}
      <section className="bg-white py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Current Honorees"
            title="This year's recipients"
            intro="Recipient names and bios are placeholders until the Club confirms them."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentHonorees.map((h) => (
              <HonoreeCard key={h.award} honoree={h} />
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="The Archive"
            title="Prior recipients by year"
            intro="Dinner editions for 2018, 2019, 2022, 2023, and 2024 are confirmed. Recipient names below are placeholders for the Club to supply."
          />
          <div className="mt-12 space-y-12">
            {honoreeArchive.map((group) => (
              <div key={group.year}>
                <div className="mb-5 flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-navy">{group.year}</h3>
                  <Badge tone="confirmed">Dinner confirmed</Badge>
                  <span className="h-px flex-1 bg-navy/10" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.recipients.map((r, i) => (
                    <div
                      key={`${group.year}-${i}`}
                      className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-card ring-1 ring-navy/5"
                    >
                      <div className="w-16 shrink-0">
                        <Avatar name={r.name} className="rounded-lg" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                            {r.award}
                          </p>
                          <Badge tone="placeholder" />
                        </div>
                        <p className="mt-0.5 font-medium text-navy">{r.name}</p>
                        <p className="text-sm text-charcoal/60">{r.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-content text-center">
          <p className="mx-auto max-w-xl text-charcoal/75">
            Know someone whose leadership deserves recognition?
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center rounded-md bg-navy px-6 py-3 text-sm font-semibold text-offWhite transition-colors hover:bg-deepBlue"
          >
            Submit a nomination
          </Link>
        </div>
      </section>
    </>
  );
}
