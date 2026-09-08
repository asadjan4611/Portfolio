"use client";

import { useState } from "react";
import { personal } from "../data/meta.js";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { href: "#about", label: "Approach" },
  { href: "#experience", label: "Experience" },
  { href: "#open-source", label: "Open source" },
  { href: "#work", label: "Selected work" },
  { href: "#writing", label: "Blog" },
  { href: "#credentials", label: "Credentials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-container nav-inner">
        <a href="#home" className="brand" aria-label="Muhammad Asad, back to top">
          <span className="brand-mark" aria-hidden="true">MA</span>
          <span>{personal.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <a href="/CV.pdf" download className="nav-cv">
            Résumé <span aria-hidden="true">↓</span>
          </a>
          <a href="#contact" className="button button-dark desktop-cta">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a href="#contact" onClick={closeMenu}>Let’s talk ↗</a>
        </nav>
      )}
    </header>
  );
}
