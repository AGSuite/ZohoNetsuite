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
            {/* Custom Case Studies Hero Section */}
            <section className="relative w-full min-h-[70vh] flex flex-col justify-center bg-gradient-to-br from-[#0a0a0a] via-[#000d2b] to-[#001f5c] text-white pt-32 pb-40 md:pb-48 overflow-hidden font-['DM_Sans',sans-serif]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/people/laptopmen.webp"
                        alt="Case Studies Background"
                        fill
                        className="object-cover opacity-20 mix-blend-luminosity"
                        priority
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
                </div>

                <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
                    <span className="text-blue-300 font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">
                        Customer Success Stories
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight shadow-sm max-w-5xl">
                        Real Results with <br className="hidden md:block" /> Oracle NetSuite
                    </h1>
                    <p className="text-lg md:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium">
                        Explore our library of case studies to see how we've helped businesses across industries scale, automate processes, and achieve real-time visibility with the world's #1 Cloud ERP.
                    </p>
                </div>
            </section>

            <div className="pb-20 relative z-20 -mt-28 md:-mt-32">
                <NSCaseStudiesGrid />
            </div>
        </div>
    );
}
