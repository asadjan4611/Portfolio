"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal.jsx";

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`work-card work-card-${index + 1}`}>
      <div className="work-card-image">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.name} product preview`}
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        ) : (
          <div className="mobile-placeholder">Mobile<br />product</div>
        )}
        <span>0{index + 1}</span>
      </div>

      <div className="work-card-body">
        <div>
          <p className="project-type">{project.period}</p>
          <h3>{project.name}</h3>
        </div>
        <p>{project.solution}</p>
        <div className="work-card-actions">
          <button type="button" onClick={() => setOpen(true)}>
            Read the case study <span aria-hidden="true">↗</span>
          </button>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              View live <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      <ProjectModal open={open} onClose={() => setOpen(false)} project={project} />
    </article>
  );
}
