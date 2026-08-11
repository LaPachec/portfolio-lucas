"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";

type Locale = "pt" | "en";

type NavbarProps = {
  locale?: Locale;
};

const navigation = {
  pt: [
    { label: "Início", href: "#inicio", id: "inicio" },
    { label: "Sobre", href: "#sobre", id: "sobre" },
    { label: "Tecnologias", href: "#tecnologias", id: "tecnologias" },
    { label: "Projetos", href: "#projetos", id: "projetos" },
    { label: "Contato", href: "#contato", id: "contato" },
  ],
  en: [
    { label: "Home", href: "#inicio", id: "inicio" },
    { label: "About", href: "#sobre", id: "sobre" },
    { label: "Technologies", href: "#tecnologias", id: "tecnologias" },
    { label: "Projects", href: "#projetos", id: "projetos" },
    { label: "Contact", href: "#contato", id: "contato" },
  ],
};

export function Navbar({ locale = "pt" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const reduceMotion = useReducedMotion();
  const items = navigation[locale];
  const contactLabel = locale === "pt" ? "Contato" : "Contact";

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    function updateActiveSection() {
      const activationLine = window.innerHeight * 0.34;
      let current = sections[0]?.id ?? "inicio";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= activationLine) {
          current = section.id;
        }

        if (rect.top > activationLine) {
          break;
        }
      }

      const nearPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
      if (nearPageEnd && sections.at(-1)) {
        current = sections.at(-1)!.id;
      }

      setActiveSection(current);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [items]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(43,43,43,0.12)] bg-[rgba(224,224,224,0.86)] backdrop-blur">
      <nav
        aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-tight text-[var(--charcoal-noir)] outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)]"
          aria-label={locale === "pt" ? "Ir para o início" : "Go to home"}
          onClick={closeMenu}
        >
          Lucas
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {items.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="relative py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ironclad-grey)] transition-colors hover:text-[var(--charcoal-noir)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)]"
              >
                <span className={isActive ? "text-[var(--charcoal-noir)]" : undefined}>
                  {item.label}
                </span>
                {isActive ? (
                  <motion.span
                    layoutId="navbar-active-section"
                    className="absolute inset-x-0 -bottom-1 h-px bg-[var(--charcoal-noir)]"
                    transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center border border-[var(--moonlit-silver)] text-[10px] font-semibold uppercase tracking-[0.14em]">
            <a
              href="/"
              aria-current={locale === "pt" ? "page" : undefined}
              className={`px-2.5 py-2 transition-colors ${locale === "pt" ? "bg-[var(--charcoal-noir)] text-[var(--cloud-veil)]" : "text-[var(--ironclad-grey)] hover:text-[var(--charcoal-noir)]"}`}
            >
              PT
            </a>
            <a
              href="/en"
              aria-current={locale === "en" ? "page" : undefined}
              className={`px-2.5 py-2 transition-colors ${locale === "en" ? "bg-[var(--charcoal-noir)] text-[var(--cloud-veil)]" : "text-[var(--ironclad-grey)] hover:text-[var(--charcoal-noir)]"}`}
            >
              EN
            </a>
          </div>

          <Button asChild size="sm" variant="outline">
            <a href="#contato">{contactLabel}</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-[var(--moonlit-silver)] text-[var(--charcoal-noir)] transition-colors hover:border-[var(--charcoal-noir)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)] md:hidden"
          aria-label={isOpen ? (locale === "pt" ? "Fechar menu" : "Close menu") : locale === "pt" ? "Abrir menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-[rgba(43,43,43,0.12)] bg-[var(--cloud-veil)] px-5 py-5 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {items.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-center justify-between border-b border-[rgba(43,43,43,0.1)] py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--charcoal-noir)] transition-colors hover:text-[var(--urban-fog)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)]"
                >
                  {item.label}
                  {isActive ? <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--charcoal-noir)]" /> : null}
                </a>
              );
            })}

            <div className="mt-4 flex gap-2">
              <a href="/" className={`border px-4 py-2 text-xs font-semibold ${locale === "pt" ? "bg-[var(--charcoal-noir)] text-[var(--cloud-veil)]" : "border-[var(--moonlit-silver)]"}`}>PT</a>
              <a href="/en" className={`border px-4 py-2 text-xs font-semibold ${locale === "en" ? "bg-[var(--charcoal-noir)] text-[var(--cloud-veil)]" : "border-[var(--moonlit-silver)]"}`}>EN</a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
