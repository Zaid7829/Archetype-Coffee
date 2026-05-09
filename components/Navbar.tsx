"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? 'bg-espresso/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <motion.a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-lg p-1"
          aria-label="Archetype Coffee Home"
        >
          <div className="w-10 h-10 border border-copper/30 flex items-center justify-center text-copper font-serif italic text-xl group-hover:bg-copper group-hover:text-espresso transition-all duration-500 rounded-lg">A</div>
          <div className="flex flex-col">
            <span className="text-cream uppercase tracking-[0.5em] text-[11px] font-bold group-hover:text-copper transition-colors">Archetype</span>
            <span className="text-cream/20 uppercase tracking-[0.3em] text-[7px] font-bold">Specialty Coffee</span>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-cream/40 hover:text-copper uppercase tracking-[0.4em] text-[9px] font-bold transition-all duration-300 relative group focus-visible:outline-none focus-visible:text-copper focus-visible:ring-1 focus-visible:ring-copper/20"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-copper group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
          
          <motion.a
            href="#menu"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-8 py-3 bg-copper text-espresso uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-cream transition-all duration-500 shadow-2xl shadow-copper/20 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
          >
            Experience
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-copper p-2 hover:bg-white/5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-espresso/95 backdrop-blur-2xl border-l border-white/10 z-[110] md:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full p-12">
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-copper p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper rounded-lg"
                  aria-label="Close menu"
                >
                  <X size={32} />
                </button>
              </div>
              
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-cream/80 hover:text-copper text-4xl font-serif italic transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href="#menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-5 bg-copper text-espresso text-center font-bold uppercase tracking-[0.3em] text-[11px] rounded-xl"
                >
                  Join the Ritual
                </a>
                <p className="mt-8 text-cream/20 text-[9px] uppercase tracking-[0.4em] text-center font-bold">Archetype Coffee Studio</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
