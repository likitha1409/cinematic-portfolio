import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./components/Navbar";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import EngineeringMindset from "./components/sections/EngineeringMindset";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Publication from "./components/sections/Publication";
import Contact from "./components/sections/Contact";
import { useLenis } from "./hooks/useLenis";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLenis();

  useEffect(() => {
    const animations = gsap.utils.toArray<HTMLElement>(".reveal").map((element) => gsap.fromTo(element, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } }));
    return () => animations.forEach((animation) => animation.kill());
  }, []);

  return (
    <div className="app">
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
		<Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EngineeringMindset />
        <Education />
        <Certifications />
        <Publication />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;