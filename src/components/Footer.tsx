export default function Footer() {
  return (
    <footer className="w-full bg-[#DB61F9] py-8">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-4 w-full max-w-4xl px-4 flex flex-col items-center">
          <iframe 
            width="100%" 
            height="20" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2216121104&color=%23d239f8&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <div className="text-center" style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
            <a href="https://soundcloud.com/azeirf" title="Azeirf" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Azeirf  -</a> · <a href="https://soundcloud.com/azeirf/camaron-wav" title="Camarón.... 🦐" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Camarón.... 🦐</a>
          </div>
        </div>
        <p className="text-white text-center">
          GLAUM.CA © 2026 - SPONSORED BY SHRIMP™
        </p>
      </div>
    </footer>
  )
}
