import { ArrowDownRight, MapPin } from "lucide-react";
import portfolio from "../../data/portfolio";
import heroImage from "../../assets/images/hero-image.jpg";

export default function About() {
	return (
		<section id="about" className="content-section about-section">
			<div className="section-shell">
				<div className="about-grid">
					<div className="about-media reveal">
						<img src={heroImage} alt="Professional portrait of Dommeti L S Vasanthi" />
					</div>
					<div className="about-copy">
						<div className="section-heading reveal"><span className="section-kicker">01 / Profile</span><h2>ENGINEERING WITH<br /><em>PURPOSE</em></h2></div>
						<div className="about-lead reveal"><p>{portfolio.about.description}</p><a className="text-link" href="#experience">Follow the journey <ArrowDownRight size={16} /></a></div>
						<div className="about-aside reveal"><div className="location-line"><MapPin size={16} /><span>{portfolio.location}</span></div><div className="focus-note"><span>Technical focus</span><strong>Backend systems<br />AI applications<br />Digital experiences</strong></div></div>
					</div>
				</div>
				<div className="focus-grid">
					{portfolio.hero.technologies.slice(0, 4).map((technology, index) => (
						<div className="focus-item reveal" key={technology}><span>0{index + 1}</span><strong>{technology}</strong></div>
					))}
				</div>
			</div>
		</section>
	);
}
