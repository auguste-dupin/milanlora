'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei'; // Import Line
import { Color, IcosahedronGeometry, EdgesGeometry } from 'three'; // Import EdgesGeometry

function WireframeIcosahedron() {
  const meshRef = useRef();
  const [accentColor, setAccentColor] = useState('#06b6d4'); // Default fallback

  useEffect(() => {
    const colorValue = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent-color')
      .trim();
    if (colorValue) {
      setAccentColor(colorValue);
    }
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  const wireframePoints = useMemo(() => {
    const geometry = new IcosahedronGeometry(2, 0);
    const edges = new EdgesGeometry(geometry);
    const positions = edges.attributes.position.array;
    const points = [];
    for (let i = 0; i < positions.length; i += 3) {
      points.push([positions[i], positions[i + 1], positions[i + 2]]);
    }
    return points;
  }, []);

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 0]} />
      <meshStandardMaterial color={0x000000} emissive={0x000000} transparent={true} opacity={0} depthWrite={false} />
      
      <Line 
        points={wireframePoints} 
        color={accentColor} 
        lineWidth={2} // This will now work for thickness
      />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <WireframeIcosahedron />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}