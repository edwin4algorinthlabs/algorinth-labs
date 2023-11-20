"use client"
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
export default function FooterContainer() {
    const [mail,setMail] = useState("")

    const handleChange = (e)=>{
        setMail(e.target.value)
    }
    const handleClick = async ()=>{
        try{
            const response = await axios.post('/api/newsletter', {mail} );
            alert(response.data.message)
        }catch(error){
            alert(error)
        }
        
        
    }
    return (
        <div className="w-full bg-[#0C0000] flex justify-between pt-8 gap-10 flex-wrap pb-[69px] px-5 sm:px-[45px] lg:px-[100px]">
            <div className="flex flex-col gap-[23px] w-full max-w-[310px]">
                <p className="font-medium text-base text-white">Join our Newsletter</p>
                <p className="text-sm text-white font-open-sans">Stay informed about our latest work and industry news:</p>
                <input type="email" placeholder="name@email.com" className="bg-transparent px-[13px] text-white h-[38px] rounded border border-c-grey-2" onChange={handleChange} value={mail}/>
                <button className="h-[42px] w-[113.27px] border-[3px] border-white text-white text-xs font-semibold rounded" onClick={handleClick}>
                   SUBSCRIBE
                </button>
            </div>
            <div className="flex flex-col gap-6 w-full max-w-[350px]">
                <p className="font-medium text-xl text-white">ABOUT US</p>
                <p className="text-base text-white text-justify font-open-sans">
                    Algorinth Labs pioneers secure smart contract audits, 
                    comprehensive testing, and cutting-edge software development, 
                    driving the evolution of decentralized technologies.
                </p>
                <Link href="/about"><p className="text-xs text-white font-medium cursor-pointer">
                    LEARN MORE...
                </p></Link>
            </div>
            <div className="flex flex-col gap-6 w-full max-w-[310px]">
                <p className="font-medium text-xl text-white">CONNECT WITH US</p>
                <div className="flex justify-between items-center w-full max-w-[228px]">
                    <p className="flex gap-1 items-center text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                    <Link href="twitter.com/#"><BsTwitter className="text-c-grey-2" /></Link>
                        Twitter
                    </p>
                    <Link href="/careers"><p className="text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                        Careers
                    </p></Link>
                </div>
                <div className="flex justify-between items-center w-full max-w-[228px]">
                    <p className="flex gap-1 items-center text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                    <Link href="https://linkedin.com/company/algorinthlabs-llc."><BsLinkedin className="text-c-grey-2" /></Link>
                        LinkedIn
                    </p>
                    <Link href="https://algorinth-labs.gitbook.io/resource-library/" target="blank"><p className="text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                        Resources
                    </p></Link>
                </div>
                <div className="flex justify-between items-center w-full max-w-[228px]">
                    <p className="flex gap-1 items-center text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                    <Link href="https://instagram.com/algorinthlabs.llc"><BsInstagram className="text-c-grey-2" /></Link>
                        Instagram
                    </p>
                    {/* <p className="text-sm text-white font-open-sans cursor-pointer hover:scale-105 hover:font-semibold duration-500">
                        Careers
                    </p> */}
                </div>
            </div>
        </div>
    )
}