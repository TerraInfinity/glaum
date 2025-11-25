// =============================================
// Root Layout Component
// =============================================
// This is the root layout component for the Next.js application.
// It wraps all pages and provides global structure, metadata, and performance optimizations.
// The layout includes critical resource preloading to improve initial page load performance.

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
    icon: '/img/favicon.ico',
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
        <link rel="preconnect" href="https://glaum.ca" />
        
        {/* ========== Typography ========== */}
        {/* Open Sans font family with multiple weights for typography hierarchy */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:200,400,500,600"
          rel="stylesheet"
        />
        
        {/* ========== Critical Resource Preloading ========== */}
        {/* Preload critical above-the-fold resources to improve Largest Contentful Paint (LCP).
            These resources are loaded with high priority to ensure fast initial render. */}
        
        {/* Favicon preload - Small but important for browser tab display */}
        <link rel="preload" as="image" href="/img/favicon.ico" />
        
        {/* Homepage Hero Images - Critical Above the Fold
            These images are the first thing users see, so they're preloaded with media queries
            to serve appropriate sizes for mobile vs desktop, reducing bandwidth waste. */}
        <link
          rel="preload"
          as="image"
          href="/img/optimized/cover-mobile.jpg"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/img/optimized/cover.jpg"
          media="(min-width: 769px)"
        />
        
        {/* Homepage About Section Images - Lazy loaded but preloaded for performance
            Preloaded even though lazy-loaded because they appear early in the viewport.
            This ensures smooth scrolling experience without image pop-in. */}
        <link
          rel="preload"
          as="image"
          href="/img/optimized/about-mobile.jpg"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          as="image"
          href="/img/optimized/about.jpg"
          media="(min-width: 769px)"
        />
        
        {/* Page-specific Background Images - Preload for instant page transitions
            These images are used as full-page backgrounds on route pages (codex, structure, participate).
            Preloading ensures instant display when users navigate to these pages. */}
        <link rel="preload" as="image" href="/img/codex.png" />
        <link rel="preload" as="image" href="/img/structure.png" />
        <link rel="preload" as="image" href="/img/participate.png" />
        
        {/* Tenet Frame Images - Critical for Tenets section
            Ornate frame images used to display the Tenets of Glåüm on the homepage.
            Preloaded because they're part of the main content flow. */}
        <link rel="preload" as="image" href="/images/tenent-frame-mobile.png" />
        
        {/* External Background Image (from CSS)
            Background image loaded via CSS in globals.css. Preloading ensures it's ready
            when the CSS applies it, preventing a flash of unstyled content. */}
        <link rel="preload" as="image" href="https://glaum.ca/img/homepage.png" />
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
        
        {/* Performance monitoring script - tracks page load metrics and image loading performance.
            Loaded after interactive to avoid impacting initial page load metrics. */}
        <Script src="/js/performance.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
