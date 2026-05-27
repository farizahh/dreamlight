import React from "react";

const ContactForm = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <form>
                <div className='grid grid-cols-2 gap-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-sans text-base text-[#424242]">First Name</legend>
                        <input
                            type="text"
                            className="input border border-gray-300 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] outline-none"
                            placeholder="Type here"
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-sans text-base text-[#424242]">Last Name</legend>
                        <input
                            type="text"
                            className="input border border-gray-300 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] outline-none"
                            placeholder="Type here"
                        />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-sans text-base text-[#424242]">Email</legend>
                        <input
                            type="text"
                            className="input border border-gray-300 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] outline-none w-full"
                            placeholder="Type here"
                        />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-sans text-base text-[#424242]">Subject</legend>
                        <input
                            type="text"
                            className="input border border-gray-300 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] outline-none w-full"
                            placeholder="Type here"
                        />
                    </fieldset>
                </div>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-sans text-base text-[#424242]">Description</legend>
                        <textarea
                            type="text"
                            className="textarea border border-gray-300 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] outline-none w-full"
                            placeholder="Type here"
                        />
                    </fieldset>
                </div>
                <button className="bg-[#00AEEF] hover:bg-sky-600 mt-5 px-10 py-2 text-[#FEF7E7] text-lg font-semibold rounded-lg w-full">
                    Send Form
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
