import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-slate-600">
            We're here to help with all your glass service needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
            <a href="tel:416-555-0100" className="text-lg text-blue-600 hover:text-blue-700 font-semibold">
              (416) 555-0100
            </a>
            <p className="text-sm text-slate-600 mt-1">24/7 Emergency Line</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
            <a href="mailto:info@gtaglass.ca" className="text-lg text-blue-600 hover:text-blue-700 font-semibold">
              info@gtaglass.ca
            </a>
            <p className="text-sm text-slate-600 mt-1">Quick Response</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
            <p className="text-slate-700 font-medium">Greater Toronto Area</p>
            <p className="text-sm text-slate-600 mt-1">Mobile Service Available</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Hours</h3>
            <p className="text-slate-700 font-medium">Mon-Sat: 7AM - 7PM</p>
            <p className="text-sm text-slate-600 mt-1">Sun: 9AM - 5PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
