import Link from "next/link";
import { Check, Star } from "lucide-react";
import type { SponsorshipTier } from "@/data/sponsors";
import { Badge } from "./Badge";

export function SponsorTierCard({ tier }: { tier: SponsorshipTier }) {
  return (
    <article
      className={`relative flex flex-col rounded-xl p-6 shadow-card ring-1 ${
        tier.featured
          ? "bg-navy text-offWhite ring-gold/40"
          : "bg-white text-charcoal ring-navy/5"
      }`}
    >
      {tier.featured ? (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
          <Star size={12} /> Most visible
        </span>
      ) : null}
      <div className="flex items-center justify-between gap-2">
        <h3
          className={`text-xl font-semibold ${
            tier.featured ? "text-offWhite" : "text-navy"
          }`}
        >
          {tier.name}
        </h3>
      </div>
      <p
        className={`mt-1 text-sm ${
          tier.featured ? "text-offWhite/75" : "text-charcoal/65"
        }`}
      >
        {tier.tagline}
      </p>
      <div className="mt-3">
        <Badge tone="sample">Benefits sample — confirm</Badge>
      </div>
      <ul className="mt-5 flex-1 space-y-3 text-sm">
        {tier.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${tier.featured ? "text-gold" : "text-gold"}`}
            />
            <span className={tier.featured ? "text-offWhite/85" : "text-charcoal/80"}>
              {b}
            </span>
          </li>
        ))}
      </ul>
      <p
        className={`mt-5 text-xs ${
          tier.featured ? "text-offWhite/70" : "text-charcoal/70"
        }`}
      >
        Pricing available on request — no amounts are published.
      </p>
      <Link
        href="/sponsors#inquiry"
        className={`mt-5 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
          tier.featured
            ? "bg-gold text-navy hover:bg-softGold"
            : "bg-navy text-offWhite hover:bg-deepBlue"
        }`}
      >
        Inquire about {tier.name}
      </Link>
    </article>
  );
}
