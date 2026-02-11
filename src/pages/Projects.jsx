import React from 'react';
import Navbar from '../components/Home/Navbar';
import ProjectCard from '../components/common/ProjectCard';
import chaatCrazeImg from '../assets/images/chaat_craze.png';

const Projects = () => {
    const dummyProjects = [
        {
            title: "ChaatCraze App (Case Study)",
            description: "From napkin sketch to high-fidelity prototype. A hyper-local street food delivery solution.",
            image: chaatCrazeImg
        },
        {
            title: "FinanceHub Dashboard",
            description: "A comprehensive financial management system with real-time data visualization and analytics.",
            image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "TravelBuddy Platform",
            description: "An intuitive travel planning app that helps users discover hidden gems and organize their trips effectively.",
            image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-void-black text-white">
            <Navbar />
            <div className="pt-32 px-4 md:px-8 lg:px-16 max-w-[1920px] mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        MY PROJECTS
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Explore some of my latest design and development work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 pb-20">
                    {dummyProjects.map((project, index) => (
                        <div key={index} className="flex justify-center">
                            <ProjectCard
                                {...project}
                                onOpen={() => console.log(`Opening ${project.title}`)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
