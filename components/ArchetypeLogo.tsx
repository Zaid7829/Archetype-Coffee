"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ArchetypeLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {/* Boxed Icon Composition */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Deep Atmosphere Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-copper/30 blur-3xl rounded-full"
        />

        {/* The Glass Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full h-full bg-espresso/40 backdrop-blur-xl border border-copper/30 rounded-2xl flex flex-col items-center justify-center overflow-hidden shadow-2xl"
        >
          {/* Animated Border Draw */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 overflow-visible">
            <motion.rect
              x="0" y="0" width="100%" height="100%"
              rx="16" ry="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-copper/40"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Serif "A" */}
          <span className="font-serif italic text-4xl text-copper leading-none mt-1">A</span>
          
          {/* Coffee Bean Icon */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-1"
          >
            <svg width="18" height="12" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-copper">
              <path d="M12 2C7.58 2 4 4.69 4 8C4 11.31 7.58 14 12 14C16.42 14 20 11.31 20 8C20 4.69 16.42 2 12 2ZM12 12C9.24 12 7 10.21 7 8C7 5.79 9.24 4 12 4C14.76 4 17 5.79 17 8C17 10.21 14.76 12 12 12Z" fill="currentColor" fillOpacity="0.3"/>
              <path d="M16.5 4.5C15.2 3.8 13.7 3.5 12 3.5C10.3 3.5 8.8 3.8 7.5 4.5C6.2 5.2 5.5 6.2 5.5 7.5C5.5 8.8 6.2 9.8 7.5 10.5C8.8 11.2 10.3 11.5 12 11.5C13.7 11.5 15.2 11.2 16.5 10.5C17.8 9.8 18.5 8.8 18.5 7.5C18.5 6.2 17.8 5.2 16.5 4.5ZM12 10C9.8 10 8 8.9 8 7.5C8 6.1 9.8 5 12 5C14.2 5 16 6.1 16 7.5C16 8.9 14.2 10 12 10Z" fill="currentColor"/>
              <path d="M8 7.5C8 7.5 10 8.5 12 7.5C14 6.5 16 7.5 16 7.5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
            </svg>
          </motion.div>

          {/* Shimmer */}
          <motion.div 
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
            className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[35deg]"
          />
        </motion.div>
      </div>

      {/* Brand Identity Typography */}
      <div className="flex flex-col">
        <div className="flex flex-col relative">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-serif text-3xl md:text-4xl text-cream tracking-[0.05em]"
          >
            Archetype
          </motion.span>
          
          {/* Script Flourish */}
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="font-script text-3xl md:text-4xl text-copper absolute -bottom-4 md:-bottom-5 left-8 md:left-10 italic"
          >
            Coffee
          </motion.span>
        </div>
        
        {/* Tagline */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="uppercase tracking-[0.6em] text-[8px] md:text-[9px] font-bold text-cream mt-6 md:mt-7"
        >
          Specialty Coffee
        </motion.span>
      </div>
    </div>
  );
};

export default ArchetypeLogo;
