import { useEffect, useState } from "react";
import gsap from "gsap";
import portfolio from "../data/portfolio";

export default function Loader() {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = window.setTimeout(() => {
			gsap.to(".loader", {
				autoAlpha: 0,
				duration: 0.65,
				ease: "power3.inOut",
				onComplete: () => setVisible(false),
			});
		}, 500);
		return () => window.clearTimeout(timer);
	}, []);

	if (!visible) return null;

	return (
		<div className="loader" aria-label="Loading portfolio" role="status">
			<div className="loader-topline"><span>Portfolio / 2026</span><span>00—100</span></div>
			<div className="loader-name">{portfolio.name}</div>
			<div className="loader-bar"><span /></div>
		</div>
	);
}
