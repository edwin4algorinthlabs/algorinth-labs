import Image from "next/image";
import Link from 'next/link';


const mobileIntro = () => {
    return (
        <div className="w-full min-h-screen font-rubik relative z-0 bg-[url(/images/3d-abstract.png)] pt-[220px] bg-cover bg-center bg-no-repeat bg-black px-5">

            <div className="flex items-center justify-center relative z-[2] w-[383px] h-[383px] rounded-full bg-transparent items-center justify-center left-[50%] transform translate-x-[-50%]">
                <div className="flex items-center justify-center absolute z-[3] top-0 left-0 right-0 bottom w-[383px] h-[383px] rounded-full bg-[#FFEFCB]/40 blur-[20px]"></div>
                <Image src="/images/settings.svg" width={76.809} height={76.917} alt="Setting" className="absolute animate-spin z-[5] bottom-[50px] left-[6px]" />
                <Image src="/images/shield.svg" width={76.809} height={76.917} alt="Setting" className="absolute z-[5] top-[4px] left-[230px]" />
                <Image src="/images/security.svg" width={76.809} height={76.917} alt="Security" className="absolute z-[5] bottom-[60px] right-6" />
                <div className="flex items-center relative z-[4] justify-center bg-black rounded-full w-[300px] h-[300px]">
                    <Image src="/images/bitcoin.svg" className="animate-pulse" width={133.861} height={155.333} alt="Bitcoin" />
                </div>
            </div>

            <div className="w-full max-w-[1315px] flex flex-col-reverse items-center lg:items-start lg:flex-row relative z-[2] mt-3 mx-auto duration-500">


                <div className="">
                    <p className="max-w-[660px] leading-[52px] text-white text-[48px] font-bold">
                        <span className="text-primary text-[60px]">We fix your contract,</span> so you can focus on productivity.
                    </p>

                    <div className="max-w-[614px] w-full mt-10 mb-[100px]">
                        <p className="flex text-white text-xl">
                            Providing meticulous smart contract audits, rigorous testing, and innovative software development.
                        </p>
                    </div>

                    <Link href="/contact"><button className="h-20 w-full max-w-[330px] bg-primary text-white text-2xl font-semibold rounded-lg">
                        Request an Audit
                    </button></Link>
                </div>
                <div>
                </div>
            </div>
        </div>


    );
};

export default mobileIntro;