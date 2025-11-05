import React from 'react';
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://glaum.ca'

export const metadata: Metadata = {
  title: 'Disclaimers | Glåüm',
  description: 'Disclaimers and important information about Glåüm. Please read our satire disclaimer before engaging with our content.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/disclaimers`,
    siteName: 'Glåüm',
    title: 'Disclaimers | Glåüm',
    description: 'Disclaimers and important information about Glåüm. Please read our satire disclaimer before engaging with our content.',
  },
  twitter: {
    card: 'summary',
    title: 'Disclaimers | Glåüm',
    description: 'Disclaimers and important information about Glåüm. Please read our satire disclaimer before engaging with our content.',
  },
  alternates: {
    canonical: `${siteUrl}/disclaimers`,
  },
}

/**
 * Wraps the disclaimers content with consistent background styling and ensures
 * the proper metadata for satire notices is attached.
 */
export default function DisclaimersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundImage: 'url(/img/homepage.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundColor: 'transparent' }}>
      {children}
      <div className="py-16 mx-auto w-full">
        <footer className="px-4 flex justify-between items-center mx-auto max-w-3xl mx-auto">
          <p className="my-12">Copyright 2022 - Glåüm.ca</p>
        </footer>
      </div>
    </div>
  )
}
