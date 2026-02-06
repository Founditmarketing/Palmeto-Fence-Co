

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { MessageSquareText } from 'lucide-react';

// Pages
import HomePage from './src/pages/HomePage';
import VinylFencing from './src/pages/VinylFencing';
import WoodFencing from './src/pages/WoodFencing';
import AluminumFencing from './src/pages/AluminumFencing';
import CommercialFencing from './src/pages/CommercialFencing';

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen relative flex flex-col">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage onOpenAI={() => setIsAiOpen(true)} />} />
              <Route path="/services/vinyl" element={<VinylFencing />} />
              <Route path="/services/wood" element={<WoodFencing />} />
              <Route path="/services/aluminum" element={<AluminumFencing />} />
              <Route path="/services/commercial" element={<CommercialFencing />} />
            </Routes>
          </main>

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
      </Router>
    </HelmetProvider>
  );
};

export default App;
