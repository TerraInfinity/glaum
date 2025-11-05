import React from 'react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

/**
 * Minimal layout for internal style guide routes, disabling indexing while
 * simply rendering nested previews.
 */
export default function StyleGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  )
}
