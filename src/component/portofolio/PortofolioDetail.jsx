import React from 'react';
import { useParams } from 'react-router-dom';
import { portofolios } from '../../data/portofolio.js';

const PortofolioDetail = () => {
    const { id } = useParams();
    const item = portofolios.find(p => p.id === parseInt(id));

    if (!item) return <p>Portfolio not found</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
            <img src={item.img} alt={item.title} className="w-full rounded-xl mb-6" />
            <p className="text-lg mb-4">{item.longDescription}</p>
            <div className="flex gap-4 mt-6">
                {item.tech.map((t, i) => (
                    <span key={i} className="badge">{t}</span>
                ))}
                <span className="badge">Date: {item.date}</span>
            </div>
            <a href={item.link} target="_blank" className="mt-4 inline-block text-blue-500 hover:underline">
                Visit Project
            </a>
        </div>
    );
};

export default PortofolioDetail
