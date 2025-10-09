import { useEffect, useState } from 'react'
import { Phone, Mail, Clock, Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route/hash change clicks
  const handleNavClick = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+16472302725" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Phone size={16} />
              <span>(647) 230-2725</span>
            </a>
            <a href="mailto:info@ironwolfdoorswindows.ca" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Mail size={16} />
              <span>info@ironwolfdoorswindows.ca</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Mon–Sat: 8AM-8PM | Sun: Closed</span>
          </div>
        </div>
      </div>

      {/* Nav Bar (translucent + blur; changes on scroll) */}
      <div className={['backdrop-blur transition-all duration-300', scrolled ? 'bg-white/75 shadow-lg' : 'bg-white/60 shadow-sm'].join(' ')}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo + brand */}
            <a href="#home" className="flex items-center gap-3">
              <img
  src="/logos/IronWolf-Logo-Title.png"
  alt="Iron Wolf Doors & Windows"
  className="h-14 md:h-16 w-auto object-contain"
  loading="eager"
  style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))' }}
/>

              <div className="block">
                <h1 className="text-2xl font-bold text-slate-800 leading-tight">Iron Wolf Doors & Windows</h1>
                <p className="text-xs text-slate-600">Serving the Greater Toronto Area</p>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <a href="#quote" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg">
                Get Free Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu panel */}
          {open && (
            <div className="md:hidden mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-3 shadow-lg">
              <nav className="flex flex-col gap-2">
                <a href="#home" onClick={handleNavClick} className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100">Home</a>
                <a href="#services" onClick={handleNavClick} className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100">Services</a>
                <a href="#about" onClick={handleNavClick} className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100">About</a>
                <a href="#contact" onClick={handleNavClick} className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100">Contact</a>
                <a
                  href="#quote"
                  onClick={handleNavClick}
                  className="mt-2 px-3 py-3 rounded-lg bg-blue-600 text-white text-center font-semibold hover:bg-blue-700"
                >
                  Get Free Quote
                </a>
              </nav>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
