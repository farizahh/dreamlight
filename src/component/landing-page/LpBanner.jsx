import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import BannerImg from '../../assets/img/hero.svg'

const LpBanner = () => {
    return (
        <section id='banner' className='bg-[#FEF7E7]'>
            <div className="flex flex-col items-center text-center mx-5 lg:mx-14">
                <p className="font-bold text-xl lg:text-4xl text-[#232326] mt-10">
                    More than maps - we create
                    <span className="text-[#00AEEF]"> lasting memories </span>
                    for your community, all in one place
                </p>

                <button className="relative z-10 mt-4 lg:mt-8 flex items-center gap-3 bg-[#00AEEF] hover:bg-sky-600 px-6 lg:px-10 py-2 lg:py-4 text-[#FEF7E7] lg:text-lg font-semibold rounded-full">
                    Get Started
                    <span className="flex items-center justify-center w-8 h-8 bg-[#FEF7E7] rounded-full">
                        <FaArrowRightLong className="text-[#00AEEF] lg:text-lg rotate-[-30deg]" />
                    </span>
                </button>
            </div>

            <img src={BannerImg} className="w-full -mt-9 lg:-mt-28 relative z-0" />
        </section>

    )
}

export default LpBanner
