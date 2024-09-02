import "./App.css";
import About from "./components/about-components/About";
import Projects from "./components/project-components/Projects";
import Contact from "./components/contact-components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Hero from "./components/hero-components/Hero";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"; // Scrolls page to top on refresh.
  }, []);

  return (
    <>
      <Hero/>
      <About />
      <Projects />
      <Contact />
      <Footer /> 
    </>
  );
}

export default App;
