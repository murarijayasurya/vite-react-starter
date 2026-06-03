import { useState } from "react";
import "./App.css";


const img = (seed, w = 400, h = 400) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;


export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="site-wrapper">
      {/* ═══════════════════════════════════════════════
          NAVBAR
      ═══════════════════════════════════════════════ */}
      <nav className="navbar">
        <div className="nav-logo">Elementum</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Studio</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
        <button className="hamburger" aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="hero">
        {/* Decorative squiggle left */}
        <svg className="squiggle-left" viewBox="0 0 80 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 10 C10 40, 80 90, 20 130 C-20 160, 70 200, 40 220" stroke="#e85d6b" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>

        <div className="hero-content">
          <h1 className="hero-heading">
            The <span className="hl-underline">thinkers</span> and<br />
            doers were <span className="hl-pink">changing</span><br />
            the <span className="hl-yellow">status</span> Quo with
          </h1>
          <p className="hero-sub">
            We are a team of strategists, designers communicators, researchers. Togsether,<br />
            we belive that progress only hghappens when you refuse to play things safe.
          </p>
        </div>

        {/* Team circle photos */}
        <div className="team-photos">
          {/*
            Replace img(...) with your actual image paths, e.g.:
            src="/images/team1.jpg"
          */}
          <div className="photo-row top">
            <img src={img("team3", 120, 120)} alt="Team member" className="circle-photo sm" />
            <img src={img("team1", 160, 160)} alt="Team member" className="circle-photo md" />
            <img src={img("team4", 140, 140)} alt="Team member" className="circle-photo md" />
            <img src={img("team5", 120, 120)} alt="Team member" className="circle-photo sm" />
          </div>
          <div className="photo-row bottom">
            <img src={img("team2", 150, 150)} alt="Team member" className="circle-photo lg" style={{ marginLeft: "60px" }} />
            <img src={img("team6", 130, 130)} alt="Team member" className="circle-photo md" style={{ marginLeft: "80px" }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — Tomorrow should be better than today
      ═══════════════════════════════════════════════ */}
      <section className="tomorrow-section">
        {/* Decorative pink blob */}
        <div className="pink-blob" />

        <div className="tomorrow-left">
          <h2 className="tomorrow-heading">
            <span className="serif-italic">Tomorrow</span> should<br />
            be better than <span className="green-underline">today</span>
          </h2>
          <p className="section-body">
            We are a team of strategists, designers communicators, researchers.
            Togsether, we belive that progress only happens when you refuse
            to play things safe.
          </p>
          <a href="#" className="read-more">Read more <span className="arrow">→</span></a>
        </div>

        <div className="tomorrow-right">
          {/* Red triangle */}
          <div className="red-triangle top-right" />
          {/*
            Replace with: src="/images/meeting.jpg"
          */}
          <img src={img("meeting", 320, 320)} alt="Team meeting" className="circle-photo xl" />
        </div>

        {/* Red wavy SVG connector between sections */}
        <svg className="wave-connector" viewBox="0 0 400 120" fill="none">
          <path d="M380 10 C320 10, 280 80, 200 80 C120 80, 80 10, 20 40 C-20 60, 10 110, 50 110" stroke="#e85d6b" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3 — See how we can help you progress
      ═══════════════════════════════════════════════ */}
      <section className="progress-section">
        <div className="progress-left">
          {/* Red triangles */}
          <div className="red-triangle large" />
          <div className="red-triangle small offset" />
          {/*
            Replace with: src="/images/working.jpg"
          */}
          <img src={img("working", 300, 300)} alt="Working together" className="circle-photo xl" />
        </div>

        <div className="progress-right">
          <h2 className="progress-heading">
            See how we can<br />
            help you progress
          </h2>
          <p className="section-body">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="read-more">Read more <span className="arrow-line" /></a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES SECTION — What we can offer you!
      ═══════════════════════════════════════════════ */}
      <section className="services-section">
        {/* Decorative red squiggle top right */}
        <svg className="services-squiggle" viewBox="0 0 200 80" fill="none">
          <path d="M10 60 C50 10, 100 70, 150 30 C180 10, 195 40, 195 60" stroke="#e85d6b" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>

        <h2 className="services-heading">
          What we <span className="hl-green-bg">can</span><br />
          <span className="underline-offset">offer</span> you!
        </h2>

        <div className="services-list">
          <div className="service-row">
            <div className="service-label">
              <p>Office of multiple</p>
              <p>interest content</p>
            </div>
            <div className="service-title">Colaborative &amp; partnership</div>
            <div className="service-arrow">→</div>
          </div>
          <hr />
          <div className="service-row">
            <div className="service-label">
              <p>The hanger US Air force</p>
              <p>digital experimental</p>
            </div>
            <div className="service-title">We talk about our weight</div>
            <div className="service-arrow">→</div>
          </div>
          <hr />
          <div className="service-row">
            <div className="service-label">
              <p>Delta faucet content,</p>
              <p>social, digital</p>
            </div>
            <div className="service-title">Piloting digital confidence</div>
            <div className="service-arrow">→</div>
          </div>
          <hr />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIAL SECTION
      ═══════════════════════════════════════════════ */}
      <section className="testimonial-section">
        <div className="testimonial-avatars left">
          {/*
            Replace with: src="/images/avatar1.jpg" etc.
          */}
          <img src={img("avatar1", 70, 70)} alt="Customer" className="circle-photo avatar" />
          <img src={img("avatar2", 70, 70)} alt="Customer" className="circle-photo avatar" />
          <img src={img("avatar3", 70, 70)} alt="Customer" className="circle-photo avatar" />
        </div>

        <div className="testimonial-center">
          <h2 className="testimonial-heading">
            What our customer<br />
            says <span className="underline-green">About Us</span>
          </h2>
          <div className="quote-block">
            <span className="quote-mark open">&ldquo;</span>
            <p>
              Elementum delivered the site with in the timeline as they requested.
              Inthe end, the client found a 50% increase in traffic with in days
              since its launch. They also had an impressive ability to use
              technologies that the company hasn&apos;t used, which have also
              proved to be easy to use and reliable
            </p>
            <span className="quote-mark close">&rdquo;</span>
          </div>
        </div>

        <div className="testimonial-avatars right">
          <img src={img("avatar4", 70, 70)} alt="Customer" className="circle-photo avatar" />
          {/*
            This is the featured large avatar (man in red shirt)
            Replace with: src="/images/avatar_main.jpg"
          */}
          <img src={img("avatar5", 100, 100)} alt="Featured customer" className="circle-photo avatar featured" />
          <img src={img("avatar6", 70, 70)} alt="Customer" className="circle-photo avatar" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          NEWSLETTER SECTION
      ═══════════════════════════════════════════════ */}
      <section className="newsletter-section">
        {/* Purple triangle decoration */}
        <div className="purple-triangle" />

        <h2 className="newsletter-heading">
          Subscribe to<br />our newsletter
        </h2>
        <p className="newsletter-sub">To make your stay special and even more memorable</p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
          />
          <button className="subscribe-btn">Subscribe Now</button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════ */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Studio</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Terms &amp; Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Terms &amp; Policies</h4>
            <p>1699a Flude on, STE<br />20 Chiago, IL 43687</p>
            <p>(123) 4567891000</p>
            <p>Info@elementum.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©2023 Elementum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
