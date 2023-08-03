"use client";
import Image from "next/image";
import React, { useRef } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaDribbble } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

export default function ComingSoonContainer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_2i1bf27', 'template_xk7st4e', form.current, 'F6ufjQHQIKDkpfu9d')
    .then((result) => {
      // show the user a success message
      alert('Email sent successfully!');
      form.current.reset(); // reset the form
    }, (error) => {
      // show the user an error
      alert('An error occurred while sending the email: ' + error.text);
    });
  };

  return (
    <div className="h-screen relative z-0 w-full bg-[#08111F] bg-[url('/images/coming.png')] bg-contain bg-no-repeat bg-center overflow-hidden">
      <div className="flex w-full mx-auto">
        <Image src="/images/logo.png" width={310} height={220} alt="Brand logo" placeholder="blur" blurDataURL="data" priority className="max-w-[21.5vw] max-h-[21.4vh] object-contain" />
        <div className="flex flex-1 justify-center max-w-[70%]">
          <p className="text-[64px] text-center text-white leading-[96px] font-poppins font-thin ">Launching Soon...</p>
        </div>
      </div>

      <form ref={form}>
        {/* Email form */}
        <div className="w-full absolute z-10 bottom-[3.14%] flex justify-center">
          <div className="max-w-[52vw] w-full flex flex-row h-[72.1px] rounded-[10px] bg-white ">
            <input type="email" name="message" placeholder="Email Address" className="w-full h-[72.1px] p-4 rounded-[10px] outline-0 border-none text-black text-[28px] font-normal font-poppins placeholder:text-black/60 placeholder:text-[28px] placeholder:font-normal" />
            <button onClick={sendEmail} className="h-[72.1px] text-white w-full max-w-[246.81px] bg-secondary rounded-r-[10px] text-[32px] font-poppins font-normal">Notify Me</button>
          </div>
        </div>
      </form>

      {/* Balls */}
      <div className=" absolute bottom-[-3.2vh] left-[-52vh] z-[1] w-[73.632vh] h-[73.632vh] rounded-full gradient1"></div>
      <div className="flex flex-col justify-center gap-6 absolute bottom-[-3.2vh] right-[-52vh] z-[1] w-[73.632vh] h-[73.632vh] rounded-full gradient2 pl-[6%]">
        <FaFacebookF color="#fff" size={30} />
        <FaTwitter color="#fff" size={30} />
        <FaLinkedinIn color="#fff" size={30} />
        <FaInstagram color="#fff" size={30} />
        <FaDribbble color="#fff" size={30} />
      </div>
    </div>
  );
}





      {/* Email form
      <div className="w-full absolute z-10 bottom-[3.14%] flex justify-center">
        <div className="max-w-[52vw] w-full flex flex-row h-[72.1px] rounded-[10px] bg-white ">
          <input type="email" placeholder="Email Address" className="w-full h-[72.1px] p-4 rounded-[10px] outline-0 border-none text-black text-[28px] font-normal font-poppins placeholder:text-black/60 placeholder:text-[28px] placeholder:font-normal" />
          <button className="h-[72.1px] text-white w-full max-w-[246.81px] bg-secondary rounded-r-[10px] text-[32px] font-poppins font-normal">Notify Me</button>
        </div>
      </div> */}