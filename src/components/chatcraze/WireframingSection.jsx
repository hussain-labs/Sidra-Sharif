import React from 'react';
import wireframingImg from '../../assets/images/chatcraze/wireframing.png';

const WireframingSection = () => (
    <section className="w-full bg-[#F0F0F0] py-20 md:py-28 px-4 md:px-10">
        <div className="max-w-[1920px] mx-auto">

            {/* Title */}
            <h2 className="text-4xl md:text-[48px] font-extrabold text-black text-center mb-12 md:mb-16 tracking-tight">
                4.&nbsp; Wireframing{' '}
                <span className="text-[#D3544E]">&amp; Testing</span>
            </h2>

            {/* Wireframing diagram — responsive, full width up to 1920px */}
            <div className="mx-auto w-full max-w-[1920px]">
                <img
                    src={wireframingImg}
                    alt="ChaatCraze Wireframing & Testing"
                    className="w-full h-auto object-contain"
                />
            </div>

        </div>
    </section>
);

export default WireframingSection;
