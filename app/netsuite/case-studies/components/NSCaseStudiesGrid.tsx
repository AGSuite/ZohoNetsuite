'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, X, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
    id: number;
    title: string;
    description: string;
    image: string;
    company: string;
    industry: string;
    tags: string[];
}

const allCaseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "NetSuite for Software Technology and Mobility Solutions",
        description: "The Company specializes in Ride-Hailing & Information Technology.",
        image: "/images/lap/lap3.webp",
        company: "Software and Technology",
        industry: "Software and Technology",
        tags: ["NetSuite", "Software and Technology"]
    },
    {
        id: 2,
        title: "NetSuite for Software Technology",
        description: "The company is an investment and wealth management organization.",
        image: "/images/lap/lap6_11zon.webp",
        company: "Software and Technology",
        industry: "Software and Technology",
        tags: ["NetSuite", "Software and Technology"]
    },
    {
        id: 3,
        title: "NetSuite for Software Technology and Development Services",
        description: "One of the top companies in the software development sector.",
        image: "/images/lap/lap9_11zon.webp",
        company: "Software and Technology",
        industry: "Software and Technology",
        tags: ["NetSuite", "Software and Technology"]
    },
    {
        id: 4,
        title: "NetSuite for Professional Services",
        description: "The Company is a comprehensive biopharmaceutical consulting organization.",
        image: "/images/lap/lap7_11zon.webp",
        company: "IT & Professional Services",
        industry: "IT & Professional Services",
        tags: ["IT & Professional Services", "NetSuite"]
    },
    {
        id: 5,
        title: "NetSuite for Wholesale Distribution Sector",
        description: "The Company is an independent and family-owned fastener supplier.",
        image: "/images/people/global.webp",
        company: "Wholesale Distribution",
        industry: "Wholesale Distribution",
        tags: ["NetSuite", "Wholesale Distribution"]
    },
    {
        id: 6,
        title: "NetSuite for Wholesale Distribution",
        description: "The Company specializes in the design and manufacture of high-quality products.",
        image: "/images/people/laptopgirl.webp",
        company: "Wholesale Distribution",
        industry: "Wholesale Distribution",
        tags: ["NetSuite", "Wholesale Distribution"]
    },
    {
        id: 7,
        title: "Netsuite for Advertising Services",
        description: "One of the leading companies in the advertising and digital marketing industry.",
        image: "/images/people/laptopmen.webp",
        company: "Advertising",
        industry: "Advertising and Digital Marketing Agencies",
        tags: ["Advertising and Digital Marketing Agencies", "NetSuite"]
    },
    {
        id: 8,
        title: "NetSuite for Retail Sector",
        description: "The Company is a leading, specialist supplier of retail and e-commerce solutions.",
        image: "/images/people/laptopgirl1.webp",
        company: "Retail & E-Commerce",
        industry: "Retail & E-Commerce",
        tags: ["NetSuite", "Retail & E-Commerce"]
    },
    {
        id: 9,
        title: "NetSuite for Manufacturing Services",
        description: "The company was established 15 years ago to provide top-tier manufacturing services.",
        image: "/images/lap/lap3.webp",
        company: "Manufacturing",
        industry: "Manufacturing",
        tags: ["Manufacturing", "NetSuite"]
    },
    {
        id: 10,
        title: "NetSuite for Healthcare Services",
        description: "A leading integrated healthcare delivery service provider in the region.",
        image: "/images/lap/lap6_11zon.webp",
        company: "Services",
        industry: "Services",
        tags: ["NetSuite", "Services"]
    },
    {
        id: 11,
        title: "NetSuite for Food & Beverage",
        description: "One of the leading dry fruits and nuts providers offering premium quality products.",
        image: "/images/lap/lap9_11zon.webp",
        company: "Food & Beverage",
        industry: "Services",
        tags: ["NetSuite", "Services"]
    },
    {
        id: 12,
        title: "NetSuite for Civil Engineering",
        description: "One of the top consulting firms in the civil engineering and construction sector.",
        image: "/images/lap/lap7_11zon.webp",
        company: "Civil Engineering",
        industry: "Services",
        tags: ["NetSuite", "Services"]
    },
    {
        id: 13,
        title: "NetSuite for CAD Design and Drafting Services",
        description: "The company outsourced CAD services to companies all over the world.",
        image: "/images/people/global.webp",
        company: "CAD Services",
        industry: "Services",
        tags: ["NetSuite", "Services"]
    }
];

