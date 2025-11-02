import React from 'react';
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://glaum.ca'

export const metadata: Metadata = {
  title: 'Privacy Policy | Glåüm',
  description: 'Privacy Policy for Glåüm. We respect your privacy and do not use tracking cookies or third-party analytics.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/privacy`,
    siteName: 'Glåüm',
    title: 'Privacy Policy | Glåüm',
    description: 'Privacy Policy for Glåüm. We respect your privacy and do not use tracking cookies or third-party analytics.',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Glåüm',
    description: 'Privacy Policy for Glåüm. We respect your privacy and do not use tracking cookies or third-party analytics.',
  },
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
}

export default function PrivacyLayout({
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
