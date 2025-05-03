
  import React, { useRef, useEffect } from "react";
  import { Canvas, useFrame } from "@react-three/fiber";
  import { useSpring, animated } from "@react-spring/three";
  import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
  import { motion } from "framer-motion";

  const AnimatedSphere = () => {
    const meshRef = useRef();
    
    const [springs, api] = useSpring(() => ({
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      config: { mass: 2, tension: 200, friction: 40 }
    }));

    useEffect(() => {
      let timeout;
      const animate = () => {
        api.start({
          scale: [1 + Math.random() * 0.2, 1 + Math.random() * 0.2, 1 + Math.random() * 0.2],
          rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
          delay: 2000,
        });
        timeout = setTimeout(animate, 3000);
      };
      
      animate();
      return () => clearTimeout(timeout);
    }, [api]);

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.002;
        meshRef.current.rotation.z += 0.001;
      }
    });

    return (
      <animated.mesh
        ref={meshRef}
        position={springs.position}
        scale={springs.scale}
        rotation={springs.rotation}
      >
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </animated.mesh>
    );
  };

  const ThreeScene = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-[400px] md:h-[500px]"
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[-10, 0, -20]} intensity={0.5} color="#3b82f6" />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </motion.div>
    );
  };

  export default ThreeScene;
  