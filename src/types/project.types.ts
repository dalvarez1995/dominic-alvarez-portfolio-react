// Project related types
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies: Technology[];
  features: ProjectFeature[];
  company?: CompanyInfo;
  type: 'enterprise' | 'personal' | 'freelance';
  links?: ProjectLink[];
}

export interface Technology {
  name: string;
  color: string;
}

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface CompanyInfo {
  name: string;
  logo: string;
  description: string;
}

export interface ProjectLink {
  type: 'github' | 'demo' | 'case-study';
  url: string;
}
