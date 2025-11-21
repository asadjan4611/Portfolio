import React from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <div>
      <div className="text-center mb-6">
        <span className="chip">Featured Work</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          Recent <span className="highlight">Projects</span>
        </h2>
        <p className="mt-2 text-white/80 max-w-4xl mx-auto">
          A showcase of my latest work, featuring full‑stack applications, mobile apps, and innovative solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#contact" className="btn btn-primary">Discuss a Project</a>
      </div>
    </div>
  );
}


