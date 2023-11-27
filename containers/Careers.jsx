import Image from "next/image";
import Service from "@/components/service";
import RequestDemo from "@/components/shared/request"

export default function CareersContainer() {
  return (
    <>
      <div className="w-full min-h-screen font-rubik relative z-0 bg-[url(/images/3d-abstract.png)] pt-[220px] bg-cover bg-center bg-no-repeat bg-black px-5 lg:px-[100px]">
        <div className="w-full max-w-[1186px] flex flex-col-reverse items-center gap-6 lg:items-start lg:flex-row lg:justify-between relative z-[2] mx-auto duration-500">
          <div className="max-w-[660px]">
            <p className="leading-[52px] text-primary text-6xl font-bold">
              Algorinth Labs Careers
            </p>

            <div className="max-w-[614px] w-full mt-10 mb-[100px]">
              <p className="flex text-white text-2xl">
                Full-time and internship opportunities at Algorinth Labs LLC. are featured here.
                <br></br>
                <br></br>
                There are no openings at the moment.
              </p>
            </div>

            {/* <button type="button" className="h-20 w-full max-w-[330px] bg-primary text-white text-2xl font-semibold rounded-lg">
              Request an Audit
            </button> */}
          </div>
          <div className="mt-4">
            <Image
              src="/images/boxes.svg"
              width={425}
              height={425}
              alt="Blocks"
              className="max-w-[425px] max-h-[425px]"
            />
          </div>
        </div>
      </div>
      {/* <RequestDemo /> */}
    </>
  );
}
