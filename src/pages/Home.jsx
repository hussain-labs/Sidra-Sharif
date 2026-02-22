import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Works from '../components/Works';
import Branding from '../components/Home/Branding';
import CreativePlayground from '../components/Home/CreativePlayground';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Works />
            <Branding />
            <Services />
            <CreativePlayground />
            <Contact />
        </main>
    );
};

export default Home;
