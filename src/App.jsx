import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import CareerTimeline from "./components/CareerTimeline.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import FloatingContact from "./components/FloatingContact.jsx";


export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="timeline" className="section">
          <CareerTimeline />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      {/* <FloatingContact /> */}
    </div>
  );
}


