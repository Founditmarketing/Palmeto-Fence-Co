import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenAI: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAI }) => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-dreamy.png"
          alt="Beautiful wooded backyard fence with hydrangeas and sunlight"
          className="w-full h-full object-cover scale-105"
        />
        {/* Warm, Dreamy Overlay - Sage & Gold */}
        <div className="absolute inset-0 bg-stone-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-brand-800/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-accent-900/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left pt-20 pb-16">
        <div className="md:w-3/4 lg:w-2/3">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-10 rounded-full bg-brand-800/40 border border-brand-200/20 backdrop-blur-md shadow-lg animate-fade-in-up">
            <span className="flex gap-1">
              <Star size={12} className="text-accent-400 fill-accent-400" />
              <Star size={12} className="text-accent-400 fill-accent-400" />
              <Star size={12} className="text-accent-400 fill-accent-400" />
              <Star size={12} className="text-accent-400 fill-accent-400" />
              <Star size={12} className="text-accent-400 fill-accent-400" />
            </span>
            <span className="text-brand-50 text-xs font-bold tracking-widest uppercase border-l border-brand-200/20 pl-2 ml-1">
              Woman-Owned & Locally Operated
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.15] mb-10 drop-shadow-md tracking-tight">
            Defining Boundaries, <br />
            <span className="text-brand-100 italic font-light">Elevating Style.</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-50 mb-12 font-light max-w-xl leading-relaxed border-l-2 border-accent-400/50 pl-6 backdrop-blur-sm">
            Serving Waycross and Southeast Georgia with premium fencing solutions. We blend Southern hospitality with industrial-grade durability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-4 bg-accent-500 hover:bg-accent-400 text-brand-900 font-bold rounded-full transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get a Free Estimate
              <ArrowRight size={20} />
            </a>
            <button
              onClick={onOpenAI}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Ask Our AI Consultant
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-stone-400 font-medium">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-brand-900 bg-stone-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="client" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-brand-900 bg-stone-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=5" alt="client" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-brand-900 bg-stone-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=8" alt="client" /></div>
            </div>
            <p>Trusted by 500+ neighbors in Ware County.</p>
          </div>
        </div>
      </div>

      {/* Elegant Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px] text-stone-50" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;