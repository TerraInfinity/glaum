// =============================================
// Codex Page Component
// =============================================
// 
// Displays the Tenets of Glåüm in a dedicated page format.
// Provides a focused view of the community's core principles and values.
// Uses a full-page background image with semi-transparent content overlay.

import type { Metadata } from 'next'

// Always use primary domain for canonical URLs (SEO best practice)
const PRIMARY_DOMAIN = 'https://glaum.ca'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || PRIMARY_DOMAIN

/**
 * Page metadata for SEO and browser display.
 * Sets the page title and description for search engines and social sharing.
 */
export const metadata: Metadata = {
  title: 'Glåüm Codex',
  description: 'The Tenets of Glåüm - A living, evolving set of shared values. Explore the guiding principles of the Glåüm Community, including Unconditional Positive Regard, Respect and Dignity for All, and Individual Glåüm Ascension.',
  keywords: [
    'Glåüm Codex',
    'Tenets of Glåüm',
    'Glåüm principles',
    'spiritual values',
    'community guidelines',
    'Manyhands',
  ],
  openGraph: {
    title: 'Glåüm Codex | The Tenets of Glåüm',
    description: 'The Tenets of Glåüm - A living, evolving set of shared values. Explore the guiding principles of the Glåüm Community.',
    url: `${siteUrl}/codex`,
    siteName: 'Glåüm',
    images: [
      {
        url: '/img/codex.png',
        width: 1200,
        height: 630,
        alt: 'Glåüm Codex - The Tenets of Glåüm',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glåüm Codex | The Tenets of Glåüm',
    description: 'The Tenets of Glåüm - A living, evolving set of shared values. Explore the guiding principles of the Glåüm Community.',
    images: ['/img/codex.png'],
  },
  alternates: {
    canonical: `${PRIMARY_DOMAIN}/codex`, // Always use primary domain for canonical URLs
  },
  robots: {
    index: true,
    follow: true,
  },
}

/**
 * CodexPage Component
 * 
 * Displays the Tenets of Glåüm in a dedicated page format.
 * Features:
 * - Full-page background image (codex.png) with fixed attachment
 * - Semi-transparent white overlay for content readability
 * - Individual tenet cards with subtle borders
 * - Introduction explaining the living nature of the tenets
 * 
 * The page uses a different layout from the homepage to provide
 * a focused reading experience for the tenets.
 * 
 * @returns {JSX.Element} Codex page with tenets display
 */
export default function CodexPage() {
  return (
    <>
      <div className="w-full" style={{ 
        backgroundImage: 'url(/img/codex.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}>
        <div className="pt-48 sm:pt-32 pb-20 xs:pb-32 mx-auto bg-white bg-opacity-10">
          <div className="max-w-4xl mx-4 sm:mx-auto">
            <h1 className="mb-8 text-center xs:w-10/12 lg:w-auto text-xl sm:text-5xl mx-auto main-headline font-normal leading-snug" style={{ color: '#B8860B' }}>
              The Tenets of Glåüm
            </h1>
            
            <div className="text-center mb-8">
              <span>•••</span>
            </div>
            
            <div className="mb-8 text-left">
              <p className="mb-4">
                The reader will notice immediately that the Tenets of Glåüm are not numbered. This is intentional. The Tenets of Glåüm are a living, evolving set of shared values; open to discussion, amendment, and new ideas. They are the guiding principles of the Glåüm Community—also known as The Many Hands of Glåüm. These Tenants are lovingly maintained by The Mothers of Glåüm—a matriarchal council overseeing the Many Hands.
              </p>
              <p className="mb-4">
                The Tenets are meant to inspire, not dictate. They are a shared philosophy, held together by the playful spirit of Glåüm and the goodwill of its community. If you feel a Tenet could use improvement, we encourage you to share your insights with The Mothers.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-semibold mb-4">
                  Unconditional Positive Regard
                </h3>
                <p>
                  The Many Hands of Glåüm recognize the inherent goodness in all beings. Actions that seem out of alignment with that goodness are seen as the byproduct of fear, pain, or misunderstanding. In these moments, Glåüm calls upon us to extend compassion, seek understanding, and respond constructively. It is not always easy, but through this practice, we strengthen the connective fabric of the community.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'tokyo_dreamsregular'" }}>
                  Respect and Dignity for All
                </h3>
                <p>
                  The Many Hands of Glåüm recognize that every person, no matter their background, status, or story, deserves to be treated with dignity and respect. In Glåüm, we value each individual&apos;s unique essence and seek to honor it by listening, empathizing, and offering kindness in every interaction. While we may disagree, we strive to do so with a sense of mutual respect, while understanding that everyone is on their own path and is worthy of love and consideration.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'tokyo_dreamsregular'" }}>
                  Individual Glåüm Ascension
                </h3>
                <p>
                  Every person&apos;s journey to Glåüm is as unique and mysterious as Glåüm itself. Though the inevitability of Glåüm is a certainty, each person will arrive in their own time and in their own way. Glåüm is never imposed nor rushed. A person becomes part of Glåüm the moment they feel it resonate in their heart.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'tokyo_dreamsregular'" }}>
                  Inclusivity of Members
                </h3>
                <p>
                  Glåüm is open to everyone regardless of background, beliefs, or ideology. The Many Hands of Glåüm is non-exclusive and strengthened by diversity. Members from all other communities, faiths, or ideologies are welcomed. The only requirement is a willingness to hold love in your heart, and to engage with the Tenants of Glåüm in good faith.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'tokyo_dreamsregular'" }}>
                  All feelings are welcome. All Behaviours are Not.
                </h3>
                <p>
                  In Glåüm, anger, sadness, confusion, joy, fear, and shame are all part of the music. We do not turn away from these inner movements. But not every way of moving belongs on the dance floor. If a dancer&apos;s steps begin to harm the collective rhythm, they may be kindly invited to pause, step back, and rest at the edge of the floor—until they are ready to return in attunement.
                </p>
                <p className="mt-4">
                  Boundaries, lovingly held, are what make the dance safe enough to continue.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <h4>
                ˚ ˚ ˚  Glåüm ˚ ˚ ˚ 
              </h4>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

