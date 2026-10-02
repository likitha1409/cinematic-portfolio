import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Particles({ count = 900 }: { count?: number }) {
	const pointsRef = useRef<THREE.Points>(null);
	const positions = useMemo(() => {
		const array = new Float32Array(count * 3);
		for (let index = 0; index < count; index += 1) {
			const offset = index * 3;
			array[offset] = (Math.random() - 0.5) * 18;
			array[offset + 1] = (Math.random() - 0.5) * 10;
			array[offset + 2] = (Math.random() - 0.5) * 10;
		}
		return array;
	}, [count]);

	useFrame((state) => {
		if (!pointsRef.current) return;
		pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
		pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
	});

	return <points ref={pointsRef}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial size={0.025} color="#c9a227" transparent opacity={0.65} sizeAttenuation /></points>;
}
