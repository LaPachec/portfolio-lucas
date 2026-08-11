import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";

const technologyGroups = [
  {
    title: "Front-end",
    items: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "Ant Design"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "Fastify", "Express", "Prisma", "JWT"],
  },
  {
    title: "Banco de dados / Infraestrutura",
    items: ["SQLite", "PostgreSQL", "Docker Compose", "Vercel"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "ESLint", "Jest", "Supertest"],
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
          title="Tecnologias usadas em projetos reais."
          description="Uma seleção enxuta das ferramentas identificadas nos projetos analisados, separando interface, servidor, dados e suporte ao desenvolvimento."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
