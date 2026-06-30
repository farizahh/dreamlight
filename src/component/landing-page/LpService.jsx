import React from 'react'
import Img from '../../assets/img/thumbnail.png'

const services = [
    { id: 1, name: "Service Name 1", img: Img, description: "We craft virtual environments that reflect your community’s identity." },
    { id: 2, name: "Service Name 2", img: Img, description: "We craft virtual environments that reflect your community’s identity." },
    { id: 3, name: "Service Name 3", img: Img, description: "We craft virtual environments that reflect your community’s identity." },
    { id: 4, name: "Service Name 4", img: Img, description: "We craft virtual environments that reflect your community’s identity." },
];

const LpService = () => {
    return (
        <section id="service">
            <div className="bg-[#FEF7E7] lg:py-16 md:py-8 py-4 lg:px-20 md:px-10 px-5 dark:text-black">
                <div className='text-center'>
                    <p className='text-[#00AEEF] text-base lg:text-xl font-bold mt-10 md:mt-0'>OUR SERVICES</p>
                    <h1 className='font-bold text-lg lg:text-3xl my-1 text-[#232326]'>Helping you transform concepts into reality with services crafted for every vision and need.</h1>
                </div>

                <div className="grid lg:grid-cols-4 gap-4 mt-5">
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
                            <h3 className="absolute bottom-4 left-2 text-white text-lg font-bold transition-all duration-500 group-hover:bottom-16">
                                {item.name}
                            </h3>
                            <p className="absolute bottom-4 left-2 right-2 text-white text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>

    )
}

export default LpService
