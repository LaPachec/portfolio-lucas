"use client";

import { motion, useReducedMotion } from "motion/react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";

type Locale = "pt" | "en";

type AboutSectionProps = {
  locale?: Locale;
};

const copy = {
  pt: {
    eyebrow: "Sobre",
    title: "Desenvolvimento web com visão de produto e base técnica.",
    description:
      "Sou desenvolvedor Full Stack com foco na construção de aplicações web modernas, atuando desde a criação de interfaces até APIs, bancos de dados e regras de negócio.",
    body:
      "Busco desenvolver soluções organizadas, funcionais e fáceis de evoluir, equilibrando experiência do usuário, estrutura de código e decisões técnicas proporcionais ao problema.",
    indicators: [
      { value: "Full Stack", label: "Atuação conectando interface, API, dados e regra de negócio" },
      { value: "UI sólida", label: "Construção responsiva com atenção a clareza e acessibilidade" },
      { value: "Entrega", label: "Organização técnica para evoluir sem perder controle" },
    ],
  },
  en: {
    eyebrow: "About",
    title: "Web development with product thinking and a solid technical foundation.",
    description:
      "I am a Full Stack Developer focused on building modern web applications, working across user interfaces, APIs, databases and business rules.",
    body:
      "I aim to build organized, functional and maintainable solutions, balancing user experience, code structure and technical decisions that match the actual problem.",
    indicators: [
      { value: "Full Stack", label: "Connecting interfaces, APIs, data and business logic" },
      { value: "Solid UI", label: "Responsive interfaces with attention to clarity and accessibility" },
      { value: "Delivery", label: "Technical organization that supports safe product evolution" },
    ],
  },
};

export function AboutSection({ locale = "pt" }: AboutSectionProps) {
  const reduceMotion = useReducedMotion();
  const text = copy[locale];

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="border-t border-[rgba(43,43,43,0.12)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1fr] lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            id="sobre-title"
            eyebrow={text.eyebrow}
            title={text.title}
            description={text.description}
          />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xl leading-9 text-[var(--charcoal-noir)]">{text.body}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {text.indicators.map((indicator, index) => (
              <motion.div
                key={indicator.value}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{
                  type: "spring",
                  stiffness: 230,
                  damping: 24,
                  delay: reduceMotion ? 0 : 0.14 + index * 0.07,
                }}
              >
                <Card className="h-full p-5 transition-shadow hover:shadow-[0_14px_34px_rgba(43,43,43,0.10)]">
                  <CardContent>
                    <strong className="block text-2xl font-semibold tracking-tight text-[var(--charcoal-noir)]">
                      {indicator.value}
                    </strong>
                    <span className="mt-3 block text-sm leading-6 text-[var(--ironclad-grey)]">
                      {indicator.label}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
