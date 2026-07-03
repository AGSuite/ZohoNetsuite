'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const ZohoCaseStudyModal = dynamic(() => import('./ZohoCaseStudyModal'), {
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
        title: "Zoho for Business Consulting & Services Industry Sector",
        description: "A leading managed consulting provider streamlines its client management and service delivery.",
        image: "/images/case-studies/cs_consulting_operations.png",
        company: "Business Consulting",
        industry: "Business Consulting & Services",
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 3,
        title: "Zoho for Financial Services",
        description: "Modernizing financial operations with an automated approach to data gathering and analysis.",
        image: "/images/case-studies/cs_financial_services.png",
        company: "Financial Services",
        industry: "Financial Services",
        recipientEmail: "shivam@agsuitetech.com"
    }
];

const ZohoCaseStudiesSlider = () => {
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
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }} />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
                <div className="w-full lg:w-[35%] flex flex-col justify-center space-y-6">
                    <div className="hidden">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium tracking-widest uppercase text-xs md:text-sm backdrop-blur-sm shadow-sm hover:bg-blue-500/20 transition-colors">
                            Case Studies
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white leading-snug tracking-tight">
                        Real Results with Zoho Solutions
                    </h2>
                    <p className="text-blue-100/80 text-lg max-w-md font-medium leading-relaxed">
                        Discover how modern businesses are leveraging the Zoho ecosystem to drive efficiency and exponential growth.
                    </p>
                    <div className="pt-4 flex items-center justify-between gap-4">
                        <Link
                            href="/zoho/case-studies"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0a0a] hover:bg-blue-50 px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            View All Case Studies
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-[65%] flex items-center relative gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">
                        {caseStudies.map((study) => (
                            <div key={study.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col group transition-transform duration-300 hover:-translate-y-2 border border-white/10">
                                <div className="relative h-56 md:h-64 w-full overflow-hidden">
                                    <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60" />
                                    <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                                        {study.industry}
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white text-slate-900">
                                    <p className="text-[13px] font-extrabold text-[#2563eb] uppercase tracking-widest mb-2 border-l-2 border-[#2563eb] pl-2">{study.company}</p>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2563eb] transition-colors leading-tight">{study.title}</h3>
                                    <p className="text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed">{study.description}</p>
                                    <button onClick={(e) => handleReadClick(e, study)} className="mt-auto flex items-center font-bold text-[#0a0a0a] group-hover:text-[#2563eb] transition-colors bg-transparent border-none p-0 cursor-pointer text-sm" suppressHydrationWarning>
                                        <span className="border-b-2 border-transparent group-hover:border-[#2563eb] pb-0.5 transition-all">Read Case Study</span>
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link href="/zoho/case-studies" aria-label="More studies" className="hidden md:flex absolute -right-6 lg:-right-8 z-20">
                        <div className="w-16 h-16 rounded-full shadow-2xl items-center justify-center bg-white flex border-2 border-slate-100 group" style={{ animation: 'slideArrow 1.5s ease-in-out infinite' }}>
                            <ChevronRight className="w-8 h-8 text-[#001f5c] group-hover:scale-110" />
                        </div>
                        <style>{`@keyframes slideArrow { 0%,100%{transform:translateX(0)} 50%{transform:translateX(8px)} }`}</style>
                    </Link>
                </div>
            </div>

            {/* Popup Modal */}
            <ZohoCaseStudyModal
                isOpen={isModalOpen}
                selectedStudy={selectedStudy}
                closeModal={closeModal}
            />
        </section>
    );
};

export default ZohoCaseStudiesSlider;




