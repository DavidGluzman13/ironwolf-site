import { MapPin } from 'lucide-react';

const cities = [
  'Toronto', 'Mississauga', 'Brampton', 'Markham', 'Vaughan',
  'Richmond Hill', 'Oakville', 'Burlington', 'Milton', 'Pickering',
  'Ajax', 'Whitby', 'Oshawa', 'Newmarket', 'Aurora'
];

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="text-blue-400" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold">
              Service Areas
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Proudly serving the entire Greater Toronto Area with fast, reliable glass services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cities.map((city, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors border border-white/20"
              >
                <span className="font-semibold text-lg">{city}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-300 mb-6">
              Don't see your area listed? Give us a call - we likely service your location too!
            </p>
            <a
              href="tel:416-555-0100"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-xl"
            >
              <MapPin size={20} />
              Contact Us for Your Area
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
