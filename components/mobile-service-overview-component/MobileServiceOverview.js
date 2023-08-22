import React from "react";
import Image from 'next/image';
import "./MobileServiceOverview.css";

const MobileServiceOverview = () => {
  return (
    <div className="div-services">
      <div className="div-w-container">
        <div className="div-w-layout-grid">
          <div className="div-w-node">
            <div className="heading-security">Smart Contract Auditing</div>
            <div className="p">
              <p className="text-wrapper">
                Our smart contract auditing services offer a meticulous evaluation of your blockchain-based solutions,
                mitigating risks and enhancing the trustworthiness of your projects. Our expert auditors perform a
                thorough code review, examining every line of your smart contract code to identify vulnerabilities and
                potential issues. We follow industry best practices to ensure your code is robust and resilient against
                threats.
              </p>
            </div>
          </div>
          <div className="div-w-clearfix">
            <div className="heading-software">Smart Contract Testing</div>
            <p className="div">
              At Algorinth Labs, we offer comprehensive smart contract testing services to ensure the reliability,
              security, and performance of your blockchain-based applications. Our expert team employs industry best
              practices and cutting-edge tools to meticulously evaluate and validate your smart contracts, safeguarding
              your projects from vulnerabilities and potential pitfalls.
            </p>
          </div>
          <div className="heading-products">Services</div>
        </div>
        <Image className="shubham-dhage" alt="Shubham dhage" src="/images/shubham-dhage-t9rkvi3n0nm-unsplash-1.png" width={374}
 height={309} />
        <Image className="kanchanara" alt="Kanchanara" src="/images/kanchanara-fssggtbox9y-unsplash-1.png" width={374}
 height={309} />
        <div className="div-group-banner">
          <div className="div-div-block">
            <div className="link">
              <div className="text-wrapper-2">REQUEST AN AUDIT</div>
            </div>
          </div>
          <div className="div-glow-banner" />
          <div className="contact-us-wrapper">
            <div className="text-wrapper-2">CONTACT US</div>
          </div>
          <div className="heading-whats-next">Whats Next? Lets Chat!</div>
        </div>
      </div>
    </div>
  );
};
export default MobileServiceOverview;