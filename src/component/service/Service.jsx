import React from 'react'

const services = [
    { id: 1, name: "Development", desc: "Creating and coding systems or projects." },
    { id: 2, name: "Builder", desc: "Designing and constructing worlds or maps." },
    { id: 3, name: "Texture Artist", desc: "Designing textures for assets and environments." },
    { id: 4, name: "3D Modeler", desc: "Creating 3D models for characters, objects, and scenes." },
];


const Service = () => {
    return (
        <section id='service-content'>
            <div className='w-full lg:py-5 md:py-8 py-8 lg:px-20 md:px-10 px-5 lg:my-3 bg-[#FEF7E7]'>
                <div className='text-center'>
                    {/* <p className='text-[#00AEEF] text-base lg:text-lg font-bold mt-5 md:mt-0'>FEATURED WORKS</p> */}
                    <h1 className='font-bold text-3xl my-1 text-[#232326]'>
                        How We Can Help
                    </h1>
                </div>

                <div className="grid gap-4 mx-auto grid-cols-2 md:grid-cols-4 my-5">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="w-full bg-white shadow-md rounded-xl p-3 text-center hover:shadow-lg transition"
                        >
                            <h3 className="font-semibold text-lg text-[#232326] mb-2">
                                {service.name}
                            </h3>
                            <p className="text-gray-600 text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service
