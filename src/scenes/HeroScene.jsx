import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function BrandObject({ logoUrl }) {
  const group = useRef();
  const texture = useLoader(THREE.TextureLoader, logoUrl);
  const target = useMemo(() => new THREE.Vector2(), []);

  React.useEffect(() => {
    const handleMove = (event) => {
      target.x = (event.clientX / window.innerWidth - 0.5) * 0.34;
      target.y = (event.clientY / window.innerHeight - 0.5) * 0.34;
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [target]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += 0.006;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, target.y, 0.035);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -target.x, 0.035);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 3.2, 0.18]} />
        <meshStandardMaterial color="#071426" metalness={0.6} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0, 0.101]}>
        <circleGeometry args={[1.36, 96]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      <mesh rotation={[0.7, 0.2, 0.2]} position={[0, 0, -0.15]}>
        <torusGeometry args={[2.15, 0.018, 8, 96]} />
        <meshBasicMaterial color="#35d5ff" />
      </mesh>
      <mesh rotation={[-0.4, -0.8, 0.25]} position={[0, 0, -0.22]}>
        <torusGeometry args={[2.48, 0.014, 8, 96]} />
        <meshBasicMaterial color="#057cff" />
      </mesh>
    </group>
  );
}

export default function HeroScene({ logoUrl }) {
  return (
    <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 7], fov: 42 }} performance={{ min: 0.5 }}>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={1.1} />
      <pointLight position={[3, 4, 5]} intensity={22} color="#35d5ff" />
      <pointLight position={[-4, -2, 3]} intensity={12} color="#057cff" />
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.42}>
        <BrandObject logoUrl={logoUrl} />
      </Float>
      <Environment preset="city" />
    </Canvas>
  );
}
