import { Award } from "lucide-react";
import type { AwardCategory } from "@/data/awards";
import { Badge } from "./Badge";

export function AwardCategoryCard({ category }: { category: AwardCategory }) {
  return (
    <article className="flex flex-col rounded-xl bg-white p-6 shadow-card ring-1 ring-navy/5">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-gold">
          <Award size={22} />
        </span>
        <Badge tone={category.confirmed ? "confirmed" : "sample"} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy">{category.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">
        {category.description}
      </p>
    </article>
  );
}
