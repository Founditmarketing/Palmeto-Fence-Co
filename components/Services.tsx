import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-accent-600 font-bold uppercase tracking-widest text-xs mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-950">Crafted for Longevity</h2>
          <p className="mt-6 text-stone-500 max-w-2xl mx-auto text-lg font-light">
            We combine premium materials with expert installation techniques to ensure your fence stands the test of time and Georgia weather.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur p-3 rounded-lg shadow-sm text-brand-700">
                  <service.icon size={20} />
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow border-b border-stone-100 pb-4 border-dashed">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-brand-700 font-bold text-xs uppercase tracking-wider group-hover:text-accent-600 transition-colors">
                  Get a Quote <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;