import React from "react";
import Image from 'next/image';

const Home = () => {
  return (
    <div className="div-hero bg-cover bg-center h-screen flex items-center justify-center">
      <div className="div-w-container max-w-screen-xl h-screen relative">
        <p className="heading-we-don-t absolute top-32 left-0 text-white font-bold text-3xl md:text-4xl xl:text-5xl">
          We fix your contract, so you can focus on productivity.
        </p>
        <div className="p-newsletter absolute top-2/4 left-0 transform -translate-y-1/2 px-8">
          <p className="algorinth-labs-is text-white font-normal text-lg md:text-xl xl:text-2xl">
            Algorinth Labs is dedicated to ensuring the integrity of blockchain ecosystems by providing meticulous smart contract audits,
            <br />
            rigorous testing, and innovative software development.
          </p>
        </div>
        <div className="link absolute top-2/3 left-0 transform -translate-y-1/2 bg-blue-500 border border-black rounded-full px-8 py-2">
          <div className="request-an-AUDIT text-white font-medium text-base md:text-lg xl:text-xl">
            REQUEST AN AUDIT
          </div>
        </div>
        <div className="overlap-group absolute top-0 left-0 w-full h-52 md:h-60">
          <div className="banner w-full h-full relative">
            <Image
              className="link-home-trail-of absolute top-2/4 transform -translate-y-2/4"
              alt="Link home trail of"
              src="/images/link-home-trail-of-bits-svg.svg.png"
              width={32}
              height={13}
            />
            <div className="navbar absolute top-0 left-36 w-full h-full flex items-center space-x-4 text-white font-medium text-base md:text-lg xl:text-xl">
              {/* <div className="div-wrapper border-b-2 border-red-600 py-2"> </div> */}
              <div>Home</div>
              <div>Services</div>
              <div>Resources</div>
              <div>Blog</div>
              <div>About</div>
              <div>Contact</div>
            </div>
          </div>
          <Image
            className="element-removebg-preview absolute top-0 left-0 object-cover h-full w-40 md:w-44 xl:w-52"
            alt="Element removebg preview"
            src="/images/2-removebg-preview-1.png"
            width={145}
            height={129}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
