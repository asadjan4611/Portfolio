"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ open, onClose, project }) {
  const closeButton = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    closeButton.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="case-overlay" onClick={onClose}>
      <article
        className="case-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`case-title-${project.id}`}
      >
        <header>
          <div>
            <p>{project.period}</p>
            <h2 id={`case-title-${project.id}`}>{project.name}</h2>
          </div>
          <button ref={closeButton} type="button" onClick={onClose} aria-label="Close case study">×</button>
        </header>

        <div className="case-content">
          <div className="case-summary">
            {project.cover && (
              <div className="case-image">
                <Image src={project.cover} alt={`${project.name} preview`} sizes="400px" />
              </div>
            )}
            <div>
              <p className="case-kicker">The brief</p>
              <p className="case-lede">{project.overview || project.solution}</p>
              {project.impact?.[0] && (
                <p className="case-impact"><span>Outcome</span>{project.impact[0]}</p>
              )}
            </div>
          </div>

          {project.sections?.length > 0 && (
            <section className="case-sections">
              <p className="case-kicker">Key decisions</p>
              {project.sections.map((section) => (
                <article key={section.title}>
                  <h3>{section.title}</h3>
                  <p>{section.solution || section.problem}</p>
                </article>
              ))}
            </section>
          )}
        </div>

        <footer>
          {project.live && (
            <a className="button button-dark" href={project.live} target="_blank" rel="noopener noreferrer">
              View live product <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.repo && (
            <a className="case-code" href={project.repo} target="_blank" rel="noopener noreferrer">Source code ↗</a>
          )}
        </footer>
      </article>
    </div>,
    document.body,
  );
}
