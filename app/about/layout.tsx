import React from 'react';

/**
 * Layout wrapper for About subpages, applying the themed background and
 * footer handoff expected for the Glåüm story content.
 */
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundImage: 'url(/img/about.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundColor: 'transparent' }}>
      {children}
      <div className="py-16 mx-auto w-full">
        <footer className="px-4 flex justify-between items-center mx-auto max-w-3xl mx-auto">
          <p className="my-12">Copyright 2022 - Glåüm.ca</p>
        </footer>
      </div>
    </div>
  )
}

