const principles = ["SOLVE THE RIGHT PROBLEM", "DESIGN BEFORE IMPLEMENTATION", "DEBUG SYSTEMATICALLY", "BUILD FOR MAINTAINABILITY", "LEARN CONTINUOUSLY"];

export default function EngineeringMindset() {
	return (
		<section className="mindset-section">
			<div className="section-shell"><div className="mindset-intro reveal"><span className="section-kicker">05 / Principles</span><h2>ENGINEERING<br /><em>MINDSET</em></h2></div><div className="principles-list">{principles.map((principle, index) => <div className="principle reveal" key={principle}><span>0{index + 1}</span><strong>{principle}</strong></div>)}</div></div>
		</section>
	);
}
