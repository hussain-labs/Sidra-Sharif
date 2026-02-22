import React from 'react';

const Services = () => {
    const services = [
        {
            title: "User Interface & Experience (UI/UX)",
            description: "I design clean, user-centric interfaces for mobile apps and websites. My process focuses on organizing complex information into simple, navigable layouts that guide users effortlessly from point A to point B.",
            tags: ["Mobile App Design", "Web Design", "Landing Pages"],
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 36L42 36" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12L36 12L36 30C36 33.3137 33.3137 36 30 36L18 36C14.6863 36 12 33.3137 12 30L12 12Z" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 12V6" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Visual Identity & Branding",
            description: "More than just a logo, I build cohesive visual systems that tell your brand's story. From color palettes to social media kits, I ensure your business looks professional and consistent across every platform.",
            tags: ["Branding Material", "Logo Design", "Social Media Assets"],
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="6" width="36" height="36" rx="3" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 30H42" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 6V42" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="24" cy="24" r="6" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Interactive Prototyping",
            description: "I build high-fidelity, clickable prototypes that simulate the real app experience. This allows us to test user flows, fix logic errors, and validate the product's 'feel' before a single line of code is written.",
            tags: ["Wireframing", "User Flow", "Clickable Mockups"],
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 12L34 24L14 36V12Z" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
                    <circle cx="24" cy="24" r="20" stroke="#000000" strokeWidth="4" />
                </svg>
            )
        }
    ];

    // Custom Icons based on the image provided
    const PenToolIcon = () => (
        <div className="w-24 h-24 rounded-full bg-cyan-300 flex items-center justify-center mb-10 border-[6px] border-white shadow-lg mx-auto">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black ml-1 mb-1">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
            </svg>
        </div>
    );

    const LayoutIcon = () => (
        <div className="w-24 h-24 rounded-full bg-cyan-300 flex items-center justify-center mb-10 border-[6px] border-white shadow-lg mx-auto">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
        </div>
    );

    const PrototypeIcon = () => (
        <div className="w-24 h-24 rounded-full bg-cyan-300 flex items-center justify-center mb-10 border-[6px] border-white shadow-lg mx-auto">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
        </div>
    );


    return (
        <section className="bg-linear-to-b from-white to-sky-50 py-24 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-[1920px] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight">
                        Services <span className="text-sky-400">I Offer</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-15 lg:gap-12">
                    {/* Card 1: UI/UX */}
                    <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative -mt-[84px]">
                            <div className="w-24 h-24 rounded-full bg-cyan-300 flex items-center justify-center border-[6px] border-white shadow-md relative z-10">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black -rotate-45">
                                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                                    <path d="M2 2l7.586 7.586"></path>
                                    <circle cx="11" cy="11" r="2"></circle>
                                </svg>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-black mt-8 mb-6 leading-tight max-w-[80%] mx-auto">
                            User Interface & Experience (UI/UX)
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                            I design clean, user-centric interfaces for mobile apps and websites. My process focuses on organizing complex information into simple, navigable layouts that guide users effortlessly from point A to point B.
                        </p>

                        <div className="mt-auto w-full">
                            <h4 className="text-lg font-bold text-black mb-4">Focus :</h4>
                            <div className="flex flex-wrap justify-center gap-2">
                                {services[0].tags.map((tag, i) => (
                                    <span key={i} className="bg-sky-400 text-white px-3 py-2 rounded-lg text-xs font-semibold tracking-wide shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Branding */}
                    <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative -mt-[84px]">
                            <div className="w-24 h-24 rounded-full bg-cyan-300 flex items-center justify-center border-[6px] border-white shadow-md relative z-10">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <path d="M9 3v18"></path>
                                    <path d="M14 9l3 3-3 3"></path>
                                    <path d="M10 12h7"></path>
                                </svg>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-black mt-8 mb-6 leading-tight max-w-[80%] mx-auto">
                            Visual Identity & Branding
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                            More than just a logo, I build cohesive visual systems that tell your brand's story. From color palettes to social media kits, I ensure your business looks professional and consistent across every platform.
                        </p>

                        <div className="mt-auto w-full">
                            <h4 className="text-lg font-bold text-black mb-4">Focus :</h4>
                            <div className="flex flex-wrap justify-center gap-2">
                                {services[1].tags.map((tag, i) => (
                                    <span key={i} className="bg-sky-400 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Prototyping */}
                    <div className="bg-white rounded-[40px] p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative -mt-[84px]">
                            <div className="w-24 h-24 rounded-full bg-cyan-300 flex items-center justify-center border-[6px] border-white shadow-md relative z-10">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M4.93 4.93l14.14 14.14"></path>
                                </svg>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-black mt-8 mb-6 leading-tight max-w-[80%] mx-auto">
                            Interactive Prototyping
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                            I build high-fidelity, clickable prototypes that simulate the real app experience. This allows us to test user flows, fix logic errors, and validate the product's 'feel' before a single line of code is written.
                        </p>

                        <div className="mt-auto w-full">
                            <h4 className="text-lg font-bold text-black mb-4">Focus :</h4>
                            <div className="flex flex-wrap justify-center gap-2">
                                {services[2].tags.map((tag, i) => (
                                    <span key={i} className="bg-sky-400 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
