import React from 'react';
import '../lib/styles/globals.css'
import PerformanceMonitor from './performance'
import Footer from './footer'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://glaum.ca'

export const metadata: Metadata = {
  title: 'Glåüm: Spiritual Unity & Satire',
  description: 'More than love. Join the Manyhands - a cult of spiritual unity, compassion, connection, and playful satire. Experience Glåüm.',
  keywords: ['kundalini satire', 'Waheguru love', 'spiritual unity', 'Glåüm', 'Manyhands', 'spiritual community'],
  authors: [{ name: 'Glåüm' }],
  creator: 'Glåüm',
  publisher: 'Glåüm',
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
    siteName: 'Glåüm',
    title: 'Glåüm: Spiritual Unity & Satire',
    description: 'More than love. Join the Manyhands - a cult of spiritual unity, compassion, connection, and playful satire.',
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
    title: 'Glåüm: Spiritual Unity & Satire',
    description: 'More than love. Join the Manyhands - a cult of spiritual unity, compassion, connection, and playful satire.',
    images: ['/img/optimized/cover.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
  metadataBase: new URL(siteUrl),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="seamless-gradient-wrapper" lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:200,400,500,600"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/avw1eiz.css" />
        <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8038f4" />
      </head>
      <body className="text-black leading-loose bg-[var(--color-purple2)] bg-[url('/img/homepage.png')] bg-cover bg-no-repeat" style={{ fontFamily: 'Open Sans' }}>
        <div className="w-full bg-body z-[9999] mx-auto l-0 r-0 fixed bg-blue-900 bg-opacity-10 backdrop-blur header" style={{ zIndex: 9999 }}>
          <div className="flex flex-col sm:flex-row justify-between items-center mx-auto max-w-screen-lg px-4 sm:px-8 py-4 sm:py-6">
            <a
              className="font-averta-bold text-center text-lg sm:text-xl lg:text-2xl leading-tight logo-text opacity-70 hover:opacity-100 transition"
              href="/"
            >
              Glåüm
            </a>
            <hr className="my-2 sm:hidden" />
            <nav className="flex flex-col sm:flex-row sm:space-x-4">
              <a
                className="font-averta-bold text-center text-lg sm:text-xl lg:text-2xl mx-auto leading-tight opacity-70 hover:opacity-100 transition"
                href="/#about"
              >
                About
              </a>
              <a
                className="font-averta-bold text-center text-lg sm:text-xl lg:text-2xl mx-auto leading-tight opacity-70 hover:opacity-100 transition"
                href="/codex"
              >
                Codex
              </a>
              <a
                className="font-averta-bold text-center text-lg sm:text-xl lg:text-2xl mx-auto leading-tight opacity-70 hover:opacity-100 transition"
                href="/structure"
              >
                Structure
              </a>
              <a
                className="font-averta-bold text-center text-lg sm:text-xl lg:text-2xl mx-auto leading-tight opacity-70 hover:opacity-100 transition"
                href="/participate"
              >
                Participate
              </a>
              <a
                className="font-averta-bold text-center text-lg sm:text-xl lg:text-2xl mx-auto leading-tight opacity-70 hover:opacity-100 transition"
                href="/privacy"
              >
                Privacy
              </a>
              <a
                className="font-averta-bold text-center text-lg sm:text-xl lg:text-2xl mx-auto leading-tight opacity-70 hover:opacity-100 transition"
                href="/bylaws"
              >
                Bylaws
              </a>
              <a
                className="font-averta-bold text-center text-lg sm:text-xl lg:text-2xl mx-auto leading-tight opacity-70 hover:opacity-100 transition"
                href="/disclaimers"
              >
                Disclaimers
              </a>
              <a
                className="font-averta-bold text-center text-lg sm:text-xl lg:text-2xl mx-auto leading-tight opacity-70 hover:opacity-100 transition"
                href="/ai-ethics"
              >
                AI Ethics
              </a>
            </nav>
          </div>
        </div>
        {children}
        <Footer />
        <PerformanceMonitor />
        <Analytics />
      </body>
    </html>
  )
}

