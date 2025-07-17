// Main portfolio configuration types
import type { SocialLink, NavItem, HeroButton, StatItem, SkillCategory, LocationInfo } from './ui.types';
import type { Project } from './project.types';
import type { EducationStat } from './education.types';
import type { ColorScale } from './theme.types';

export interface PortfolioConfig {
  // Personal Information
  personal: {
    name: string;
    title: string;
    shortDescription: string;
    profileImage: string;
    availability: {
      status: boolean;
      text: string;
    };
  };

  // Contact Information
  contact: {
    email: string;
    phone?: string;
    location?: string;
    social: SocialLink[];
  };

  // Navigation
  navigation: NavItem[];

  // Hero Section
  hero: {
    greeting: string;
    title: string[];
    description: string;
    buttons: HeroButton[];
    backgroundEffects: boolean;
    scrollIndicator: boolean;
  };

  // About Section
  about: {
    description: string[];
    stats: StatItem[];
    skills: SkillCategory[];
    profileImage: string;
    location?: LocationInfo;
  };

  // Projects Section
  projects: {
    title: string;
    description: string;
    featured: Project[];
    cta: {
      title: string;
      description: string;
      buttonText: string;
    };
  };

  // Education Section
  education: {
    title: string;
    description: string;
    stats: EducationStat[]; // Optional - Stats are computed automatically from certification data if empty
    certifications: {
      dataSource: string; // Path to JSON file in src/assets/data/
      searchEnabled: boolean;
      filterEnabled: boolean;
    };
    specializations: {
      dataSource: string; // Path to JSON file in src/assets/data/
    };
  };

  // Theme Configuration
  theme: {
    colors: {
      primary: ColorScale;
      accent: ColorScale;
    };
    fonts: {
      display: string;
      body: string;
    };
    animations: boolean;
  };

  // SEO
  seo: {
    title: string;
    titleTemplate?: string; // Template for dynamic title generation (e.g., "{name} - {title}" or "{name} | {role}")
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}
