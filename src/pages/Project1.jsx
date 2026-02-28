import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import heroImg from '../assets/images/project1/heroimage.png';
import leftMobileImg from '../assets/images/project1/leftmobile.png';
import rightMobileImg from '../assets/images/project1/rightmobile.png';

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IdeationIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="17" r="10" stroke="#222" strokeWidth="1.8" />
        <line x1="21" y1="27" x2="21" y2="33" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="16" y1="35" x2="26" y2="35" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="21" y1="8" x2="21" y2="10" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="11" x2="13.5" y2="12.5" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="30" y1="11" x2="28.5" y2="12.5" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 20 L21 17 L24 20" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MoodBoardIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="15" height="15" rx="2" stroke="#222" strokeWidth="1.8" />
        <rect x="23" y="4" width="15" height="15" rx="2" stroke="#222" strokeWidth="1.8" />
        <rect x="4" y="23" width="15" height="15" rx="2" stroke="#222" strokeWidth="1.8" />
        <rect x="23" y="23" width="15" height="15" rx="2" stroke="#222" strokeWidth="1.8" />
        <line x1="30" y1="27" x2="30" y2="33" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="27" y1="30" x2="33" y2="30" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

const UserFlowIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 21 C8 21 14 8 21 8 C28 8 34 21 34 21 C34 21 28 34 21 34 C14 34 8 21 8 21Z" stroke="#222" strokeWidth="1.8" />
        <circle cx="21" cy="21" r="5" stroke="#222" strokeWidth="1.8" />
    </svg>
);

const WireframeIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 36 L14 10 L24 28 L31 18 L38 36" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="10" r="2.5" stroke="#222" strokeWidth="1.5" />
        <circle cx="31" cy="18" r="2.5" stroke="#222" strokeWidth="1.5" />
    </svg>
);

const PrototypingIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="21" r="5" stroke="#222" strokeWidth="1.8" />
        <circle cx="32" cy="10" r="5" stroke="#222" strokeWidth="1.8" />
        <circle cx="32" cy="32" r="5" stroke="#222" strokeWidth="1.8" />
        <line x1="15" y1="19" x2="27" y2="12" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="15" y1="23" x2="27" y2="30" stroke="#222" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);
// ──────────────────────────────────────────────────────────────────────────────

const designSteps = [
    {
        id: '01',
        Icon: IdeationIcon,
        title: 'Ideation',
        description:
            'I began by identifying a personal pain point—the challenge of finding and accessing street food. This led to the central idea of an app that solves this problem with a clear, user-focused solution: a delivery service for street food vendors.',
        raised: false,
    },
    {
        id: '02',
        Icon: MoodBoardIcon,
        title: 'Mood Board',
        description:
            "I created a mood board to capture the energetic and authentic feel of street food culture. The color palette and typography were directly inspired by the rich spices and lively atmosphere of the stalls, ensuring the app's visual identity felt genuine and welcoming.",
        raised: true,
    },
    {
        id: '03',
        Icon: UserFlowIcon,
        title: 'User Flow',
        description:
            'I mapped out the entire user journey, from opening the app to placing an order, to ensure a smooth and logical experience. This sitemap helped me visualize every screen and interaction, making sure the path to the end goal was as direct as possible.',
        raised: false,
    },
    {
        id: '04',
        Icon: WireframeIcon,
        title: 'Wireframing & Testing',
        description:
            'Starting with quick paper sketches, I moved to low-fidelity digital wireframes to establish the basic layout of each screen. I conducted self-testing and gathered informal feedback to validate the design and refine the placement of key elements, like buttons and text.',
        raised: true,
    },
    {
        id: '05',
        Icon: PrototypingIcon,
        title: 'Prototyping',
        description:
            "The final step was converting the low-fidelity wireframes into high-fidelity mockups, complete with the final colors and fonts. I then linked these screens to create an interactive prototype, which allowed me to simulate the full user experience and demonstrate the app's functionality.",
        raised: false,
    },
];

// ── Mobile Card Carousel (visible only on screens < 850px) ───────────────────
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
                    <div
                        key={step.id}
                        className="shrink-0 w-full snap-center px-4"
                    >
                        <div
                            className="bg-white rounded-2xl border border-gray-100 p-7 mx-auto"
                            style={{
                                maxWidth: 600,
                                boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                            }}
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

