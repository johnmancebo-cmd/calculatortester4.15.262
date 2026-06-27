import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryCard } from "@/components/GalleryCard";
import { Badge } from "@/components/Badge";
import { gallery } from "@/data/gallery";
import { news, pressMentions } from "@/data/news";

export const metadata: Metadata = {
  title: "Gallery & Media",
  description:
    "Photos, news, and press from The Water Street Club — moments from the Insurance Industry Awards Dinner, soirées, panels, and mentorship programs advancing diversity and inclusion.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Moments & Media"
        title="Gallery & Media"
        subtitle="A look at our community in action — and the latest news from The Water Street Club."
      />

      {/* Gallery by year */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Event highlights by year"
            intro="All images shown are original generated placeholders. The Club will supply real event photography."
          />
          <div className="mt-4">
            <Badge tone="placeholder">Photos placeholder</Badge>
          </div>
          <div className="mt-10 space-y-14">
            {gallery.map((group) => (
              <div key={group.year}>
                <div className="mb-5 flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-navy">{group.year}</h3>
                  <span className="h-px flex-1 bg-navy/10" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {group.items.map((item, i) => (
                    <GalleryCard key={`${group.year}-${i}`} item={item} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-white py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="News & Updates"
            title="From the Club"
            intro="Sample posts — replace with real announcements and stories."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-xl bg-offWhite p-6 shadow-card ring-1 ring-navy/5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-goldText">
                    {post.category}
                  </span>
                  <Badge tone="sample" />
                </div>
                <h3 className="mt-2 text-lg font-semibold text-navy">{post.title}</h3>
                <p className="mt-1 text-xs text-charcoal/70">{post.date}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="bg-offWhite py-20">
        <div className="container-content max-w-3xl">
          <SectionHeading
            eyebrow="In the News"
            title="Press mentions"
            intro="Placeholder entries — the Club's media coverage will be listed here."
          />
          <ul className="mt-10 divide-y divide-navy/10 rounded-xl bg-white shadow-card ring-1 ring-navy/5">
            {pressMentions.map((p, i) => (
              <li key={i} className="flex items-center gap-4 p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-gold">
                  <Newspaper size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-navy">{p.title}</p>
                  <p className="text-sm text-charcoal/70">
                    {p.outlet} · {p.date}
                  </p>
                </div>
                <Badge tone="placeholder" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
