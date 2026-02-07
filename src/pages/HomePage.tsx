import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import About from '../../components/About';
import Process from '../../components/Process';
import FenceGallery from '../../components/FenceGallery';
import Services from '../../components/Services';
import ServiceAreas from '../../components/ServiceAreas';
import FAQ from '../../components/FAQ';
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
                <meta name="description" content="Woman-Owned & Locally Operated Fence Contractor serving Waycross, Blackshear, Hoboken, and Southeast Georgia. Premium wood, vinyl, and aluminum fencing solutions." />
                <link rel="canonical" href="https://palmetto-fence-co.vercel.app/" />
                {/* FAQ Schema for Rich Snippets */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Do you offer free estimates for fence installation in Waycross?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes! We provide 100% free, no-obligation onsite estimates for all residential and commercial projects in Waycross, Blackshear, and surrounding areas."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How long does it take to install a fence?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Most residential projects are completed within 1-3 days, depending on the linear footage and terrain."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What is the best fence for privacy and durability?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "For maximum privacy and low maintenance, we recommend vinyl fencing. Pressure-treated pine is also excellent for the Georgia climate."
                                    }
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>

            <Hero onOpenAI={onOpenAI} />
            <TrustBar />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <About />
            </motion.div>

            <Process />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <FenceGallery />
            </motion.div>
            <Services />
            <ServiceAreas />
            <FAQ />
            <Testimonials />
            <Contact />
        </>
    );
};

export default HomePage;
