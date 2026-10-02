import { useEffect, useState } from "react";

export default function CustomCursor() {
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		const media = window.matchMedia("(pointer: fine)");
		setEnabled(media.matches);
		const update = () => setEnabled(media.matches);
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);

	useEffect(() => {
		if (!enabled) return;
		const cursor = document.querySelector<HTMLElement>(".cursor-dot");
		const ring = document.querySelector<HTMLElement>(".cursor-ring");
		if (!cursor || !ring) return;
		const move = (event: MouseEvent) => {
			cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
			ring.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
		};
		const over = (event: Event) => (event.currentTarget as HTMLElement).classList.add("cursor-hover");
		const out = (event: Event) => (event.currentTarget as HTMLElement).classList.remove("cursor-hover");
		const interactive = document.querySelectorAll<HTMLElement>("a, button");
		window.addEventListener("mousemove", move);
		interactive.forEach((element) => {
			element.addEventListener("mouseenter", over);
			element.addEventListener("mouseleave", out);
		});
		return () => {
			window.removeEventListener("mousemove", move);
			interactive.forEach((element) => {
				element.removeEventListener("mouseenter", over);
				element.removeEventListener("mouseleave", out);
			});
		};
	}, [enabled]);

	if (!enabled) return null;
	return <><span className="cursor-dot" /><span className="cursor-ring" /></>;
}
