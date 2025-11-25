// =============================================
// Root Layout Component
// =============================================
// This is the root layout component for the Next.js application.
// It wraps all pages and provides global structure, metadata, and performance optimizations.
// Next.js automatically handles resource optimization and preloading for images and fonts.

import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

/**
 * Metadata configuration for SEO and browser display.
 * Sets the page title and description that appear in browser tabs and search results.
 */
export const metadata: Metadata = {
  title: 'Glåüm Home',
  description: 'Glåüm - More than love.',
  icons: {
    icon: [
      { url: '/img/favicon.ico', sizes: 'any' },
    ],
  },
}

/**
 * Viewport configuration for responsive design.
 * Ensures proper mobile rendering by setting device-width and preventing zoom on initial load.
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

/**
 * RootLayout Component
 * 
 * Provides the base HTML structure for all pages in the application.
 * Includes performance optimizations through resource preloading and strategic script loading.
 * 
 * @param {React.ReactNode} children - The page content to be rendered within the layout
 * @returns {JSX.Element} The complete HTML structure with header, content, and footer
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="seamless-gradient-wrapper">
      <head>
        {/* X-UA-Compatible meta tag for IE/Edge compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        
        {/* ========== Performance Optimizations: Resource Hints ========== */}
        {/* Preconnect to external domains to establish early connections and reduce DNS lookup time.
            This improves perceived performance by starting connections before resources are needed. */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* ========== Typography ========== */}
        {/* Open Sans font family with multiple weights for typography hierarchy */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:200,400,500,600"
          rel="stylesheet"
        />
        
        {/* ========== Favicon ========== */}
        {/* Standard Next.js 14 favicon handling */}
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
      </head>
      <body className="text-black leading-loose" style={{ fontFamily: "'Open Sans'", backgroundColor: 'transparent', backgroundImage: 'none' }}>
        {/* ========== Global Components ========== */}
        {/* Header component with navigation - appears on all pages */}
        <Header />
        
        {/* Page content - dynamically rendered based on current route */}
        {children}
        
        {/* Footer component with SoundCloud player and copyright - appears on all pages */}
        <Footer />
        
        {/* ========== Third-Party Scripts ========== */}
        {/* Adobe Typekit font loading - loaded after interactive to avoid blocking initial render.
            strategy="afterInteractive" ensures the page is interactive before this script runs. */}
        <Script src="https://use.typekit.net/avw1eiz.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
