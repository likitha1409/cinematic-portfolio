import { GraduationCap } from "lucide-react";
import portfolio from "../../data/portfolio";

export default function Education() {
	return <section className="content-section education-section"><div className="section-shell"><div className="section-heading reveal"><span className="section-kicker">06 / Education</span><h2>THE FOUNDATION</h2></div><div className="education-list">{portfolio.education.map((item, index) => <article className="education-item reveal" key={item.institution}><span className="education-index">0{index + 1}</span><div><p className="education-duration">{item.duration}</p><h3>{item.degree}</h3><p>{item.institution}</p><small>{item.location}</small></div><strong className="education-result">{item.result}</strong><GraduationCap size={21} /></article>)}</div></div></section>;
}
