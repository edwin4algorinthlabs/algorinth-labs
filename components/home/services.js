import React from "react";
import Image from 'next/image';

const Services = () => {
  return (
    <div className="w-full pt-20 px-5 lg:px-[100px]">
      <div className="w-full max-w-[1315px] mx-auto">
        <p className="text-[40px] block grid place-items-center mb-[20px] font-semibold">
          Our Services
        </p>
        <br></br>
        <p className="font-medium block grid place-items-center text-2xl">Smart Contract Testing</p>
        <br></br>
        <p className="block grid place-items-center text-center  leading-relaxed text-lg">
                At Algorinth Labs, we offer comprehensive smart contract testing services to ensure the reliability, 
                security, and performance of your blockchain-based applications.
              </p>
          <p className="block mb-[15px] grid place-items-center text-center  leading-relaxed text-lg">
            Our expert team employs industry best practices and cutting-edge tools to meticulously  
            evaluate and validate your smart contracts,  safeguarding your projects from vulnerabilities and  potential pitfalls.
          </p>
          <br></br>
          <p className="font-medium block grid place-items-center text-2xl">Smart Contract Auditing</p>
          <br></br>
          <p className="block grid place-items-center text-center  leading-relaxed text-lg">
                Our smart contract auditing services offer a meticulous evaluation of your blockchain-based solutions, mitigating
                risks and enhancing the trustworthiness of your projects.
              </p>
              <p className="block mb-[20px] grid place-items-center text-center  leading-relaxed text-lg">
                Our expert auditors perform a thorough code review, examining every line of your smart contract code 
                to identify vulnerabilities and potential issues. We follow industry best practices to ensure your code is 
                robust and resilient against threats.
              </p>
        <Image src="/images/blocks.png" width={1200} height={600} alt="blockchain" className="mx-auto object-contain" />
      </div>
    </div>
  );
};
export default Services;
