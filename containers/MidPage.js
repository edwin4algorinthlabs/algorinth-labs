import React from "react";
import Image from 'next/image';
import "./MidPage.css";

const MidPage = () => {
  return (
    <div className="div-services">
      <div className="div-w-container">
        <div className="div-w-layout-grid">
          <div className="overlap">
            <div className="div-w-clearfix">
              <div className="overlap-group">
                {/* <img className="software-assurance" alt="Software assurance" src="software-assurance-svg.svg" /> */}
                {/* <div className="heading-software">Smart Contract Testing</div> */}
              </div>
              <div className="p">
                {/* <p className="at-algorinth-labs-we">
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
                </p> */}
              </div>
            </div>
            <div className="div">
              <div className="div-w-node">
              {/* <Image
            className="security-engineering"
            alt="Security engineering"
            src="/images/crystals_on_services_page.png"
            width={145}
            height={129}
          /> */}
                {/* <img className="security-engineering" alt="Security engineering" src="security-engineering-svg.svg" /> */}
                {/* <div className="heading-security">Smart Contract Auditing</div> */}
                <div className="our-smart-contract-wrapper">
                  {/* <p className="our-smart-contract">
                    Our smart contract auditing services offer a meticulous <br />
                    evaluation of your blockchain-based solutions, mitigating <br />
                    risks and enhancing the trustworthiness of your projects.
                    <br />
                    Our expert auditors perform a thorough code review, <br />
                    examining every line of your smart contract code to identify vulnerabilities and potential issues.
                    We follow industry best practices to ensure your code is robust and resilient against threats.
                  </p> */}
                </div>
              </div>
              {/* <div className="heading-products">Services</div> */}
            </div>
          </div>
          <Image
            className="kanchanara"
            alt="Kanchanara"
            src="/images/kanchanara-fssggtbox9y-unsplash-1.png"
            width={407}
            height={271}
          />
          <Image
            className="shubham-dhage"
            alt="Shubham dhage"
            src="/images/shubham-dhage-t9rkvi3n0nm-unsplash-1.png"
            width={392}
            height={271}
          />
          {/* <img className="kanchanara" alt="Kanchanara" src="kanchanara-fssggtbox9y-unsplash-1.png" />
          <img className="shubham-dhage" alt="Shubham dhage" src="shubham-dhage-t9rkvi3n0nm-unsplash-1.png" /> */}
        </div>
      </div>
    </div>
  );
};
export default MidPage;
