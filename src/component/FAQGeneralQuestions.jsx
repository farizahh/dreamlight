import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex justify-between items-center py-4 font-medium text-gray-800 hover:text-[#00AEEF] transition"
            >
                {question}
                <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
                <div className="pb-4 text-gray-700 text-sm">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQGeneralQuestions = () => {
    const faqs = [
        {
            question: "Frequently Asked Question 1?",
            answer:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            question: "Frequently Asked Question 2?",
            answer:
                "Another example answer goes here. You can add more text as needed for this FAQ item.",
        },
        // Tambah FAQ lainnya di sini
    ];

    return (
        <div className="">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQGeneralQuestions;
