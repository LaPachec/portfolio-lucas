import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="border-t border-[rgba(43,43,43,0.12)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          id="projetos-title"
          eyebrow="Projetos"
          title="Projetos com contexto real."
          description="Trabalhos selecionados para mostrar landing pages, aplicações web e sistemas com regras de negócio mais específicas."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} className="overflow-hidden transition-colors hover:border-[var(--charcoal-noir)]">
              <div className="relative aspect-[16/10] border-b border-[var(--moonlit-silver)] bg-[var(--charcoal-noir)]">
                <Image
                  src={project.image}
                  alt={`Prévia visual do projeto ${project.title}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 sm:p-7">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="w-fit">{project.category}</Badge>
                    {project.status ? <Badge className="w-fit">{project.status}</Badge> : null}
                    {project.hasFeedback ? <Badge className="w-fit">Feedback de cliente</Badge> : null}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </CardContent>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {project.liveUrl ? (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Ver projeto
                        <ExternalLink aria-hidden="true" size={16} />
                      </a>
                    </Button>
                  ) : null}
                  <Button size="sm" variant="outline" disabled title="Página de detalhes ainda não criada">
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
