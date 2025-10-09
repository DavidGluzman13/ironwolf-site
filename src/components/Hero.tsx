import { Shield, Clock, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative text-white py-24 bg-slate-900"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero/Double-Doors-Replacement.jpg"
          alt="Double doors replacement by Iron Wolf Doors & Windows"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Iron Wolf Doors & Windows
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
            Expert installation and repair of doors, windows, and glass across the Greater Toronto Area.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#quote"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Request a Free Quote
            </a>
            <a
              href="tel:+16478894221"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg hover:bg-slate-100 transition-all font-semibold text-lg shadow-xl"
            >
              Call Now: (647) 230-2725
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="text-blue-400 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg">Licensed & Insured</h3>
                <p className="text-sm text-slate-300">Fully certified installers</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-blue-400 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg">24/7 Emergency Service</h3>
                <p className="text-sm text-slate-300">Always ready when you need us</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="text-blue-400 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg">Quality Guaranteed</h3>
                <p className="text-sm text-slate-300">We stand behind every job</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

