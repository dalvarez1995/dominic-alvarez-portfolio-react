import type { ProviderConfig, VerificationConfig } from '../types/education.types';

/**
 * Centralized verification configuration for education providers
 * Supports multiple providers and custom URL patterns
 */
export const VERIFICATION_PROVIDERS: ProviderConfig = {
  coursera: {
    baseUrl: 'https://coursera.org',
    urlPattern: 'https://coursera.org/verify/{verifyCode}',
    displayName: 'Coursera',
    icon: 'fas fa-external-link-alt'
  },
  'coursera-specialization': {
    baseUrl: 'https://www.coursera.org',
    urlPattern: 'https://www.coursera.org/account/accomplishments/professional-cert/{verifyCode}',
    displayName: 'Coursera Professional Certificate',
    icon: 'fas fa-trophy'
  },
  udemy: {
    baseUrl: 'https://udemy.com',
    urlPattern: 'https://udemy.com/certificate/{verifyCode}',
    displayName: 'Udemy',
    icon: 'fas fa-external-link-alt'
  },
  edx: {
    baseUrl: 'https://edx.org',
    urlPattern: 'https://courses.edx.org/certificates/{verifyCode}',
    displayName: 'edX',
    icon: 'fas fa-external-link-alt'
  },
  pluralsight: {
    baseUrl: 'https://pluralsight.com',
    urlPattern: 'https://pluralsight.com/achievements/{verifyCode}',
    displayName: 'Pluralsight',
    icon: 'fas fa-external-link-alt'
  },
  linkedin: {
    baseUrl: 'https://linkedin.com',
    urlPattern: 'https://linkedin.com/learning/certificates/{verifyCode}',
    displayName: 'LinkedIn Learning',
    icon: 'fab fa-linkedin'
  },
  codecademy: {
    baseUrl: 'https://codecademy.com',
    urlPattern: 'https://codecademy.com/profiles/{verifyCode}/certificates',
    displayName: 'Codecademy',
    icon: 'fas fa-external-link-alt'
  },
  microsoft: {
    baseUrl: 'https://learn.microsoft.com',
    urlPattern: 'https://learn.microsoft.com/api/credentials/share/{verifyCode}',
    displayName: 'Microsoft Learn',
    icon: 'fab fa-microsoft'
  },
  google: {
    baseUrl: 'https://googlecloudskillsboost.google',
    urlPattern: 'https://googlecloudskillsboost.google/public_profiles/{verifyCode}',
    displayName: 'Google Cloud Skills Boost',
    icon: 'fab fa-google'
  },
  aws: {
    baseUrl: 'https://aws.amazon.com',
    urlPattern: 'https://aws.amazon.com/verification/{verifyCode}',
    displayName: 'AWS Training',
    icon: 'fab fa-aws'
  },
  credly: {
    baseUrl: 'https://credly.com',
    urlPattern: 'https://credly.com/badges/{verifyCode}',
    displayName: 'Credly',
    icon: 'fas fa-award'
  },
  platzi: {
    baseUrl: 'https://platzi.com',
    urlPattern: 'https://platzi.com/p/{verifyCode}/diploma/detalle/',
    displayName: 'Platzi',
    icon: 'fas fa-graduation-cap'
  }
};

/**
 * Default provider for backward compatibility
 */
export const DEFAULT_PROVIDER = 'coursera';

/**
 * Get verification URL for a given provider and verify code
 */
export const getVerificationUrl = (
  verifyCode: string, 
  provider: string = DEFAULT_PROVIDER,
  customUrl?: string
): string => {
  // If custom URL is provided, use it directly
  if (customUrl) {
    return customUrl.replace('{verifyCode}', verifyCode);
  }

  // Get provider configuration
  const providerConfig = VERIFICATION_PROVIDERS[provider];
  if (!providerConfig) {
    console.warn(`Unknown verification provider: ${provider}. Using default: ${DEFAULT_PROVIDER}`);
    const defaultConfig = VERIFICATION_PROVIDERS[DEFAULT_PROVIDER];
    return defaultConfig.urlPattern.replace('{verifyCode}', verifyCode);
  }

  return providerConfig.urlPattern.replace('{verifyCode}', verifyCode);
};

/**
 * Get provider display information
 */
export const getProviderInfo = (provider: string = DEFAULT_PROVIDER): VerificationConfig => {
  return VERIFICATION_PROVIDERS[provider] || VERIFICATION_PROVIDERS[DEFAULT_PROVIDER];
};

/**
 * Detect provider from verification URL or partner name
 */
export const detectProvider = (
  partnerNames: string[],
  verificationUrl?: string
): string => {
  // If verification URL is provided, try to detect from URL
  if (verificationUrl) {
    for (const [providerName, config] of Object.entries(VERIFICATION_PROVIDERS)) {
      if (verificationUrl.includes(config.baseUrl)) {
        return providerName;
      }
    }
  }

  // Detect from partner names
  const firstPartner = partnerNames[0]?.toLowerCase() || '';
  
  // Map common partner names to providers
  const partnerToProvider: Record<string, string> = {
    'microsoft': 'microsoft',
    'google': 'google',
    'amazon': 'aws',
    'aws': 'aws',
    'meta': 'coursera', // Meta courses are typically on Coursera
    'facebook': 'coursera',
    'ibm': 'coursera',
    'university': 'coursera', // Most universities use Coursera
    'credly': 'credly',
    'platzi': 'platzi'
  };

  for (const [partnerKey, providerName] of Object.entries(partnerToProvider)) {
    if (firstPartner.includes(partnerKey)) {
      return providerName;
    }
  }

  return DEFAULT_PROVIDER;
};

/**
 * Configuration for specialization verification
 * Uses different URL pattern for Coursera professional certificates
 */
export const getSpecializationVerificationUrl = (
  verifyCode: string,
  provider: string = 'coursera',
  customUrl?: string
): string => {
  if (customUrl) {
    return customUrl.replace('{verifyCode}', verifyCode);
  }

  // Use specialized pattern for Coursera specializations
  if (provider === 'coursera') {
    return getVerificationUrl(verifyCode, 'coursera-specialization');
  }

  return getVerificationUrl(verifyCode, provider);
};
