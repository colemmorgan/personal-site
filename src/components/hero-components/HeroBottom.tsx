import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { GoArrowDownRight } from "react-icons/go";

type HeroBottomProps = {
    
};

const HeroBottom:React.FC<HeroBottomProps> = () => {
    
    return (
        <div className="h-[15%] flex justify-between items-end pl-6 lg:pl-12">
            <div className="max-w-[170px]  pb-6">
              <ul className="flex gap-5 text-lg text-[#404040]">
                <a className="bg-white p-2.5 rounded-full cursor-pointer" href='https://www.linkedin.com/in/cole-morgan-748045253/' target='_blank'>
                  <FaGithub />
                </a>
                <a className="bg-white p-2.5 rounded-full cursor-pointer" href='https://github.com/colemmorgan' target='_blank'>
                  <FaLinkedinIn />
                </a>
                <a className="bg-white p-2.5 rounded-full cursor-pointer" href='https://devpost.com/colemmorgan' target='_blank'>
                  <SiDevpost />
                </a>
              </ul>
            </div>
            <div className="bg-white py-3 hidden sm:flex items-center text-[13px] rounded-tl-xl px-4 gap-2 ">
              <a href="#about" className="py-1 px-4 rounded-full ">
                About Me
              </a>
              <a href="#projects" className="py-1 px-4 rounded-full ">
                Projects
              </a>
              <a href="#contact" className="bg-black py-1 px-4 text-white rounded-full flex items-center gap-2">
                Contact
                <span className='bg-white text-black rounded-full p-[1px] '><GoArrowDownRight/></span>
              </a>
            </div>
          </div>
    )
}
export default HeroBottom;