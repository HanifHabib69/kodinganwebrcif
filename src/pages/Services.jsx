export default function Services() {
  return (
    <section className="min-h-screen bg-blue-50 py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Pengurangan Hujan</h3>
            <p className="text-gray-600">Teknologi penyemaian awan untuk mengurangi curah hujan agar operasional di area tambang tidak terganggu.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Penambahan curah hujan</h3>
            <p className="text-gray-600">Teknologi pengisian air hujan di area pit dengan mengarahkan hujan turun tepat di atasnya.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Penyediaan Radar</h3>
            <p className="text-gray-600">Layanan penyediaan radar untuk wilayah tertentu yang dapat dipindahkan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
