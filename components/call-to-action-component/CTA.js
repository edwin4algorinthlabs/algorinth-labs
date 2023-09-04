import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="div-awards">
      <div className="div-group-banner">
        <div className="div-glow-banner" />
        <div className="text-[#05050a] text-[52px] font-medium top-[74px] tracking-[-0.8px] leading-[57.2px] absolute text-center whitespace-nowrap w-fit left-[50%] transform translate-x-[-50%]">What&apos;s Next? Let&apos;s Chat!</div>
      </div>
      <ul className="flex top-[239px] space-x-24 absolute">

        <li className="bg-[#0f1720] border border-black rounded pl-6 pr-[24.81px] pt-[7px] pb-[9px] border-solid text-white text-sm font-medium tracking-[1.5px] leading-[30px] whitespace-nowrap w-fit">CONTACT US  </li>
        <li className="bg-[#0f1720] border border-black rounded pl-6 pr-[24.81px] pt-[7px] pb-[9px] border-solid text-white text-sm font-medium tracking-[1.5px] leading-[30px] whitespace-nowrap w-fit">REQUEST AN AUDIT   </li>

      </ul>
    </div>
  );
};
export default CTA;