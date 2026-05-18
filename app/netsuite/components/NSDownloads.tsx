'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, CheckCircle2 } from 'lucide-react';

interface DownloadItem {
    id: number;
    title: string;
    description: string;
    image: string;
    type: string;
}

const downloadItems: DownloadItem[] = [
    {
        id: 1,
        title: "NetSuite for Manufacturing: A Comprehensive Guide",
        description: "Explore how NetSuite helps modern manufacturing businesses streamline their supply chain and operations.",
        image: "/images/lap/lap3.webp",
        type: "Case Study"
    },
    {
        id: 2,
        title: "Scaling Your Retail Business in the Cloud",
        description: "Discover proven strategies to grow your retail and e-commerce business using NetSuite unified ERP.",
        image: "/images/lap/lap6_11zon.webp",
        type: "Whitepaper"
    },
    {
        id: 3,
        title: "Global Business Management Best Practices",
        description: "Learn how to expand confidently across multiple regions with NetSuite OneWorld capabilities.",
        image: "/images/people/global.webp",
        type: "Resource Guide"
    }
];

const NSDownloads = () => {
    const [selectedItem, setSelectedItem] = useState<DownloadItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        phone: '',
        email: ''
    });

    const handleDownloadClick = (item: DownloadItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
        setIsSubmitted(false);
        setFormData({ name: '', designation: '', phone: '', email: '' });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedItem(null);
            setIsSubmitted(false);
        }, 300);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to an API
        setIsSubmitted(true);
    };

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 md:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-[#2563eb] font-bold tracking-wider uppercase text-sm mb-3 block">Resources</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        NetSuite Case Studies & Guides
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Deep dive into how organizations are leveraging NetSuite to transform their business. Download our latest resources.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {downloadItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group hover:shadow-xl transition-all duration-300">
                            {/* Image Container */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#2563eb] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {item.type}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2563eb] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 mb-6 flex-grow">
                                    {item.description}
                                </p>

                                {/* Button */}
                                <button
                                    onClick={() => handleDownloadClick(item)}
                                    className="w-full mt-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#2563eb] text-white py-3 px-4 rounded-xl font-medium transition-all"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
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
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
                        >
                            <div className="relative">
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 transition-colors z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Modal Header */}
                                <div className="bg-gradient-to-r from-[#0033ad] to-[#1e40af] p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2 pr-8 leading-tight">
                                        Download {selectedItem?.type}
                                    </h3>
                                    <p className="text-blue-100/90 text-sm line-clamp-2">
                                        {selectedItem?.title}
                                    </p>
                                </div>

                                {/* Modal Body (Form / Success) */}
                                <div className="p-6 md:p-8">
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
                                                Case study will be sent on Your Mail shortly.
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
                                                Please fill out the form below to receive your download link.
                                            </p>

                                            <div>
                                                <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-sm"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="designation" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1">Designation</label>
                                                <input
                                                    type="text"
                                                    id="designation"
                                                    name="designation"
                                                    required
                                                    value={formData.designation}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-sm"
                                                    placeholder="e.g. CEO, IT Manager"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1">Phone No.</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none transition-all text-sm"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
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
                                                className="w-full mt-2 bg-gradient-to-r from-[#0033ad] to-[#1e40af] hover:from-[#002277] hover:to-[#153080] text-white py-4 rounded-xl font-bold tracking-wide transition-all shadow-lg active:scale-[0.98]"
                                            >
                                                Send me the Case Study
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default NSDownloads;




