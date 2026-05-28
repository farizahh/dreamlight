import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import BannerImg from '../../assets/img/hero.svg'
import Img from '../../assets/img/hero.jpg'

const LpBanner = () => {
    return (
        <section id='banner' className='bg-[#FEF7E7]'>
            <div className="flex flex-col items-center text-center mx-5 lg:mx-14">
                <p className="font-bold text-xl lg:text-4xl text-[#232326] mt-10">
                    More than maps - we create
                    <span className="text-[#00AEEF]"> lasting memories </span>
                    for your community, all in one place
                </p>

                <div className='flex gap-4'>
                    <button className="relative z-10 mt-4 lg:mt-8 flex items-center gap-3 border border-[#00AEEF] bg-white hover:bg-[#00AEEF] px-6 lg:px-10 py-2 lg:py-2 text-[#00AEEF] hover:text-white lg:text-lg font-semibold rounded-full">
                        Explore Portofolio
                    </button>

                    <button className="relative z-10 mt-4 lg:mt-8 flex items-center gap-3 bg-[#00AEEF] hover:bg-sky-600 px-6 lg:px-10 py-2 lg:py-2 text-[#FEF7E7] lg:text-lg font-semibold rounded-full">
                        Get Started
                        <span className="flex items-center justify-center w-8 h-8 bg-[#FEF7E7] rounded-full">
                            <FaArrowRightLong className="text-[#00AEEF] lg:text-lg rotate-[-30deg]" />
                        </span>
                    </button>
                </div>
            </div>

            <img src={BannerImg} className="w-full -mt-9 lg:-mt-32 relative z-0" />

            <div className="bg-[#00AEEF] lg:-mt-24 relative px-10 py-5 text-white flex items-center justify-center">
                <div className="flex items-center gap-32">

                    <div className="text-center">
                        <p className="text-4xl font-bold leading-none">64+</p>
                        <p className="text-xs mt-1 text-gray-100">Happy Clients</p>
                    </div>

                    <div className="w-px h-12 bg-white/50"></div>

                    <div className="text-center">
                        <p className="text-4xl font-bold leading-none">83+</p>
                        <p className="text-xs mt-1 text-gray-100">Satisfied Projects</p>
                    </div>

                    <div className="w-px h-12 bg-white/50"></div>

                    <div className="text-center">
                        <p className="text-4xl font-bold leading-none">5+</p>
                        <p className="text-xs mt-1 text-gray-100">Years Experience</p>
                    </div>

                    <div className="w-px h-12 bg-white/50"></div>

                    <div className="text-center">
                        <p className="text-4xl font-bold leading-none">4.9/5</p>
                        <p className="text-xs mt-1 text-gray-100">Client Rating</p>
                    </div>

                </div>
            </div>

        </section>

    )
}

export default LpBanner
