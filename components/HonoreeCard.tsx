import type { Honoree } from "@/data/honorees";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";

export function HonoreeCard({ honoree }: { honoree: Honoree }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-navy/5">
      <div className="p-5 pb-0">
        <Avatar name={honoree.name} className="rounded-xl" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">
            {honoree.award}
          </span>
          <Badge tone={honoree.confirmed ? "confirmed" : "placeholder"} />
        </div>
        <h3 className="text-lg font-semibold text-navy">{honoree.name}</h3>
        <p className="mt-1 text-sm text-charcoal/70">
          {honoree.title}
          {honoree.company ? ` · ${honoree.company}` : ""}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
          {honoree.bio}
        </p>
        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-charcoal/45">
          {honoree.year}
        </p>
      </div>
    </article>
  );
}
