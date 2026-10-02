import { useEffect, useRef } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolio from "../../data/portfolio";
import publicationVideo from "../../assets/images/research.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function Publication() {
	const videoRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!videoRef.current) return;

		const animation = gsap.fromTo(
			videoRef.current,
			{ opacity: 0, y: 32, scale: 0.97 },
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: videoRef.current,
					start: "top 84%",
					once: true,
				},
			}
		);

		return () => {
			animation.kill();
		};
	}, []);

	return <section className="publication-section"><div className="section-shell publication-inner reveal"><BookOpen size={24} /><div><span className="section-kicker">08 / Publication</span><h2>{portfolio.publication.title}</h2><p>{portfolio.publication.publisher}</p></div><ArrowUpRight className="publication-arrow" size={28} /></div><div className="publication-media" ref={videoRef}><video autoPlay muted loop playsInline preload="metadata" aria-label="AgroGuide publication visual"><source src={publicationVideo} type="video/mp4" /></video></div></section>;
}
