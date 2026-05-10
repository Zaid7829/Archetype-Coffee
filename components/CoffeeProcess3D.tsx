"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Float, Stars, Sparkles } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Helper for beans
const BEAN_COUNT = 10;
const BEAN_DATA = [...Array(BEAN_COUNT)].map(() => ({
  pos: [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1] as [number, number, number],
  rot: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
  scale: 0.08 + Math.random() * 0.05
}));

const StageOverlay = ({ stage }: { stage: number }) => {
  const titles = ["Select", "Grind", "Extract", "Pour", "Serve"];
  const descriptions = [
    "Sourcing the finest single-origin microlots.",
    "Precision micro-calibration for perfect extraction.",
    "93.5°C stable pressure extraction.",
    "Velvety micro-foam textured to perfection.",
    "The perfect archetype in every cup."
  ];
  const stageImages = [
    "/images/archetype/coffee-beans-roastery.jpg",
    "/images/archetype/espresso-machine-brand.jpg",
    "/images/archetype/espresso-machine-detail.jpg",
    "/images/archetype/barista-pourover.jpg",
    "/images/archetype/coffee-pastry-table-thank-you.jpg"
  ];

  const safeStage = Math.max(0, Math.min(stage, titles.length - 1));

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
      {/* Background Side Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`img-${safeStage}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.15, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-0 top-0 bottom-0 w-1/3 hidden lg:block"
        >
          <div className="relative w-full h-full">
            <Image 
              src={stageImages[safeStage]} 
              alt={titles[safeStage]} 
              fill 
              sizes="33vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-transparent to-espresso" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={safeStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center px-6 relative z-20"
        >
          <span className="text-copper font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Stage 0{safeStage + 1}</span>
          <h2 className="text-6xl md:text-8xl font-serif font-light text-cream mb-4 uppercase tracking-tighter">
            {titles[safeStage]}
          </h2>
          <p className="text-cream/50 text-sm md:text-base tracking-[0.2em] uppercase max-w-md mx-auto">
            {descriptions[safeStage]}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Counter Image (Right Side) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`img-right-${safeStage}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute right-0 top-0 bottom-0 w-1/4 hidden lg:block"
        >
          <div className="relative w-full h-full">
            <Image 
              src={stageImages[(safeStage + 1) % stageImages.length]} 
              alt="Next Stage Preview" 
              fill 
              sizes="25vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-espresso via-transparent to-espresso" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ProcessScene = ({ scrollProgress }: { scrollProgress: number }) => {
  const { size } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = size.width < 768;

  useFrame(() => {
    if (!groupRef.current) return;
    
    // Smoothly interpolate group rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, scrollProgress * Math.PI * 2, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, (scrollProgress - 0.5) * -2, 0.05);
  });

  return (
    <group ref={groupRef}>
      {/* STAGE 1: SELECT (Beans) */}
      <group visible={scrollProgress < 0.25}>
        {BEAN_DATA.map((bean, i) => (
          <Float key={i} speed={2} rotationIntensity={2} floatIntensity={1}>
            <mesh position={bean.pos} rotation={bean.rot} scale={bean.scale}>
              <capsuleGeometry args={[0.5, 1, 4, 8]} />
              <meshStandardMaterial color="#3d2b1f" roughness={0.3} />
            </mesh>
          </Float>
        ))}
      </group>

      {/* STAGE 2: GRIND (Box + Moving Beans) */}
      <group visible={scrollProgress >= 0.2 && scrollProgress < 0.45}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#2d1b15" wireframe={!isMobile} />
        </mesh>
        {BEAN_DATA.slice(0, 5).map((bean, i) => (
          <mesh key={i} position={[0, 1 - (scrollProgress * 5 % 1), 0]} scale={0.05}>
            <sphereGeometry />
            <meshStandardMaterial color="#1a0f0a" />
          </mesh>
        ))}
      </group>

      {/* STAGE 3: EXTRACT (Liquid into cup) */}
      <group visible={scrollProgress >= 0.4 && scrollProgress < 0.65}>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.6, 0.5, 0.8, 32]} />
          <meshStandardMaterial color="#f5f5dc" />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1.2, 8]} />
          <meshStandardMaterial color="#2d1b15" emissive="#3d2b1f" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* STAGE 4: POUR (Milk animation) */}
      <group visible={scrollProgress >= 0.6 && scrollProgress < 0.85}>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.6, 0.5, 0.8, 32]} />
          <meshStandardMaterial color="#f5f5dc" />
        </mesh>
        <mesh position={[0.5, 0.8, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.08, 0.08, 1, 8]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
      </group>

      {/* STAGE 5: SERVE (Final Cup) */}
      <group visible={scrollProgress >= 0.8}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <group>
            <mesh>
              <cylinderGeometry args={[0.7, 0.6, 1, 32]} />
              <meshStandardMaterial color="#f5f5dc" />
            </mesh>
            <mesh position={[0.7, 0.1, 0]} rotation={[0, 0, Math.PI/2]}>
              <torusGeometry args={[0.25, 0.08, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#f5f5dc" />
            </mesh>
            <Sparkles count={10} scale={1} size={1} speed={0.5} color="#ffffff" position={[0, 0.6, 0]} />
          </group>
        </Float>
      </group>
    </group>
  );
};

const CoffeeProcess3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check for WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch {
        return false;
      }
    };

    const supported = checkWebGL();
    if (!supported) {
      setTimeout(() => setHasWebGL(false), 0);
    }

    if (!containerRef.current) return;

    // Register GSAP plugins inside useEffect
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          const stage = Math.min(Math.floor(self.progress * 5), 4);
          setActiveStage(stage);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  if (!hasWebGL) {
    return (
      <section className="py-24 bg-espresso text-center">
        <h2 className="text-4xl text-cream mb-8">Our Process</h2>
        <p className="text-cream/50 max-w-xl mx-auto px-6">
          Experience our craft from bean to cup. Our process involves meticulous selection, 
          precision grinding, temperature-stable extraction, and artisanal milk texturing.
        </p>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
      <StageOverlay stage={activeStage} />
      
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 1.5]}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#b87333" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#3d2b1f" />
          
          <ProcessScene scrollProgress={scrollProgress} />
          
          <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-cream/10 z-20">
        <motion.div 
          className="h-full bg-copper"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </section>
  );
};

export default CoffeeProcess3D;
