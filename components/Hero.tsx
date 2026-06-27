import Link from "next/link";

export interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

const ctaClass: Record<NonNullable<HeroCTA["variant"]>, string> = {
  primary:
    "bg-gold text-navy hover:bg-softGold focus-visible:outline-offWhite",
  secondary:
    "bg-offWhite/10 text-offWhite ring-1 ring-inset ring-offWhite/30 hover:bg-offWhite/20",
  ghost: "text-offWhite underline-offset-4 hover:underline",
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctas = [],
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  ctas?: HeroCTA[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-offWhite">
      {/* harbor-motif backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deepBlue to-navy" />
        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.18]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 120 q150 -60 300 0 t300 0 t300 0 t300 0 V200 H0 Z"
            fill="#C9A227"
            fillOpacity="0.5"
          />
          <path
            d="M0 150 q150 -60 300 0 t300 0 t300 0 t300 0 V200 H0 Z"
            fill="#1F4E79"
          />
        </svg>
        <div className="absolute right-[-4rem] top-[-4rem] h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-content relative py-20 sm:py-28">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-softGold">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-display-xl font-semibold">{title}</h1>
          {subtitle ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-offWhite/80">
              {subtitle}
            </p>
          ) : null}
          {ctas.length ? (
            <div className="mt-9 flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={`inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold shadow-sm transition-colors ${
                    ctaClass[cta.variant ?? "primary"]
                  }`}
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
