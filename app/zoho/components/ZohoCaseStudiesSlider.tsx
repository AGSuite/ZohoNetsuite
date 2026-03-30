'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight, X, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
    id: number;
    title: string;
    description: string;
    image: string;
    company: string;
    industry: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: 2,
        title: "Zoho for Business Consulting & Services Industry Sector",
        description: "A leading managed consulting provider streamlines its client management and service delivery.",
        image: "/images/lap/lap6_11zon.webp",
        company: "Business Consulting",
        industry: "Business Consulting & Services"
    },
    {
        id: 3,
        title: "Zoho for Financial Services",
        description: "Modernizing financial operations with an automated approach to data gathering and analysis.",
        image: "/images/lap/lap7_11zon.webp",
        company: "Financial Services",
        industry: "Financial Services"
    }
];

const ZohoCaseStudiesSlider = () => {
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ 'Last Name': '', 'Designation': '', 'Mobile': '', 'Email': '', 'Company': '' });

    const handleReadClick = (e: React.MouseEvent, study: CaseStudy) => {
        e.preventDefault();
        setSelectedStudy(study);
        setIsModalOpen(true);
        setIsSubmitted(false);
        setFormData({ 'Last Name': '', 'Designation': '', 'Mobile': '', 'Email': '', 'Company': '' });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedStudy(null);
            setIsSubmitted(false);
        }, 300);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body = new URLSearchParams({
            xnQsjsdp: 'aeb83282318cb02a8ccb07763a35cce40b6e959704c1e51bf9269ecfce4b7b52',
            xmIwtLD: 'e999bc5b9d911a3cd702e241d595159f390ceb7d74d14b6dc70f151887d84a6d5d7f808be7b5ef7c1fa4ebea17c2d735',
            actionType: 'TGVhZHM=',
            returnURL: 'null',
            zc_gad: '',
            'Last Name': formData['Last Name'],
            Designation: formData['Designation'],
            Mobile: formData['Mobile'],
            Email: formData['Email'],
            Company: formData['Company'],
            Description: `Requested Case Study: ${selectedStudy?.title}`,
        });
        fetch('https://crm.zoho.in/crm/WebToLeadForm', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: body.toString(),
        });
        setIsSubmitted(true);
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
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-rose-400 leading-snug tracking-tight">
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
                                    <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60" />
                                    <div className="absolute top-4 right-4 bg-white shadow-lg p-2 px-3 rounded-lg flex items-center justify-center" style={{ backdropFilter: 'blur(4px)' }}>
                                        <Image
                                            src="/images/zoho logos/zoho premium.png"
                                            alt="Zoho Logo"
                                            width={110}
                                            height={30}
                                            className="h-6 sm:h-8 w-auto object-contain"
                                        />
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                                        {study.industry}
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white text-slate-900">
                                    <p className="text-[13px] font-extrabold text-[#2563eb] uppercase tracking-widest mb-2 border-l-2 border-[#2563eb] pl-2">{study.company}</p>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2563eb] transition-colors leading-tight">{study.title}</h3>
                                    <p className="text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed">{study.description}</p>
                                    <button onClick={(e) => handleReadClick(e, study)} className="mt-auto flex items-center font-bold text-[#0a0a0a] group-hover:text-[#2563eb] transition-colors bg-transparent border-none p-0 cursor-pointer text-sm">
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

            <AnimatePresence>
                {isModalOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]" />
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden">
                            <div className="relative">
                                <button onClick={closeModal} className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-black/20 rounded-full text-white z-10"><X className="w-5 h-5" /></button>
                                <div className="bg-gradient-to-r from-[#001f5c] to-[#0a0a0a] p-6 text-white"><h2 className="text-xl font-bold mb-2 pr-8 leading-tight">Access Zoho Case Study</h2><p className="text-blue-100/90 text-sm pr-4">{selectedStudy?.title}</p></div>
                                <div className="p-6 md:p-8 text-left text-slate-800">
                                    <iframe 
                                        src="https://crm.zoho.in/crm/WebFormServeServlet?rid=bb4b0617c340619de1172c4e88a6168efcd072362b1960f18710725b4a562d7f779e62a2f104e2e43439fe2010aaf9d1gid6c22d9b2008ecf3fcfeff53f1607c09e903786de4923a2f7bac9742fed07c2b5"
                                        className="w-full h-[500px]"
                                        frameBorder="0"
                                        title="Read Case Study Form"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ZohoCaseStudiesSlider;
