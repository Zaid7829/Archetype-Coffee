"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoHero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=Archetype+Coffee+31+Riding+House+St+London+W1W+7DY', '_blank');
  };

  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/archetype/hero-video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/archetype-hero-loop.mp4" type="video/mp4" />
          {/* Fallback for when video fails or isn't present yet */}
          <div className="absolute inset-0 bg-[#0a0a0a]" />
        </video>
        
        {/* Multi-layered Premium Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        <AnimatePresence>
          {isMounted && (
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-serif font-light text-cream mb-6 tracking-tight leading-[0.9]">
                  Archetype <span className="text-copper italic">Coffee</span>
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              >
                <p className="text-lg md:text-2xl text-cream font-light mb-12 tracking-[0.3em] uppercase">
                  Specialty coffee in the heart of Fitzrovia
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <button 
                  onClick={scrollToMenu}
                  className="px-12 py-5 bg-copper text-espresso font-medium rounded-full hover:bg-cream transition-all duration-500 shadow-2xl shadow-copper/20 text-lg"
                >
                  View Menu
                </button>
                <button 
                  onClick={getDirections}
                  className="px-12 py-5 border border-cream/20 text-cream font-medium rounded-full hover:bg-cream/10 backdrop-blur-md transition-all duration-500 text-lg"
                >
                  Get Directions
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] text-cream/40 uppercase tracking-[0.5em]">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-copper to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoHero;
