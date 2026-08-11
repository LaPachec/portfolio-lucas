import type { Project } from "@/types/project";

export const projectsEn: Project[] = [
  {
    slug: "astria",
    title: "Astria",
    category: "Landing Page / Commercial project",
    description:
      "Landing page built for a social media agency, focused on presenting services, portfolio work, conversion and contact with potential clients.",
    image: "/images/projects/astria.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://astriags.com.br",
    feedback: [],
    feedbackPending: true,
    details: {
      overview:
        "Commercial project created to present Astria's positioning, services and portfolio through a responsive, direct and conversion-oriented experience.",
      highlights: [
        "Landing page structure organized around communication goals.",
        "Responsive behavior across different screen sizes.",
        "Clear calls to action and contact flows.",
        "Production deployment and delivery.",
      ],
    },
  },
  {
    slug: "casamento",
    title: "Wedding",
    category: "Web Application / Real project",
    description:
      "Application built to centralize wedding information, simplify communication with guests and provide a personalized digital experience for the event.",
    image: "/images/projects/casamento.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://casamento-giovanna-lucas-websapps.vercel.app",
    feedback: [],
    feedbackPending: true,
    details: {
      overview:
        "Web application created to gather important event information in one place and make the guest experience simpler and more personalized.",
      highlights: [
        "Responsive interface designed primarily for mobile access.",
        "Clear information architecture for event details.",
        "Integration with the project's data services.",
        "Custom visual identity for the wedding context.",
      ],
    },
  },
  {
    slug: "cis",
    title: "CIS",
    category: "Full Stack System",
    description:
      "Assessment management system for organizing competitors, modules, criteria, scores, inconsistencies and result closing workflows.",
    image: "/images/projects/cis.webp",
    technologies: ["React", "Vite", "Fastify", "Prisma", "SQLite"],
    status: "Private project",
    details: {
      overview:
        "Full stack system focused on organizing and controlling an assessment process, with business rules for competitors, modules, scores, inconsistencies and result closing.",
      highlights: [
        "Administrative workflow for managing assessments.",
        "Inconsistency detection before closing results.",
        "Clear separation between interface, API and persistence layers.",
        "Specific integrity rules for assessment closing workflows.",
      ],
    },
  },
  {
    slug: "controle-financeiro-compartilhado",
    title: "Shared Financial Control",
    category: "Full Stack System / Finance",
    description:
      "Shared finance system for managing accounts, income, expenses, cards, invoices, installments and financial indicators.",
    image: "/images/projects/controle-financeiro.webp",
    technologies: ["React", "Vite", "Ant Design", "Express", "PostgreSQL"],
    status: "In development",
    details: {
      overview:
        "Full stack application for shared financial control, structured to reconcile transactions, accounts, cards and invoices while preserving historical consistency.",
      highlights: [
        "Separation between accrual-based financial reporting and cash movement.",
        "Specific rules for credit-card purchases, statement closing and due dates.",
        "Support for installments and partial or full invoice payments.",
        "Group-based access control for financial data.",
      ],
    },
  },
];
