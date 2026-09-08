import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import CareerTimeline from "../src/components/CareerTimeline";
import OpenSource from "../src/components/OpenSource";
import Credentials from "../src/components/Credentials";
import Writing from "../src/components/Writing";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function HomePage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section id="home" className="hero-section">
          <Hero />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="experience" className="section section-rule">
          <CareerTimeline />
        </section>
        <section id="open-source" className="section section-rule">
          <OpenSource />
        </section>
        <section id="work" className="section section-rule">
          <Projects />
        </section>
        <section id="writing" className="section section-rule">
          <Writing />
        </section>
        <section id="credentials" className="section section-rule">
          <Credentials />
        </section>
        <section id="contact" className="section section-rule">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
