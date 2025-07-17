import type { Certification } from '../types/education.types';
import { detectProvider } from '../config/verification.config';

// Raw certification data with type safety - Only essential properties
export const rawCertifications: Certification[] = [
  {
    courseId: "lbJ3VGYsEe-WbhKfqhh3sw",
    name: "Data Structures and Algorithms",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-05-08").getTime(), // May 2025
    verifyCode: "8I79HM72RQY9",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "RIma_myvEe-Quwr_1ABTmQ",
    name: "Full-Stack Integration",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-04-26").getTime(), // April 2025
    verifyCode: "NKF2GU938KRF",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "TBVLqmbxEe-99A4YM4NoOw",
    name: "Blazor for Front-End Development",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-04-16").getTime(), // April 2025
    verifyCode: "4SK11UCVLK6B",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "QDLXwWbxEe-WbhKfqhh3sw",
    name: "Introduction to Web Development",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-04-10").getTime(), // April 2025
    verifyCode: "Y9VBK1F3J7T2",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "rUiJeyY_Eey4dA6DVmO2QQ",
    name: "Primeros pasos en el proceso de diseño de UX: Empatizar, definir e idear",
    partners: [
      {
        name: "Google",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/6b/7dddea1b364f6a816dfc53891e6d14/160x60_Google.png"
      }
    ],
    completionDate: new Date("2024-07-21").getTime(), // July 2024
    verifyCode: "H7P4Y9JK8H3W",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "3MUoNGsNEe-6xRKldbKQ1w",
    name: "Web Application Security",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-07-10").getTime(), // July 2025
    verifyCode: "BGQYYVSHFKR5",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "XNTItGyvEe-CUA7-5BJkaw",
    name: "Full-Stack Developer Capstone Project",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-05-07").getTime(), // May 2025
    verifyCode: "5597Q6W8GJUA",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "at78VmYrEe-EPwr_9XyAcQ",
    name: "Introduction to Programming With C#",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-04-08").getTime(), // April 2025
    verifyCode: "NTXG9JJTTF52",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "0GxXfWYsEe-EPwr_9XyAcQ",
    name: "Deployment and DevOps",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-05-06").getTime(), // May 2025
    verifyCode: "VQEOXHNY7TP0",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "ch77eSZDEey4dA6DVmO2QQ",
    name: "Crear esquemas de página y prototipos de baja fidelidad",
    partners: [
      {
        name: "Google",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/6b/7dddea1b364f6a816dfc53891e6d14/160x60_Google.png"
      }
    ],
    completionDate: new Date("2024-12-10").getTime(), // December 2024
    verifyCode: "JII8AO4I6CZ8",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "VjAdw2bxEe-WbhKfqhh3sw",
    name: "UI/UX Design Principles",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-06-30").getTime(), // June 2025
    verifyCode: "SDFEYRU3Z97X",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "uKCIfWYrEe-EPwr_9XyAcQ",
    name: "Back-End Development with .NET",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-04-19").getTime(), // April 2025
    verifyCode: "ZRIWE35Y56B0",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "0t2bn2YrEe-99A4YM4NoOw",
    name: "Performance Optimization and Scalability",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-05-04").getTime(), // May 2025
    verifyCode: "BUC1ZQ5XCPHN",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "YCTO7mYmEe-EPwr_9XyAcQ",
    name: "Foundations of Coding Back-End",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-05-15").getTime(), // May 2025
    verifyCode: "G6NY9VILOI15",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "Pe8GvGYmEe-WbhKfqhh3sw",
    name: "Foundations of Coding Full-Stack",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-04-04").getTime(), // April 2025
    verifyCode: "441CFN6V3JV2",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "ykSG5WYrEe-WbhKfqhh3sw",
    name: "Security and Authentication",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-05-03").getTime(), // May 2025
    verifyCode: "OWGALBE4K4IE",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "Y_LvmW7rEe-wbhLJOoujmw",
    name: "Foundations of Coding Front-End",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-05-22").getTime(), // May 2025
    verifyCode: "TRYLY4MFL48C",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "QH-kTyY9EeyxgAr51Gjbpw",
    name: "Aspectos básicos del diseño de la experiencia del usuario",
    partners: [
      {
        name: "Google",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/6b/7dddea1b364f6a816dfc53891e6d14/160x60_Google.png"
      }
    ],
    completionDate: new Date("2024-06-14").getTime(), // June 2024
    verifyCode: "FXQDD35WENEA",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "EBPE_iZGEey4dA6DVmO2QQ",
    name: "Llevar a cabo investigaciones en UX",
    partners: [
      {
        name: "Google",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/6b/7dddea1b364f6a816dfc53891e6d14/160x60_Google.png"
      }
    ],
    completionDate: new Date("2025-01-09").getTime(), // January 2025
    verifyCode: "6SNJCKCQOU68",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "mlAZb8cEEeyduw6ktL3Xvw",
    name: "Introduction to Mobile Development",
    partners: [
      {
        name: "Meta",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/db/b2724c5c344646afcb9a30974615ab/160-x-60-reg.png"
      }
    ],
    completionDate: new Date("2025-07-11").getTime(), // July 2025
    verifyCode: "1DNY9CO7AWTN",
    distinctionLevel: "NORMAL"
  },
  {
    courseId: "wosjbWYrEe-EPwr_9XyAcQ",
    name: "Database Integration and Management",
    partners: [
      {
        name: "Microsoft",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/ec16a1f2b648918da1b8abec559055/msft_02Nov.png"
      }
    ],
    completionDate: new Date("2025-04-22").getTime(), // April 2025
    verifyCode: "XMEUEOYVYR7K",
    distinctionLevel: "NORMAL"
  },
  {
      courseId: 'oSFuP1',
      name: "English Certificate 75/100 (C2 Proficient)",
      partners: [
        {
          name: "EF SET",
          logo: "https://cert.efset.org/_next/static/media/logo.06bf8183.svg"
        }
    ],
      completionDate: new Date("2024-07-01").getTime(), // July 2024
      verifyCode: "oSFuP1",
      verificationUrl: "https://cert.efset.org/oSFuP1",
      distinctionLevel: "NORMAL"
    }
];

