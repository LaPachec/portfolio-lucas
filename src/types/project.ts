export type ProjectFeedback = {
  author?: string;
  role?: string;
  comment: string;
};

export type ProjectDetails = {
  overview: string;
  highlights: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  feedback?: ProjectFeedback[];
  feedbackPending?: boolean;
  status?: string;
  details: ProjectDetails;
};
