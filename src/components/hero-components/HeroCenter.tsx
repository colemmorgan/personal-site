import React, { useState } from "react"
import SignatureAnimated from "../motion-components/SignatureAnimated"
import { AnimatePresence, motion } from "framer-motion"
import Scene from "../WobbleSphere"

type HeroCenterProps = {}

const HeroCenter: React.FC<HeroCenterProps> = () => {
  const [animating, setAnimating] = useState<boolean>(true)

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
              <p className="text-lg sm:text-2xl font-medium text-[#292929]">Hello, I'm Cole Morgan!</p>
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
          <div className="max-w-[770px] text-[32px] md:text-5xl lg:text-[52px] xxl:text-[56px] lg:leading-[1.25]  text-center mb-0.5 overflow-hidden relative z-10 nohemi px-3">
            <motion.p
              key={"Title"}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.65, delay: 0.4 }}
            >
              {/* Web Developer <br className="sm:hidden" /> &{" "}
              <br className="hidden sm:inline" />
              <span className="hidden sm:inline">Computer Science </span>{" "}
              <span className="md:hidden">CS </span>Student */}
              Hi! I'm Cole Morgan.
            </motion.p>
          </div>
          <div className=" max-w-[600px] md:max-w-[650px] lg:max-w-[720px] px-4 sm:text-lg md:text-xl lg:text-[22px] lg:leading-normal text-center font-medium overflow-hidden relative z-10">
            <motion.p
              initial={{ y: 140, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.65, delay: 0.45 }}
            >
              I'm a web developer focused on creating unique and functional user experiences.{" "}
              <span className="hidden sm:inline"> I'm also a student at the University of Florida.</span>
            </motion.p>
          </div>
          <div className="flex gap-4 items-center mt-3 relative z-10 overflow-hidden py-1 text-sm sm:text-base px-8">
            <motion.div
              className="rounded-full"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.65, delay: 0.5 }}
            >
              <a href="#contact" className="bg-black text-white hover:scale-105 px-10 py-1 sm:py-1.5 rounded-full block cursor-pointer hero-button">
                Contact
              </a>
            </motion.div>
            <motion.div
              className="rounded-full"
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.65, delay: 0.65 }}
            >
              <a href="#projects" className="bg-white px-10 py-1 sm:py-1.5 rounded-full hover:scale-105 block cursor-pointer hero-button">
                Projects
              </a>
            </motion.div>
          </div>
        </>
      )}
      <Scene animating={animating} />
    </div>
  )
}
export default HeroCenter
