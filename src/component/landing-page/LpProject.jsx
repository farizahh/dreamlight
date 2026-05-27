import React from 'react'
import Img from '../../assets/img/thumbnail.png'

const LpProject = () => {
    return (
        <section className="w-full bg-white lg:py-20 md:py-14 py-10 lg:px-20 md:px-10 px-5">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT — STATS */}
                <div className="space-y-10">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">100+</h2>
                        <p className="text-gray-600 text-sm lg:text-base mt-1">
                            Projects Delivered
                        </p>
                    </div>

                    <div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">5+ Years</h2>
                        <p className="text-gray-600 text-sm lg:text-base mt-1">
                            Industry Experience
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                            Global Clients
                        </h2>
                        <p className="text-gray-600 text-sm lg:text-base mt-1">
                            Across multiple regions worldwide
                        </p>
                    </div>
                </div>

                {/* RIGHT — CHAT REVIEWS */}
                <div className="relative w-full h-[360px]">

                    {/* Label */}
                    <p className="absolute -top-6 left-0 text-sm text-gray-500">
                        Real feedback from our clients
                    </p>

                    {/* Chat 1 */}
                    <img
                        src="/chat-1.png"
                        alt="Client review"
                        className="absolute top-0 left-8 w-48 rounded-xl shadow-lg -rotate-3"
                    />

                    {/* Chat 2 */}
                    <img
                        src="/chat-2.png"
                        alt="Client review"
                        className="absolute top-20 right-6 w-52 rounded-xl shadow-lg rotate-2"
                    />

                    {/* Chat 3 */}
                    <img
                        src="/chat-3.png"
                        alt="Client review"
                        className="absolute bottom-6 left-16 w-44 rounded-xl shadow-lg -rotate-1"
                    />

                </div>
            </div>
        </section>

    )
}

export default LpProject
