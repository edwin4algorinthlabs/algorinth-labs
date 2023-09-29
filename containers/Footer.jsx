import { BsTwitter, BsLinkedin } from "react-icons/bs"


export default function FooterContainer() {
    return (
        <div className="w-full flex justify-between pt-8 pb-[69px] px-5 sm:px-[45px] lg:px-[100px]">
            <div className="flex flex-col gap-[23px] w-full max-w-[310px]">
                <p className="font-medium text-base text-white">Join our Newsletter</p>
                <p className="text-sm text-white font-open-sans">Stay informed about our latest work and industry news:</p>
                <input type="email" placeholder="name@email.com" className="bg-transparent px-[13px] text-white h-[38px] rounded border border-c-grey-2" />
                <button className="h-[42px] w-[113.27px] border-[3px] border-white text-white text-xs font-semibold rounded">
                   SUBSCRIBE
                </button>
            </div>
            <div className="flex flex-col gap-6 w-full max-w-[310px]">
                <p className="font-medium text-xl text-white">ABOUT US</p>
                <p className="text-base text-white font-open-sans">
                    Algorinth Labs pioneers secure smart contract audits, 
                    comprehensive testing, and cutting-edge software development, 
                    driving the evolution of decentralized technologies.
                </p>
                <p className="text-xs text-white font-medium cursor-pointer">
                    LEARN MORE...
                </p>
            </div>
            <div className="flex flex-col gap-6 w-full max-w-[310px]">
                <p className="font-medium text-xl text-white">CONNECT WITH US</p>
                <div className="flex justify-between items-center w-full max-w-[228px]">
                    <p className="flex gap-1 items-center text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                        <BsTwitter className="text-c-grey-2" />
                        Twitter
                    </p>
                    <p className="text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                        Careers
                    </p>
                </div>
                <div className="flex justify-between items-center w-full max-w-[228px]">
                    <p className="flex gap-1 items-center text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                        <BsLinkedin className="text-c-grey-2" />
                        LinkedIn
                    </p>
                    <p className="text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                        Resources
                    </p>
                </div>
                <div className="flex justify-between items-center w-full max-w-[228px]">
                    <p className="flex gap-1 items-center text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                        <BsTwitter className="text-c-grey-2" />
                        Twitter
                    </p>
                    <p className="text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                        Careers
                    </p>
                </div>
            </div>
        </div>
    )
}