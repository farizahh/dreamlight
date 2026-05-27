import React from 'react'
import Img from '../../assets/img/thumbnail.png'

const portfolioItems = [
    { id: 1, name: "Project Name 1", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-1", row: "row-span-1", height: "h-48" },
    { id: 2, name: "Project Name 2", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-1", row: "row-span-2", height: "h-[400px]" },
    { id: 3, name: "Project Name 3", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-2", row: "row-span-1", height: "h-48" },
    { id: 4, name: "Project Name 4", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-1", row: "row-span-1", height: "h-48" },
    { id: 5, name: "Project Name 5", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-1", row: "row-span-1", height: "h-48" },
    { id: 6, name: "Project Name 6", img: Img, description: "We craft virtual environments that reflect your community’s identity.", col: "col-span-1", row: "row-span-1", height: "h-48" },
];


const LpPortofolio = () => {
    return (
        <section id='portofolio'>
            <div className='w-full lg:py-16 md:py-8 py-8 lg:px-20 md:px-10 px-5'>
                <div className='text-center'>
                    <p className='text-[#00AEEF] text-lg lg:text-xl font-bold mt-10 md:mt-0'>FEATURED WORKS</p>
                    <h1 className='font-bold text-xl lg:text-3xl my-1 text-[#232326]'>Moments We're Proud O</h1>
                </div>
                <div className="hidden lg:grid grid-cols-4 gap-4 mt-5">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className={`relative ${item.col} ${item.row} ${item.height} group overflow-hidden rounded-xl cursor-pointer`}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/40"></div>
                            <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold transition-all duration-500 group-hover:bottom-16">
                                {item.name}
                            </h3>
                            <p className="absolute bottom-4 left-4 text-white text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mt-5 lg:hidden">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative h-40 group overflow-hidden rounded-xl cursor-pointer"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/40"></div>
                            <h3 className="absolute bottom-4 left-3 text-white text-lg font-bold transition-all duration-500 group-hover:bottom-26">
                                {item.name}
                            </h3>
                            <p className="absolute bottom-4 left-3 text-white text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LpPortofolio
