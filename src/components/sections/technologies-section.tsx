"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";

type Locale = "pt" | "en";

type TechnologiesSectionProps = {
  locale?: Locale;
};

const technologyGroups = {
  pt: [
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
      ],
    },
  ],
  en: [
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
      ],
    },
    {
      title: "Database / Infrastructure",
      items: [
        { name: "SQLite", icon: "sqlite" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Docker Compose", icon: "docker" },
        { name: "Vercel", icon: "vercel" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "ESLint", icon: "eslint" },
        { name: "Jest", icon: "jest" },
      ],
    },
  ],
};

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
        unoptimized
      />
    </span>
  );
}

export function TechnologiesSection({ locale = "pt" }: TechnologiesSectionProps) {
  const reduceMotion = useReducedMotion();
  const groups = technologyGroups[locale];
  const heading =
    locale === "pt"
      ? {
          eyebrow: "Tecnologias",
          title: "Tecnologias usadas em projetos reais.",
          description:
            "Uma seleção enxuta das ferramentas identificadas nos projetos analisados, separando interface, servidor, dados e suporte ao desenvolvimento.",
        }
      : {
          eyebrow: "Technologies",
          title: "Technologies used in real projects.",
          description:
            "A focused selection of tools used across the projects, covering interfaces, server-side development, data and development workflows.",
        };

  return (
    <section
      id="tecnologias"
      aria-labelledby="tecnologias-title"
      className="border-t border-[rgba(43,43,43,0.12)] bg-[rgba(43,43,43,0.04)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            id="tecnologias-title"
            eyebrow={heading.eyebrow}
            title={heading.title}
            description={heading.description}
          />
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                      borderRadius: 18,
                      boxShadow: "0 18px 42px rgba(43, 43, 43, 0.12)",
                    }
              }
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
                delay: reduceMotion ? 0 : groupIndex * 0.07,
              }}
              className="overflow-hidden border border-[var(--moonlit-silver)] bg-[rgba(224,224,224,0.52)]"
            >
              <Card className="h-full border-0 bg-transparent p-6">
                <CardHeader>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-7 space-y-3">
                  {group.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{
                        duration: 0.36,
                        delay: reduceMotion ? 0 : groupIndex * 0.05 + itemIndex * 0.035,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center gap-3 border-b border-[rgba(43,43,43,0.08)] pb-3 last:border-b-0 last:pb-0"
                    >
                      <motion.div
                        whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <TechnologyIcon name={item.name} icon={item.icon} />
                      </motion.div>
                      <span className="text-sm font-semibold text-[var(--charcoal-noir)]">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
