export default function Lights() {
	return <><ambientLight intensity={0.25} /><pointLight position={[4, 3, 4]} intensity={25} color="#c9a227" distance={12} /><pointLight position={[-4, -2, 2]} intensity={8} color="#ffffff" distance={10} /></>;
}
