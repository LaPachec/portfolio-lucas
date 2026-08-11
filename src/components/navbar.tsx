import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(43,43,43,0.12)] bg-[rgba(224,224,224,0.86)] backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-tight text-[var(--charcoal-noir)] outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)]"
          aria-label="Ir para o início"
        >
          Lucas
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ironclad-grey)] transition-colors hover:text-[var(--charcoal-noir)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
          <a href="#contato">Contato</a>
        </Button>
      </nav>
    </header>
  );
}
