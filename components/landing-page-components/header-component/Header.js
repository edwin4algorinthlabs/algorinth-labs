import Image from 'next/image';
import React, { useState } from 'react';

const Header = () => {
    const links = [
        {
            href: '/',
            text: 'Home',
        },
        {
            href: '/services',
            text: 'Services',
        },
        {
            href: 'https://algorinth-labs.gitbook.io/',
            text: 'Resources',
        },
        {
            href: '/blog',
            text: 'Blog',
        },
        {
            href: '/about',
            text: 'About',
        },
        {
            href: '/contact',
            text: 'Contact',
        },
    ];
    const [activePage, setActivePage] = useState('/');

    const handleLinkClick = (event) => {
        event.preventDefault();
        setActivePage(event.target.href);
    };
    return (
        <div
            className="relative bg-cover"
            style={{
                backgroundImage: `url(/images/background-resource-algo.png)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100vh',
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
                <div className="h-auto max-w-[940px] relative ml-[16.666667%] mr-[16.666667%]">
                    <div className="grid grid-cols-4">
                        <div className="col-span-1 flex">
                            <a href="/"><Image
                                className="max-h-32 left-0 object-cover lg:top-0 max-w-40"
                                alt="Element removebg preview"
                                src="/images/2-removebg-preview-1.png"
                                width={145}
                                height={129}
                            /></a>
                        </div>
                        <div className="max-h-32 col-span-3 mt-12 flex text-white">
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
                </div>
                <div>
                        <p className="leading-[52px] ml-[16.666667%] max-w-[966px] top-80 text-white xl:text-4xl lg:text-3xl sm:text-3xl font-bold max-h-12 left-0 tracking-normal absolute">
                            We fix your contract, so you can focus on productivity.
                        </p>
                    </div>

                    <div className="items-start ml-[16.666667%] flex absolute max-w-[940px] pl-0 pr-36 py-0 left-0 top-[440px]">
                        <p className="text-white text-sm font-normal max-w-[933px] flex">
                            Algorinth Labs is dedicated to ensuring the integrity of blockchain ecosystems by providing meticulous smart contract audits, rigorous testing, and innovative software development.
                        </p>
                    </div>

                    <div className="ml-[16.666667%] items-start bg-[#2a333d] border rounded inline-flex absolute pl-6 pr-[24.81px] pt-[7px] pb-[9px] sm:mt-5 border-solid border-black -left-0.5 top-[518px]">
                    <div className="text-white text-sm font-medium tracking-[1.5px] leading-[30px] relative whitespace-nowrap w-fit -mt-px">
                    REQUEST AN AUDIT
                    </div>
                    </div>

                    </div>

            </div>
       

    );
};

export default Header;