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
      <div className="h-screen w-full  py-6 px-12">
        <div className="h-full w-full bg-[#f6f5fa] rounded-2xl">
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
