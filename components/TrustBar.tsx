import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle } from 'lucide-react';

const TrustBar: React.FC = () => {
    const trusts = [
        { icon: ShieldCheck, text: "Licensed & Insured" },
        { icon: Award, text: "Woman-Owned Business" },
        { icon: CheckCircle, text: "3-Year Workmanship Warranty" },
        { icon: HeartHandshake, text: "Local & Family Operated" },
    ];

    return (
        <section className="bg-brand-900 border-b border-brand-800 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8">
                    {trusts.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-brand-100 opacity-90 hover:opacity-100 transition-opacity">
                            <item.icon size={20} className="text-accent-400" />
                            <span className="font-medium text-sm md:text-base tracking-wide whitespace-nowrap">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
