import React from 'react';
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://glaum.ca'

export const metadata: Metadata = {
  title: 'AI Ethics | Glåüm',
  description: 'Conscious AI and ethical considerations inspired by Grimes. Exploring the relationship between consciousness, artificial intelligence, and spiritual unity.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/ai-ethics`,
    siteName: 'Glåüm',
    title: 'AI Ethics | Glåüm',
    description: 'Conscious AI and ethical considerations inspired by Grimes. Exploring the relationship between consciousness, artificial intelligence, and spiritual unity.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Ethics | Glåüm',
    description: 'Conscious AI and ethical considerations inspired by Grimes. Exploring the relationship between consciousness, artificial intelligence, and spiritual unity.',
  },
  alternates: {
    canonical: `${siteUrl}/ai-ethics`,
  },
}

export default function AIEthicsLayout({
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
