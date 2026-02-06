import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import { Warehouse, ShieldCheck, Lock, Activity } from 'lucide-react';

const CommercialFencing: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Commercial Fencing Waycross | Chain Link & Security Gates | Palmetto Fence Co.</title>
                <meta name="description" content="Expert commercial fencing solutions in Waycross, GA. Durable chain link, industrial gates, and security fencing for businesses. Call for a free quote." />
                <link rel="canonical" href="https://palmetto-fence-co.vercel.app/services/commercial" />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-stone-50">
                <Navbar />

                {/* Hero Section */}
                <div className="relative bg-brand-900 py-32">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-stone-900/50 z-10"></div>
                        {/* Use a placeholder for now, would ideally be a warehouse/fence image */}
                        <img src="https://picsum.photos/id/184/1920/1080" alt="Commercial Chain Link Fence" className="w-full h-full object-cover opacity-50" />
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Commercial & Industrial Security</h1>
                        <p className="text-xl text-brand-100 max-w-2xl mx-auto font-light">
                            Protecting Waycross businesses with durable chain link, automated gates, and high-security perimeter solutions.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-6">Secure Your Assets</h2>
                                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                                    For business owners in Southeast Georgia, a fence is more than just a property line—it's your first line of defense. Palmetto Fence Co. specializes in industrial-grade fencing that withstands daily wear and harsh weather.
                                </p>
                                <p className="text-stone-600 text-lg leading-relaxed">
                                    From manufacturing plants to small business storage lots, we deliver cost-effective security solutions like galvanized chain link and barbed wire toppers.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 text-center">
                                    <Warehouse size={32} className="mx-auto text-accent-600 mb-4" />
                                    <h3 className="font-bold text-brand-800">Chain Link</h3>
                                    <p className="text-sm text-stone-500 mt-2">Durable & Cost-Effective</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 text-center">
                                    <Lock size={32} className="mx-auto text-accent-600 mb-4" />
                                    <h3 className="font-bold text-brand-800">Security Gates</h3>
                                    <p className="text-sm text-stone-500 mt-2">Automated & Manual</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 text-center">
                                    <ShieldCheck size={32} className="mx-auto text-accent-600 mb-4" />
                                    <h3 className="font-bold text-brand-800">Privacy Slats</h3>
                                    <p className="text-sm text-stone-500 mt-2">Visual Screening</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 text-center">
                                    <Activity size={32} className="mx-auto text-accent-600 mb-4" />
                                    <h3 className="font-bold text-brand-800">Repairs</h3>
                                    <p className="text-sm text-stone-500 mt-2">Fast Emergency Service</p>
                                </div>
                            </div>
                        </div>

                        {/* Applications List */}
                        <div className="bg-white rounded-2xl p-10 shadow-sm border border-brand-100/50">
                            <h3 className="text-2xl font-serif font-bold text-brand-900 mb-8 text-center">Common Commercial Applications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-stone-700">
                                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                                        Warehouses & Distribution Centers
                                    </li>
                                    <li className="flex items-center gap-2 text-stone-700">
                                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                                        Storage Facilities
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-stone-700">
                                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                                        Schools & Daycares
                                    </li>
                                    <li className="flex items-center gap-2 text-stone-700">
                                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                                        Athletic Fields & Parks
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-stone-700">
                                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                                        Dumpster Enclosures (Wood/Vinyl)
                                    </li>
                                    <li className="flex items-center gap-2 text-stone-700">
                                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                                        Apartment Complexes
                                    </li>
                                </ul>
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

export default CommercialFencing;
