import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = ["React", "JavaScript", "Next.js", "Web Design", "Java"];

const education = [
  {
    period: "2019 - 2021",
    institution: "SENAI",
    course: "Automação Industrial",
    degree: "Tecnólogo",
  },
  {
    period: "2021 - 2026",
    institution: "Pontifícia Universidade Católica",
    course: "Sistema de Informação",
    degree: "Bacharelado",
  },
];

const experience = [
  {
    period: "2021 - 2023",
    company: "SENAI Centro 4.0",
    role: "Trainee",
    highlights: ["Criação de sistemas", "Execução de tarefas relacionadas à WorldSkills"],
  },
  {
    period: "2023 - 2025",
    company: "SENAI Centro 4.0",
    role: "Instrutor Profissional de Educação",
    highlights: [
      "Instrução de alunos da WorldSkills e FRC",
      "Implementação de algoritmos para robótica com Java",
      "Desenvolvimento em Figma",
    ],
  },
];

export const metadata = {
  title: "Currículo",
  description: "Currículo profissional de Lucas Araújo, desenvolvedor de software.",
};

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-[var(--cloud-veil)] text-[var(--charcoal-noir)]">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft aria-hidden="true" size={16} />
              Voltar ao portfólio
            </Link>
          </Button>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <a href="mailto:lucasaraujox@hotmail.com">
                <Mail aria-hidden="true" size={16} />
                E-mail
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="https://www.linkedin.com/in/lucas-araujo-3007b9354/" target="_blank" rel="noreferrer">
                LinkedIn
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            </Button>
          </div>
        </div>

        <header className="mt-12 border-b border-[rgba(43,43,43,0.14)] pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--urban-fog)]">Currículo</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">Lucas Araújo</h1>
          <p className="mt-4 text-2xl text-[var(--ironclad-grey)] sm:text-3xl">Desenvolvedor de Software</p>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--ironclad-grey)]">
            Profissional comunicativo, proativo e colaborativo, com facilidade para trabalhar em equipe,
            ensinar e compartilhar conhecimentos. Adaptável a desafios, focado em soluções e no crescimento contínuo.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="space-y-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Habilidades</CardTitle>
              </CardHeader>
              <CardContent className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Idiomas</CardTitle>
              </CardHeader>
              <CardContent className="mt-6 space-y-4 text-[var(--ironclad-grey)]">
                <div className="flex items-center justify-between gap-4 border-b border-[rgba(43,43,43,0.1)] pb-4">
                  <span>Português</span>
                  <Badge>C2</Badge>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Inglês</span>
                  <Badge>B2</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-12">
            <section aria-labelledby="education-title">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--urban-fog)]">Formação</p>
              <h2 id="education-title" className="mt-3 text-3xl font-semibold tracking-tight">Escolaridade</h2>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <Card key={`${item.institution}-${item.period}`} className="p-6">
                    <p className="text-sm font-semibold text-[var(--urban-fog)]">{item.period}</p>
                    <h3 className="mt-2 text-xl font-semibold">{item.institution}</h3>
                    <p className="mt-2 text-[var(--ironclad-grey)]">{item.course} · {item.degree}</p>
                  </Card>
                ))}
              </div>
            </section>

            <section aria-labelledby="experience-title">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--urban-fog)]">Carreira</p>
              <h2 id="experience-title" className="mt-3 text-3xl font-semibold tracking-tight">Experiência</h2>
              <div className="mt-6 space-y-4">
                {experience.map((item) => (
                  <Card key={`${item.company}-${item.period}`} className="p-6">
                    <p className="text-sm font-semibold text-[var(--urban-fog)]">{item.period}</p>
                    <h3 className="mt-2 text-xl font-semibold">{item.company}</h3>
                    <p className="mt-1 font-medium text-[var(--ironclad-grey)]">{item.role}</p>
                    <ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--ironclad-grey)]">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span aria-hidden="true">—</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
