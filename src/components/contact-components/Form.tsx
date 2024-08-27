import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type FormProps = {};

const Form: React.FC<FormProps> = () => {
  const [emailState, setEmailState] = useState<'inactive' | 'loading' | 'error'>('inactive')
  const form = useRef<HTMLFormElement>(null);
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const service = import.meta.env.VITE_SERVICE;
  const template = import.meta.env.VITE_TEMPLATE;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    if (!form.current) return;
    e.preventDefault();
    setEmailState('loading')
    
    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setEmailState('inactive')
        },
        () => {
          setEmailState('error');
        }
      );
  };

  return (
    <form action="" className="w-full mt-4 md:mt-6" ref={form} onSubmit={sendEmail}>
      <div>
        <label htmlFor="" className="text-sm md:text-base lg:text-lg">
          Email:
        </label>
        <input
          type="email"
          required
          name="user_email"
          placeholder="email@email.com"
          className="w-full border border-gray-300 mt-2 rounded-md px-3 py-2 outline-none text-sm md:text-base"
        />
      </div>
      <div className="mt-6">
        <label htmlFor="" className="text-sm md:text-base lg:text-lg">
          Name:
        </label>
        <input
          name="user_name"
          required
          type="text"
          placeholder="John Doe"
          className="w-full border border-gray-300 mt-2 rounded-md px-3 py-2 outline-none text-sm md:text-base"
        />
      </div>
      <div className="mt-6">
        <label htmlFor="" className="text-sm md:text-base lg:text-lg">
          Message:
        </label>
        <textarea
          name="message"
          required
          id=""
          rows={3}
          className="w-full border border-gray-300 mt-2 rounded-md px-3 py-2 resize-none outline-none text-sm md:text-base"
          placeholder="Your message here."
        ></textarea>
      </div>
      <button className="w-full bg-[#1e1e1e] text-white rounded-md py-2 mt-6 text-xs md:text-sm" type="submit">
        {emailState === 'inactive' && "Send Message"}
        {emailState === 'error' && "Messaging service down. Please send an email."}
        {emailState === 'loading' && "Loading..."}
      </button>
    </form>
  );
};
export default Form;
