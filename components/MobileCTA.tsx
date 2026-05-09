"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Navigation } from 'lucide-react';

const MobileCTA = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const googleMapsUrl = "https://maps.app.goo.gl/GePTHSQfnDJdXdzh9";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]"
      >
        <div className="max-w-md mx-auto bg-espresso/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 flex gap-2">
          <button
            onClick={scrollToMenu}
            aria-label="Scroll to menu section"
            className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl bg-white/5 border border-white/5 text-cream hover:bg-white/10 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
          >
            <Coffee size={18} className="text-copper" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">View Menu</span>
          </button>
          
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions in Google Maps"
            className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl bg-copper text-espresso hover:bg-cream active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
          >
            <Navigation size={18} aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Directions</span>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileCTA;
