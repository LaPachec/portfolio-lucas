type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.32em] ${
          inverted ? "text-[var(--moonlit-silver)]" : "text-[var(--urban-fog)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`text-4xl font-semibold tracking-tight sm:text-5xl ${
          inverted ? "text-[var(--cloud-veil)]" : "text-[var(--charcoal-noir)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${
            inverted ? "text-[var(--moonlit-silver)]" : "text-[var(--ironclad-grey)]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
