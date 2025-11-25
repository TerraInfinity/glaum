// =============================================
// Header Component
// =============================================
// Global navigation header that appears on all pages.
// Features responsive design with mobile hamburger menu and desktop navigation.
// Includes scroll detection for potential future styling changes.

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Header Component
 * 
 * Provides site-wide navigation with:
 * - Logo linking to homepage
 * - Desktop navigation menu with smooth scroll anchors
 * - Mobile hamburger menu with overlay
 * - Scroll detection (currently tracked but not used for styling)
 * - Responsive breakpoints for mobile/desktop layouts
 * 
 * Navigation links use hash anchors (#testimonials, #attunement, etc.) for smooth scrolling
 * to sections on the homepage, or full paths when on other pages.
 * 
 * @returns {JSX.Element} Fixed header with navigation
 */
export default function Header() {
  // ========== State Management ==========
  const [isScrolled, setIsScrolled] = useState(false) // Tracks if user has scrolled (for potential future styling)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // Controls mobile menu visibility
  const [isMobile, setIsMobile] = useState(false) // Tracks if viewport is mobile size
  const pathname = usePathname() // Current route path for conditional link behavior

  /**
   * Effect hook for scroll detection and responsive behavior.
   * 
   * Monitors:
   * - Scroll position (for potential header styling changes on scroll)
   * - Window resize (to detect mobile/desktop breakpoint)
   * - Auto-closes mobile menu when switching to desktop viewport
   * 
   * Uses passive event listeners for scroll to improve scroll performance.
   */
  useEffect(() => {
    /**
     * Handles scroll events to detect when user has scrolled past threshold.
     * Currently tracked but not used for styling - available for future enhancements
     * like header background opacity changes or shadow effects.
     */
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // 50px threshold for scroll detection
    }

    /**
     * Handles window resize to update mobile state and close mobile menu on desktop.
     * Breakpoint at 768px matches Tailwind's 'md' breakpoint for consistency.
     */
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // 768px = Tailwind 'md' breakpoint
      // Auto-close mobile menu when switching to desktop to prevent layout issues
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    // Initialize state on mount
    handleResize()
    handleScroll() // Check initial scroll position
    
    // Add event listeners
    // passive: true improves scroll performance by telling browser we won't call preventDefault
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    
    // Cleanup: remove event listeners on unmount to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  /**
   * Toggles mobile menu open/closed state.
   * Called when hamburger button is clicked.
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  /**
   * Closes mobile menu.
   * Called when menu items are clicked or overlay is clicked.
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* ========== Fixed Header Container ========== */}
      {/* 
        Fixed header with backdrop blur for modern glassmorphism effect.
        High z-index (9999) ensures it stays above all content.
        Semi-transparent purple background matches brand colors.
      */}
      <div
        className="w-full z-[9999] mx-auto l-0 r-0 fixed top-0 left-0 right-0 header transition-all duration-300 backdrop-blur-md"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999, // High z-index to stay above all content
          backgroundColor: 'rgba(219, 97, 249, 0.5)', // Semi-transparent purple (DB61F9 with 50% opacity)
          margin: 0,
          marginTop: 0,
          marginBottom: 0,
          padding: 0,
          paddingTop: 0,
          paddingBottom: 0,
          border: 'none',
        }}
      >
        {/* ========== Logo ========== */}
        {/* 
          Logo link to homepage using Tokyo Dreams font for brand consistency.
          Positioned absolutely on the left side, vertically centered.
          Closes mobile menu when clicked for better UX.
        */}
        <Link
          className="font-tokyo text-3xl font-normal pr-4 absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10"
          href="/"
          style={{
            color: '#FFFACD', // Lemon chiffon color for contrast against purple background
          }}
          onClick={closeMobileMenu}
        >
          GLÅÜM
        </Link>
        
        {/* ========== Navigation Container ========== */}
        <div className="flex flex-col sm:flex-row justify-end items-center mx-auto max-w-screen-lg px-4 sm:px-8 py-4 sm:py-6">
          {/* ========== Desktop Navigation ========== */}
          {/* 
            Desktop navigation menu - hidden on mobile (md:flex).
            Links use hash anchors for smooth scrolling on homepage,
            or full paths when on other pages (pathname check).
            Each link has a hover underline animation effect.
          */}
          <nav className="hidden md:flex flex-row space-x-6">
            {/* Navigation Link Pattern:
                - Conditional href: hash anchor on homepage, full path on other pages
                - Hover underline animation using absolute positioned span
                - Group class enables child hover effects
                - Whitespace-nowrap prevents text wrapping */}
            <Link
              className="text-center text-lg sm:text-xl lg:text-2xl leading-tight opacity-90 hover:opacity-100 transition relative group whitespace-nowrap"
              href={pathname === '/' ? '#testimonials' : '/#testimonials'}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.15em', // Wide letter spacing for readability
                color: 'white',
              }}
            >
              Testimonials
              {/* Animated underline that expands on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              className="text-center text-lg sm:text-xl lg:text-2xl leading-tight opacity-90 hover:opacity-100 transition relative group whitespace-nowrap"
              href={pathname === '/' ? '#attunement' : '/#attunement'}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'white',
              }}
            >
              Attunement
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              className="text-center text-lg sm:text-xl lg:text-2xl leading-tight opacity-90 hover:opacity-100 transition relative group whitespace-nowrap"
              href={pathname === '/' ? '#benefits' : '/#benefits'}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'white',
              }}
            >
              Benefits
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              className="text-center text-lg sm:text-xl lg:text-2xl leading-tight opacity-90 hover:opacity-100 transition relative group whitespace-nowrap"
              href={pathname === '/' ? '#tenets' : '/#tenets'}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'white',
              }}
            >
              Tenets
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              className="text-center text-lg sm:text-xl lg:text-2xl leading-tight opacity-90 hover:opacity-100 transition relative group whitespace-nowrap"
              href={pathname === '/' ? '#policies' : '/#policies'}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'white',
              }}
            >
              Policies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* ========== Mobile Hamburger Button ========== */}
          {/* 
            Hamburger menu button - only visible on mobile (md:hidden).
            Transforms into X icon when menu is open.
            Uses CSS transforms for smooth animation.
            Accessible with proper ARIA labels.
          */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 text-white focus:outline-none z-10"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Top bar - rotates 45deg and moves down when open */}
            <span
              className={`block w-6 h-[3px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            {/* Middle bar - fades out when open */}
            <span
              className={`block w-6 h-[3px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            {/* Bottom bar - rotates -45deg and moves up when open */}
            <span
              className={`block w-6 h-[3px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* ========== Mobile Menu Overlay ========== */}
      {/* 
        Mobile menu overlay that slides in from top when hamburger is clicked.
        Uses backdrop blur for modern glassmorphism effect.
        Clicking overlay or menu items closes the menu.
        Positioned below header (top: 80px) to account for header height.
      */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 z-[9998] transition-all duration-300 md:hidden backdrop-blur-md ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
          top: '80px',
          width: '85%',
        }}
      >
        <nav className="flex flex-col items-center justify-start pb-6 space-y-4">
          <Link
            className="text-lg text-black opacity-90 hover:opacity-100 uppercase tracking-widest transition-all duration-200 hover:scale-105 hover:translate-x-1"
            href={pathname === '/' ? '#testimonials' : '/#testimonials'}
            onClick={closeMobileMenu}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              letterSpacing: '0.15em',
            }}
          >
            Testimonials
          </Link>
          <Link
            className="text-lg text-black opacity-90 hover:opacity-100 uppercase tracking-widest transition-all duration-200 hover:scale-105 hover:translate-x-1"
            href={pathname === '/' ? '#attunement' : '/#attunement'}
            onClick={closeMobileMenu}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              letterSpacing: '0.15em',
            }}
          >
            Attunement
          </Link>
          <Link
            className="text-lg text-black opacity-90 hover:opacity-100 uppercase tracking-widest transition-all duration-200 hover:scale-105 hover:translate-x-1"
            href={pathname === '/' ? '#benefits' : '/#benefits'}
            onClick={closeMobileMenu}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              letterSpacing: '0.15em',
            }}
          >
            Benefits
          </Link>
          <Link
            className="text-lg text-black opacity-90 hover:opacity-100 uppercase tracking-widest transition-all duration-200 hover:scale-105 hover:translate-x-1"
            href={pathname === '/' ? '#tenets' : '/#tenets'}
            onClick={closeMobileMenu}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              letterSpacing: '0.15em',
            }}
          >
            Tenets
          </Link>
          <Link
            className="text-lg text-black opacity-90 hover:opacity-100 uppercase tracking-widest transition-all duration-200 hover:scale-105 hover:translate-x-1"
            href={pathname === '/' ? '#policies' : '/#policies'}
            onClick={closeMobileMenu}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              letterSpacing: '0.15em',
            }}
          >
            Policies
          </Link>
        </nav>
      </div>
    </>
  )
}
