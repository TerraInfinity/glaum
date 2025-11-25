// =============================================
// Participate Page Component
// =============================================
// 
// Provides information and links for joining the Glåüm community.
// Features two main entry points:
// 1. Glåüm WhatsApp Community - Main community hub
// 2. Children of Venus - Creative projects and funding
//
// Uses a full-page background image with semi-transparent content overlay.

import type { Metadata } from 'next'

/**
 * Page metadata for SEO and browser display.
 */
export const metadata: Metadata = {
  title: 'Glåüm Participate',
  description: 'Choose Your Portal to Glåüm - Join the Glåüm community and Children of Venus.',
}

/**
 * ParticipatePage Component
 * 
 * Provides pathways for joining the Glåüm community.
 * 
 * Sections:
 * - Glåüm WhatsApp Community: Main community hub with link to join
 * - Children of Venus: Creative projects ministry with join link
 * - Project Proposal Form: Link to submit creative project ideas
 * 
 * Each section includes:
 * - Description of the community/group
 * - Call-to-action button with external link
 * - Clear explanation of purpose and benefits
 * 
 * @returns {JSX.Element} Participate page with community join links
 */
export default function ParticipatePage() {
  return (
    <>
      <div className="mx-auto px-4" style={{ maxWidth: '1200px',
        backgroundImage: 'url(/img/participate.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}>
        <div className="pt-48 sm:pt-32 pb-20 xs:pb-32 mx-auto bg-white bg-opacity-10">
          <div className="max-w-4xl mx-4 sm:mx-auto text-center">
            <h1 className="mb-8 text-center xs:w-10/12 lg:w-auto text-xl sm:text-5xl mx-auto main-headline font-normal leading-snug" style={{ fontFamily: "'tokyo_dreamsregular'", color: '#654321' }}>
              Choose Your Portal to Glåüm
            </h1>
            
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'tokyo_dreamsregular'", color: '#654321' }}>
                Glåüm (WhatsApp Community)
              </h2>
              <p className="mb-4">
                The beating heart of our Manyhands.
              </p>
              <p className="mb-4">
                This is Glåüm&apos;s central hub — a single entry point into a lively constellation of groups, each with its own rhythm and focus. From event planning and creative collaboration to playful side-threads and mysterious transmissions, the Glåüm community is where the dance begins.
              </p>
              <p className="mb-4">
                Once inside, you&apos;ll find pathways to subgroups like Children of Venus and other special circles, each attuned to a unique facet of the whole. You can wander freely, join as many as call to you, or simply observe the flow until the right moment to step in.
              </p>
              <div className="text-center mt-6">
                <a 
                  href="https://chat.whatsapp.com/BcJCIyt1ARA83pyDFxlU9E?mode=ac_t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block square-btn square-btn--md bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-lg border border-white border-opacity-30 transition duration-200"
                >
                  Join Glåüm Community
                </a>
              </div>
            </div>

            <br />
            <br />
            <br />
            
            <h2 className="mb-8 text-center xs:w-10/12 lg:w-auto text-xl sm:text-5xl mx-auto main-headline font-normal leading-snug" style={{ fontFamily: "'tokyo_dreamsregular'", color: '#654321' }}>
              The Children of Venus
            </h2>
            
            <div className="mb-8 text-center">
              <p className="mb-6">
                The Children of Venus exists to support the unfolding of Glåümular visions.
              </p>
              <p className="mb-6">
                We believe that creative energy is sacred—and that when an idea arrives, it is a signal from Glåüm for personal and collective attunement.
              </p>
              <p className="mb-6">
                Our mission is to nurture these signals: to offer structure, support, and funding so that inspiration becomes embodiment.
              </p>
              <p className="mb-6">
                This ministry welcomes proposals, dreams, and Glåümular downloads. <br />
                If it&apos;s aligned, we help it grow.
              </p>
              <div className="text-center mt-6">
                <a 
                  href="https://chat.whatsapp.com/LNBZUbXakXYFfxEFbREbVX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block square-btn square-btn--md bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-lg border border-white border-opacity-30 transition duration-200"
                >
                  Join our WhatsApp Group
                </a>
              </div>
            </div>

            <br /> 
            <br />  
            
            <div className="mb-8 text-center">
              <p className="mb-6">
                Have an idea, project, or strange download from Glåüm itself? We want to help it grow! Use the link below to submit your proposal.
              </p>
              <div className="text-center mt-6">
                <a 
                  href="https://forms.gle/z8GpeXWiDGLV7ihJ8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block square-btn square-btn--md bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-lg border border-white border-opacity-30 transition duration-200"
                >
                  Plant your Seed
                </a>
              </div>
            </div>
          
            <div className="text-center mt-12">
              <h4 style={{ fontFamily: "'tokyo_dreamsregular'" }}>
                ˚ ˚ ˚  Glåüm ˚ ˚ ˚ 
              </h4>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

