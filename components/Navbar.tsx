"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import ArchetypeBrand from './ArchetypeBrand';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll logic for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] h-20 md:h-16 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-espresso/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-full flex items-center justify-between relative">
        
        {/* Left: Branding */}
        <div className="flex-1 flex justify-start">
          <motion.a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer focus-visible:outline-none z-50"
            aria-label="Archetype Coffee Home"
          >
            <ArchetypeBrand variant="horizontal" className="scale-[0.55] md:scale-[0.65] origin-left" />
          </motion.a>
        </div>

        {/* Center: Navigation Links (Apple-style alignment) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative group text-cream/60 hover:text-cream text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none"
            >
              <span className="relative z-10">{link.name}</span>
              {/* Subtle Indicator */}
              <motion.span 
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-copper rounded-full transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" 
              />
              {/* Subtle Glow */}
              <span className="absolute inset-0 blur-lg bg-copper/0 group-hover:bg-copper/10 transition-all duration-500 rounded-full scale-150" />
            </motion.a>
          ))}
        </div>

        {/* Right: Experience Button */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(184, 115, 51, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex items-center gap-2 px-6 py-2 bg-copper hover:bg-copper-gold text-espresso text-[10px] font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-500"
          >
            Experience
            <ArrowRight size={12} className="mt-0.5" />
          </motion.a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-cream p-2 hover:bg-white/5 rounded-full transition-colors z-[120]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (Apple Glass Style) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-espresso/90 z-[110] md:hidden pt-24"
          >
            <div className="container mx-auto px-10 h-full flex flex-col">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif text-cream hover:text-copper transition-colors border-b border-white/5 pb-4 flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-copper" />
                  </motion.a>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-auto pb-16"
              >
                <a
                  href="#menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-5 bg-copper text-espresso text-center font-bold uppercase tracking-[0.3em] text-[12px] rounded-full shadow-[0_10px_40px_rgba(184,115,51,0.3)]"
                >
                  Join the Ritual
                </a>
                <div className="mt-10 flex justify-between items-center px-2">
                  <p className="text-cream/30 text-[10px] uppercase tracking-[0.4em] font-medium">Archetype Coffee Studio</p>
                  <div className="flex gap-4">
                    <div className="w-1 h-1 bg-copper rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-copper/40 rounded-full" />
                    <div className="w-1 h-1 bg-copper/20 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
