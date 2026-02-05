import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Contact Info Side */}
          <div className="bg-brand-800 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Let's Discuss Your Project</h2>
              <p className="text-brand-100 mb-10 text-lg">
                Ready to transform your property? Contact us today for a free on-site consultation and estimate.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-accent-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-brand-100">(912) 555-0199</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-accent-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-brand-100">hello@palmettofence.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold">Service Area</h4>
                    <p className="text-brand-100">Waycross, Blackshear, and surrounding Ware County areas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-accent-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold">Hours</h4>
                    <p className="text-brand-100">Mon-Fri: 8am - 5pm</p>
                    <p className="text-brand-100">Sat: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               {/* Decorative map placeholder */}
               <div className="w-full h-48 bg-brand-900 rounded-xl overflow-hidden opacity-50 relative">
                 <img src="https://picsum.photos/id/10/800/400" className="w-full h-full object-cover mix-blend-overlay" alt="Map texture" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bold text-white/50">Waycross, GA</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 bg-white">
            <h3 className="text-2xl font-bold text-brand-950 mb-8">Send a Message</h3>
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center">
                <div className="bg-green-50 text-green-700 p-6 rounded-xl">
                  <h4 className="font-bold text-xl mb-2">Thank You!</h4>
                  <p>We have received your message and will be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Project Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your fence needs (type of material, estimated length, etc.)"
                    className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Request Consultation
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
