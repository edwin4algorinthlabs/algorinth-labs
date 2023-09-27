
import Intro from "@/components/home/intro";
import Services from "../components/home/services";

const HomePage = () => {
  return (
    <>
      <Intro />
      <Services />

      <div className="mt-20 mb-[100px] flex flex-col items-center">
        <p className="text-[60px] font-semibold">What’s Next? Let’s chat!</p>
        <div className="flex gap-[30px] mt-[100px]">
          <button className="h-20 w-[330px] bg-white text-black text-2xl font-semibold rounded-lg">
              Request an Audit
          </button>
          <button className="h-20 w-[330px] border-2 border-white text-white text-2xl font-semibold rounded-lg">
              Contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
