// Utility functions for loading education data
import type { Certification, Specialization } from '../types/education.types';
import { certifications, getCertificationStats, getCertificationsByCategory, searchCertifications } from '../data/certifications';
import { specializations, getSpecializationStats, getSpecializationsByCategory, searchSpecializations } from '../data/specializations';

export const loadCertifications = async (): Promise<Certification[]> => {
  try {
    // Use TypeScript data with enhanced functionality
    return certifications.sort((a, b) => 
      b.completionDate - a.completionDate
    );
  } catch (error) {
    console.error('Failed to load certifications:', error);
    return [];
  }
};

export const loadSpecializations = async (): Promise<Specialization[]> => {
  try {
    // Use TypeScript data with enhanced functionality
    return specializations.sort((a, b) => 
      b.completionDate - a.completionDate
    );
  } catch (error) {
    console.error('Failed to load specializations:', error);
    return [];
  }
};

// Export enhanced data access functions
export {
  getCertificationStats,
  getCertificationsByCategory,
  searchCertifications,
  getSpecializationStats,
  getSpecializationsByCategory,
  searchSpecializations
};

// Utility function to get combined education stats
export const getEducationStats = () => {
  const certStats = getCertificationStats();
  const specStats = getSpecializationStats();
  
  return {
    totalCertifications: certStats.total,
    totalSpecializations: specStats.total,
    recentCertifications: certStats.recent,
    recentSpecializations: specStats.recent,
    totalEducationItems: certStats.total + specStats.total,
    uniqueProviders: new Set([
      ...certifications.flatMap(cert => cert.partners.map(p => p.name)),
      ...specializations.flatMap(spec => spec.partnerNames)
    ]).size
  };
};

// Helper function to generate education stats for the portfolio
export const generateEducationStats = async () => {
  const stats = getEducationStats();
  
  return [
    {
      value: stats.totalCertifications.toString(),
      label: "Certifications",
      icon: "fas fa-certificate",
      color: "primary"
    },
    {
      value: stats.totalSpecializations.toString(),
      label: "Specializations", 
      icon: "fas fa-award",
      color: "accent"
    },
    {
      value: stats.uniqueProviders.toString(),
      label: "Providers",
      icon: "fas fa-building",
      color: "secondary"
    }
  ];
};
