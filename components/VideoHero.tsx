"use client";

import React from 'react';
import { preload } from 'react-dom';
import { motion } from 'framer-motion';

/**
 * CINEMATIC VIDEO HERO
 * Optimized for Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS).
 * Uses a stable full-screen container and immediate rendering for critical text.
 */
const VideoHero = () => {
  // Preload the poster image for LCP optimization (React 19)
  preload("/images/archetype/hero-storefront-wide.jpg", { as: "image" });

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
    <section className="relative w-full h-[100dvh] bg-espresso overflow-hidden flex items-center justify-center">
      {/* Video Background - Stable Dimensions */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/archetype/hero-storefront-wide.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/archetype-hero-loop.mp4" type="video/mp4" />
          {/* Fallback color to prevent blank screen while video loads */}
          <div className="absolute inset-0 bg-espresso" />
        </video>
        
        {/* Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Hero Content - Rendered Immediately for zero CLS */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center h-full justify-center">
        <div className="max-w-4xl w-full">
          {/* Title Area - Fixed Height to reserve space for large typography */}
          <div className="min-h-[150px] md:min-h-[200px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[clamp(3rem,8vw,8rem)] font-serif font-light text-cream tracking-tight leading-[0.9]">
                Archetype <span className="text-copper italic">Coffee</span>
              </h1>
            </motion.div>
          </div>
          
          <div className="min-h-[60px] md:min-h-[80px] flex items-center justify-center mt-4 mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-sm md:text-xl text-cream font-light tracking-[0.3em] uppercase">
                Specialty coffee in the heart of Fitzrovia
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button 
              onClick={scrollToMenu}
              className="px-10 md:px-12 py-4 md:py-5 bg-copper text-espresso font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-full hover:bg-cream transition-all duration-500 shadow-2xl shadow-copper/20"
            >
              View Menu
            </button>
            <button 
              onClick={getDirections}
              className="px-10 md:px-12 py-4 md:py-5 border border-cream/20 text-cream font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-full hover:bg-cream/10 backdrop-blur-md transition-all duration-500"
            >
              Get Directions
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] text-cream/40 uppercase tracking-[0.5em] font-bold">Scroll</span>
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
