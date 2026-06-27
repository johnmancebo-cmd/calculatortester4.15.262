import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import type { WSCEvent } from "@/data/events";
import { PlaceholderImage } from "./PlaceholderImage";
import { Badge } from "./Badge";

export function EventCard({ event, index = 0 }: { event: WSCEvent; index?: number }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy/5 transition-shadow hover:shadow-card-hover">
      <PlaceholderImage
        label={event.category}
        palette={event.category === "Awards Dinner" ? "gold" : "harbor"}
        seed={index}
        ratio="aspect-[16/9]"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-goldText">
            {event.category}
          </span>
          {!event.dateConfirmed ? <Badge tone="sample" /> : null}
        </div>
        <h3 className="text-lg font-semibold text-navy">{event.title}</h3>
        <div className="mt-3 space-y-1.5 text-sm text-charcoal/75">
          <p className="flex items-center gap-2">
            <CalendarDays size={15} className="shrink-0 text-charcoal/50" aria-hidden="true" />
            <span>
              <span className="sr-only">Date: </span>
              {event.date}
            </span>
          </p>
          <p className="flex items-start gap-2">
            <MapPin size={15} className="mt-0.5 shrink-0 text-charcoal/50" aria-hidden="true" />
            <span>
              <span className="sr-only">Location: </span>
              {event.location}
            </span>
          </p>
        </div>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-charcoal/70">
          {event.description}
        </p>
        <div className="mt-4">
          {event.upcoming ? (
            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold"
            >
              Event details
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span className="text-xs font-medium uppercase tracking-wide text-charcoal/70">
              Past event
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
