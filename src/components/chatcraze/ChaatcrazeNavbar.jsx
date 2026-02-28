import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ChaatcrazeNavbar = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-void-black h-[80px] flex items-center px-4 md:px-8 2xl:px-16 fixed top-0 left-0 z-50 border-b border-gray-800">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white hover:text-sky-blue transition-colors outline-none cursor-pointer p-2"
            >
                <FaArrowLeft className="text-xl font-light" />
            </button>
            <div className="grow flex justify-center items-center mr-10">
                <h1 className="text-sm sm:text-lg md:text-2xl font-bold tracking-wide text-white">
                    ChaatCraze App – Case Study
                </h1>
            </div>
        </div>
    );
};

export default ChaatcrazeNavbar;
