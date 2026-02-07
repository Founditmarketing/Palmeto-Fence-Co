import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight, Sun, Droplets, PaintBucket } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const VinylFencing: React.FC = () => {
    const styles = [
        {
            title: "Solid Privacy",
            description: "The most popular choice. Complete seclusion with a clean, modern look. Available in White, Tan, and Clay.",
            image: "https://picsum.photos/id/155/600/400"
        },
        {
            title: "Semi-Privacy",
            description: "Allows airflow and light while keeping your yard secure. Great for smaller gardens.",
            image: "https://picsum.photos/id/158/600/400"
        },
        {
            title: "Vinyl Picket",
            description: "The classic 'White Picket Fence' without the peeling paint. Perfect for front yards and curb appeal.",
            image: "https://picsum.photos/id/160/600/400"
        },
        {
            title: "Ranch Rail",
            description: "Iconic farm style. Durable containment for horses or large property boundaries in Hoboken.",
            image: "https://picsum.photos/id/164/600/400"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Vinyl Fencing Waycross | Low Maintenance PVC Fence | Palmetto Fence Co.</title>
                <meta name="description" content="Premium vinyl fencing in Waycross and Blackshear. HOA-approved styles, lifetime warranty, and maintenance-free. White, Tan, and Wood-grain options." />
                <link rel="canonical" href="https://palmetto-fence-co.vercel.app/services/vinyl" />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-stone-50">
                <Navbar />

                {/* Hero */}
                <div className="pt-32 pb-20 bg-brand-900 border-b border-brand-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Vinyl Fencing Solutions</h1>
                        <p className="text-xl text-brand-100 max-w-2xl mx-auto font-light">
                            Maintenance-free beauty that lasts a lifetime. The smart investment for Waycross homeowners.
                        </p>
                    </div>
                </div>

                {/* Styles Grid */}
                <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-brand-900 mb-12 text-center">Vinyl Styles & Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {styles.map((style, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-stone-100 hover:-translate-y-1 transition-transform duration-300">
                                <div className="h-48 overflow-hidden">
                                    <img src={style.image} alt={style.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-brand-800 mb-2">{style.title}</h3>
                                    <p className="text-sm text-stone-600">{style.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Vinyl Section */}
                <div className="bg-white py-20 border-t border-stone-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
                            <div className="p-8 bg-stone-50 rounded-2xl">
                                <Sun size={48} className="text-accent-500 mx-auto mb-4" />
                                <h3 className="font-bold text-xl text-brand-900 mb-2">UV Protected</h3>
                                <p className="text-stone-600">Formulated with Titanium Dioxide to prevent yellowing or fading, even in the Georgia summer sun.</p>
                            </div>
                            <div className="p-8 bg-stone-50 rounded-2xl">
                                <PaintBucket size={48} className="text-accent-500 mx-auto mb-4" />
                                <h3 className="font-bold text-xl text-brand-900 mb-2">No Painting Ever</h3>
                                <p className="text-stone-600">Put down the brush. A simple wash with a garden hose keeps your fence looking brand new.</p>
                            </div>
                            <div className="p-8 bg-stone-50 rounded-2xl">
                                <Droplets size={48} className="text-accent-500 mx-auto mb-4" />
                                <h3 className="font-bold text-xl text-brand-900 mb-2">Moisture Resistant</h3>
                                <p className="text-stone-600">Won't rot, warp, or blister like wood. Impervious to termites and moisture damage.</p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <div className="inline-block bg-brand-50 border border-brand-200 p-8 rounded-2xl max-w-3xl">
                                <h3 className="text-2xl font-serif font-bold text-brand-800 mb-4">Perfect for Blackshear HOAs</h3>
                                <p className="text-stone-700 leading-relaxed">
                                    Many subdivisions in Blackshear and Waycross require specific fence styles. Our <strong>Tan and Clay vinyl options</strong> are frequently approved by local HOAs because they blend naturally with the landscape while offering superior durability. We handle the HOA approval paperwork for you!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default VinylFencing;
