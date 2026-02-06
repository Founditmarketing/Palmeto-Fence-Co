import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const faqs = [
        {
            question: "Do you offer free estimates for fence installation in Waycross?",
            answer: "Yes! We provide 100% free, no-obligation onsite estimates for all residential and commercial projects in Waycross, Blackshear, and surrounding areas. We'll measure your property and discuss material options."
        },
        {
            question: "How long does it take to install a fence?",
            answer: "Most residential projects are completed within 1-3 days, depending on the linear footage and terrain. We pride ourselves on efficiency without sacrificing quality."
        },
        {
            question: "What is the best fence for privacy and durability?",
            answer: "For maximum privacy and low maintenance, we recommend vinyl fencing. If you prefer a natural look, pressure-treated pine or cedar privacy fences are excellent choices that withstand our local climate well."
        },
        {
            question: "Are you licensed and insured?",
            answer: "Absolutely. Palmetto Fence Co. is a fully licensed and insured woman-owned business. We carry liability insurance and workers' compensation for your peace of mind."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 text-center mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left bg-stone-50/50 hover:bg-stone-50 transition-colors"
                            >
                                <span className="font-bold text-brand-900 text-lg pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="flex-shrink-0 text-accent-600" />
                                ) : (
                                    <Plus className="flex-shrink-0 text-brand-400" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-stone-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
