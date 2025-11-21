import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ open, onClose, project }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md p-0 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-6xl h-[90vh] bg-surface/95 border border-white/10 rounded-none md:rounded-2xl shadow-soft overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-4 border-b border-white/10">
          <div>
            <h3 className="text-xl font-semibold">{project?.name}</h3>
            {project?.period ? (
              <p className="text-white/60 text-sm mt-1">{project.period}</p>
            ) : null}
          </div>
          <button
            onClick={onClose}
            className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Hero row: preview + overview */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              {project?.cover ? (
                <div className="w-full flex items-center justify-center bg-white/5 rounded-xl p-3">
                  <img
                    src={project.cover}
                    alt={`${project.name} screenshot`}
                    className="max-h-48 w-auto object-contain rounded-md"
                    loading="lazy"
                  />
                </div>
              ) : null}
            </div>
            <div className="md:col-span-2">
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Project Overview</h4>
                <p className="text-white/90">{project?.solution || project?.problem}</p>
                {Array.isArray(project?.impact) && project.impact.length > 0 ? (
                  <div className="mt-4 rounded-lg bg-white/5 border border-white/10 p-3">
                    <div className="text-sm font-semibold text-primary mb-1">Key Achievement</div>
                    <p className="text-white/80 text-sm">{project.impact[0]}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          {/* Tech stack */}
          <section className="card p-4">
            <h4 className="font-semibold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mb-3">
              {(project?.stack || []).map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
            {Array.isArray(project?.overview) || project?.overview ? (
              <p className="text-white/80 text-sm mb-3">{project.overview}</p>
            ) : null}
            {Array.isArray(project?.techDetails) && project.techDetails.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-3">
                {project.techDetails.map((t, i) => (
                  <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-3">
                    <div className="text-white font-medium text-sm">{t.name}</div>
                    <div className="text-white/70 text-sm mt-1">{t.why}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </section>

          {/* Challenges & Solutions */}
          {Array.isArray(project?.sections) && project.sections.length > 0 ? (
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-primary">●</span>
                <h4 className="font-semibold">Challenges &amp; Solutions</h4>
              </div>
              {project.sections.map((sec, idx) => (
                <div key={idx} className="card p-4">
                  <h5 className="font-semibold mb-2">{sec.title}</h5>
                  {sec.problem ? (
                    <div className="mb-2">
                      <div className="text-[13px] font-semibold text-[#ef4444]">Problem</div>
                      <p className="text-white/90 text-sm">{sec.problem}</p>
                    </div>
                  ) : null}
                  {sec.solution ? (
                    <div>
                      <div className="text-[13px] font-semibold text-primary">Solution</div>
                      <p className="text-white/90 text-sm">{sec.solution}</p>
                    </div>
                  ) : null}
                </div>
              ))}
            </section>
          ) : null}

          {/* Fallback highlights */}
          {(!project?.sections || project.sections.length === 0) &&
          Array.isArray(project?.features) &&
          project.features.length > 0 ? (
            <section className="card p-4">
              <h4 className="font-semibold mb-2">Highlights</h4>
              <ul className="list-disc list-inside space-y-2 text-white/90">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <div className="flex items-center justify-between gap-3 p-4 border-t border-white/10">
          <div className="text-white/60 text-sm">
            {project?.codeRef ? `Codebase: ${project.codeRef}` : null}
          </div>
          <div className="flex items-center gap-2">
            {project?.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm"
              >
                Visit Live
              </a>
            ) : null}
            {project?.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-sm"
              >
                Code
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  , document.body);
}


