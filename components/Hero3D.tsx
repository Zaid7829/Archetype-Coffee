"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CoffeeScene from './CoffeeScene';

const Hero3D = () => {
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
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/archetype/hero-storefront-wide.jpg"
          alt="Archetype Coffee Storefront"
          fill
          priority
          className="object-cover opacity-20 grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-espresso/60 mix-blend-multiply" />
      </div>

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2]}>
          <Suspense fallback={null}>
            <CoffeeScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Radial Gradient Overlay for Depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)] z-10" />

      {/* Hero Content Overlay */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-7xl md:text-9xl font-serif font-light text-cream mb-6 tracking-tighter"
          >
            Archetype <span className="text-copper italic">Coffee</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl text-cream font-light mb-10 tracking-widest uppercase"
          >
            Specialty coffee in the heart of Fitzrovia
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button 
              onClick={scrollToMenu}
              className="px-10 py-4 bg-copper text-espresso font-medium rounded-full hover:bg-cream hover:text-espresso transition-all duration-300 shadow-xl shadow-copper/20"
            >
              View Menu
            </button>
            <button 
              onClick={getDirections}
              className="px-10 py-4 border border-cream/30 text-cream font-medium rounded-full hover:bg-cream/10 backdrop-blur-sm transition-all duration-300"
            >
              Get Directions
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-cream/40 uppercase tracking-[0.2em]">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-copper to-transparent"
          />
        </div>
      </motion.div>

      {/* Background radial highlight for the cup area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-copper/5 rounded-full blur-[120px] pointer-events-none z-5" />
    </section>
  );
};

export default Hero3D;
