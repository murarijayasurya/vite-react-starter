import "./Footer.css";

const cols = [
  {
    title: "Company",
    links: ["Home", "Studio", "Services", "Blog"],
  },
  {
    title: "Terms & Policies",
    links: ["Privacy Policy", "Terms & Conditions", "Cookies", "Accessibility"],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "LinkedIn", "YouTube", "Twitter"],
  },
  {
    title: "Terms & Policies",
    info: [
      "1499a Flyder st, STE 2D Chicago, IL 63867",
      "(223) 456789000",
      "info@frontend.com",
    ],
  },
];

export default function Footer() {
  return (
    <>
      <div id="faqs" style={{ padding: "3rem 0", textAlign: "center" }}>
        <div className="container">
          <h3 style={{ marginBottom: "0.5rem" }}>FAQs</h3>
          <p style={{ color: "var(--clr-muted)" }}>
            Frequently asked questions will appear here.
          </p>
        </div>
      </div>
      <footer id="footer" className="footer">
        <div className="container footer__grid">
          {cols.map((col, i) => (
            <div key={i} className="footer__col">
              <h4 className="footer__title">{col.title}</h4>
              {col.links &&
                col.links.map((l) => (
                  <a key={l} href="#" className="footer__link">
                    {l}
                  </a>
                ))}
              {col.info &&
                col.info.map((item, j) => (
                  <p key={j} className="footer__info">
                    {item}
                  </p>
                ))}
            </div>
          ))}
        </div>
        <div className="container footer__bottom">
          <p>©2021 Front End. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
