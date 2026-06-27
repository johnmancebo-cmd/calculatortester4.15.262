"use client";

import { useMemo, useState } from "react";
import { EventCard } from "./EventCard";
import type { WSCEvent, EventCategory } from "@/data/events";

export function EventsBrowser({
  events,
  categories,
}: {
  events: WSCEvent[];
  categories: EventCategory[];
}) {
  const [active, setActive] = useState<EventCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? events : events.filter((e) => e.category === active)),
    [active, events],
  );

  const filters: (EventCategory | "All")[] = ["All", ...categories];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter events by category"
        className="flex flex-wrap gap-2"
      >
        {filters.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-navy text-offWhite"
                  : "bg-white text-charcoal/75 ring-1 ring-inset ring-navy/15 hover:bg-navy/5"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-charcoal/55" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "event" : "events"}
        {active !== "All" ? ` in ${active}` : ""}.
      </p>

      {filtered.length ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e, i) => (
            <EventCard key={e.slug} event={e} index={i} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-xl bg-white p-8 text-center text-charcoal/60 ring-1 ring-navy/5">
          No events in this category yet.
        </p>
      )}
    </div>
  );
}
