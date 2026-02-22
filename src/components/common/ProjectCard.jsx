import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ link, image, title, description, onOpen, btnColor = "bg-electric-cyan" }) => {
    return (
        <div className="relative w-full max-w-[400px] aspect-4/5 rounded-[40px] border-[3px] border-sky-blue overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
            {/* Background Image Section */}
            <div className="absolute inset-0 w-full h-[70%]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-void-black/80"></div>
            </div>

            {/* Glassmorphism Content Section */}
            <div className="absolute bottom-4 left-4 right-4 h-[55%] rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 flex flex-col items-center justify-between text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        {title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-200 font-light leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>

                {link ? (
                    <Link
                        to={link}
                        className={`w-full py-3 rounded-xl flex justify-center items-center ${btnColor} ${(btnColor === 'bg-white' || btnColor === 'bg-electric-cyan') ? 'text-void-black' : 'text-white'} font-bold uppercase tracking-wider text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(0,229,255,0.2)]`}
                    >
                        Open Project
                    </Link>
                ) : (
                    <button
                        onClick={onOpen}
                        className={`w-full py-3 rounded-xl ${btnColor} ${(btnColor === 'bg-white' || btnColor === 'bg-electric-cyan') ? 'text-void-black' : 'text-white'} font-bold uppercase tracking-wider text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(0,229,255,0.2)]`}
                    >
                        Open Project
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
