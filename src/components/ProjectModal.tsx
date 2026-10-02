import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "../types/portfolio";

interface ProjectModalProps {
	project: Project | null;
	onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
	useEffect(() => {
		if (!project) return;
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		};
		document.body.classList.add("modal-open");
		window.addEventListener("keydown", closeOnEscape);
		return () => {
			document.body.classList.remove("modal-open");
			window.removeEventListener("keydown", closeOnEscape);
		};
	}, [project, onClose]);

	if (!project) return null;

	return (
		<div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
			<div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()}>
				<button className="modal-close" type="button" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
				{project.video && <div className="project-modal-media"><video autoPlay muted loop playsInline preload="metadata" aria-label={`${project.title} cinematic preview`}><source src={project.video} type="video/mp4" /></video></div>}
				<div className="modal-meta"><span>{project.number}</span><span>{project.category}</span><span>{project.duration}</span></div>
				<p className="project-subtitle">{project.subtitle}</p>
				<h2 id="project-modal-title">{project.title}</h2>
				<p className="modal-description">{project.description}</p>
				<div className="modal-details">
					{project.details.map((detail) => <p key={detail}>+ {detail}</p>)}
				</div>
				<div className="modal-technologies">
					{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
				</div>
				{project.github && <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>View on GitHub <ArrowUpRight size={16} /></a>}
			</div>
		</div>
	);
}
