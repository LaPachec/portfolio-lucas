export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  hasFeedback?: boolean;
  status?: string;
};
