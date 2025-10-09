export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IW</span>
              </div>
              <div>
                <h3 className="text-xl font-bold"> Iron Wolf Doors & Windows</h3>
                <p className="text-xs text-slate-400">Expert Door & Window Solutions</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner for all Door, Window and Glass repair, replacement, and installation services across the Greater Toronto Area.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#quote" className="text-slate-400 hover:text-white transition-colors">Free Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-slate-400">Residential Door/Window/Glass</li>
              <li className="text-slate-400">Commercial Door/Window/Glass</li>
              <li className="text-slate-400">Emergency Services</li>
              <li className="text-slate-400">Locksmith</li>
              <li className="text-slate-400">Access Control</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Iron Wolf Doors & Windows. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Licensed & Insured | Serving the Greater Toronto Area
          </p>
        </div>
      </div>
    </footer>
  );
}
