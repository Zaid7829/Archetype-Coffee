"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: '/images/archetype/art-wall-coffee-cup.jpg',
    alt: 'Archetype Coffee Cup against Art Wall',
    span: 'col-span-1 row-span-1'
  },
  {
    src: '/images/archetype/interior-art-speaker.jpg',
    alt: 'Premium Audio and Art in the Studio',
    span: 'col-span-1 row-span-2'
  },
  {
    src: '/images/archetype/art-wall-hands-cups.jpg',
    alt: 'Archetype Coffee Community',
    span: 'col-span-1 row-span-1'
  },
  {
    src: '/images/archetype/art-wall-london-frame.jpg',
    alt: 'Archetype London Vibe',
    span: 'col-span-1 row-span-1'
  },
  {
    src: '/images/archetype/reading-coffee-cosy.jpg',
    alt: 'Cosy Reading Corner at Archetype',
    span: 'col-span-2 row-span-1'
  }
];

const GallerySection = () => {
  return (
    <section className="py-32 bg-espresso relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-copper font-medium tracking-[0.4em] uppercase text-[10px] mb-4 block"
          >
            The Atmosphere
          </motion.span>
          <h2 className="text-5xl md:text-7xl text-cream font-serif font-light">
            Studio <span className="text-copper italic">Moments.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className={`relative overflow-hidden rounded-2xl group border border-white/5 ${image.span}`}
            >
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
                <span className="text-cream/60 text-[10px] uppercase tracking-widest font-bold">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
