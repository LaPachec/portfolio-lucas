import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Astria",
    category: "Produto",
    description:
      "Experiencia digital para organizar fluxos, apresentar valor e transformar uma ideia em produto navegavel.",
    image: "/images/project-astria.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Casamento",
    category: "Evento",
    description:
      "Landing page elegante para convite, informacoes do evento, confirmacao de presenca e comunicacao com convidados.",
    image: "/images/project-casamento.svg",
    technologies: ["React", "Design responsivo", "UX"],
  },
  {
    title: "CIS",
    category: "Institucional",
    description:
      "Interface institucional com foco em clareza, confianca, estrutura de conteudo e leitura objetiva.",
    image: "/images/project-cis.svg",
    technologies: ["Next.js", "Componentes", "Acessibilidade"],
  },
  {
    title: "Controle Financeiro",
    category: "Financas",
    description:
      "Sistema para acompanhar receitas, despesas e indicadores com organizacao visual e foco em decisao rapida.",
    image: "/images/project-financeiro.svg",
    technologies: ["Dashboard", "Dados", "Full Stack"],
  },
];
