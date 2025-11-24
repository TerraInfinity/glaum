'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    handleResize()
    handleScroll() // Check initial scroll position
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <div
        className="w-full z-[9999] mx-auto l-0 r-0 fixed top-0 left-0 right-0 header transition-all duration-300 backdrop-blur-md"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: 'rgba(219, 97, 249, 0.5)',
          margin: 0,
          marginTop: 0,
          marginBottom: 0,
          padding: 0,
          paddingTop: 0,
          paddingBottom: 0,
          border: 'none',
        }}
      >
        <Link
          className="font-tokyo text-3xl font-normal pr-4 absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10"
          href="/"
          style={{
            color: '#FFFACD',
          }}
          onClick={closeMobileMenu}
        >
          GLÅÜM
        </Link>
        <div className="flex flex-col sm:flex-row justify-end items-center mx-auto max-w-screen-lg px-4 sm:px-8 py-4 sm:py-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row space-x-6">
            <Link
              className="text-center text-lg sm:text-xl lg:text-2xl leading-tight opacity-90 hover:opacity-100 transition relative group whitespace-nowrap"
              href={pathname === '/' ? '#testimonials' : '/#testimonials'}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'white',
              }}
            >
              Testimonials
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

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 text-white focus:outline-none z-10"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-6 h-[3px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-[3px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[3px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
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
