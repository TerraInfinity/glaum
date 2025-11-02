import React from 'react';
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://glaum.ca'

export const metadata: Metadata = {
  title: 'Bylaws | Glåüm',
  description: 'The Bylaws of Glåüm: Mothers of Glåüm and Council of Attunement governance structure.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/bylaws`,
    siteName: 'Glåüm',
    title: 'Bylaws | Glåüm',
    description: 'The Bylaws of Glåüm: Mothers of Glåüm and Council of Attunement governance structure.',
  },
  twitter: {
    card: 'summary',
    title: 'Bylaws | Glåüm',
    description: 'The Bylaws of Glåüm: Mothers of Glåüm and Council of Attunement governance structure.',
  },
  alternates: {
    canonical: `${siteUrl}/bylaws`,
  },
}

export default function BylawsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundImage: 'url(/img/structure.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundColor: 'transparent' }}>
      {children}
      <div className="py-16 mx-auto w-full">
        <footer className="px-4 flex justify-between items-center mx-auto max-w-3xl mx-auto">
          <p className="my-12">Copyright 2022 - Glåüm.ca</p>
        </footer>
      </div>
    </div>
  )
}
