import React from 'react';

const FenceGallery: React.FC = () => {
    const styles = [
        {
            title: "Wood Privacy",
            description: "Classic Shadowbox & Board-on-Board",
            image: "https://picsum.photos/id/128/600/400",
            href: "/services/wood"
        },
        {
            title: "Vinyl (PVC)",
            description: "Maintenance-Free White & Tan",
            image: "https://picsum.photos/id/250/600/400",
            href: "/services/vinyl"
        },
        {
            title: "Chain Link",
            description: "Residential & Commercial Grade",
            image: "https://picsum.photos/id/184/600/400",
            href: "/services/commercial"
        },
        {
            title: "Aluminum",
            description: "Ornamental Black Estate Fencing",
            image: "https://picsum.photos/id/192/600/400",
            href: "/services/aluminum"
        }
    ];

    return (
        <section className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-4">We Build Every Style</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        From decorative garden fences to high-security industrial perimeters, we have the material and expertise to match your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {styles.map((style) => (
                        <a key={style.title} href={style.href} className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-500 block cursor-pointer">
                            <img
                                src={style.image}
                                alt={`${style.title} Fence`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/90 via-brand-900/60 to-transparent p-6 pt-20">
                                <h3 className="text-white font-bold text-lg font-serif">{style.title}</h3>
                                <p className="text-brand-100 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {style.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FenceGallery;
