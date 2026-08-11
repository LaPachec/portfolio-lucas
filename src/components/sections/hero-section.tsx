"use client";

import Image from "next/image";
import { GitBranch, MoveRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 135,
      damping: 18,
      mass: 0.8,
    },
  },
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-20"
    >
      <motion.div
        className="max-w-4xl"
        variants={containerVariants}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-[var(--urban-fog)]"
        >
          Portfólio
        </motion.p>
        <motion.h1
          variants={itemVariants}
          id="hero-title"
          className="text-6xl font-semibold tracking-tight text-[var(--charcoal-noir)] sm:text-7xl lg:text-8xl"
        >
          Lucas
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-2xl font-medium text-[var(--ironclad-grey)] sm:text-4xl"
        >
          Desenvolvedor Full Stack
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-2xl text-lg leading-8 text-[var(--ironclad-grey)]"
        >
          Construo aplicações web modernas, conectando interfaces bem desenhadas,
          APIs, dados e regras de negócio com foco em clareza e manutenção.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#projetos">
              Ver projetos
              <MoveRight aria-hidden="true" size={18} />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/LaPachec" target="_blank" rel="noreferrer">
              <GitBranch aria-hidden="true" size={18} />
              GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 34, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 95, damping: 20, delay: 0.18 }}
        className="relative min-h-[380px] overflow-hidden border border-[var(--moonlit-silver)] bg-[var(--charcoal-noir)] sm:min-h-[560px]"
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.35 }}
          className="absolute inset-x-8 top-8 z-10 flex justify-between text-xs font-semibold uppercase tracking-[0.3em] text-[var(--moonlit-silver)]"
        >
          <span>Full Stack</span>
          <span className="[writing-mode:vertical-rl]">Lucas Araújo</span>
        </motion.div>
        <Image
          src="/images/lucas-profile.webp"
          alt="Lucas Araújo, desenvolvedor Full Stack"
          fill
          priority
          className="object-cover object-center grayscale"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,43,43,0.08),rgba(43,43,43,0.34))]" />
      </motion.div>
    </section>
  );
}
