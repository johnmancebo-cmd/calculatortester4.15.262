/**
 * Initials avatar placeholder — used until real headshots are supplied.
 * Derives initials from a name; ignores [PLACEHOLDER] bracket text.
 */
function initials(name: string): string {
  const clean = name.replace(/\[.*?\]/g, "").trim();
  if (!clean) return "WSC";
  const parts = clean.split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase() || "WSC";
}

export function Avatar({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-square w-full items-center justify-center rounded-lg bg-gradient-to-br from-deepBlue to-navy ${className}`}
      role="img"
      aria-label={`Placeholder headshot for ${name.replace(/\[.*?\]/g, "").trim() || "leader"}`}
    >
      <span className="font-display text-3xl font-semibold tracking-wide text-softGold">
        {initials(name)}
      </span>
    </div>
  );
}
