import React from 'react'
import Img from '../../assets/img/thumbnail.png'

const LpTentang = () => {
    return (
        <section id='tentang'>
            <div className='w-full md:grid md:grid-cols-2 gap-3 lg:py-16 md:py-8 py-4 lg:px-20 md:px-10 px-5 dark:bg-white dark:text-black text-black'>
                <div className='pr-10'>
                    <p className='text-[#00AEEF] text-base lg:text-lg font-bold lg:mt-1 mt-3 mb-3'>INTRODUCTION</p>
                    {/* <h1 className='font-bold text-xl lg:text-3xl my-1 leading-normal'>Designs Made With Intention</h1> */}
                    <p className='font-sans lg:text-lg md:text-xs text-sm text-justify'>Dreamlight Creative Studio is a professional Minecraft design consultancy focused on function and purpose. Driven by a team of expert builders, 3D artists, and developers with over 5 years of experience, we provide a one-stop solution to transform your dreams into immersive, results-driven realities.</p>
                    {/* <div className='space-y-5'>
                        <p className='font-sans lg:text-lg md:text-xs text-sm text-justify'>Dreamlight Creative Studio is a professional Minecraft design & consultancy. We design virtual environments where every block serves a purpose. rejecting empty aesthetics to ensure every corner delivers function, meaning, and with the essence of Dreamlight, We believe that everyone deserves to dream and we are here to illuminate those dreams into reality.</p>
                        <p className='font-sans lg:text-lg md:text-xs text-sm text-justify'>We are a collective of Builders, 3D Artists, and Developers experts with over 5 years of global experience. We stand ready as your one-stop solution, integrating these disciplines to deliver immersive projects that solve your core problems.</p>
                    </div> */}
                    <button className="w-full block mt-8 items-center gap-3 bg-[#00AEEF] hover:bg-sky-600 px-10 py-2 text-[#FEF7E7] text-lg font-semibold rounded-lg">
                        Explore Our Services
                    </button>
                </div>
                <div className="flex items-center justify-center w-full mt-10 md:mt-0">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer group">

                        <img
                            src={Img}
                            alt="Design Thumbnail"
                            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/50"></div>
                        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold transition-all duration-500 lg:group-hover:bottom-16 group-hover:bottom-20">
                            Creative Design
                        </h3>
                        <p className="absolute bottom-4 left-4 text-white text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            We craft virtual environments that reflect your community’s identity and provide memorable experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LpTentang
