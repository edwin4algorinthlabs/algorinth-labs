

export default function RequestDemo() {
    return (
    <div className="mt-20 mb-[100px] flex flex-col items-center px-6">
        <p className="text-2xl sm:text-4xl lg:text-6xl font-semibold">What’s Next? Let’s chat!</p>
        <div className="flex flex-col md:flex-row gap-[30px] mt-8 sm:mt-12 lg:mt-[100px]">
          <button className="h-[54px] sm:h-20 w-[80vw] sm:w-[330px] bg-white text-black text-xl sm:text-2xl font-semibold rounded-lg">
              Request an Audit
          </button>
          <button className="h-[54px] sm:h-20 w-[80vw] sm:w-[330px] border-2 border-white text-white text-xl sm:text-2xl font-semibold rounded-lg">
              Contact us
          </button>
        </div>
    </div>
    )
}