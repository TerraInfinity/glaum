import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://glaum.ca'

/**
 * Generates the robots.txt descriptor, locking down build-specific paths while
 * pointing crawlers to the canonical sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

