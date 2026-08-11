"use client";

import { GitBranch, Link2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

type Locale = "pt" | "en";

type ContactSectionProps = {
  locale?: Locale;
};

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

export function ContactSection({ locale = "pt" }: ContactSectionProps) {
  const reduceMotion = useReducedMotion();
  const text =
    locale === "pt"
      ? {
          eyebrow: "Contato",
          title: "Vamos transformar uma ideia em interface real.",
          description: "Entre em contato para conversar sobre projetos, oportunidades ou colaboração técnica.",
        }
      : {
          eyebrow: "Contact",
          title: "Let’s turn an idea into a real interface.",
          description: "Get in touch to talk about projects, opportunities or technical collaboration.",
        };

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="border-t border-[rgba(43,43,43,0.12)] bg-[var(--charcoal-noir)] text-[var(--cloud-veil)]"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            id="contato-title"
            inverted
            eyebrow={text.eyebrow}
            title={text.title}
            description={text.description}
          />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 sm:flex-row lg:flex-col"
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.div
                key={contact.label}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={reduceMotion ? undefined : { x: 4 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                  delay: reduceMotion ? 0 : 0.12 + index * 0.07,
                }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[var(--urban-fog)] !text-[var(--cloud-veil)] hover:border-[var(--cloud-veil)] hover:bg-[var(--cloud-veil)] hover:!text-[var(--charcoal-noir)] focus-visible:outline-[var(--cloud-veil)]"
                >
                  <a href={contact.href} target="_blank" rel="noopener noreferrer">
                    <Icon aria-hidden="true" size={18} />
                    {contact.label}
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
