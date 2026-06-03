import { useEffect, useRef } from "react";
import "./Services.css";

const services = [
  {
    tag: "Office of multiple interest content",
    title: "Colaborative & partnership",
  },
  {
    tag: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    tag: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

export default function Services() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="services" ref={ref}>
      {/* Decorative curve */}
      <svg className="services__curve" viewBox="0 0 500 80" fill="none">
        <path
          d="M0 40 Q250 0 500 40"
          stroke="#e8524a"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </svg>

      <div className="container">
        <h2 className="services__heading reveal">
          What we <span className="highlight-green">can</span>
          <br />
          offer you!
        </h2>

        <div className="services__list">
          {services.map((s, i) => (
            <div
              key={i}
              className={`services__item reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="services__tag">{s.tag}</span>
              <span className="services__title">{s.title}</span>
              <span className="services__arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
