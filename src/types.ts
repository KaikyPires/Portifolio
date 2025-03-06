export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}
export type Technology = {
  name: string;
  icon: string;
}