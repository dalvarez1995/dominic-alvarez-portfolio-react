/**
 * Utility functions for dynamic title generation
 */
import type { PortfolioConfig } from '../config/portfolio.config';

/**
 * Generate a dynamic title using the template and personal information
 * @param config - Portfolio configuration
 * @returns Generated title string
 */
export function generateDynamicTitle(config: PortfolioConfig): string {
  const { personal, seo } = config;
  
  // If a titleTemplate is provided, use it for dynamic generation
  if (seo.titleTemplate) {
    return seo.titleTemplate
      .replace(/{name}/g, personal.name)
      .replace(/{title}/g, personal.title)
      .replace(/{role}/g, personal.title)
      .replace(/{shortDescription}/g, personal.shortDescription);
  }
  
  // Fallback to static title
  return seo.title;
}

/**
 * Generate a professional title with different formats
 * @param name - Person's name
 * @param role - Professional role/title
 * @param format - Title format type
 * @returns Formatted title string
 */
export function generateProfessionalTitle(
  name: string, 
  role: string, 
  format: 'standard' | 'modern' | 'creative' | 'simple' = 'standard'
): string {
  switch (format) {
    case 'modern':
      return `${name} | ${role}`;
    case 'creative':
      return `${name} • ${role} • Portfolio`;
    case 'simple':
      return `${name} - ${role}`;
    case 'standard':
    default:
      return `${name} - ${role} | Portfolio`;
  }
}

/**
 * Generate title suggestions based on personal information
 * @param config - Portfolio configuration
 * @returns Array of title suggestions
 */
export function generateTitleSuggestions(config: PortfolioConfig): string[] {
  const { personal } = config;
  
  return [
    generateProfessionalTitle(personal.name, personal.title, 'standard'),
    generateProfessionalTitle(personal.name, personal.title, 'modern'),
    generateProfessionalTitle(personal.name, personal.title, 'creative'),
    generateProfessionalTitle(personal.name, personal.title, 'simple'),
    `${personal.name} - Professional Portfolio`,
    `${personal.name} | ${personal.title} Portfolio`,
    `Portfolio of ${personal.name}`,
    `${personal.name} • ${personal.title}`,
  ];
}

/**
 * Generate SEO-optimized title with length considerations
 * @param config - Portfolio configuration
 * @param maxLength - Maximum title length for SEO (default: 60)
 * @returns SEO-optimized title
 */
export function generateSEOTitle(config: PortfolioConfig, maxLength: number = 60): string {
  const dynamicTitle = generateDynamicTitle(config);
  
  // If title is within SEO limits, return as is
  if (dynamicTitle.length <= maxLength) {
    return dynamicTitle;
  }
  
  // Try shorter alternatives
  const { personal } = config;
  const alternatives = [
    `${personal.name} - ${personal.title}`,
    `${personal.name} | ${personal.title}`,
    `${personal.name} Portfolio`,
    personal.name
  ];
  
  // Return the first alternative that fits within the limit
  for (const alt of alternatives) {
    if (alt.length <= maxLength) {
      return alt;
    }
  }
  
  // Fallback: truncate original title
  return dynamicTitle.substring(0, maxLength - 3) + '...';
}
