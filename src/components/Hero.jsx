import { useEffect, useRef } from "react";
import "./Hero.css";

const teamImages = [
  { id: 1, top: "10%", left: "2%", size: 90, delay: 0 },
  { id: 2, top: "0%", left: "28%", size: 75, delay: 0.15 },
  { id: 3, top: "5%", left: "50%", size: 80, delay: 0.3 },
  { id: 4, top: "2%", right: "18%", size: 70, delay: 0.45 },
  { id: 5, top: "15%", right: "2%", size: 85, delay: 0.6 },
];

const avatarColors = [
  "#f4a261",
  "#2a9d8f",
  "#e76f51",
  "#457b9d",
  "#a8dadc",
  "#e9c46a",
];

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
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
    <section id="home" className="hero" ref={sectionRef}>
      {/* Decorative SVG squiggle */}
      <svg
        className="hero__squiggle"
        viewBox="0 0 120 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 0 C20 50, 100 100, 60 150 C20 200, 100 250, 60 300"
          stroke="#e8524a"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="600"
          strokeDashoffset="600"
          style={{ animation: "draw-line 2s ease forwards 0.5s" }}
        />
      </svg>

      <div className="container">
        <div className="hero__content reveal">
          <h1 className="hero__title">
            The <span className="highlight-pink">thinkers</span> and
            <br />
            doers were <span className="highlight-green">changing</span>
            <br />
            the <span className="highlight-yellow">status</span> Quo with
          </h1>
          <p className="hero__sub">
            We are a team of strategists, designers communicators, researchers.
            Together,
            <br />
            we belive that progress only hphappens when you refuse to play
            things safe.
          </p>
        </div>

        {/* Floating avatar cluster */}
        <div className="hero__avatars">
          {teamImages.map((img, i) => (
            <div
              key={img.id}
              className="hero__avatar"
              style={{
                top: img.top,
                left: img.left,
                right: img.right,
                width: img.size,
                height: img.size,
                animationDelay: `${img.delay}s`,
              }}
            >
              <img
                src={`https://source.unsplash.com/random/${Math.round(img.size * 2)}x${Math.round(img.size * 2)}?portrait&sig=${img.id}`}
                alt={`Team ${img.id}`}
                className="hero__avatar-img"
                onError={(e) => {
                  e.currentTarget.style.background =
                    avatarColors[i % avatarColors.length];
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
