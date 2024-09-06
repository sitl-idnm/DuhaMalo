// import { Canvas } from '@react-three/fiber';
// import { Edges, OrbitControls } from '@react-three/drei';
// import styles from './styles.module.css';
// import * as THREE from 'three';

// const Torus = () => {
//   return (
//     <group>
//       <lineSegments>
//         <edgesGeometry args={[new THREE.TorusGeometry(10, 4, 16, 26)]} />
//         <lineBasicMaterial color="white" />
//       </lineSegments>
//     </group>
//   );
// };

// export const TorusScene = () => {
//   return (
//     <Canvas
//       className={styles.hui}
//       camera={{ position: [10, -20, 20], fov: 75 }}
//       style={{ height: '600px', width: '700px' }}
//     >
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <Torus />
//       <OrbitControls />
//     </Canvas>
//   );
// };

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const RotatingTorus = () => {
  const torusRef = useRef(null);

  // Вращение торуса
  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.005; // Вращение по оси Y
      torusRef.current.rotation.x += 0.0025; // Вращение по оси X (по желанию)
    }
  });

  return (
    <mesh ref={torusRef}>
      <group>
        <lineSegments>
          <edgesGeometry args={[new THREE.TorusGeometry(10, 4, 16, 26)]} />
          <lineBasicMaterial color="white" />
        </lineSegments>
      </group>
    </mesh>
  );
};

export const TorusScene = () => {
  return (
    <Canvas
      camera={{ position: [10, -20, 20], fov: 75 }}
      style={{ height: '600px', width: '700px' }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* Вращающийся торус */}
      <RotatingTorus />
    </Canvas>
  );
};
