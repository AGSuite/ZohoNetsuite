import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "NetSuite Case Studies | AGSuite Technologies",
    description: "Read how AGSuite Technologies has helped fast-growing enterprises transform their business with Oracle NetSuite cloud ERP solutions.",
    openGraph: {
        title: "NetSuite Case Studies & Success Stories",
        description: "Discover real-world results of NetSuite implementations across various industries.",
    },
};

const NSCaseStudiesGrid = dynamic(() => import('./components/NSCaseStudiesGrid').then(mod => mod.default), {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-3xl mx-auto max-w-7xl my-16" />
});

export default function CaseStudiesPage() {
    return (
        <div className="relative bg-slate-50 min-h-screen">
            {/* ── Case Studies Hero ── */}
            <section className="relative w-full flex flex-col justify-center bg-gradient-to-br from-[#0a0a0a] via-[#000d2b] to-[#001f5c] text-white py-40 overflow-hidden font-['DM_Sans',sans-serif]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/people/fourteam.webp"
                        alt="Case Studies Background"
                        fill
                        className="object-cover opacity-20 mix-blend-luminosity"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
                </div>

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
                {/* Glow blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl w-full mx-auto px-6 text-center flex flex-col items-center">
                    <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium tracking-widest uppercase text-xs md:text-sm mb-6 backdrop-blur-sm shadow-sm hover:bg-white/15 transition-colors">
                        Customer Success Stories
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
                        From Complexity to Clarity:{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400">
                            Scaling Ambitious Brands
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed font-medium">
                        Discover how industry leaders are transforming their operations and driving remarkable growth with Oracle NetSuite and AGSuite.
                    </p>
                </div>
            </section>

            {/* Filter + Grid — sits naturally below hero, no negative margin */}
            <div className="pb-20 relative z-20">
                <NSCaseStudiesGrid />
            </div>
        </div>
    );
}




