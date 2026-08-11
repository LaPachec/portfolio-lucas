import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const indicators = [
  { value: "Full Stack", label: "Atuação em front-end, back-end e integração" },
  { value: "UI sólida", label: "Interfaces responsivas, acessíveis e objetivas" },
  { value: "Entrega", label: "Foco em produto funcional, claro e evolutivo" },
];

export function AboutSection() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="border-t border-[rgba(43,43,43,0.12)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1fr] lg:py-28">
        <SectionHeading
          id="sobre-title"
          eyebrow="Sobre"
          title="Código com estrutura, interface com intenção."
          description="Lucas desenvolve soluções digitais combinando visão de produto, organização técnica e cuidado visual."
        />

        <div>
          <p className="text-xl leading-9 text-[var(--charcoal-noir)]">
            A proposta deste portfólio é apresentar projetos com uma leitura direta:
            problemas resolvidos, tecnologias utilizadas e decisões que tornam cada
            entrega mais estável, clara e fácil de manter.
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
