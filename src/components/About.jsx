import { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 },
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="studio" className="about" ref={ref}>
      <div className="container about__grid">
        <div className="about__text reveal">
          <h2 className="about__heading">
            <span className="highlight-yellow">Tomorrow</span> should
            <br />
            be better than <span style={{ color: "#2a9d8f" }}>today</span>
          </h2>
          <p className="about__body">
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>
          <a href="#" className="about__link">
            Read more →
          </a>
        </div>
        <div className="about__image reveal" style={{ animationDelay: "0.2s" }}>
          {/* Decorative triangle */}
          <div className="about__triangle" />
          <div className="about__circle-img">
            <img
              src="https://source.unsplash.com/random/600x600?people"
              alt="About us"
              className="about__img"
            />
          </div>
          {/* pink blob */}
          <div className="about__blob" />
        </div>
      </div>
    </section>
  );
}
