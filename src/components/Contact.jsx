import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <section id="contact" className="bg-void-black py-24 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
            <div className="max-w-[1920px] mx-auto relative z-10">
                <div className="bg-[#0B1C26] rounded-[48px] p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-gray-800/50">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Have a project idea. <br className="hidden md:block" />
                            Get in touch and let’s chat!
                        </h2>
                        <p className="text-gray-400 text-sm md:text-lg leading-relaxed mx-auto font-light">
                            Need a fresh look for your app or a complete identity for your brand? I combine user-centered design with creative visuals to bring ideas to life. Drop me a line, and let's discuss your vision.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 mx-auto">
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-lg"
                                required
                            />
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="w-full bg-transparent border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-lg resize-none"
                                required
                            ></textarea>
                        </div>

                        <div className="text-center mt-10">
                            <button
                                type="submit"
                                className="bg-electric-cyan text-void-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Background glow for atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] pointer-events-none opacity-20">
                <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-sky-blue blur-[150px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-electric-cyan blur-[150px] rounded-full"></div>
            </div>
        </section>
    );
};

export default Contact;
