import styles from './styles.module.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const RotatingTorus = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Указываем точный тип для рефа как Mesh из Three.js
  const torusRef = useRef<THREE.Mesh>(null);

  // Обновление размера окна при изменении размеров
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
          {/* Исправлены аргументы для edgesGeometry */}
          <edgesGeometry attach="geometry" args={[new THREE.TorusGeometry(17, 8, 16, 30)]} />
          <lineBasicMaterial attach="material" color="white" />
        </lineSegments>
      </group>
    </mesh>
  );
};

export const TorusScene = () => {
  return (
    <div className={styles.torus}>
      <Canvas
        camera={{ position: [13, -30, 25], fov: 75 }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* Вращающийся торус */}
        <RotatingTorus />
      </Canvas>
    </div>
  );
};
