"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, MapPin, Navigation, Copy, Check, Info } from 'lucide-react';

const OpeningHours = () => {
  const [copied, setCopied] = useState(false);
  const address = "31 Riding House St, London W1W 7DY, United Kingdom";
  const googleMapsUrl = "https://maps.app.goo.gl/GePTHSQfnDJdXdzh9";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const schedule = [
    { day: "Monday – Friday", hours: "07:30 – 17:00" },
    { day: "Saturday – Sunday", hours: "08:30 – 17:30" }
  ];

  return (
    <section id="hours" className="py-32 bg-espresso relative overflow-hidden border-t border-white/5">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Asset */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 group shadow-2xl"
          >
            <Image 
              src="/images/archetype/location-storefront-vertical.jpg" 
              alt="Archetype Coffee Storefront in Fitzrovia" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-60" />
            
            {/* Floating Info Tag */}
            <div className="absolute bottom-6 left-6 z-10 bg-espresso/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
              <MapPin size={14} className="text-copper" />
              <span className="text-[10px] uppercase tracking-widest text-cream font-bold">Riding House St</span>
            </div>
          </motion.div>

          <div className="space-y-12">
            
            {/* Hours Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-copper font-medium tracking-[0.4em] uppercase text-[10px] mb-6 block">The Schedule</span>
              <h2 className="text-6xl md:text-7xl text-cream font-serif mb-12 leading-[0.9]">
                The Ritual <br /><span className="text-copper italic">Timeline</span>
              </h2>
              
              <div className="space-y-2 mb-16">
                {schedule.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-6 border-b border-white/5 group hover:border-copper/30 transition-all duration-500">
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-copper/40 rounded-full group-hover:scale-150 group-hover:bg-copper transition-all duration-500" />
                      <span className="text-cream/60 font-light tracking-wide text-lg">{item.day}</span>
                    </div>
                    <span className="text-cream font-serif text-3xl group-hover:text-copper transition-all duration-500">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group hover:bg-white/[0.07] transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-copper/10 flex items-center justify-center shrink-0 border border-copper/20">
                    <Info size={16} className="text-copper" />
                  </div>
                  <p className="text-cream/50 text-sm leading-relaxed pt-1">
                    Opening hours may vary — check Google Maps before visiting.
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-matcha/5 rounded-2xl border border-matcha/10 backdrop-blur-sm group hover:bg-matcha/[0.08] transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-matcha/10 flex items-center justify-center shrink-0 border border-matcha/20">
                    <div className="w-2 h-2 bg-matcha rounded-full animate-pulse" />
                  </div>
                  <p className="text-matcha/80 text-sm leading-relaxed pt-1">
                    Small cosy space — takeaway recommended during busy hours.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Address & Actions Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="bg-espresso-light border border-white/10 p-12 md:p-16 rounded-[2.5rem] relative shadow-2xl overflow-hidden group">
                {/* Decorative Pattern */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-copper/5 rounded-full blur-[80px] group-hover:bg-copper/10 transition-all duration-1000" />
                
                <div className="relative z-10">
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-[1px] bg-copper/40" />
                      <span className="text-cream/20 uppercase tracking-[0.4em] text-[9px] font-bold">The Destination</span>
                    </div>
                    <p className="text-cream text-4xl md:text-5xl font-serif leading-[1.1] mb-4">
                      31 Riding House Street
                    </p>
                    <p className="text-cream/40 text-xl font-light tracking-wide uppercase">
                      Fitzrovia, London W1W 7DY
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open location in Google Maps"
                      className="group/btn w-full py-6 bg-copper text-espresso font-bold uppercase tracking-[0.3em] text-[10px] text-center rounded-2xl hover:bg-cream transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-copper/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                    >
                      <span>Open in Google Maps</span>
                      <Navigation size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" aria-hidden="true" />
                    </a>
                    <button 
                      onClick={copyToClipboard}
                      aria-label="Copy address to clipboard"
                      className="w-full py-6 border border-copper/30 text-copper font-bold uppercase tracking-[0.3em] text-[10px] text-center rounded-2xl hover:bg-copper/5 transition-all duration-500 flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                    >
                      <span>{copied ? "Address Copied" : "Copy Address"}</span>
                      {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                    </button>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-copper/20 rounded-tr-[2.5rem] pointer-events-none transition-all duration-700 group-hover:border-copper/40 group-hover:w-40 group-hover:h-40" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-copper/20 rounded-bl-[2.5rem] pointer-events-none transition-all duration-700 group-hover:border-copper/40 group-hover:w-40 group-hover:h-40" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-12 bg-espresso p-6 rounded-2xl border border-white/5 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-copper font-serif text-3xl font-bold">4.9</span>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-copper rounded-full" />
                    ))}
                  </div>
                  <span className="text-[8px] text-cream/30 uppercase tracking-widest font-bold">Google Rating</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default OpeningHours;
