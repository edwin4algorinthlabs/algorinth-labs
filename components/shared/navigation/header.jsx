"use client"

import Image from 'next/image';
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation";

const links = [
        {
            href: '/',
            text: 'Home',
            segment: null,
        },
        {
            href: '/services',
            text: 'Services',
            segment: "services"
        },
        {
            href: 'https://algorinth-labs.gitbook.io/',
            text: 'Resources',
            segment: "-"
        },
        {
            href: '/blog',
            text: 'Blog',
            segment: "blog"
        },
        {
            href: '/about',
            text: 'About',
            segment: "about"
        },
        {
            href: '/contact',
            text: 'Contact',
            segment: "contact"
        },
    ];

export default function Header() {
    const segment = useSelectedLayoutSegment();
    return (
        <div className="h-[120px] w-full font-rubik absolute top-0 z-[50] bg-transparent">
             {/* {
                segment != null && <div className="absolute z-[11] top-0 left-0 right-0 bottom-0 bg-[url(/images/background-resource-algo.png)] bg-no-repeat bg-cover opacity-60 bg-center"></div>
             } */}
            <div className="flex flex-row relative z-[12] items-center justify-between w-full mx-auto px-5 lg:px-[100px]">
                <div className="flex mr-6">
                    <Link href="/"><Image
                        className="max-h-32 left-0 object-cover lg:top-0 max-w-40"
                        alt="Element removebg preview"
                        src="/images/2-removebg-preview-1.png"
                        width={145}
                        height={129}
                    /></Link>
                </div>
                <div className="hidden min-[640px]:flex text-white h-fit overflow-hidden">
                    <div className="flex gap-x-6 gap-y-1 flex-wrap h-fit justify-end">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href}
                                className={`text-base sm:text-xl font-rubik border-b-2 hover:border-primary hover:text-white duration-500 ease-in-out ${segment == link.segment ? "text-white border-primary font-bold" : "border-transparent text-c-grey pb-0 font-medium"}`}
                            >{link.text}</Link>
                        ))}
                    </div>
                </div>
                <button className="h-[70px] w-full max-w-[185px] ml-3 border-2 border-white text-white text-xl font-semibold rounded-lg">
                        Request Demo
                </button>
            </div>
        </div>
    )
}