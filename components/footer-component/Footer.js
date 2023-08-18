import React from "react";
import Link from "next/link";
import "./Footer.css";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="div-footer">
            <div className="div-w-row">
                <div className="div-w-col">
                    <div className="heading-ABOUT-US">ABOUT US</div>
                    <div className="p-light">
                        <p className="text-wrapper">
                            Algorinth Labs pioneers secure smart contract audits, comprehensive testing, and cutting-edge software
                            development, driving the evolution of decentralized technologies.
                        </p>
                    </div>
                    <div className="learn-more">LEARN MORE...</div>
                </div>
                <div className="div">
                    <div className="heading-connect">CONNECT WITH US</div>
                    <div className="div-w-layout-grid">
                        <div className="link">
                            <Image className="img" alt="Twitter alt svg" src="/images/twitter-alt-svg.svg" width={145}
                                height={129} />
                            <div className="div-link-footer">
                                <div className="text-wrapper-2">Twitter</div>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper-3">Careers</div>
                        </div>
                        <div className="link-2">

                            <Image className="img" alt="Linkedin square svg" src="/images/linkedin-square-svg.svg" width={30} height={30} />

                            <div className="div-link-footer">
                                <div className="text-wrapper-2">LinkedIn</div>
                            </div>
                        </div>
                        <div className="link-3">
                            <div className="text-wrapper-3">Resources</div>
                        </div>
                        <div className="link-4">
                            <Image className="img" alt="Github svg" src="/images/github-svg.svg" width={145}
                                height={129} />
                            <div className="div-link-footer">
                                <div className="text-wrapper-2">GitHub</div>
                            </div>
                        </div>
                        <div className="link-5">
                            <a
                                className="text-wrapper-3"
                                href="https://blog.trailofbits.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
                <div className="div-w-col-2">
                    <div className="heading-join-our">JOIN OUR NEWSLETTER</div>
                    <div className="stay-informed-about-wrapper">
                        <p className="stay-informed-about">
                            Stay informed about our latest work and
                            <br />
                            industry news:
                        </p>
                    </div>
                    <div className="form-tob-newsletter">
                        <div className="input">
                            <div className="div-placeholder">
                                <div className="text-wrapper-4">name@email.com</div>
                            </div>
                        </div>
                        <div className="subscribe-wrapper">
                            <div className="subscribe">SUBSCRIBE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
