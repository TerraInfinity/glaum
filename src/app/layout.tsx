// =============================================
// Root Layout Component
// =============================================
// This is the root layout component for the Next.js application.
// It wraps all pages and provides global structure, metadata, and performance optimizations.
// Next.js automatically handles resource optimization and preloading for images and fonts.

import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData, { organizationSchema, websiteSchema } from '@/components/StructuredData'
import WebVitals from '@/components/WebVitals'
import './globals.css'

// Site configuration
// Always use primary domain for canonical URLs to prevent duplicate content issues
// Even if accessed via glaum.terrainfinity.ca, canonical URLs should point to glaum.ca
const PRIMARY_DOMAIN = 'https://glaum.ca'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || PRIMARY_DOMAIN
// For canonical URLs, always use primary domain for SEO
const canonicalUrl = PRIMARY_DOMAIN
const siteName = 'Glåüm'
const defaultTitle = 'Glåüm: Spiritual Unity & Satire'
const defaultDescription = 'More than love. Join the Manyhands - a community of spiritual unity, compassion, connection, and playful satire. Experience Glåüm.'

/**
 * Comprehensive metadata configuration for SEO, OpenGraph, Twitter Cards, and social sharing.
 * Sets the page title, description, and social media previews that appear in browser tabs,
 * search results, and when shared on social platforms.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'Glåüm',
    'spiritual unity',
    'spiritual community',
    'Manyhands',
    'compassion',
    'satire',
    'spiritual growth',
    'community',
    'attunement',
    'kundalini',
    'spiritual practice',
  ],
  authors: [{ name: 'Glåüm', url: siteUrl }],
  creator: 'Glåüm',
  publisher: 'Glåüm',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/img/favicon.ico', sizes: 'any' },
      { url: '/img/Glaum-Logo-Purple-Accent.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/Glaum-Logo-Purple-Accent.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/img/favicon.ico', sizes: 'any' },
      { url: '/img/Glaum-Logo-Purple-Accent.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Glåüm',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/img/optimized/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Glåüm - Spiritual Unity & Satire',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/img/optimized/cover.jpg'],
    creator: '@glaum', // Update with actual Twitter handle if available
  },
  alternates: {
    canonical: canonicalUrl, // Always use primary domain for canonical URLs (SEO best practice)
  },
  other: {
    // Additional meta tags can be added here
    // Preconnect links are handled via external stylesheet loading
    'theme-color': '#D239F8', // Glåüm brand purple for browser theme
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

/**
 * Viewport configuration for responsive design.
 * Ensures proper mobile rendering by setting device-width and preventing zoom on initial load.
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#D239F8', // Glåüm brand purple
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
      <body className="text-black leading-loose body-base">
        {/* ========== Structured Data (JSON-LD) ========== */}
        {/* Provides structured data for search engines to better understand the website */}
        {/* JSON-LD scripts can be placed in the body and will be moved to head by Next.js */}
        <StructuredData schemas={[organizationSchema, websiteSchema]} />
        
        {/* ========== Skip to Content Link ========== */}
        {/* Allows keyboard users to skip navigation and jump directly to main content */}
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to main content
        </a>
        
        {/* ========== Global Components ========== */}
        {/* Header component with navigation - appears on all pages */}
        <Header />
        
        {/* ========== Main Content ========== */}
        {/* Page content - dynamically rendered based on current route */}
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        
        {/* Footer component with SoundCloud player and copyright - appears on all pages */}
        <Footer />
        
        {/* ========== Third-Party Scripts ========== */}
        {/* Adobe Typekit font loading - loaded after interactive to avoid blocking initial render.
            strategy="afterInteractive" ensures the page is interactive before this script runs. */}
        <Script src="https://use.typekit.net/avw1eiz.js" strategy="afterInteractive" />
        
        {/* ========== Analytics & Monitoring ========== */}
        {/* Web Vitals Tracking - Enhanced performance monitoring */}
        <WebVitals />
        
        {/* Google Analytics 4 - Optional, configure with NEXT_PUBLIC_GA_MEASUREMENT_ID */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        
        {/* Vercel Analytics - Automatically tracks page views, errors, and web vitals */}
        <Analytics />
        
        {/* Vercel Speed Insights - Tracks Core Web Vitals and performance metrics */}
        <SpeedInsights />
      </body>
    </html>
  )
}
