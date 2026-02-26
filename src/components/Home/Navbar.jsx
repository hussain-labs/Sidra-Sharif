import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import cv from '../../assets/cv/Sidra Sharif.pdf';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'About', path: '#about' },
        { name: 'Work', path: '#work' },
        { name: 'Contact', path: '#contact' },
        { name: 'Services', path: '#services' },
    ];
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="max-w-[1574px] w-full mx-auto md:mt-[20px] z-50 fixed top-0 left-0 right-0 md:px-2 2xl:px-0">
            <div className="bg-[#040A13] h-[90px] lg:h-[116px] rounded-none md:rounded-full px-4 sm:px-8 flex justify-between items-center relative">
                {/* Logo Section */}
                <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <img src={logo} alt="Logo" className="h-[60px] lg:h-[80px] object-contain " />
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-sm md:text-lg">Sidra Sharif</span>
                        <span className="text-slate-400 uppercase text-xs md:text-base">UI/UX Designer</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-15">
                    {navLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-slate-300 hover:text-electric-cyan transition-colors text-sm font-medium uppercase tracking-wider"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Resume Button (Desktop) */}
                <div className="hidden md:block">
                    <a href={cv} download="Sidra Sharif.pdf" className="inline-block px-4 lg:px-6 xl:px-10 py-2 md:py-3 text-[16px] lg:text-[22px] rounded-lg border border-electric-cyan text-electric-cyan font-bold hover:bg-electric-cyan hover:text-void-black transition-all shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#040A13] border-t border-slate-800 p-4 flex flex-col items-center gap-4 shadow-lg animate-fade-in-down z-50">
                    {navLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-slate-300 hover:text-electric-cyan transition-colors text-sm font-medium uppercase tracking-wider"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href={cv} download="Sidra_Sharif_Resume.pdf" className="block text-center px-6 py-2 w-full rounded-lg border border-electric-cyan text-electric-cyan font-bold hover:bg-electric-cyan hover:text-void-black transition-all">
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
