import React, { useEffect } from 'react';

import ChaatcrazeNavbar from '../components/chatcraze/ChaatcrazeNavbar';
import HeroSection from '../components/chatcraze/HeroSection';
import ProjectOverview from '../components/chatcraze/ProjectOverview';
import DesignProcess from '../components/chatcraze/DesignProcess';
import IdeationSection from '../components/chatcraze/IdeationSection';
import MoodBoard from '../components/chatcraze/MoodBoard';
import TypographySection from '../components/chatcraze/TypographySection';
import UserFlowSection from '../components/chatcraze/UserFlowSection';
import WireframingSection from '../components/chatcraze/WireframingSection';
import PrototypingSection from '../components/chatcraze/PrototypingSection';
import SplashScreenSection from '../components/chatcraze/SplashScreenSection';
import LoginSection from '../components/chatcraze/LoginSection';
import HomeScreenSection from '../components/chatcraze/HomeScreenSection';

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
            <WireframingSection />
            <PrototypingSection />
            <SplashScreenSection />
            <LoginSection />
            <HomeScreenSection />
        </main>
    );
};

export default Chatcraze;
