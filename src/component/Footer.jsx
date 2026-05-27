import React from 'react'
import Logo from '../assets/img/main_nerowhite.png';
import { FaLocationDot, FaPhone, FaEnvelope, FaDiscord, FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <section id='footer'>
            <footer className="divide-y divide-white bg-[#00AEEF] lg:pt-3 md:pt-3 pt-3 lg:px-20 md:px-10 px-5">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center h-10 w-64 rounded-full dark:bg-violet-600">
                                <img src={Logo} alt="" />
                            </div>
                            {/* <span className="self-center text-2xl font-semibold">Brand name</span> */}
                        </a>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-6 gap-y-8 lg:w-2/3 sm:grid-cols-4 text-white font-sans">
                        {/* <div className="space-y-3">
                            <h3 className="tracking-wide uppercase font-bold text-lg">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" className='hover:underline' href="#">Product 1</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" className='hover:underline' href="#">Product 2</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" className='hover:underline' href="#">Product 3</a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase font-bold text-lg">Contact</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <FaLocationDot className="text-white" />
                                    <span>Jl. Merdeka Raya No.73B</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaPhone className="text-white" />
                                    <span>(021) 111 444 90</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaEnvelope className="text-white" />
                                    <span>hello@dreamlight.com</span>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="space-y-3">
                            <h3 className="uppercase font-bold text-lg">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="space-y-3 lg:ml-28 w-full">
                            <div className="uppercase font-bold text-lg">Social media</div>
                            <div className="flex">
                                <a href="#" className="text-[#D0F0FF] p-2 rounded-full flex items-center justify-center text-2xl hover:bg-white hover:text-[#00AEEF] transition">
                                    <FaDiscord />
                                </a>
                                <a href="#" className="text-[#D0F0FF] p-2 rounded-full flex items-center justify-center text-2xl hover:bg-white hover:text-[#00AEEF] transition">
                                    <FaWhatsapp />
                                </a>
                                <a href="#" className="text-[#D0F0FF] p-2 rounded-full flex items-center justify-center text-2xl hover:bg-white hover:text-[#00AEEF] transition">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-[#D0F0FF] p-2 rounded-full flex items-center justify-center text-2xl hover:bg-white hover:text-[#00AEEF] transition">
                                    <FaTiktok />
                                </a>
                                <a href="#" className="text-[#D0F0FF] p-2 rounded-full flex items-center justify-center text-2xl hover:bg-white hover:text-[#00AEEF] transition">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-center text-base font-sans text-white">© 2025 dreamlight. All rights reserved.</div>
            </footer>
        </section>
    )
}

export default Footer
