import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
	useEffect(() => {
		const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
		let frame = 0;
		const raf = (time: number) => {
			lenis.raf(time);
			frame = window.requestAnimationFrame(raf);
		};
		frame = window.requestAnimationFrame(raf);
		return () => {
			window.cancelAnimationFrame(frame);
			lenis.destroy();
		};
	}, []);
}
