"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// No icons used in this component yet

const signatureDrinks = [
  {
    name: 'The Fitzrovia Flat White',
    desc: 'Our signature espresso with micro-foamed milk and a flaky croissant.',
    price: '£4.20',
    color: '#b87333',
    tag: 'Signature',
    image: '/images/archetype/flat-white-croissant.jpg'
  },
  {
    name: 'Ceremonial Iced Matcha',
    desc: 'Pure ceremonial grade matcha over ice with organic oat milk.',
    price: '£5.50',
    color: '#6b8e23',
    tag: 'Refreshing',
    image: '/images/archetype/iced-matcha-latte.jpg'
  },
  {
    name: 'Artisan Pastry Box',
    desc: 'A curated selection of our daily baked goods and seasonal treats.',
    price: '£12.00',
    color: '#c21e56',
    tag: 'Daily Bake',
    image: '/images/archetype/pastry-display.jpg'
  },
  {
    name: 'Archetype Selection',
    desc: 'Our latest single-origin microlot, precision roasted in-house.',
    price: '£18.00',
    color: '#4b0082',
    tag: 'Retail',
    image: '/images/archetype/coffee-beans-roastery.jpg'
  }
];

const SignatureDrinks = () => {
  return (
    <section id="signature" className="py-32 bg-espresso relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-copper font-medium tracking-[0.3em] uppercase text-xs mb-4 block">The Alchemist&apos;s Selection</span>
            <h2 className="text-5xl md:text-7xl text-cream font-serif leading-tight">
              Signature <span className="text-copper italic">Formulations.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-cream/40 uppercase text-[10px] tracking-[0.4em] pb-4 border-b border-copper/20"
          >
            Batch 001 — Summer Rituals
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureDrinks.map((drink, index) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-espresso-light/30 border border-white/5 rounded-2xl hover:border-copper/30 transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src={drink.image}
                  alt={drink.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <span className="text-[9px] uppercase tracking-widest text-cream bg-espresso/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-bold">
                    {drink.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 relative z-10 flex flex-col h-[220px]">
                <h3 className="text-2xl font-serif text-cream mb-3 group-hover:text-copper transition-colors duration-500">{drink.name}</h3>
                <p className="text-cream/40 text-sm mb-6 leading-relaxed font-light">{drink.desc}</p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <span className="text-copper font-bold text-lg font-serif italic">{drink.price}</span>
                  <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-copper transition-all duration-500" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] bg-copper w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none text-[15rem] font-serif font-black italic transform -rotate-90 -translate-x-1/2 tracking-tighter">
        ARCHIVE.001
      </div>
    </section>
  );
};

export default SignatureDrinks;
