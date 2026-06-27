/**
 * Visible content-status flag. Renders [SAMPLE]/[PLACEHOLDER]/CONFIRMED pills so
 * unverified content is obvious on-screen and greppable. Driven by data booleans.
 */
type Tone = "sample" | "placeholder" | "confirmed";

const STYLES: Record<Tone, string> = {
  sample: "bg-amber-100 text-amber-900 ring-amber-300",
  placeholder: "bg-lightGray text-charcoal/70 ring-gray-300",
  confirmed: "bg-emerald-100 text-emerald-900 ring-emerald-300",
};

const LABELS: Record<Tone, string> = {
  sample: "SAMPLE — confirm",
  placeholder: "PLACEHOLDER",
  confirmed: "Confirmed",
};

export function Badge({
  tone,
  children,
  className = "",
}: {
  tone: Tone;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${STYLES[tone]} ${className}`}
    >
      {children ?? LABELS[tone]}
    </span>
  );
}
