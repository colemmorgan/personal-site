import "./App.css";

import Nav from "./components/hero-components/Nav";
import HeroBottom from "./components/hero-components/HeroBottom";
import HeroCenter from "./components/hero-components/HeroCenter";
import About from "./components/about-components/About";
import Projects from "./components/project-components/Projects";

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
      <div className="py-12 px-16 relative">
        <About />
      </div>
      <div className="px-16 relative">
        <div className="bg-[#fcfbfd] py-12 rounded-2xl mt-8">
          <Projects/>
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}

export default App;
