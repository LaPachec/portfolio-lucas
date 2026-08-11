import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "astria",
    title: "Astria",
    category: "Landing Page / Projeto comercial",
    description:
      "Landing page desenvolvida para uma agência de social media, com foco em apresentação de serviços, portfólio, conversão e contato com potenciais clientes.",
    image: "/images/projects/astria.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://astriags.com.br",
    hasFeedback: true,
  },
  {
    slug: "casamento",
    title: "Casamento",
    category: "Aplicação Web / Projeto real",
    description:
      "Aplicação desenvolvida para centralizar informações do casamento, facilitar a comunicação com convidados e oferecer uma experiência digital personalizada para o evento.",
    image: "/images/projects/casamento.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://casamento-giovanna-lucas-websapps.vercel.app",
  },
  {
    slug: "cis",
    title: "CIS",
    category: "Sistema Full Stack",
    description:
      "Sistema de gerenciamento de avaliações para organizar competidores, módulos, critérios, lançamento de notas, inconsistências e fechamento de resultados.",
    image: "/images/projects/cis.webp",
    technologies: ["React", "Vite", "Fastify", "Prisma", "SQLite"],
    status: "Execução local parcial",
  },
  {
    slug: "controle-financeiro-compartilhado",
    title: "Controle Financeiro Compartilhado",
    category: "Sistema Full Stack / Finanças",
    description:
      "Sistema financeiro compartilhado para gerenciar contas, receitas, despesas, cartões, faturas, parcelamentos e indicadores financeiros.",
    image: "/images/projects/controle-financeiro.webp",
    technologies: ["React", "Vite", "Ant Design", "Express", "PostgreSQL"],
    status: "Prévia técnica",
  },
];
