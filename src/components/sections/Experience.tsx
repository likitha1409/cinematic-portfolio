import { useEffect, useRef } from "react";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolio from "../../data/portfolio";
import experienceVideo from "../../assets/images/experience-video.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
	const visualRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!visualRef.current) return;

		const animation = gsap.fromTo(
			visualRef.current,
			{ opacity: 0, x: 36, scale: 0.96 },
			{
				opacity: 1,
				x: 0,
				scale: 1,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: visualRef.current,
					start: "top 82%",
					once: true,
				},
			}
		);

		return () => {
			animation.kill();
		};
	}, []);

	return (
		<section id="experience" className="content-section experience-section section-dark">
			<div className="section-shell">
				<div className="section-heading reveal"><span className="section-kicker">02 / Experience</span><h2>FIELD NOTES<br /><em>FROM THE WORK</em></h2></div>
				<div className="experience-layout">
					<div className="experience-list">
						{portfolio.experience.map((item, index) => (
							<article className="experience-item reveal" key={`${item.company}-${item.role}`}>
								<div className="experience-index">0{index + 1}</div>
								<div className="experience-main">
									<div className="experience-meta"><span>{item.duration}</span><span>{item.type}</span></div>
									<h3>{item.role}</h3><p className="experience-company">{item.company}</p>
									<p className="experience-location">{item.location}</p>
									<ul>{item.description.map((point) => <li key={point}>{point}</li>)}</ul>
									<div className="tag-list">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
								</div>
								<BriefcaseBusiness className="experience-icon" size={22} />
							</article>
						))}
					</div>
					<div className="experience-visual" ref={visualRef}>
						<video autoPlay muted loop playsInline preload="metadata" aria-label="Cinematic software engineering workspace">
							<source src={experienceVideo} type="video/mp4" />
						</video>
					</div>
				</div>
				<a className="text-link reveal" href="#projects">See selected projects <ArrowUpRight size={16} /></a>
			</div>
		</section>
	);
}
