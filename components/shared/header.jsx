"use client"

import { useState } from "react"
import Image from 'next/image';
import Link from "next/link"
import { MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md"
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
    const [showResource, setShowResource] = useState(false)

    const recipientEmail = 'info@algorinthlabs.com';
    const handleOnClick = () => {
    window.open(`mailto:${recipientEmail}`, '_blank');
  };
    
    return (
        <div className="h-[120px] w-full font-rubik absolute top-5 z-[50] bg-transparent">
            <div className="flex flex-row relative z-[12] gap-6 items-center justify-between w-full mx-auto px-5 sm:px-[100px] duration-500">
                <div className="flex mr-6">
                    <Link href="/"><Image
                        className="max-h-32 left-0 object-cover lg:top-0 max-w-40"
                        alt="Element removebg preview"
                        src="/images/logo.png"
                        width={145}
                        height={129}
                    /></Link>
                </div>
                <div className="hidden lg:flex text-white h-fit overflow-hidden">
                    <div className="flex gap-x-6 gap-y-1 flex-wrap h-fit justify-center">
                        {links.map((link, idx) => (
                                idx !== 2 ? (
                                    <Link key={idx} href={idx !== 2 && link.href}
                                        className={`text-base sm:text-xl font-rubik border-b-2 hover:border-primary hover:text-white duration-500 ease-in-out ${(segment == link.segment && !showResource) ? "text-white border-primary font-bold" : "border-transparent text-c-grey pb-0 font-medium"}`}
                                    >{link.text}</Link>
                                ) : (
                                    <div key={idx} onClick={() => setShowResource(showResource => !showResource)}
                                        className={`text-base cursor-pointer sm:text-xl font-rubik hover:text-white relative z-[50] duration-500 ease-in-out ${showResource || segment == "products" ? "text-white font-bold" : "text-c-grey pb-0 font-medium"}`}
                                    ><p className="flex gap-1 items-center">{link.text} <MdOutlineKeyboardArrowDown className={`transition-[transform] duration-500 ${showResource ? "rotate-180" : ""}`} /></p>
                                        {
                                            showResource && (
                                                <div className="fixed z-[50] top-[90px] w-[180px] flex flex-col gap-3 px-[32px] pt-4 pb-9 bg-black border-2 border-white rounded-lg">
                                                    <Link href={link.href} target="_blank" className="text-base font-normal text-white cursor-pointer">Gitbook</Link>
                                                    <Link href="/products" className="text-base font-normal text-white cursor-pointer">Products</Link>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                        ))}
                    </div>
                </div>
                <button type="button" onClick={handleOnClick} className="hidden lg:block h-[70px] w-full max-w-[185px] ml-3 border-2 border-white text-white text-xl font-semibold rounded-lg">
                        Request Demo
                </button>
                <MdMenu color="#fff" size={28} className="block lg:hidden cursor-pointer" />
            </div>

        </div>
    )
}