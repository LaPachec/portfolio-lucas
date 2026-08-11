"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { FeedbackDialog } from "@/components/shared/feedback-dialog";
import { ProjectDetailsDialog } from "@/components/shared/project-details-dialog";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();

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
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -7,
                      borderRadius: 24,
                      boxShadow: "0 24px 60px rgba(43, 43, 43, 0.18)",
                    }
              }
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
                mass: 0.8,
                delay: reduceMotion ? 0 : index * 0.075,
              }}
              className="overflow-hidden border border-[var(--moonlit-silver)] bg-[rgba(224,224,224,0.52)]"
            >
              <Card className="h-full overflow-hidden border-0 bg-transparent">
                <div className="relative aspect-[16/10] border-b border-[var(--moonlit-silver)] bg-[var(--charcoal-noir)]">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={reduceMotion ? undefined : { scale: 1.025 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <Image
                      src={project.image}
                      alt={`Prévia visual do projeto ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </motion.div>
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

                    <ProjectDetailsDialog project={project} />

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
