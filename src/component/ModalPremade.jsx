import React from 'react';
import Shopee from '../assets/img/shopee.png'
import Tokopedia from '../assets/img/tokopedia.png'
import Lazada from '../assets/img/lazada.png'

const ModalPremade = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 px-4
           bg-black/30 backdrop-blur-sm dark:bg-black/30 dark:text-black text-black"
            onClick={onClose} // klik overlay untuk tutup
        >
            <div
                className="bg-white rounded-2xl p-5 sm:p-6 relative w-full max-w-md mx-4"
                onClick={(e) => e.stopPropagation()} // supaya klik di modal tidak tutup
            >
                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h3 className="font-bold text-lg mb-5">Premade E-Commerce</h3>
                <div className="space-y-3">
                    <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center border border-[#E4E4E7] hover:shadow-lg transition px-4 py-2 rounded-xl">
                            <img src={Shopee} className="w-16 sm:w-20 h-full" alt="Shopee" />
                            <p className="font-sans text-base sm:text-xl ml-4">Shopee</p>
                        </div>
                    </a>

                    <a href="https://www.tokopedia.com" target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center border border-[#E4E4E7] hover:shadow-lg transition px-4 py-2 rounded-xl">
                            <img src={Tokopedia} className="w-16 sm:w-20 h-full" alt="Tokopedia" />
                            <p className="font-sans text-base sm:text-xl ml-4">Tokopedia</p>
                        </div>
                    </a>

                    <a href="https://www.lazada.co.id" target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center border border-[#E4E4E7] hover:shadow-lg transition px-4 py-2 rounded-xl">
                            <img src={Lazada} className="w-16 sm:w-20 h-full" alt="Lazada" />
                            <p className="font-sans text-base sm:text-xl ml-4">Lazada</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalPremade;
