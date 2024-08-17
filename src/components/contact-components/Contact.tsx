import React from "react";
import SplitContainer from "../about-components/SplitContainer";
import {FaLinkedinIn } from 'react-icons/fa';

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
    <div className="px-4">
      <p className="text-xl font-semibold py-2 ">
        Let's get in touch!{" "}
        <span className="font-normal">
          Send me a message below or contact me at one of my socials.
        </span>
      </p>
      <div className="flex gap-6 mt-1 items-center">
        <p className="text-lg ">
          Email: <span className="font-semibold">colemmorgann@gmail.com</span>
        </p>
        <a className="p-1.5 bg-[#1e1e1e] text-white rounded-full" href="https://www.linkedin.com/in/cole-morgan-748045253/" target="_blank"><FaLinkedinIn/></a>
      </div>
      <Form />
    </div>
  );
};

const Form: React.FC = () => {
  return (
    <form action="" className="w-full mt-6">
      <div>
        <label htmlFor="" className="text-lg">
          Email:
        </label>
        <input
          type="text"
          placeholder="email@email.com"
          className="w-full border border-gray-300 mt-2 rounded-md px-4 py-2 outline-none"
        />
      </div>
      <div className="mt-6">
        <label htmlFor="" className="text-lg">
          Name:
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full border border-gray-300 mt-2 rounded-md px-4 py-2 outline-none"
        />
      </div>
      <div className="mt-6">
        <label htmlFor="" className="text-lg">
          Message:
        </label>
        <textarea
          name=""
          id=""
          rows={3}
          className="w-full border border-gray-300 mt-2 rounded-md px-4 py-2 resize-none outline-none"
          placeholder="Your message here."
        ></textarea>
      </div>
      <button className="w-full bg-[#1e1e1e] text-white rounded-md py-2 mt-6 text-sm">
        Send Message
      </button>
    </form>
  );
};
