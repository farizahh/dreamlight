import React from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLightbulb, FaBoxOpen } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

const steps = [
    {
        id: 1,
        logo: <FaLightbulb />,
        title: "Planning",
        desc: "We gather your ideas, explore concepts, and create the best approach for your project.",
    },
    {
        id: 2,
        logo: <FaTools />,
        title: "Building",
        desc: "Our team starts crafting, designing, and developing your build with precision.",
    },
    {
        id: 3,
        logo: <FaBoxOpen />,
        title: "Final Delivery",
        desc: "We finalize, polish, and deliver your project exactly as you envisioned.",
    },
];

const AbProcess = () => {
    return (
        <section id='about-process'>
            <div className='w-full lg:py-10 md:py-8 py-8 lg:px-20 md:px-10 px-5'>
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Judul */}
                    <div className="flex-none w-full lg:w-3/10 p-6 bg-[#FDFDFD] rounded-2xl border-[#E4E4E7] border">
                        <p className='text-black/30 text-base lg:text-sm font-bold mt-5 md:mt-0'>HOW WE WORK</p>
                        <h1 className='font-bold text-3xl my-1 text-[#232326] text-wrap text-left'>
                            From Concept to Complection
                        </h1>
                        <Link
                            to="/portofolio"
                            className="mt-4 text-sky-500 text-lg rounded-lg transition flex items-center gap-2"
                        >
                            <span className="border-b-2 border-transparent hover:border-sky-500 transition">
                                Explore Portfolio
                            </span>

                            <FaLongArrowAltRight className="text-xl" />
                        </Link>
                    </div>

                    {/* Cards dari mapping */}
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="flex-1 p-6 bg-[#FDFDFD] rounded-2xl border-[#E4E4E7] border hover:shadow-lg transition hover:bg-[#E4E4E7]"
                        >
                            <p className='text-3xl font-semibold text-[#232326] mb-3'>{step.logo}</p>
                            <h3 className="text-xl font-semibold text-[#232326] mb-2">
                                {step.title}
                            </h3>
                            <p className="text-[#4A4A4A] text-sm font-sans">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AbProcess
