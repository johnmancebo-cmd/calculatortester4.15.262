/**
 * Generated SVG wordmark for The Water Street Club.
 * Original mark — a stylized harbor/water motif + serif lettering.
 * NOT any real organization's logo.
 */
export function Wordmark({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const ink = variant === "light" ? "#F8F6F0" : "#071A2F";
  const gold = "#C9A227";
  // Tagline sits on a light bg in the "dark" variant — use the accessible gold there.
  const taglineColor = variant === "light" ? gold : "#7A5E0C";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="17" cy="17" r="16" fill="none" stroke={gold} strokeWidth="1.5" />
        {/* harbor waterline waves */}
        <path
          d="M6 21 q2.75 -3 5.5 0 t5.5 0 t5.5 0 t5.5 0"
          fill="none"
          stroke={gold}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 25 q2.75 -3 5.5 0 t5.5 0 t5.5 0 t5.5 0"
          fill="none"
          stroke={ink}
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* skyline marks */}
        <rect x="11" y="9" width="3" height="8" fill={ink} />
        <rect x="15.5" y="6" width="3" height="11" fill={ink} />
        <rect x="20" y="11" width="3" height="6" fill={ink} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[15px] font-semibold tracking-wide"
          style={{ color: ink }}
        >
          The Water Street Club
        </span>
        <span
          className="mt-0.5 text-[9px] font-sans uppercase tracking-[0.22em]"
          style={{ color: taglineColor }}
        >
          Diversity &amp; Inclusion in Insurance
        </span>
      </span>
    </span>
  );
}
