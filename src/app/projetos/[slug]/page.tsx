import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--cloud-veil)] text-[var(--charcoal-noir)]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
        <Button asChild variant="ghost" size="sm">
          <Link href="/#projetos">
            <ArrowLeft aria-hidden="true" size={16} />
            Voltar aos projetos
          </Link>
        </Button>

        <section className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--urban-fog)]">
              {project.category}
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--ironclad-grey)]">
              {project.details.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
              {project.status ? <Badge>{project.status}</Badge> : null}
            </div>

            {project.liveUrl ? (
              <div className="mt-8">
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Ver projeto
                    <ExternalLink aria-hidden="true" size={17} />
                  </a>
                </Button>
              </div>
            ) : null}
          </div>

          <div className="overflow-hidden border border-[var(--moonlit-silver)] bg-[var(--charcoal-noir)]">
            <Image
              src={project.image}
              alt={`Interface do projeto ${project.title}`}
              width={1600}
              height={1000}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="mt-16 border-t border-[rgba(43,43,43,0.14)] pt-12 lg:mt-24 lg:grid lg:grid-cols-[0.55fr_1fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--urban-fog)]">
              Destaques
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              O que este projeto demonstra
            </h2>
          </div>

          <ul className="mt-8 space-y-4 lg:mt-0">
            {project.details.highlights.map((highlight, index) => (
              <li
                key={highlight}
                className="grid grid-cols-[auto_1fr] gap-4 border-b border-[rgba(43,43,43,0.12)] pb-4 text-base leading-7 text-[var(--ironclad-grey)]"
              >
                <span className="font-semibold text-[var(--charcoal-noir)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
