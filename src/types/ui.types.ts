// UI and navigation related types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color?: string;
}

export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

export interface HeroButton {
  text: string;
  href: string;
  type: 'primary' | 'secondary';
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface LocationInfo {
  country: string;
  countryCode: string; // ISO 3166-1 alpha-2 code (e.g., "EC", "US", "ES")
  flag?: string; // Optional emoji flag fallback
  city?: string;
}

export interface LanguageInfo {
  name: string;
  level: 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic' | 'C2' | 'C1' | 'B2' | 'B1' | 'A2' | 'A1' | 'Bilingual' | 'Professional' | 'Conversational' | 'Elementary' | 'Beginner';
  // CEFR Levels: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-intermediate), C1 (Advanced), C2 (Proficient)
  // Other levels: Native, Bilingual, Fluent, Professional, Conversational, Advanced, Intermediate, Basic, Beginner
  proficiency?: number; // 1-100 percentage
  flag?: string; // Language flag or country flag representing the language
  countryCode?: string; // ISO code for flag display
}
