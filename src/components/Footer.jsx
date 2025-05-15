export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Alamat */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Alamat Kantor</h3>
          <p>Jl. Jambu FA4/76 Menteng Bintaro</p>
          <p>Tanggerang Selatan, Indonesia</p>
        </div>
        
        {/* Kontak */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Kontak</h3>
          <p>Email: <a href="mailto:yantek@rciforte.com" className="underline hover:text-blue-400">yantek@rciforte.com</a></p>
          <p>Telepon: <a href="tel:+6281315105290" className="underline hover:text-blue-400">+62-813-1510-5290</a></p>
        </div>
        
        {/* Sosial Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/rciforte" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-400">
              {/* Instagram SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.25 1a1 1 0 110 2 1 1 0 010-2zm-4.25 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/reka-cuaca-indonesia-forte" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400">
              {/* LinkedIn SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.75v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.42V9h3.6v1.56h.05c.5-.95 1.72-1.95 3.54-1.95 3.78 0 4.48 2.49 4.48 5.72v6.62zM5.34 7.43a2.18 2.18 0 11.01-4.37 2.18 2.18 0 01-.01 4.37zM6.22 20.45H4.46V9h1.76v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/>
              </svg>
            </a>
          </div>
        </div>
        
      </div>

      <div className="text-center mt-10 text-gray-300 text-sm">
        <p>Reka Cuaca Indonesia Forte</p>
      </div>
    </footer>
  );
}
