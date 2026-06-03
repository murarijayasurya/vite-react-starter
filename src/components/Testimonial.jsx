import { useEffect, useRef } from "react";
import "./Testimonial.css";

const sideAvatars = [
  { color: "#f4a261", top: "5%" },
  { color: "#2a9d8f", top: "35%" },
  { color: "#e76f51", top: "65%" },
];
const rightAvatars = [
  { color: "#457b9d", top: "0%" },
  { color: "#a8dadc", top: "35%" },
  { color: "#e9c46a", top: "65%" },
];

export default function Testimonial() {
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
    <section className="testimonial" ref={ref}>
      <div className="container testimonial__inner">
        {/* Left avatars */}
        <div className="testimonial__side">
          {sideAvatars.map((a, i) => (
            <div key={i} className="testimonial__avatar">
              <img
                src={`https://source.unsplash.com/random/120x120?face&sig=left-${i}`}
                alt={`Avatar ${i}`}
                onError={(e) => {
                  e.currentTarget.style.background = a.color;
                }}
              />
            </div>
          ))}
        </div>

        {/* Center content */}
        <div className="testimonial__content reveal">
          <h2 className="testimonial__heading">
            What our customer
            <br />
            says <span className="highlight-yellow">About Us</span>
          </h2>
          <blockquote className="testimonial__quote">
            <span className="testimonial__quote-mark">"</span>
            Front End delivered the site with in the timeline as they requested.
            In the end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved to
            be easy to use and reliable
            <span className="testimonial__quote-mark testimonial__quote-mark--end">
              "
            </span>
          </blockquote>
        </div>

        {/* Right avatars */}
        <div className="testimonial__side testimonial__side--right">
          {rightAvatars.map((a, i) => (
            <div key={i} className="testimonial__avatar">
              <img
                src={`https://source.unsplash.com/random/120x120?face&sig=right-${i}`}
                alt={`Avatar right ${i}`}
                onError={(e) => {
                  e.currentTarget.style.background = a.color;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
