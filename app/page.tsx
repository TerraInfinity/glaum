'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Landing page presenting the immersive Glåüm hero experience with parallax
 * video, lazy-loaded imagery, and animated calls to action.
 */

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [showFallback, setShowFallback] = useState(true) // Start with fallback, then try video
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  // Parallax effect - video moves slower than scroll
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  useEffect(() => {
    // Lazy load video with IntersectionObserver
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !videoLoaded) {
            // Try to load video with fallback
            const video = videoRef.current
            
            // Try MP4 video (placeholder path - video file should be added to public/video/)
            const source = document.createElement('source')
            source.src = '/video/hero.mp4'
            source.type = 'video/mp4'
            video.appendChild(source)
            
            // Alternative: try WebM if available
            // const webmSource = document.createElement('source')
            // webmSource.src = '/video/hero.webm'
            // webmSource.type = 'video/webm'
            // video.appendChild(webmSource)
            
            // Try loading video
            video.load()
            
            // Set timeout for fallback (1s max)
            const fallbackTimeout = setTimeout(() => {
              if (!videoLoaded) {
                setShowFallback(true)
              }
            }, 1000)
            
            video.onloadeddata = () => {
              clearTimeout(fallbackTimeout)
              setVideoLoaded(true)
              setShowFallback(false)
              video.play().catch(() => {
                // Autoplay failed, show fallback
                setShowFallback(true)
              })
            }
            
            video.onerror = () => {
              clearTimeout(fallbackTimeout)
              setShowFallback(true)
            }
            
            videoObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px' }
    )
    
    if (videoRef.current) {
      videoObserver.observe(videoRef.current)
    }

    // Responsive image loading with lazy loading for other sections
    const aboutSection = document.querySelector('.about-section')
    const whatIsGlaumSection = document.querySelector('.what-is-glaum-section')
    
    // Function to load appropriate image based on screen size
    function loadResponsiveImage(element, mobileSrc, desktopSrc) {
      if (!element) return
      const isMobile = window.innerWidth <= 768
      const imageSrc = isMobile ? mobileSrc : desktopSrc
      
      // Add loading state
      element.classList.add('loading')
      
      // Create a new image to preload
      const img = new Image()
      img.onload = function() {
        element.style.backgroundImage = `url('${imageSrc}')`
        element.classList.remove('loading')
      }
      img.onerror = function() {
        element.classList.remove('loading')
        console.warn('Failed to load image:', imageSrc)
      }
      img.src = imageSrc
    }
    
    // Lazy load about section images when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target
          if (section.classList && (section.classList.contains('about-section') || section.classList.contains('what-is-glaum-section'))) {
            loadResponsiveImage(
              section,
              '/img/optimized/about-mobile.jpg',
              '/img/optimized/about.jpg'
            )
            observer.unobserve(section) // Stop observing once loaded
          }
        }
      })
    }, {
      rootMargin: '50px' // Start loading 50px before the section comes into view
    })
    
    // Observe sections for lazy loading
    if (aboutSection) observer.observe(aboutSection)
    if (whatIsGlaumSection) observer.observe(whatIsGlaumSection)
    
    // Handle window resize for responsive images
    let resizeTimeout
    const resizeHandler = function() {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(function() {
        if (aboutSection && (aboutSection as HTMLElement).style.backgroundImage) {
          loadResponsiveImage(
            aboutSection,
            '/img/optimized/about-mobile.jpg',
            '/img/optimized/about.jpg'
          )
        }
        if (whatIsGlaumSection && (whatIsGlaumSection as HTMLElement).style.backgroundImage) {
          loadResponsiveImage(
            whatIsGlaumSection,
            '/img/optimized/about-mobile.jpg',
            '/img/optimized/about.jpg'
          )
        }
      }, 250)
    }
    
    window.addEventListener('resize', resizeHandler)
    
    return () => {
      window.removeEventListener('resize', resizeHandler)
      videoObserver.disconnect()
      observer.disconnect()
    }
  }, [videoLoaded])

  return (
    <div className="w-full">
      {/* Modern Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen md:h-[120vh] w-full overflow-hidden hero-section"
      >
        {/* Video Background with Fallback */}
        <div className="absolute inset-0 w-full h-full">
          {/* Fallback image - shown initially and if video fails */}
          <motion.img
            src="/img/optimized/cover.jpg"
            srcSet="/img/optimized/cover-mobile.jpg 768w, /img/optimized/cover.jpg 1920w"
            alt="Glåüm"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ y: videoY, opacity: showFallback ? 1 : 0 }}
            loading="eager"
          />
          {/* Video - always rendered for IntersectionObserver, hidden until loaded */}
          <motion.video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ y: videoY, opacity: !showFallback && videoLoaded ? 1 : 0 }}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            data-lazy
          />
        </div>

        {/* Gradient Overlay (purple1 → purple4) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple1 via-purple2 via-purple3 to-purple4 opacity-60"
          style={{ opacity: overlayOpacity }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.h1
            className="font-TokyoDreams text-5xl md:text-[5rem] text-white mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Glåüm
          </motion.h1>
          
          <motion.a
            href="#about"
            className="square-btn square-btn--md bg-pink-500 hover:bg-pink-600 flex items-center justify-center mx-auto min-w-[200px] w-auto px-8 text-white transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tell Me More...
          </motion.a>
        </div>

        {/* Touch-swipe indicator for mobile */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </section>

      <div id="about" className="pt-16 sm:pt-16 pb-20 xs:pb-32 mx-auto bg-white bg-opacity-20 w-full about-section" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8 text-center xs:w-10/12 lg:w-auto text-lg sm:text-4xl mx-auto main-headline opacity-70 font-normal leading-snug" style={{ fontFamily: 'tokyo_dreamsregular' }}>
            About
          </h2>
          <p className="mb-4">
            Congratulations! You&apos;ve found Glåüm. <br />
            <br />
            That&apos;s right—the time has arrived for you to hear the word of Glåüm. <br />
            You were always worthy; we were just waiting for your glåümule count to stabilize. <br />
            <br />
            Glåüm is a cult of members called the Manyhands. <br />
            We gather, not to control you, but to gently tap your inner compass until it points, unmistakably, to Glåüm. <br />
            <br />
            Glåüm is the fine attunement of self and all. It is a dance. It is a song. When we are in disharmony, that is dråb. But when we play in harmony—the grandest and most perfect of all harmonies—that is Glåüm. <br />
            <br />
            Each of us has our own rhythm and relationship to Glåüm. We are many tempos and melodies, weaving together into the sprawling, syncopated music of the whole. But all of us are glåümules—tiny vibrating notes in Glåüm&apos;s larger song. <br />
            <br />
            When we are attuned, we move together in a great, synchronized wave of meaning. <br />
            Each of us is part of the whole. <br />
            And that whole is Glåüm. <br />
            Glåüm is inevitable.
          </p>

          <br />
          <br />

          <div className="mt-8 mb-6 p-6 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-20">
            <blockquote className="text-lg italic mb-4">
              &quot;I reconnected with my dad, fulfilled my dream of seeing Cirque du Soleil, and got 9 promotions at work!&quot;
            </blockquote>
            <div className="text-sm opacity-70">
              - anonymous (but real) Gläümer<br />
            </div>
          </div>
          
          <div className="mt-6 mb-6 p-6 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-20">
            <blockquote className="text-lg italic mb-4">
              &quot;Since joining Gläüm, l&apos;ve lost 10 lbs, my skin glows, my dog is better behaved, I no longer lose my keys, and I drink half as much caffeine with 2x the energy!&quot;
            </blockquote>
            <div className="text-sm opacity-70">
              - Vera, a very real person and satisfied Glaümer<br />
            </div>
          </div>
        </div>
      </div>

      <div id="what-is-glaum" className="pt-48 sm:pt-32 pb-20 xs:pb-32 mx-auto bg-white bg-opacity-10 w-full what-is-glaum-section" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll' }}>
        <div className="max-w-3xl mx-4 sm:mx-auto text-center">
          <h2 className="mb-8 text-center xs:w-10/12 lg:w-auto text-lg sm:text-4xl mx-auto main-headline opacity-70 font-normal leading-snug" style={{ fontFamily: 'tokyo_dreamsregular' }}>
            What is Glåüm?
          </h2>
          <p className="mb-4">
            Glåüm is a cult. <br />
            But not the kind you were warned about. <br />
            <br />
            We call ourselves Creatures Undergoing Loving Transformation—sometimes Transcendence, depending on the weather. Our compass points to three things: compassion, connection, and playfulness—in that order. <br />
            <br />
            Compassion is the root. Without it, the rest collapses. <br />
            Connection is the trunk, holding us upright together. <br />
            Playfulness is the fruit—bright, unpredictable, and sometimes suspiciously purple. <br />
            <br />
            ⸻ <br />
            <br />
            Glåüm exists to bring people together through improbable projects, loving gatherings, and shared acts of creation. We offer space for art to grow, for ideas to be tested, for healing to take shape in strange and tender ways. <br />
            <br />
            Yes, there are rituals. Yes, there are symbols whose meanings are not immediately clear. This is part of the attunement process. <br />
            <br />
            Those who join the Manyhands often report side effects: <br />
            • spontaneous teamwork with strangers <br />
            • sudden clarity of purpose <br />
            • an irresistible urge to adorn your hands with smaller hands. <br />
            <br />
            ⸻ <br />
            <br />
            We are guided by strong principles, but not by rigid rules. <br />
            We are playful, but not careless. <br />
            We are serious about love.
          </p>
        </div>
      </div>

    </div>
  )
}