// Enhanced certification data with computed properties
export interface EnhancedCertification extends Certification {
  formattedDate: string;
  completionYear: number;
  isRecent: boolean;
  category: 'frontend' | 'backend' | 'fullstack' | 'data' | 'cloud' | 'other';
  displayName: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  primaryProvider: string;
  description?: string;
  skillsEstimated: string[];
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

const inferLevel = (name: string): EnhancedCertification['level'] => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('professional') || lowerName.includes('capstone') || lowerName.includes('advanced')) return 'professional';
  if (lowerName.includes('intermediate')) return 'intermediate';
  if (lowerName.includes('introduction') || lowerName.includes('basics') || lowerName.includes('fundament')) return 'beginner';
  return 'intermediate'; // Default
};

const getEstimatedSkills = (_name: string, category: EnhancedCertification['category']): string[] => {
  const skillMap: Record<EnhancedCertification['category'], string[]> = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'UI/UX', 'Responsive Design'],
    backend: ['APIs', 'Databases', 'Server Architecture', 'Authentication', 'Security'],
    fullstack: ['Full-Stack Development', 'System Design', 'DevOps', 'Project Management'],
    data: ['Data Analysis', 'Algorithms', 'Statistics', 'Database Design'],
    cloud: ['Cloud Architecture', 'DevOps', 'Scalability', 'Infrastructure'],
    other: ['Problem Solving', 'Technical Communication', 'Best Practices']
  };
  return skillMap[category] || skillMap.other;
};

const getDescription = (name: string): string => {
  const descriptions: Record<string, string> = {
    'Data Structures and Algorithms': 'Comprehensive course covering fundamental computer science concepts including data structures, algorithms, and computational complexity.',
    'Full-Stack Integration': 'Advanced integration techniques for connecting front-end and back-end systems in modern web applications.',
    'Introduction to Web Development': 'Foundational course covering HTML, CSS, JavaScript, and web development fundamentals.',
    'Web Application Security': 'Security best practices, vulnerability assessment, and protection strategies for web applications.'
  };
  return descriptions[name] || 'Professional certification course designed to advance technical skills and industry knowledge.';
};

// Enhanced certifications with computed properties
export const certifications: EnhancedCertification[] = rawCertifications.map(cert => {
  const partnerNames = cert.partners.map(p => p.name);
  const autoDetectedProvider = detectProvider(partnerNames, cert.verificationUrl);
  
  return {
    ...cert,
    formattedDate: formatDate(cert.completionDate),
    completionYear: new Date(cert.completionDate).getFullYear(),
    isRecent: isRecentCertification(cert.completionDate),
    category: inferCategory(cert.name),
    displayName: cert.name.replace(/^(Microsoft|Google|Amazon|Meta)\s*-?\s*/i, '').trim(),
    level: inferLevel(cert.name),
    primaryProvider: cert.partners[0]?.name || 'Unknown',
    description: getDescription(cert.name),
    skillsEstimated: getEstimatedSkills(cert.name, inferCategory(cert.name)),
    // Add provider information for verification
    provider: cert.provider || autoDetectedProvider
  };
});

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
    cert.partners.some(partner => partner.name.toLowerCase().includes(lowerQuery))
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
};
