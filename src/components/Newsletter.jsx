import { useEffect, useRef, useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="newsletter" ref={ref}>
      {/* Decorative purple shape */}
      <div className="newsletter__decor" />

      <div className="container newsletter__content reveal">
        <h2 className="newsletter__heading">
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p className="newsletter__sub">
          To make your stay special and even more memorable
        </p>

        {submitted ? (
          <p className="newsletter__success">Thanks for subscribing! ✨</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <button type="submit" className="newsletter__btn">
              Subscribe Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
