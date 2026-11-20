'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import dynamic from 'next/dynamic';

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
    image?: string;
    company: string;
    industry: string;
    tags: string[];
    recipientEmail: string;
    ctaEnabled?: boolean;
    pdfUrl?: string;
}

const allCaseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "Zoho for Agriculture Industry",
        description: "How a team of dedicated professionals is transforming agriculture through sustainable, tech-driven solutions.",
        image: "/images/case-studies/cards/01-agriculture.webp",
        company: "Agriculture",
        industry: "Agriculture",
        tags: ["Zoho", "Agriculture"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 2,
        title: "Zoho for Business Consulting & Services Industry Sector",
        description: "A leading managed consulting provider streamlines its operations and client management.",
        image: "/images/case-studies/cards/02-business-consulting-operations.webp",
        company: "Business Consulting",
        industry: "Business Consulting & Services",
        tags: ["Zoho", "Business Consulting & Services"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 3,
        title: "Zoho for Business Consulting & Services Industry",
        description: "Modernizing a traditional accounting ecosystem with Zoho's automated business suite.",
        image: "/images/case-studies/cards/03-business-consulting-accounting.webp",
        company: "Business Consulting",
        industry: "Business Consulting & Services",
        tags: ["Zoho", "Business Consulting & Services"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 4,
        title: "Zoho for Financial Services",
        description: "Adopting a modern approach to gather, analyze, and manage mission-critical financial data.",
        image: "/images/case-studies/cards/04-financial-services-office.webp",
        company: "Financial Services",
        industry: "Financial Services",
        tags: ["Zoho", "Financial Services"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 5,
        title: "Zoho for Healthcare & Medical Spa Industry",
        description: "Optimizing patient workflows and clinic management for a leading medical spa provider.",
        image: "/images/case-studies/cards/05-healthcare-medical-spa.webp",
        company: "Healthcare",
        industry: "Healthcare",
        tags: ["Zoho", "Healthcare"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 6,
        title: "Zoho for Media Industry",
        description: "Hosting and managing high-volume media assets with a centralized digital ecosystem.",
        image: "/images/case-studies/cards/06-media.webp",
        company: "Media",
        industry: "Media",
        tags: ["Zoho", "Media"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 7,
        title: "Zoho for Real Estate Industry",
        description: "Replacing legacy property management systems with a unified lead and listing platform.",
        image: "/images/case-studies/cards/07-real-estate.webp",
        company: "Real Estate",
        industry: "Real Estate",
        tags: ["Zoho", "Real Estate"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 8,
        title: "Zoho for Retail and E-Commerce Industry",
        description: "Scaling a global retail brand with integrated POS, inventory, and online sales tracking.",
        image: "/images/case-studies/cards/08-retail-ecommerce.webp",
        company: "Retail & E-Commerce",
        industry: "Retail & E-Commerce",
        tags: ["Zoho", "Retail & E-Commerce"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 9,
        title: "Zoho for Security and Investigations Industry",
        description: "Enhancing investigation workflows for an internationally renowned security enterprise.",
        image: "/images/case-studies/cards/09-security-investigations.webp",
        company: "Security & Investigations",
        industry: "Security & Investigations",
        tags: ["Zoho", "Security & Investigations"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 10,
        title: "Zoho for Software Development Industry",
        description: "Optimizing project delivery and resource management for a leading software development firm.",
        image: "/images/case-studies/cards/10-software-development.webp",
        company: "Software Development",
        industry: "Software Development",
        tags: ["Zoho", "Software Development"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 11,
        title: "Zoho for Wholesale Distribution Industry",
        description: "Streamlining order fulfillment and inventory for a major wholesale audio product distributor.",
        image: "/images/case-studies/cards/11-wholesale-distribution.webp",
        company: "Wholesale Distribution",
        industry: "Wholesale Distribution",
        tags: ["Zoho", "Wholesale Distribution"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 12,
        title: "Zoho for IT Services & IT Consulting Industry",
        description: "Automating corporate travel technology services through advanced IT consulting integration.",
        image: "/images/case-studies/cards/12-it-consulting.webp",
        company: "IT Services & Consulting",
        industry: "IT Services & IT Consulting",
        tags: ["Zoho", "IT Services & IT Consulting"],
        recipientEmail: "shivam@agsuitetech.com"
    },
    {
        id: 13,
        title: "Transforming Sales Operations with Centralised Lead Management & Region-Wise Reporting Using Zoho CRM",
        description: "Previously using Salesforce to manage sales operations and customer information, the business transitioned to Zoho CRM to centralise lead management, streamline sales processes, and gain better visibility into region-wise product performance.",
        image: "/images/case-studies/cards/13-manufacturing-crm-sales.webp",
        pdfUrl: "/transforming-sales-operations-with-centralised-lead-management-region-wise-reporting-using-zoho-crm.pdf",
        company: "Zoho for Manufacturing",
        industry: "Manufacturing",
        tags: ["Zoho Manufacturing"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    },
    {
        id: 14,
        title: "Centralising Customer Management & Support Operations with Zoho One",
        description: "Transitioning from a custom ERP system to Zoho One to centralise customer data, streamline customer relationship management, improve service tracking, and enhance support operations through integrated Zoho applications.",
        image: "/images/case-studies/cards/14-environmental-zoho-one.webp",
        pdfUrl: "/centralising-customer-management-support-operations-with-zoho-one.pdf",
        company: "Zoho for Environmental Services",
        industry: "Environmental Services",
        tags: ["Zoho Environmental Services"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    },
    {
        id: 15,
        title: "Streamlining Employee Management & Performance Tracking with Zoho People",
        description: "Transitioning from Excel-based HR management to Zoho People to centralise employee information, streamline HR operations, and improve employee performance tracking and visibility.",
        image: "/images/case-studies/cards/15-legal-zoho-people.webp",
        pdfUrl: "/streamlining-employee-management-performance-tracking-with-zoho-people.pdf",
        company: "Zoho for Legal Services",
        industry: "Legal Services",
        tags: ["Zoho Legal Services"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    },
    {
        id: 16,
        title: "Transforming Global Customer Management with Zoho CRM",
        description: "Moving from Excel-based data management to Zoho CRM to centralise customer information, streamline lead management, and unify multiple lead sources and WhatsApp communication into a single platform for improved customer visibility across global operations.",
        image: "/images/case-studies/cards/16-financial-global-crm.webp",
        pdfUrl: "/transforming-global-customer-management-with-zoho-crm.pdf",
        company: "Zoho for Financial Services",
        industry: "Financial Services",
        tags: ["Zoho Financial Services"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    },
    {
        id: 17,
        title: "Enhancing Jewellery Business Management Through Zoho CRM",
        description: "Transitioning from Excel-based management to Zoho CRM to centralise customer information, streamline lead management, and improve coordination between business applications through GATI ERP integration.",
        image: "/images/case-studies/cards/17-jewellery-crm.webp",
        pdfUrl: "/enhancing-jewellery-business-management-through-zoho-crm.pdf",
        company: "Zoho for Jewellery Industry",
        industry: "Jewellery Industry",
        tags: ["Zoho Jewellery Industry"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    },
    {
        id: 18,
        title: "Email Transformation & Cost Optimisation with Zoho Mail",
        description: "Migrating from Google Workspace (G-Suite) to Zoho Mail to provide a cost-effective business email solution, reduce subscription expenses, and streamline business email management.",
        image: "/images/case-studies/cards/18-manufacturing-zoho-mail.webp",
        pdfUrl: "/email-transformation-cost-optimisation-with-zoho-mail.pdf",
        company: "Zoho for Manufacturing",
        industry: "Manufacturing",
        tags: ["Zoho Manufacturing"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    },
    {
        id: 19,
        title: "Modernising Financial Management with Zoho Books",
        description: "Migrating from Tally to Zoho Books to streamline accounting operations, automate payment reminders, simplify financial workflows, and improve overall financial process management.",
        image: "/images/case-studies/cards/19-professional-services-books.webp",
        pdfUrl: "/modernising-financial-management-with-zoho-books.pdf",
        company: "Zoho for Professional Services",
        industry: "Professional Services",
        tags: ["Zoho Professional Services"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    },
    {
        id: 20,
        title: "Streamlining Payroll Management & Compliance with Zoho Payroll",
        description: "Transitioning from Excel-based payroll management to Zoho Payroll to centralise employee payroll data, streamline payroll processing, simplify compliance management, and improve overall payroll administration.",
        image: "/images/case-studies/cards/20-fisheries-payroll.webp",
        pdfUrl: "/streamlining-payroll-management-compliance-with-zoho-payroll.pdf",
        company: "Zoho for Fisheries Industry",
        industry: "Fisheries Industry",
        tags: ["Zoho Fisheries Industry"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    },
    {
        id: 21,
        title: "Transforming Recruitment Operations Through Zoho Recruit Automation",
        description: "Streamlining large-scale recruitment operations with Zoho Recruit by centralising candidate applications, integrating multiple job portals, automating resume parsing, and improving recruitment workflow efficiency.",
        image: "/images/case-studies/cards/21-recruitment-staffing.webp",
        pdfUrl: "/transforming-recruitment-operations-through-zoho-recruit-automation.pdf",
        company: "Zoho for Recruitment & Staffing",
        industry: "Recruitment & Staffing",
        tags: ["Zoho Recruitment & Staffing"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    },
    {
        id: 22,
        title: "Centralising Customer Feedback Management with Zoho Forms",
        description: "Migrating from Google Forms to Zoho Forms to streamline customer feedback collection, centralise responses, and simplify feedback management through an organised and accessible system.",
        image: "/images/case-studies/cards/22-facility-feedback-forms.webp",
        pdfUrl: "/centralising-customer-feedback-management-with-zoho-forms.pdf",
        company: "Zoho for Facility & Infrastructure Services",
        industry: "Facility & Infrastructure Services",
        tags: ["Zoho Facility & Infrastructure Services"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    },
    {
        id: 23,
        title: "Transforming Customer Data Management with Zoho CRM",
        description: "Migrating from Excel-based data management to Zoho CRM to centralise customer information, streamline data management, and establish a structured platform for managing customer relationships and business activities.",
        image: "/images/case-studies/cards/23-engineering-consulting-crm.webp",
        pdfUrl: "/transforming-customer-data-management-with-zoho-crm.pdf",
        company: "Zoho for Engineering Consulting",
        industry: "Engineering Consulting",
        tags: ["Zoho Engineering Consulting"],
        recipientEmail: "shivam@agsuitetech.com",
        ctaEnabled: true
    }
];

const orderedCaseStudies = [
    ...allCaseStudies.filter((study) => Boolean(study.pdfUrl)),
    ...allCaseStudies.filter((study) => !study.pdfUrl),
];

const INDUSTRIES = [
    "All",
    ...Array.from(new Set(allCaseStudies.map((study) => study.industry)))
];

const ZohoCaseStudiesGrid = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("All");

    // Modal State
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({ 'Last Name': '', 'Designation': '', 'Mobile': '', 'Email': '', 'Company': '', 'countryCode': '' });
    const [isMobileValid, setIsMobileValid] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            import('intl-tel-input/styles');
        }
    }, [isModalOpen]);

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
        return orderedCaseStudies.filter((study) => {
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
            <div className="bg-white rounded-[2rem] shadow-xl shadow-red-900/5 border border-slate-100 p-6 md:p-8 mb-6 relative z-20">
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
                                    ? 'bg-[#eab308] text-white shadow-md'
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
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-900/10 flex flex-col group transition-all duration-300 border border-slate-100 hover:-translate-y-2 h-full"
                            >
                                {/* Image Box */}
                                <div className="relative h-56 w-full overflow-hidden shrink-0">
                                    {study.image ? (
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#7f1d1d] via-[#b91c1c] to-[#eab308] p-6 flex flex-col justify-between text-white">
                                            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                                                <span className="w-2 h-2 rounded-full bg-[#facc15]" />
                                                Zoho Customer Success
                                            </div>
                                            <p className="max-w-[90%] text-xl font-bold leading-tight">
                                                {study.company}
                                            </p>
                                            <div className="absolute -right-10 -bottom-14 w-40 h-40 rounded-full border-[28px] border-white/10" />
                                            <div className="absolute right-16 top-10 w-16 h-16 rounded-full bg-white/10 blur-sm" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60" />


                                    {/* Industry Tag (Bottom Left) */}
                                    <div className="absolute bottom-4 left-4 bg-[#0a0a0a] text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md">
                                        {study.industry}
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="relative isolate overflow-hidden p-6 md:p-8 flex flex-col flex-grow bg-white text-slate-900 transition-colors duration-500 group-hover:bg-orange-50/70">
                                    <div className="absolute -right-20 -bottom-20 -z-10 h-56 w-56 rounded-full bg-gradient-to-br from-amber-200/10 via-orange-300/35 to-orange-500/45 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="absolute right-0 bottom-0 -z-10 h-32 w-32 bg-gradient-to-tl from-orange-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <h4 className="text-[13px] font-extrabold text-[#eab308] uppercase tracking-widest mb-3 border-l-2 border-[#eab308] pl-2 flex items-center transition-colors duration-300 group-hover:text-slate-900 group-hover:border-orange-500">
                                        {study.company}
                                    </h4>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-950 transition-colors leading-tight">
                                        {study.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed text-sm transition-colors duration-300 group-hover:text-slate-800">
                                        {study.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md transition-colors duration-300 group-hover:bg-white/80 group-hover:text-slate-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {study.ctaEnabled !== false && (
                                        study.pdfUrl ? (
                                            <a
                                                href={study.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-auto flex items-center font-bold text-[#0a0a0a] group-hover:text-slate-950 transition-colors"
                                                aria-label={`Read full case study: ${study.title}`}
                                            >
                                                <span className="border-b-2 border-transparent group-hover:border-orange-500 pb-0.5 transition-all text-sm uppercase tracking-wide">
                                                    Read Full Story
                                                </span>
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        ) : (
                                            <button
                                                onClick={(e) => handleReadClick(e, study)}
                                                className="mt-auto flex items-center font-bold text-[#0a0a0a] group-hover:text-slate-950 transition-colors bg-transparent border-none p-0 cursor-pointer"
                                                suppressHydrationWarning
                                            >
                                                <span className="border-b-2 border-transparent group-hover:border-orange-500 pb-0.5 transition-all text-sm uppercase tracking-wide">
                                                    Read Full Story
                                                </span>
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        )
                                    )}
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
                                            <p className="text-slate-600">
                                                {selectedStudy?.pdfUrl
                                                    ? "Your request has been received. Your case study is ready to view."
                                                    : "Your request has been received. We'll send the case study to your email shortly."}
                                            </p>
                                            {selectedStudy?.pdfUrl && (
                                                <a
                                                    href={selectedStudy.pdfUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mt-8 inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#eab308] to-[#b91c1c] text-white font-bold rounded-xl hover:shadow-lg transition-all"
                                                >
                                                    View Case Study
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </a>
                                            )}
                                            <button
                                                onClick={closeModal}
                                                className={`${selectedStudy?.pdfUrl ? "mt-4 block mx-auto text-sm text-slate-500 hover:text-slate-900" : "mt-8 px-8 py-3 bg-[#eab308] text-white font-bold rounded-xl hover:bg-black"} transition-colors`}
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
                                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-sm"
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
                                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-sm"
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
                                                            className: "w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-sm",
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
                                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-sm"
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
                                                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-sm"
                                                        placeholder="Company Name"
                                                        suppressHydrationWarning
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full py-4 bg-gradient-to-r from-[#eab308] to-[#b91c1c] text-white font-bold rounded-xl hover:shadow-lg transition-all mt-4"
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

export default ZohoCaseStudiesGrid;




