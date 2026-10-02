export interface Experience {
	company: string;
	role: string;
	duration: string;
	location: string;
	type: string;
	description: string[];
	technologies: string[];
}

export interface Project {
	number: string;
	title: string;
	subtitle: string;
	category: string;
	duration: string;
	description: string;
	details: string[];
	technologies: string[];
	github: string;
	video?: string;
}

export interface Portfolio {
	name: string;
	role: string;
	location: string;
	contact: {
		phone: string;
		email: string;
		linkedin: string;
		github: string;
		website: string;
	};
	hero: {
		headline: string;
		technologies: string[];
	};
	about: {
		title: string;
		description: string;
	};
	experience: Experience[];
	projects: Project[];
	skills: Record<string, string[]>;
	education: Array<{
		institution: string;
		degree: string;
		duration: string;
		location: string;
		result: string;
	}>;
	certifications: string[];
	publication: {
		title: string;
		publisher: string;
	};
}
