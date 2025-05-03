
  import React, { useRef, useMemo } from "react";
  import { Canvas, useFrame } from "@react-three/fiber";
  import { Text3D, Center, OrbitControls } from "@react-three/drei";
  import * as THREE from 'three';

  const AIXLogo = () => {
    const meshRef = useRef();
    
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.004; // Slightly slower rotation
        const time = state.clock.getElapsedTime();
        meshRef.current.position.y = Math.sin(time * 1.2) * 0.08; // Slower float
      }
    });

    const material = useMemo(() => new THREE.MeshStandardMaterial({
      color: '#00F0FF', // Neon Blue
      emissive: '#A020F0', // Electric Purple
      emissiveIntensity: 0.7,
      metalness: 0.7,
      roughness: 0.4,
      wireframe: false, // Ensure wireframe is off unless desired
    }), []);

    return (
      <group ref={meshRef}>
        <Center>
          <Text3D
            font={"/fonts/Space Grotesk_Bold.json"} 
            size={1.5}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            material={material}
          >
            X
          </Text3D>
        </Center>
      </group>
    );
  };

  const Hero3DScene = () => {
    return (
      <div className="w-full h-[350px] md:h-[450px] relative cursor-grab active:cursor-grabbing">
         <div className="absolute inset-0 hero-gradient-bg z-0"></div>
         <Canvas 
            camera={{ position: [0, 1, 5], fov: 50 }} 
            className="relative z-10"
            gl={{ antialias: true, alpha: true }}
            shadows // Enable shadows if needed
         >
            <ambientLight intensity={0.3} />
            <directionalLight 
              position={[5, 8, 5]} 
              intensity={1.0} 
              castShadow 
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <pointLight position={[-5, -5, -5]} intensity={0.6} color="#A020F0" /> 
            <pointLight position={[0, 5, 0]} intensity={0.9} color="#00F0FF" /> 
            <React.Suspense fallback={null}>
              <AIXLogo />
            </React.Suspense>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.6} // Slightly slower auto-rotate
              maxPolarAngle={Math.PI / 2} 
              minPolarAngle={Math.PI / 3}
            />
             {/* Optional: Add a subtle fog */}
             {/* <fog attach="fog" args={['#0D0D0D', 5, 15]} /> */}
         </Canvas>
      </div>
    );
  };

  export default Hero3DScene;
  