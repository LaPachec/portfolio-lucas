import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";

const indicators = [
  { value: "Full Stack", label: "Atuação conectando interface, API, dados e regra de negócio" },
  { value: "UI sólida", label: "Construção responsiva com atenção a clareza e acessibilidade" },
  { value: "Entrega", label: "Organização técnica para evoluir sem perder controle" },
];

export function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="border-t border-[rgba(43,43,43,0.12)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1fr] lg:py-28">
        <SectionHeading
          id="sobre-title"
          eyebrow="Sobre"
          title="Desenvolvimento web com visão de produto e base técnica."
          description="Sou desenvolvedor Full Stack com foco na construção de aplicações web modernas, atuando desde a criação de interfaces até APIs, bancos de dados e regras de negócio."
        />

        <div>
          <p className="text-xl leading-9 text-[var(--charcoal-noir)]">
            Busco desenvolver soluções organizadas, funcionais e fáceis de evoluir,
            equilibrando experiência do usuário, estrutura de código e decisões
            técnicas proporcionais ao problema.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {indicators.map((indicator) => (
              <Card key={indicator.value} className="p-5">
                <CardContent>
                  <strong className="block text-2xl font-semibold tracking-tight text-[var(--charcoal-noir)]">
                    {indicator.value}
                  </strong>
                  <span className="mt-3 block text-sm leading-6 text-[var(--ironclad-grey)]">
                    {indicator.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
