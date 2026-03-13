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
        title: "Scaling Manufacturing Operations Globally",
        description: "How a leading manufacturer streamlined supply chain and reduced operational costs by 30% with NetSuite's advanced manufacturing module.",
        image: "/images/lap/lap3.webp",
        company: "Global Tech Mfg",
        industry: "Manufacturing",
        tags: ["ERP", "Supply Chain", "Global"]
    },
    {
        id: 2,
        title: "Omnichannel Retail Revolution",
        description: "A fast-growing retail brand unified their online and offline sales, boosting customer satisfaction and achieving 99% inventory accuracy.",
        image: "/images/lap/lap6_11zon.webp",
        company: "Urban Retail Co.",
        industry: "Retail",
        tags: ["Omnichannel", "Inventory", "CRM"]
    },
    {
        id: 3,
        title: "Streamlining Professional Services",
        description: "Professional services firm automated resource planning and billing, increasing project margins by 25%.",
        image: "/images/lap/lap9_11zon.webp",
        company: "Apex Consulting",
        industry: "Services",
        tags: ["SRP", "Project Management", "Billing"]
    },
    {
        id: 4,
        title: "Transforming Wholesale Distribution",
        description: "Wholesale distributor automated warehouse management, reducing order fulfillment time by 40%.",
        image: "/images/lap/lap7_11zon.webp",
        company: "Prime Distro",
        industry: "Distribution",
        tags: ["WMS", "Order Management"]
    },
    {
        id: 5,
        title: "Software & SaaS Growth Engine",
        description: "SaaS company utilized NetSuite for advanced revenue recognition, easing their IPO process and financial reporting.",
        image: "/images/people/global.webp",
        company: "CloudSync Inc.",
        industry: "Software",
        tags: ["Revenue Recognition", "Financials"]
    },
    {
        id: 6,
        title: "Healthcare Equipment Tracking",
        description: "Medical device supplier implemented advanced serial tracking and compliance reporting, saving hundreds of hours monthly.",
        image: "/images/people/laptopgirl.webp",
        company: "MedEquip Solutions",
        industry: "Healthcare",
        tags: ["Compliance", "Tracking", "Inventory"]
    },
    {
        id: 7,
        title: "Non-Profit Financial Transparency",
        description: "Global NGO replaced five disparate systems with NetSuite, automating grant accounting and global consolidations.",
        image: "/images/people/laptopmen.webp",
        company: "Earth Alliance",
        industry: "Non-Profit",
        tags: ["Financials", "Global"]
    },
    {
        id: 8,
        title: "Automotive Parts Distribution",
        description: "B2B auto parts distributor scaled B2B eCommerce with SuiteCommerce, increasing average order value by 15%.",
        image: "/images/people/laptopgirl1.webp",
        company: "AutoPro Parts",
        industry: "Distribution",
        tags: ["SuiteCommerce", "B2B"]
    }
];

const INDUSTRIES = ["All", "Manufacturing", "Retail", "Services", "Distribution", "Software", "Healthcare", "Non-Profit"];

const NSCaseStudiesGrid = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("All");

    // Modal State
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', designation: '', phone: '', email: '' });

    const handleReadClick = (e: React.MouseEvent, study: CaseStudy) => {
        e.preventDefault();
        setSelectedStudy(study);
        setIsModalOpen(true);
        setIsSubmitted(false);
        setFormData({ name: '', designation: '', phone: '', email: '' });
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#2563eb] transition-colors line-clamp-2">
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
                                    <p className="text-blue-100/90 text-sm line-clamp-2">
                                        {selectedStudy?.title}
                                    </p>
                                </div>

                                {/* Modal Body (Form / Success) */}
                                <div className="p-6 md:p-8 text-left text-slate-800">
                                    {isSubmitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-center py-6"
                                        >
                                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle2 className="w-8 h-8" />
                                            </div>
                                            <h4 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h4>
                                            <p className="text-slate-600">
                                                The case study has been sent to your email.
                                            </p>
                                            <button
                                                onClick={closeModal}
                                                className="mt-8 w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-medium transition-colors"
                                            >
                                                Close Window
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <p className="text-sm text-slate-500 mb-4">
                                                Please fill out the form below to read the full case study.
                                            </p>

                                            <div>
                                                <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-sm"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="designation" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1">Designation *</label>
                                                <input
                                                    type="text"
                                                    name="designation"
                                                    required
                                                    value={formData.designation}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-sm"
                                                    placeholder="e.g. CEO, IT Manager"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1">Phone No. *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-sm"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-sm"
                                                    placeholder="john@company.com"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full mt-2 bg-gradient-to-r from-[#001f5c] to-[#0a0a0a] hover:from-[#0a0a0a] hover:to-[#0a0a0a] text-white py-4 rounded-xl font-bold tracking-wide transition-all shadow-lg active:scale-[0.98]"
                                            >
                                                Read Full Study
                                            </button>
                                        </form>
                                    )}
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
