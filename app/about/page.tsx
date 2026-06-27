import type { Metadata } from "next";
import { Megaphone, CalendarHeart, GraduationCap, Building2 } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { BoardMemberCard } from "@/components/BoardMemberCard";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Badge } from "@/components/Badge";
import { board } from "@/data/board";
import { missionPillars, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Water Street Club — a 501(c)(3) nonprofit advancing diversity and inclusion in the insurance industry through leadership, networking, mentorship, and community.",
};

const whatWeDoIcons = [Megaphone, CalendarHeart, GraduationCap, Building2];

const whoWeServe = [
  "Insurance executives and senior leaders",
  "Brokers and agency professionals",
  "Claims and risk management professionals",
  "Insurance-focused attorneys",
  "Early-career and aspiring professionals",
  "Corporate D&I and talent teams",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="Who We Are"
        title="Building an inclusive insurance industry"
        subtitle={
          <>
            The Water Street Club is a {site.status} based in {site.city},
            connecting roughly {site.reachPerYear} diverse insurance
            professionals each year.
          </>
        }
      />

      {/* Overview */}
      <section className="bg-offWhite py-20">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="Rooted in Water Street" />
            <div className="mt-5 space-y-4 text-charcoal/75">
              {/* SAMPLE COPY — client to revise */}
              <p>
                The Club takes its name and spirit from lower Manhattan&apos;s
                historic insurance district, where its earliest gatherings were
                hosted at 199 Water Street. From those roots, it has grown into a
                community dedicated to advancing diversity and inclusion across
                the industry.
              </p>
              <p>
                Today, The Water Street Club connects professionals across
                carriers, brokerages, and agencies — creating the events,
                mentorship, and relationships that help diverse talent thrive.
              </p>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-charcoal/70">
              As a {site.status}, the Club files {site.irsForm}; donations are
              tax-deductible to the extent allowed by law.
            </p>
          </div>
          <PlaceholderImage
            label="Lower Manhattan harbor motif"
            palette="harbor"
            ratio="aspect-[4/3]"
            seed={3}
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="container-content grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-navy p-8 text-offWhite">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-softGold">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              {/* SAMPLE COPY — client to revise; grounded in the four confirmed pillars */}
              To advance diversity and inclusion in the insurance industry by
              amplifying existing initiatives, creating meaningful programming,
              empowering professionals, and building a lasting platform for
              future generations of diverse talent.
            </p>
          </div>
          <div className="rounded-2xl bg-deepBlue p-8 text-offWhite">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-softGold">
              Our Vision
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              {/* SAMPLE COPY — client to revise */}
              An insurance industry where diverse professionals at every career
              stage find mentorship, opportunity, and community — and where
              inclusion is a shared, sustained commitment.
            </p>
            <div className="mt-3">
              <Badge tone="sample">Vision statement — confirm</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="What We Do"
            title="Four pillars of our work"
            intro="Our mission rests on four commitments that shape every event and program."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {missionPillars.map((pillar, i) => {
              const Icon = whatWeDoIcons[i] ?? Megaphone;
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

      {/* Who we serve */}
      <section className="bg-white py-20">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Community"
              title="Who we serve"
              intro="We lead with the insurance industry, welcoming the many sectors and roles that make it work."
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {whoWeServe.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg bg-offWhite p-4 text-sm text-charcoal/80 ring-1 ring-navy/5"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* John Street Club partnership */}
      <section className="bg-navy py-20 text-offWhite">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <PlaceholderImage
            label="Summer Soirée with the John Street Club"
            palette="dusk"
            ratio="aspect-[4/3]"
            seed={6}
          />
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-softGold">
              Partnership
            </p>
            <h2 className="text-display-md font-semibold">The John Street Club</h2>
            <p className="mt-5 text-offWhite/80">
              {/* SAMPLE COPY — client to revise; partnership itself is confirmed */}
              The John Street Club is a recurring partner of The Water Street
              Club. Together, the two clubs co-host summer soirées and industry
              mixers that bring diverse professionals together across the
              Financial District.
            </p>
            <div className="mt-4">
              <Badge tone="confirmed">Partnership confirmed</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind the Club"
            intro="Names are confirmed from the Club's public materials; titles, companies, and roles are placeholders to be supplied."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {board.map((member) => (
              <BoardMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
