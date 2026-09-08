import { personal } from "../data/meta.js";

export default function Hero() {
  return (
    <div className="site-container hero-layout">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Product systems · Open-source infrastructure
        </p>

        <h1>I engineer reliable systems from <em>problem</em> to production.</h1>

        <p className="hero-intro">
          I’m {personal.name}, a product and systems engineer working across Kubernetes GPU
          infrastructure, applied AI, web, and mobile. I turn ambiguous requirements into
          software that ships, operates, and improves in the real world.
        </p>

        <div className="hero-actions">
          <a href="#work" className="button button-dark">
            Explore engineering work <span aria-hidden="true">↓</span>
          </a>
          <a href="#contact" className="button button-text">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-note">
          <span>Current focus</span>
          <p>
            GPU scheduling and resource sharing on Kubernetes.
            <br />Contributing upstream with Project HAMi.
          </p>
        </div>
      </div>

      <aside className="hero-blueprint" aria-label="Engineering scope from product workflows to infrastructure">
        <header className="blueprint-header">
          <span>Operating model / 01</span>
          <strong>End-to-end ownership</strong>
        </header>

        <div className="blueprint-canvas" aria-hidden="true">
          <div className="blueprint-rail">
            <span>Frame</span>
            <span>Design</span>
            <span>Ship</span>
            <span>Operate</span>
          </div>

          <div className="blueprint-stack">
            <article className="blueprint-layer blueprint-product">
              <div><span>01</span><p>Product layer</p></div>
              <strong>Useful workflows</strong>
              <small>Web · mobile · user experience</small>
            </article>

            <article className="blueprint-layer blueprint-systems">
              <div><span>02</span><p>Systems layer</p></div>
              <strong>Reliable software</strong>
              <small>APIs · automation · applied AI</small>
            </article>

            <article className="blueprint-layer blueprint-infra">
              <div><span>03</span><p>Infrastructure layer</p></div>
              <strong>Production foundations</strong>
              <small>Kubernetes · GPU scheduling · observability</small>
            </article>

            <div className="blueprint-signal">
              <i /> <span>Feedback loop active</span>
            </div>
          </div>
        </div>

        <footer className="blueprint-footer">
          <span>Problem</span><b>→</b><span>System</span><b>→</b><span>Outcome</span>
        </footer>
      </aside>
    </div>
  );
}
