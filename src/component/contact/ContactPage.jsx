import React from 'react'

const ContactPage = () => {
    return (
        <section id='kontak'>
            <div className='w-full md:grid md:grid-cols-2 gap-6 lg:py-10 md:py-8 py-8 lg:px-20 md:px-10 px-5'>
                <div>
                    <p className='text-[#00AEEF] text-base lg:text-lg font-bold mt-10 md:mt-0'>START YOUR DREAM PROJECT</p>
                    <h1 className='font-bold text-xl lg:text-3xl my-1 leading-normal'>Custom service, available by request via Discord</h1>
                    <p className='font-sans lg:text-lg md:text-xs text-sm text-justify'>Our custom services are crafted to your needs—simply submit a request and we’ll coordinate everything through Discord.</p>
                    <button className="mt-8 flex items-center gap-3 bg-[#00AEEF] hover:bg-sky-600 px-10 py-2 text-[#FEF7E7] text-lg font-semibold rounded-lg">
                        Request via Discord
                    </button>
                </div>
                <div className="bg-[#FEF7E7] p-8 rounded-xl">
                    <p className='font-bold text-lg'>Write Us a Message</p>
                    <div className='bg-white p-4 rounded-xl mt-5'>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage
