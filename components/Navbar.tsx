import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              {/* Logo Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md ${isScrolled ? 'bg-brand-700' : 'bg-stone-50'}`}>
                <span className={`font-serif font-bold text-2xl italic ${isScrolled ? 'text-brand-50' : 'text-brand-700'}`}>P</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-2xl leading-none tracking-tight ${isScrolled ? 'text-brand-900' : 'text-stone-50'}`}>
                  Palmetto<span className={`italic font-medium ${isScrolled ? 'text-brand-600' : 'text-brand-200'}`}>Fence</span>
                </span>
                <span className={`text-[10px] uppercase tracking-widest font-medium ${isScrolled ? 'text-brand-400' : 'text-brand-100/90'}`}>
                  Waycross, GA
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium relative py-1 transition-colors hover:text-accent-500 group ${isScrolled ? 'text-stone-600' : 'text-white/90'
                  }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="tel:+19125550199"
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-md hover:shadow-lg ${isScrolled
                  ? 'bg-brand-700 text-brand-50 hover:bg-brand-800 shadow-brand-700/20'
                  : 'bg-stone-50 text-brand-800 hover:bg-white shadow-black/10'
                }`}
            >
              <Phone size={16} className="fill-current" />
              (912) 555-0199
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${isScrolled ? 'text-stone-800' : 'text-white'
                }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-stone-100 absolute w-full h-screen overflow-y-auto">
          <div className="px-4 pt-8 pb-3 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-xl text-xl font-serif font-bold text-stone-800 hover:text-brand-700 hover:bg-brand-50 border-b border-stone-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+19125550199"
              className="block w-full text-center mt-8 bg-brand-700 text-white px-3 py-4 rounded-xl font-bold shadow-xl shadow-brand-700/30"
            >
              Call Us Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;