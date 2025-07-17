import type { PortfolioConfig } from './portfolio.config';

/**
 * Example configuration showing proper ogImage usage
 * This demonstrates different ways to configure the Open Graph image
 */

// Example 1: Using profile photo as OG image
export const profilePhotoOGExample: Partial<PortfolioConfig> = {
  seo: {
    title: "John Developer - Portfolio",
    titleTemplate: "{name} | {role}",
    description: "Software Developer creating amazing web applications",
    keywords: ["Developer", "React", "TypeScript"],
    ogImage: "/images/profile-photo.jpg" // Reuse profile photo
  }
};

// Example 2: Custom OG image design
export const customOGExample: Partial<PortfolioConfig> = {
  seo: {
    title: "Jane Designer - Portfolio", 
    titleTemplate: "{name} • {role} • Portfolio",
    description: "UI/UX Designer crafting beautiful user experiences",
    keywords: ["Designer", "UI/UX", "Figma"],
    ogImage: "/images/jane-og-banner.jpg" // Custom designed OG image
  }
};

// Example 3: External CDN image
export const cdnOGExample: Partial<PortfolioConfig> = {
  seo: {
    title: "Alex Engineer - Portfolio",
    titleTemplate: "{name} - {role}",
    description: "Full Stack Engineer building scalable applications",
    keywords: ["Engineer", "Full Stack", "Node.js"],
    ogImage: "https://cdn.example.com/og-images/alex-portfolio.jpg" // External URL
  }
};

// Example 4: No OG image (optional field)
export const noOGExample: Partial<PortfolioConfig> = {
  seo: {
    title: "Sam Developer - Portfolio",
    titleTemplate: "{name} | Portfolio",
    description: "Backend Developer specializing in APIs",
    keywords: ["Backend", "API", "Database"]
    // ogImage is optional - social platforms will use default images
  }
};

/**
 * Tips for OG images:
 * 
 * 1. Size: 1200x630px for optimal display across platforms
 * 2. Format: JPG or PNG, under 1MB for fast loading
 * 3. Content: Include your name, title, and branding
 * 4. Text: Keep it readable when scaled down
 * 5. Testing: Use Facebook Debugger and Twitter Card Validator
 */
