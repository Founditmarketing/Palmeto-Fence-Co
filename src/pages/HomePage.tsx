import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';

interface HomePageProps {
    onOpenAI: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenAI }) => {
    // SEO for Home Page
    return (
        <>
            <Helmet>
                <title>Palmetto Fence Co. | Top-Rated Fence Company Waycross & Southeast GA</title>
                <meta name="description" content="Woman-Owned & Locally Operated Fence Contractor serving Waycross and Southeast Georgia. Premium wood, vinyl, and aluminum fencing solutions." />
                <link rel="canonical" href="https://palmetto-fence-co.vercel.app/" />
            </Helmet>

            <Hero onOpenAI={onOpenAI} />
            <About />
            <Services />
            <Testimonials />
            <Contact />
        </>
    );
};

export default HomePage;
