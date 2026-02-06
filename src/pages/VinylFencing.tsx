import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const VinylFencing: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Vinyl Fencing Waycross | Low Maintenance Fence Installation | Palmetto Fence Co.</title>
                <meta name="description" content="Premium vinyl fencing in Waycross and Southeast GA. Durable, maintenance-free privacy and picket fences. Woman-owned local business. Call for a quote!" />
                <link rel="canonical" href="https://palmetto-fence-co.vercel.app/services/vinyl" />
            </Helmet>

            <div className="pt-24 pb-12 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Vinyl Fencing Solutions</h1>
                        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                            Beautiful, durable, and virtually maintenance-free. The perfect choice for modern homes in Southeast Georgia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://picsum.photos/id/191/800/600"
                                alt="White vinyl privacy fence"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold">Privacy Vinyl</h3>
                                <p className="opacity-90">Full seclusion for your backyard oasis.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-brand-800 mb-6">Why Choose Vinyl?</h2>
                            <ul className="space-y-4">
                                {[
                                    "Never needs painting or staining",
                                    "Resists rot, termite, and moisture damage",
                                    "Lifetime manufacturer warranty available",
                                    "Clean, modern aesthetic that boosts curb appeal",
                                    "Available in White, Tan, and Clay colors"
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
                                    Get a Free Vinyl Quote <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VinylFencing;
