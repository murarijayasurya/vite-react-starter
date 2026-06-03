import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { label: "Home", id: "home" },
  { label: "Studio", id: "studio" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
  { label: "FAQs", id: "faqs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo">
          Front End
        </a>
        <ul
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(l.id);
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  setMenuOpen(false);
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
