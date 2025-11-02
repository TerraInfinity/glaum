'use client'

import React from 'react';
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Disclaimers() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Check if user has seen the disclaimer in the last 30 days
    const disclaimerSeen = getCookie('satire_disclaimer_seen')
    
    if (!disclaimerSeen) {
      // Small delay to ensure page has loaded
      setTimeout(() => {
        setShowPopup(true)
      }, 500)
    }
  }, [])

  const handleAccept = () => {
    // Set cookie for 30 days
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 30)
    setCookie('satire_disclaimer_seen', 'true', expiryDate)
    setShowPopup(false)
  }

  return (
    <div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-[10000] flex items-center justify-center p-4"
            onClick={handleAccept}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white bg-opacity-95 rounded-lg p-8 max-w-2xl w-full border-4 border-purple-400"
              style={{ fontFamily: 'tokyo_dreamsregular' }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">
                ⚠️ Satire Disclaimer
              </h2>
              <div className="space-y-4 text-gray-800">
                <p className="text-lg font-semibold">
                  Important: Glåüm contains elements of satire, parody, and playful humor.
                </p>
                <p>
                  While we are a genuine community dedicated to spiritual unity, compassion, and connection, some of our content, language, and presentation are intentionally satirical and playful. We believe that humor and lightness can coexist with deep spiritual practice.
                </p>
                <p>
                  Please understand that:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Some descriptions of Glåüm may be exaggerated for comedic or artistic effect</li>
                  <li>We use playful terminology that may seem cult-like, but we do not engage in harmful practices</li>
                  <li>Our community is welcoming, inclusive, and non-coercive</li>
                  <li>Participation is always voluntary and based on genuine interest</li>
                </ul>
                <p className="text-sm text-gray-600 mt-6">
                  By continuing, you acknowledge that you understand Glåüm incorporates satirical elements and that you approach our content with appropriate awareness.
                </p>
              </div>
              <button
                onClick={handleAccept}
                className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                style={{ fontFamily: 'tokyo_dreamsregular' }}
              >
                I Understand
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                This reminder won&apos;t appear again for 30 days
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto px-4" style={{ maxWidth: '1200px' }}>
        <div className="pt-48 sm:pt-32 pb-20 xs:pb-32 mx-auto bg-white bg-opacity-30">
          <div className="max-w-4xl mx-4 sm:mx-auto">
            <h1 className="mb-8 text-center xs:w-10/12 lg:w-auto text-xl sm:text-5xl mx-auto main-headline font-normal leading-snug" style={{ fontFamily: 'tokyo_dreamsregular', color: '#8B6914' }}>
              Disclaimers
            </h1>
            
            <div className="text-center mb-8">
              <span style={{ fontFamily: 'tokyo_dreamsregular' }}>•••</span>
            </div>
            
            <div className="mb-8 text-left">
              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20 mb-6">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'tokyo_dreamsregular' }}>
                  Satire & Parody Disclaimer
                </h2>
                <p className="mb-4">
                  Glåüm incorporates elements of satire, parody, and playful humor in its presentation and content. While we are a genuine spiritual community committed to unity, compassion, and connection, some of our language, imagery, and descriptions are intentionally satirical.
                </p>
                <p className="mb-4">
                  We believe that spiritual practice can be both profound and playful, and that humor can help us explore deeper truths without taking ourselves too seriously.
                </p>
              </div>

              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20 mb-6">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'tokyo_dreamsregular' }}>
                  Community Participation
                </h2>
                <p className="mb-4">
                  Participation in Glåüm activities and engagement with our community is entirely voluntary. We do not engage in coercion, manipulation, or harmful practices. Our community values consent, respect, and personal autonomy.
                </p>
              </div>

              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20 mb-6">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'tokyo_dreamsregular' }}>
                  Not a Religious Organization
                </h2>
                <p className="mb-4">
                  Glåüm is not a registered religious organization, and we do not claim to be a religion or faith tradition. We are a community of individuals exploring spiritual connection, personal growth, and collective well-being.
                </p>
              </div>

              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20 mb-6">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'tokyo_dreamsregular' }}>
                  No Medical or Therapeutic Claims
                </h2>
                <p className="mb-4">
                  Glåüm does not provide medical, psychological, or therapeutic services. Our community activities, practices, and discussions are not substitutes for professional medical or mental health care.
                </p>
              </div>

              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20 mb-6">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'tokyo_dreamsregular' }}>
                  Content Accuracy
                </h2>
                <p className="mb-4">
                  While we strive to provide accurate and meaningful information about our community and values, some content may be stylized, metaphorical, or satirical. We encourage critical thinking and personal discernment.
                </p>
              </div>

              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'tokyo_dreamsregular' }}>
                  Contact & Questions
                </h2>
                <p className="mb-4">
                  If you have questions about these disclaimers or about Glåüm, please reach out through our available contact channels. We welcome dialogue and are happy to clarify any concerns.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <h4 style={{ fontFamily: 'tokyo_dreamsregular' }}>
                ˚ ˚ ˚  Glåüm ˚ ˚ ˚
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Cookie utility functions
function setCookie(name: string, value: string, expiryDate: Date): void {
  const cookie = `${name}=${value}; expires=${expiryDate.toUTCString()}; path=/`
  document.cookie = cookie
}

function getCookie(name: string): string | null {
  const nameEQ = `${name}=`
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

