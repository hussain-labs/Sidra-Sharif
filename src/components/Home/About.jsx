import React from 'react';
import laptopImg from '../../assets/images/laptop_mockup_refined.png';

const About = () => {
    return (
        <section id="about" className="bg-void-black text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Side: Laptop Graphic */}
                <div className="relative flex justify-center items-center py-10 lg:py-20">
                    {/* Refined Glowing Cyan Ring - Matching User Screenshot */}
                    <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] rounded-full border-6 border-electric-cyan shadow-[0_0_60px_rgba(0,229,255,0.8),inset_0_0_30px_rgba(0,229,255,0.5)] opacity-90 animate-pulse duration-3000"></div>
                    <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[430px] md:h-[430px] rounded-full border-2 border-white/30 blur-sm"></div>

                    {/* Laptop Image - Angled Mockup */}
                    <div className="relative z-10 w-full max-w-[650px] transform hover:scale-105 transition-transform duration-700 ease-out">
                        <img
                            src={laptopImg}
                            alt="Angled Laptop with design mockups"
                            className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] filter contrast-110 brightness-110"
                        />
                        {/* Extra Glow under laptop */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-10 bg-electric-cyan/20 blur-3xl rounded-full"></div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col space-y-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            ABOUT ME
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                            <p>
                                With over 2 years of experience operating as an independent design consultant, I don't just execute tasks
                            </p>
                            <p>
                                I help businesses solve problems. My background in traditional art and craft gives me a unique perspective on composition and color, which I translate into modern digital interfaces.
                            </p>
                        </div>
                    </div>

                    {/* Soft Skills Section */}
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">
                            Soft Skills
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {[
                                "Client Communication",
                                "Project Management",
                                "Creative Direction"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-6 py-2 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 text-electric-cyan text-sm md:text-base font-medium hover:bg-electric-cyan hover:text-void-black transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
