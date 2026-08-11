import Image from "next/image";
import { GitBranch, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-20"
    >
      <div className="max-w-4xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-[var(--urban-fog)]">
          Portfólio
        </p>
        <h1
          id="hero-title"
          className="text-6xl font-semibold tracking-tight text-[var(--charcoal-noir)] sm:text-7xl lg:text-8xl"
        >
          Lucas
        </h1>
        <p className="mt-4 text-2xl font-medium text-[var(--ironclad-grey)] sm:text-4xl">
          Desenvolvedor Full Stack
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--ironclad-grey)]">
          Construo interfaces, produtos digitais e sistemas web com atenção a clareza,
          performance e manutenção.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#projetos">
              Ver projetos
              <MoveRight aria-hidden="true" size={18} />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/LaPachec" target="_blank" rel="noreferrer">
              <GitBranch aria-hidden="true" size={18} />
              GitHub
            </a>
          </Button>
        </div>
      </div>

      <div className="relative min-h-[360px] overflow-hidden border border-[var(--moonlit-silver)] bg-[var(--charcoal-noir)] sm:min-h-[520px]">
        <Image
          src="/images/lucas-editorial.svg"
          alt="Composição editorial abstrata do portfólio de Lucas"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>
    </section>
  );
}
