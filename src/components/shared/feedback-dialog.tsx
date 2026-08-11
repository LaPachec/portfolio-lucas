"use client";

import { Dialog } from "@base-ui/react/dialog";
import { MessageSquareQuote, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProjectFeedback } from "@/types/project";

type FeedbackDialogProps = {
  projectTitle: string;
  feedback: ProjectFeedback[];
  pending?: boolean;
};

export function FeedbackDialog({ projectTitle, feedback, pending = false }: FeedbackDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "cursor-pointer",
        )}
      >
        <MessageSquareQuote aria-hidden="true" size={16} />
        Ver feedback
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[70] bg-[rgba(43,43,43,0.72)] backdrop-blur-sm" />
        <Dialog.Viewport className="fixed inset-0 z-[80] grid overflow-y-auto px-5 py-10 sm:px-8">
          <Dialog.Popup className="relative m-auto w-full max-w-2xl border border-[var(--moonlit-silver)] bg-[var(--cloud-veil)] p-6 text-[var(--charcoal-noir)] shadow-2xl sm:p-8">
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
              className="absolute right-5 top-5 inline-flex size-10 cursor-pointer items-center justify-center border border-[var(--moonlit-silver)] transition-colors hover:border-[var(--charcoal-noir)] hover:bg-[var(--charcoal-noir)] hover:text-[var(--cloud-veil)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--charcoal-noir)]"
              aria-label="Fechar feedback"
            >
              <X aria-hidden="true" size={18} />
            </Dialog.Close>

            <div className="mt-8 space-y-4">
              {feedback.length > 0
                ? feedback.map((item, index) => (
                    <blockquote
                      key={`${item.author ?? "cliente"}-${index}`}
                      className="border-l-2 border-[var(--charcoal-noir)] bg-white/45 p-5"
                    >
                      <p className="leading-7 text-[var(--ironclad-grey)]">“{item.comment}”</p>
                      {item.author || item.role ? (
                        <footer className="mt-4 text-sm font-semibold text-[var(--charcoal-noir)]">
                          {item.author ?? "Cliente"}
                          {item.role ? ` · ${item.role}` : ""}
                        </footer>
                      ) : null}
                    </blockquote>
                  ))
                : null}

              {pending && feedback.length === 0 ? (
                <div className="border border-dashed border-[var(--moonlit-silver)] p-5 text-sm leading-7 text-[var(--ironclad-grey)]">
                  O componente de feedback já está preparado. Os comentários originais do cliente ainda precisam ser cadastrados para evitar publicar depoimentos não validados.
                </div>
              ) : null}
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
