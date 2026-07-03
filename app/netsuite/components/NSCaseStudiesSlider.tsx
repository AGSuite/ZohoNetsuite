'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const CaseStudyModal = dynamic(() => import('./CaseStudyModal'), {
    ssr: false
});

interface CaseStudy {
    id: number;
    title: string;
    description: string;
    image: string;
    company: string;
    industry: string;
    recipientEmail: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: 2,
        title: "NetSuite for Software Technology",
        description: "The company is an investment and wealth management organization.",
        image: "/images/Netsuite Latest Images/Case study/Netsute for Software technology and deployment services.webp",
        company: "Software and Technology",
        industry: "Software and Technology",
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 3,
        title: "NetSuite for Professional Services",
        description: "The Company is a comprehensive biopharmaceutical consulting organization.",
        image: "/images/Netsuite Latest Images/Case study/Netsuite for IT and profesionals services.webp",
        company: "IT & Professional Services",
        industry: "IT & Professional Services",
        recipientEmail: "shivam@agsuitetech.com"
    }
];

const NSCaseStudiesSlider = () => {
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleReadClick = (e: React.MouseEvent, study: CaseStudy) => {
        e.preventDefault();
        setSelectedStudy(study);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedStudy(null);
        }, 300);
    };

    return (
        <section
            className="py-20 md:py-28 relative overflow-hidden font-['DM_Sans',sans-serif] scroll-mt-36"
            style={{ background: "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)" }}
        >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }} />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">

                {/* LEFT SIDE: Text & Controls */}
                <div className="w-full lg:w-[35%] flex flex-col justify-center space-y-6">
                    <div>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium tracking-widest uppercase text-xs md:text-sm backdrop-blur-sm shadow-sm hover:bg-blue-500/20 transition-colors">
                            Success Stories
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300 leading-snug tracking-tight">
                        Real Results with Oracle NetSuite
                    </h2>
                    <p className="text-blue-100/80 text-lg max-w-md font-medium leading-relaxed">
                        Discover how fast-growing businesses across industries are transforming their operations and scaling seamlessly.
                    </p>

                    <div className="pt-4 flex items-center justify-between gap-4">
                        <Link
                            href="/netsuite/case-studies"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0a0a] hover:bg-blue-50 px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            View All Case Studies
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* RIGHT SIDE: 2 Cards + Edge Arrow */}
                <div className="w-full lg:w-[65%] flex items-center relative gap-6">

                    {/* The Two Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">
                        {caseStudies.map((study) => (
                            <div
                                key={study.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col group transition-transform duration-300 hover:-translate-y-2 border border-white/10"
                            >
                                {/* Image Box */}
                                <div className="relative h-56 md:h-64 w-full overflow-hidden">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60" />


                                    {/* Industry Tag (Bottom Left) */}
                                    <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                                        {study.industry}
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white text-slate-900">
                                    <h4 className="text-[13px] font-extrabold text-[#2563eb] uppercase tracking-widest mb-2 border-l-2 border-[#2563eb] pl-2">
                                        {study.company}
                                    </h4>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2563eb] transition-colors leading-tight">
                                        {study.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                                        {study.description}
                                    </p>

                                    <button
                                        onClick={(e) => handleReadClick(e, study)}
                                        className="mt-auto flex items-center font-bold text-[#0a0a0a] group-hover:text-[#2563eb] transition-colors bg-transparent border-none p-0 cursor-pointer"
                                        suppressHydrationWarning
                                    >
                                        <span className="border-b-2 border-transparent group-hover:border-[#2563eb] pb-0.5 transition-all">
                                            Read Case Study
                                        </span>
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT EDGE ARROW */}
                    <Link
                        href="/netsuite/case-studies"
                        aria-label="View more case studies"
                        className="hidden md:flex absolute -right-6 lg:-right-8 z-20"
                    >
                        <motion.div
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-16 h-16 rounded-full shadow-2xl items-center justify-center bg-white hover:bg-blue-50 flex border-2 border-slate-100 group transition-all"
                        >
                            <ChevronRight className="w-8 h-8 text-[#001f5c] group-hover:scale-110 transition-transform" />
                        </motion.div>
                    </Link>
                </div>

                {/* Mobile View More Arrow */}
                <div className="md:hidden flex justify-center w-full pt-4">
                    <Link
                        href="/netsuite/case-studies"
                        aria-label="View more case studies"
                        className="flex items-center gap-2 text-white font-bold bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors border border-white/10"
                    >
                        See More Case Studies <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

            </div>

            {/* Popup Modal */}
            <CaseStudyModal
                isOpen={isModalOpen}
                selectedStudy={selectedStudy}
                closeModal={closeModal}
            />
        </section>
    );
};

export default NSCaseStudiesSlider;




