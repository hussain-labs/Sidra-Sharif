import React from 'react';
import ProjectCard from './common/ProjectCard';
import chaatCrazeImg from '../assets/images/chaat_craze.png';
import cheeziousImg from '../assets/images/cheezious.png';

const Works = () => {
    const projects = [
        {
            title: "ChaatCraze App (Case Study)",
            description: "From napkin sketch to high-fidelity prototype. A hyper-local street food delivery solution.",
            image: chaatCrazeImg
        },
        {
            title: "Cheezious App (UI Replication)",
            description: "Deconstructing complex interfaces to study visual hierarchy and standard UI patterns.",
            image: cheeziousImg
        },
        {
            title: "Invitation App Store UI",
            description: "One core interface, three distinct moods. A study on visual versatility and style.",
            image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2080&auto=format&fit=crop"
        },
        {
            title: "Weather Data Interface",
            description: "Visualizing the elements. Experimenting with dynamic backgrounds and modern UI trends.",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2000&auto=format&fit=crop"
        },
        {
            title: "Client E-Commerce Project",
            description: "A live project involving UI design, layout planning, and prototyping for a custom online store.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        },
        {
            title: "Loading Next Project...",
            description: "Stay tuned for more premium design work coming soon.",
            image: "",
            isPlaceholder: true
        }
    ];

    return (
        <section className="bg-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-void-black">
                        Selected <span className="text-sky-blue">Work & Case</span> Studies
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Whether you are launching a new business or looking to scale an existing product, I deliver design solutions backed by a successful track record.
                    </p>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-sky-blue' : 'bg-gray-200'}`}></div>
                        ))}
                    </div>
                </div>

                {/* Sub-header */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-5xl font-bold text-void-black mb-4">
                        User Experience & Interface Design
                    </h3>
                    <p className="text-gray-500 text-lg md:text-xl">
                        Crafting digital solutions that prioritize user needs.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
                    {projects.map((project, index) => (
                        <div key={index} className="flex justify-center">
                            {project.isPlaceholder ? (
                                <div className="relative w-full max-w-[400px] aspect-4/5 rounded-[40px] border-[3px] border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center p-8 text-center group transition-all duration-300">
                                    <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center mb-6">
                                        <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-500 mb-4">{project.title}</h3>
                                    <button className="px-8 py-3 rounded-xl bg-sky-blue text-white font-bold uppercase tracking-wider text-sm transition-all">
                                        Stay Tuned
                                    </button>
                                </div>
                            ) : (
                                <ProjectCard
                                    {...project}
                                    onOpen={() => console.log(`Opening ${project.title}`)}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Dots */}
                <div className="flex justify-center gap-2 mt-20">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-sky-blue' : 'bg-gray-200'}`}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
