// =============================================
// Site Configuration Utility
// =============================================
// 
// Centralized site configuration for handling multiple domains.
// Supports both glaum.ca (primary) and glaum.terrainfinity.ca (alternative subdomain).

/**
 * Primary site domain - always use this for canonical URLs and SEO
 */
export const PRIMARY_DOMAIN = 'https://glaum.ca'

/**
 * Alternative subdomain that may be used during production
 */
export const ALTERNATIVE_DOMAIN = 'https://glaum.terrainfinity.ca'

/**
 * Gets the site URL from environment variable or defaults to primary domain
 * 
 * For SEO and canonical URLs, always use the primary domain (glaum.ca)
 * even if the site is accessed via the alternative subdomain.
 * This prevents duplicate content issues in search engines.
 * 
 * @returns The site URL to use for metadata, sitemap, etc.
 */
export function getSiteUrl(): string {
  // Use environment variable if set, otherwise default to primary domain
  return process.env.NEXT_PUBLIC_SITE_URL || PRIMARY_DOMAIN
}

/**
 * Gets the current request URL (for runtime detection)
 * Only works on client-side or in server components with headers
 * 
 * @param headers - Optional request headers (from Next.js headers())
 * @returns The current request URL or primary domain as fallback
 */
export function getCurrentUrl(headers?: Headers): string {
  if (typeof window !== 'undefined') {
    // Client-side: use current window location
    return window.location.origin
  }
  
  if (headers) {
    // Server-side: use request headers
    const host = headers.get('host')
    const protocol = headers.get('x-forwarded-proto') || 'https'
    if (host) {
      return `${protocol}://${host}`
    }
  }
  
  // Fallback to primary domain
  return PRIMARY_DOMAIN
}

/**
 * Checks if the current URL is the alternative subdomain
 * 
 * @param url - URL to check (defaults to current URL if available)
 * @returns True if using alternative subdomain
 */
export function isAlternativeDomain(url?: string): boolean {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.origin : PRIMARY_DOMAIN)
  return currentUrl.includes('terrainfinity.ca')
}

/**
 * Normalizes URL to always use primary domain for canonical URLs
 * 
 * @param url - URL to normalize
 * @returns URL with primary domain
 */
export function normalizeToPrimaryDomain(url: string): string {
  if (url.includes('terrainfinity.ca')) {
    return url.replace('glaum.terrainfinity.ca', 'glaum.ca')
  }
  return url
}

