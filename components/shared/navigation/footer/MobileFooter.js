"use client"

import React from "react";
import Image from 'next/image';
import './MobileFooter.css';

const MobileFooter = () => {
  return (
    <div className="items-start flex bg-[#10181f] flex-col h-[693px] relative max-w-[640px]">
      <div className="text-[#8294a3] text-base font-medium tracking-[2px] h-auto left-[50%] transform translate-x-[-50%] absolute leading-[46px]">
        ABOUT US
      </div>
      <p className="text-[#8294a3] text-base font-normal h-60 tracking-[0] leading-[30px] max:w-[363px] mx-8 absolute top-[70px]">
        Algorinth Labs pioneers secure smart contract audits, comprehensive testing, and cutting-edge software
        development, driving the evolution of decentralized technologies.
      </p>
      <div className="text-[#8294a3] text-base font-medium tracking-[2px] left-[50%] transform translate-x-[-50%] absolute top-[220px]">
        <p className="flex justify-center">CONNECT WITH US</p>
        <div className="grid pl-10 grid-cols-2 mt-6">
          <div className="col-span-1">
            <div className="inline-flex absolute text-xs px-2 pb-1">
              <Image className="img h-5 w-5" alt="Twitter alt svg" src="/images/twitter-alt-svg.svg" width={30}
                height={30} />
              <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">Twitter</div>
            </div>
            <div className="inline-flex mt-10 px-2 pb-1">
              <Image className="img h-5 w-5" alt="Twitter alt svg" src="/images/linkedin-square-svg.svg" width={30}
                height={30} />
              <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">LinkedIn</div>
            </div>
            <div className="inline-flex mt-5 px-2 pb-1">
              <Image className="img h-5 w-5" alt="Twitter alt svg" src="/images/github-svg.svg" width={145}
                height={129} />
              <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">GitHub</div>
            </div>
          </div>


          <div className="col-span-1 xs:hide-excess">
            <div className="px-2 text-xs pb-6">
              <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">Careers</div>
            </div>
            <div className="px-2 pb-5">
              <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">Resources</div>
            </div>
            <div className="px-2 pb-5">
              <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">Blog</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#8294a3] text-base tracking-[2px] font-medium left-[50%] transform translate-x-[-50%] absolute top-[420px]">
        <p className="flex justify-center tracking-[0px]">JOIN OUR NEWSLETTER</p></div>

      <p className="text-[#8294a3] text-base font-normal h-60 tracking-[0] flex justify-center leading-[30px] max:w-[463px] mx-8 absolute top-[460px]">
        Stay informed about our latest work and industry news:
      </p>
      <br></br>
      <div className="input items-start bg-black border-[#2a333d] rounded top-[520px] left-[50%] transform translate-x-[-50%] h-10 absolute">
        <div className="items-start flex relative">
          <form>
            <input onChange={(e) => {
            }}
              name={'name'} required maxLength={"100"}
              type='text'
              className={"px-6 py-3 align-middle bg-black text-white rounded-lg w-50"}
              placeholder="name@email.com"
            />
          </form>
        </div>
      </div>
      <div className="items-start rounded inline-flex pl-4 pr-[17.27px] py-1.5 border-[3px] border-solid border-[#576675] left-[50%] transform translate-x-[-50%] top-[570px] relative"> {/*left-[5px]*/}

        <div className="text-[#576675] text-xs font-medium leading-7 -mt-1 relative text-center whitespace-no-wrap">SUBSCRIBE</div>
      </div>
    </div>
  );
};
export default MobileFooter;
