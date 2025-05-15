export default function Home() {
  return (
    <section className="min-h-screen bg-blue-50 flex items-center justify-center px-4 md:px-6 py-16">
      <div className="text-center max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-blue-900">RCI</span> <span className="text-red-600">Forte</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
          Kami bertekad untuk membantu dalam mengatasi permasalahan dan bencana yang disebabkan oleh iklim dan cuaca.
          Perusahaan kami didukung oleh tim profesional ahli di bidang Meteorologi & Klimatologi, Hidrologi, Geografi, 
          HSE, dan GIS.
        </p>
        <a
          href="/services"
          className="inline-block bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-blue-800 transition"
        >
          Lihat Layanan Kami
        </a>
      </div>
    </section>
  );
}
