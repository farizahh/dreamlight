import React from 'react'
import Img from '../../assets/img/thumbnail.png'

const AbIntro = () => {
    return (
        // <div className='w-full md:grid md:grid-cols-2 gap-3 lg:py-16 md:py-8 py-4 lg:px-20 md:px-10 px-5'>
        <div className='w-full gap-3 lg:py-16 md:py-8 py-4 lg:px-20 md:px-10 px-5'>
            <div className='pr-10'>
                {/* <p className='text-[#00AEEF] text-base lg:text-lg font-bold lg:mt-10 mt-3'>INTRODUCTION</p> */}
                <div className='space-y-5'>
                    <div className='grid grid-cols-2'>
                        <div>
                            <img src={Img} alt="" className='w-[90%]' />
                        </div>
                        <div className='font-sans space-y-5'>
                            <h1 className='font-bold text-xl lg:text-3xl my-1 leading-normal'>Dreamlight Creative Studio</h1>
                            <p>A collective of Minecraft developers, builders, model artists, and render artists dedicated to transforming ideas into immersive and meticulously crafted digital environments.</p>
                            <p>Founded in 2020 in Jakarta, Indonesia, with over five years of international experience, Dreamlight Creative Studio has delivered high-fidelity Minecraft worlds for leading content creators, server networks, and established brands worldwide.</p>
                            <p>We provide end-to-end environment design and project management services — from early-stage concept development and spatial planning to in-game production, optimization, and post-production delivery.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold text-xl lg:text-3xl my-1 mt-1 leading-normal text-center'>Core Values</h1>
                        <div className='grid grid-cols-3 text-center font-sans'>
                            <div className='space-y-3'>
                                <h2 className='font-bold mb-5 text-xl'>Beyond Aesthetics</h2>
                                <p>"We don't build pretty. We build purposeful.</p>
                                <p>Every block has a reason. Every space is designed to guide the player, not just impress them. We apply architectural theory to Minecraft — because a beautiful world that confuses its player has failed its purpose."</p>
                            </div>

                            <div className='space-y-3'>
                                <h2 className='font-bold mb-5 text-xl'>Solution Driven</h2>
                                <p>We don't just build what you ask for.</p>
                                <p>We question your pain point first — what problem does this space need to solve? Then we design backwards from the answer. Our clients don't just get a build. They get a solution."</p>
                            </div>

                            <div className='space-y-3'>
                                <h2 className='font-bold mb-5 text-xl'>Limitless Creativity</h2>
                                <p>"The moment you say 'that's impossible in Minecraft' — that's where challange begin.</p>
                                <p>We don't chase trends. We set them. Inspired by the essence of every dreamer who ever placed their first block, we push what's possible — technically, creatively, and narratively."</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold text-xl lg:text-3xl my-1 mt-1 leading-normal text-center'>Our Profesionals</h1>
                        <img src={Img} alt="" className='w-full h-48 mt-2' />
                    </div>

                    <div className='space-y-2'>
                        <h1 className='font-bold text-xl lg:text-3xl my-1 mt-1 leading-normal text-center'>Our Clients</h1>
                        <img src={Img} alt="" className='w-full h-28 mt-2' />
                        <p className='font-sans text-center'>Trusted by creators, communities, and brands worldwide.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AbIntro
