import type { Specialization } from '../types/education.types';
import { detectProvider } from '../config/verification.config';

// Raw specialization data with type safety - Only essential properties
export const rawSpecializations: Specialization[] = [
  {
    specializationId: "Yz1bhic5RgOCVeRK1uxdXQ",
    name: "Microsoft Front-End Developer",
    partnerNames: ["Microsoft"],
    provider: "coursera-specialization",
    completionDate: new Date("2025-07-10").getTime(), // July 2025
    verifyCode: "6PRWOAM6GOSD"
  },
  {
    specializationId: "--I-GVG8TjSxWxqmqcbomg",
    name: "Microsoft Back-End Developer",
    partnerNames: ["Microsoft"],
    provider: "coursera-specialization",
    completionDate: new Date("2025-05-15").getTime(), // May 2025
    verifyCode: "Q3M1MX5F7K08"
  },
  {
    specializationId: "wpv0v6AuR1GOWiDmKrSrKA",
    name: "Microsoft Full-Stack Developer",
    partnerNames: ["Microsoft"],
    provider: "coursera-specialization",
    completionDate: new Date("2025-05-08").getTime(), // May 2025
    verifyCode: "YG3NUB7FQWMK"
  },
];

// Enhanced specialization data with computed properties
export interface EnhancedSpecialization extends Specialization {
  formattedDate: string;
  completionYear: number;
  isRecent: boolean;
  category: 'frontend' | 'backend' | 'fullstack' | 'data' | 'cloud' | 'mobile' | 'other';
  displayName: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  primaryProvider: string;
  description?: string;
  skillsEstimated: string[];
}

// Helper functions
const inferSpecializationCategory = (name: string): EnhancedSpecialization['category'] => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('front-end') || lowerName.includes('frontend')) return 'frontend';
  if (lowerName.includes('back-end') || lowerName.includes('backend')) return 'backend';
  if (lowerName.includes('full-stack') || lowerName.includes('fullstack')) return 'fullstack';
  if (lowerName.includes('data') || lowerName.includes('analytics')) return 'data';
  if (lowerName.includes('cloud') || lowerName.includes('azure') || lowerName.includes('aws')) return 'cloud';
  if (lowerName.includes('mobile') || lowerName.includes('ios') || lowerName.includes('android')) return 'mobile';
  return 'other';
};

const inferLevel = (name: string): EnhancedSpecialization['level'] => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('professional') || lowerName.includes('developer')) return 'professional';
  if (lowerName.includes('advanced')) return 'advanced';
  if (lowerName.includes('intermediate')) return 'intermediate';
  return 'beginner';
};

const getEstimatedSkills = (_name: string, category: EnhancedSpecialization['category']): string[] => {
  const skillMap: Record<EnhancedSpecialization['category'], string[]> = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Responsive Design'],
    backend: ['APIs', 'Databases', 'Server Architecture', 'Authentication', 'Security'],
    fullstack: ['Full-Stack Development', 'System Design', 'DevOps', 'Project Management'],
    data: ['Data Analysis', 'Algorithms', 'Statistics', 'Database Design'],
    cloud: ['Cloud Architecture', 'DevOps', 'Scalability', 'Infrastructure'],
    mobile: ['Mobile Development', 'UI/UX', 'App Store Deployment'],
    other: ['Problem Solving', 'Technical Communication']
  };
  
  return skillMap[category] || skillMap.other;
};

const getDescription = (name: string): string => {
  const descriptions: Record<string, string> = {
    'Microsoft Front-End Developer': 'Comprehensive front-end development program covering modern web technologies, responsive design, and user experience best practices.',
    'Microsoft Back-End Developer': 'Server-side development specialization focusing on APIs, databases, security, and scalable backend architecture.',
    'Microsoft Full-Stack Developer': 'Complete web development program combining front-end and back-end technologies for end-to-end application development.'
  };
  
  return descriptions[name] || 'Professional certification program designed to advance technical skills and industry knowledge.';
};

const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};

const isRecentSpecialization = (timestamp: number): boolean => {
  const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
  return timestamp > oneYearAgo;
};

// Enhanced specializations with computed properties
export const specializations: EnhancedSpecialization[] = rawSpecializations.map(spec => {
  const autoDetectedProvider = detectProvider(spec.partnerNames, spec.verificationUrl);
  
  return {
    ...spec,
    formattedDate: formatDate(spec.completionDate),
    completionYear: new Date(spec.completionDate).getFullYear(),
    isRecent: isRecentSpecialization(spec.completionDate),
    category: inferSpecializationCategory(spec.name),
    displayName: spec.name.replace(/^(Microsoft|Google|Amazon|Meta)\s*-?\s*/i, '').trim(),
    level: inferLevel(spec.name),
    primaryProvider: spec.partnerNames[0] || 'Unknown',
    description: getDescription(spec.name),
    skillsEstimated: getEstimatedSkills(spec.name, inferSpecializationCategory(spec.name)),
    // Add provider information for verification
    provider: spec.provider || autoDetectedProvider
  };
});

// Utility functions
export const getSpecializationsByCategory = (category: EnhancedSpecialization['category']) => {
  return specializations.filter(spec => spec.category === category);
};

export const getRecentSpecializations = () => {
  return specializations.filter(spec => spec.isRecent);
};

export const searchSpecializations = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return specializations.filter(spec => 
    spec.name.toLowerCase().includes(lowerQuery) ||
    spec.partnerNames.some(partner => partner.toLowerCase().includes(lowerQuery)) ||
    spec.skillsEstimated.some(skill => skill.toLowerCase().includes(lowerQuery))
  );
};

// Stats computation
export const getSpecializationStats = () => {
  const totalSpecializations = specializations.length;
  const recentSpecializations = getRecentSpecializations().length;
  const categoriesCount = new Set(specializations.map(spec => spec.category)).size;
  const uniqueProviders = new Set(specializations.flatMap(spec => spec.partnerNames)).size;
  
  return {
    total: totalSpecializations,
    recent: recentSpecializations,
    categories: categoriesCount,
    providers: uniqueProviders
  };
};
