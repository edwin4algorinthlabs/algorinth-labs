
import RequestDemo from '@/components/shared/request';

export default function BlogsContainer() {
    return (
    <div className="pt-[120px] w-full sm:w-[85vw] font-rubik mx-auto min-h-screen px-6 md:px-12 lg:px-24">
        <h3 className="text-center text-2xl sm:text-5xl font-bold my-10 sm:my-20">Algorinth Labs Blog</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 w-full max-w-[1244px] mx-auto duration-300">
            {/* =============== Blog =============== */}
            <div className="flex flex-col w-full max-w-[602px]">
                <div className="bg-[#141414] w-full h-[300px] rounded-lg"></div>
                <h2 className="text-xl sm:text-[32px] font-bold pb-1 sm:pb-2 pt-4 sm:pt-6">Topic 1</h2>
                <p className="text-xs sm:text-xl text-[#525252]">More details on it</p>
                <p className="text-base sm:text-2xl py-4 sm:py-6">Body text  text  text  text  text  text  text  
                text  text text text text text text text text text text text text text text text text.t</p>
                <p className="text-xs sm:text-xl text-[#525252]">Aisha Faruq. 28 Aug, 2023</p>
            </div>
            {/* =============== Blog =============== */}
            <div className="flex flex-col w-full max-w-[602px]">
                <div className="bg-[#141414] w-full h-[300px] rounded-lg"></div>
                <h2 className="text-xl sm:text-[32px] font-bold pb-1 sm:pb-2 pt-4 sm:pt-6">Topic 1</h2>
                <p className="text-xs sm:text-xl text-[#525252]">More details on it</p>
                <p className="text-base sm:text-2xl py-4 sm:py-6">Body text  text  text  text  text  text  text  
                text  text text text text text text text text text text text text text text text text.t</p>
                <p className="text-xs sm:text-xl text-[#525252]">Aisha Faruq. 28 Aug, 2023</p>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <button type="button" className="h-[54px] w-[330px] sm:h-20 text-primary text-base sm:text-2xl font-semibold border-[3px] border-primary rounded-lg mt-20 sm:mt-[100px] mb-20">Load More</button>
        </div>


        {/* ================================ */}
        <RequestDemo />
    </div>
    )
}