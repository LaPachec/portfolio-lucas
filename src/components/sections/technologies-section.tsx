import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";

const technologyGroups = [
  {
    title: "Front-end",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Vite", icon: "vite" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Ant Design", icon: "antdesign" },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Fastify", icon: "fastify" },
      { name: "Express", icon: "express" },
      { name: "Prisma", icon: "prisma" },
      { name: "JWT" },
    ],
  },
  {
    title: "Banco de dados / Infraestrutura",
    items: [
      { name: "SQLite", icon: "sqlite" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Docker Compose", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "ESLint", icon: "eslint" },
      { name: "Jest", icon: "jest" },
      { name: "Supertest" },
    ],
  },
];

function TechnologyIcon({ name, icon }: { name: string; icon?: string }) {
  if (!icon) {
    return (
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[var(--moonlit-silver)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--ironclad-grey)]"
      >
        {name.slice(0, 2)}
      </span>
    );
  }

  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[var(--moonlit-silver)] bg-white/35">
      <Image
        src={`https://cdn.simpleicons.org/${icon}/2B2B2B`}
        alt=""
        width={22}
        height={22}
        aria-hidden="true"
        className="size-[22px] object-contain"
      />
    </span>
  );
}

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
              <CardContent className="mt-7 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 border-b border-[rgba(43,43,43,0.08)] pb-3 last:border-b-0 last:pb-0"
                  >
                    <TechnologyIcon name={item.name} icon={item.icon} />
                    <span className="text-sm font-semibold text-[var(--charcoal-noir)]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
