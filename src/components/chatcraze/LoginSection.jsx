import React from 'react';
import login1 from '../../assets/images/chatcraze/login1.png';
import login2 from '../../assets/images/chatcraze/login2.png';
import login3 from '../../assets/images/chatcraze/login3.png';

const LoginSection = () => (
    <section className="w-full bg-[#F0F0F0] py-20 md:py-28 px-4 md:px-10">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center">

            {/* Pill label with key icon */}
            <div className="bg-white rounded-2xl px-8 md:px-12 py-4 mb-16 md:mb-24 shadow-lg shadow-red-200 flex items-center gap-4">
                {/* Key icon */}
                <span className="text-2xl md:text-3xl">🔑</span>
                <span className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">
                    Login /{' '}
                    <span className="text-[#D3544E]">Sign- Up</span>
                </span>
            </div>

            {/* Three phones — fan arrangement */}
            <div className="flex items-end justify-center w-full max-w-[1200px] gap-0">

                {/* Left phone — rotated left, sits lower */}
                <div
                    className="w-[30%] md:w-[28%] shrink-0 origin-bottom"
                    style={{ transform: 'rotate(-8deg) translateY(20px)' }}
                >
                    <img
                        src={login1}
                        alt="ChaatCraze Login screen"
                        className="w-full h-auto object-contain drop-shadow-xl"
                    />
                </div>

                {/* Center phone — upright, tallest */}
                <div className="w-[36%] md:w-[34%] shrink-0 z-10 -mx-2">
                    <img
                        src={login2}
                        alt="ChaatCraze Choose Account screen"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Right phone — rotated right, sits lower */}
                <div
                    className="w-[30%] md:w-[28%] shrink-0 origin-bottom"
                    style={{ transform: 'rotate(8deg) translateY(20px)' }}
                >
                    <img
                        src={login3}
                        alt="ChaatCraze Sign Up screen"
                        className="w-full h-auto object-contain drop-shadow-xl"
                    />
                </div>

            </div>

        </div>
    </section>
);

export default LoginSection;
