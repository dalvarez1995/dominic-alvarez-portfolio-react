/**
 * SEO Configuration for Portfolio
 * Update these settings before deployment
 */
export const seoConfig = {
  // Your domain (REQUIRED - update before deployment)
  domain: 'https://dominic-alvarez.dev',
  
  // Site metadata
  siteName: 'Dominic Alvarez - Portfolio',
  description: 'Software Technical Lead & Developer specializing in innovative solutions across web, desktop, and mobile platforms.',
  
  // Default SEO settings
  defaultChangeFreq: 'monthly',
  defaultPriority: '0.8',
  
  // Robots.txt settings
  robotsSettings: {
    allowAll: true,
    crawlDelay: null, // Set to number of seconds if needed
    disallowPaths: [
      // Add paths to block from crawlers
      // '/admin/',
      // '/private/'
    ],
    allowPaths: [
      '/assets/',
      '/images/'
    ]
  },
  
  // Sitemap URL configuration
  urls: [
    {
      path: '/',
      priority: '1.0',
      changefreq: 'monthly',
      description: 'Homepage'
    },
    {
      path: '/#about',
      priority: '0.8',
      changefreq: 'monthly',
      description: 'About section'
    },
    {
      path: '/#projects',
      priority: '0.9',
      changefreq: 'weekly',
      description: 'Projects showcase'
    },
    {
      path: '/#education',
      priority: '0.7',
      changefreq: 'monthly',
      description: 'Education and certifications'
    },
    {
      path: '/#contact',
      priority: '0.8',
      changefreq: 'monthly',
      description: 'Contact information'
    }
  ]
};

export default seoConfig;
