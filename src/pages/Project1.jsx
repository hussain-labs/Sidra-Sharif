import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import heroImg from '../assets/images/project1/heroimage.png';
import leftMobileImg from '../assets/images/project1/leftmobile.png';
import rightMobileImg from '../assets/images/project1/rightmobile.png';

const Project1 = () => {
    const navigate = useNavigate();

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white min-h-screen text-black font-sans">
            {/* Top Navigation Bar */}
            <div className="w-full bg-void-black h-[80px] flex items-center px-4 md:px-8 2xl:px-16 fixed top-0 left-0 z-50 border-b border-gray-800">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-white hover:text-sky-blue transition-colors outline-none cursor-pointer p-2"
                >
                    <FaArrowLeft className="text-xl font-light" />
                </button>
                <div className="grow flex justify-center items-center mr-10 relative">
                    <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white">
                        ChaatCraze App – Case Study
                    </h1>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative w-full mt-[80px] bg-void-black overflow-hidden flex justify-center items-center">
                <img
                    src={heroImg}
                    alt="ChaatCraze Hero"
                    className="w-full h-[300px] md:h-auto md:max-h-[800px] object-cover"
                />
            </section>

            {/* Project Overview Section */}
            <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-[#FFFAFA]">
                <div className="max-w-[1400px] mx-auto flex flex-col items-center">

                    {/* Heading */}
                    <div className="text-center mb-16 md:mb-24 z-20">
                        <h2 className="text-4xl md:text-[54px] font-extrabold text-black tracking-tight flex justify-center gap-3">
                            Project <span className="text-[#D3544E]">Overview</span>
                        </h2>
                    </div>

                    {/* Interactive Cluster Container */}
                    <div className="relative w-full max-w-[1000px] h-auto min-h-[600px] md:min-h-[700px] flex justify-center items-start pt-10 md:pt-0">

                        {/* Center Muted Peach Bubble */}
                        <div className="relative z-10 w-[90%] md:w-[600px] bg-[#EBBDB0] rounded-[50px] md:rounded-[80px] p-8 md:p-14 lg:p-16 text-center shadow-[0_20px_50px_rgba(235,189,176,0.3)]">
                            <h3 className="text-3xl md:text-[40px] font-bold text-black mb-6 leading-tight">
                                About Us
                            </h3>
                            <p className="text-lg md:text-xl text-black/90 font-medium leading-relaxed max-w-[400px] mx-auto">
                                ChaatCraze is a practise vibrant, community-driven mobile app designed for street food enthusiasts. It enables them to effortlessly discover and navigate to the most authentic, traditional, and highly rated street-style chaat vendors. The app lives exclusively on smartphones (Android).
                            </p>
                        </div>

                        {/* Left Phone Mockup */}
                        <div className="absolute z-20 top-[-20px] md:top-[120px] lg:top-[80px] left-[-30px] md:-left-[100px] lg:-left-[150px] xl:-left-[80px] w-[220px] md:w-[350px] lg:w-[450px]">
                            <img
                                src={leftMobileImg}
                                alt="ChaatCraze Screen Left"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* Right Phone Mockup */}
                        <div className="absolute z-20 bottom-[40px] md:bottom-[-80px] lg:bottom-[-120px] right-[-30px] md:-right-[80px] lg:-right-[120px] xl:-right-[50px] w-[200px] md:w-[320px] lg:w-[400px]">
                            <img
                                src={rightMobileImg}
                                alt="ChaatCraze Screen Right"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Project1;
