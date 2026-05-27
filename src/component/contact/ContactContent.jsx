import React from "react";
import { Link } from 'react-router-dom';
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
// import { FaDiscord, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const ContactContent = () => {
    return (
        <section id="contact-page" className="mb-10">
            <div className="bg-[#FEF7E7] text-[#232326] py-20 px-5 text-center rounded-b-full">
                <h1 className="text-2xl lg:text-5xl font-bold mb-4">Let’s Work Together</h1>
                <p className="text-base lg:text-xl">We’d love to hear about your project or idea!</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 justify-between w-full lg:py-10 md:py-8 py-8 lg:px-20 md:px-10 px-5">
                <div className="flex-1">
                    <ContactForm />
                </div>
                <div className="flex-1">
                    <ContactInfo />
                </div>
            </div>

        </section>
    );
};

export default ContactContent;
