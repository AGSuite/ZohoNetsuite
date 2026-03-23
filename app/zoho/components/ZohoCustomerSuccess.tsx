"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
        companyName: "Growth Marketing",
        logo: "/images/assets/png-logos/affle-png.png", // Reusing logos as placeholders or if they are shared clients
        personName: "David Chen",
        personRole: "Sales Director, Growth Marketing",
        personAvatar: "/images/people/laptopmen.webp",
        testimonial: "Zoho CRM has revolutionized our sales process. AGSuite helped us automate 80% of our lead follow-ups and we've seen a 30% conversion increase in just six months. The level of customization they provided is unmatched.",
        bgImage: "/images/people/laptopmen.webp",
        overlayColor: "from-red-900/90 via-red-900/80 to-red-900/60"
    },
    {
        id: 2,
        companyName: "Global Tech Services",
        logo: "/images/assets/png-logos/tyfone_tech-removebg-preview.png",
        personName: "Jennifer Wu",
        personRole: "HR Manager",
        personAvatar: "/images/people/laptopgirl.webp",
        testimonial: "Zoho People simplified our entire HR workflow. Onboarding new employees used to take days, now it's done in hours. AGSuite's team understood our complex hierarchy and built a system that just works.",
        bgImage: "/images/people/laptopgirl.webp",
        overlayColor: "from-rose-900/90 via-rose-900/80 to-rose-900/60"
    },
    {
        id: 3,
        companyName: "ServiceFirst Inc.",
        logo: "/images/assets/png-logos/uniAcco-png.png",
        personName: "Robert Evans",
        personRole: "COO",
        personAvatar: "/images/people/laptopmen2.webp",
        testimonial: "Integrating Zoho Desk with our CRM gave us a 360-degree view of our customers. AGSuite implemented a seamless flow between support and sales, dropping our resolution times by 50% and boosting satisfaction.",
        bgImage: "/images/people/laptopmen2.webp",
        overlayColor: "from-pink-900/90 via-pink-900/80 to-pink-900/60"
    },
    {
        id: 4,
        companyName: "Creative Designs",
        logo: "/images/assets/png-logos/quickheal-png.png",
        personName: "Amanda Lewis",
        personRole: "Finance Head",
        personAvatar: "/images/people/laptopgirl1.webp",
        testimonial: "Zoho Books is incredibly intuitive, and with AGSuite's guidance on automation, our invoicing and expense tracking have become effortless. We now have real-time financial insights that were previously impossible to track.",
        bgImage: "/images/people/laptopgirl1.webp",
        overlayColor: "from-purple-900/90 via-purple-900/80 to-purple-900/60"
    }
];

const ZohoCustomerSuccess = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

    const goTo = useCallback((idx: number, dir: number) => {
        setDirection(dir);
        setActiveIdx(idx);
    }, []);

    const handlePrev = useCallback(() => {
        const prev = (activeIdx - 1 + customers.length) % customers.length;
        goTo(prev, -1);
    }, [activeIdx, goTo]);

    const handleNext = useCallback(() => {
        const next = (activeIdx + 1) % customers.length;
        goTo(next, 1);
    }, [activeIdx, goTo]);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setActiveIdx((prev) => (prev + 1) % customers.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [activeIdx]);

    const activeCustomer = customers[activeIdx];

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 80 : -80,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -80 : 80,
            opacity: 0,
        }),
    };

    return (
        <section className="relative py-24 overflow-hidden font-['DM_Sans',sans-serif] bg-rose-50/30">
            {/* Corner Gradient Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-red-400/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-400/10 to-transparent blur-[120px] pointer-events-none" />

            <div className="max-w-6xl relative z-10 mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-rose-600 tracking-tight"
                    >
                        Empowering success,<br />one Zoho solution at a time
                    </motion.h2>
                </div>

                {/* Card + Arrows row */}
                <div className="relative flex items-center gap-3 md:gap-5">

                    {/* LEFT ARROW */}
                    <button
                        suppressHydrationWarning
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                        className="flex-shrink-0 group flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-rose-300 hover:bg-rose-50 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-rose-400"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-rose-600 transition-colors" />
                    </button>

                    {/* Main Card */}
                    <div className="relative flex-1 min-h-[380px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeIdx}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-rose-50/50 flex flex-col md:flex-row min-h-[380px]"
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

                                    {/* Logo Box */}
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
                                        <svg className="absolute -top-6 -left-4 w-10 h-10 text-rose-100 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44771 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V3H8.017C9.12157 3 10.017 3.89543 10.017 5V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" />
                                        </svg>

                                        <blockquote className="text-lg md:text-xl font-medium text-[#333] leading-relaxed mb-8 relative z-10">
                                            &ldquo;{activeCustomer.testimonial}&rdquo;
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

                    {/* RIGHT ARROW */}
                    <button
                        suppressHydrationWarning
                        onClick={handleNext}
                        aria-label="Next testimonial"
                        className="flex-shrink-0 group flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-rose-300 hover:bg-rose-50 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-rose-400"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-rose-600 transition-colors" />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {customers.map((_, idx) => (
                        <button
                            suppressHydrationWarning
                            key={idx}
                            onClick={() => goTo(idx, idx > activeIdx ? 1 : -1)}
                            aria-label={`Go to testimonial ${idx + 1}`}
                            className={`rounded-full transition-all duration-300 focus:outline-none ${idx === activeIdx
                                ? 'w-7 h-2.5 bg-rose-600'
                                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-rose-300'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ZohoCustomerSuccess;
