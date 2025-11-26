// =============================================
// Sitemap Generator
// =============================================
// 
// Generates a sitemap.xml file for search engines to discover and index pages.
// This improves SEO by helping search engines understand the site structure.
//
// Next.js automatically serves this at /sitemap.xml

import { MetadataRoute } from 'next'

// Always use primary domain for sitemap (SEO best practice)
const PRIMARY_DOMAIN = 'https://glaum.ca'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  
  // Always use primary domain for sitemap URLs
  return [
    {
      url: PRIMARY_DOMAIN,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${PRIMARY_DOMAIN}/codex`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${PRIMARY_DOMAIN}/structure`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${PRIMARY_DOMAIN}/participate`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}

