/**
 * Original generated placeholder imagery — gradient/harbor-motif SVG blocks.
 * No copyrighted photos. Use until real photography is supplied.
 */
const PALETTES: Record<string, [string, string]> = {
  navy: ["#071A2F", "#0B2341"],
  gold: ["#0B2341", "#C9A227"],
  harbor: ["#0B2341", "#1F4E79"],
  dusk: ["#071A2F", "#5b3a7a"],
};

export function PlaceholderImage({
  label,
  ratio = "aspect-[4/3]",
  palette = "harbor",
  className = "",
  seed = 0,
}: {
  label?: string;
  ratio?: string;
  palette?: keyof typeof PALETTES;
  className?: string;
  seed?: number;
}) {
  const [from, to] = PALETTES[palette] ?? PALETTES.harbor;
  const gid = `g${palette}${seed}`;
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg ${ratio} ${className}`}
      role="img"
      aria-label={label ? `Placeholder image: ${label}` : "Decorative placeholder image"}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#${gid})`} />
        {/* harbor waterline */}
        <path
          d={`M0 ${210 + (seed % 3) * 12} q50 -22 100 0 t100 0 t100 0 t100 0 V300 H0 Z`}
          fill="#ffffff"
          fillOpacity="0.06"
        />
        <path
          d={`M0 ${232 + (seed % 3) * 10} q50 -22 100 0 t100 0 t100 0 t100 0 V300 H0 Z`}
          fill="#ffffff"
          fillOpacity="0.05"
        />
        <circle cx={320 - (seed % 4) * 30} cy="70" r="26" fill="#C9A227" fillOpacity="0.22" />
      </svg>
      {label ? (
        <span className="absolute inset-x-0 bottom-0 p-3 text-[11px] font-medium uppercase tracking-wider text-offWhite/80">
          {label}
        </span>
      ) : null}
    </div>
  );
}
