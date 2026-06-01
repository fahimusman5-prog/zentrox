import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Screen({ position, rotation, color, scale = 1 }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <boxGeometry args={[2.25, 3.1, 0.08]} />
        <meshStandardMaterial color="#071426" metalness={0.38} roughness={0.24} />
      </mesh>
      <mesh position={[0, 0.85, 0.055]}>
        <planeGeometry args={[1.75, 0.72]} />
        <meshBasicMaterial color={color} transparent opacity={0.82} />
      </mesh>
      <mesh position={[-0.42, -0.08, 0.056]}>
        <planeGeometry args={[0.86, 1.35]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
      </mesh>
      <mesh position={[0.54, -0.08, 0.056]}>
        <planeGeometry args={[0.66, 1.35]} />
        <meshBasicMaterial color="#35d5ff" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function DeviceCluster() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.38) * 0.22;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.72) * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} floatIntensity={0.55}>
        <Screen position={[-1.55, 0, 0]} rotation={[0.05, 0.44, -0.06]} color="#057cff" />
      </Float>
      <Float speed={1.5} floatIntensity={0.48}>
        <Screen position={[0.7, 0.18, 0.25]} rotation={[-0.02, -0.24, 0.05]} color="#35d5ff" scale={1.12} />
      </Float>
      <Float speed={1.05} floatIntensity={0.35}>
        <Screen position={[2.3, -0.14, -0.35]} rotation={[0.08, -0.72, 0.04]} color="#ff8a00" scale={0.82} />
      </Float>
    </group>
  );
}

export default function ShowcaseScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.2], fov: 44 }} performance={{ min: 0.5 }}>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={1.35} />
      <pointLight position={[3, 4, 4]} intensity={24} color="#35d5ff" />
      <pointLight position={[-4, -3, 3]} intensity={12} color="#ff8a00" />
      <DeviceCluster />
    </Canvas>
  );
}
