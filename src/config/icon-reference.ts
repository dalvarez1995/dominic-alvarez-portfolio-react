/**
 * Font Awesome 6 Icon Reference
 * 
 * Common icon name changes from FA5 to FA6:
 * - fa-times → fa-xmark
 * - fa-mobile-alt → fa-mobile-screen-button or fa-mobile-screen
 * - fa-file-export → fa-file-arrow-down or fa-download
 * - fa-envelope → fa-envelope (unchanged)
 * - fa-bars → fa-bars (unchanged)
 * - fa-linkedin → fa-linkedin (unchanged)
 * - fa-github → fa-github (unchanged)
 * 
 * Tips:
 * - Use Font Awesome 6 icon search: https://fontawesome.com/icons
 * - Most solid icons use "fas" prefix
 * - Brand icons use "fab" prefix  
 * - Regular icons use "far" prefix
 */

export const ICON_REFERENCE = {
  // Navigation
  menu: 'fa-bars',
  close: 'fa-xmark',
  
  // Social
  linkedin: 'fab fa-linkedin',
  github: 'fab fa-github',
  email: 'fas fa-envelope',
  
  // Categories
  mobile: 'fa-mobile-screen',
  document: 'fa-file-arrow-down',
  payment: 'fa-credit-card',
  code: 'fa-code',
  
  // Actions
  arrow_up: 'fa-arrow-up',
  arrow_right: 'fa-arrow-right',
  search: 'fa-magnifying-glass',
  
  // Common
  user: 'fa-user',
  server: 'fa-server',
  certificate: 'fa-certificate',
  warning: 'fa-triangle-exclamation'
} as const;
