'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import 'intl-tel-input/styles';

const IntlTelInput = dynamic(() => import('@intl-tel-input/react/with-utils'), {
    ssr: false,
    loading: () => (
        <input
            type="tel"
            id="modal-phone"
            required
            placeholder="Mobile number"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
    ),
});

interface CaseStudy {
    id: number;
    title: string;
    description: string;
    image: string;
    company: string;
    industry: string;
    tags: string[];
    recipientEmail: string; // Respective email for each case study
}

const allCaseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "NetSuite for Software Technology and Mobility Solutions",
        description: "The Company specializes in Ride-Hailing & Information Technology.",
        image: "/images/Netsuite Latest Images/Case study/Netsuite For Mobility Solution.webp",
        company: "Software and Technology",
        industry: "Software and Technology",
        tags: ["NetSuite", "Software and Technology"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 2,
        title: "NetSuite for Software Technology",
        description: "The company is an investment and wealth management organization.",
        image: "/images/Netsuite Latest Images/Case study/Netsute for Software technology and deployment services.webp",
        company: "Software and Technology",
        industry: "Software and Technology",
        tags: ["NetSuite", "Software and Technology"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 3,
        title: "NetSuite for Software Technology and Development Services",
        description: "One of the top companies in the software development sector.",
        image: "/images/Netsuite Latest Images/Case study/Netsuite for Software technology and Deployment Services.jpeg",
        company: "Software and Technology",
        industry: "Software and Technology",
        tags: ["NetSuite", "Software and Technology"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 4,
        title: "NetSuite for Professional Services",
        description: "The Company is a comprehensive biopharmaceutical consulting organization.",
        image: "/images/Netsuite Latest Images/Case study/Netsuite for IT and profesionals services.webp",
        company: "IT & Professional Services",
        industry: "IT & Professional Services",
        tags: ["IT & Professional Services", "NetSuite"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 5,
        title: "NetSuite for Wholesale Distribution Sector",
        description: "The Company is an independent and family-owned fastener supplier.",
        image: "/images/Netsuite Latest Images/Case study/NetSuite_for_Wholesale_Distribution.webp",
        company: "Wholesale Distribution",
        industry: "Wholesale Distribution",
        tags: ["NetSuite", "Wholesale Distribution"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 6,
        title: "NetSuite for Wholesale Distribution",
        description: "The Company specializes in the design and manufacture of high-quality products.",
        image: "/images/Netsuite Latest Images/Case study/NetSuite_for_Wholesale_Distribution_2.jpeg",
        company: "Wholesale Distribution",
        industry: "Wholesale Distribution",
        tags: ["NetSuite", "Wholesale Distribution"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 7,
        title: "Netsuite for Advertising Services",
        description: "One of the leading companies in the advertising and digital marketing industry.",
        image: "/images/Netsuite Latest Images/Case study/Netsuite_for_Advertising_Services_202605221318_11zon.jpeg",
        company: "Advertising",
        industry: "Advertising and Digital Marketing Agencies",
        tags: ["Advertising and Digital Marketing Agencies", "NetSuite"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 8,
        title: "NetSuite for Retail Sector",
        description: "The Company is a leading, specialist supplier of retail and e-commerce solutions.",
        image: "/images/Netsuite Latest Images/Case study/NetSuite_for_Retail_Sector_202605221321_11zon.webp",
        company: "Retail & E-Commerce",
        industry: "Retail & E-Commerce",
        tags: ["NetSuite", "Retail & E-Commerce"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 9,
        title: "NetSuite for Manufacturing Services",
        description: "The company was established 15 years ago to provide top-tier manufacturing services.",
        image: "/images/Netsuite Latest Images/Case study/NetSuite_for_Manufacturing_Services_202605221327_11zon.webp",
        company: "Manufacturing",
        industry: "Manufacturing",
        tags: ["Manufacturing", "NetSuite"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 10,
        title: "NetSuite for Healthcare Services",
        description: "A leading integrated healthcare delivery service provider in the region.",
        image: "/images/Netsuite Latest Images/Case study/NetSuite_for_Healthcare_Services_202605221331 (1)_11zon.webp",
        company: "Services",
        industry: "Services",
        tags: ["NetSuite", "Services"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 11,
        title: "NetSuite for Food & Beverage",
        description: "One of the leading dry fruits and nuts providers offering premium quality products.",
        image: "/images/Netsuite Latest Images/Case study/NetSuite_for_Food_&_Beverage_202605221333_11zon.webp",
        company: "Food & Beverage",
        industry: "Services",
        tags: ["NetSuite", "Services"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 12,
        title: "NetSuite for Civil Engineering",
        description: "One of the top consulting firms in the civil engineering and construction sector.",
        image: "/images/Netsuite Latest Images/Case study/NetSuite_for_Civil_Engineering_202605221438_11zon.webp",
        company: "Civil Engineering",
        industry: "Services",
        tags: ["NetSuite", "Services"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 13,
        title: "NetSuite for CAD Design and Drafting Services",
        description: "The company outsourced CAD services to companies all over the world.",
        image: "/images/Netsuite Latest Images/Case study/CAD_Services_NetSuite_case_study_202605221547_11zon.jpeg",
        company: "CAD Services",
        industry: "Services",
        tags: ["NetSuite", "Services"],
        recipientEmail: "shivam@agsuitetech.com"
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
    const [formData, setFormData] = useState({ 'Last Name': '', 'Designation': '', 'Mobile': '', 'Email': '', 'Company': '', 'countryCode': '' });
    const [isMobileValid, setIsMobileValid] = useState(false);

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
        setFormData({ 'Last Name': '', 'Designation': '', 'Mobile': '', 'Email': '', 'Company': '', 'countryCode': '' });
        setIsMobileValid(false);
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

        if (!isMobileValid) {
            alert('Please enter a valid mobile number.');
            return;
        }

        const response = await fetch('/api/contact/case-study', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...formData,
                Mobile: formData.Mobile,
                caseStudyTitle: selectedStudy?.title,
                caseStudyId: selectedStudy?.id,
                recipientEmail: selectedStudy?.recipientEmail,
                platform: 'NetSuite'
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
                            suppressHydrationWarning
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
                                suppressHydrationWarning
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
                            suppressHydrationWarning
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
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60" />


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
                                        suppressHydrationWarning
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
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000]"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-full max-w-md bg-white rounded-3xl shadow-2xl z-[1001] overflow-y-auto max-h-[90vh]"
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
                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-10 h-10" />
                                            </div>
                                            <h4 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h4>
                                            <p className="text-slate-600">Your request has been received. We'll send the case study to your email shortly.</p>
                                            <button
                                                onClick={closeModal}
                                                className="mt-8 px-8 py-3 bg-[#001f5c] text-white font-bold rounded-xl hover:bg-black transition-colors"
                                                suppressHydrationWarning
                                            >
                                                Close
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                                                    <input
                                                        type="text"
                                                        name="Last Name"
                                                        required
                                                        value={formData['Last Name']}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                                                        placeholder="John Doe"
                                                        suppressHydrationWarning
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 mb-1">Designation *</label>
                                                    <input
                                                        type="text"
                                                        name="Designation"
                                                        required
                                                        value={formData['Designation']}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                                                        placeholder="Manager"
                                                        suppressHydrationWarning
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile *</label>
                                                <div className="w-full text-slate-900">
                                                    <IntlTelInput
                                                        value={formData.Mobile}
                                                        onChangeNumber={(val) => {
                                                            setFormData(prev => ({ ...prev, Mobile: val }));
                                                        }}
                                                        onChangeValidity={(isValid) => {
                                                            setIsMobileValid(isValid);
                                                        }}
                                                        initialCountry="in"
                                                        separateDialCode={true}
                                                        strictMode={true}
                                                        countryOrder={["in", "us", "gb", "ae"]}
                                                        inputProps={{
                                                            className: "w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm",
                                                            placeholder: "Enter mobile number",
                                                            required: true
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                                                    <input
                                                        type="email"
                                                        name="Email"
                                                        required
                                                        value={formData['Email']}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                                                        placeholder="john@company.com"
                                                        suppressHydrationWarning
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 mb-1">Company *</label>
                                                    <input
                                                        type="text"
                                                        name="Company"
                                                        required
                                                        value={formData['Company']}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                                                        placeholder="Company Name"
                                                        suppressHydrationWarning
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full py-4 bg-gradient-to-r from-[#001f5c] to-[#0a0a0a] text-white font-bold rounded-xl hover:shadow-lg transition-all mt-4"
                                                suppressHydrationWarning
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
            <style dangerouslySetInnerHTML={{
                __html: `
                .iti { display: block !important; width: 100% !important; }
                .iti__country-list { color: #000000 !important; }
            `}} />
        </div>
    );
};

export default NSCaseStudiesGrid;




