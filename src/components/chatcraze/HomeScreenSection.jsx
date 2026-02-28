import React from 'react';
import home1 from '../../assets/images/chatcraze/home1.png';
import home2 from '../../assets/images/chatcraze/home2.png';
import home3 from '../../assets/images/chatcraze/home3.png';

// ── Layout:
//   home3  →  LEFT  (landscape, rotated clockwise,    bottom-left)
//   home2  →  CENTER (portrait, upright,               top-center)
//   home1  →  RIGHT (landscape, rotated counter-clock, bottom-right)

const HomeScreenSection = () => (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-10">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center">

            {/* Pill label */}
            <div className="bg-white rounded-2xl shadow-lg shadow-red-200 px-8 md:px-12 py-4 mb-12 md:mb-20 flex items-center gap-3">
                <span className="text-2xl md:text-3xl">🏠</span>
                <span className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">
                    Home <span className="text-[#D3544E]">Screen</span>
                </span>
            </div>

            {/* Fan of three phones — scales via aspect-ratio */}
            <div
                className="relative w-full overflow-visible"
                style={{ maxWidth: 680, aspectRatio: '680 / 520' }}
            >
                {/* home2 — CENTER, portrait upright */}
                <div className="absolute top-[-10px] left-1/2 z-10"
                    style={{ width: '32%', transform: 'translateX(-50%)' }}>
                    <img src={home2} alt="Home map" className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>

                {/* home3 — sits bottom-right of canvas */}
                <div className="absolute bottom-0"
                    style={{ width: '48%', right: '-2%', transformOrigin: 'bottom right' }}>
                    <img src={home3} alt="Home map zoom" className="w-full h-auto object-contain drop-shadow-xl" />
                </div>

                {/* home1 — sits bottom-left of canvas */}
                <div className="absolute bottom-0"
                    style={{ width: '48%', left: '-6%', transformOrigin: 'bottom left' }}>
                    <img src={home1} alt="Home location" className="w-full h-auto object-contain drop-shadow-xl" />
                </div>
            </div>

        </div>
    </section>
);

export default HomeScreenSection;
