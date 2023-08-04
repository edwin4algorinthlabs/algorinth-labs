"use client";
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaDribbble } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import EmailValidator from 'email-validator';

export default function ComingSoonContainer() {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    // get the email input value
    const emailInput = form.current.elements.message;
    const emailValue = emailInput.value;

    
    // validate the email input value
    if (!emailValue) {
      setErrorMessage('Email is required');
      return;
    } else if (!EmailValidator.validate(emailValue)) {
      setErrorMessage('Invalid email address');
      return;
    } else {
      setErrorMessage(null);
    }

    emailjs.sendForm('service_2i1bf27', 'template_xk7st4e', form.current, 'F6ufjQHQIKDkpfu9d')
    .then((result) => {
      // show the user a success message
      setSuccessMessage('Email sent successfully!');
      form.current.reset(); // reset the form

      // hide the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }, (error) => {
      // show the user an error
      setErrorMessage('An error occurred while sending the email: ' + error.text);

      // hide the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
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
          {errorMessage && (
            <div className="absolute top-0 left-0 right-0 rounded-b-md bg-red-500 text-white px-4 py-2 text-sm animate-fade-out">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 animate-fade-out">
              {successMessage}
            </div>
          )}
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

      {/* messages will disappear after 3 seconds using css animation */}
      <style jsx>{`
        .animate-fade-out {
          animation: fadeOut 3s forwards;
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            display: none;
          }
        }
      `}</style>
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