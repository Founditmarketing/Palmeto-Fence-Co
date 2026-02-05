import React from 'react';
import { HeartHandshake, Award, MapPin, Feather } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 pt-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-accent-500"></span>
              <span className="text-accent-600 font-bold tracking-widest uppercase text-xs">Our Story</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-950 mb-8 leading-tight">
              More Than Just a <br/> Fencing Company.
            </h3>
            
            <div className="prose prose-lg text-stone-600 mb-10">
              <p className="mb-6">
                Palmetto Fence Co. brings a fresh perspective to the construction industry in Waycross. As a 
                <span className="font-bold text-brand-800 bg-brand-50 px-1 rounded mx-1">Woman-Owned Business</span>, 
                we prioritize clear communication, precise scheduling, and an eye for design that ensures your fence isn't just a barrier—it's an enhancement.
              </p>
              <p>
                We understand that your home is your sanctuary. Whether you need a safe play area for children, security for pets, or privacy for your garden, we build with the same care we would for our own families.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-colors">
                 <div className="p-2 bg-brand-100 rounded-full text-brand-600"><HeartHandshake size={20}/></div>
                 <span className="font-semibold text-brand-900">Personal Service</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-colors">
                 <div className="p-2 bg-brand-100 rounded-full text-brand-600"><Award size={20}/></div>
                 <span className="font-semibold text-brand-900">Premium Materials</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-colors">
                 <div className="p-2 bg-brand-100 rounded-full text-brand-600"><MapPin size={20}/></div>
                 <span className="font-semibold text-brand-900">Deep Local Roots</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-colors">
                 <div className="p-2 bg-brand-100 rounded-full text-brand-600"><Feather size={20}/></div>
                 <span className="font-semibold text-brand-900">Design Focused</span>
              </div>
            </div>

            {/* Signature Block */}
            <div className="border-t border-stone-200 pt-6">
                <p className="font-serif italic text-xl text-brand-800 mb-1">"We don't just build fences, we frame memories."</p>
                <p className="text-sm font-bold text-stone-500 uppercase tracking-wider">— The Palmetto Team</p>
            </div>
          </div>

          {/* Image Composition */}
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                src="https://picsum.photos/id/129/600/750" 
                alt="Female project manager reviewing fence plans" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-900/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Decorative Backdrops */}
            <div className="absolute top-8 -right-8 w-2/3 h-full border-2 border-accent-400/30 rounded-2xl z-0 hidden md:block"></div>
            <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 bg-brand-50 rounded-2xl -z-10 hidden md:block"></div>
            
            {/* Floating Info Card */}
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:-left-12 z-20 bg-white/95 backdrop-blur shadow-xl p-6 rounded-xl border-l-4 border-accent-500">
              <div className="flex items-start gap-4">
                 <div className="bg-green-100 p-2 rounded-full text-green-700">
                    <Award size={24} />
                 </div>
                 <div>
                    <p className="font-bold text-stone-900">Green Commitment</p>
                    <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Sustainable materials & waste reduction practices on every job site.
                    </p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;