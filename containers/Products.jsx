import RequestDemo from "@/components/shared/request"

export default function ProductsContainer() {
    return (
      <>
        <div className="w-full min-h-screen font-rubik relative z-0 bg-[url(/images/3d-abstract-small.png)] pt-[220px] bg-cover bg-center bg-no-repeat bg-black px-5 lg:px-[100px]">
          <div className="w-full max-w-[1186px] relative z-[2] mx-auto">
            <div className="text-center">
                <p className="leading-[52px] text-white text-6xl font-bold">
                  Our Products
                </p>
                <p className="text-white text-2xl">
                    Coming soon
                </p>
            </div>
          </div>
        </div>
  
        {/* ================================ */}
        <RequestDemo />
      </>
    );
  }