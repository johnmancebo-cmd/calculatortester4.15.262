import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { EventsBrowser } from "@/components/EventsBrowser";
import { Badge } from "@/components/Badge";
import { upcomingEvents, pastEvents, eventCategories } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore upcoming and past events from The Water Street Club — the Insurance Industry Awards Dinner, summer soirées, panels, mentorship programs, and networking for diverse insurance professionals.",
};

export default function EventsPage() {
  return (
    <>
      <Hero
        eyebrow="Gather With Us"
        title="Events"
        subtitle="From our signature awards dinner to soirées, panels, and mentorship — every event is built to connect and elevate diverse insurance professionals."
        ctas={[
          { label: "Attend the Awards Dinner", href: "/awards-dinner", variant: "primary" },
        ]}
      />

      {/* Upcoming */}
      <section className="bg-offWhite py-20">
        <div className="container-content">
          <SectionHeading
            eyebrow="What's Next"
            title="Upcoming events"
            intro="Details for upcoming events are samples pending confirmation."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((e, i) => (
              <EventCard key={e.slug} event={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Past archive with filter */}
      <section className="bg-white py-20">
        <div className="container-content">
          <div className="flex flex-wrap items-center gap-3">
            <SectionHeading
              eyebrow="Looking Back"
              title="Past events archive"
              intro="Event titles and years are confirmed; exact dates and some venues are samples to be verified by the Club."
            />
          </div>
          <div className="mt-4">
            <Badge tone="sample">Dates &amp; some venues — confirm</Badge>
          </div>
          <div className="mt-8">
            <EventsBrowser events={pastEvents} categories={eventCategories} />
          </div>
        </div>
      </section>
    </>
  );
}
