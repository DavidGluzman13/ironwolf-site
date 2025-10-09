import { CheckCircle2, Users, Wrench, TrendingUp } from 'lucide-react';

const stats = [
  { number: '20+', label: 'Years Experience' },
  { number: '10,000+', label: 'Happy Clients' },
  { number: '24/7', label: 'Emergency Service' },
  { number: '100%', label: 'Satisfaction Rate' }
];

const reasons = [
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Our team consists of certified professionals with decades of combined experience in glass installation and repair.'
  },
  {
    icon: Wrench,
    title: 'Quality Materials',
    description: 'We use only premium-grade glass and materials from trusted manufacturers, ensuring durability and longevity.'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description: 'Fair, transparent pricing with free estimates and no hidden fees. We work with insurance companies directly.'
  },
  {
    icon: CheckCircle2,
    title: 'Warranty Protection',
    description: 'All our work is backed by comprehensive warranties, giving you complete peace of mind with every installation.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              GTA's Most Trusted Door, Window and Glass Service Provider
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              For over two decades, we've been the premier choice for Door, Window and Glass services across the Greater Toronto Area. Our commitment to excellence, attention to detail, and customer-first approach have made us the go-to experts for thousands of satisfied clients.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Whether you need emergency repairs, custom installations, or routine replacements, our skilled team delivers exceptional results every time. We serve all areas including Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#quote" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Get Started Today
              </a>
              <a href="tel:416-555-0100" className="border-2 border-slate-800 text-slate-800 px-8 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-colors font-semibold">
                Call Us Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-8 text-white text-center shadow-xl"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Us?
          </h3>
          <p className="text-xl text-slate-600">
            We go above and beyond to ensure your complete satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <reason.icon className="text-blue-600" size={36} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
