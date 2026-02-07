import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight, Waves, ShieldCheck, Mountain } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const AluminumFencing: React.FC = () => {
    const styles = [
        {
            title: "2-Rail Flat Top",
            description: "Simple, modern lines. A popular choice for pool enclosures where maximizing the view is key.",
            image: "https://picsum.photos/id/175/600/400"
        },
        {
            title: "3-Rail Pressed Spear",
            description: "The classic 'Wrought Iron' look. Decorative spears add an extra layer of security and elegance.",
            image: "https://picsum.photos/id/176/600/400"
        },
        {
            title: "Puppy Picket",
            description: "Keeps small pets safe! Extra pickets at the bottom prevent small dogs from squeezing through.",
            image: "https://picsum.photos/id/179/600/400"
        },
        {
            title: "Commercial Grade",
            description: "Thicker rails and pickets for high-traffic areas, parks, or community pools.",
            image: "https://picsum.photos/id/180/600/400"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Aluminum Fencing Waycross | Pool Fencing & Estates | Palmetto Fence Co.</title>
                <meta name="description" content="Elegant aluminum fencing in Waycross. Rust-free, rackable panels for uneven ground. Pool code compliant styles available. Get a quote today." />
                <link rel="canonical" href="https://palmetto-fence-co.vercel.app/services/aluminum" />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-stone-50">
                <Navbar />

                {/* Hero */}
                <div className="pt-32 pb-20 bg-brand-900 border-b border-brand-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Aluminum Fencing</h1>
                        <p className="text-xl text-brand-100 max-w-2xl mx-auto font-light">
                            The elegance of wrought iron with the durability of modern aluminum. Perfect for pools and slopes.
                        </p>
                    </div>
                </div>

                {/* Styles Grid */}
                <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-brand-900 mb-12 text-center">Aluminum Collections</h2>
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

                {/* Feature Highlight Section */}
                <div className="bg-white py-20 border-t border-stone-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">Pool Safety & Sloped Yards</h2>
                                <p className="text-stone-600 mb-6 text-lg leading-relaxed">
                                    Aluminum is the ultimate problem solver for Georgia landscapes. Whether you have a rolling hill or a new swimming pool, aluminum adapts perfectly without gaps or stepping.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="bg-brand-100 p-3 rounded-full text-brand-600 h-fit">
                                            <Waves size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-900">Pool Code Compliant</h4>
                                            <p className="text-stone-500 text-sm">We carry styles that meet Ware County pool safety codes (48"+ height, specific latches).</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="bg-brand-100 p-3 rounded-full text-brand-600 h-fit">
                                            <Mountain size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-900">Rackable Panels</h4>
                                            <p className="text-stone-500 text-sm">Follows the grade of your yard smoothly, leaving no gaps for pets to escape under.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="bg-brand-100 p-3 rounded-full text-brand-600 h-fit">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-900">Lifetime Coating</h4>
                                            <p className="text-stone-500 text-sm">Powder-coated finish that won't rust, peel, or crack, even in our humidity.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <img src="https://picsum.photos/id/128/800/800" alt="Aluminum Pool Fence" className="rounded-2xl shadow-2xl" />
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

export default AluminumFencing;
