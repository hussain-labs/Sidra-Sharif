import React from 'react';
import phoneImg from '../../assets/images/chatcraze/Google Pixel 8 Pro.png';

const SplashScreenSection = () => (
    <section className="w-full bg-[#FFF0F0] py-20 md:py-28 px-4 md:px-10">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center">

            {/* Pill label */}
            <div className="bg-white rounded-2xl px-10 py-4 mb-14 md:mb-20 shadow-lg shadow-red-200">
                <span className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">
                    Splash <span className="text-[#D3544E]">Screen</span>
                </span>
            </div>

            {/* Two phone mockups — left larger & higher, right smaller & offset lower */}
            <div className="flex items-end justify-center gap-0 w-full max-w-[1000px]">

                {/* Left phone — larger, positioned higher (translate up) */}
                <div className="w-[45%] -translate-y-8 md:-translate-y-12 shrink-0">
                    <img
                        src={phoneImg}
                        alt="ChaatCraze Splash Screen phone 1"
                        className="w-full h-auto object-contain drop-shadow-xl"
                    />
                </div>

                {/* Right phone — smaller, sits lower */}
                <div className="w-[38%] shrink-0">
                    <img
                        src={phoneImg}
                        alt="ChaatCraze Splash Screen phone 2"
                        className="w-full h-auto object-contain drop-shadow-xl"
                    />
                </div>

            </div>

        </div>
    </section>
);

export default SplashScreenSection;
