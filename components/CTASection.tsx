import Link from "next/link";

export interface CTAItem {
  label: string;
  href: string;
  primary?: boolean;
}

export function CTASection({
  title,
  body,
  ctas,
}: {
  title: React.ReactNode;
  body?: React.ReactNode;
  ctas: CTAItem[];
}) {
  return (
    <section className="bg-deepBlue">
      <div className="container-content py-16 text-center">
        <h2 className="mx-auto max-w-2xl text-display-md font-semibold text-offWhite">
          {title}
        </h2>
        {body ? (
          <p className="mx-auto mt-4 max-w-xl text-offWhite/80">{body}</p>
        ) : null}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={`inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                cta.primary
                  ? "bg-gold text-navy hover:bg-softGold"
                  : "bg-offWhite/10 text-offWhite ring-1 ring-inset ring-offWhite/30 hover:bg-offWhite/20"
              }`}
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
