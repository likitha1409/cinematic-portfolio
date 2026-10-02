import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";
import FloatingGeometry from "./FloatingGeometry";
import Lights from "./Lights";

function SceneContent() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 8]}
        fov={45}
      />

      <Lights />
      <Particles count={window.innerWidth < 700 ? 350 : 900} />
      <FloatingGeometry />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <SceneContent />
    </Canvas>
  );
}