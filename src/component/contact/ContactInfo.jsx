import React from "react";
// import FAQGeneralQuestions from "./FAQGeneralQuestions";
import { FaLocationDot, FaPhone, FaClock, FaEnvelope, FaDiscord, FaLinkedinIn, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const contactItems = [
    {
        id: 1,
        title: 'Office',
        desc: 'Jl. Merdeka Raya No.73B',
        icon: FaLocationDot,
    },
    {
        id: 2,
        title: 'Phone',
        desc: '(021) 111 444 90',
        icon: FaPhone,
    },
    {
        id: 3,
        title: 'Work Hours',
        desc: 'Everyday 09 am - 07 pm',
        icon: FaClock,
    },
    {
        id: 4,
        title: 'Email',
        desc: 'contact@dreamlightctv.com',
        icon: FaEnvelope,
    },
];

const ContactInfo = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 dark:bg-white dark:text-black">
            <h1 className="text-xl lg:text-3xl font-bold my-3">Don't hesitate to contact us</h1>
            <p className="text-sm text-gray-350 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis purus lobortis nisl blandit, sed dignissim mauris porttitor. Aliquam posuere massa ut enim fringilla iaculis. </p>
            <div className="grid lg:grid-cols-2 gap-4 my-8 ">
                {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.id} className="flex items-center gap-3 border border-gray-200 shadow-md rounded-xl p-4">
                            <div className="bg-[#E5DAF9] text-[#A453E5] p-3 rounded-full flex items-center justify-center">
                                <Icon className="w-4 h-4" />
                            </div>
                            <div>
                                <h1 className="text-sm lg:text-md font-bold">{item.title}</h1>
                                <p className="text-xs lg:text-sm break-all">{item.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="border-b border-gray-200 my-8"></div>

            <div className="flex lg:flex-row flex-col justify-between items-center">
                <h1 className="font-bold my-2">Social Media :</h1>
                <div className="flex gap-4">
                    <a href="#" className="bg-[#D0F0FF] text-[#00AEEF] p-3 rounded-full flex items-center justify-center text-2xl hover:bg-[#B0E0FF] transition">
                        <FaDiscord />
                    </a>
                    <a href="#" className="bg-[#D0F0FF] text-[#00AEEF] p-3 rounded-full flex items-center justify-center text-2xl hover:bg-[#B0E0FF] transition">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="bg-[#D0F0FF] text-[#00AEEF] p-3 rounded-full flex items-center justify-center text-2xl hover:bg-[#B0E0FF] transition">
                        <FaInstagram />
                    </a>
                    <a href="#" className="bg-[#D0F0FF] text-[#00AEEF] p-3 rounded-full flex items-center justify-center text-2xl hover:bg-[#B0E0FF] transition">
                        <FaTiktok />
                    </a>
                    <a href="#" className="bg-[#D0F0FF] text-[#00AEEF] p-3 rounded-full flex items-center justify-center text-2xl hover:bg-[#B0E0FF] transition">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
