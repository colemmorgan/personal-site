import "./App.css";

import Nav from "./components/hero-components/Nav";
import HeroBottom from "./components/hero-components/HeroBottom";
import HeroCenter from "./components/hero-components/HeroCenter";
import About from "./components/about-components/About";
import Projects from "./components/project-components/Projects";
import Contact from "./components/contact-components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="custom-height w-full md:py-4 lg:py-5 md:px-4 lg:px-12">
        <div className="h-full  w-full bg-[#f6f5fa] md:rounded-2xl ">
          <Nav />
          <HeroCenter />
          <HeroBottom />
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
