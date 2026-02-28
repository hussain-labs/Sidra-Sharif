import React from 'react';
import userFlowImg from '../../assets/images/chatcraze/userFlow.png';

const UserFlowSection = () => (
    <section className="w-full bg-[#F0F0F0] py-20 md:py-28 px-4 md:px-10">
        <div className="max-w-[1920px] mx-auto">

            {/* Title */}
            <h2 className="text-4xl md:text-[48px] font-extrabold text-black text-center mb-12 md:mb-16 tracking-tight">
                3.&nbsp; User Flow –{' '}
                <span className="text-[#D3544E]">Sitemapping</span>
            </h2>

            {/* Diagram image — responsive, max width capped, centred */}
            <div className="mx-auto w-full max-w-[1100px]">
                <img
                    src={userFlowImg}
                    alt="ChaatCraze User Flow Sitemap"
                    className="w-full h-auto rounded-2xl shadow-md object-contain"
                />
            </div>

        </div>
    </section>
);

export default UserFlowSection;
