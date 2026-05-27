import React from 'react'
import Img from '../../assets/img/thumbnail.png'

const clients = [
    { id: 1, name: "Hypixel", img: Img },
    { id: 2, name: "CubeCraft", img: Img },
    { id: 3, name: "Mineplex", img: Img },
    { id: 4, name: "Pika Network", img: Img },
];

const AbClient = () => {
    return (
        <section className="py-20 bg-[#F8F8F8]">
            <div className="mx-5 md:mx-14 lg:mx-28 text-center">
                <h2 className="text-3xl font-bold text-[#232326] mb-10">
                    Notable Clients
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {clients.map((c) => (
                        <div key={c.id} className="flex flex-col items-center gap-3">
                            <img
                                src={c.img}
                                alt={c.name}
                                className="w-24 h-24 object-contain opacity-70 hover:opacity-100 transition"
                            />
                            <p className="text-sm text-[#4A4A4A]">{c.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AbClient
