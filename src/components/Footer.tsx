import portfolio from "../data/portfolio";

export default function Footer() {
	return <footer className="site-footer"><div><span className="brand-monogram">DLSV</span><span>{portfolio.role}</span></div><span>© {new Date().getFullYear()} {portfolio.name}</span></footer>;
}
