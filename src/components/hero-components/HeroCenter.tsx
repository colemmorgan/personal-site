import React, { useState } from "react";
import SignatureAnimated from "../motion-components/SignatureAnimated";
import { AnimatePresence, motion } from "framer-motion";
import Scene from "../WobbleSphere";

type HeroCenterProps = {};

const HeroCenter: React.FC<HeroCenterProps> = () => {
  const [animating, setAnimating] = useState<boolean>(true);



  return (
    <div className="flex flex-col items-center justify-center h-[70%] relative ">
      <AnimatePresence>
        {animating && (
          <motion.div
            key={"Intro"}
            className="flex flex-col items-center relative z-10"
            layout
            initial={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <p className="text-lg sm:text-2xl font-medium text-[#292929]">
                Hello, I'm Cole Morgan!
              </p>
              <span className="border border-[#B8B8B8] rounded-full px-3 py-1 text-xs sm:text-sm ">
                Web-Developer
              </span>
            </div>
            <SignatureAnimated setAnimating={setAnimating} />
          </motion.div>
        )}
      </AnimatePresence>
      {!animating && (
        <>
          <div className="max-w-[770px] text-4xl md:text-5xl lg:text-[52px] xxl:text-[56px] lg:leading-[1.25]  text-center mb-2 sm:mb-4 overflow-hidden relative z-10 nohemi px-3">
            <motion.p
              key={"Title"}
              initial={{ y: 180, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
            >
              Web Developer <br className="sm:hidden" /> &{" "}
              <br className="hidden sm:inline" />
              <span className="hidden sm:inline">Computer Science </span>{" "}
              <span className="md:hidden">CS </span>Student
            </motion.p>
          </div>
          <div className=" max-w-[600px] md:max-w-[650px] lg:max-w-[720px] px-4 text-lg md:text-xl lg:text-[22px] lg:leading-normal text-center font-medium overflow-hidden relative z-10">
            <motion.p
              key={"Subtitle"}
              initial={{ y: 140, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.65, delay: 0.5 }}
              className="opacity-0"
            >
              I'm a web developer focused on creating unique and functional user
              experiences. I'm also a student at the University of Florida.
            </motion.p>
          </div>
        </>
      )}
      <Scene animating={animating} />
    </div>
  );
};
export default HeroCenter;
