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
        companyName: "Sequence Inc. US",
        logo: "/images/assets/Sequence.png",
        personName: "",
        personRole: "VP Business Technology",
        personAvatar: "",
        testimonial: "Ankur and his team at AGSuite have been extremely cooperative to our technological needs. Through the application of NetSuite, they helped us create a better customer server, templates and forms which helped us in taking accurate customer surveys. They also designed PDF and PHP Formatting pages that helped us working on API interface as well.",
        bgImage: "/images/people/laptopmen.webp",
        overlayColor: "from-blue-900/90 via-blue-900/80 to-blue-900/60"
    },
    {
        id: 2,
        companyName: "Coastal Group UK",
        logo: "/images/assets/costal whole.png",
        personName: "",
        personRole: "Director",
        personAvatar: "",
        testimonial: "We went operational with Go Live on January 15. But we quickly realized a tremendous load of working with such a comprehensive technological system for our business. It was then that we came in contact with AGSuite. Through seamlessly fluid operations, understanding of business solutions and client query redressal mechanism, AGSuite provides consistent customer service. Moreover, it has helped streamline business operations for us. It has made our functioning more systematic and oriented.",
        bgImage: "/images/people/laptopgirl.webp",
        overlayColor: "from-indigo-900/90 via-indigo-900/80 to-indigo-900/60"
    },
    {
        id: 3,
        companyName: "PG Paper",
        logo: "/images/assets/pg whole.png",
        personName: "",
        personRole: "Vice President Business Development",
        personAvatar: "",
        testimonial: "We had a drastic experience with our previous technology vendor, ultimately resulting in contract disruption midterm. However, when we came in contact with AGSuite, we were given the confidence to upgrade our business technologies and working system. It has been three years since we are working in collaboration with AGSuite. I would highly recommend AGSuite since it provides impeccable customer service and resolves queries by addressing them 24x7.",
        bgImage: "/images/people/laptopmen2.webp",
        overlayColor: "from-emerald-900/90 via-emerald-900/80 to-emerald-900/60"
    }
];

// Shrink font when testimonial is long — 4 tiers based on character count
function getQuoteFontSize(text: string): string {
    const len = text.length;
    if (len < 180) return "text-xl leading-relaxed";
    if (len < 350) return "text-lg leading-relaxed";
    if (len < 450) return "text-base md:text-lg leading-relaxed";
    return "text-sm md:text-base leading-relaxed";
}

const NSCustomerSuccess = () => {
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

    // Auto-rotate — resets whenever user navigates manually
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
        <section className="relative py-24 overflow-hidden font-['DM_Sans',sans-serif] bg-slate-50">
            {/* Rainbow Glow Background (Exact Zoho Colors) */}
            <div
                className="absolute inset-x-0 top-20 h-64 mx-auto w-[90%] rounded-3xl opacity-[0.15] blur-3xl pointer-events-none"
                style={{
                    background:
                        "linear-gradient(90deg, #ef4444 -0.55%, #f97316 22.86%, #facc15 48.36%, #fb923c 73.33%, #dc2626 99.34%)"
                }}
            />

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
                        className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 tracking-tight"
                    >
                        Proven Experiences Where Results Speak
                    </motion.h2>
                </div>

                {/* Card + Arrows row */}
                <div className="relative flex items-center gap-3 md:gap-5">

                    {/* LEFT ARROW */}
                    <button
                        suppressHydrationWarning
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                        className="flex-shrink-0 group flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                    </button>

                    {/* Main Card */}
                    <div className="relative flex-1 h-[460px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeIdx}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="bg-[#f8faff] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-blue-50/50 flex flex-col md:flex-row h-[460px]"
                            >
                                {/* Left Side: Image & Logo */}
                                <div className="w-full md:w-[40%] relative min-h-[180px] md:min-h-full">
                                    <Image
                                        src={activeCustomer.bgImage}
                                        alt={activeCustomer.companyName}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                    {/* Color Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${activeCustomer.overlayColor} z-10 transition-all duration-700`} />

                                    {/* Logo Box */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-2xl w-[65%] max-w-[200px] flex items-center justify-center z-20 min-h-[80px]">
                                        {activeCustomer.logo ? (
                                            <div className="relative w-full h-[60px]">
                                                <Image
                                                    src={activeCustomer.logo}
                                                    alt={activeCustomer.companyName}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 15vw"
                                                />
                                            </div>
                                        ) : (
                                            <h3 className="text-xl md:text-2xl font-bold text-center text-blue-900">
                                                {activeCustomer.companyName.split(' ')[0]}
                                            </h3>
                                        )}
                                    </div>
                                </div>

                                {/* Right Side: Quote & Person */}
                                <div className="w-full md:w-[60%] p-8 md:p-10 lg:p-12 flex flex-col justify-between overflow-hidden">
                                    <div className="relative flex-1 overflow-hidden">
                                        {/* Quote Mark Icon */}
                                        <svg className="absolute -top-6 -left-4 w-10 h-10 text-blue-100 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44771 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V3H8.017C9.12157 3 10.017 3.89543 10.017 5V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" />
                                        </svg>

                                        <blockquote className={`font-medium text-[#333] relative z-10 ${getQuoteFontSize(activeCustomer.testimonial)}`}>
                                            &ldquo;{activeCustomer.testimonial}&rdquo;
                                        </blockquote>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100 shrink-0">
                                        <h3 className="text-lg font-bold text-blue-900">{activeCustomer.companyName}</h3>
                                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">{activeCustomer.personRole}</p>
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
                        className="flex-shrink-0 group flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-1 mt-8">
                    {customers.map((_, idx) => (
                        <button
                            suppressHydrationWarning
                            key={idx}
                            onClick={() => goTo(idx, idx > activeIdx ? 1 : -1)}
                            aria-label={`Go to testimonial ${idx + 1}`}
                            className="w-12 h-12 flex items-center justify-center focus:outline-none"
                        >
                             <span className={`rounded-full transition-all duration-300 ${idx === activeIdx
                                ? 'w-7 h-2.5 bg-blue-600'
                                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-blue-300'
                                }`} />
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NSCustomerSuccess;




