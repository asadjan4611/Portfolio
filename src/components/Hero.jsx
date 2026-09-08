import Image from "next/image";
import { personal } from "../data/meta.js";
import heroImage from "../assets/images/founder-engineering-studio.png";

export default function Hero() {
  return (
    <div className="site-container hero-layout">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Available for high-ownership product work
        </p>

        <h1>I turn ambitious ideas into <em>shippable</em> products.</h1>

        <p className="hero-intro">
          I’m {personal.name}, a software engineer who takes products from the first hard
          question to a reliable release—architecture, interface, implementation, and the
          details that make it ready for real people.
        </p>

        <div className="hero-actions">
          <a href="#work" className="button button-dark">
            See selected work <span aria-hidden="true">↓</span>
          </a>
          <a href="#contact" className="button button-text">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-note">
          <span>01</span>
          <p>
            Engineer by craft. Entrepreneurial by default.
            <br />I build for momentum, clarity, and durable outcomes.
          </p>
        </div>
      </div>

      <aside className="hero-portrait" aria-label="Abstract engineered system">
        <div className="portrait-frame">
          <Image
            src={heroImage}
            alt="A modular engineered structure connected by an orange cable"
            priority
            sizes="(max-width: 800px) 78vw, 380px"
          />
        </div>
        <div className="portrait-caption">
          <span>My operating principle</span>
          <strong>From idea to infrastructure</strong>
        </div>
      </aside>
    </div>
  );
}
