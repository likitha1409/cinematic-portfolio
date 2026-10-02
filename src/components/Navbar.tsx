import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import portfolio from "../data/portfolio";

const navigationItems = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Skills", href: "#skills" },
	{ label: "Contact", href: "#contact" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 24);
			const sections = navigationItems
				.map((item) => document.querySelector(item.href))
				.filter((section): section is Element => section !== null);
			const current = sections.reduce((closest, section) => {
				const distance = Math.abs(section.getBoundingClientRect().top - 120);
				return distance < closest.distance
					? { id: section.id, distance }
					: closest;
			}, { id: "home", distance: Number.POSITIVE_INFINITY });
			setActiveSection(current.id);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const closeMenu = () => setIsOpen(false);

	return (
		<header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
			<a className="brand-mark" href="#home" onClick={closeMenu}>
				<span className="brand-monogram">DLSV</span>
				<span className="brand-name">{portfolio.name}</span>
			</a>

			<nav className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
				{navigationItems.map((item) => (
					<a
						className={activeSection === item.href.slice(1) ? "is-active" : ""}
						key={item.href}
						href={item.href}
						onClick={closeMenu}
					>
						{item.label}
					</a>
				))}
				<div className="nav-socials">
					<a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile" onClick={closeMenu}>LinkedIn</a>
					<a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile" onClick={closeMenu}>GitHub</a>
				</div>
				<a className="nav-resume" href="/resume.pdf" download="DOMMETI_L_S_VASANTHI_Resume.pdf" onClick={closeMenu}>
					Resume
				</a>
			</nav>

			<button
				className="menu-toggle"
				type="button"
				aria-label={isOpen ? "Close navigation" : "Open navigation"}
				aria-expanded={isOpen}
				onClick={() => setIsOpen((open) => !open)}
			>
				{isOpen ? <X size={20} /> : <Menu size={20} />}
			</button>
		</header>
	);
}
