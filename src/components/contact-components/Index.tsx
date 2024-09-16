import React from "react";
import SplitContainer from "../SplitContainer";
import { FaLinkedinIn } from "react-icons/fa";
import Form from "./Form";
import AnimatedFadeUp from "../motion-components/AnimatedFadeUp";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="md:px-6 lg:px-16 relative py-12 rounded-2xl sm:mt-4 lg:mt-8" id="contact">
      <SplitContainer
        left={<h3 className="font-medium text-2xl sm:text-3xl">Contact</h3>}
        right={<ContactRight />}
      />
    </div>
  );
};
export default Contact;

const ContactRight: React.FC = () => {
  return (
    <AnimatedFadeUp threshold={0.4}>
      <p className="text-base md:text-lg lg:text-xl font-semibold py-2 mt-3 sm:mt-4 lg:mt-0">
        Let's get in touch!{" "}
        <span className="font-normal">
          Send me a message below or contact me at one of my socials.
        </span>
      </p>
      <div className="flex gap-4 mt-1 items-center">
        <p className="text-sm md:text-base lg:text-lg ">
          Email: <span className="font-semibold">colemmorgann@gmail.com</span>
        </p>
        <a
          className="p-1.5 text-sm bg-black text-white rounded-full"
          href="https://www.linkedin.com/in/cole-morgan-748045253/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <Form />
    </AnimatedFadeUp>
  );
};
