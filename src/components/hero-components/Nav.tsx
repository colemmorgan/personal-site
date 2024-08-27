import React from 'react';
import { FcLinux } from 'react-icons/fc';
import { IoMenu } from 'react-icons/io5';

type NavProps = {
    
};

const Nav:React.FC<NavProps> = () => {
    
    return (
        <nav className="h-[15%] flex py-6 px-6 lg:px-12">
            <div className="w-[40%]">
              <p className="text-lg font-medium">Cole Morgan</p>
              <p className="text-sm hidden md:flex items-center gap-1">
                Student & Web-Developer{" "}
                <span className="text-xl">
                  <FcLinux />
                </span>
              </p>
            </div>
            <div className='w-[20%] flex items-start justify-center '>
              <img src="/favicon.svg" alt="" className="max-w-9 hidden md:flex" />
            </div>
            <div className="flex gap-6 text-sm items-center h-fit w-[40%] justify-end">
              <p className='hidden md:block'>Resume</p>
              <p className='hidden md:block'>Contact</p>
              <span className="ml-4 text-2xl cursor-pointer">
                <IoMenu />
              </span>
            </div>
          </nav>
    )
}
export default Nav;