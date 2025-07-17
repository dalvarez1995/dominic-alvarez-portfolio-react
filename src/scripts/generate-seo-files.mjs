#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Default configuration for sitemap generation
const DEFAULT_CONFIG = {
  domain: 'https://dominic-alvarez.dev',
  lastModified: new Date().toISOString().split('T')[0],
  defaultChangeFreq: 'monthly',
  defaultPriority: '0.8'
};

// URL configuration based on portfolio structure
const URLS = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'monthly'
  },
  {
    path: '/#about',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    path: '/#projects',
    priority: '0.9',
    changefreq: 'weekly'
  },
  {
    path: '/#education',
    priority: '0.7',
    changefreq: 'monthly'
  },
  {
    path: '/#contact',
    priority: '0.8',
    changefreq: 'monthly'
  }
];

function generateSitemap(config = DEFAULT_CONFIG) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${URLS.map(url => `
  <url>
    <loc>${config.domain}${url.path}</loc>
    <lastmod>${config.lastModified}</lastmod>
    <changefreq>${url.changefreq || config.defaultChangeFreq}</changefreq>
    <priority>${url.priority || config.defaultPriority}</priority>
  </url>`).join('')}
  
</urlset>`;

  return xml;
}

function generateRobotsTxt(config = DEFAULT_CONFIG) {
  return `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${config.domain}/sitemap.xml

# Allow indexing of all content
Allow: /assets/
Allow: /images/

# Optional: Crawl delay (in seconds) - can help with server load
# Crawl-delay: 1

# Block access to development/admin areas if any exist
# Disallow: /admin/
# Disallow: /.git/
# Disallow: /node_modules/`;
}

function main() {
  const publicDir = path.join(__dirname, '../../public');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generate and write sitemap.xml
  const sitemap = generateSitemap();
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Generated sitemap.xml');

  // Generate and write robots.txt
  const robotsTxt = generateRobotsTxt();
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✅ Generated robots.txt');

  console.log('\n📝 Don\'t forget to:');
  console.log('1. Update the domain in both files before deployment');
  console.log('2. Verify the URLs match your actual portfolio structure');
  console.log('3. Update lastmod dates when content changes');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateSitemap, generateRobotsTxt, DEFAULT_CONFIG };
