// =============================================
// Structured Data Component (JSON-LD)
// =============================================
// 
// Provides structured data (JSON-LD) for search engines to better understand
// the website content. This improves SEO and enables rich snippets in search results.
//
// Schema.org types used:
// - Organization: Represents the Glåüm organization
// - WebSite: Represents the website itself
// - WebPage: Can be extended for individual pages

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://glaum.ca'

/**
 * Organization Structured Data
 * 
 * Defines the Glåüm organization for search engines.
 * This enables rich snippets and knowledge graph entries.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Glåüm',
  alternateName: 'The Many Hands of Glåüm',
  url: siteUrl,
  logo: `${siteUrl}/img/Glaum-Logo-Purple-Accent.png`,
  description: 'A community of spiritual unity, compassion, connection, and playful satire. More than love.',
  foundingDate: '2024', // Update with actual founding date if known
  sameAs: [
    // Add social media profiles when available
    // 'https://twitter.com/glaum',
    // 'https://www.facebook.com/glaum',
    // 'https://www.instagram.com/glaum',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Community Support',
    // email: 'contact@glaum.ca', // Add if available
  },
}

/**
 * Website Structured Data
 * 
 * Defines the website structure for search engines.
 * Helps with site search and navigation understanding.
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Glåüm',
  url: siteUrl,
  description: 'More than love. Join the Manyhands - a community of spiritual unity, compassion, connection, and playful satire.',
  publisher: {
    '@type': 'Organization',
    name: 'Glåüm',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

/**
 * StructuredData Component
 * 
 * Renders JSON-LD structured data scripts in the page head.
 * These scripts are invisible to users but help search engines
 * understand the content and structure of the website.
 * 
 * @param {object} schemas - Array of schema objects to render
 * @returns {JSX.Element} Script tags with JSON-LD structured data
 */
export default function StructuredData({ schemas }: { schemas: object[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

