const principles = [
  {
    number: "01",
    title: "Start with the problem",
    copy: "Before choosing tools or screens, I get clear on the user, the business constraint, and the decision the product needs to make easier.",
  },
  {
    number: "02",
    title: "Own the whole path",
    copy: "I work across product thinking, system design, implementation, and launch—so important details do not disappear between handoffs.",
  },
  {
    number: "03",
    title: "Ship for the next chapter",
    copy: "A first release should create learning and momentum while leaving the product reliable, understandable, and ready to evolve.",
  },
];

export default function About() {
  return (
    <div className="site-container approach-layout">
      <div className="section-label"><span>01</span><p>How I work</p></div>

      <div className="approach-content">
        <h2>I work where product decisions become engineering systems.</h2>
        <p className="large-copy">
          My role is not limited to implementing screens. I clarify the constraint, design the
          system, build the critical paths, and carry the result into production—while keeping
          reliability, maintainability, and the user’s real workflow in view.
        </p>

        <div className="principles">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
