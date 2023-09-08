import React from "react";
import Image from 'next/image';

const MobileFooter = () => {
  return (
    <div className="items-start flex bg-[#10181f] flex-col h-[653px] relative max-w-[640px]">
      <div className="text-[#8294a3] text-base font-medium tracking-[2px] h-auto left-[50%] transform translate-x-[-50%] absolute leading-[46px]">
        ABOUT US
      </div>
      <p className="text-[#8294a3] text-base font-normal h-60 tracking-[0] leading-[30px] max:w-[363px] mx-8 absolute top-[70px]">
      Algorinth Labs pioneers secure smart contract audits, comprehensive testing, and cutting-edge software
                        development, driving the evolution of decentralized technologies.
      </p>
      <div className="text-[#8294a3] text-base font-medium tracking-[2px] h-auto left-[50%] transform translate-x-[-50%] absolute top-[250px]">
        CONNECT WITH US
        <div className="grid pl-10 grid-cols-2 mt-8">
                        <div className="col-span-1">
                        <div className="inline-flex absolute text-xs px-2 pb-1">
                            <Image className="img h-5 w-5" alt="Twitter alt svg" src="/images/twitter-alt-svg.svg" width={30}
                            height={30} />                            
                            <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">Twitter</div>
                            </div>

                            </div>
                            <div className="col-span-1">

                            </div>
                            
                            
                        
                    </div>
      </div>
    
    </div>
  );
};
export default MobileFooter;
