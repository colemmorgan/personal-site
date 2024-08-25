import React from 'react';
import { FcLinux } from 'react-icons/fc';
import { IoMenu } from 'react-icons/io5';

type NavProps = {
    
};

const Nav:React.FC<NavProps> = () => {
    
    return (
        <nav className="h-[15%] flex justify-between  py-6 px-12">
            <div className="">
              <p className="text-lg font-medium">Cole Morgan</p>
              <p className="text-sm flex items-center gap-1">
                Student & Web-Developer{" "}
                <span className="text-xl">
                  <FcLinux />
                </span>
              </p>
            </div>
            <div>
              <img src="/favicon.svg" alt="" className="max-w-9" />
            </div>
            <div className="flex gap-6 text-sm items-center h-fit ">
              <p>Resume</p>
              <p>Contact</p>
              <span className="ml-4 text-2xl cursor-pointer">
                <IoMenu />
              </span>
            </div>
          </nav>
    )
}
export default Nav;