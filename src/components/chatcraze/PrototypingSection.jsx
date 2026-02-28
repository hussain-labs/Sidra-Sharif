import React from 'react';
import prototypingImg from '../../assets/images/chatcraze/prototyping.png';

const PrototypingSection = () => (
    <section className="w-full bg-white py-20 md:py-28 px-4 md:px-10">
        <div className="max-w-[1920px] mx-auto">

            {/* Title */}
            <h2 className="text-4xl md:text-[48px] font-extrabold text-black text-center mb-12 md:mb-16 tracking-tight">
                5.&nbsp; Prototyping
            </h2>

            {/* Prototyping image — responsive, full width */}
            <div className="mx-auto w-full max-w-[1920px]">
                <img
                    src={prototypingImg}
                    alt="ChaatCraze Prototyping"
                    className="w-full h-auto rounded-2xl object-contain"
                />
            </div>

        </div>
    </section>
);

export default PrototypingSection;
