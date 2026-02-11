import React from 'react';
import ProjectCard from '../common/ProjectCard';
import perfumeImg from '../../assets/images/branding_perfume.png';
import socialImg from '../../assets/images/branding_social.png';

const Branding = () => {
    const projects = [
        {
            title: "Mystique Perfumery Fragrance Identity",
            description: "A cohesive brand experience. Designed the logo, product packaging, and promotional assets for a luxury scent launch.",
            image: perfumeImg,
            btnColor: "bg-electric-cyan"
        },
        {
            title: "Social Media & Ad Creatives",
            description: "Designing high-conversion visuals. Thumbnails, posters, and banners created to capture attention in seconds.",
            image: socialImg,
            btnColor: "bg-void-black text-white"
        },
        {
            title: "LogoFolio Design",
            description: "Distilling brand values into simple, memorable marks. A collection of vector identities and wordmarks.",
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
            btnColor: "bg-electric-cyan"
        }
    ];

    return (
        <section className="bg-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-void-black">
                        Visual Identity & Branding
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Creating distinct personalities for businesses and products.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 pb-20">
                    {projects.map((project, index) => (
                        <div key={index} className="flex justify-center">
                            <ProjectCard
                                {...project}
                                onOpen={() => console.log(`Opening ${project.title}`)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Branding;
