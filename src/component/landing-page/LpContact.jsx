import React from 'react'
import { Link } from 'react-router-dom';
import { FaBullhorn } from "react-icons/fa6";

const LpContact = () => {
    return (
        <section id='kontak'>
            <div className='w-full bg-[#FEF7E7] mx-auto mb-10 lg:py-10 md:py-8 py-8 lg:px-20 md:px-10 px-5 flex flex-col items-center'>
                <p className="inline-flex items-center gap-3 text-[#00AEEF] text-base lg:text-lg font-bold mt-10 border border-[#00AEEF] rounded-full px-6 py-1.5">
                    <FaBullhorn className="w-5 h-5" />
                    <span className='mt-1'>Let's Collaborate!!</span>
                </p>

                <h1 className='font-bold text-xl lg:text-3xl my-1 leading-normal mt-1'>Like what you see? Let’s build yours.</h1>
                <p className='font-sans lg:text-lg text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper fringilla pellentesque.</p>
                <Link to="/contact" className="mt-8 inline-flex items-center bg-[#00AEEF] hover:bg-sky-600 px-10 py-3 text-[#FEF7E7] text-lg font-semibold rounded-lg">
                    Contact Us
                </Link>
            </div>
        </section>
    )
}

export default LpContact
