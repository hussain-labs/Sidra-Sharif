
import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                <div className="absolute top-[40%] left-[60%] w-72 h-72 bg-pink-500/20 rounded-full blur-[100px] animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
                <div className="inline-block mb-6 animate-fade-in-up">
                    <span className="py-2 px-4 rounded-full bg-slate-900/50 border border-slate-700/50 text-cyan-300 text-sm font-medium tracking-wide backdrop-blur-md">
                        ✨ Creative Visionary
                    </span>
                </div>

                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-tight">
                    I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-lg">Sidra Sharif</span>
                </h1>

                <p className="text-2xl sm:text-3xl md:text-4xl text-slate-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                    A passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold">Designer</span> crafting intuitive and beautiful digital experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1 overflow-hidden">
                        <span className="relative z-10">View My Work</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button className="px-8 py-4 rounded-full border border-slate-700 bg-slate-900/30 text-slate-300 font-semibold text-lg hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all backdrop-blur-sm">
                        Let's Collaborate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
