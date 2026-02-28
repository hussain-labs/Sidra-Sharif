import React, { useEffect } from 'react';

import ChaatcrazeNavbar from '../components/chatcraze/ChaatcrazeNavbar';
import HeroSection from '../components/chatcraze/HeroSection';
import ProjectOverview from '../components/chatcraze/ProjectOverview';
import DesignProcess from '../components/chatcraze/DesignProcess';
import IdeationSection from '../components/chatcraze/IdeationSection';
import MoodBoard from '../components/chatcraze/MoodBoard';
import TypographySection from '../components/chatcraze/TypographySection';
import UserFlowSection from '../components/chatcraze/UserFlowSection';

const Chatcraze = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white min-h-screen text-black font-sans">
            <ChaatcrazeNavbar />
            <HeroSection />
            <ProjectOverview />
            <DesignProcess />
            <IdeationSection />
            <MoodBoard />
            <TypographySection />
            <UserFlowSection />
        </main>
    );
};

export default Chatcraze;
