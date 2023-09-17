import React from "react";
import Image from 'next/image';
import Dropdown from "../dropdown-component/Dropdown";


const SharedMobileHeader = () => {
    return (
        <div
            className="relative bg-cover"
            style={{
                backgroundImage: `url(/images/background-resource-algo.png)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '120px',
                width: '100%',
            }}>
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: `url(/images/div-hero.png)`,
                    backgroundSize: 'cover',
                    opacity: 0.5,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}            >
                <div className="h-auto max-w-[613px] relative ml-[2.05%] mr-[2.05%]">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1 flex">
                            <a href="/"><Image
                                className="max-h-32 left-0 object-cover lg:top-0 max-w-40"
                                alt="Element removebg preview"
                                src="/images/2-removebg-preview-1.png"
                                width={145}
                                height={129}
                            /></a>
                        </div>
                        <div className="max-h-32 col-span-1 mt-10 mr-3">
                            <Dropdown />
                        </div>
                    </div>
                </div>
                {/* <div>
                    <p className="leading-[38px] ml-[2.05%] max-w-[613px] top-[230px] text-white text-3xl font-bold left-0 tracking-normal absolute">
                        We fix your contract, so you can focus on productivity.
                    </p>
                </div> */}

                {/* <div className="items-start ml-[2.05%] flex absolute max-w-[596px] pl-0 pr-36 py-0 left-0 top-[390px]">
                    <p className="text-white text-sm font-normal max-w-[592px] flex">
                        Algorinth Labs is dedicated to ensuring the integrity of blockchain ecosystems by providing meticulous smart contract audits, rigorous testing, and innovative software development.
                    </p>
                </div> */}

                {/* <div className="ml-[2.05%] items-start bg-[#2a333d] border rounded inline-flex absolute pl-6 pr-[24.81px] pt-[7px] pb-[9px] border-solid border-black -left-0.5 top-[552px]">
                <div className="text-white text-sm font-medium tracking-[1.5px] leading-[30px] relative whitespace-nowrap w-fit -mt-px">
                REQUEST AN AUDIT
                </div>
                </div> */}

            </div>

        </div>


    );
};

export default SharedMobileHeader;