import React from 'react'


const reasons = [
    {
        id: 1,
        title: "High Quality Delivery",
        desc: "Every build and design is crafted with precision, creativity, and attention to detail.",
    },
    {
        id: 2,
        title: "Trusted by Many",
        desc: "We’ve worked with various clients worldwide who trust our consistent results.",
    },
    {
        id: 3,
        title: "Fast & Efficient Work",
        desc: "Our workflow ensures your project is completed on time without sacrificing quality.",
    }
];

const AbChoose = () => {
    return (
        <section className="py-20 bg-[#F8F8F8]">
            <div className="mx-5 md:mx-14 lg:mx-28">
                <h2 className="text-3xl font-bold text-[#232326] mb-10">
                    Why Choose Us
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {reasons.map((item) => (
                        <div key={item.id} className="p-6 bg-white rounded-2xl shadow-sm">
                            <h3 className="text-xl font-semibold text-[#232326] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[#4A4A4A] text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AbChoose
