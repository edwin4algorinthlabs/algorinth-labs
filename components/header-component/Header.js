import Image from 'next/image';
import React, { useState } from 'react';

const Header = () => {
    const links = [
        {
            href: '/',
            text: 'Home',
        },
        {
            href: '/#',
            text: 'Services',
        },
        {
            href: '/#',
            text: 'Resources',
        },
        {
            href: '/#',
            text: 'Blog',
        },
        {
            href: '/#',
            text: 'About',
        },
        {
            href: '/#',
            text: 'Contact',
        },
    ];
    const [activePage, setActivePage] = useState('/');

    const handleLinkClick = (event) => {
        event.preventDefault();
        setActivePage(event.target.href);
    };

    return (
        <div className="bg-[url(/images/background-resource-algo.png)] items-start bg-[50%_50%] bg-cover justify-center relative border-none">
            <div className="bg-[url(/images/div-hero.png)] items-start bg-[50%_50%] bg-cover flex justify-center relative opacity-50 border-none">
                <div className="h-[718px] lg:w-[940px] sm:w-full relative ml-[16.666667%] mr-[16.666667%]">
                    <div className="grid grid-cols-4">
                        <div className="col-span-1 flex">
                        <a href="/"><Image
                                className="h-32 sm:h-20 left-0 sm:pr-5 object-cover lg:top-0 sm:mt-5 lg:w-40 sm:w-25"
                                alt="Element removebg preview"
                                src="/images/2-removebg-preview-1.png"
                                width={145}
                                height={129}
                            /></a>
                        </div>
                        <div className="lg:h-32 col-span-3 mt-12 flex text-white lg:font-medium sm:font-normal text-base sm:text-sm md:text-lg lg:text-xl">
                            <ul className="flex space-x-4">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href}
                                        className={link.href === activePage ? 'border-b-2 border-red-500' : 'text-white'}
                                        >{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="leading-[52px] lg:max-w-[966px] top-80 sm:top-60 text-white xl:text-4xl lg:text-3xl sm:text-3xl font-bold h-12 left-0 tracking-normal absolute sm:w-full">
                            We fix your contract, so you can focus on productivity.
                        </p>
                    </div>
                    <br></br>
                    <div className="items-start flex absolute lg:max-w-[940px] sm:w-full pl-0 pr-36 py-0 left-0 lg:top-[440px] sm:top-[450px]">
                        <p className="text-white text-sm font-normal lg:w-[933px] flex">
                            Algorinth Labs is dedicated to ensuring the integrity of blockchain ecosystems by providing meticulous smart contract audits,
                            <br></br>
                            rigorous testing, and innovative software development.
                        </p>

                    </div>

                    <div className="items-start bg-[#2a333d] border rounded inline-flex absolute pl-6 pr-[24.81px] pt-[7px] pb-[9px] border-solid border-black -left-0.5 lg:top-[518px] sm:top-[600px]">
                    <div className="text-white text-sm font-medium tracking-[1.5px] leading-[30px] relative whitespace-nowrap w-fit -mt-px">
                    REQUEST AN AUDIT
                    </div>
                    </div>
            
                </div>
            </div>
        </div>
    );
};

export default Header;