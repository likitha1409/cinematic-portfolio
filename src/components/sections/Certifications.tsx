import { Award } from "lucide-react";
import portfolio from "../../data/portfolio";

export default function Certifications() {
	return <section className="content-section certifications-section section-dark"><div className="section-shell"><div className="section-heading reveal"><span className="section-kicker">07 / Credentials</span><h2>PROOF OF<br /><em>CURIOSITY</em></h2></div><div className="certification-grid">{portfolio.certifications.map((certification, index) => <div className="certification-card reveal" key={certification}><Award size={20} /><span>0{index + 1}</span><h3>{certification}</h3></div>)}</div></div></section>;
}
