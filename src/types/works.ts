export type WorkCategory = 'web' | 'app' | 'illustration' | 'design';

export interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
  github?: string;
  demo?: string;
  category: WorkCategory;
}