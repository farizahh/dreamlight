import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import BannerImg from '../../assets/img/hero.svg'
import Img from '../../assets/img/hero.jpg'

const LpBanner = () => {
    return (
        <section id='banner' className='bg-[#FEF7E7]'>
            <div className="flex flex-col items-center text-center mx-5 lg:mx-14">
                <p className="font-bold text-lg lg:text-4xl 2xl:text-5xl 2xl:px-20 text-[#232326] mt-10">
                    More than maps - we create
                    <span className="text-[#00AEEF]"> lasting memories </span>
                    for your community, all in one place
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

                    <button className="relative z-10 w-full sm:w-auto mt-4 lg:mt-8 flex items-center justify-center gap-3 border border-[#00AEEF] bg-white hover:bg-[#00AEEF] px-6 lg:px-10 2xl:px-12 py-3 2xl:py-4 text-[#00AEEF] hover:text-white text-lg lg:text-lg 2xl:text-2xl font-semibold rounded-full transition-all duration-300">
                        Explore Portfolio
                    </button>

                    <button className="relative z-10 w-full sm:w-auto mt-0 sm:mt-4 lg:mt-8 flex items-center justify-center gap-3 bg-[#00AEEF] hover:bg-sky-600 px-6 lg:px-10 py-3 2xl:py-4 text-[#FEF7E7] text-lg lg:text-lg 2xl:text-2xl font-semibold rounded-full transition-all duration-300">
                        Get Started

                        <span className="flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 bg-[#FEF7E7] rounded-full shrink-0">
                            <FaArrowRightLong className="text-[#00AEEF] text-sm lg:text-lg rotate-[-30deg]" />
                        </span>
                    </button>

                </div>
            </div>

            <img src={BannerImg} className="w-full 2xl:h-[60%] lg:-mt-32 2xl:-mt-32 relative z-0" />

            <div className="bg-[#00AEEF] relative px-6 py-8 lg:px-10 lg:py-5 text-white flex items-center justify-center lg:-mt-24 2xl:-mt-24">
                <div className="grid grid-cols-2 lg:flex items-center gap-y-8 lg:gap-y-0 gap-x-6 lg:gap-32 w-full max-w-6xl">
                    <div className="text-center">
                        <p className="text-2xl lg:text-4xl 2xl:text-5xl font-bold leading-none">64+</p>
                        <p className="text-xs 2xl:text-base mt-2 text-gray-100">Happy Clients</p>
                    </div>

                    <div className="hidden lg:block w-px h-12 bg-white/50"></div>

                    <div className="text-center">
                        <p className="text-2xl lg:text-4xl 2xl:text-5xl font-bold leading-none">83+</p>
                        <p className="text-xs 2xl:text-base mt-2 text-gray-100">Satisfied Projects</p>
                    </div>

                    <div className="hidden lg:block w-px h-12 bg-white/50"></div>

                    <div className="text-center">
                        <p className="text-2xl lg:text-4xl 2xl:text-5xl font-bold leading-none">5+</p>
                        <p className="text-xs 2xl:text-base mt-2 text-gray-100">Years Experience</p>
                    </div>

                    <div className="hidden lg:block w-px h-12 bg-white/50"></div>

                    <div className="text-center">
                        <p className="text-2xl lg:text-4xl 2xl:text-5xl font-bold leading-none">4.9/5</p>
                        <p className="text-xs 2xl:text-base mt-2 text-gray-100">Client Rating</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LpBanner
