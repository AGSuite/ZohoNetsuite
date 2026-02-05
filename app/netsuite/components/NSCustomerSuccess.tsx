"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomerSuccess {
    id: number;
    companyName: string;
    logo: string;
    personName: string;
    personRole: string;
    personAvatar: string;
    testimonial: string;
    bgImage: string;
    overlayColor: string;
}

const customers: CustomerSuccess[] = [
    {
        id: 1,
        companyName: "Affle",
        logo: "/images/assets/png-logos/affle-png.png",
        personName: "Vikas Garg",
        personRole: "CFO, Affle",
        personAvatar: "/images/people/laptopmen.webp",
        testimonial: "NetSuite's scalability has been crucial for our global expansion. AGSuite helped us automate complex inter-company transactions and multi-currency reporting across 20+ countries, giving us real-time financial visibility.",
        bgImage: "/images/people/laptopmen.webp",
        overlayColor: "from-blue-900/90 via-blue-900/80 to-blue-900/60"
    },
    {
        id: 2,
        companyName: "Tyfone",
        logo: "/images/assets/png-logos/tyfone_tech-removebg-preview.png",
        personName: "Michael Thompson",
        personRole: "Director of Operations",
        personAvatar: "/images/people/laptopmen2.webp",
        testimonial: "Implementing NetSuite with AGSuite was a game-changer for Tyfone. We streamlined our order-to-cash process and integrated our proprietary tech stack seamlessly. The transition was smooth and the post-go-live support was exceptional.",
        bgImage: "/images/people/laptopmen2.webp",
        overlayColor: "from-indigo-900/90 via-indigo-900/80 to-indigo-900/60"
    },
    {
        id: 3,
        companyName: "UniAcco",
        logo: "/images/assets/png-logos/uniAcco-png.png",
        personName: "Sarah Miller",
        personRole: "Head of Finance",
        personAvatar: "/images/people/laptopgirl.webp",
        testimonial: "AGSuite's deep expertise in NetSuite allowed us to customize the platform for our unique student housing model. We now have a unified view of our operations that helps us make faster, data-driven decisions every day.",
        bgImage: "/images/people/laptopgirl.webp",
        overlayColor: "from-emerald-900/90 via-emerald-900/80 to-emerald-900/60"
    },
    {
        id: 4,
        companyName: "Quick Heal",
        logo: "/images/assets/png-logos/quickheal-png.png",
        personName: "Emily Davis",
        personRole: "Logistics Manager",
        personAvatar: "/images/people/laptopgirl1.webp",
        testimonial: "The visibility we've gained with NetSuite into our supply chain is incredible. AGSuite understood our challenges and delivered a solution that has significantly reduced our operational overhead and improved inventory accuracy.",
        bgImage: "/images/people/laptopgirl1.webp",
        overlayColor: "from-rose-900/90 via-rose-900/80 to-rose-900/60"
    }
];

const NSCustomerSuccess = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const activeCustomer = customers[activeIdx];

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIdx((prev) => (prev + 1) % customers.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-24 overflow-hidden font-['DM_Sans',sans-serif] bg-slate-50">
            {/* Corner Gradient Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-400/10 to-transparent blur-[120px] pointer-events-none" />

            <div className="max-w-6xl relative z-10 mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] tracking-tight"
                    >
                        Transforming businesses,<br />one customer at a time
                    </motion.h2>
                </div>

                {/* Main Card */}
                <div className="relative mb-12 h-auto min-h-[380px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIdx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-[#f8faff] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-blue-50/50 flex flex-col md:flex-row min-h-[380px]"
                        >
                            {/* Left Side: Image & Logo */}
                            <div className="w-full md:w-[40%] relative min-h-[250px] md:min-h-full">
                                <Image
                                    src={activeCustomer.bgImage}
                                    alt={activeCustomer.companyName}
                                    fill
                                    className="object-cover brightness-110 contrast-110"
                                />
                                {/* Color Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${activeCustomer.overlayColor} z-10 transition-all duration-700`} />

                                {/* Logo Box - Slightly Smaller */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-2xl w-[65%] max-w-[200px] flex items-center justify-center z-20">
                                    <Image
                                        src={activeCustomer.logo}
                                        alt={activeCustomer.companyName}
                                        width={160}
                                        height={70}
                                        className="h-auto w-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Right Side: Quote & Person */}
                            <div className="w-full md:w-[60%] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                                <div className="relative">
                                    {/* Quote Mark Icon */}
                                    <svg className="absolute -top-6 -left-4 w-10 h-10 text-blue-100 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44771 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V3H8.017C9.12157 3 10.017 3.89543 10.017 5V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" />
                                    </svg>

                                    <blockquote className="text-lg md:text-xl font-medium text-[#333] leading-relaxed mb-8 relative z-10">
                                        “{activeCustomer.testimonial}”
                                    </blockquote>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                        <Image
                                            src={activeCustomer.personAvatar}
                                            alt={activeCustomer.personName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#1a1a1a]">{activeCustomer.personName}</h4>
                                        <p className="text-sm text-gray-500 font-medium">{activeCustomer.personRole}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Logo Navigation Tabs - Tightened */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 border-t border-gray-100 pt-8">
                    {customers.map((customer, idx) => (
                        <button
                            key={customer.id}
                            onClick={() => setActiveIdx(idx)}
                            className={`group relative transition-all duration-300 transform ${activeIdx === idx
                                ? "opacity-100 scale-105"
                                : "opacity-30 grayscale hover:opacity-60 hover:grayscale-0"
                                }`}
                        >
                            <Image
                                src={customer.logo}
                                alt={customer.companyName}
                                width={140}
                                height={60}
                                className="h-8 md:h-12 w-auto object-contain"
                            />
                            {/* Active Underline */}
                            {activeIdx === idx && (
                                <motion.div
                                    layoutId="activeUnderline"
                                    className="absolute -bottom-4 left-0 right-0 h-1 bg-blue-600 rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NSCustomerSuccess;
