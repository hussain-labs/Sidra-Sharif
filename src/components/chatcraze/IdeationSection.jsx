import React from 'react';

// ── Inline SVG Illustrations ──────────────────────────────────────────────────

const ProblemIllustration = () => (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Person body */}
        <ellipse cx="34" cy="72" rx="16" ry="8" fill="#B0C4DE" opacity="0.3" />
        <rect x="22" y="52" width="24" height="22" rx="4" fill="#7EB8E8" />
        {/* Head */}
        <circle cx="34" cy="38" r="14" fill="#F4C98B" />
        {/* Hair */}
        <ellipse cx="34" cy="26" rx="14" ry="6" fill="#555" />
        {/* Thinking hand */}
        <rect x="28" y="50" width="5" height="8" rx="2" fill="#F4C98B" />
        <ellipse cx="30" cy="50" rx="5" ry="3" fill="#F4C98B" />
        {/* Thought bubble */}
        <circle cx="55" cy="28" r="16" fill="#E8E8E8" stroke="#CCC" strokeWidth="1.5" />
        <circle cx="48" cy="41" r="4" fill="#E8E8E8" stroke="#CCC" strokeWidth="1.2" />
        <circle cx="44" cy="47" r="2.5" fill="#E8E8E8" stroke="#CCC" strokeWidth="1" />
        {/* Question mark */}
        <text x="50" y="33" fontSize="16" fontWeight="bold" fill="#555" textAnchor="middle">?</text>
    </svg>
);

const SolutionIllustration = () => (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Hand */}
        <path d="M20 62 Q30 58 45 60 Q55 61 60 58 L65 55 Q70 53 68 48 Q66 44 62 46 L58 48 Q60 42 56 40 Q52 38 50 43 L49 46 Q50 40 46 39 Q42 38 41 44 L40 47 Q41 41 37 41 Q33 41 33 47 L33 58 L28 55 Q23 53 20 57 Z" fill="#9B7FD4" />
        <path d="M62 46 L58 48" stroke="#7A5FB5" strokeWidth="1.5" strokeLinecap="round" />
        {/* Bulb glass */}
        <path d="M45 15 C35 15 28 22 28 31 C28 38 32 44 38 47 L38 54 L52 54 L52 47 C58 44 62 38 62 31 C62 22 55 15 45 15 Z" fill="#FFE066" stroke="#F5C800" strokeWidth="1.5" />
        {/* Bulb shine */}
        <path d="M36 24 Q40 20 45 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        {/* Base bands */}
        <rect x="38" y="54" width="14" height="3" rx="1.5" fill="#CCC" />
        <rect x="39" y="58" width="12" height="3" rx="1.5" fill="#CCC" />
        {/* Rays */}
        <line x1="45" y1="8" x2="45" y2="12" stroke="#F5C800" strokeWidth="2" strokeLinecap="round" />
        <line x1="58" y1="12" x2="55" y2="15" stroke="#F5C800" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="12" x2="35" y2="15" stroke="#F5C800" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

// ──────────────────────────────────────────────────────────────────────────────

const IdeationSection = () => (
    <section className="w-full bg-[#F0F0F0] py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center">

            {/* Section Title */}
            <h2 className="text-4xl md:text-[48px] font-extrabold text-black text-center mb-14 md:mb-20 tracking-tight">
                1. Ideation
            </h2>

            {/* Cards wrapper — full width, cards same size, Problem left / Solution right */}
            <div className="flex flex-col gap-6 w-full max-w-[1580px]">

                {/* ── Problem Card — left aligned ── */}
                <div className='bg-red-600 max-w-[1080px] pt-2 pl-3 rounded-4xl self-start shadow-lg'>
                    <div className="bg-white rounded-3xl flex items-center gap-6 p-6 md:p-8 w-full">
                        {/* Illustration */}
                        <div className="shrink-0">
                            <ProblemIllustration />
                        </div>
                        {/* Text */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-extrabold text-black mb-2">Problem</h3>
                            <p className="text-[13.5px] md:text-[14.5px] text-gray-600 leading-relaxed">
                                Many street food lovers, like myself, crave authentic snacks but are limited by the
                                inconvenience of finding a vendor or being unable to leave their home. The goal of this
                                project was to solve this problem by bridging the gap between hungry customers and local
                                street food vendors.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Solution Card — right aligned, same width ── */}
                <div className='bg-red-600 max-w-[1080px] pt-2 pr-3 md:pl-3 md:pr-0 rounded-4xl self-end shadow-lg'>
                    <div className="bg-white rounded-3xl flex items-center gap-6 p-6 md:p-8 w-full">
                        {/* Text */}
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-extrabold text-black mb-2">Solution</h3>
                            <p className="text-[13.5px] md:text-[14.5px] text-gray-600 leading-relaxed">
                                The solution is a mobile app with two core features: live vendor location and home delivery,
                                ensuring users can get their favorite snacks delivered right to their doorstep.
                            </p>
                        </div>
                        {/* Illustration */}
                        <div className="shrink-0">
                            <SolutionIllustration />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section >
);

export default IdeationSection;
