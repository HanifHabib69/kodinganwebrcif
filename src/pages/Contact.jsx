export default function Contact() {
  return (
    <section className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Contact <span className="text-red-600">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Alamat Kantor</h3>
              <p>
                Jl. Jambu FA4/76 Menteng Bintaro<br />
                Tangerang Selatan, Indonesia
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Email</h3>
              <p>yantek@rciforte.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Telepon</h3>
              <p>+62 813-1510-5290</p>
            </div>
          </div>

          {/* Formulir Kontak */}
          <form
            className="space-y-4"
            action="https://formspree.io/f/mjvnzopk"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Nama"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-800"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-800"
              required
            />
            <textarea
              name="message"
              placeholder="Pesan"
              rows="5"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
