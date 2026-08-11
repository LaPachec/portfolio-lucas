"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Tecnologias", href: "#tecnologias", id: "tecnologias" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.05, 0.15, 0.3, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

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
          onClick={closeMenu}
        >
          Lucas
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
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

        <Button asChild size="sm" variant="outline" className="hidden md:inline-flex">
          <a href="#contato">Contato</a>
        </Button>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-[var(--moonlit-silver)] text-[var(--charcoal-noir)] transition-colors hover:border-[var(--charcoal-noir)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)] md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
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
            {navigation.map((item) => {
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
          </div>
        </div>
      ) : null}
    </header>
  );
}
