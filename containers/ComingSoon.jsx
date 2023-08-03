import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaDribbble } from "react-icons/fa6";
import TypingText from "@/components/TypingText";

export default function ComingSoonContainer() {
  return (
    <div className="h-screen relative z-0 w-full bg-[#08111F] bg-[url('/images/coming.png')] bg-contain bg-no-repeat bg-center overflow-hidden aspect-none">
      <div className="flex w-full mx-auto">
        <Image src="/images/logo.png" width={310} height={220} alt="Brand logo" placeholder="blur" blurDataURL="data" priority className="max-w-[21.5vw] max-h-[21.4vh] object-contain" />
        <div className="flex flex-1 justify-center max-w-[65vw]">
          {/* <p className="text-[46px] text-center text-white leading-[96px] font-poppins font-thin ">Launching Soon...</p> */}
          <TypingText text="Launching Soon. . ." />
        </div>
      </div>

      {/* Email form */}
      <div className="w-full absolute z-10 bottom-[3.14%] flex justify-center">
        <div className="max-w-[52vw] w-full flex flex-row h-[72.1px] rounded-[10px] bg-white ">
          <input type="email" placeholder="Email Address" className="w-full h-[72.1px] p-4 rounded-[10px] outline-0 border-none text-black text-2xl font-normal font-poppins placeholder:text-black/60 placeholder:text-2xl placeholder:font-normal" />
          <button className="h-[72.1px] text-white w-full max-w-[246.81px] bg-secondary/80 hover:bg-secondary transition duration-300 ease-in-out delay-75 rounded-r-[10px] text-2xl font-poppins font-normal">Notify Me</button>
        </div>
      </div>

      {/* Balls */}
      <div className=" absolute bottom-[-3.2vh] left-[-52vh] z-[1] w-[73.632vh] h-[73.632vh] rounded-full gradient1"></div>
      <div className="flex flex-col justify-center gap-7 absolute bottom-[-3.2vh] right-[-52vh] z-[1] w-[73.632vh] h-[73.632vh] rounded-full gradient2 pl-[5%]">
        {/* <FaFacebookF color="#fff" size={30} /> */}
        {/* <FaTwitter color="#fff" size={30} className="cursor-pointer" /> */}
        <Link href="" target="_blank">
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
