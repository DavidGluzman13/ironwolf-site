import { Shield, Clock, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYxMGMwIDItMiA0LTIgNHMtMi0yLTItNFYzNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Expert Glass Repair & Installation Services
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
            Trusted by homeowners and businesses across the Greater Toronto Area for over 20 years
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#quote" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105">
              Request Free Quote
            </a>
            <a href="tel:416-555-0100" className="bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-100 transition-all font-semibold text-lg shadow-xl">
              Call Now: (416) 555-0100
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="text-blue-400 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg">Licensed & Insured</h3>
                <p className="text-sm text-slate-300">Fully certified professionals</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-blue-400 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg">24/7 Emergency</h3>
                <p className="text-sm text-slate-300">Available when you need us</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="text-blue-400 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg">Quality Guaranteed</h3>
                <p className="text-sm text-slate-300">100% satisfaction promise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
