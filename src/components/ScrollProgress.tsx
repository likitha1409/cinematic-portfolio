import { useEffect, useState } from "react";

export default function ScrollProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const update = () => {
			const scrollable = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
		};
		window.addEventListener("scroll", update, { passive: true });
		update();
		return () => window.removeEventListener("scroll", update);
	}, []);

	return <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />;
}
