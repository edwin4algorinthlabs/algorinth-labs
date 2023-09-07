import React from "react";
import Image from 'next/image';

const MobileServiceOverview = () => {
  return (
    <div className="items-start bg-[url(/images/div-services-overview_ii.jpg)] bg-[50%_50%] bg-cover flex h-[1802px] justify-center overflow-hidden relative max-w-[640px] pt-0 pb-10 px-0">
      <div className="text-[#020d17] text-3xl font-normal h-auto left-[50%] transform translate-x-[-50%] absolute tracking-[-0.5px] leading-[46px]">
        Services
      </div>
      <div className="text-[#10181f] text-2xl font-bold tracking-[-0.2px] leading-10 whitespace-nowrap h-auto left-[50%] transform translate-x-[-50%] absolute top-[50px]">Smart Contract Testing</div>
      <p className="text-[#10181f] text-base font-normal h-60 tracking-[0] leading-[30px] max:w-[363px] mx-8 absolute top-[110px]">
        At Algorinth Labs, we offer comprehensive smart contract testing services to ensure the reliability,
        security, and performance of your blockchain-based applications. Our expert team employs industry best
        practices and cutting-edge tools to meticulously evaluate and validate your smart contracts, safeguarding
        your projects from vulnerabilities and potential pitfalls.
      </p>
      {/* <div className="absolute h-auto max-w-[374px] left-0 top-[320px]">

        <Image className="w-full h-auto relative" alt="Shubham dhage" src="/images/shubham-dhage-t9rkvi3n0nm-unsplash-1.png" width={374}
          height={309} />   </div> */}
      <div>

      </div>
    </div>
  );
};
export default MobileServiceOverview;