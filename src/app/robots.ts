// =============================================
// Robots.txt Generator
// =============================================
// 
// Generates a robots.txt file that tells search engines which pages
// they can and cannot crawl. This helps with SEO and prevents
// unnecessary crawling of private or duplicate content.
//
// Next.js automatically serves this at /robots.txt

import { MetadataRoute } from 'next'

// Always use primary domain for robots.txt sitemap reference (SEO best practice)
const PRIMARY_DOMAIN = 'https://glaum.ca'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/', // Disallow API routes if any
          '/_next/', // Disallow Next.js internal files
          '/old/', // Disallow old directory
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/old/',
        ],
      },
    ],
    sitemap: `${PRIMARY_DOMAIN}/sitemap.xml`, // Always use primary domain
  }
}

