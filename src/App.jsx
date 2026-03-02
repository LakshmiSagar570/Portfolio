import { useEffect } from "react";
import Navbar from "./components/Navbar";
import GlassHero from "./components/GlassHero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ResearchPapers from "./components/ResearchPapers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell text-slate-100">
      <div className="ambient-glow ambient-glow-blue" />
      <div className="ambient-glow ambient-glow-green" />
      <Navbar />
      <GlassHero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <ResearchPapers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
