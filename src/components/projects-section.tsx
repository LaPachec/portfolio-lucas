import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="border-t border-[rgba(43,43,43,0.12)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          id="projetos-title"
          eyebrow="Projetos"
          title="Primeiros trabalhos em destaque."
          description="Uma curadoria inicial para mostrar diferentes contextos: produto, evento, institucional e gestão."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-colors hover:border-[var(--charcoal-noir)]">
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
                  <Badge className="w-fit">{project.category}</Badge>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
