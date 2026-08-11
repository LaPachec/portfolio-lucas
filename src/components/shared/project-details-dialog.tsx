"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ExternalLink, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type Locale = "pt" | "en";

type ProjectDetailsDialogProps = {
  project: Project;
  locale?: Locale;
};

export function ProjectDetailsDialog({ project, locale = "pt" }: ProjectDetailsDialogProps) {
  const [open, setOpen] = React.useState(false);
  const reduceMotion = useReducedMotion();
  const text =
    locale === "pt"
      ? { trigger: "Ver detalhes", highlights: "Destaques", project: "Ver projeto", close: "Fechar detalhes do projeto" }
      : { trigger: "View details", highlights: "Highlights", project: "View project", close: "Close project details" };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={cn(buttonVariants({ variant: "outline", size: "sm" }), "cursor-pointer")}>
        {text.trigger}
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

            <Dialog.Viewport className="fixed inset-0 z-[80] grid overflow-y-auto px-5 py-10 sm:px-10 sm:py-14">
              <Dialog.Popup
                render={
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.965 }}
                    transition={{ type: "spring", stiffness: 205, damping: 25, mass: 0.82 }}
                  />
                }
                className="relative m-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-[var(--moonlit-silver)] bg-[var(--cloud-veil)] text-[var(--charcoal-noir)] shadow-2xl"
              >
                <Dialog.Close
                  className="absolute right-4 top-4 z-20 inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--moonlit-silver)] bg-[var(--cloud-veil)] text-[var(--charcoal-noir)] transition-colors hover:border-[var(--charcoal-noir)] hover:bg-[var(--charcoal-noir)] hover:text-[var(--cloud-veil)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)]"
                  aria-label={text.close}
                >
                  <X aria-hidden="true" size={18} />
                </Dialog.Close>

                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[240px] bg-[var(--charcoal-noir)] sm:min-h-[330px] lg:min-h-full">
                    <Image
                      src={project.image}
                      alt={`${locale === "pt" ? "Interface do projeto" : "Project interface"} ${project.title}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  </div>

                  <div className="p-6 sm:p-7 lg:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--urban-fog)]">
                      {project.category}
                    </p>
                    <Dialog.Title className="mt-3 text-3xl font-semibold tracking-tight sm:text-[2rem]">
                      {project.title}
                    </Dialog.Title>
                    <Dialog.Description className="mt-4 text-base leading-7 text-[var(--ironclad-grey)]">
                      {project.details.overview}
                    </Dialog.Description>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <Badge key={technology}>{technology}</Badge>
                      ))}
                      {project.status ? <Badge>{project.status}</Badge> : null}
                    </div>

                    <div className="mt-7 border-t border-[rgba(43,43,43,0.14)] pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--urban-fog)]">
                        {text.highlights}
                      </p>
                      <ul className="mt-4 space-y-2.5">
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
                        className={cn(buttonVariants({ size: "sm" }), "mt-7 inline-flex")}
                      >
                        {text.project}
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
