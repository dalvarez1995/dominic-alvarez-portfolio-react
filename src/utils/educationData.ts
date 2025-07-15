// Utility functions for loading education data
import type { Certification, Specialization } from '../config/portfolio.config';

// Import JSON files directly (more secure than public assets)
import certificationsData from '../assets/data/certifications.json';
import specializationsData from '../assets/data/specializations.json';

export const loadCertifications = async (): Promise<Certification[]> => {
  try {
    // Use direct import for better security and bundling
    const certs = certificationsData.elements || certificationsData;
    
    // Sort by completion date (newest first)
    return certs.sort((a: Certification, b: Certification) => 
      b.completionDate - a.completionDate
    );
  } catch (error) {
    console.error('Failed to load certifications:', error);
    return [];
  }
};

export const loadSpecializations = async (): Promise<Specialization[]> => {
  try {
    // Use direct import for better security and bundling
    const specs = specializationsData.elements || specializationsData;
    
    // Sort by completion date (newest first)
    return specs.sort((a: Specialization, b: Specialization) => 
      b.completionDate - a.completionDate
    );
  } catch (error) {
    console.error('Failed to load specializations:', error);
    return [];
  }
};
