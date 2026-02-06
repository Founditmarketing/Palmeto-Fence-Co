import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const AluminumFencing: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Aluminum Fencing Waycross | Residential & Commercial | Palmetto Fence Co.</title>
                <meta name="description" content="Elegant aluminum fencing in Southeast Georgia. The look of wrought iron without the maintenance. Perfect for pools and property lines." />
                <link rel="canonical" href="https://palmetto-fence-co.vercel.app/services/aluminum" />
            </Helmet>

            <div className="pt-24 pb-12 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Aluminum Fencing</h1>
                        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                            Sophisticated style meets industrial strength. The premier choice for pool safety and estate boundaries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://picsum.photos/id/122/800/600"
                                alt="Black aluminum pool fence"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold">Elegant & Secure</h3>
                                <p className="opacity-90">Ideal for pools and prestige properties.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-brand-800 mb-6">Lifetime Value</h2>
                            <ul className="space-y-4">
                                {[
                                    "Rust and corrosion resistant (perfect for humidity)",
                                    "Classic 'Wrought Iron' look without the upkeep",
                                    "Pool code compliant options available",
                                    "Rackable panels follow terrain slopes perfectly",
                                    "Available in Black, Bronze, and White"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-accent-500 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-stone-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <a
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-brand-700 hover:bg-brand-600 text-white rounded-full font-bold shadow-lg transition-all hover:-translate-y-1"
                                >
                                    Get a Free Aluminum Quote <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AluminumFencing;
