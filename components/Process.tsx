import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Ruler, Hammer } from 'lucide-react';

const Process: React.FC = () => {
    const steps = [
        {
            icon: Phone,
            title: "1. Consult",
            description: "Schedule your free on-site estimate. We'll discuss functionality, style, and budget."
        },
        {
            icon: Ruler,
            title: "2. Design",
            description: "We measure your property and help you select the perfect materials for your vision."
        },
        {
            icon: Hammer,
            title: "3. Build",
            description: "Our expert crew handles permits, installation, and cleanup. You just enjoy the view."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-stone-100 -translate-y-12 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent-600 font-bold uppercase tracking-widest text-xs mb-2 block">Simple & Transparent</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-950">Our Proven Process</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl border border-stone-100 shadow-lg text-center relative"
                        >
                            <div className="w-16 h-16 mx-auto bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mb-6 shadow-inner ring-4 ring-white">
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-900 mb-4 font-serif">{step.title}</h3>
                            <p className="text-stone-500 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
