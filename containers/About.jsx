import { IoIosArrowDown } from "react-icons/io"
import Image from "next/image"
import About from "@/components/about"


function AboutContainer() {
  return (
    <>
        <div className="w-full min-h-screen font-rubik relative z-0 bg-[url(/images/3d-abstract-small.png)] pt-[332px] bg-cover bg-center bg-no-repeat bg-black px-5 lg:px-[100px]">
        <div className="w-full px-5 max-w-[874px] mx-auto">
            <p className="text-5xl text-center font-bold">
                We are <span className="text-primary">Algorinth Labs</span>
            </p>
            <p className="text-xl text-center mt-10">
                Algorinth Labs is a pioneering leader in the blockchain technology, 
                specializing in smart contract audits, testing, and innovative web3 
                software development. With a commitment to excellence and security, 
                we empower businesses and individuals to navigate the decentralized 
                landscape with confidence.
            </p>
            <div className="h-20 w-[116px] border-[5px] border-primary rounded-lg mx-auto mt-[200px] flex justify-center items-center cursor-pointer animate-bounce">
                <IoIosArrowDown size={60} className="text-primary" />
            </div>
        </div>
        </div>
        <div className="relative z-0 mb-10 sm:mb-[84px]">
            <Image src="/images/shield.svg" width={154} height={154} alt="Shield" className="absolute z-[1] top-0 right-6" />
            <Image src="/images/settings.svg" width={154} height={154} alt="Security" className="absolute z-[1] top-[292px] right-[26.177vw]" />
            <Image src="/images/security.svg" width={154} height={154} alt="security" className="absolute z-[1] top-[719.87px] right-[49.85vw]" />
            <div className="relative z-[2] bg-black/80  px-6 sm:px-20">
                <About>
                    <About.Heading text="Who are we?" sx="pt-20 pb-10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-6">
                            <About.Title text="Our Focus" />
                            <About.Text>
                                Our core focus revolves around ensuring the integrity and 
                                security of blockchain ecosystems. Through meticulous smart 
                                contract audits, robust testing practices, and cutting-edge 
                                software development, we strive to elevate the standards of 
                                reliability and innovation in the web3 space.
                            </About.Text>
                        </div>
                        <div className="flex flex-col gap-6">
                            <About.Title text="Our Mission" />
                            <About.Text>
                                Our mission is to fortify the foundations of blockchain 
                                technology by providing top-tier smart contract audits, 
                                comprehensive testing, and forward-thinking software solutions. 
                                We aim to foster a secure and collaborative environment that empowers 
                                clients to harness the full potential of decentralized technologies.
                            </About.Text>
                        </div>
                        <div className="flex flex-col gap-6 w-full max-w-[580px]">
                            <About.Title text="Our Vision" />
                            <About.Text>
                                Algorinth Labs envisions a future where blockchain and web3 technologies 
                                are embraced for their transformative potential without compromising security. 
                                We strive to be at the forefront of innovation, setting industry benchmarks 
                                for best practices in smart contract auditing, testing, and software development.
                            </About.Text>
                        </div>
                    </div>

                    <About.Heading text="What do  we do?" sx="pt-20 pb-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-6">
                            <About.Title text="Smart contract audits" />
                            <About.Text>
                                Rigorous code reviews and security analysis to identify 
                                vulnerabilities and ensure the integrity of smart contracts.
                            </About.Text>
                        </div>
                        <div className="flex flex-col gap-6">
                            <About.Title text="Testing excellence" />
                            <About.Text>
                                Comprehensive functional, security, and interoperability testing to 
                                validate the reliability of blockchain-based applications.
                            </About.Text>
                        </div>
                        <div className="flex flex-col gap-6 flex-1">
                            <About.Title text="Innovative software development" />
                            <About.Text>
                                Crafting cutting-edge web3 solutions that push the boundaries of blockchain technology while maintaining the highest standards 
                                of security.
                            </About.Text>
                        </div>
                        <div className="flex flex-col gap-6 flex-1">
                            <About.Title text="Strategic consultation" />
                            <About.Text>
                            Providing actionable insights and recommendations to mitigate risks and 
                            enhance the security posture of blockchain projects.
                            </About.Text>
                        </div>
                        <div className="flex flex-col gap-6 w-full max-w-[563.42px]">
                            <About.Title text="Empowerment" />
                            <About.Text>
                            Building a community of secure blockchain adopters through knowledge-sharing, workshops, and resources.
                            </About.Text>
                        </div>
                    </div>
                </About>
            </div>
        </div>
        <div className="w-full flex items-center justify-center px-6 sm:px-20 mb-20">
            <Image src="/images/meeting.png" width={1244} height={635} alt="meeting" className="w-full h-full max-w-[1244px]" />
        </div>
    </>
  )
}

export default AboutContainer