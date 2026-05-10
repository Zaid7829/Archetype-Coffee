"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import GallerySection from '@/components/GallerySection';

import Navbar from '@/components/Navbar';
import SignatureDrinks from '@/components/SignatureDrinks';
import MenuSection from '@/components/MenuSection';
import ReviewsSection from '@/components/ReviewsSection';
import OpeningHours from '@/components/OpeningHours';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';

import VideoHero from '@/components/VideoHero';

const CoffeeProcess3D = dynamic(() => import('@/components/CoffeeProcess3D'), { 
  ssr: false,
  loading: () => <div className="h-screen bg-espresso flex items-center justify-center text-copper uppercase tracking-widest text-[10px]">Initializing Ritual...</div>
});

const AboutSection = () => {
  return (
    <section id="about" className="py-40 bg-espresso relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center text-shadow-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-copper font-medium tracking-[0.4em] uppercase text-[10px] mb-6 block">The Archetype Philosophy</span>
          <h2 className="text-6xl md:text-8xl text-cream mb-10 leading-[0.9] font-serif">Beyond the <span className="text-copper italic">Bean.</span></h2>
          <p className="text-cream/70 text-xl mb-8 leading-relaxed font-light">
            Founded in the historic heart of Fitzrovia, Archetype Coffee is the culmination of a decade-long obsession with the molecular biology of coffee and the architecture of flavor.
          </p>
          <p className="text-cream/40 text-base mb-12 leading-relaxed max-w-lg">
            We source exclusively from single-origin microlots, ensuring every harvest tells a unique story. Our roasting process is a delicate balance of precision engineering and sensory intuition.
          </p>
          <div className="flex flex-wrap gap-12">
            <div>
              <span className="block text-5xl font-serif text-copper font-bold mb-2">100%</span>
              <span className="text-cream/20 uppercase text-[9px] tracking-[0.3em] font-bold">Traceable</span>
            </div>
            <div>
              <span className="block text-5xl font-serif text-copper font-bold mb-2">0.1g</span>
              <span className="text-cream/20 uppercase text-[9px] tracking-[0.3em] font-bold">Precision</span>
            </div>
            <div>
              <span className="block text-5xl font-serif text-copper font-bold mb-2">4.9/5</span>
              <span className="text-cream/20 uppercase text-[9px] tracking-[0.3em] font-bold">Community</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid grid-cols-2 gap-4 h-[600px]"
        >
          {/* Main Large Image */}
          <div className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl border border-white/5 group shadow-2xl">
            <Image 
              src="/images/archetype/about-interior-bar.jpg" 
              alt="Archetype Coffee Bar Interior" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
          </div>

          {/* Secondary Top Image */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl border border-white/5 group shadow-xl">
            <Image 
              src="/images/archetype/interior-counter-dog.jpg" 
              alt="Cosy atmosphere at the counter" 
              fill 
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
          </div>

          {/* Secondary Bottom Image */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl border border-white/5 group shadow-xl">
            <Image 
              src="/images/archetype/interior-seating-guests.jpg" 
              alt="Guests enjoying the Fitzrovia Studio" 
              fill 
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-10 -left-10 z-20 bg-espresso-light border border-copper/20 p-8 rounded-2xl backdrop-blur-xl shadow-2xl hidden md:block">
            <span className="block text-4xl font-serif text-copper italic mb-2">Since 2014</span>
            <span className="text-cream/30 uppercase tracking-[0.4em] text-[9px] font-bold">Fitzrovia, London</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { title: 'The Selection', desc: 'Sourcing single-origin beans from ethical microlots.' },
    { title: 'The Roast', desc: 'Precision-controlled profiling for optimal flavor extraction.' },
    { title: 'The Grind', desc: 'Micro-calibrated uniformity for a balanced cup.' },
    { title: 'The Brew', desc: 'Temperature-stable extraction at 93.5°C.' }
  ];

  return (
    <section id="process" className="py-24 bg-espresso-light relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl text-cream">The <span className="text-copper">Ritual</span></h2>
          <div className="w-16 h-[2px] bg-copper mt-4"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-cream/5 -translate-x-1/2"></div>
          
          <div className="space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-copper border-4 border-espresso-light rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(184,115,51,0.5)]"></div>
                
                <div className="w-full md:w-1/2 pl-12 md:px-20 text-left md:text-right">
                  <div className={i % 2 === 0 ? 'md:text-right' : 'md:text-left'}>
                    <span className="text-copper font-serif italic text-4xl mb-2 block">0{i + 1}</span>
                    <h3 className="text-2xl font-bold text-cream mb-4 uppercase tracking-widest">{step.title}</h3>
                    <p className="text-cream/50 max-w-sm ml-auto mr-0 md:mr-auto md:ml-0">{step.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  useEffect(() => {
    // Register GSAP plugins inside useEffect for SSR safety
    gsap.registerPlugin(ScrollTrigger);
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal animations for sections
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        gsap.fromTo(section, 
          { opacity: 0 },
          { 
            opacity: 1, 
            duration: 1.5,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    });

    return () => {
      ctx.revert(); // Cleanup GSAP animations
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <VideoHero />
      <AboutSection />
      <SignatureDrinks />
      <GallerySection />
      <MenuSection />
      <CoffeeProcess3D />
      <ProcessSection />
      <ReviewsSection />
      <OpeningHours />
      <LocationMap />
      <Footer />
    </main>
  );
}
