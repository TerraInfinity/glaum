// =============================================
// Footer Component
// =============================================
// Global footer that appears on all pages.
// Features SoundCloud player for community music and copyright information.

/**
 * Footer Component
 * 
 * Displays:
 * - SoundCloud embedded player for community music
 * - SoundCloud attribution and track information
 * - Copyright notice with playful "SPONSORED BY SHRIMP™" tagline
 * 
 * Uses Glåüm brand purple (#DB61F9) for background consistency.
 * 
 * @returns {JSX.Element} Footer with SoundCloud player and copyright
 */
export default function Footer() {
  return (
    <footer className="w-full bg-[#DB61F9] py-8" role="contentinfo">
      <div className="flex flex-col items-center justify-center h-full">
        {/* ========== SoundCloud Player Section ========== */}
        <div className="mb-4 w-full max-w-4xl px-4 flex flex-col items-center">
          {/* 
            SoundCloud embedded player for community music.
            Configured with:
            - Glåüm brand color (#d239f8)
            - Inverse color scheme for contrast
            - Auto-play disabled for better UX
            - User attribution shown
          */}
          <iframe 
            width="100%" 
            height="20" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2216121104&color=%23d239f8&inverse=true&auto_play=false&show_user=true"
            title="SoundCloud player - Camarón by Azeirf"
            aria-label="SoundCloud audio player for Camarón by Azeirf"
          ></iframe>
          
          {/* SoundCloud attribution - required by SoundCloud terms of service */}
          <div className="text-center" style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
            <a href="https://soundcloud.com/azeirf" title="Azeirf" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Azeirf  -</a> · <a href="https://soundcloud.com/azeirf/camaron-wav" title="Camarón.... 🦐" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Camarón.... 🦐</a>
          </div>
        </div>
        
        {/* ========== Copyright Notice ========== */}
        {/* Playful copyright with "SPONSORED BY SHRIMP™" tagline matching community tone */}
        <p className="text-white text-center">
          GLAUM.CA © 2026 - SPONSORED BY SHRIMP™
        </p>
      </div>
    </footer>
  )
}
