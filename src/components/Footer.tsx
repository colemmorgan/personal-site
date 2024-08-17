import React from "react";

type footerProps = {};

const Footer: React.FC<footerProps> = () => {
  return (
    <footer className="px-16 py-8 mt-10">
      <div className="max-w-[1680px]  mx-auto">
        <div className="flex justify-between items-end">
          <p className="font-medium text-xl">Cole Morgan</p>
          <ul className="flex gap-8 text-sm">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
            <a href="">Resume</a>
          </ul>
        </div>
        <div className="mt-8 flex justify-between items-center">
            <p className="text-sm font-light">© 2024 Cole Morgan. All rights reserved.</p>
            <img src="/favicon.svg" alt=""  className="max-w-8"/>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
