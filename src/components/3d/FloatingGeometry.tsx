import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function FloatingGeometry() {
	const meshRef = useRef<THREE.Mesh>(null);
	useFrame((state) => {
		if (!meshRef.current) return;
		meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
		meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
		meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
	});
	return <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}><mesh ref={meshRef} position={[3.8, 0.2, -1.5]}><icosahedronGeometry args={[1.15, 1]} /><meshStandardMaterial color="#171717" metalness={0.85} roughness={0.22} wireframe /></mesh></Float>;
}
