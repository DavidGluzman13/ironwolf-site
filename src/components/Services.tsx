import { Home, Building2, Car, Droplets, DoorOpen, Warehouse } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Glass',
    description: 'Windows, shower doors, mirrors, glass railings, and custom installations for your home.',
    features: ['Window Repair', 'Shower Enclosures', 'Mirror Installation', 'Glass Doors']
  },
  {
    icon: Building2,
    title: 'Commercial Glass',
    description: 'Storefront glass, office partitions, display cases, and commercial building solutions.',
    features: ['Storefront Systems', 'Office Partitions', 'Display Cases', 'Safety Glass']
  },
  {
    icon: Car,
    title: 'Auto Glass',
    description: 'Windshield repair and replacement, side windows, and rear glass for all vehicle types.',
    features: ['Windshield Repair', 'Full Replacement', 'Mobile Service', 'Insurance Claims']
  },
  {
    icon: Droplets,
    title: 'Emergency Repairs',
    description: '24/7 emergency glass repair and boarding services for unexpected damage.',
    features: ['24/7 Availability', 'Board Up Service', 'Same-Day Repair', 'Insurance Work']
  },
  {
    icon: DoorOpen,
    title: 'Custom Glass Work',
    description: 'Bespoke glass solutions including etching, tinting, and specialty installations.',
    features: ['Custom Design', 'Glass Etching', 'Tinting Service', 'Unique Shapes']
  },
  {
    icon: Warehouse,
    title: 'Glass Replacement',
    description: 'Complete glass replacement services for damaged or outdated glass installations.',
    features: ['Window Replacement', 'Door Glass', 'Insulated Units', 'Energy Efficient']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive glass solutions for residential, commercial, and automotive needs throughout the GTA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