const INDUSTRIES = ["All", "Software and Technology", "IT & Professional Services", "Wholesale Distribution", "Advertising and Digital Marketing Agencies", "Retail & E-Commerce", "Manufacturing", "Services"];

const NSCaseStudiesGrid = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("All");

    // Modal State
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

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const filteredStudies = useMemo(() => {
        return allCaseStudies.filter((study) => {
            const matchesSearch =
                study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                study.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                study.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;

            return matchesSearch && matchesIndustry;
        });
    }, [searchQuery, selectedIndustry]);

    return (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 font-['DM_Sans',sans-serif] pt-12">

            {/* Filter & Search Bar Section */}
            <div className="bg-white rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100 p-6 md:p-8 mb-12 relative z-20">
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

                    {/* Search Bar */}
                    <div className="relative w-full lg:w-96 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by company, title, or keyword..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner font-medium"
                        />
                    </div>

                    {/* Filter Pills */}
                    <div className="w-full flex items-center gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x whitespace-nowrap">
                        <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-wider text-xs mr-2 shrink-0">
                            <Filter className="w-4 h-4" /> Filter by:
                        </div>
                        {INDUSTRIES.map((industry) => (
                            <button
                                key={industry}
                                onClick={() => setSelectedIndustry(industry)}
                                className={`snap-start shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${selectedIndustry === industry
                                    ? 'bg-[#001f5c] text-white shadow-md'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                                    }`}
                            >
                                {industry}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid display */}
            <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flexItems-center gap-2">
                    Showing {filteredStudies.length} Case Studies
                </h3>

                {filteredStudies.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
                        <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-2">No results found</h4>
                        <p className="text-slate-500">Try adjusting your search query or filters.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedIndustry("All"); }}
                            className="mt-6 text-blue-600 font-bold hover:text-blue-800 transition-colors underline underline-offset-4"
                        >
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredStudies.map((study) => (
                            <div
                                key={study.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col group transition-all duration-300 border border-slate-100 hover:-translate-y-2 h-full"
                            >
                                {/* Image Box */}
                                <div className="relative h-56 w-full overflow-hidden shrink-0">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60" />

                                    {/* NetSuite Logo (Top Right) */}
                                    <div className="absolute top-4 right-4 bg-white shadow-lg p-2 px-3 rounded-lg flex items-center justify-center" style={{ backdropFilter: 'blur(4px)' }}>
                                        <Image
                                            src="/images/logos/oracle netsuite logo.png"
                                            alt="Oracle NetSuite Logo"
                                            width={110}
                                            height={30}
                                            className="h-5 sm:h-6 w-auto object-contain"
                                        />
                                    </div>

                                    {/* Industry Tag (Bottom Left) */}
                                    <div className="absolute bottom-4 left-4 bg-[#0a0a0a] text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md">
                                        {study.industry}
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white text-slate-900">
                                    <h4 className="text-[13px] font-extrabold text-[#2563eb] uppercase tracking-widest mb-3 border-l-2 border-[#2563eb] pl-2 flex items-center">
                                        {study.company}
                                    </h4>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2563eb] transition-colors leading-tight">
                                        {study.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed text-sm">
                                        {study.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={(e) => handleReadClick(e, study)}
                                        className="mt-auto flex items-center font-bold text-[#0a0a0a] group-hover:text-[#2563eb] transition-colors bg-transparent border-none p-0 cursor-pointer"
                                    >
                                        <span className="border-b-2 border-transparent group-hover:border-[#2563eb] pb-0.5 transition-all text-sm uppercase tracking-wide">
                                            Read Full Story
                                        </span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden"
                        >
                            <div className="relative">
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-black/20 rounded-full text-white transition-colors z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Modal Header */}
                                <div className="bg-gradient-to-r from-[#001f5c] to-[#0a0a0a] p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2 pr-8 leading-tight">
                                        Access Case Study
                                    </h3>
                                    <p className="text-blue-100/90 text-sm pr-4">
                                        {selectedStudy?.title}
                                    </p>
                                </div>

                                {/* Modal Body (Form / Success) */}
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

            <style jsx>{`
                /* Hide scrollbar */
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default NSCaseStudiesGrid;
