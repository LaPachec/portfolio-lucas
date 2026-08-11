import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { FeedbackDialog } from "@/components/shared/feedback-dialog";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
                    {project.feedback !== undefined ? <Badge className="w-fit">Feedback de cliente</Badge> : null}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </CardContent>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Ver projeto
                        <ExternalLink aria-hidden="true" size={16} />
                      </a>
                    </Button>
                  ) : null}

                  <Button asChild size="sm" variant="outline">
                    <Link href={`/projetos/${project.slug}`}>
                      Ver detalhes
                      <ArrowRight aria-hidden="true" size={16} />
                    </Link>
                  </Button>

                  {project.feedback !== undefined ? (
                    <FeedbackDialog
                      projectTitle={project.title}
                      feedback={project.feedback}
                      pending={project.feedbackPending}
                    />
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
