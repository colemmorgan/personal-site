import React from 'react';
import SplitContainer from '../about-components/SplitContainer';

type ContactProps = {
    
};

const Contact:React.FC<ContactProps> = () => {
    
    return (
        <>
        <SplitContainer left={<h3 className='font-medium text-3xl'>Contact</h3>} right={<ContactRight/>}/>
        </>
        
    )
}
export default Contact;


const ContactRight:React.FC = () => {
    return (
        <>
        <p className='text-xl font-semibold py-2'>Let's get in touch! <span className='font-normal'>Send me a message below or contact me at one of my socials.</span></p>
        <div className="flex gap-4 mt-1">
        <p className='text-lg '>Email: <span className='font-semibold'>colemmorgann@gmail.com</span></p>
        <p className='text-lg '>LinkedIn: <span className='font-semibold underline'>https://www.linkedin.com/in/cole-morgan-748045253/</span></p>
        </div>
        <Form/>
        </>
    )
}


const Form: React.FC = () => {
    return (
        <form action="" className='w-full mt-8'>
            <div>
                <label htmlFor="" className='text-lg'>Email:</label>
                <input type="text" placeholder='email@email.com' className='w-full border border-gray-300 mt-2 rounded-md px-4 py-2 outline-none'/>
            </div>
            <div className='mt-6'>
                <label htmlFor="" className='text-lg'>Name:</label>
                <input type="text" placeholder='John Doe' className='w-full border border-gray-300 mt-2 rounded-md px-4 py-2 outline-none'/>
            </div>
            <div className='mt-6'>
                <label htmlFor="" className='text-lg'>Message:</label>
                <textarea name="" id="" rows={3} className='w-full border border-gray-300 mt-2 rounded-md px-4 py-2 resize-none outline-none' placeholder='Your message here.'></textarea>
            </div>
            <button className='w-full bg-[#1e1e1e] text-white rounded-md py-1.5 mt-6'>Send Message</button>
        </form>
    )
}