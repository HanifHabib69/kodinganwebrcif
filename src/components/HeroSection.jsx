import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Mengubah Cuaca, <br className="hidden md:block" /> Menjaga Masa Depan
          </h1>
          <p className="text-lg text-white/80">
            Reka Cuaca Indonesia Forte adalah pionir solusi teknologi modifikasi cuaca di Indonesia,
            untuk keberlanjutan, pertambangan, dan mitigasi bencana.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-900 px-5 py-2 rounded hover:bg-gray-100">
              Pelajari Lebih Lanjut
            </button>
            <button className="text-white border border-white px-5 py-2 rounded hover:bg-white/10 flex items-center">
              Hubungi Kami <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <img
            src="/images/weather-illustration.svg"
            alt="Ilustrasi Modifikasi Cuaca"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
}
