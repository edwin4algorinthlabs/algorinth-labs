"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText({ text }) {
  return (
    <span className="text-[46px] text-center text-white leading-[96px] font-poppins font-thin ">
  <Typewriter words={[text]} loop={false} typeSpeed={120}
            deleteSpeed={50}  /></span>);
}
