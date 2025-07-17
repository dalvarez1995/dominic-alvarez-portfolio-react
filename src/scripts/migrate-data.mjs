// Migration script to convert JSON data to TypeScript
// Run this script to migrate all your JSON data to the new TypeScript format

import fs from 'fs';
import path from 'path';

// Read the original JSON files
const certificationsPath = path.join(process.cwd(), 'src/assets/data/certifications.json');
const specializationsPath = path.join(process.cwd(), 'src/assets/data/specializations.json');

try {
  // Read certifications
  const certificationsData = JSON.parse(fs.readFileSync(certificationsPath, 'utf8'));
  const allCertifications = certificationsData.elements || certificationsData;
  
  // Read specializations
  const specializationsData = JSON.parse(fs.readFileSync(specializationsPath, 'utf8'));
  const allSpecializations = specializationsData.elements || specializationsData;
  
  // Generate TypeScript file content for certifications
  const certificationsContent = `import type { Certification } from '../types/education.types';

// Raw certification data with type safety
export const rawCertifications: Certification[] = ${JSON.stringify(allCertifications, null, 2)};

// Enhanced certification data with computed properties
export interface EnhancedCertification extends Certification {
  formattedDate: string;
  completionYear: number;
  isRecent: boolean;
  category: 'frontend' | 'backend' | 'fullstack' | 'data' | 'cloud' | 'other';
  displayName: string;
  platformIcon?: string;
}

// Helper functions
const inferCategory = (name: string): EnhancedCertification['category'] => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('front') || lowerName.includes('react') || lowerName.includes('angular')) return 'frontend';
  if (lowerName.includes('back') || lowerName.includes('api') || lowerName.includes('server')) return 'backend';
  if (lowerName.includes('full-stack') || lowerName.includes('fullstack')) return 'fullstack';
  if (lowerName.includes('data') || lowerName.includes('algorithm')) return 'data';
  if (lowerName.includes('cloud') || lowerName.includes('azure') || lowerName.includes('aws')) return 'cloud';
  return 'other';
};

const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};

const isRecentCertification = (timestamp: number): boolean => {
  const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
  return timestamp > oneYearAgo;
};

const getPlatformIcon = (platformOrigin: string): string => {
  const platforms: Record<string, string> = {
    'ON_DEMAND': 'fas fa-play-circle',
    'INSTRUCTOR_LED': 'fas fa-chalkboard-teacher',
    'SELF_PACED': 'fas fa-user-clock'
  };
  return platforms[platformOrigin] || 'fas fa-certificate';
};

// Enhanced certifications with computed properties
export const certifications: EnhancedCertification[] = rawCertifications.map(cert => ({
  ...cert,
  formattedDate: formatDate(cert.completionDate),
  completionYear: new Date(cert.completionDate).getFullYear(),
  isRecent: isRecentCertification(cert.completionDate),
  category: inferCategory(cert.name),
  displayName: cert.name.replace(/^(Microsoft|Google|Amazon|Meta)\\s*-?\\s*/i, '').trim(),
  platformIcon: getPlatformIcon(cert.platformOrigin)
}));

// Utility functions for filtering and searching
export const getCertificationsByCategory = (category: EnhancedCertification['category']) => {
  return certifications.filter(cert => cert.category === category);
};

export const getRecentCertifications = () => {
  return certifications.filter(cert => cert.isRecent);
};

export const searchCertifications = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return certifications.filter(cert => 
    cert.name.toLowerCase().includes(lowerQuery) ||
    cert.partners.some(partner => partner.name.toLowerCase().includes(lowerQuery)) ||
    cert.instructors.some(instructor => 
      \`\${instructor.firstName} \${instructor.lastName}\`.toLowerCase().includes(lowerQuery)
    )
  );
};

// Stats computation
export const getCertificationStats = () => {
  const totalCertifications = certifications.length;
  const recentCertifications = getRecentCertifications().length;
  const categoriesCount = new Set(certifications.map(cert => cert.category)).size;
  const uniqueProviders = new Set(certifications.flatMap(cert => cert.partners.map(p => p.name))).size;
  
  return {
    total: totalCertifications,
    recent: recentCertifications,
    categories: categoriesCount,
    providers: uniqueProviders
  };
};`;
  
  // Generate TypeScript file content for specializations
  const specializationsContent = `import type { Specialization } from '../types/education.types';

// Raw specialization data with type safety
export const rawSpecializations: Specialization[] = ${JSON.stringify(allSpecializations, null, 2)};

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

const inferLevel = (productVariant: string): EnhancedSpecialization['level'] => {
  if (productVariant.includes('Professional')) return 'professional';
  if (productVariant.includes('Advanced')) return 'advanced';
  if (productVariant.includes('Intermediate')) return 'intermediate';
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
export const specializations: EnhancedSpecialization[] = rawSpecializations.map(spec => ({
  ...spec,
  formattedDate: formatDate(spec.completionDate),
  completionYear: new Date(spec.completionDate).getFullYear(),
  isRecent: isRecentSpecialization(spec.completionDate),
  category: inferSpecializationCategory(spec.name),
  displayName: spec.name.replace(/^(Microsoft|Google|Amazon|Meta)\\s*-?\\s*/i, '').trim(),
  level: inferLevel(spec.productVariant),
  primaryProvider: spec.partnerNames[0] || 'Unknown',
  description: getDescription(spec.name),
  skillsEstimated: getEstimatedSkills(spec.name, inferSpecializationCategory(spec.name))
}));

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
};`;
  
  // Write the new TypeScript files
  const certOutputPath = path.join(process.cwd(), 'src/data/certifications.ts');
  const specOutputPath = path.join(process.cwd(), 'src/data/specializations.ts');
  
  fs.writeFileSync(certOutputPath, certificationsContent);
  fs.writeFileSync(specOutputPath, specializationsContent);
  
  console.log('✅ Migration completed successfully!');
  console.log(`📄 Migrated ${allCertifications.length} certifications to: ${certOutputPath}`);
  console.log(`📄 Migrated ${allSpecializations.length} specializations to: ${specOutputPath}`);
  console.log('\n🎯 Next steps:');
  console.log('1. Review the generated TypeScript files');
  console.log('2. Update your portfolio configuration to use the new data sources');
  console.log('3. Test your application to ensure everything works correctly');
  console.log('4. Consider removing the old JSON files once satisfied');
  
} catch (error) {
  console.error('❌ Migration failed:', error);
}
