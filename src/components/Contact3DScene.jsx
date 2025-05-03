import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';

function Model() {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t / 4) / 8;
    meshRef.current.rotation.y = Math.sin(t / 4) / 8;
    meshRef.current.rotation.z = Math.sin(t / 4) / 8;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;

    if (materialRef.current) {
      const hue = (0.75 + Math.sin(t * 0.5) * 0.1) % 1;
      materialRef.current.color.setHSL(hue, 0.8, 0.55);
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshPhysicalMaterial
        ref={materialRef}
        metalness={1}
        roughness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.1}
        reflectivity={1}
        transmission={0.1} // slight glassiness
        ior={1.4}
        emissive="#6b21a8"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Removed background color for full transparency */}
        
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.2}
          penumbra={1}
          intensity={2}
          color="#c084fc"
        />
        <spotLight
          position={[-10, -10, -10]}
          angle={0.2}
          penumbra={1}
          intensity={1.5}
          color="#9333ea"
        />
        <pointLight position={[0, 5, 0]} intensity={0.4} color="#d946ef" />

        {/* Reflections + soft contact shadow */}
        <Environment preset="night" />
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.3}
          width={10}
          height={10}
          blur={1.5}
          far={5}
        />

        <Model />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
