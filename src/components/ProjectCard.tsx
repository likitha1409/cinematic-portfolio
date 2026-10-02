import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import type { Project } from "../types/portfolio";

interface ProjectCardProps {
	project: Project;
	onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
	const videoRef = useRef<HTMLVideoElement>(null);

	const playPreview = () => {
		if (!project.video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		void videoRef.current?.play();
	};

	const pausePreview = () => {
		const video = videoRef.current;
		if (!video) return;
		video.pause();
		video.currentTime = 0;
	};

	return (
		<button className="project-card reveal" type="button" onClick={() => onSelect(project)} onMouseEnter={playPreview} onMouseLeave={pausePreview} onFocus={playPreview} onBlur={pausePreview}>
			{project.video && <div className="project-media"><video ref={videoRef} muted loop playsInline preload="metadata" aria-hidden="true"><source src={project.video} type="video/mp4" /></video></div>}
			<div className="project-card-top">
				<span>{project.number}</span>
				<span>{project.category}</span>
			</div>
			<div className="project-card-body">
				<p className="project-subtitle">{project.subtitle}</p>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
			</div>
			<div className="project-card-bottom">
				<span>{project.duration}</span>
				<span className="project-arrow"><ArrowUpRight size={18} /></span>
			</div>
		</button>
	);
}
