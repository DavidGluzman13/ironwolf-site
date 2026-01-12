import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setSubmitting(true);

  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        // city is optional in your API. You don't collect it yet, so omit it.
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok || !data.ok) {
      throw new Error(data?.error || "Failed to send your request. Please try again.");
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  } catch (err: any) {
    setError(err?.message || "Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-blue-100">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="(416) 555-0100"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="emergency-repair">Emergency Repair</option>
                  <option value="locksmith">Locksmith</option>
                  <option value="access-control">Access Control</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Please describe your glass service needs..."
                ></textarea>
              </div>
              
              {error && (
                <p className="text-sm text-red-600 font-semibold mb-4">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {submitting ? "Sending..." : "Submit Request"}
              </button>


              <p className="text-sm text-slate-600 text-center mt-4">
                We respect your privacy and will never share your information
              </p>
            </form>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Thank You!
              </h3>
              <p className="text-xl text-slate-600">
                We've received your request and will contact you shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
