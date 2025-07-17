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
