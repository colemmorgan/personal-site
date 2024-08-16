import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { GoArrowDownRight } from "react-icons/go";

type HeroBottomProps = {
    
};

const HeroBottom:React.FC<HeroBottomProps> = () => {
    
    return (
        <div className="h-[15%] flex justify-between items-end pl-14">
            <div className="max-w-[170px]  pb-6">
              <p className="text-sm leading-relaxed mb-4 pl-1 text-[#64606f]">
                Feel feel to reach out to me or check my socials!
              </p>
              <ul className="flex gap-5 text-lg text-[#404040]">
                <a className="bg-white p-2.5 rounded-full cursor-pointer">
                  <FaGithub />
                </a>
                <a className="bg-white p-2.5 rounded-full cursor-pointer">
                  <FaLinkedinIn />
                </a>
                <a className="bg-white p-2.5 rounded-full cursor-pointer">
                  <SiDevpost />
                </a>
              </ul>
            </div>
            <div className="bg-white py-3 flex items-center text-[13px] rounded-tl-xl px-4 gap-2">
              <a href="" className="py-1 px-4 rounded-full ">
                About Me
              </a>
              <a href="" className="py-1 px-4 rounded-full ">
                Projects
              </a>
              <a href="" className="bg-black py-1 px-4 text-white rounded-full flex items-center gap-2">
                Contact
                <span className='bg-white text-black rounded-full p-[1px] '><GoArrowDownRight/></span>
              </a>
            </div>
          </div>
    )
}
export default HeroBottom;