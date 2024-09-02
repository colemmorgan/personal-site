import React, { useEffect, useRef, useState } from "react";
import { FcLinux } from "react-icons/fc";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { AnimatePresence, useInView, motion } from "framer-motion";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(navRef, { amount: 0.5, once: false });
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className="h-[15%] flex py-6 px-6 lg:px-12" ref={navRef}>
        <div className="w-[40%]">
          <p className="text-lg font-medium">Cole Morgan</p>
          <p className="text-xs hidden md:flex items-center gap-1">
            Student & Web-Developer{" "}
            <span className="text-xl">
              <FcLinux />
            </span>
          </p>
        </div>
        <div className="w-[20%] flex items-start justify-center ">
          <img src="/favicon.svg" alt="" className="max-w-9 hidden md:flex" />
        </div>
        <div className="flex gap-6 text-sm items-center h-fit w-[40%] justify-end">
          <p className="hidden md:block cursor-not-allowed">Resume</p>
          <span
            className="ml-4 text-2xl cursor-pointer"
            onClick={() => setShowMenu(true)}
          >
            <IoMenu />
          </span>
        </div>
      </nav>
      {showMenu && (
        <div
          className="fixed inset-0  bg-black bg-opacity-55 z-50 backdrop-blur-[4px] flex p-6 justify-end"
          onClick={() => setShowMenu(false)}
        >
          <div
            className="bg-white h-full w-[360px] rounded-[20px] py-8 px-8 relative flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute top-6 right-8 text-2xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose />
            </span>
            <div className="flex items-center gap-3.5">
              <img
                src="/me.jpg"
                alt=""
                className="w-16 h-[60px] rounded-full"
              />
              <div className="">
                <p className="font-medium text-base">Cole Morgan</p>
                <p className="text-sm font-[350]">colemmorgann@gmail.com</p>
                <p></p>
              </div>
            </div>
            <div className="">
              <p className="text-2xl font-semibold">Cole Morgan</p>
              <ul className="mt-4 gap-2 flex flex-col">
                <li>
                  <a href="#about" onClick={() => setShowMenu(false)}>
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setShowMenu(false)}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setShowMenu(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="text-sm font-[350]">
                © 2024 Cole Morgan. <br /> All rights reserved.
              </p>
              <ul className="flex mt-6 gap-4 text-lg">
                <li className="custom-dull p-2  rounded-full">
                  <a href="https://github.com/colemmorgan" target="_blank">
                    {" "}
                    <FaGithub />
                  </a>
                </li>
                <li className="custom-dull p-2  rounded-full">
                  <a
                    href="https://www.linkedin.com/in/cole-morgan-748045253/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="custom-dull p-2  rounded-full">
                  <a href="https://devpost.com/colemmorgan" target="_blank">
                    {" "}
                    <SiDevpost />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence>
      {!isInView && scrollDirection === "up" && (
          <motion.nav
            className="z-40 fixed left-0 right-0 px-4 md:px-8 xl:px-20"
            initial={{ top: 0, opacity: 0 }}
            animate={{ top: 12, opacity: 1 }}
            exit={{ top: -28, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-white w-full px-6 py-2 rounded-full flex justify-between nav__box-shadow">
              <p className="font-medium text-base sm:text-lg">Cole Morgan</p>
              <div className="flex gap-3 items-center">
                <span className="text-2xl cursor-pointer" onClick={() => setShowMenu(true)}><IoMenu/></span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
export default Nav;
