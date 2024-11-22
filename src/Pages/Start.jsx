import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Projects from "../components/Projects";


const Start = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, document.title, "/home");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState({}, document.title, "/home");
      }
    }
  }, [location]);

  return (
    <div>
      <section id="start">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default Start;