// ── Desktop Staggered Row (visible only on screens ≥ 850px) ──────────────────
const DesignStepsDesktop = () => (
    <div className="hidden min-[920px]:flex flex-row items-start justify-between gap-3">
        {designSteps.map((step) => (
            <div
                key={step.id}
                className={`flex flex-col w-[18%] ${step.raised ? 'mt-28' : 'mt-0'}`}
            >
                {/* Icon */}
                <div className="mb-1">
                    <step.Icon />
                </div>

                {/* Step number (large, light gray) */}
                <span className="text-[52px] font-bold text-gray-200 leading-none select-none mb-1">
                    {step.id}
                </span>

                {/* Title */}
                <h3 className="text-[14px] md:text-[15px] font-bold text-black mb-2 leading-snug">
                    {step.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] md:text-[11.5px] text-gray-500 leading-relaxed">
                    {step.description}
                </p>
            </div>
        ))}
    </div>
);

// ── Main Page Component ───────────────────────────────────────────────────────
const Project1 = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white min-h-screen text-black font-sans">

            {/* ── Top Navigation Bar ── */}
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

            {/* Hero Section */}
            <section className="relative w-full bg-linear-to-b from-void-black to-red-600 overflow-hidden flex justify-center items-center">
                <img
                    src={heroImg}
                    alt="ChaatCraze Hero"
                    className="max-w-[1920px] h-[500px] md:h-[600px] lg:h-[800px] xl:h-full object-cover"
                />
            </section>

            {/* ── Project Overview Section ── */}
            <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-[#FFFAFA]">
                <div className="max-w-[1920px] mx-auto flex flex-col items-center">

                    <div className="text-center mb-16 md:mb-24 z-20">
                        <h2 className="text-4xl md:text-[54px] font-extrabold text-black tracking-tight flex justify-center gap-3">
                            Project <span className="text-[#D3544E]">Overview</span>
                        </h2>
                    </div>

                    <div className="relative w-full max-w-[1000px] h-auto min-h-[600px] md:min-h-[700px] flex justify-center items-start pt-10 md:pt-0">
                        <div className="relative z-10 w-[500px] md:w-[600px] min-h-[400px] md:h-[500px] bg-[#EBBDB0] rounded-t-full p-8 md:p-14 lg:p-16 text-center shadow-[0_20px_50px_rgba(235,189,176,0.3)]">
                            <h3 className="text-3xl md:text-[40px] font-bold text-black mb-6 leading-tight">
                                About Us
                            </h3>
                            <p className="text-lg md:text-xl text-black/90 font-medium leading-relaxed max-w-[400px] mx-auto">
                                ChaatCraze is a practise vibrant, community-driven mobile app designed for street food enthusiasts. It enables them to effortlessly discover and navigate to the most authentic, traditional, and highly rated street-style chaat vendors. The app lives exclusively on smartphones (Android).
                            </p>
                        </div>

                        <div className="absolute z-20 bottom-[-20px] min-[370px]:bottom-[30px] min-[410px]:bottom-[60px] min-[450px]:bottom-[10px] md:bottom-[120px] lg:bottom-[80px] left-[-30px] md:-left-[70px] lg:-left-[150px] xl:-left-[80px] w-[180px] min-[450px]:w-[250px] min-[620px]:w-[300px] md:w-[350px] lg:w-[450px]">
                            <img src={leftMobileImg} alt="ChaatCraze Screen Left" className="w-full h-auto object-contain drop-shadow-2xl" />
                        </div>

                        <div className="absolute z-20 bottom-[40px] min-[370px]:bottom-[60px] min-[410px]:bottom-[60px] min-[450px]:bottom-[120px] md:bottom-[130px] lg:bottom-[120px] right-[-20px] md:-right-[30px] lg:-right-[20px] xl:-right-[50px] w-[200px] min-[450px]:w-[220px] min-[520px]:w-[300px] md:w-[350px] lg:w-[400px]">
                            <img src={rightMobileImg} alt="ChaatCraze Screen Right" className="w-full h-auto object-contain drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Design Process Section ── */}
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

                    {/* Desktop (≥ 850px): staggered flex row */}
                    <DesignStepsDesktop />

                    {/* Mobile (< 850px): snap-scroll card carousel, one at a time */}
                    <DesignStepsMobile />

                </div>
            </section>
            {/* ── End Design Process Section ── */}

        </main>
    );
};

export default Project1;
