export type ProjectCategory = "Produto" | "Evento" | "Institucional" | "Financas";

export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  technologies: string[];
};
