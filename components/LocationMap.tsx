"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, ExternalLink, Clock } from 'lucide-react';

const LocationMap = () => {
  const [mapMode, setMapMode] = useState<'colored' | 'satellite'>('colored');
  const [isLoaded, setIsLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const address = "31 Riding House St, London W1W 7DY, United Kingdom";
  const googleMapsUrl = "https://maps.app.goo.gl/GePTHSQfnDJdXdzh9";

  const mapUrls = {
    colored: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.721!2d-0.1409618!3d51.5185577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad098696951%3A0x7d6f5f3e95679e9a!2s31%20Riding%20House%20St%2C%20London%20W1W%207DY!5e0!3m2!1sen!2suk!4v1715241600000!5m2!1sen!2suk",
    satellite: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.721!2d-0.1409618!3d51.5185577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad098696951%3A0x7d6f5f3e95679e9a!2s31%20Riding%20House%20St%2C%20London%20W1W%207DY!5e1!3m2!1sen!2suk!4v1715241600000!5m2!1sen!2suk"
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-40 bg-espresso relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-copper font-medium tracking-[0.4em] uppercase text-[10px] mb-6 block"
          >
            The Destination
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl text-cream font-serif font-light leading-none"
          >
            Find us in <span className="text-copper italic">Fitzrovia</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-espresso-light border border-white/5 p-10 rounded-2xl relative overflow-hidden group flex-grow">
              <div className="absolute top-0 right-0 p-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-matcha/10 border border-matcha/20 rounded-full">
                  <div className="w-1.5 h-1.5 bg-matcha rounded-full animate-pulse" />
                  <span className="text-[9px] font-bold text-matcha uppercase tracking-widest">Live Studio</span>
                </div>
              </div>

              <div className="h-full flex flex-col justify-center">
                <h3 className="text-copper font-serif text-4xl mb-8 italic">The Fitzrovia Studio</h3>
                <p className="text-cream/60 text-lg leading-relaxed font-light mb-12">
                  Tucked away on Riding House Street, our studio is a minimalist sanctuary designed for the appreciation of specialty coffee.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-cream/40 text-sm">
                    <div className="w-2 h-[1px] bg-copper/40" />
                    <span>3 Minute Walk from Oxford Circus</span>
                  </div>
                  <div className="flex items-center gap-4 text-cream/40 text-sm">
                    <div className="w-2 h-[1px] bg-copper/40" />
                    <span>Near the BBC Broadcasting House</span>
                  </div>
                </div>
              </div>

              {/* Decorative detail */}
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-copper/5 rounded-full blur-[60px] pointer-events-none" />
            </div>

            {/* Quick Context Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 transition-all duration-500">
                <span className="block text-cream/60 text-sm mb-2 font-serif italic">Fitzrovia</span>
                <span className="text-[9px] text-cream/20 uppercase tracking-[0.3em] font-bold">The District</span>
              </div>
              <div className="p-8 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 transition-all duration-500">
                <span className="block text-cream/60 text-sm mb-2 font-serif italic">W1W 7DY</span>
                <span className="text-[9px] text-cream/20 uppercase tracking-[0.3em] font-bold">Postcode</span>
              </div>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative aspect-square lg:aspect-auto min-h-[500px] lg:min-h-full bg-espresso-light border border-white/5 rounded-3xl overflow-hidden shadow-2xl group"
          >
            {/* Map Mode Toggle */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-espresso/80 backdrop-blur-xl p-1.5 rounded-full border border-white/10 flex gap-1 shadow-2xl" role="tablist" aria-label="Map display mode">
                <button 
                  role="tab"
                  aria-selected={mapMode === 'colored'}
                  aria-label="Show colored map"
                  onClick={() => setMapMode('colored')}
                  className={`px-6 py-2.5 rounded-full text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper ${
                    mapMode === 'colored' 
                    ? 'bg-copper text-espresso shadow-lg' 
                    : 'text-cream/30 hover:text-cream'
                  }`}
                >
                  Coloured
                </button>
                <button 
                  role="tab"
                  aria-selected={mapMode === 'satellite'}
                  aria-label="Show satellite map"
                  onClick={() => setMapMode('satellite')}
                  className={`px-6 py-2.5 rounded-full text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper ${
                    mapMode === 'satellite' 
                    ? 'bg-copper text-espresso shadow-lg' 
                    : 'text-cream/30 hover:text-cream'
                  }`}
                >
                  Satellite
                </button>
              </div>
            </div>

            {/* Loading Overlay */}
            {!isLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-espresso">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-16 h-[1px] bg-copper/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-copper animate-loading-bar" />
                  </div>
                  <span className="text-copper/40 uppercase tracking-[0.6em] text-[10px] font-bold animate-pulse">Sourcing Coordinates</span>
                </div>
              </div>
            )}
            
            <iframe
              src={mapUrls[mapMode]}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Archetype Coffee Studio ${mapMode} map`}
              onLoad={() => setIsLoaded(true)}
              className={`transition-all duration-1000 w-full h-full grayscale brightness-[0.7] contrast-[1.2] group-hover:grayscale-[0.5] group-hover:brightness-[0.8] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Floating UI Detail */}
            <div className="absolute bottom-8 right-8 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <div className="bg-espresso/90 backdrop-blur-md p-5 border border-copper/20 rounded-2xl shadow-2xl">
                <div className="w-10 h-10 border border-copper/30 rounded-xl flex items-center justify-center">
                  <ExternalLink className="text-copper" size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Visual Accents */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-copper/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-64 h-64 bg-matcha/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default LocationMap;
