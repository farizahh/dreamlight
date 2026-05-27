import React, { useState } from 'react'
import Img from '../../assets/img/thumbnail.png'
import ModalPremade from '../ModalPremade';

const premadeProducts = [
    {
        id: 1,
        name: "Premium Spawn",
        desc: "A detailed spawn area crafted for servers needing a strong first impression.",
        image: Img,
    },
    {
        id: 2,
        name: "RPG Lobby",
        desc: "Immersive lobby design perfect for RPG-style servers.",
        image: Img,
    },
    {
        id: 3,
        name: "Mini Games Arena",
        desc: "Ready-to-use arena with optimized pathways and play zones.",
        image: Img,
    },
];

const LpPremade = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id='premade'>
            <div className='w-full lg:py-16 md:py-8 py-8 lg:px-20 md:px-10 px-5'>
                <div className='text-center'>
                    <p className='text-[#00AEEF] text-base lg:text-lg font-bold mt-10 md:mt-0'>
                        PREMADE COLLECTION
                    </p>
                    <h1 className='font-bold text-xl lg:text-3xl my-1 text-[#232326]'>
                        Need a quick solution? Explore our library collection assets ready to use designs instantly, so you can focus on your community immediately.
                    </h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5'>
                    {premadeProducts.map((item) => (
                        <div key={item.id} className="card bg-base-100 w-full shadow-sm border-[#E4E4E7] border hover:shadow-lg transition">
                            <figure>
                                <img src={item.image} className='w-full p-3 rounded-xl' />
                            </figure>
                            <div className="card-body text-[#333333] font-sans px-4 py-1">
                                <h2 className="card-title font-bold">{item.name}</h2>
                                <p>{item.desc}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-link no-underline text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white">
                                        View Product
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='w-full'>
                    <button
                        className="w-full lg:w-96 lg:mx-auto block mt-8 items-center gap-3 bg-[#00AEEF] hover:bg-sky-600 px-10 py-2 text-[#FEF7E7] text-lg font-semibold rounded-lg"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Explore Full Collection
                    </button>
                </div>
            </div>
            <ModalPremade isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default LpPremade
