import React, { useEffect, useState } from "react";
import { personal } from "../data/meta.js";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const IconBtn = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    const isLight = saved === "light";
    setLight(isLight);
    document.body.classList.toggle("theme-light", isLight);
  }, []);
  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    localStorage.setItem("theme", next ? "light" : "dark");
    document.body.classList.toggle("theme-light", next);
  };
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-white/10">
      <div className="container-limit flex items-center justify-between py-3">
        <a href="#home" className="inline-flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary text-primary font-extrabold">
            MA
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-[width] hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition"
          >
            {light ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path fill="currentColor" d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42Zm10.48 0 1.8-1.8 1.41 1.42-1.8 1.79-1.41-1.41ZM1 13h3v-2H1v2Zm19 0h3v-2h-3v2ZM6.76 19.16l-1.42 1.41-1.79-1.8 1.41-1.41 1.8 1.8Zm10.48 0 1.41 1.41 1.8-1.8-1.42-1.41-1.79 1.8ZM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0-5h-2v3h2V1Zm0 24h-2v-3h2v3Z"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path fill="currentColor" d="M21.64 13.01A9 9 0 0 1 11 2.36 9 9 0 1 0 21.64 13Z"/>
              </svg>
            )}
          </button>
          <IconBtn href={personal.socials.github} label="GitHub">
            {/* GitHub icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                fill="currentColor"
                d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
              />
            </svg>
          </IconBtn>
          <IconBtn href={personal.socials.linkedin} label="LinkedIn">
            {/* LinkedIn icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                fill="currentColor"
                d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h3.96v12H3zM9.5 9h3.79v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07V21H18v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.82V21H9.5z"
              />
            </svg>
          </IconBtn>
          <IconBtn href={personal.socials.twitter} label="X (Twitter)">
            {/* X icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                fill="currentColor"
                d="M20.03 3H16.9l-4.1 5.36L8.36 3H3.5l6.54 9.5L3 21h3.13l4.5-5.9L15.64 21h4.86l-6.96-10.1L20.03 3Z"
              />
            </svg>
          </IconBtn>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition"
          >
            {/* Mail icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="1.6"
                d="M3.2 7.6c0-1 0-1.5.2-1.88a2 2 0 0 1 .92-.92C4.7 4.6 5.2 4.6 6.2 4.6h11.6c1 0 1.5 0 1.88.2.4.18.74.52.92.92.2.38.2.88.2 1.88v8.8c0 1 0 1.5-.2 1.88a2 2 0 0 1-.92.92c-.38.2-.88.2-1.88.2H6.2c-1 0-1.5 0-1.88-.2a2 2 0 0 1-.92-.92c-.2-.38-.2-.88-.2-1.88V7.6Z"
              />
              <path stroke="currentColor" strokeWidth="1.6" d="m3 7 9 6 9-6" />
            </svg>
          </a>
          <a href={`${import.meta.env.BASE_URL}CV.pdf`} download className="btn btn-primary text-sm">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
