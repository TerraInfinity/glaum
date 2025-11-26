// =============================================
// 404 Not Found Page Component
// =============================================
// 
// Custom 404 page displayed when a route doesn't exist.
// Provides a user-friendly error message and link back to homepage.
// Uses Glåüm brand styling with Tokyo Dreams font for consistency.

import Link from 'next/link'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://glaum.ca'

/**
 * Metadata for 404 page
 */
export const metadata: Metadata = {
  title: 'Page Not Found | Glåüm',
  description: 'The page you\'re looking for doesn\'t exist. Return to Glåüm homepage to explore spiritual unity, compassion, and playful satire.',
  robots: {
    index: false, // Don't index 404 pages
    follow: false,
  },
  openGraph: {
    title: 'Page Not Found | Glåüm',
    description: 'The page you\'re looking for doesn\'t exist. Return to Glåüm homepage.',
    url: `${siteUrl}/404`,
    siteName: 'Glåüm',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Page Not Found | Glåüm',
    description: 'The page you\'re looking for doesn\'t exist.',
  },
}

/**
 * NotFound Component
 * 
 * Displays a custom 404 error page when users navigate to a non-existent route.
 * 
 * Features:
 * - Large "404" heading using Tokyo Dreams font
 * - Friendly error message
 * - Link back to homepage
 * - Consistent styling with rest of site
 * 
 * This component is automatically rendered by Next.js when a route
 * doesn't match any page or route handler.
 * 
 * @returns {JSX.Element} 404 error page
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 error-page-container">
      <div className="text-center max-w-2xl mx-auto">
        <h1 
          className="text-6xl md:text-8xl font-bold mb-4"
        >
          404
        </h1>
        <h2 
          className="text-2xl md:text-4xl mb-6 opacity-70"
        >
          Page Not Found
        </h2>
        <p className="text-lg mb-8 opacity-80">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block square-btn square-btn--md bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

