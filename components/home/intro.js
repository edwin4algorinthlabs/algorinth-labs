import Image from "next/image"

const Intro = () => {
    return (
        <div className="w-full min-h-screen font-rubik relative z-0 bg-[url(/images/3d-abstract.png)] pt-[220px] bg-cover bg-center bg-no-repeat bg-black px-5 lg:px-[100px]">
            <div className="w-full max-w-[1315px] flex flex-col-reverse items-center lg:items-start lg:flex-row relative z-[2] mx-auto duration-500">
                <div className="">
                    <p className="max-w-[660px] leading-[52px] text-white text-[48px] font-bold">
                        <span className="text-primary text-[60px]">We fix your contract,</span> so you can focus on productivity.
                    </p>

                    <div className="max-w-[614px] w-full mt-10 mb-[100px]">
                        <p className="flex text-white text-xl">
                            Providing meticulous smart contract audits, rigorous testing, and innovative software development.
                        </p>
                    </div>

                    <button className="h-20 w-full max-w-[330px] bg-primary text-white text-2xl font-semibold rounded-lg">
                        Request an Audit
                    </button>
                </div>
                <div>
                    <div className="w-[583px] flex items-center justify-center relative z-[2] h-[583px] rounded-full bg-transparent">
                    <div className="flex items-center justify-center absolute z-[3] top-0 left-0 right-0 bottom w-[583px] h-[583px] rounded-full bg-[#FFEFCB]/40 blur-[20px]"></div>
                    <Image src="/images/settings.svg" width={153.809} height={153.917} alt="Setting" className="absolute z-[5] bottom-0 left-0" />
                    <Image src="/images/shield.svg" width={153.809} height={153.917} alt="Setting" className="absolute z-[5] top-0 right-0" />
                    <Image src="/images/security.svg" width={153.809} height={153.917} alt="Security" className="absolute z-[5] bottom-[70px] right-2.5" />
                    <div className="flex items-center relative z-[4] justify-center bg-black rounded-full w-[480px] h-[480px]">
                        <Image src="/images/bitcoin.svg" width={240.861} height={333.333} alt="Bitcoin" />
                    </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Intro;