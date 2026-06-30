import React from 'react'
import Img from '../../assets/img/thumbnail.png'

const AbIntro = () => {
    return (
        // <div className='w-full md:grid md:grid-cols-2 gap-3 lg:py-16 md:py-8 py-4 lg:px-20 md:px-10 px-5'>
        <div className='w-full gap-3 lg:py-16 md:py-8 py-4 lg:px-20 md:px-10 px-5 dark:bg-white dark:text-black'>
            <div className='sm:pr-10 text-black'>
                {/* <p className='text-[#00AEEF] text-base lg:text-lg font-bold lg:mt-10 mt-3'>INTRODUCTION</p> */}
                <div className='space-y-16 lg:space-y-24'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <img
                                src={Img}
                                alt=""
                                className="w-full max-w-md mx-auto lg:max-w-full 2xl:w-[90%] rounded-2xl"
                            />
                        </div>
                        <div className='font-sans space-y-5 text-black text-left lg:text-justify'>
                            <h1 className='font-bold text-xl lg:text-3xl 2xl:text-5xl my-1 leading-normal'>Dreamlight Creative Studio</h1>
                            <p className='2xl:text-xl'>A collective of Minecraft developers, builders, model artists, and render artists dedicated to transforming ideas into immersive and meticulously crafted digital environments.</p>
                            <p className='2xl:text-xl'>Founded in 2020 in Jakarta, Indonesia, with over five years of international experience, Dreamlight Creative Studio has delivered high-fidelity Minecraft worlds for leading content creators, server networks, and established brands worldwide.</p>
                            <p className='2xl:text-xl'>We provide end-to-end environment design and project management services — from early-stage concept development and spatial planning to in-game production, optimization, and post-production delivery.</p>
                        </div>
                    </div>

                    <div className='mt-16'>
                        <h1 className="font-bold text-xl lg:text-3xl 2xl:text-5xl  leading-tight">Core Values</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                                <h2 className='font-bold mb-5 text-xl 2xl:text-2xl'>Beyond Aesthetics</h2>
                                <p className="text-sm lg:text-base 2xl:text-xl leading-7 text-gray-700">"We don't build pretty. We build purposeful.</p>
                                <p className="text-sm lg:text-base 2xl:text-xl leading-7 text-gray-700">Every block has a reason. Every space is designed to guide the player, not just impress them. We apply architectural theory to Minecraft — because a beautiful world that confuses its player has failed its purpose."</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                                <h2 className='font-bold mb-5 text-xl 2xl:text-2xl'>Solution Driven</h2>
                                <p className="text-sm lg:text-base 2xl:text-xl leading-7 text-gray-700">We don't just build what you ask for.</p>
                                <p className="text-sm lg:text-base 2xl:text-xl leading-7 text-gray-700">We question your pain point first — what problem does this space need to solve? Then we design backwards from the answer. Our clients don't just get a build. They get a solution."</p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                                <h2 className='font-bold mb-5 text-xl 2xl:text-2xl'>Limitless Creativity</h2>
                                <p className="text-sm lg:text-base 2xl:text-xl leading-7 text-gray-700">"The moment you say 'that's impossible in Minecraft' — that's where challange begin.</p>
                                <p className="text-sm lg:text-base 2xl:text-xl leading-7 text-gray-700">We don't chase trends. We set them. Inspired by the essence of every dreamer who ever placed their first block, we push what's possible — technically, creatively, and narratively."</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h1 className='font-bold text-xl lg:text-3xl 2xl:text-5xl my-1 mt-1 leading-normal text-center'>Our Profesionals</h1>
                        <img src={Img} alt="" className="w-full h-52 lg:h-72 object-cover rounded-2xl" />
                    </div>

                    <div className='space-y-2'>
                        <h1 className='font-bold text-xl lg:text-3xl 2xl:text-5xl my-1 mt-1 leading-normal text-center'>Our Clients</h1>
                        <img src={Img} alt="" className="w-full h-52 lg:h-72 object-cover rounded-2xl" />
                        <p className='font-sans text-center text-sm lg:text-base 2xl:text-xl'>Trusted by creators, communities, and brands worldwide.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AbIntro
