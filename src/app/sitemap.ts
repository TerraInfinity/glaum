// =============================================
// Sitemap Generator
// =============================================
// 
// Generates a sitemap.xml file for search engines to discover and index pages.
// This improves SEO by helping search engines understand the site structure.
//
// Next.js automatically serves this at /sitemap.xml

import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://glaum.ca'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/codex`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/structure`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/participate`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}

