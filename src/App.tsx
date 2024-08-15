import "./App.css";

import Nav from "./components/hero-components/Nav";
import HeroBottom from "./components/hero-components/HeroBottom";
import HeroCenter from "./components/hero-components/HeroCenter";
import Scene from "./components/WobbleSphere";
import Skills from "./components/about-components/Skills";
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
        <div className="flex h-screen mx-auto max-w-[1680px]">
          <div className="w-[23%]">
            <h3 className="font-medium text-3xl">About Me</h3>
          </div>
          <div className="w-[77%] px-4">
           <Skills/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
