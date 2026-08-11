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
    feedback: [],
    feedbackPending: true,
    details: {
      overview:
        "Projeto comercial criado para apresentar posicionamento, serviços e portfólio da Astria em uma experiência responsiva, direta e orientada à conversão.",
      highlights: [
        "Estrutura de landing page organizada por objetivo de comunicação.",
        "Responsividade para diferentes tamanhos de tela.",
        "Integração de chamadas para ação e contato.",
        "Deploy e entrega em ambiente de produção.",
      ],
    },
  },
  {
    slug: "casamento",
    title: "Casamento",
    category: "Aplicação Web / Projeto real",
    description:
      "Aplicação desenvolvida para centralizar informações do casamento, facilitar a comunicação com convidados e oferecer uma experiência digital personalizada para o evento.",
    image: "/images/projects/casamento.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    feedback: [],
    feedbackPending: true,
    details: {
      overview:
        "Aplicação web criada para reunir informações importantes do evento em um único lugar e tornar a experiência dos convidados mais simples e personalizada.",
      highlights: [
        "Interface responsiva voltada para acesso por dispositivos móveis.",
        "Organização das informações do evento em uma navegação objetiva.",
        "Integração com serviços de dados do projeto.",
        "Identidade visual personalizada para o contexto do casamento.",
      ],
    },
  },
  {
    slug: "cis",
    title: "CIS",
    category: "Sistema Full Stack",
    description:
      "Sistema de gerenciamento de avaliações para organizar competidores, módulos, critérios, lançamento de notas, inconsistências e fechamento de resultados.",
    image: "/images/projects/cis.webp",
    technologies: ["React", "Vite", "Fastify", "Prisma", "SQLite"],
    status: "Projeto privado",
    details: {
      overview:
        "Sistema full stack voltado à organização e ao controle do processo de avaliação, com regras de negócio para competidores, módulos, notas, inconsistências e fechamento de resultados.",
      highlights: [
        "Fluxo administrativo para gerenciamento de avaliações.",
        "Identificação e consulta de inconsistências antes do fechamento.",
        "Separação entre interface, API e persistência de dados.",
        "Regras específicas para fechamento e integridade do processo avaliativo.",
      ],
    },
  },
  {
    slug: "controle-financeiro-compartilhado",
    title: "Controle Financeiro Compartilhado",
    category: "Sistema Full Stack / Finanças",
    description:
      "Sistema financeiro compartilhado para gerenciar contas, receitas, despesas, cartões, faturas, parcelamentos e indicadores financeiros.",
    image: "/images/projects/controle-financeiro.webp",
    technologies: ["React", "Vite", "Ant Design", "Express", "PostgreSQL"],
    status: "Em desenvolvimento",
    details: {
      overview:
        "Aplicação full stack para controle financeiro compartilhado, estruturada para conciliar movimentações, contas, cartões e faturas sem perder o histórico das operações.",
      highlights: [
        "Separação entre competência financeira e movimentação de caixa.",
        "Regras específicas para compras no cartão, fechamento e vencimento de faturas.",
        "Suporte a parcelamentos e pagamentos parciais ou totais.",
        "Controle de acesso aos dados financeiros por grupo.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
