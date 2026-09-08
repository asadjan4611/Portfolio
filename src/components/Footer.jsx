import { personal } from "../data/meta.js";

const navigation = [
  { href: "#experience", label: "Experience" },
  { href: "#open-source", label: "Open source" },
  { href: "#work", label: "Selected work" },
  { href: "#writing", label: "Blog" },
  { href: "#credentials", label: "Credentials" },
];

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="site-container footer-cta">
        <p className="footer-kicker"><span /> Available for high-ownership engineering work</p>
        <div>
          <h2>Have an ambitious problem?</h2>
          <a href="#contact">Let’s build it <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <div className="site-container footer-directory">
        <div className="footer-identity">
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">MA</span>
            <span>{personal.name}</span>
          </a>
          <p>Software engineer building products from first principles to production.</p>
          <p>Pakistan · Working globally</p>
        </div>

        <nav aria-label="Footer navigation">
          <p>Explore</p>
          {navigation.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>

        <div className="footer-socials">
          <p>Elsewhere</p>
          <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={personal.socials.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={personal.socials.medium} target="_blank" rel="noopener noreferrer">Medium ↗</a>
          <a href={personal.socials.credly} target="_blank" rel="noopener noreferrer">Credly ↗</a>
        </div>
      </div>

      <div className="site-container footer-bottom">
        <p>© {new Date().getFullYear()} Muhammad Asad</p>
        <p>Designed around clarity, ownership, and useful outcomes.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
