import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const WoodFencing: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Wood Fencing Waycross | Custom Privacy & Picket Fences | Palmetto Fence Co.</title>
                <meta name="description" content="Hand-crafted wood fencing in Waycross, GA. Pressure-treated pine and cedar options. Board-on-board privacy, shadowbox, and picket styles. Free estimates!" />
                <link rel="canonical" href="https://palmetto-fence-co.vercel.app/services/wood" />
            </Helmet>

            <div className="pt-24 pb-12 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-6">Custom Wood Fencing</h1>
                        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                            Timeless beauty and natural warmth. Our wood fences are custom-built on site for strength and style.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-brand-800 mb-6">The Classic Choice</h2>
                            <ul className="space-y-4">
                                {[
                                    "Built with pressure-treated pine or Western Red Cedar",
                                    "Custom stick-built construction (no pre-made panels)",
                                    "Stainable and paintable to match your home",
                                    "Offers maximum privacy and noise reduction",
                                    "Budget-friendly options available"
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
                                    Get a Free Wood Quote <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://picsum.photos/id/119/800/600"
                                alt="Wooden privacy fence"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold">Privacy & Picket</h3>
                                <p className="opacity-90">Warm, natural, and built to last.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WoodFencing;
