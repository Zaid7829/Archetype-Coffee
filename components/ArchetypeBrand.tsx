"use client";

import React from 'react';


/**
 * ARCHETYPE COFFEE - BRAND IDENTITY SYSTEM
 * A centralized system for all brand marks, wordmarks, and lockups.
 */

interface BrandProps {
  className?: string;
  variant?: 'emblem' | 'wordmark' | 'horizontal' | 'stacked' | 'favicon';
  color?: 'cream' | 'copper' | 'espresso' | 'dynamic';
}

// 1. THE EMBLEM (Icon Only) - RIGID DIMENSIONS
const Emblem = () => (
  <div className="relative w-14 h-14 flex-shrink-0">
    {/* Background Atmosphere - Static Glow */}
    <div className="absolute inset-0 bg-copper/10 blur-2xl rounded-full opacity-50" />
    
    {/* The Glass Container */}
    <div className="relative w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center justify-center overflow-hidden shadow-2xl">
      {/* Drawing Border - Static */}
      <svg width="56" height="56" className="absolute inset-0 -rotate-90">
        <rect
          x="0" y="0" width="100%" height="100%"
          rx="16" ry="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-copper/40"
        />
      </svg>

      <span className="font-serif italic text-4xl text-copper leading-none mt-1 h-8 flex items-center justify-center">A</span>
      
      {/* Coffee Bean Icon - Static */}
      <div className="mt-1 h-3 opacity-60">
        <svg width="14" height="10" viewBox="0 0 24 16" fill="currentColor" className="text-copper/60">
          <path d="M12 2C7.58 2 4 4.69 4 8C4 11.31 7.58 14 12 14C16.42 14 20 11.31 20 8C20 4.69 16.42 2 12 2ZM12 12C9.24 12 7 10.21 7 8C7 5.79 9.24 4 12 4C14.76 4 17 5.79 17 8C17 10.21 14.76 12 12 12Z" />
        </svg>
      </div>

      {/* Static Shimmer Highlight */}
      <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-[35deg] opacity-30" />
    </div>
  </div>
);

// 2. THE WORDMARK (Text Only) - RIGID DIMENSIONS
const Wordmark = ({ color, colors }: { color: string, colors: Record<string, string> }) => (
  <div className="flex flex-col w-[160px] md:w-[200px] flex-shrink-0">
    <div className="h-9 md:h-11">
      <span className={`block font-serif text-3xl md:text-4xl tracking-[0.1em] uppercase leading-none h-full ${color === 'dynamic' ? 'text-cream' : colors[color as keyof typeof colors]}`}>
        Archetype
      </span>
    </div>
    <div className="relative h-9 md:h-11 -mt-1">
      <span className="font-script text-3xl md:text-4xl text-copper italic pl-8 block h-full leading-none">
        Coffee
      </span>
    </div>
    <div className="h-4 mt-1">
      <span className="uppercase tracking-[0.6em] text-[8px] md:text-[9px] font-bold text-cream/40 block leading-none h-full">
        Specialty Roastery & Studio
      </span>
    </div>
  </div>
);

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

  return (
    <div className={`group flex-shrink-0 ${className}`}>
      {variant === 'emblem' && <Emblem />}
      {variant === 'wordmark' && <Wordmark color={color} colors={colors} />}
      {variant === 'horizontal' && (
        <div className="flex items-center gap-6 h-20">
          <Emblem />
          <Wordmark color={color} colors={colors} />
        </div>
      )}
      {variant === 'stacked' && (
        <div className="flex flex-col items-center text-center gap-8 py-4">
          <Emblem />
          <Wordmark color={color} colors={colors} />
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
