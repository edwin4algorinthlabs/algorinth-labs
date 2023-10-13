import React from "react";
import Image from 'next/image';

const Services = () => {
  return (
    <div className="w-full pt-20 px-5 lg:px-[100px]">
      <div className="w-full max-w-[1315px] mx-auto">
        <p className="text-[40px] font-semibold">
          Our Services
        </p>
        <div className="flex gap-[40px] mt-[62px] mb-10">
          <div className="flex flex-col gap-6">
            <p className="font-medium text-2xl">Smart Contract Testing</p>
            <div>
              <p className="text-base">
                At Algorinth Labs, we offer comprehensive smart contract testing services to ensure the reliability, 
                security, and performance of your blockchain-based applications.
              </p>
              <p className="text-base">
                Our expert team employs industry best practices and cutting-edge tools to meticulously  
                evaluate and validate your smart contracts,  safeguarding your projects from vulnerabilities and  potential pitfalls.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-medium text-2xl">Smart Contract Auditing</p>
            <div>
              <p className="text-base">
                Our smart contract auditing services offer a meticulous <br />evaluation of your blockchain-based solutions, mitigating<br />
                risks and enhancing the trustworthiness of your projects.
              </p>
              <p className="text-base">
                Our expert auditors perform a thorough code review, examining every line of your smart contract code 
                to identify vulnerabilities and potential issues. We follow industry best practices to ensure your code is 
                robust and resilient against threats.
              </p>
            </div>
          </div>
        </div>
        <Image src="/images/blocks.png" width={1200} height={600} alt="blockchain" className="mx-auto object-contain" />
      </div>
    </div>
  );
};
export default Services;
