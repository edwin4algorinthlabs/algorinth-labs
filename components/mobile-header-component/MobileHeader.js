import React from "react";
import "./MobileHeader.css";
import Image from 'next/image';
import Dropdown from "../dropdown-component/Dropdown";


const MobileHeader = () => {
  return (
    <div className="m-outerContainer">
    <div className="m-div-hero">
      <div className="m-div-w-container">
        <div className="m-heading">
          <p className="m-text-wrapper">We fix your contract, so you can focus on productivity</p>
        </div>
        <div className="m-p-newsletter">
          <p className="m-algorinth-labs-is">
            Algorinth Labs is dedicated to ensuring the integrity of blockchain ecosystems by providing meticulous smart
            contract audits, <br />
            rigorous testing, and innovative software development.
          </p>
        </div>
        <div className="m-link">
          <div className="m-request-AN-AUDIT">REQUEST AN AUDIT</div>
        </div>
        <div className="m-overlap-group">
        <Dropdown />
          {/* <Image className="m-banner" alt="Banner" src="/images/Vector.svg"  width={15} height={11}/> */}
          <Image className="m-element-removebg-preview" alt="Element removebg preview" src="/images/2-removebg-preview-1.png" width={111} height={79} />
        </div>
      </div>
    </div>
    </div>
  );
};
export default MobileHeader;
