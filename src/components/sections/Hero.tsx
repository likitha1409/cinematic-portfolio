import { useEffect, useRef } from "react";
import gsap from "gsap";

import HeroScene from "../3d/HeroScene";
import portfolio from "../../data/portfolio";
import heroImage from "../../assets/images/hero-image.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const visual = hero.querySelector(".hero-background");
    const title = hero.querySelector(".hero-title");
    const description = hero.querySelector(".hero-description");
    const eyebrow = hero.querySelector(".hero-eyebrow");
    const actions = hero.querySelector(".hero-actions");
    const scrollIndicator = hero.querySelector(".hero-scroll");

    const technologies = hero.querySelectorAll(".hero-tech");

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline
      .fromTo(
        visual,
        { opacity: 0, y: 28, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1 },
        0
      )
      .fromTo(
        eyebrow,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }
      )
      .fromTo(
        title,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
        },
        "-=0.45"
      )
      .fromTo(
        description,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.55"
      )
      .fromTo(
        technologies,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        "-=0.4"
      )
      .fromTo(
        actions,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.25"
      )
      .fromTo(
        scrollIndicator,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
        },
        "-=0.2"
      );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero-section"
    >
      <div className="hero-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
          aria-label="Cinematic portfolio visual"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="hero-3d">
        <HeroScene />
      </div>

      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            <span>{portfolio.role}</span>
            <span className="eyebrow-location">{portfolio.location}</span>
          </div>

          <h1 className="hero-title">{portfolio.hero.headline}</h1>

          <p className="hero-description">{portfolio.about.description}</p>

          <div className="hero-technologies">
            {portfolio.hero.technologies.map((technology: string) => (
              <span key={technology} className="hero-tech">{technology}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">View Projects <span>↗</span></a>
            <a href="#contact" className="hero-button hero-button-secondary">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line">
          <span />
        </div>
      </div>
    </section>
  );
}