import React, { useState } from "react";
import SignatureAnimated from "../ui/SignatureAnimated";
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
            className="flex flex-col items-center relative z-10"
            layout
            initial={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <p className="text-2xl font-medium text-[#292929]">
                Hello, I'm Cole Morgan!
              </p>
              <span className="border border-[#B8B8B8] rounded-full px-4 py-1.5 text-sm ">
                Web-Developer
              </span>
            </div>
            <SignatureAnimated setAnimating={setAnimating}/>
          </motion.div>
        )}
      </AnimatePresence>
      {!animating && (
        <>
          <div className="max-w-[800px] text-6xl leading-[1.125] text-center mb-4 overflow-hidden relative z-10 nohemi">
            <motion.p
              initial={{ y: 180, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
            >
              Web Developer & Computer Science Student
            </motion.p>
          </div>
          <div className="max-w-[720px] text-2xl leading-relaxed text-center font-medium overflow-hidden relative z-10">
            <motion.p
              initial={{ y: 140, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.65, delay: 0.5 }}
            >
              I'm a web developer focused on creating unique and functional user
              experiences. I'm also a student at the University of Florida.
            </motion.p>
          </div>
        </>
      )}
      <Scene animating={animating}/>
    </div>
  );
};
export default HeroCenter;
