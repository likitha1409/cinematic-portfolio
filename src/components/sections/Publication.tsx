import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BookOpen, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolio from "../../data/portfolio";
import publicationVideo from "../../assets/images/research.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function Publication() {
	const mediaRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isMuted, setIsMuted] = useState(true);

	useEffect(() => {
		if (!mediaRef.current) return;

		const animation = gsap.fromTo(
			mediaRef.current,
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

	const toggleMute = async () => {
		const video = videoRef.current;
		if (!video) return;

		try {
			if (video.muted) {
				video.muted = false;
				video.volume = 1;
				await video.play();
				setIsMuted(false);
			} else {
				video.muted = true;
				setIsMuted(true);
			}
		} catch (error) {
			console.error("Unable to enable publication video audio:", error);
		}
	};

	return <section className="publication-section"><div className="section-shell publication-inner reveal"><BookOpen size={24} /><div><span className="section-kicker">08 / Publication</span><h2>{portfolio.publication.title}</h2><p>{portfolio.publication.publisher}</p></div><ArrowUpRight className="publication-arrow" size={28} /></div><div className="publication-media" ref={mediaRef}><video ref={videoRef} src={publicationVideo} autoPlay muted={isMuted} loop playsInline preload="metadata" aria-label="AgroGuide publication visual" /><button className="publication-sound-toggle" type="button" onClick={toggleMute} aria-label={isMuted ? "Turn on voice-over" : "Mute voice-over"} title={isMuted ? "Turn on voice-over" : "Mute voice-over"}>{isMuted ? <VolumeX size={19} /> : <Volume2 size={19} />}</button></div></section>;
}
