import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight, Trees, Shield, Ruler } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const WoodFencing: React.FC = () => {
    const styles = [
        {
            title: "Shadowbox (Good Neighbor)",
            description: "Looks the same on both sides. Allows wind to pass through, making it perfect for stormy Georgia weather.",
            image: "https://picsum.photos/id/120/600/400"
        },
        {
            title: "Board-on-Board",
            description: "Total privacy with overlapping boards. No gaps even when the wood shrinks in the summer heat.",
            image: "https://picsum.photos/id/129/600/400"
        },
        {
            title: "Traditional Picket",
            description: "Classic American charm. Ideal for keeping pets safe without blocking your view of the neighborhood.",
            image: "https://picsum.photos/id/130/600/400"
        },
        {
            title: "Split Rail",
            description: "Rustic and open. Define your property boundaries affordably on larger lots in Ware County.",
            image: "https://picsum.photos/id/133/600/400"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Wood Fencing Waycross | Shadowbox, Picket & Privacy | Palmetto Fence Co.</title>
                <meta name="description" content="Custom wood fences built for Waycross climate. Pressure-treated pine and cedar options. Shadowbox, Board-on-Board, and Picket styles. Free onsite estimates." />
                <link rel="canonical" href="https://palmetto-fence-co.vercel.app/services/wood" />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-stone-50">
                <Navbar />

                {/* Hero */}
                <div className="pt-32 pb-20 bg-brand-900 border-b border-brand-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Custom Wood Fencing</h1>
                        <p className="text-xl text-brand-100 max-w-2xl mx-auto font-light">
                            Examples of craftsmanship you can see in every detail. Built on-site to handle the Waycross humidity and heat.
                        </p>
                    </div>
                </div>

                {/* Popular Styles Grid */}
                <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-brand-900 mb-12 text-center">Popular Wood Styles</h2>
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

                {/* Local Context Section */}
                <div className="bg-stone-100 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">Built for Southeast Georgia</h2>
                                <p className="text-stone-700 mb-6 leading-relaxed">
                                    In Waycross, wood fences face tough conditions: high humidity, intense sun, and termites. That's why we don't use pre-made panels from big box stores.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Shield className="text-accent-600 mt-1" size={20} />
                                        <span><strong>Pressure Treated Pine:</strong> Rated for ground contact to resist rot and insects.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Ruler className="text-accent-600 mt-1" size={20} />
                                        <span><strong>Stick-Built Construction:</strong> We build your fence board-by-board on your property, ensuring it follows the terrain perfectly.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Trees className="text-accent-600 mt-1" size={20} />
                                        <span><strong>Cedar Upgrades:</strong> Natural resistance to warping and a beautiful red tone that silvers gracefully.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 relative">
                                <img src="https://picsum.photos/id/140/800/600" alt="Stick built fence construction" className="rounded-2xl shadow-xl" />
                                <div className="absolute -bottom-6 -left-6 bg-brand-800 text-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                                    <p className="font-serif italic">"My board-on-board fence withstood the last hurricane season without a scratch!"</p>
                                    <p className="text-xs font-bold mt-2 text-accent-400">- Mike D., Blackshear</p>
                                </div>
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

export default WoodFencing;
