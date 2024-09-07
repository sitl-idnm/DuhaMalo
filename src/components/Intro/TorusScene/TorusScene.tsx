import styles from './styles.module.css'
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const RotatingTorus = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const torusRef = useRef();

  // Update size on window resize
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Вращение торуса
  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.z += 0.0025;
    }
  });

  return (
    <mesh ref={torusRef}>
      <group>
        <lineSegments>
          <edgesGeometry args={[new THREE.TorusGeometry(10, 4, 16, 70)]} />
          <lineBasicMaterial color="white" />
        </lineSegments>
      </group>
    </mesh>
  );
};

export const TorusScene = () => {
  return (
    <div className={styles.torus}>
      <Canvas
        camera={{ position: [10, -20, 20], fov: 75 }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* Вращающийся торус */}
        <RotatingTorus />
      </Canvas>
    </div>
  );
};
