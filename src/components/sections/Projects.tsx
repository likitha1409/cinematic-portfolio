import { useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";
import portfolio from "../../data/portfolio";
import type { Project } from "../../types/portfolio";

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	return (
		<section id="projects" className="content-section projects-section">
			<div className="section-shell">
				<div className="section-heading project-heading reveal"><span className="section-kicker">03 / Selected work</span><h2>BUILT TO<br /><em>MOVE IDEAS</em></h2><p>Applications shaped by curiosity, systems thinking, and a bias toward useful outcomes.</p></div>
				<div className="project-grid">
					{portfolio.projects.map((project) => <ProjectCard key={project.number} project={project} onSelect={setSelectedProject} />)}
				</div>
			</div>
			<ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
		</section>
	);
}
