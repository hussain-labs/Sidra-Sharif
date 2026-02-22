import Button from '../common/Button';
import Navbar from './Navbar';
import bgImg from '../../assets/images/Bgimg.png';
// import img1 from '../../assets/images/left_herovector.png';
// import img2 from '../../assets/images/right_herovector.png';

const Hero = () => {
    return (
        <div
            id="home"
            className="w-full max-w-[1920px] h-screen max-h-[1219px] text-white overflow-hidden flex flex-col bg-cover bg-right md:bg-center bg-no-repeat mx-auto relative"
            style={{ backgroundImage: `url(${bgImg})`, backgroundColor: '#050505' }}
        >
            {/* Dark Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-void-black/50 z-0"></div> */}

            {/* Navbar */}
            <div className="z-20 w-full">
                <Navbar />
            </div>

            {/* Main Content Area */}
            <div className="grow flex items-center justify-center relative z-10 py-20 md:py-0 px-4">
                {/* Central Content */}
                <div className="text-center w-full max-w-5xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-4 md:mb-2 leading-tight">
                        I'm <span className="text-electric-cyan drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]">Sidra Sharif</span>
                    </h1>

                    <p className="text-lg sm:text-2xl md:text-3xl text-slate-300 font-light mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                        A passionate <span className="text-sky-blue font-semibold">Designer</span> crafting intuitive and beautiful digital experiences
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 relative z-20">
                        <Button className="w-full sm:w-auto px-8 md:px-10 rounded-[15px] py-3 md:py-4 text-base md:text-lg">
                            View My Work
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto px-8 md:px-10 rounded-[15px] py-3 md:py-4 text-base md:text-lg">
                            Let's Collaborate
                        </Button>
                    </div>

                    {/* Floating Vectors - Absolute Positioned */}
                    {/* Hidden on very small screens if needed, or scaled down */}
                    {/* <div className="absolute hidden lg:block bottom-[-90px] left-0 z-10 w-[30%] md:w-[40%] max-w-[500px] pointer-events-none opacity-60 md:opacity-100">
                        <img src={img1} alt="" className="w-full h-auto object-contain" />
                    </div>
                    <div className="absolute hidden lg:block bottom-[-50px] right-0 z-10 w-[30%] md:w-[40%] max-w-[500px] pointer-events-none opacity-60 md:opacity-100">
                        <img src={img2} alt="" className="w-full h-auto object-contain" />
                    </div> */}
                </div>
            </div>

            {/* Bottom Glass Blur/Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-linear-to-t from-void-black to-transparent z-10 pointer-events-none"></div>
        </div>
    );
};

export default Hero;
