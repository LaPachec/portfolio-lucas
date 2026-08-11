"use client";

import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ExternalLink, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectDetailsDialogProps = {
  project: Project;
};

export function ProjectDetailsDialog({ project }: ProjectDetailsDialogProps) {
  const [open, setOpen] = React.useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={cn(buttonVariants({ variant: "outline", size: "sm" }), "cursor-pointer")}>
        Ver detalhes
      </Dialog.Trigger>

      <AnimatePresence>
        {open ? (
          <Dialog.Portal keepMounted>
            <Dialog.Backdrop
              render={
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              }
              className="fixed inset-0 z-[70] bg-[rgba(43,43,43,0.76)] backdrop-blur-sm"
            />

            <Dialog.Viewport className="fixed inset-0 z-[80] grid overflow-y-auto px-4 py-8 sm:px-8 sm:py-10">
              <Dialog.Popup
                render={
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 18, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 210, damping: 24, mass: 0.8 }}
                  />
                }
                className="relative m-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-[var(--moonlit-silver)] bg-[var(--cloud-veil)] text-[var(--charcoal-noir)] shadow-2xl"
              >
                <Dialog.Close
                  className="absolute right-4 top-4 z-20 inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--moonlit-silver)] bg-[var(--cloud-veil)] text-[var(--charcoal-noir)] transition-colors hover:border-[var(--charcoal-noir)] hover:bg-[var(--charcoal-noir)] hover:text-[var(--cloud-veil)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)]"
                  aria-label="Fechar detalhes do projeto"
                >
                  <X aria-hidden="true" size={18} />
                </Dialog.Close>

                <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[280px] bg-[var(--charcoal-noir)] sm:min-h-[380px] lg:min-h-full">
                    <Image
                      src={project.image}
                      alt={`Interface do projeto ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 45vw, 100vw"
                    />
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--urban-fog)]">
                      {project.category}
                    </p>
                    <Dialog.Title className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {project.title}
                    </Dialog.Title>
                    <Dialog.Description className="mt-5 text-base leading-7 text-[var(--ironclad-grey)] sm:text-lg sm:leading-8">
                      {project.details.overview}
                    </Dialog.Description>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <Badge key={technology}>{technology}</Badge>
                      ))}
                      {project.status ? <Badge>{project.status}</Badge> : null}
                    </div>

                    <div className="mt-8 border-t border-[rgba(43,43,43,0.14)] pt-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--urban-fog)]">
                        Destaques
                      </p>
                      <ul className="mt-4 space-y-3">
                        {project.details.highlights.map((highlight, index) => (
                          <li key={highlight} className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-6 text-[var(--ironclad-grey)]">
                            <span className="font-semibold text-[var(--charcoal-noir)]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ size: "sm" }), "mt-8 inline-flex")}
                      >
                        Ver projeto
                        <ExternalLink aria-hidden="true" size={16} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </Dialog.Popup>
            </Dialog.Viewport>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
