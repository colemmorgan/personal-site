import React from "react";
import SplitContainer from "../about-components/SplitContainer";
import {FaLinkedinIn } from 'react-icons/fa';
import Form from "./Form";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="px-16 relative  py-12 rounded-2xl mt-8" id="contact">
      <SplitContainer
        left={<h3 className="font-medium text-3xl">Contact</h3>}
        right={<ContactRight />}
      />
    </div>
  );
};
export default Contact;

const ContactRight: React.FC = () => {
  return (
    <div className="">
      <p className="text-xl font-semibold py-2 ">
        Let's get in touch!{" "}
        <span className="font-normal">
          Send me a message below or contact me at one of my socials.
        </span>
      </p>
      <div className="flex gap-4 mt-1 items-center">
        <p className="text-lg ">
          Email: <span className="font-semibold">colemmorgann@gmail.com</span>
        </p>
        <a className="p-1.5 text-sm bg-[#1e1e1e] text-white rounded-full" href="https://www.linkedin.com/in/cole-morgan-748045253/" target="_blank"><FaLinkedinIn/></a>
      </div>
      <Form />
    </div>
  );
};


