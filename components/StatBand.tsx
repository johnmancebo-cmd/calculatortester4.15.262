/**
 * Credibility stat band. Every figure here is CONFIRMED (no invented numbers):
 * - ~400 professionals/year (confirmed reach)
 * - Award Dinner editions 2018, 2019, 2022, 2023, 2024 (confirmed = 5)
 * - 4 mission pillars (confirmed)
 * - 501(c)(3) status (confirmed)
 */
const stats = [
  { value: "~400", label: "Diverse insurance professionals connected each year" },
  { value: "5", label: "Award Dinner editions since 2018" },
  { value: "4", label: "Mission pillars guiding our work" },
  { value: "501(c)(3)", label: "Nonprofit — donations tax-deductible" },
];

export function StatBand({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <dl
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4 ${
        dark ? "bg-white/10 ring-1 ring-white/10" : "bg-navy/10 ring-1 ring-navy/5"
      }`}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className={`flex flex-col gap-1 p-6 text-center ${dark ? "bg-navy" : "bg-white"}`}
        >
          <dt className="sr-only">{s.label}</dt>
          <dd
            className={`font-display text-3xl font-semibold sm:text-4xl ${
              dark ? "text-softGold" : "text-gold"
            }`}
          >
            {s.value}
          </dd>
          <p
            className={`text-xs leading-relaxed ${
              dark ? "text-offWhite/70" : "text-charcoal/65"
            }`}
          >
            {s.label}
          </p>
        </div>
      ))}
    </dl>
  );
}
