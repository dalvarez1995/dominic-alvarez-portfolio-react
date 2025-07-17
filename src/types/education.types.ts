// Education related types - Optimized with only used properties
export interface Certification {
  courseId: string;
  name: string;
  partners: Array<{
    name: string;
    logo: string;
  }>;
  completionDate: number;
  verifyCode: string;
  distinctionLevel: string;
  // Optional verification override
  verificationUrl?: string;
  provider?: string; // e.g., 'coursera', 'udemy', 'edx', etc.
}

export interface Specialization {
  specializationId: string;
  name: string;
  partnerNames: string[];
  completionDate: number;
  verifyCode: string;
  // Optional verification override
  verificationUrl?: string;
  provider?: string;
}

// Verification configuration types
export interface VerificationConfig {
  baseUrl: string;
  urlPattern: string; // Pattern with {verifyCode} placeholder
  displayName: string;
  icon?: string;
}

export interface ProviderConfig {
  [providerName: string]: VerificationConfig;
}

export interface EducationStat {
  value: string;
  label: string;
  icon: string;
  color: string;
}
