import React from 'react';

const ThankYouSection = () => (
    <section className="w-full bg-[#C02801] py-20 px-6 md:px-10 text-white text-center">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-6">

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                Thank You !
            </h2>

            {/* Subtitle */}
            <p className="text-base md:text-lg font-bold max-w-[420px] leading-relaxed">
                Your time and interest bring meaning to this design journey.
            </p>

            {/* Decorative quote mark pattern */}
            <p className="text-xl md:text-2xl font-bold tracking-widest opacity-90 mt-4 select-none">
                ···  «  »  ···  «  »  ···  «  »  ···
            </p>

        </div>
    </section>
);

export default ThankYouSection;
