"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * ARCHETYPE COFFEE - BRAND IDENTITY SYSTEM
 * A centralized system for all brand marks, wordmarks, and lockups.
 */

interface BrandProps {
  className?: string;
  variant?: 'emblem' | 'wordmark' | 'horizontal' | 'stacked' | 'favicon';
  color?: 'cream' | 'copper' | 'espresso' | 'dynamic';
}

const ArchetypeBrand = ({ 
  className = "", 
  variant = 'horizontal', 
  color = 'dynamic' 
}: BrandProps) => {

  // Color Mapping
  const colors = {
    cream: 'text-cream',
    copper: 'text-copper',
    espresso: 'text-espresso',
    dynamic: 'text-cream group-hover:text-copper transition-colors duration-500'
  };

  // 1. THE EMBLEM (Icon Only)
  const Emblem = () => (
    <div className="relative w-14 h-14 flex items-center justify-center">
      {/* Background Atmosphere */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-copper/30 blur-2xl rounded-full"
      />
      
      {/* The Glass Container */}
      <div className="relative w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center overflow-hidden shadow-2xl">
        {/* Drawing Border */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <motion.rect
            x="0" y="0" width="100%" height="100%"
            rx="16" ry="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-copper/40"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>

        <span className="font-serif italic text-4xl text-copper leading-none mt-1">A</span>
        
        {/* Coffee Bean Icon */}
        <motion.div
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-1"
        >
          <svg width="14" height="10" viewBox="0 0 24 16" fill="currentColor" className="text-copper/60">
            <path d="M12 2C7.58 2 4 4.69 4 8C4 11.31 7.58 14 12 14C16.42 14 20 11.31 20 8C20 4.69 16.42 2 12 2ZM12 12C9.24 12 7 10.21 7 8C7 5.79 9.24 4 12 4C14.76 4 17 5.79 17 8C17 10.21 14.76 12 12 12Z" />
          </svg>
        </motion.div>

        {/* Shimmer */}
        <motion.div 
          animate={{ x: ['-200%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 5 }}
          className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[35deg]"
        />
      </div>
    </div>
  );

  // 2. THE WORDMARK (Text Only)
  const Wordmark = () => (
    <div className="flex flex-col">
      <div className="overflow-hidden">
        <motion.span 
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`block font-serif text-3xl md:text-4xl tracking-[0.1em] uppercase leading-tight ${color === 'dynamic' ? 'text-cream' : colors[color as keyof typeof colors]}`}
        >
          Archetype
        </motion.span>
      </div>
      <div className="relative h-8 -mt-2">
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-script text-3xl md:text-4xl text-copper italic pl-8"
        >
          Coffee
        </motion.span>
      </div>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="uppercase tracking-[0.6em] text-[8px] md:text-[9px] font-bold text-cream mt-2"
      >
        Specialty Roastery & Studio
      </motion.span>
    </div>
  );

  return (
    <div className={`group ${className}`}>
      {variant === 'emblem' && <Emblem />}
      {variant === 'wordmark' && <Wordmark />}
      {variant === 'horizontal' && (
        <div className="flex items-center gap-6">
          <Emblem />
          <Wordmark />
        </div>
      )}
      {variant === 'stacked' && (
        <div className="flex flex-col items-center text-center gap-8">
          <Emblem />
          <Wordmark />
        </div>
      )}
      {variant === 'favicon' && (
        <div className="w-16 h-16 bg-espresso flex items-center justify-center rounded-xl overflow-hidden border border-copper/30">
          <span className="font-serif italic text-4xl text-copper">A</span>
        </div>
      )}
    </div>
  );
};

export default ArchetypeBrand;
