import React, { useRef, useState } from 'react';
import { designSteps } from './designStepsData.jsx';

// ── Mobile Card Carousel (< 920px) ───────────────────────────────────────────
const DesignStepsMobile = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const el = scrollRef.current;
        const idx = Math.round(el.scrollLeft / el.offsetWidth);
        setActiveIndex(idx);
    };

    const scrollToCard = (idx) => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollTo({
            left: idx * scrollRef.current.offsetWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div className="block min-[920px]:hidden">
            {/* Snap-scroll track */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {designSteps.map((step) => (
                    <div key={step.id} className="shrink-0 w-full snap-center px-4">
                        <div
                            className="bg-white rounded-2xl border border-gray-100 p-7 mx-auto"
                            style={{ maxWidth: 600, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
                        >
                            {/* Icon + Number row */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="mt-1">
                                    <step.Icon />
                                </div>
                                <span
                                    className="font-extrabold leading-none select-none"
                                    style={{ fontSize: 52, color: '#D3544E' }}
                                >
                                    {step.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[18px] font-bold text-black mb-3 leading-snug">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[13.5px] text-gray-500 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {designSteps.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToCard(idx)}
                        aria-label={`Go to step ${idx + 1}`}
                        className="rounded-full transition-all duration-300 outline-none cursor-pointer border-0 p-0"
                        style={{
                            width: activeIndex === idx ? 24 : 8,
                            height: 8,
                            background: activeIndex === idx ? '#D3544E' : '#D1D5DB',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

// ── Desktop Staggered Row (≥ 920px) ──────────────────────────────────────────
const DesignStepsDesktop = () => (
    <div className="hidden min-[920px]:flex flex-row items-start justify-between gap-3">
        {designSteps.map((step) => (
            <div
                key={step.id}
                className={`flex flex-col w-[18%] ${step.raised ? 'mt-28' : 'mt-0'}`}
            >
                <div className="mb-1">
                    <step.Icon />
                </div>
                <span className="text-[52px] font-bold text-gray-200 leading-none select-none mb-1">
                    {step.id}
                </span>
                <h3 className="text-[14px] md:text-[15px] font-bold text-black mb-2 leading-snug">
                    {step.title}
                </h3>
                <p className="text-[12px] md:text-[11.5px] text-gray-500 leading-relaxed">
                    {step.description}
                </p>
            </div>
        ))}
    </div>
);

// ── Section Wrapper ───────────────────────────────────────────────────────────
const DesignProcess = () => (
    <section className="w-full bg-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1920px] mx-auto">

            {/* Heading */}
            <div className="text-center mb-5">
                <h2 className="text-4xl md:text-[54px] font-extrabold text-black tracking-tight">
                    Design <span className="text-[#D3544E]">Process</span>
                </h2>
            </div>

            {/* Subtitle */}
            <p className="text-center text-gray-500 text-base md:text-[17px] leading-relaxed max-w-[800px] mx-auto mb-20 md:mb-28">
                I started my design process by identifying a real-world problem, then crafted a mood
                board to define the app's visual identity, including colors and typography. This was
                followed by site mapping to outline the user flow, and finally, I moved from low- to high-
                fidelity wireframing and prototyping to bring the design to life.
            </p>

            {/* Desktop (≥ 920px): staggered flex row */}
            <DesignStepsDesktop />

            {/* Mobile (< 920px): snap-scroll card carousel, one at a time */}
            <DesignStepsMobile />

        </div>
    </section>
);

export default DesignProcess;
