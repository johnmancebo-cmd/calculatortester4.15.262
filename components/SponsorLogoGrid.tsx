import type { Sponsor, SponsorTier } from "@/data/sponsors";
import { Badge } from "./Badge";

const TIER_ORDER: SponsorTier[] = ["Platinum", "Gold", "Silver", "Supporting"];

function LogoTile({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="flex aspect-[3/2] items-center justify-center rounded-lg border border-dashed border-navy/20 bg-white p-4 text-center">
      <span className="text-xs font-medium uppercase tracking-wide text-charcoal/45">
        {sponsor.name}
      </span>
    </div>
  );
}

export function SponsorLogoGrid({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="space-y-10">
      {TIER_ORDER.map((tier) => {
        const group = sponsors.filter((s) => s.tier === tier);
        if (!group.length) return null;
        return (
          <div key={tier}>
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
                {tier}
              </h3>
              <span className="h-px flex-1 bg-navy/10" />
              <Badge tone="placeholder">Logos placeholder</Badge>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {group.map((s, i) => (
                <LogoTile key={`${tier}-${i}`} sponsor={s} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
