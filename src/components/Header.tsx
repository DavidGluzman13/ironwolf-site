import { Phone, Mail, Clock } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:416-555-0100" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Phone size={16} />
              <span>(416) 555-0100</span>
            </a>
            <a href="mailto:info@gtaglass.ca" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Mail size={16} />
              <span>info@gtaglass.ca</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Mon-Sat: 7AM - 7PM | Sun: 9AM - 5PM</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">GTA Glass Services</h1>
              <p className="text-xs text-slate-600">Serving Greater Toronto Area</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            <a href="#quote" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg">
              Get Free Quote
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
