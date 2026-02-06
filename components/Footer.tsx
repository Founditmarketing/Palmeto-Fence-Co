import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-white py-12 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-700">
                <span className="font-serif font-bold text-xl text-white">P</span>
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight">Palmetto<span className="text-brand-500">Fence</span></span>
            </a>
            <p className="text-brand-200 text-sm leading-relaxed mb-4">
              Proudly serving Waycross, GA with premium fencing solutions. Woman-owned, community focused, quality driven.
            </p>
            <div className="text-brand-300 text-sm space-y-1">
              <p>Waycross, GA 31501</p>
              <p><a href="tel:+19125550199" className="hover:text-white">(912) 555-0199</a></p>
              <p><a href="mailto:hello@palmettofenceco.com" className="hover:text-white">hello@palmettofenceco.com</a></p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-accent-500">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-100 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-accent-500">Services</h4>
            <ul className="space-y-2 text-brand-100 text-sm">
              <li><a href="/services/wood" className="hover:text-white transition-colors">Residential Privacy</a></li>
              <li><a href="/services/commercial" className="hover:text-white transition-colors">Commercial Security</a></li>
              <li><a href="/services/wood" className="hover:text-white transition-colors">Custom Woodwork</a></li>
              <li><a href="/services/vinyl" className="hover:text-white transition-colors">Vinyl Fencing</a></li>
              <li><a href="/services/aluminum" className="hover:text-white transition-colors">Aluminum Fencing</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-accent-500">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-brand-900 rounded-full hover:bg-brand-800 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-brand-900 rounded-full hover:bg-brand-800 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-brand-300">License #123456</p>
              <p className="text-xs text-brand-300">Insured & Bonded</p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-400">
          <p>&copy; {new Date().getFullYear()} Palmetto Fence Co. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
