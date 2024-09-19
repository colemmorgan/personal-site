import About from "./components/about-components/Index";
import Projects from "./components/project-components/Index";
import Contact from "./components/contact-components/Index";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Hero from "./components/hero-components/Index";

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
