"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    Users,
    Clock,
    DollarSign,
    PieChart,
    FileText,
    Zap,
    Layers,
} from "lucide-react";

const SRP_ELEMENTS = [
    { icon: Briefcase, text: "Project Management", angle: 0, delay: 0 },
    { icon: Users, text: "Resource Management", angle: 45, delay: 0.1 },
    { icon: Clock, text: "Time & Expense", angle: 90, delay: 0.2 },
    { icon: DollarSign, text: "Project Accounting", angle: 135, delay: 0.3 },
    { icon: PieChart, text: "Analytics", angle: 180, delay: 0.4 },
    { icon: FileText, text: "Billing", angle: 225, delay: 0.5 },
    { icon: Zap, text: "Service Automation", angle: 270, delay: 0.6 },
    { icon: Layers, text: "Revenue Recognition", angle: 315, delay: 0.7 },
];

export const SRPCircularDesign = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Central Cloud Shape */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20"
            >
                <div className="relative w-64 h-40 flex items-center justify-center">
                    {/* Properly Shaped Cloud SVG */}
                    <svg
                        viewBox="0 0 100 60"
                        className="absolute inset-0 w-full h-full text-white fill-current filter drop-shadow-xl"
                        style={{ filter: "drop-shadow(0 4px 12px rgba(255,255,255,0.4))" }}
                    >
                        <path d="M25,50 C15,50 10,42 10,35 C10,25 18,18 28,18 C30,10 40,5 50,5 C62,5 72,12 75,22 C78,20 82,20 85,22 C92,25 95,32 95,40 C95,48 88,55 80,55 L25,55 Z" />
                    </svg>

                    <div className="relative z-30 text-center -mt-1">
                        <h2 className="text-gray-900 font-medium text-base tracking-tight leading-tight">
                            NetSuite
                        </h2>
                        <p className="text-gray-900 font-semibold text-2xl uppercase tracking-[0.15em] -mt-0.5">
                            SRP
                        </p>
                        <div className="w-6 h-0.5 bg-blue-600/30 mx-auto mt-1 rounded-full" />
                    </div>
                </div>
            </motion.div>

            {/* Revolving Wheel Design */}
            <motion.div
                className="absolute inset-0 z-10 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                {/* Dotted Circular Ring (from reference image) */}
                <div className="absolute w-[440px] h-[440px] rounded-full border border-white/20 border-dashed pointer-events-none" />

                {SRP_ELEMENTS.map((elem, idx) => {
                    const radius = 220;
                    const x = Math.cos((elem.angle * Math.PI) / 180) * radius;
                    const y = Math.sin((elem.angle * Math.PI) / 180) * radius;

                    return (
                        <div
                            key={idx}
                            className="absolute"
                            style={{
                                transform: `translate(${x}px, ${y}px)`
                            }}
                        >
                            <div className="flex flex-col items-center gap-3">
                                {/* Dotted Connector Line (From center to icon) */}
                                <div
                                    className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-px h-[220px] pointer-events-none origin-bottom"
                                    style={{
                                        transform: `rotate(${elem.angle + 90}deg)`,
                                        height: '220px'
                                    }}
                                >
                                    <div className="w-full h-full border-l border-white/25 border-dotted" />
                                </div>

                                {/* Counter-rotation + Floating animation */}
                                <motion.div
                                    animate={{
                                        rotate: -360,
                                        y: [0, -8, 0],
                                    }}
                                    transition={{
                                        rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                                        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: elem.delay * 2 }
                                    }}
                                    className="flex flex-col items-center gap-2 relative z-20"
                                >
                                    {/* Icon Circle */}
                                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl border border-gray-100 group hover:scale-110 transition-transform duration-300">
                                        <elem.icon className="w-7 h-7 text-blue-600" />
                                    </div>

                                    {/* Label with blue gradient and white text */}
                                    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-4 py-1.5 rounded-lg shadow-2xl border border-white/10 min-w-[120px] text-center">
                                        <span className="text-[10px] font-extrabold text-white whitespace-nowrap uppercase tracking-widest">
                                            {elem.text}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Background Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[450px] h-[450px] rounded-full border border-white/5 animate-[pulse_4s_infinite]" />
                <div className="w-[300px] h-[300px] rounded-full border border-white/10" />
            </div>
        </div>
    );
};
