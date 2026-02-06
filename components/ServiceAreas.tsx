import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreas: React.FC = () => {
    const areas = [
        "Waycross", "Blackshear", "Hoboken", "Patterson",
        "Alma", "Nahunta", "Homerville", "Manor"
    ];

    return (
        <section className="py-20 bg-stone-50 border-t border-brand-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">Proudly Serving Southeast Georgia</h2>
                <p className="text-stone-600 max-w-2xl mx-auto mb-12">
                    From our headquarters in Waycross, we bring premium fencing solutions to our neighbors across Ware, Pierce, and Brantley counties.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {areas.map((area) => (
                        <div key={area} className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-stone-100 text-brand-700 font-medium hover:shadow-md transition-all hover:-translate-y-1 cursor-default">
                            <MapPin size={16} className="text-accent-500" />
                            {area}, GA
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-sm text-stone-500 italic">
                    Don't see your town? <a href="#contact" className="text-brand-600 underline hover:text-brand-800">Contact us</a>—we often travel for large projects!
                </p>
            </div>
        </section>
    );
};

export default ServiceAreas;
