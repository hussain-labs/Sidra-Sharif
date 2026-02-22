import React from 'react';
import { FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer id="footer" className="bg-void-black py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-[1574px] mx-auto">
                {/* Follow Me Section */}
                <div className="mb-20">
                    <h3 className="text-white text-3xl font-bold text-center mb-10">Follow me</h3>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        {/* Instagram Card */}
                        <a href="https://www.instagram.com/studio_graphics29/" target="_blank" className="bg-white rounded-[20px] p-6 flex items-center gap-4 w-full md:w-[320px] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                            <div className="bg-black w-12 h-12 rounded-xl flex justify-center items-center text-white shrink-0">
                                <FaInstagram className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-black font-bold text-xl">Instagram</span>
                                <span className="text-gray-500 text-sm">@studio_graphics29</span>
                            </div>
                        </a>

                        {/* LinkedIn Card */}
                        <a href="https://www.linkedin.com/in/sidra-the-designer" target="_blank" className="bg-white rounded-[20px] p-6 flex items-center gap-4 w-full md:w-[320px] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                            <div className="bg-black w-12 h-12 rounded-xl flex justify-center items-center text-white shrink-0">
                                <FaLinkedinIn className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-black font-bold text-xl">Linkedin</span>
                                <span className="text-gray-500 text-sm">Sidra Sharif</span>
                            </div>
                        </a>

                        {/* Behance Card */}
                        <a href="https://www.behance.net/sidrasharif797" target="_blank" className="bg-white rounded-[20px] p-6 flex items-center gap-4 w-full md:w-[320px] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                            <div className="bg-black w-12 h-12 rounded-xl flex justify-center items-center text-white shrink-0">
                                <FaBehance className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-black font-bold text-xl">Behance</span>
                                <span className="text-gray-500 text-sm">Sidra Sharif</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full border-t border-gray-800/60 mb-10"></div>

                {/* Footer Pill */}
                <div className="bg-[#040A13] border border-gray-800/80 rounded-3xl md:rounded-full py-4 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">

                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="S Logo" className="h-10 md:h-12 w-auto object-contain" />
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-base md:text-lg leading-tight">Sidra Sharif</span>
                            <span className="text-gray-400 text-[10px] md:text-xs leading-tight">UI/UX & Visual Designer</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-8">
                        <a href="#about" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">About</a>
                        <a href="#gallery" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Work</a>
                        <a href="#contact" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Contact</a>
                        <a href="#services" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Services</a>
                    </div>

                    {/* Copyright & Date */}
                    <div className="text-gray-500 text-xs md:text-sm whitespace-nowrap">
                        2025 Sidrasharif
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
