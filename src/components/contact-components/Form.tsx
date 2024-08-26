import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

type FormProps = {};

const Form: React.FC<FormProps> = () => {
  const form = useRef<HTMLFormElement>(null);
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const service = import.meta.env.VITE_SERVICE;
  const template = import.meta.env.VITE_TEMPLATE;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    if (!form.current) return;
    e.preventDefault();
    
    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form action="" className="w-full mt-6" ref={form} onSubmit={sendEmail}>
      <div>
        <label htmlFor="" className="lg:text-lg">
          Email:
        </label>
        <input
          type="text"
          name="user_email"
          placeholder="email@email.com"
          className="w-full border border-gray-300 mt-2 rounded-md px-4 py-2 outline-none"
        />
      </div>
      <div className="mt-6">
        <label htmlFor="" className="lg:text-lg">
          Name:
        </label>
        <input
          name="user_name"
          type="text"
          placeholder="John Doe"
          className="w-full border border-gray-300 mt-2 rounded-md px-4 py-2 outline-none"
        />
      </div>
      <div className="mt-6">
        <label htmlFor="" className="lg:text-lg">
          Message:
        </label>
        <textarea
          name="message"
          id=""
          rows={3}
          className="w-full border border-gray-300 mt-2 rounded-md px-4 py-2 resize-none outline-none"
          placeholder="Your message here."
        ></textarea>
      </div>
      <button className="w-full bg-[#1e1e1e] text-white rounded-md py-2 mt-6 text-sm" type="submit">
        Send Message
      </button>
    </form>
  );
};
export default Form;
