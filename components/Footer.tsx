"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso border-t border-copper/10 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* Decorative Brand Illustration */}
      <div className="absolute -right-20 bottom-0 w-96 h-96 opacity-[0.05] pointer-events-none select-none">
        <Image 
          src="/images/archetype/welcome-sketch-illustration.jpg" 
          alt="" 
          fill 
          sizes="384px"
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="w-12 h-12 border border-copper/30 flex items-center justify-center text-copper font-serif italic text-2xl group-hover:bg-copper group-hover:text-espresso transition-all duration-500 rounded-xl">A</div>
              <div>
                <span className="block text-cream uppercase tracking-[0.5em] text-xs font-bold">Archetype</span>
                <span className="text-cream/20 uppercase tracking-[0.3em] text-[8px] font-bold">The Fitzrovia Studio</span>
              </div>
            </div>
            <p className="text-cream/40 max-w-sm mb-12 leading-relaxed font-light text-sm">
              We are a collective of sensory architects and botanical engineers dedicated to the precision extraction of rare origin coffees.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'Twitter', 'Vimeo'].map((platform) => (
                <a 
                  key={platform} 
                  href="#" 
                  className="text-cream/20 hover:text-copper transition-colors uppercase text-[9px] tracking-[0.4em] font-bold focus-visible:outline-none focus-visible:text-copper"
                  aria-label={`Follow Archetype Coffee on ${platform}`}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-cream font-serif text-xl italic border-b border-white/5 pb-4">The Archive</h4>
            <ul className="space-y-4">
              {['Origin Stories', 'The Ritual', 'Menu Archive', 'Brew Guides'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-cream/40 hover:text-copper transition-colors uppercase text-[9px] tracking-[0.3em] font-bold focus-visible:outline-none focus-visible:text-copper"
                    aria-label={`View ${item}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-cream font-serif text-xl italic border-b border-white/5 pb-4">Join the Club</h4>
            <p className="text-cream/30 text-[10px] leading-relaxed uppercase tracking-widest font-bold">
              Receive quarterly updates on rare microlot arrivals.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email-subscribe" className="sr-only">Email address</label>
              <input 
                id="email-subscribe"
                type="email" 
                placeholder="YOUR@EMAIL.COM" 
                className="w-full bg-transparent border-b border-copper/30 py-4 text-cream text-[10px] uppercase tracking-widest focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper/20 transition-colors placeholder:text-cream/10"
                required
              />
              <button 
                type="submit"
                className="absolute right-0 bottom-4 text-copper hover:text-cream transition-colors focus-visible:outline-none focus-visible:text-cream"
                aria-label="Subscribe to newsletter"
              >
                <span className="uppercase text-[9px] tracking-[0.4em] font-bold">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-cream/20 text-[8px] uppercase tracking-[0.5em] font-bold">
            &copy; {new Date().getFullYear()} Archetype Coffee Studio. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-cream/20 hover:text-copper transition-colors uppercase text-[8px] tracking-[0.5em] font-bold focus-visible:outline-none focus-visible:text-copper">Privacy Policy</a>
            <a href="#" className="text-cream/20 hover:text-copper transition-colors uppercase text-[8px] tracking-[0.5em] font-bold focus-visible:outline-none focus-visible:text-copper">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button 
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="absolute bottom-10 right-10 w-12 h-12 bg-copper text-espresso flex items-center justify-center hover:bg-copper-gold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-copper"
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>

      {/* Decorative */}
      <div className="absolute top-0 right-0 opacity-[0.02] text-[10rem] font-serif font-bold -translate-y-1/2 translate-x-1/4 pointer-events-none">
        LONDON
      </div>
    </footer>
  );
};

export default Footer;
