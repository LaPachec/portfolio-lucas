type FooterProps = {
  locale?: "pt" | "en";
};

export function Footer({ locale = "pt" }: FooterProps) {
  return (
    <footer className="border-t border-[rgba(224,224,224,0.16)] bg-[var(--charcoal-noir)] px-5 py-8 text-[var(--moonlit-silver)] sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>{locale === "pt" ? "Lucas - Desenvolvedor Full Stack" : "Lucas - Full Stack Developer"}</p>
        <p>{locale === "pt" ? "Portfólio profissional" : "Professional portfolio"}</p>
      </div>
    </footer>
  );
}
