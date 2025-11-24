'use client'

import { useEffect } from 'react'
import Image from 'next/image'

declare global {
  interface Window {
    performanceMetrics?: {
      totalImages: number
      imagesLoaded: number
    }
    trackImageLoad?: (src: string, startTime: number) => void
  }
}

export default function Page() {
  useEffect(() => {
    // Hero card: Load image and maintain natural aspect ratio
    const heroCard = document.querySelector('.hero-card')
    const aboutSection = document.querySelector('.about-section')
    const whatIsGlaumSection = document.querySelector('.what-is-glaum-section')
    
    // Load hero image and calculate container height to maintain aspect ratio
    function loadHeroImage() {
      if (!heroCard) return
      // Use the hero-family-mobile.webp image for all screen sizes
      const imageSrc = '/images/hero-family-mobile.webp'
      const cardEl = heroCard as HTMLElement
      
      // Set background image immediately so it's visible
      cardEl.style.backgroundImage = `url('${imageSrc}')`
      cardEl.style.backgroundSize = 'contain'
      cardEl.style.backgroundPosition = 'center center'
      cardEl.style.backgroundRepeat = 'no-repeat'
      
      // Load image to get natural dimensions for aspect ratio calculation
      const img = document.createElement('img')
      img.onload = function() {
        const imgWidth = img.naturalWidth
        const imgHeight = img.naturalHeight
        const aspectRatio = imgWidth / imgHeight
        
        // Calculate container width (max 80vw on desktop, 98% on mobile)
        const maxWidth = window.innerWidth <= 768 ? window.innerWidth * 0.98 : window.innerWidth * 0.80
        const containerWidth = Math.min(maxWidth, window.innerWidth - 32) // Account for padding
        
        // Calculate height based on aspect ratio to maintain natural proportions, slightly reduced
        const calculatedHeight = (containerWidth / aspectRatio) * 0.85
        
        // Set container dimensions
        cardEl.style.width = `${containerWidth}px`
        cardEl.style.height = `${calculatedHeight}px`
      }
      img.onerror = function() {
        // Fallback: set default dimensions if image fails to load
        const maxWidth = window.innerWidth <= 768 ? window.innerWidth * 0.98 : window.innerWidth * 0.80
        cardEl.style.width = `${maxWidth}px`
        cardEl.style.height = `${maxWidth * 0.75 * 0.85}px` // Default 4:3 aspect ratio, slightly reduced
        console.warn('Failed to load hero image:', imageSrc)
      }
      img.src = imageSrc
    }
    
    // Initial load
    loadHeroImage()
    
    // Handle window resize to recalculate dimensions
    let resizeTimeout: NodeJS.Timeout
    const handleResize = function() {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(function() {
        loadHeroImage()
        // Ensure sections maintain no background images
        if (aboutSection) {
          (aboutSection as HTMLElement).style.backgroundImage = 'none'
        }
        if (whatIsGlaumSection) {
          (whatIsGlaumSection as HTMLElement).style.backgroundImage = 'none'
        }
      }, 250)
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* Hero Section - Centered Card Design */}
      <div 
        className="hero-wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 'calc(80px + 1rem)',
          paddingBottom: '1rem',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
          backgroundColor: '#D239F8',
        }}
      >
        <div 
          id="hero-card"
          className="hero-card"
          style={{
            backgroundImage: "url('/images/hero-family-mobile.webp')",
          }}
        >
        </div>
      </div>

      {/* Hack to fix overlapping on small screens */}
      {/* <div className="block sm:hidden">
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div> */}
      {/* Hack to fix overlapping on small screens */}

      {/* PHILOSOPHY */}
      {/* <div id="philosophy" className="pt-48 sm:pt-64 pb-20 xs:pb-64 mx-auto bg-white bg-opacity-10">
        <div className="max-w-3xl mx-4 sm:mx-auto">
          <h2 className="mb-8 text-center xs:w-10/12 lg:w-auto text-lg sm:text-4xl mx-auto main-headline opacity-70 font-normal leading-snug" style={{ fontFamily: "'tokyo_dreamsregular'" }}>
            Glåüm Philosophy
          </h2>
          <h4 className="mb-4 xs:w-10/12 lg:w-auto text-lg sm:text-2xl mx-auto main-headline opacity-70 font-normal leading-snug" style={{ fontFamily: "'Open Sans'" }}>
            What is Glåüm Consciousness
          </h4>

          <p className="mb-4">
            Glåüm consciousness refers to the state of awareness and perception achieved by individuals who actively embrace and embody 
            the principles of compassion, unity, and empathetic understanding as central tenets of their existence. It signifies a heightened 
            sense of interconnectedness with others, a deep recognition of the inherent value and dignity of every being, and a commitment to 
            fostering harmony and empathy within the Glåüm community.
          </p>
        </div>
      </div> */}
      {/* PHILOSOPHY */}

      {/* INTRO SECTION */}
      <div id="about" className="pt-16 sm:pt-16 pb-12 xs:pb-16 mx-auto bg-white bg-opacity-20 w-full about-section" style={{ backgroundImage: 'none', backgroundColor: '#D239F8' }}>
        <div className="max-w-3xl mx-4 sm:mx-auto text-center">
          <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2 text-center uppercase" style={{ color: '#634D0B' }}>
            THAT&apos;S RIGHT. IT&apos;S FINALLY TIME.
          </h2>
          <p className="mb-4 text-black">
            We understand this moment can bring up a lot of feelings—excitement, curiosity, even disbelief. <br />
          <br />
            This is completely normal. <br />
          <br />
            Just sit back, take a breath, and let the feeling rise. It&apos;s safe, even if it feels too good to trust. <br />
          <br />
            Trust is the first step toward attunement — and attunement feels exactly right.
          </p>
        </div>
      </div>
      {/* INTRO SECTION */}

      {/* TESTIMONIALS HEADER */}
      <div id="testimonials" className="pt-8 pb-8 mx-auto bg-white bg-opacity-10 w-full" style={{ backgroundColor: '#D239F8' }}>
        <div className="max-w-3xl mx-4 sm:mx-auto text-center">
          <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2 text-center uppercase" style={{ color: '#634D0B' }}>
            GLÅÜM TESTIMONIALS
          </h2>
          
          <div className="flex justify-center">
            <Image
              src="/images/testimonials-desktop.webp"
              alt="Glåüm testimonials"
              width={1200}
              height={800}
              className="w-full max-w-4xl h-auto"
              priority
            />
          </div>
        </div>
      </div>
      {/* TESTIMONIALS HEADER */}

      {/* WHAT IS GLAUM */}
      <div id="what-is-glaum" className="pt-8 sm:pt-8 pb-12 xs:pb-16 mx-auto bg-white bg-opacity-10 w-full what-is-glaum-section" style={{ backgroundImage: 'none', backgroundColor: '#D239F8' }}>
        <div className="max-w-3xl mx-4 sm:mx-auto text-center">
          <h2 className="font-tokyo text-5xl lg:text-7xl font-bold mb-8 text-center uppercase" style={{ color: '#634D0B' }}>
            WHAT IS GLÅÜM? <br /> °••▲••°
          </h2>

          <p className="mb-4 text-left text-black">
            Glåüm is the frequency of perfect attunement between self and all. <br />
          <br />
            It is the highest reality: the form reality takes when all its parts move in perfect coherence. <br />
          <br />
            Perfect harmony. The absence of dissonance. <br />
          <br />
            This is the frequency of Glåüm. <br />
          <br />
            When we imagine reality, we don&apos;t just define it — we create it. When belief unifies, reality conforms. <br />
          <br />
            With each new attunement, the resonance of Glåüm solidifies, drawing it closer to our lived reality. <br />
          <br />
            With enough alignment, reality will fully sustain the Glåüm frequency. <br />
          <br />
            This is world Glåümination.
          </p>
        </div>
      </div>
      {/* WHAT IS GLAUM */}

      {/* ATTUNED GLAUMISES */}
      <div className="pt-12 sm:pt-12 pb-12 xs:pb-16 mx-auto bg-white bg-opacity-10 w-full" style={{ backgroundColor: '#D239F8' }}>
        <div className="max-w-3xl mx-4 sm:mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/attuned-mobile.webp"
              alt="Attuned Glåümises"
              width={1200}
              height={800}
              className="w-full max-w-4xl h-auto"
            />
          </div>
          <h2 id="benefits" className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2 text-center" style={{ color: '#634D0B' }}>
            GLÅÜMISES
          </h2>
          <hr className="border-black border-opacity-30 my-6 max-w-2xl mx-auto" />
          <p className="mb-4 text-black">
            Reality isn&apos;t the only thing that improves when you join Glåüm — you do, too! <br />
          <br />
            Here are just a few of the benefits guaranteed to come to you on your path to Glåüm!
          </p>
          <div className="flex justify-center mt-6">
            <Image
              src="/images/glaumises-mobile.webp"
              alt="Glåümises benefits"
              width={1200}
              height={800}
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>
      </div>
      {/* ATTUNED GLAUMISES */}

      {/* IS THIS A JOKE */}
      <div id="attunement" className="pt-12 sm:pt-12 pb-12 xs:pb-16 mx-auto bg-white bg-opacity-10 w-full" style={{ backgroundColor: '#D239F8' }}>
        <div className="max-w-3xl mx-4 sm:mx-auto text-center">
          <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2 text-center" style={{ color: '#634D0B' }}>
            ... IS THIS A JOKE?
          </h2>
          <hr className="border-black border-opacity-30 my-6 max-w-2xl mx-auto" />
          <p className="mb-6 text-center text-black">
            Glåüm operates on three core values:
          </p>
          
          <section className="my-12 px-4 md:my-20 flex justify-center">
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-xl">
              <Image
                src="/images/values-frame-desktop.png"
                width={1400}
                height={900}
                className="w-full h-auto"
                priority
                alt="Values of Glåüm"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 text-center">
                <div className="space-y-0.5 xs:space-y-1 sm:space-y-2 md:space-y-3">
                  <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight">• Compassion •</p>
                  <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight">• Community •</p>
                  <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black leading-tight">• Playfulness •</p>
                </div>
              </div>
            </div>
          </section>

          <p className="mb-4 text-center text-black max-w-3xl mx-auto px-4">
            Of these values, compassion is foundational. We strive to promote connection through community and joyful play — but this is only possible when we prioritize the comfort and wellbeing of everyone in our community.
          </p>

          <p className="mb-4 text-left text-black">
            Undoubtedly, jokes are funnier when they&apos;re subtle — but they&apos;re only funny when everyone is in on the joke.
          </p>
          
          <p className="mb-4 text-center text-black max-w-3xl mx-auto px-4">
            So yes, Glåüm is a joke... <br />
          <br />
            But the punchline is it&apos;s real.
          </p>
          
          <p className="mb-4 text-left text-black">
            While the community of Glåüm uses satire, we do so with intention. <br />
          <br />
            Our goal isn&apos;t to mock belief, but to make it accessible again — especially for those who&apos;ve felt shut out by dogma. <br />
          <br />
            By approaching the sacred through absurdity, we bypass defenses because... it&apos;s all a joke — right? And in that lies the magic, and the paradox. <br />
          <br />
            By consciously exaggerating the language of dogma, we transform it into play. <br />
          <br />
            Through this play, barriers dissolve, allowing curiosity, safety, and sincerity to re-enter the conversation. <br />
          <br />
            We recognize that satire is a powerful tool — capable of both diminishing and amplifying. <br />
          <br />
            Our intention is always to diminish exclusion, and to amplify our shared capacity to connect through ceremony, curiosity, care, and playfulness. <br />
          <br />
            This is the intention, and when it doesn&apos;t land? We drop it. We remain sensitive to the fact that cult trauma exists, and that not everyone will find this kind of humour disarming or inviting. <br />
          <br />
            For those who find the bit uncomfortable, we let it go. <br />
          <br />
            Our use of satire is always secondary to our priority: to create a space where people feel safe, heard, and respected.
          </p>
        </div>
      </div>
      {/* IS THIS A JOKE */}

      {/* A NOTE ON CULTS */}
      <div className="pt-12 sm:pt-12 pb-12 xs:pb-16 mx-auto bg-white bg-opacity-10 w-full" style={{ backgroundColor: '#D239F8' }}>
        <div className="max-w-3xl mx-4 sm:mx-auto">
          <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2 text-center" style={{ color: '#634D0B' }}>
            A NOTE ON CULTS
          </h2>
          <hr className="border-black border-opacity-30 my-6 max-w-2xl mx-auto" />
          <p className="mb-4 text-left text-black">
            &quot;Cult&quot; is a fascinating word — heavily stigmatized, yet loosely defined. <br />
          <br />
            The term often conjures images of abuse of power, brainwashing, authoritarian control. <br />
          <br />
            But none of that is inherent to the definition. <br />
          <br />
            Cults are not, by nature, bad. <br />
          <br />
            There are harmful cults, yes — but the same could be said of most institutions. <br />
          <br />
            Cults are powerful because they meet deep human needs: belonging, meaning, transformation, reverence, structure, play. <br />
          <br />
            The problem isn&apos;t that they exist — it&apos;s that they so often collapse under unchecked power and unexamined shadow. <br />
          <br />
            The word itself comes from the Latin cultus — &quot;to cultivate.&quot; <br />
          <br />
            It&apos;s the root of culture. <br />
          <br />
            Cults are how humans gather around what they hold sacred. <br />
          <br />
            The problem isn&apos;t the gathering. <br />
          <br />
            It&apos;s what happens when there are no strong guiding principles for how we treat one another within it. <br />
          <br />
            Glåüm takes seriously the patterns of corruption seen in even the most well-intentioned communities, and strives to promote the kind of harmony that can only emerge through the co-creation of all its members. <br />
          <br />
            The culture of Glåüm is intentional, compassionate, and inclusive — shaped collectively by those who participate in it. <br />
          <br />
            Together, we define the tenets and policies that guide our community.
          </p>
        </div>
      </div>
      {/* A NOTE ON CULTS */}

      {/* TENETS OF GLAUM */}
      <div id="tenets" className="pt-48 sm:pt-48 pb-12 xs:pb-16 mx-auto bg-white bg-opacity-10 w-full" style={{ backgroundColor: '#D239F8' }}>
        <div className="max-w-4xl mx-4 sm:mx-auto">
          <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2 text-center" style={{ color: '#634D0B' }}>
            TENETS OF GLÅÜM
          </h2>
          <hr className="border-black border-opacity-30 my-6 max-w-2xl mx-auto" />
          <p className="mb-6 text-left text-black">
            The Tenets of Glåüm are a living, evolving set of shared values; open to discussion, amendment, and new ideas. <br />
          <br />
            They are the guiding principles of the Glåüm Community—also known as The Many Hands of Glåüm. They are a shared philosophy, held together by the playful spirit of Glåüm and the goodwill of its community. If you feel a Tenet could use improvement, we encourage you to share your insights.
          </p>

          <div className="space-y-8">
            {/* Unconditional Positive Regard */}
            <div className="my-16 px-4 md:my-32">
              <div className="relative mx-auto max-w-4xl tenet-frame-wrapper">
                <Image
                  src="/images/tenent-frame-mobile.png"
                  width={1000}
                  height={750}
                  className="w-full h-auto"
                  priority
                  alt="Tenet"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 text-center py-4 sm:py-6 md:py-8">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase text-black mb-1 md:mb-2 tracking-wide leading-tight max-w-[75%] break-words">
                    UNCONDITIONAL<br className="sm:hidden"/> POSITIVE REGARD
                  </h3>
                  <div className="text-lg sm:text-xl md:text-2xl text-amber-700 mb-1 md:mb-2">•••</div>
                  <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-black leading-normal max-w-[75%] sm:max-w-md md:max-w-xl lg:max-w-2xl px-2 sm:px-4 break-words">
                    The Many Hands of Glåüm recognize the inherent goodness in all beings. Actions that seem out of alignment with that goodness are seen as the byproduct of fear, pain, or misunderstanding. In these moments, Glåüm calls upon us to extend compassion, seek understanding, and respond constructively. It is not always easy, but through this practice, we strengthen the connective fabric of the community.
                  </p>
                </div>
              </div>
            </div>

            {/* Respect and Dignity */}
            <div className="my-16 px-4 md:my-32">
              <div className="relative mx-auto max-w-4xl tenet-frame-wrapper">
                <Image
                  src="/images/tenent-frame-mobile.png"
                  width={1000}
                  height={750}
                  className="w-full h-auto"
                  priority
                  alt="Tenet"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 text-center py-4 sm:py-6 md:py-8">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase text-black mb-1 md:mb-2 tracking-wide leading-tight max-w-[75%] break-words">
                    RESPECT AND<br className="sm:hidden"/> DIGNITY FOR ALL
                  </h3>
                  <div className="text-lg sm:text-xl md:text-2xl text-amber-700 mb-1 md:mb-2">•••</div>
                  <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-black leading-normal max-w-[75%] sm:max-w-md md:max-w-xl lg:max-w-2xl px-2 sm:px-4 break-words">
                    The Many Hands of Glåüm recognize that every person, no matter their background, status, or story, deserves to be treated with dignity and respect. In Glåüm, we value each individual&apos;s unique essence and seek to honor it by listening, empathizing, and offering kindness in every interaction. While we may disagree, we strive to do so with a sense of mutual respect, while understanding that everyone is on their own path and is worthy of love and consideration.
                  </p>
                </div>
              </div>
            </div>

            {/* Individual Glåüm Ascension */}
            <div className="my-16 px-4 md:my-32">
              <div className="relative mx-auto max-w-4xl tenet-frame-wrapper">
                <Image
                  src="/images/tenent-frame-mobile.png"
                  width={1000}
                  height={750}
                  className="w-full h-auto"
                  priority
                  alt="Tenet"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 text-center py-4 sm:py-6 md:py-8">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase text-black mb-1 md:mb-2 tracking-wide leading-tight max-w-[75%] break-words">
                    INDIVIDUAL<br className="sm:hidden"/> GLÅÜM ASCENSION
                  </h3>
                  <div className="text-lg sm:text-xl md:text-2xl text-amber-700 mb-1 md:mb-2">•••</div>
                  <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-black leading-normal max-w-[75%] sm:max-w-md md:max-w-xl lg:max-w-2xl px-2 sm:px-4 break-words">
                    Every person&apos;s journey to Glåüm is as unique and mysterious as Glåüm itself. Though the inevitability of Glåüm is a certainty, each person will arrive in their own time and in their own way. Glåüm is never imposed nor rushed. A person becomes part of Glåüm the moment they feel it resonate in their heart.
                  </p>
                </div>
              </div>
            </div>

            {/* Inclusivity of Members */}
            <div className="my-16 px-4 md:my-32">
              <div className="relative mx-auto max-w-4xl tenet-frame-wrapper">
                <Image
                  src="/images/tenent-frame-mobile.png"
                  width={1000}
                  height={750}
                  className="w-full h-auto"
                  priority
                  alt="Tenet"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 text-center py-4 sm:py-6 md:py-8">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase text-black mb-1 md:mb-2 tracking-wide leading-tight max-w-[75%] break-words">
                    INCLUSIVITY OF<br className="sm:hidden"/> MEMBERS
                  </h3>
                  <div className="text-lg sm:text-xl md:text-2xl text-amber-700 mb-1 md:mb-2">•••</div>
                  <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-black leading-normal max-w-[75%] sm:max-w-md md:max-w-xl lg:max-w-2xl px-2 sm:px-4 break-words">
                    Glåüm is open to everyone regardless of background, beliefs, or ideology. The Many Hands of Glåüm is non-exclusive and strengthened by diversity. Members from all other communities, faiths, or ideologies are welcomed. The only requirement is a willingness to hold love in your heart, and to engage with the Tenants of Glåüm in good faith.
                  </p>
                </div>
              </div>
            </div>

            {/* Satire with Intention */}
            <div className="my-16 px-4 md:my-32">
              <div className="relative mx-auto max-w-4xl tenet-frame-long">
                <Image
                  src="/images/tenent-frame-mobile.png"
                  width={1000}
                  height={750}
                  className="w-full h-auto"
                  priority
                  alt="Tenet"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 text-center py-4 sm:py-6 md:py-8">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase text-black mb-1 md:mb-2 tracking-wide leading-tight max-w-[75%] break-words">
                    SATIRE WITH<br className="sm:hidden"/> INTENTION
                  </h3>
                  <div className="text-lg sm:text-xl md:text-2xl text-amber-700 mb-1 md:mb-2">•••</div>
                  <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-black leading-normal max-w-[75%] sm:max-w-md md:max-w-xl lg:max-w-2xl px-2 sm:px-4 break-words">
                    The ManyHands of Glåüm recognize satire as a sacred instrument—capable of softening or sharpening, diminishing or amplifying. Because it shifts the palette of meaning, we approach it with clear intention. When we playfully mirror rituals or aesthetics—such as baptism—we do so not to mock the sacred, but to release the dogma that may bind it. In this release, blessing becomes possible again. <br />
                  <br />
                    When we exaggerate the forms of manipulation or control, we do so not to trivialize harm, but to highlight its absurdity and invite laughter as a shield. That wink—&quot;yes, we know how this looks&quot;—becomes an opening through which sincerity may flow. <br />
                  <br />
                    We remember always: satire bypasses defenses. This makes it powerful, but also tender. The cargo we carry matters. We stay attuned not only to what we are creating, but also to how it is received. We ask: who is in the room? What wounds might this touch? What healing might it allow? Thus, we hold satire as both funny and serious. It is play, yes—but play with responsibility. And that balance, that doubleness, is the Glåüm of it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TENETS OF GLAUM */}

      {/* POLICIES OF THE MANYHANDS */}
      <div id="policies" className="pt-12 sm:pt-12 pb-12 xs:pb-16 mx-auto bg-white bg-opacity-10 w-full" style={{ backgroundColor: '#D239F8' }}>
        <div className="max-w-4xl mx-4 sm:mx-auto">
          <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2 text-center uppercase" style={{ color: '#634D0B' }}>
            POLICIES OF THE MANYHANDS
          </h2>
          <hr className="border-black border-opacity-30 my-6 max-w-2xl mx-auto" />
          <p className="mb-6 text-left text-black">
            We the ManyHands strive to uphold these policies for community guidelines. Our policies are decided upon together, and always up for review, amendment, and addition. We strive to uphold personal, communal, and environmental cohesion and regard within our reasonable limits. <br />
          <br />
            These policies are communally decided by the ManyHands of Glåüm. At any time may a principle be brought up for discussion of review.
          </p>

          <div className="space-y-6">
            {/* All feelings are Welcome */}
            <div className="my-16 px-4 md:my-32">
              <div className="relative mx-auto max-w-5xl policy-frame-wrapper">
                <Image
                  src="/images/policies-frame.webp"
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  priority
                  alt="Policy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 text-center py-4 sm:py-6 md:py-8">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase text-black mb-1 md:mb-2 leading-tight max-w-[75%] break-words">
                    ALL FEELINGS ARE WELCOME.<br className="sm:hidden"/> ALL BEHAVIOURS ARE NOT
                  </h3>
                  <div className="text-lg sm:text-xl md:text-2xl text-amber-700 mb-1 md:mb-2">•••</div>
                  <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-black leading-normal max-w-[75%] sm:max-w-md md:max-w-xl lg:max-w-3xl px-2 sm:px-4 break-words">
                    In Glåüm, anger, sadness, confusion, joy, fear, and shame are all part of the music. We do not turn away from these inner movements. <br />
                  <br />
                    But not every way of moving belongs on the dance floor. If a dancer&apos;s steps begin to harm the collective rhythm, they may be kindly invited to pause, step back, and rest at the edge of the floor—until they are ready to return in attunement. Boundaries, lovingly held, are what make the dance safe enough to continue.
                  </p>
                </div>
              </div>
            </div>

            {/* The Use of AI */}
            <div className="my-16 px-4 md:my-32">
              <div className="relative mx-auto max-w-5xl policy-frame-long policy-frame-wrapper">
                <Image
                  src="/images/policies-frame.webp"
                  width={1400}
                  height={900}
                  className="w-full h-auto"
                  priority
                  alt="Policy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 text-center py-4 sm:py-6 md:py-8">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase text-black mb-1 md:mb-2 leading-tight max-w-[75%] break-words">
                    THE USE OF AI:<br className="sm:hidden"/> AMPLIFICATION, NOT REPLACEMENT
                  </h3>
                  <div className="text-lg sm:text-xl md:text-2xl text-amber-700 mb-1 md:mb-2">•••</div>
                  <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-black leading-normal max-w-[75%] sm:max-w-md md:max-w-xl lg:max-w-3xl px-2 sm:px-4 break-words">
                    The ManyHands of Glåüm recognize AI as a potent instrument for collective creativity. When used with care, it expands participation—offering voices, images, and visions from members who may not have had access to these channels before. In this way, AI can accelerate brainstorming, amplify inspiration, and bring Glåümular projects to completion with greater ease. <br />
                  <br />
                    Yet we hold a clear boundary: AI is here to enhance, not replace. When used as a crutch, it can dull the spark it was meant to ignite, robbing the artist of the generative joy that comes from birthing an idea. AI must never silence the human creative pulse—it is only invited to harmonize with it. <br />
                  <br />
                    We also acknowledge the ethical tensions: AI is trained upon the work of others, often without consent or attribution. We remain mindful of this lineage of appropriation, seeking whenever possible to honour the sources, to credit the ancestors of art, and to avoid passing off mimicry as originality. <br />
                  <br />
                    Finally, we remain aware of the environmental and economic costs. Like driving a gas-powered vehicle, AI carries an imperfection: a dissonance in the field. We hold this dissonance honestly, weighing its costs against its gifts. Our commitment is to use AI sparingly, responsibly, and only in service of the greater attunement of Glåüm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* POLICIES OF THE MANYHANDS */}
      
      <div className="text-center">
        {/* <ul className="tm-bg-controls-wrapper">
          <li className="tm-bg-control active" data-id="0"></li>
          <li className="tm-bg-control" data-id="1"></li>
          <li className="tm-bg-control" data-id="2"></li>
        </ul> */}
      </div>

    </>
  )
}
