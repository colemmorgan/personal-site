import React from "react";
import Nav from "./Nav";
import HeroCenter from "./HeroCenter";
import HeroBottom from "./HeroBottom";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="custom-height w-full md:py-4 lg:py-5 md:px-4 lg:px-12">
      <div className="h-full  w-full bg-lightPurple md:rounded-2xl ">
        <Nav />
        <HeroCenter/>
        <HeroBottom />
      </div>
    </div>
  );
};
export default Hero;
