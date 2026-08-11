"use client";

import * as React from "react";
import { Dialog } from "@base-ui/react/dialog";
import { MessageSquareQuote, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProjectFeedback } from "@/types/project";

type FeedbackDialogProps = {
  projectTitle: string;
  feedback: ProjectFeedback[];
  pending?: boolean;
};

export function FeedbackDialog({ projectTitle, feedback, pending = false }: FeedbackDialogProps) {
  const [open, setOpen] = React.useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "cursor-pointer",
        )}
      >
        <MessageSquareQuote aria-hidden="true" size={16} />
        Ver feedback
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
              className="fixed inset-0 z-[70] bg-[rgba(43,43,43,0.72)] backdrop-blur-sm"
            />
            <Dialog.Viewport className="fixed inset-0 z-[80] grid overflow-y-auto px-5 py-10 sm:px-8">
              <Dialog.Popup
                render={
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.82 }}
                  />
                }
                className="relative m-auto w-full max-w-2xl rounded-3xl border border-[var(--moonlit-silver)] bg-[var(--cloud-veil)] p-6 text-[var(--charcoal-noir)] shadow-2xl sm:p-8"
              >
                <div className="pr-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--urban-fog)]">
                    Feedback de cliente
                  </p>
                  <Dialog.Title className="mt-3 text-3xl font-semibold tracking-tight">
                    {projectTitle}
                  </Dialog.Title>
                  <Dialog.Description className="mt-4 leading-7 text-[var(--ironclad-grey)]">
                    Comentários recebidos sobre a experiência de desenvolvimento e a entrega do projeto.
                  </Dialog.Description>
                </div>

                <Dialog.Close
                  className="absolute right-5 top-5 inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--moonlit-silver)] transition-colors hover:border-[var(--charcoal-noir)] hover:bg-[var(--charcoal-noir)] hover:text-[var(--cloud-veil)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)]"
                  aria-label="Fechar feedback"
                >
                  <X aria-hidden="true" size={18} />
                </Dialog.Close>

                <div className="mt-8 space-y-4">
                  {feedback.length > 0
                    ? feedback.map((item, index) => (
                        <motion.blockquote
                          key={`${item.author ?? "cliente"}-${index}`}
                          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduceMotion ? 0 : 0.08 + index * 0.06 }}
                          className="border-l-2 border-[var(--charcoal-noir)] bg-white/45 p-5"
                        >
                          <p className="leading-7 text-[var(--ironclad-grey)]">“{item.comment}”</p>
                          {item.author || item.role ? (
                            <footer className="mt-4 text-sm font-semibold text-[var(--charcoal-noir)]">
                              {item.author ?? "Cliente"}
                              {item.role ? ` · ${item.role}` : ""}
                            </footer>
                          ) : null}
                        </motion.blockquote>
                      ))
                    : null}

                  {pending && feedback.length === 0 ? (
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduceMotion ? 0 : 0.08 }}
                      className="border border-dashed border-[var(--moonlit-silver)] p-5 text-sm leading-7 text-[var(--ironclad-grey)]"
                    >
                      O componente de feedback já está preparado. Os comentários originais do cliente ainda precisam ser cadastrados para evitar publicar depoimentos não validados.
                    </motion.div>
                  ) : null}
                </div>
              </Dialog.Popup>
            </Dialog.Viewport>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
