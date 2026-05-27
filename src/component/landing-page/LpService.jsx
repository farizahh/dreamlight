import React from 'react'
import Img from '../../assets/img/thumbnail.png'

const services = [
    { id: 1, name: "Service Name 1", img: Img },
    { id: 2, name: "Service Name 2", img: Img },
    { id: 3, name: "Service Name 3", img: Img },
    { id: 4, name: "Service Name 4", img: Img },
];

const LpService = () => {
    return (
        <section id="service">
            <div className="bg-[#FEF7E7] w-full grid md:grid-cols-2 gap-6 lg:py-16 md:py-8 py-8 lg:px-20 md:px-10 px-5">

                {/* Kiri (Teks) */}
                {/* Kiri (Teks) */}
                <div className="order-1 md:order-0 flex flex-col justify-center">
                    <h1 className="font-bold text-xl lg:text-7xl">
                        Our <span className="text-[#00AEEF]">Service</span>
                    </h1>

                    <p className="font-sans lg:text-lg md:text-xs text-sm text-justify my-3 text-neutral-700">
                        Helping you transform concepts into reality with services crafted for every vision and need.
                    </p>

                    {/* Value Points */}
                    <ul className="mt-6 space-y-3 text-sm lg:text-base text-neutral-600">
                        <li className="flex items-start gap-2">
                            <span className="text-[#00AEEF] font-bold">—</span>
                            Purpose-driven design, not empty aesthetics
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#00AEEF] font-bold">—</span>
                            5+ years of global project experience
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#00AEEF] font-bold">—</span>
                            Collaborative and transparent workflow
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#00AEEF] font-bold">—</span>
                            Tailored solutions for each community
                        </li>
                    </ul>
                </div>

                {/* Kanan (Grid Gambar) */}
                <div className="order-2 md:order-0">
                    <div className="grid grid-cols-2 gap-4 justify-center">

                        {services.map((item) => (
                            <div
                                key={item.id}
                                className="relative w-full h-40 md:w-[253px] md:h-[200px] rounded-xl overflow-hidden cursor-pointer group"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/50"></div>
                                <h3 className="absolute bottom-3 left-2 lg:left-4 text-white text-lg font-bold transition-all duration-500 group-hover:bottom-6">
                                    {item.name}
                                </h3>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>

    )
}

export default LpService
