import { GitBranch, Link2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/LaPachec",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucas-araujo-3007b9354/",
    icon: Link2,
  },
];

export function ContactSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="border-t border-[rgba(43,43,43,0.12)] bg-[var(--charcoal-noir)] text-[var(--cloud-veil)]"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:py-24">
        <SectionHeading
          id="contato-title"
          inverted
          eyebrow="Contato"
          title="Vamos transformar uma ideia em interface real."
          description="Entre em contato para conversar sobre projetos, oportunidades ou colaboração técnica."
        />

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <Button
                key={contact.label}
                asChild
                variant="outline"
                className="border-[var(--urban-fog)] !text-[var(--cloud-veil)] hover:border-[var(--cloud-veil)] hover:bg-[var(--cloud-veil)] hover:!text-[var(--charcoal-noir)] focus-visible:outline-[var(--cloud-veil)]"
              >
                <a href={contact.href} target="_blank" rel="noreferrer">
                  <Icon aria-hidden="true" size={18} />
                  {contact.label}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
