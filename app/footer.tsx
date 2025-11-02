'use client'

import { Instagram, Music2, Youtube, MessageCircle } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#', // Placeholder
    },
    {
      name: 'TikTok',
      icon: Music2,
      href: '#', // Placeholder
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: '#', // Placeholder
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: '#', // Placeholder
    },
  ]

  return (
    <footer className="py-12 px-4 w-full bg-white bg-opacity-5">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm opacity-70 text-center sm:text-left order-2 sm:order-1">
            Copyright 2022 - Glåüm.ca
          </p>
          
          <nav className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 order-1 sm:order-2">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="
                    relative
                    p-3
                    rounded-lg
                    transition-all
                    duration-300
                    text-white
                    opacity-70
                    hover:opacity-100
                    hover:scale-110
                    group
                    hover:shadow-[0_0_20px_rgba(128,56,244,0.8)]
                    active:scale-95
                  "
                >
                  <Icon 
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-colors"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{social.name}</span>
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}

