import React from 'react';
import leftMobileImg from '../../assets/images/chatcraze/leftmobile.png';
import rightMobileImg from '../../assets/images/chatcraze/rightmobile.png';

const ProjectOverview = () => (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-[#FFFAFA]">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center">

            <div className="text-center mb-16 md:mb-24 z-20">
                <h2 className="text-4xl md:text-[54px] font-extrabold text-black tracking-tight flex justify-center gap-3">
                    Project <span className="text-[#D3544E]">Overview</span>
                </h2>
            </div>

            <div className="relative w-full max-w-[1000px] h-auto min-h-[600px] md:min-h-[700px] flex justify-center items-start pt-10 md:pt-0">
                {/* Arch card */}
                <div className="relative z-10 w-[500px] md:w-[600px] min-h-[400px] md:h-[500px] bg-[#EBBDB0] rounded-t-full p-8 md:p-14 lg:p-16 text-center shadow-[0_20px_50px_rgba(235,189,176,0.3)]">
                    <h3 className="text-3xl md:text-[40px] font-bold text-black mb-6 leading-tight">
                        About Us
                    </h3>
                    <p className="text-lg md:text-xl text-black/90 font-medium leading-relaxed max-w-[400px] mx-auto">
                        ChaatCraze is a practise vibrant, community-driven mobile app designed for street food
                        enthusiasts. It enables them to effortlessly discover and navigate to the most authentic,
                        traditional, and highly rated street-style chaat vendors. The app lives exclusively on
                        smartphones (Android).
                    </p>
                </div>

                {/* Left mobile screenshot */}
                <div className="absolute z-20 bottom-[-20px] min-[370px]:bottom-[30px] min-[410px]:bottom-[60px] min-[450px]:bottom-[10px] md:bottom-[120px] lg:bottom-[80px] left-[-30px] md:-left-[70px] lg:-left-[150px] xl:-left-[80px] w-[180px] min-[450px]:w-[250px] min-[620px]:w-[300px] md:w-[350px] lg:w-[450px]">
                    <img src={leftMobileImg} alt="ChaatCraze Screen Left" className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>

                {/* Right mobile screenshot */}
                <div className="absolute z-20 bottom-[40px] min-[370px]:bottom-[60px] min-[410px]:bottom-[60px] min-[450px]:bottom-[120px] md:bottom-[130px] lg:bottom-[120px] right-[-20px] md:-right-[30px] lg:-right-[20px] xl:-right-[50px] w-[200px] min-[450px]:w-[220px] min-[520px]:w-[300px] md:w-[350px] lg:w-[400px]">
                    <img src={rightMobileImg} alt="ChaatCraze Screen Right" className="w-full h-auto object-contain drop-shadow-2xl" />
                </div>
            </div>
        </div>
    </section>
);

export default ProjectOverview;
