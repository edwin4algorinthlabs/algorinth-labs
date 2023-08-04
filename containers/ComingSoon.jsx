"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaDribbble } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import EmailValidator from 'email-validator';
import TypingText from "@/components/TypingText";

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
// console.log(serviceId);
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
// console.log(templateId);
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
// console.log(publicKey);

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
      setErrorMessage("Email is required");
      // hide the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return;
    } else if (!EmailValidator.validate(emailValue)) {
      setErrorMessage("Invalid email address");
      // hide the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return;
    } else {
      setErrorMessage(null);
    }

    // emailjs.sendForm('service_g122hkf', 'template_5gigqtc', form.current, 'F6ufjQHQIKDkpfu9d')

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
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
    <div className="h-screen relative z-0 w-full bg-[#08111F] bg-[url('/images/background-resource.png')] bg-contain bg-no-repeat bg-center overflow-hidden">
      <div className="flex w-full mx-auto">
        <Image src="/images/logo.png" width={310} height={220} alt="Brand logo" placeholder="blur" blurDataURL="data" priority className="max-w-[21.5vw] max-h-[21.4vh] object-contain" />
        <div className="flex flex-1 justify-center max-w-[65vw]">
          {/* <p className="text-[46px] text-center text-white leading-[96px] font-poppins font-thin ">Launching Soon...</p> */}
          <TypingText words={["Smart Contract Audit and Testing", "Launching Soon. . ."]} />
        </div>
      </div>

      <form ref={form}>
        {/* Email form */}
        <div className="w-full absolute z-10 bottom-[3.14%] flex justify-center">
          <div className="max-w-[52vw] w-full flex flex-row h-[60px] rounded-[10px] bg-white ">
            <input type="email" name="message" placeholder="Email Address" className="w-full h-[60px] p-4 rounded-[10px] outline-0 border-none text-black text-[25px] font-normal font-poppins placeholder:text-black/60 placeholder:text-[20px] placeholder:font-normal" />
            <button onClick={sendEmail} className="h-[60px] text-white w-full max-w-[220px] bg-secondary/80 hover:bg-secondary transition duration-300 ease-in-out delay-75 rounded-r-[10px] text-2xl font-poppins font-normal">
              Notify Me
            </button>
          </div>
          {errorMessage && <div className="flex items-center justify-center absolute top-0 h-[60px] max-w-[52vw] w-full rounded-md bg-red-500 text-white px-4 py-4 text-sm text-center mx-4 animate-fade-out">{errorMessage}</div>}
          {successMessage && <div className="flex items-center justify-center border border-green-300 absolute top-0 h-[60px] max-w-[52vw] w-full rounded-md bg-green-200 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 px-4 py-4 text-sm text-center mx-4 animate-fade-out">{successMessage}</div>}
          {/* flex items-center p-4 mb-4 ml-2 text-sm text-green-800 border border-green-300 rounded-md bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800 animate-fade-out */}
        </div>
      </form>

      {/* Balls */}
      <div className=" absolute bottom-[-3.2vh] left-[-52vh] z-[1] w-[73.632vh] h-[73.632vh] rounded-full gradient1"></div>
      <div className="flex flex-col justify-center gap-7 absolute bottom-[-3.2vh] right-[-52vh] z-[1] w-[73.632vh] h-[73.632vh] rounded-full gradient2 pl-[5%]">
        {/* <FaFacebookF color="#fff" size={30} /> */}
        {/* <FaTwitter color="#fff" size={30} className="cursor-pointer" /> */}
        <Link href="#">
          <FaLinkedinIn color="#fff" size={30} className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out delay-75" />
        </Link>
        <Link href="https://instagram.com/algorinthlabs.llc?igshid=MzRlODBiNWFlZA==" target="_black">
          <FaInstagram color="#fff" size={30} className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out delay-75" />
        </Link>
        {/* <FaDribbble color="#fff" size={30} /> */}
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