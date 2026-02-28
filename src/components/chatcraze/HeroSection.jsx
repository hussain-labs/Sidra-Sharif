import React from 'react';
import heroImg from '../../assets/images/chatcraze/heroimage.png';

const HeroSection = () => (
    <section className="relative w-full bg-linear-to-b from-void-black to-red-600 overflow-hidden flex justify-center items-center">
        <img
            src={heroImg}
            alt="ChaatCraze Hero"
            className="max-w-full h-[500px] md:h-[600px] lg:h-[800px] xl:h-full object-cover"
        />
    </section>
);

export default HeroSection;
