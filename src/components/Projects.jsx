import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <div className="site-container">
      <div className="work-heading">
        <div className="section-label"><span>04</span><p>Selected work</p></div>
        <div>
          <h2 className="section-heading">Products built around real-world workflows.</h2>
          <p>
            Each project began with a practical need and became a complete product flow—from
            secure access and discovery to transactions, communication, or mobile action.
          </p>
        </div>
      </div>

      <div className="work-grid">
        {projects.slice(0, 4).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="work-footnote">
        <span>More context is available on request.</span>
        <a href="#contact">Have a product to build? <b>Let’s talk ↗</b></a>
      </div>
    </div>
  );
}
