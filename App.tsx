import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { MessageSquareText } from 'lucide-react';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero onOpenAI={() => setIsAiOpen(true)} />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      
      <AiAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />

      {/* Sticky Floating Action Button for AI - Mobile/Desktop */}
      {!isAiOpen && (
        <button
          onClick={() => setIsAiOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-brand-700 hover:bg-brand-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Open AI Assistant"
        >
           <MessageSquareText size={28} />
           <span className="absolute right-full mr-3 bg-stone-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
             Ask Palmetto
           </span>
        </button>
      )}
    </div>
  );
};

export default App;
