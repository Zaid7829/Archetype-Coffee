"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Shared data for beans to ensure stability
const BEAN_COUNT = 12;
const BEAN_DATA = [...Array(BEAN_COUNT)].map(() => ({
  position: [
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 4 - 2
  ] as [number, number, number],
  rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
  scale: 0.1 + Math.random() * 0.1,
  speed: 0.2 + Math.random() * 0.3
}));

const SteamLine = ({ index }: { index: number }) => {
  const lineRef = useRef<THREE.Mesh>(null);
  
  // Create a curved path for steam
  const curve = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 10; i++) {
      points.push(new THREE.Vector3(
        Math.sin(i * 0.5 + index) * 0.1,
        i * 0.2,
        Math.cos(i * 0.5 + index) * 0.1
      ));
    }
    return new THREE.CatmullRomCurve3(points);
  }, [index]);

  useFrame((state) => {
    if (lineRef.current) {
      // Wiggle the steam using elapsed time for consistency
      const time = state.clock.elapsedTime;
      lineRef.current.position.x = Math.sin(time * 0.5 + index) * 0.05;
      lineRef.current.rotation.y = time * 0.2;
      lineRef.current.scale.y = 1 + Math.sin(time + index) * 0.1;
    }
  });

  return (
    <mesh ref={lineRef}>
      <tubeGeometry args={[curve, 20, 0.012, 8, false]} />
      <meshStandardMaterial 
        color="#ffffff" 
        transparent 
        opacity={0.12} 
        emissive="#ffffff" 
        emissiveIntensity={0.5} 
      />
    </mesh>
  );
};

const CoffeeCup = ({ isMobile }: { isMobile: boolean }) => {
  const cupRef = useRef<THREE.Group>(null);

  return (
    <group ref={cupRef}>
      {/* Cup Body */}
      <mesh castShadow={!isMobile} receiveShadow={!isMobile}>
        <cylinderGeometry args={[0.8, 0.62, 1.25, 64]} />
        <meshStandardMaterial 
          color="#f8f8f2" 
          roughness={0.02} 
          metalness={0.15}
        />
      </mesh>
      
      {/* Cup Handle */}
      <mesh position={[0.82, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.32, 0.09, 24, 48, Math.PI]} />
        <meshStandardMaterial color="#f8f8f2" roughness={0.02} />
      </mesh>

      {/* Coffee Surface */}
      <mesh position={[0, 0.58, 0]}>
        <cylinderGeometry args={[0.74, 0.74, 0.06, 32]} />
        <meshStandardMaterial 
          color="#1a0f0a" 
          roughness={0.1}
          metalness={0.6} 
        />
      </mesh>

      {/* Saucer */}
      <mesh position={[0, -0.68, 0]} receiveShadow={!isMobile}>
        <cylinderGeometry args={[1.4, 1.2, 0.12, 64]} />
        <meshStandardMaterial color="#f8f8f2" roughness={0.02} />
      </mesh>

      {/* Animated Steam */}
      <group position={[0, 0.7, 0]}>
        {[...Array(6)].map((_, i) => (
          <SteamLine key={i} index={i} />
        ))}
      </group>
    </group>
  );
};

const CoffeeScene = () => {
  const { mouse, size } = useThree();
  const sceneRef = useRef<THREE.Group>(null);
  
  const isMobile = size.width < 768;
  const beansToRender = isMobile ? BEAN_DATA.slice(0, 6) : BEAN_DATA;

  useFrame(() => {
    if (sceneRef.current) {
      const targetX = mouse.x * 1.5;
      const targetY = mouse.y * 1;
      
      sceneRef.current.position.x += (targetX - sceneRef.current.position.x) * 0.03;
      sceneRef.current.position.y += (targetY - sceneRef.current.position.y) * 0.03;
      
      sceneRef.current.rotation.y += (mouse.x * 0.15 - sceneRef.current.rotation.y) * 0.03;
      sceneRef.current.rotation.x += (-mouse.y * 0.1 - sceneRef.current.rotation.x) * 0.03;
    }
  });

  return (
    <>
      <color attach="background" args={["#0a0a0a"]} />
      
      {/* Cinematic Lighting */}
      <ambientLight intensity={0.2} />
      <spotLight 
        position={[8, 12, 10]} 
        angle={0.2} 
        penumbra={1} 
        intensity={isMobile ? 1200 : 1800} 
        color="#fff4e0"
        castShadow={!isMobile}
        distance={40}
      />
      <rectAreaLight
        width={10}
        height={10}
        intensity={5}
        color="#b87333"
        position={[-5, 5, 5]}
      />
      <pointLight position={[0, 5, -5]} intensity={500} color="#3d2b1f" />
      <pointLight position={[-2, -2, 2]} intensity={200} color="#daa520" />
      
      <group ref={sceneRef}>
        <Float 
          speed={1.5} 
          rotationIntensity={0.3} 
          floatIntensity={0.8}
        >
          <CoffeeCup isMobile={isMobile} />
        </Float>

        {/* Floating Beans */}
        {beansToRender.map((bean, i) => (
          <Float key={i} speed={bean.speed} rotationIntensity={1} floatIntensity={1}>
            <mesh
              position={bean.position}
              rotation={bean.rotation}
              scale={bean.scale}
            >
              <capsuleGeometry args={[0.5, 1, 4, 12]} />
              <meshStandardMaterial color="#3d2b1f" roughness={0.4} />
            </mesh>
          </Float>
        ))}
      </group>

      <Sparkles 
        count={isMobile ? 20 : 40} 
        scale={10} 
        size={isMobile ? 1 : 1.5} 
        speed={0.3} 
        color="#daa520" 
        opacity={0.4}
      />

      <PerspectiveCamera makeDefault position={[0, 1.5, 5]} fov={50} />
    </>
  );
};

export default CoffeeScene;
