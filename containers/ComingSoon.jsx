import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaDribbble } from "react-icons/fa6";

export default function ComingSoonContainer() {
  return (
    <div className="min-h-screen relative z-0 w-full bg-[#08111F] bg-[url('/images/coming.png')] bg-contain bg-no-repeat bg-center overflow-x-hidden">
      <div className="flex w-full mx-auto">
        <Image src="/images/logo.png" width={310} height={220} alt="Brand logo" placeholder="blur" blurDataURL="data" priority className="w-[310px]" />
        <div className="flex flex-1 justify-center max-w-[70%]">
          <p className="text-[64px] text-center leading-[96px] font-poppins font-thin ">Launching Soon...</p>
        </div>
      </div>

      {/* Email form */}
      <div className="w-full absolute z-10 bottom-[34px] flex justify-center">
        <div className="max-w-[812px] w-full flex flex-row max-h-full h-[72.1px] rounded-[10px] bg-white ">
          <input type="email" placeholder="Email Address" className="w-full h-[72.1px] p-4 rounded-[10px] outline-0 border-none text-black text-[28px] font-normal font-poppins placeholder:text-black/60 placeholder:text-[28px] placeholder:font-normal" />
          <button className="h-[72.1px] w-full max-w-[246.81px] bg-secondary rounded-r-[10px] text-[32px] font-poppins font-normal">Notify Me</button>
        </div>
      </div>

      {/* Balls */}
      <div className="absolute bottom-[-30px] left-[-533px] z-[1] w-[754px] h-[769px] rounded-full gradient1"></div>
      <div className="flex flex-col justify-center gap-6 absolute bottom-[-30px] right-[-533px] z-[1] w-[754px] h-[769px] rounded-full gradient2 pl-[92px]">
        <FaFacebookF color="#fff" size={30} />
        <FaTwitter color="#fff" size={30} />
        <FaLinkedinIn color="#fff" size={30} />
        <FaInstagram color="#fff" size={30} />
        <FaDribbble color="#fff" size={30} />
      </div>
    </div>
  );
}
