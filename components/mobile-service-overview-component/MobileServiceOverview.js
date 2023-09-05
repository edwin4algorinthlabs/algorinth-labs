import React from "react";
import Image from 'next/image';
import "./MobileServiceOverview.css";

const MobileServiceOverview = () => {
  return (
    <div className="m-div-services">
      <div className="m-div-w-container">
        <div className="m-div-w-layout-grid">
          <div className="m-div-w-node">
            <div className="m-heading-security">Smart Contract Auditing</div>
            <div className="m-p">
              <p className="m-text-wrapper">
                Our smart contract auditing services offer a meticulous evaluation of your blockchain-based solutions,
                mitigating risks and enhancing the trustworthiness of your projects. Our expert auditors perform a
                thorough code review, examining every line of your smart contract code to identify vulnerabilities and
                potential issues. We follow industry best practices to ensure your code is robust and resilient against
                threats.
              </p>
            </div>
          </div>
          <div className="m-div-w-clearfix">
            <div className="m-heading-software">Smart Contract Testing</div>
            <p className="m-div">
              At Algorinth Labs, we offer comprehensive smart contract testing services to ensure the reliability,
              security, and performance of your blockchain-based applications. Our expert team employs industry best
              practices and cutting-edge tools to meticulously evaluate and validate your smart contracts, safeguarding
              your projects from vulnerabilities and potential pitfalls.
            </p>
          </div>
          <div className="m-heading-products">Services</div>
        </div>
        <Image className="m-shubham-dhage" alt="Shubham dhage" src="/images/shubham-dhage-t9rkvi3n0nm-unsplash-1.png" width={374}
 height={309} />
        <Image className="m-kanchanara" alt="Kanchanara" src="/images/kanchanara-fssggtbox9y-unsplash-1.png" width={374}
 height={309} />
        <div className="m-div-group-banner">
          <div className="m-div-div-block">
            <div className="m-link">
              <div className="m-text-wrapper-2">REQUEST AN AUDIT</div>
            </div>
          </div>
          <div className="m-div-glow-banner" />
          <div className="m-contact-us-wrapper">
            <div className="m-text-wrapper-2">CONTACT US</div>
          </div>
          <div className="m-heading-whats-next">What&apos;s Next? Let&apos;s Chat!</div>
        </div>
      </div>
    </div>
  );
};
export default MobileServiceOverview;