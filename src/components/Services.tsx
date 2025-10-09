import {
  DoorOpen,
  Building2,
  Home,
  Wrench,
  Zap,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    icon: DoorOpen,
    title: 'Door Installation & Replacement',
    description:
      'High-performance steel and fiberglass doors for residential and commercial properties.',
    features: [
      'Entry Door Replacement',
      'Patio & Garden Doors',
      'Custom Prehung Double Doors',
      'Weatherproof Sealing',
    ],
    img: '/gallery/doors/Residential-Door-Replacement.jpg',
  },
  {
    icon: Building2,
    title: 'Commercial Glass & Door Systems',
    description:
      'Professional storefront glass and commercial door solutions that enhance security and appearance.',
    features: [
      'Storefront Door Systems',
      'Commercial Glass Replacement',
      'Door Adjustments & Alignment',
      'Emergency Board-Up Service',
    ],
    img: '/gallery/doors/Commercial-Door-Replacement.jpg',
  },
  {
    icon: Home,
    title: 'Vinyl Window Installation',
    description:
      'Energy-efficient window replacements for better comfort and long-term savings.',
    features: [
      'Bay & Bow Windows',
      'Casement & Slider Styles',
      'Triple-Pane Glass Options',
      'Exterior Aluminum Capping',
    ],
    img: '/gallery/windows/Vinyl-Window-Replacement.png',
  },
  {
    icon: Zap,
    title: 'Emergency Repairs',
    description:
      '24/7 response for broken doors, windows, or glass. Fast, reliable service across the GTA.',
    features: [
      'Emergency Board-Ups',
      'Same-Day Door or Glass Replacement',
      'Secure Temporary Sealing',
      'Insurance Work Supported',
    ],
    img: '/gallery/doors/Emergency-Repair.jpeg',
  },
  {
    icon: Wrench,
    title: 'Door & Screen Repairs',
    description:
      'Fixing alignment, hardware, and screen issues to restore smooth, secure operation.',
    features: [
      'Screen Replacement',
      'Screen Door Repairs',
      'Hinge & Closer Adjustments',
      'Hardware Upgrades',
    ],
    img: '/gallery/doors/Screen-Door-Replacement.jpg',
  },
  {
    icon: ShieldCheck,
    title: 'Custom Glass & Specialty Work',
    description:
      'Unique glass and door solutions designed for standout aesthetics and performance.',
    features: [
      'Decorative Glass Inserts',
      'Tinted & Frosted Options',
      'Custom Door Configurations',
      'Premium Hardware Selection',
    ],
    img: '/gallery/doors/Custom-Glass-Replacement.png',
  },
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
            Expert door, window, and glass solutions for residential and commercial clients across the GTA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative w-full bg-slate-100 overflow-hidden rounded-b-none">
        <div className="aspect-[4/3] w-full">
          <img
            src={service.img}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-contain"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
  </div>
</div>

              <div className="p-8">
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
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-slate-700"
                    >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
