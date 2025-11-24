import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glåüm Home',
  description: 'Glåüm - More than love.',
  icons: {
    icon: '/img/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="seamless-gradient-wrapper">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://glaum.ca" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:200,400,500,600"
          rel="stylesheet"
        />
        
        {/* Favicon preload */}
        <link rel="preload" as="image" href="/img/favicon.ico" />
        
        {/* Homepage Hero Images - Critical Above the Fold */}
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
        
        {/* Homepage About Section Images - Lazy loaded but preloaded for performance */}
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
        
        {/* Page-specific Background Images - Preload for instant page transitions */}
        <link rel="preload" as="image" href="/img/codex.png" />
        <link rel="preload" as="image" href="/img/structure.png" />
        <link rel="preload" as="image" href="/img/participate.png" />
        
        {/* Tenet Frame Images - Critical for Tenets section */}
        <link rel="preload" as="image" href="/images/tenent-frame-mobile.png" />
        
        {/* External Background Image (from CSS) */}
        <link rel="preload" as="image" href="https://glaum.ca/img/homepage.png" />
      </head>
      <body className="text-black leading-loose" style={{ fontFamily: "'Open Sans'", backgroundColor: 'transparent', backgroundImage: 'none' }}>
        <Header />
        {children}
        <Footer />
        <Script src="https://use.typekit.net/avw1eiz.js" strategy="afterInteractive" />
        <Script src="/js/performance.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
