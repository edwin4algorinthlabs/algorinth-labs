import React from "react";
import "./MobileFooter.css";
import Image from 'next/image';

const MobileFooter = () => {
  return (
    <div className="m-div-footer">
    <div className="m-div-w-row">
      <div className="m-div-w-col">
        <div className="m-p-light" />
        <div className="m-heading-ABOUT-US">ABOUT US</div>
        <p className="m-text-wrapper">
          Algorinth Labs pioneers secure smart contract audits, comprehensive testing, and cutting-edge software
          development, driving the evolution of decentralized technologies.
        </p>
      </div>
      <div className="m-div">
        <div className="m-heading-connect">CONNECT WITH US</div>
        <div className="m-div-w-layout-grid">
          <div className="m-overlap-group">
            <div className="m-link">
              <Image className="m-img" alt="Twitter alt svg" src="/images/twitter-alt-svg.svg" width={24}
 height={24}/>
              <div className="m-div-link-footer">
                <div className="m-text-wrapper-2">Twitter</div>
              </div>
            </div>
            <div className="m-link-2">
              <Image className="m-img" alt="Linkedin square svg" src="/images/linkedin-square-svg.svg" width={24}
 height={24}/>
              <div className="m-div-link-footer">
                <div className="m-text-wrapper-2">LinkedIn</div>
              </div>
            </div>
            <div className="m-link-3">
              <Image className="m-img" alt="Github svg" src="/images/github-svg.svg" width={24}
 height={24}/>
              <div className="m-div-link-footer">
                <div className="m-text-wrapper-2">GitHub</div>
              </div>
            </div>
          </div>
          <div className="m-div-wrapper">
            <div className="m-text-wrapper-3">Careers</div>
          </div>
          <div className="m-link-4">
            <div className="m-text-wrapper-3">Resources</div>
          </div>
          <div className="m-link-5">
            <a
              className="m-text-wrapper-3"
              href="https://blog.trailofbits.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
      <div className="m-div-w-col-2">
        <div className="m-heading-join-our">JOIN OUR NEWSLETTER</div>
        <div className="m-stay-informed-about-wrapper">
          <p className="m-stay-informed-about">
            Stay informed about our latest work and industry
            <br />
            news:
          </p>
        </div>
        <div className="m-form-tob-newsletter">
          <div className="m-input">
            <div className="m-div-placeholder">
              <div className="m-text-wrapper-4">name@email.com</div>
            </div>
          </div>
          <div className="m-subscribe-wrapper">
            <div className="m-subscribe">SUBSCRIBE</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default MobileFooter;
