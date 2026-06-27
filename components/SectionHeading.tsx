export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  as = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const Tag = as;
  const isLight = tone === "light";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
            isLight ? "text-softGold" : "text-goldText"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`text-display-md font-semibold ${
          isLight ? "text-offWhite" : "text-navy"
        }`}
      >
        {title}
      </Tag>
      {intro ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isLight ? "text-offWhite/80" : "text-charcoal/75"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
