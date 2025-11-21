import React, { useState } from "react";
import ProjectModal from "./ProjectModal.jsx";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card p-0 h-full flex flex-col overflow-hidden">
      {project.cover ? (
        <a
          href={project.live || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center h-56 md:h-64 w-full bg-white/5"
        >
          <img
            src={project.cover}
            alt={`${project.name} cover`}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
          {project.live ? (
            <span className="absolute top-3 right-3 bg-primary text-black text-xs font-semibold px-3 py-1 rounded-lg shadow-soft">
              Live
            </span>
          ) : null}
        </a>
      ) : null}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-sm text-muted">{project.period}</p>
          </div>
          <div className="flex gap-2">
            {project.live && (
              <a
                className="btn btn-outline text-xs"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live
              </a>
            )}
            <button
              onClick={() => setOpen(true)}
              className="btn btn-primary text-xs"
            >
              View Details
            </button>
            {project.repo && (
              <a
                className="btn btn-outline text-xs"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            )}
          </div>
        </div>
        <div className="mt-4 text-white/90">
          <p>
            <span className="text-white/60">Problem:</span> {project.problem}
          </p>
          <p className="mt-2">
            <span className="text-white/60">Solution:</span> {project.solution}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-white/60 text-sm mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <ul className="mt-4 space-y-1 text-sm text-white/90 list-disc list-inside">
          {project.features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
        {project.impact?.length ? (
          <div className="mt-4 text-sm">
            <p className="text-white/60">Impact</p>
            <ul className="mt-1 space-y-1 list-disc list-inside">
              {project.impact.map((i, idx) => (
                <li key={idx} className="text-white/90">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {project.codeRef ? (
          <p className="mt-4 text-xs text-white/50">
            Codebase: {project.codeRef}
          </p>
        ) : null}
      </div>

      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
        project={project}
      />
    </div>
  );
}
