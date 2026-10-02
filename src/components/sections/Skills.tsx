import portfolio from "../../data/portfolio";
import skillsImage from "../../assets/images/skills-anime.png";

const labels: Record<string, string> = { programming: "Programming", coreCS: "Core CS", backend: "Backend", databases: "Databases", web: "Web", tools: "Tools", aiML: "AI / ML", softSkills: "Soft skills" };

export default function Skills() {
	return (
		<section id="skills" className="content-section skills-section section-dark">
			<div className="section-shell">
				<div className="section-heading reveal"><span className="section-kicker">04 / Toolkit</span><h2>THE THINGS<br /><em>I WORK WITH</em></h2></div>
				<div className="skills-body">
					<div className="skills-grid">
						{Object.entries(portfolio.skills).map(([key, skills], index) => (
							<div className="skill-group reveal" key={key}><div className="skill-group-title"><span>0{index + 1}</span><h3>{labels[key] ?? key}</h3></div><div className="tag-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
						))}
					</div>
					<div className="skills-visual reveal"><img src={skillsImage} alt="Anime-style developer thinking about her technical toolkit" /></div>
				</div>
			</div>
		</section>
	);
}
