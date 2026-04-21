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
    recipientEmail: string;
}

const allCaseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "Zoho for Agriculture Industry",
        description: "How a team of dedicated professionals is transforming agriculture through sustainable, tech-driven solutions.",
        image: "/images/lap/lap3.webp",
        company: "Agriculture",
        industry: "Agriculture",
        tags: ["Zoho", "Agriculture"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 2,
        title: "Zoho for Business Consulting & Services Industry Sector",
        description: "A leading managed consulting provider streamlines its operations and client management.",
        image: "/images/lap/lap6_11zon.webp",
        company: "Business Consulting",
        industry: "Business Consulting & Services",
        tags: ["Zoho", "Business Consulting & Services"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 3,
        title: "Zoho for Business Consulting & Services Industry",
        description: "Modernizing a traditional accounting ecosystem with Zoho's automated business suite.",
        image: "/images/lap/lap9_11zon.webp",
        company: "Business Consulting",
        industry: "Business Consulting & Services",
        tags: ["Zoho", "Business Consulting & Services"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 4,
        title: "Zoho for Financial Services",
        description: "Adopting a modern approach to gather, analyze, and manage mission-critical financial data.",
        image: "/images/lap/lap7_11zon.webp",
        company: "Financial Services",
        industry: "Financial Services",
        tags: ["Zoho", "Financial Services"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 5,
        title: "Zoho for Healthcare & Medical Spa Industry",
        description: "Optimizing patient workflows and clinic management for a leading medical spa provider.",
        image: "/images/people/global.webp",
        company: "Healthcare",
        industry: "Healthcare",
        tags: ["Zoho", "Healthcare"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 6,
        title: "Zoho for Media Industry",
        description: "Hosting and managing high-volume media assets with a centralized digital ecosystem.",
        image: "/images/people/laptopgirl.webp",
        company: "Media",
        industry: "Media",
        tags: ["Zoho", "Media"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 7,
        title: "Zoho for Real Estate Industry",
        description: "Replacing legacy property management systems with a unified lead and listing platform.",
        image: "/images/people/laptopmen.webp",
        company: "Real Estate",
        industry: "Real Estate",
        tags: ["Zoho", "Real Estate"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 8,
        title: "Zoho for Retail and E-Commerce Industry",
        description: "Scaling a global retail brand with integrated POS, inventory, and online sales tracking.",
        image: "/images/people/laptopgirl1.webp",
        company: "Retail & E-Commerce",
        industry: "Retail & E-Commerce",
        tags: ["Zoho", "Retail & E-Commerce"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 9,
        title: "Zoho for Security and Investigations Industry",
        description: "Enhancing investigation workflows for an internationally renowned security enterprise.",
        image: "/images/lap/lap3.webp",
        company: "Security & Investigations",
        industry: "Security & Investigations",
        tags: ["Zoho", "Security & Investigations"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 10,
        title: "Zoho for Software Development Industry",
        description: "Optimizing project delivery and resource management for a leading software development firm.",
        image: "/images/lap/lap6_11zon.webp",
        company: "Software Development",
        industry: "Software Development",
        tags: ["Zoho", "Software Development"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 11,
        title: "Zoho for Wholesale Distribution Industry",
        description: "Streamlining order fulfillment and inventory for a major wholesale audio product distributor.",
        image: "/images/lap/lap9_11zon.webp",
        company: "Wholesale Distribution",
        industry: "Wholesale Distribution",
        tags: ["Zoho", "Wholesale Distribution"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 12,
        title: "Zoho for IT Services & IT Consulting Industry",
        description: "Automating corporate travel technology services through advanced IT consulting integration.",
        image: "/images/lap/lap7_11zon.webp",
        company: "IT Services & Consulting",
        industry: "IT Services & IT Consulting",
        tags: ["Zoho", "IT Services & IT Consulting"],
        recipientEmail: "shivam@agsuitetech.com"
    }
];

const INDUSTRIES = ["All", "Agriculture", "Business Consulting & Services", "Financial Services", "Healthcare", "Media", "Real Estate", "Retail & E-Commerce", "Security & Investigations", "Software Development", "Wholesale Distribution", "IT Services & IT Consulting"];

const ZohoCaseStudiesGrid = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("All");

    // Modal State
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ 'Last Name': '', 'Designation': '', 'Mobile': '', 'Email': '', 'Company': '', 'countryCode': '+91' });

    const COUNTRY_CODES = [
        { code: '+91', label: 'IN (+91)' },
        { code: '+1', label: 'US (+1)' },
        { code: '+44', label: 'UK (+44)' },
        { code: '+971', label: 'UAE (+971)' },
        { code: '+966', label: 'KSA (+966)' },
        { code: '+974', label: 'QA (+974)' },
        { code: '+965', label: 'KW (+965)' },
        { code: '+968', label: 'OM (+968)' },
        { code: '+973', label: 'BH (+973)' },
        { code: '+65', label: 'SG (+65)' },
        { code: '+61', label: 'AU (+61)' },
        { code: '+31', label: 'NL (+31)' },
        { code: '+353', label: 'IE (+353)' },
        { code: '+49', label: 'DE (+49)' },
        { code: '+33', label: 'FR (+33)' },
        { code: '+27', label: 'ZA (+27)' },
        { code: '+852', label: 'HK (+852)' },
    ];

    const handleReadClick = (e: React.MouseEvent, study: CaseStudy) => {
        e.preventDefault();
        setSelectedStudy(study);
        setIsModalOpen(true);
        setIsSubmitted(false);
        setFormData({ 'Last Name': '', 'Designation': '', 'Mobile': '', 'Email': '', 'Company': '', 'countryCode': '+91' });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedStudy(null);
            setIsSubmitted(false);
        }, 300);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'Mobile') {
            const digits = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({ ...prev, [name]: digits }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (formData.Mobile.length !== 10) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        const response = await fetch('/api/contact/case-study', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...formData,
                Mobile: `${formData.countryCode} ${formData.Mobile}`,
                caseStudyTitle: selectedStudy?.title,
                caseStudyId: selectedStudy?.id,
                recipientEmail: selectedStudy?.recipientEmail,
                platform: 'Zoho'
            }),
        });

        if (response.ok) {
            setIsSubmitted(true);
        } else {
            alert('Something went wrong. Please try again.');
        }
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
            <div className="bg-white rounded-[2rem] shadow-xl shadow-red-900/5 border border-slate-100 p-6 md:p-8 mb-12 relative z-20">
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
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all shadow-inner font-medium"
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
                                    ? 'bg-[#eab308] text-white shadow-md'
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
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
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
                            className="mt-6 text-red-600 font-bold hover:text-red-800 transition-colors underline underline-offset-4"
                        >
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredStudies.map((study) => (
                            <div
                                key={study.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-900/10 flex flex-col group transition-all duration-300 border border-slate-100 hover:-translate-y-2 h-full"
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

                                    {/* Zoho Logo (Top Right) */}
                                    <div className="absolute top-4 right-4 bg-white shadow-lg p-2 px-3 rounded-lg flex items-center justify-center" style={{ backdropFilter: 'blur(4px)' }}>
                                        <Image
                                            src="/images/zoho logos/zoho premium.png"
                                            alt="Zoho Logo"
                                            width={110}
                                            height={30}
                                            className="h-6 sm:h-8 w-auto object-contain"
                                        />
                                    </div>

                                    {/* Industry Tag (Bottom Left) */}
                                    <div className="absolute bottom-4 left-4 bg-[#0a0a0a] text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md">
                                        {study.industry}
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white text-slate-900">
                                    <h4 className="text-[13px] font-extrabold text-[#eab308] uppercase tracking-widest mb-3 border-l-2 border-[#eab308] pl-2 flex items-center">
                                        {study.company}
                                    </h4>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#eab308] transition-colors leading-tight">
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
                                        className="mt-auto flex items-center font-bold text-[#0a0a0a] group-hover:text-[#eab308] transition-colors bg-transparent border-none p-0 cursor-pointer"
                                    >
                                        <span className="border-b-2 border-transparent group-hover:border-[#eab308] pb-0.5 transition-all text-sm uppercase tracking-wide">
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
                                <div className="bg-gradient-to-r from-[#dc2626] to-[#b91c1c] p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2 pr-8 leading-tight">
                                        Access Case Study
                                    </h3>
                                    <p className="text-red-100/90 text-sm pr-4">
                                        {selectedStudy?.title}
                                    </p>
                                </div>

                                {/* Modal Body (Form / Success) */}
                                <div className="p-6 md:p-8 text-left text-slate-800">
                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-10 h-10" />
                                            </div>
                                            <h4 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h4>
                                            <p className="text-slate-600">Your request has been received. We'll send the case study to your email shortly.</p>
                                            <button
                                                onClick={closeModal}
                                                className="mt-8 px-8 py-3 bg-[#eab308] text-white font-bold rounded-xl hover:bg-black transition-colors"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1">Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="Last Name"
                                                    required
                                                    value={formData['Last Name']}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-1">Designation *</label>
                                                    <input
                                                        type="text"
                                                        name="Designation"
                                                        required
                                                        value={formData['Designation']}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="Manager"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold text-slate-700 mb-1">Mobile *</label>
                                                    <div className="flex gap-1.5">
                                                        <select
                                                            name="countryCode"
                                                            value={formData.countryCode}
                                                            onChange={handleInputChange}
                                                            className="w-[85px] px-2 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs font-semibold"
                                                        >
                                                            {COUNTRY_CODES.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                                                        </select>
                                                        <input
                                                            type="tel"
                                                            name="Mobile"
                                                            required
                                                            value={formData['Mobile']}
                                                            onChange={handleInputChange}
                                                            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
                                                            placeholder="9876543210"
                                                            maxLength={10}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1">Business Email *</label>
                                                <input
                                                    type="email"
                                                    name="Email"
                                                    required
                                                    value={formData['Email']}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-slate-700 mb-1">Company *</label>
                                                <input
                                                    type="text"
                                                    name="Company"
                                                    required
                                                    value={formData['Company']}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                                                    placeholder="Company Name"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full py-4 bg-gradient-to-r from-[#eab308] to-[#b91c1c] text-white font-bold rounded-xl hover:shadow-lg transition-all mt-4"
                                            >
                                                Get Case Study
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

export default ZohoCaseStudiesGrid;
