import { useEffect, useRef } from "react";
import "./Progress.css";

export default function Progress() {
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
    <section className="progress-sec" ref={ref}>
      {/* Decorative SVG line */}
      <svg
        className="progress__curve"
        viewBox="0 0 400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 60 C100 0, 200 120, 400 40"
          stroke="#e8524a"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
      </svg>

      <div className="container progress__grid">
        <div className="progress__image reveal">
          <div className="progress__triangle-sm" />
          <div className="progress__circle-img">
            <img
              src="https://source.unsplash.com/random/600x600?office"
              alt="Progress"
              className="progress__img"
            />
          </div>
          <div className="progress__triangle-lg" />
        </div>
        <div
          className="progress__text reveal"
          style={{ transitionDelay: "0.15s" }}
        >
          <h2 className="progress__heading">
            See how we can
            <br />
            help you <span style={{ color: "#2a9d8f" }}>progress</span>
          </h2>
          <p className="progress__body">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="progress__link">
            Read more →
          </a>
        </div>
      </div>
    </section>
  );
}
