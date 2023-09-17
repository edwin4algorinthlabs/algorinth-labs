import React from "react";
import Link from "next/link";
import Image from 'next/image';
import './Footer.css';

const Footer = () => {
    return (
        <div className="items-start bg-[#0f1720] flex h-80 overflow-hidden relative">
            <div className="mx-8 my-10 grid grid-cols-3 gap-206px">
                <div className="text-[#8294a3] sm:text-sm md:text-base font-medium h-6 tracking-[2px] leading-8 ">
                    ABOUT US
                    <p className="text-sm md:leading-8 sm:py-3 lg:py-5 tracking-[0px] font-normal">Algorinth Labs pioneers secure smart contract audits, comprehensive testing, and cutting-edge software
                        development, driving the evolution of decentralized technologies.
                    </p>
                    LEARN MORE...
                </div>
                <div className="text-[#8294a3] text-base font-medium h-6 tracking-[2px] leading-8">
                    <p className="flex justify-center sm:text-sm md:text-base lg:pr-10">CONNECT WITH US</p>
                    <div className="grid pl-10 grid-cols-2 mt-8">
                        <div className="col-span-1">
                            <div className="inline-flex sm:text-xs px-2 pb-1">
                                <Image className="img h-5 w-5" alt="Twitter alt svg" src="/images/twitter-alt-svg.svg" width={145}
                                    height={129} />
                                <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">Twitter</div>
                            </div>
                            <div className="inline-flex px-2 pb-1">
                                <Image className="img h-5 w-5" alt="Twitter alt svg" src="/images/linkedin-square-svg.svg" width={30}
                                    height={30} />
                                <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">LinkedIn</div>
                            </div>
                            <div className="inline-flex px-2 pb-1">
                                <Image className="img h-5 w-5" alt="Twitter alt svg" src="/images/github-svg.svg" width={145}
                                    height={129} />
                                <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">GitHub</div>
                            </div>

                        </div>


                        <div className="hide-excess col-span-1">
                            <div className="px-2 sm:text-xs pb-3">
                                <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">Careers</div>
                            </div>
                            <div className="px-2 pb-3">
                                <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">Resources</div>
                            </div>
                            <div className="px-2 pb-3">
                                <div className="text-[#8294a3] px-2 text-sm font-semibold relative tracking-normal leading-5 -mt-px whitespace-no-wrap">Blog</div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="text-[#8294a3] sm:text-sm md:text-base font-medium h-6 tracking-[2px] leading-8">
                    JOIN OUR NEWSLETTER
                    <p className="teext-sm py-5 tracking-[0px] font-normal">Stay informed about our latest work and
                        industry news:
                    </p>

                    <div className="items-start flex relative">
                        <form>
                            <input onChange={(e) => {
                            }}
                                name={'name'} required maxLength={"100"}
                                type='text'
                                className={"px-6 py-3 align-middle bg-black text-white rounded-lg w-50"}
                                placeholder="name@email.com"
                            />
                        </form>
                        {/* <div className="text-wrapper-4 text-[#8294a3] lg:text-sm sm:text-xs font-normal tracking-normal -mt-px relative">name@email.com</div> */}
                    </div>

                    <div className="items-start rounded inline-flex pl-4 pr-[17.27px] py-1.5 border-[3px] border-solid border-[#576675] left-[5px] top-[35px] relative">

                        <div className="text-[#576675] text-xs font-medium leading-7 -mt-1 relative text-center whitespace-no-wrap">SUBSCRIBE</div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;
