import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/footer";

const SECTIONS = ["home", "skills", "projects", "experience", "contact"];

function App() {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    }
  }, []);

  // Apply theme attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll spy: update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar
        sections={SECTIONS}
        activeSection={activeSection}
        onNavClick={scrollToSection}
        onContactClick={() => scrollToSection("contact")}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="home">
        <Hero
          onProjectsClick={() => scrollToSection("projects")}
          onContactClick={() => scrollToSection("contact")}
        />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

