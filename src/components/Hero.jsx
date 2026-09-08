import { personal } from "../data/meta.js";

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

      <aside className="hero-system" aria-label="A system map connecting ideas, AI, products, and open source">
        <div className="system-map" aria-hidden="true">
          <span className="system-orbit system-orbit-one" />
          <span className="system-orbit system-orbit-two" />
          <span className="system-link system-link-one" />
          <span className="system-link system-link-two" />

          <div className="system-node system-node-products">
            <strong>Products</strong>
            <span>Shipped</span>
          </div>
          <div className="system-node system-node-oss">
            <strong>Open<br />source</strong>
            <span>Contributed</span>
          </div>
          <div className="system-node system-node-ai">
            <strong>AI</strong>
            <span>Applied</span>
          </div>
          <div className="system-node system-node-ideas">
            <strong>Ideas</strong>
            <span>Engineered</span>
          </div>

          <p className="system-caption">From first principle<br />to production.</p>
        </div>

        <div className="system-legend">
          <span>Build</span>
          <span>Contribute</span>
          <span>Explain</span>
        </div>
      </aside>
    </div>
  );
}
