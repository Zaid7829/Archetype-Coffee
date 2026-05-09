"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import { reviews } from '@/lib/menu-data';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-32 bg-espresso relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-20 gap-8">
          <div className="text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-copper font-medium tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              The Community
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl text-cream font-serif font-light leading-tight"
            >
              Voices of <br />
              <span className="text-copper italic">Archetype</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-espresso-light border border-copper/20 p-10 rounded-2xl text-center min-w-[280px] relative group overflow-hidden"
          >
            <div className="relative z-10">
              <span className="text-7xl md:text-8xl font-serif text-copper-gold font-bold block mb-2 leading-none">4.9</span>
              <div className="flex justify-center mb-4 text-copper-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} className={i === 4 ? "opacity-50" : ""} />
                ))}
              </div>
              <p className="text-cream/40 uppercase tracking-[0.2em] text-[10px] font-bold">Based on 388 reviews</p>
              <div className="mt-6 flex items-center justify-center text-cream/60 gap-2 text-xs" aria-label="Business location: 31 Riding House Street, London">
                <MapPin size={14} className="text-copper" aria-hidden="true" />
                <span>31 Riding House St, London</span>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-copper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        </div>

        {/* Review Cards Grid - Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 pb-12 lg:pb-0 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] lg:min-w-0 snap-center bg-espresso-light p-10 border border-cream/5 flex flex-col relative group hover:border-copper/30 transition-all duration-500 rounded-xl"
            >
              <Quote className="text-copper/10 absolute top-8 right-8 group-hover:text-copper/20 transition-colors duration-500" size={48} />
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-copper text-copper" />
                  ))}
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[9px] uppercase tracking-widest text-cream/40 font-bold">Verified</span>
                </div>
              </div>

              <p className="text-cream/80 text-lg mb-8 font-light leading-relaxed italic">
                &quot;{review.comment}&quot;
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center text-copper font-serif italic text-xs">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-cream font-medium text-xs tracking-tight">{review.author}</h4>
                    <p className="text-cream/20 text-[8px] uppercase tracking-widest font-bold">Local Guide</p>
                  </div>
                </div>
                <div className="text-cream/10 italic font-serif text-2xl leading-none italic group-hover:text-copper/40 transition-colors">“</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/5 pt-16">
          {[
            { label: 'Avg Rating', value: '4.9' },
            { label: 'Total Reviews', value: '388' },
            { label: 'Coffee Grade', value: '88+' },
            { label: 'Fitzrovia Home', value: 'Since 2014' },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left group cursor-default">
              <span className="block text-cream/20 uppercase tracking-[0.4em] text-[9px] font-bold mb-4 group-hover:text-copper/40 transition-colors">{stat.label}</span>
              <span className="text-3xl font-serif text-cream group-hover:text-copper transition-colors">{stat.value}</span>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a 
            href="https://maps.app.goo.gl/GePTHSQfnDJdXdzh9"
            target="_blank"
            rel="noopener noreferrer" 
            aria-label="Read all reviews on Google Maps"
            className="group relative inline-flex items-center gap-4 text-cream/40 hover:text-copper transition-colors uppercase text-[9px] tracking-[0.4em] font-bold focus-visible:outline-none focus-visible:text-copper"
          >
            <div className="w-12 h-[1px] bg-copper/20 group-hover:w-16 transition-all" aria-hidden="true" />
            Join the conversation
            <div className="w-12 h-[1px] bg-copper/20 group-hover:w-16 transition-all" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-copper/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-matcha/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default ReviewsSection;
