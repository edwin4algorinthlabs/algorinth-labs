import React from "react";
import Link from "next/link";
import "./Footer.css";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="div-footer items-start bg-[#10181f] flex h-64 overflow-hidden relative">
            <div className="div-w-row items-start flex relative">
                <div className="div-w-col items-start flex flex-col h-64 relative">
                    <div className="heading-ABOUT-US text-[#8294a3] text-base font-medium leading-6 -mt-px relative whitespace-no-wrap">ABOUT US</div>
                    <div className="p-light items-start self-stretch flex relative w-full">
                        <p className="text-wrapper text-[#8294a3] text-sm font-normal tracking-normal leading-6 -mt-px relative">
                            Algorinth Labs pioneers secure smart contract audits, comprehensive testing, and cutting-edge software
                            development, driving the evolution of decentralized technologies.
                        </p>
                    </div>
                <div className="learn-more text-[#d7ebfe] text-xs font-medium leading-7 relative text-center whitespace-no-wrap">LEARN MORE...</div>
                </div>
                <div className="div self-stretch relative">
                    <div className="heading-connect text-[#8294a3] text-base font-medium h-6 leading-6 absolute whitespace-no-wrap">CONNECT WITH US</div>
                    <div className="div-w-layout-grid h-24 absolute w-56">
                        <div className="h-6 left-0 absolute top-0 w-16">
                            <Image className="img h-6 left-0 absolute w-6" alt="Twitter alt svg" src="/images/twitter-alt-svg.svg" width={145}
                                height={129} />
                            <div className="div-link-footer items-start inline-flex absolute">
                                <div className="text-wrapper-2 text-[#8294a3] text-sm font-semibold tracking-normal leading-5 -mt-px relative whitespace-no-wrap">Twitter</div>
                            </div>
                        </div>
                        <div className="div-wrapper items-start flex absolute w-16">
                            <div className="text-wrapper-3 self-stretch text-[#8294a3] text-sm font-semibold tracking-normal leading-5 -mr-16 -mt-px relative whitespace-no-wrap">Careers</div>
                        </div>
                        <div className="link-2 h-6 left-0 absolute w-16">

                            <Image className="img h-6 left-0 absolute w-6" alt="Linkedin square svg" src="/images/linkedin-square-svg.svg" width={30} height={30} />

                            <div className="div-link-footer items-start inline-flex absolute">
                                <div className="text-wrapper-2 text-[#8294a3] text-sm font-semibold tracking-normal leading-5 -mt-px relative whitespace-no-wrap">LinkedIn</div>
                            </div>
                        </div>
                        <div className="link-3 items-start flex absolute w-16">
                            <div className="text-wrapper-3 self-stretch text-[#8294a3] text-sm font-semibold tracking-normal leading-5 -mr-16 -mt-px relative whitespace-no-wrap">Resources</div>
                        </div>
                        <div className="link-4 h-6 left-0 absolute w-16">
                            <Image className="img h-6 left-0 absolute w-6" alt="Github svg" src="/images/github-svg.svg" width={145}
                                height={129} />
                            <div className="div-link-footer items-start inline-flex absolute">
                                <div className="text-wrapper-2 text-[#8294a3] text-sm font-semibold tracking-normal leading-5 -mt-px relative whitespace-no-wrap">
                                <a 
                                href="https://github.com/Algorinth-Labs"
                                target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div className="link-5 items-start flex absolute w-16">
                            <a
                                className="text-wrapper-3 self-stretch text-[#8294a3] text-sm font-semibold tracking-normal leading-5 -mr-16 -mt-px relative whitespace-no-wrap"
                                href="https://blog.trailofbits.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
                <div className="div-w-col-2 h-64 relative">
                    <div className="heading-join-our text-[#8294a3] text-base font-medium h-6 leading-6 absolute whitespace-no-wrap">JOIN OUR NEWSLETTER</div>
                    <div className="stay-informed-about-wrapper items-start flex absolute">
                        <p className="stay-informed-about text-[#8294a3] text-sm font-normal tracking-normal leading-6 -mt-px relative">
                            Stay informed about our latest work and
                            <br />
                            industry news:
                        </p>
                    </div>
                    <div className="form-tob-newsletter items-start flex flex-col absolute">
                        <div className="input items-start bg-black border-[#2a333d] rounded flex h-10 relative">
                            <div className="div-placeholder items-start flex relative">
                                <div className="text-wrapper-4 text-[#8294a3] text-sm font-normal tracking-normal -mt-px relative">name@email.com</div>
                            </div>
                        </div>
                        <div className="subscribe-wrapper items-start rounded inline-flex relative">
                        {/* <div className="subscribe-wrapper"> */}
                            <div className="subscribe text-[#576675] text-xs font-medium leading-7 -mt-1 relative text-center whitespace-no-wrap">SUBSCRIBE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
