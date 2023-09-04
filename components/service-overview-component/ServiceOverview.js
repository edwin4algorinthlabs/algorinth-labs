import React from "react";
import Image from 'next/image';

const ServiceOverview = () => {
  return (
    <div className="items-start bg-[url(/images/div-services-overview.jfif)] bg-[50%_50%] bg-cover border flex justify-center relative border-none">
      <div className="items-start flex flex-col h-[718px] lg:max-w-[940px] relative lg:w-[940px] sm:w-full flex justify-center">
        <div className="text-[#020d17] lg:text-3xl sm:text-2xl font-normal h-[46px] left-[50%] transform translate-x-[-50%] tracking-[-0.5px] top-[20px]  leading-[46px] absolute whitespace-nowrap">
          Services
        </div>
        <br></br>
        <div className="absolute top-[75px] ml-[5%] mr-[5%]">
          <div className="grid grid-cols-6">
            <div className="col-span-3 left-[10%]">
              <div className="text-[#10181f] lg:text-2xl sm:text-xl font-bold h-10 tracking-[-0.2px] leading-10">Smart Contract Testing</div>
              <div className="">
                <p className="leading-12 mb-10 lg:text-base sm:text-sm">
                  At Algorinth Labs, we offer comprehensive smart <br />
                  contract testing services to ensure the reliability,
                  <br />
                  security, and performance of your blockchain-based
                  <br />
                  applications. Our expert team employs industry best <br />
                  practices and cutting-edge tools to meticulously <br />
                  evaluate and validate your smart contracts, <br />
                  safeguarding your projects from vulnerabilities and <br />
                  potential pitfalls.
                </p>
              </div>
              <Image
            className="lg:h-[271px] sm:h-[190px] object-cover lg:w-[392px] sm:w-[260px] lg:left-[58px] sm:left-[58] top-[420px]"
            alt="Shubham dhage"
            src="/images/shubham-dhage-t9rkvi3n0nm-unsplash-1.png"
            width={392}
            height={271}
          />
            </div>
            <div className="col-span-3 ml-[10px]">
              <div className="text-[#10181f] lg:text-2xl sm:text-xl font-bold h-10 tracking-[-0.2px] leading-10">Smart Contract Auditing</div>
              <div className="">
                  <p className="leading-12 mb-10 lg:text-base sm:text-sm">
                    Our smart contract auditing services offer a meticulous <br />
                    evaluation of your blockchain-based solutions, mitigating <br />
                    risks and enhancing the trustworthiness of your projects.
                    <br />
                    Our expert auditors perform a thorough code review, <br />
                    examining every line of your smart contract code to identify vulnerabilities and potential issues.
                    We follow industry best practices to ensure your code is robust and resilient against threats.
                  </p>
                </div>
                <Image
            className="lg:h-[271px] sm:h-[190px] object-cover lg:w-[407px] sm:w-[285] lg:left-[478px] sm:left-[58] top-[420px]"
            alt="Kanchanara"
            src="/images/kanchanara-fssggtbox9y-unsplash-1.png"
            width={407}
            height={271}
          />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceOverview;
