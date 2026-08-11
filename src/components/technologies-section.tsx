import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const technologyGroups = [
  {
    title: "Front-end",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "APIs REST", "Autenticação", "Validação", "Banco de dados"],
  },
  {
    title: "Ferramentas / Infraestrutura",
    items: ["Git", "GitHub", "Deploy", "ESLint", "Ambiente local"],
  },
];

export function TechnologiesSection() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tecnologias-title"
      className="border-t border-[rgba(43,43,43,0.12)] bg-[rgba(43,43,43,0.04)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          id="tecnologias-title"
          eyebrow="Tecnologias"
          title="Stack objetiva para construir, manter e evoluir."
          description="A base técnica prioriza produtividade, tipagem, componentização e uma experiência consistente em diferentes telas."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {technologyGroups.map((group) => (
            <Card key={group.title} className="p-6">
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="mt-7 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
