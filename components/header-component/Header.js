import React from "react";
import Image from 'next/image';
import "./Header.css";

const Header = () => {
  return (
    <div className="outerContainer">
      <div className="div-hero">
        <div className="div-w-container">
        <div className="heading">
          <p className="heading-we-don-t text-white text-4xl font-bold h-12 left-0 tracking-normal absolute whitespace-no-wrap">
            We fix your contract, so you can focus on productivity.
          </p>
          </div>
          <div className="p-newsletter">
            <p className="algorinth-labs-is">
              Algorinth Labs is dedicated to ensuring the integrity of blockchain ecosystems by providing meticulous smart contract audits,
              <br />
              rigorous testing, and innovative software development.
            </p>
          </div>
          <div className="link">
            <div className="request-an-AUDIT">
              REQUEST AN AUDIT
            </div>
          </div>
          <div className="overlap-group">
          <div className="banner h-16 absolute">
              <Image
                className="link-home-trail-of"
                alt="Link home trail of"
                src="/images/link-home-trail-of-bits-svg.svg.png"
                width={32}
                height={13}
              />
              <div className="navbar left-36 w-full h-full flex items-center space-x-4 text-white font-medium text-base md:text-lg xl:text-xl">
                <div>Home</div>
                <div>Services</div>
                <div>Resources</div>
                <div>Blog</div>
                <div>About</div>
                <div>Contact</div>
              </div>
              </div>
            <Image
              className="h-32 left-0 object-cover absolute top-0 w-40"
              alt="Element removebg preview"
              src="/images/2-removebg-preview-1.png"
              width={145}
              height={129}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;