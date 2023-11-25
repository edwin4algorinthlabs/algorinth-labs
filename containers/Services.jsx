import Image from "next/image";
import Service from "@/components/service";
import RequestDemo from "@/components/shared/request"
import Link from 'next/link';

const serviceList = [
    {
        "title": "Pre-Audit",
        "desc" : "Auditors thoroughly review the smart contract's code, looking for vulnerabilities, bugs, and security issues. They assess its security against potential attack vectors and perform functional testing to ensure it behaves as expected."
    },
    {
        "title": "Main Audit",
        "desc" : "Our The contract developer addresses the issues identified in the audit, making necessary code changes and optimizations. A re-review is conducted to confirm that the identified issues have been successfully resolved."
    },
    {
        "title": "Post-Audit",
        "desc" : "The developer implements the recommended changes to resolve identified issues and enhance the contract's security and efficiency. After successful validation, the smart contract is deployed on the blockchain, and ongoing monitoring ensures its continued reliability and security."
    }
]
const reasons = [
    {
        "title": "Enhanced Security",
        "desc" : "Our smart contract security audits offer additional security by testing the programming code for any vulnerabilities. This increases security and reduces bugs, risks, and chances of unauthorized access."
    },
    {
        "title": "Vulnerability Remediation",
        "desc" : "Our Audits help in the assessment and mitigation of coding errors, flaws in business logic, and unforeseen issues. Early identification and remediation of vulnerabilities can aid in maintaining the integrity of the smart contract."
    },
    {
        "title": "Better Code Quality",
        "desc" : "Our smart contract security audit results in a comprehensive analysis of the coding with the contract. Such a review ensures that the code is in compliance with security standards, and other coding benchmarks. It can help identify areas where the coding can be improvised for better performance or security."
    },
    {
        "title": "Increased Transparency",
        "desc" : "The standard of tests is not whether the smart contract audits are cheap or expensive, rather, based on the quality and transparency of the services provided by them. This directly translates to the reputation of the smart contract audit company as exemplary services speak loud."
    }
]

export default function ServicesContainer() {
  return (
    <>
      <div className="w-full min-h-screen font-rubik relative z-0 bg-[url(/images/3d-abstract.png)] pt-[220px] bg-cover bg-center bg-no-repeat bg-black px-5 lg:px-[100px]">
        <div className="w-full max-w-[1186px] flex flex-col-reverse items-center gap-6 lg:items-start lg:flex-row lg:justify-between relative z-[2] mx-auto duration-500">
          <div className="max-w-[660px]">
            <p className="leading-[52px] text-white text-6xl font-bold">
              Smart Contract Audit
            </p>

            <div className="max-w-[614px] w-full mt-10 mb-[100px]">
              <p className="flex text-white text-2xl">
                Rigorous code reviews and security analysis to identify
                vulnerabilities and ensure the integrity of smart contracts.
              </p>
            </div>

            <Link href="/contact"><button type="button" className="h-20 w-full max-w-[330px] bg-primary text-white text-2xl font-semibold rounded-lg">
              Request an Audit
            </button></Link>
          </div>
          <div className="mt-4">
            <Image
              src="/images/boxes.svg"
              width={425}
              height={425}
              alt="Blocks"
              className="w-[300px] h-[300px] sd:max-w-[425px] sm:max-h-[425px]"
            />
          </div>
        </div>
      </div>

      {/* ============== */}
      <div className="w-full font-rubik  px-5 lg:px-[100px] pt-20 pb-[100px]">
        <Service>
            <Service.Heading text="How do we do it?" sx="mb-10" />

            {
                serviceList?.map((list, index) => (
                    <Service.Frame sx={`mb-[60px] ${index == 1 && "mx-auto"} ${index == 2 && "ml-auto"} `} key={index}>
                        <div className="w-full flex items-center gap-4">
                            <div className="flex flex-col flex-1 gap-6">
                                <Service.Title text={list.title} />
                                <Service.Text>
                                    {list.desc}
                                </Service.Text>
                            </div>
                            <Service.Badge text={index+1} />
                        </div>
                    </Service.Frame>
                ))
            }

            <Service.Heading text="Why trust our auditing?" sx="mb-10 mt-[20px]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {
                    reasons?.map((reason, idx) => (
                        <div key={idx} className="flex flex-col gap-6">
                            <Service.Title text={reason.title} />
                            <Service.Text>
                                {reason.desc}
                            </Service.Text>
                        </div>
                    ))
                }
            </div>
        </Service>
      </div>

      {/* ================================ */}
      <RequestDemo />
    </>
  );
}
