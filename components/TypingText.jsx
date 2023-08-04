"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText({ words }) {
  return (
    <span className="text-[35px] text-center text-white leading-[84px] font-poppins font-thin ">
  <Typewriter words={words} loop={false} typeSpeed={120}
            deleteSpeed={50}  /></span>);
}
