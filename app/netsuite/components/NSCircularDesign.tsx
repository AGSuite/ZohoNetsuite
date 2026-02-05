"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaUsers,
    FaChartLine,
    FaShieldAlt,
    FaShoppingCart,
    FaTruck,
    FaHandshake,
    FaUserTie,
    FaHeadset,
} from "react-icons/fa";

// Stakeholder positions - will revolve on dotted circle
const STAKEHOLDERS = [
    { Icon: FaUsers, name: "Customers", angle: 0 },
    { Icon: FaChartLine, name: "CFO", angle: 45 },
    { Icon: FaUserTie, name: "Sales Rep", angle: 90 },
    { Icon: FaHeadset, name: "Support", angle: 135 },
    { Icon: FaHandshake, name: "Partners", angle: 180 },
    { Icon: FaUsers, name: "Vendors", angle: 225 },
    { Icon: FaShoppingCart, name: "Ecommerce", angle: 270 },
    { Icon: FaTruck, name: "Shipping", angle: 315 },
];

// Module labels in the dark ring
const MODULES = [
    { name: "HUMAN RESOURCE", angle: -90 },
    { name: "BFN", angle: -30 },
    { name: "PSA SCM", angle: 30 },
    { name: "COMMERCE", angle: 90 },
    { name: "CRM", angle: 150 },
    { name: "ERP FINANCIALS", angle: 210 },
];

// Outer ring labels with light gradient colors (like reference image)
const OUTER_LABELS = [
    { text: "Multi-Currency", startAngle: 135, endAngle: 225, gradient: "url(#darkBlueGrad1)" },
    { text: "Multi- Company Tax Compliance", startAngle: 225, endAngle: 315, gradient: "url(#darkBlueGrad2)" },
    { text: "Multi-Language", startAngle: -45, endAngle: 45, gradient: "url(#darkBlueGrad3)" },
    { text: "Multi- Subsidiary Management", startAngle: 45, endAngle: 135, gradient: "url(#darkBlueGrad4)" },
];

export const NSCircularDesign = () => {
    return (
        <div className="relative w-full h-[450px] xl:h-[550px] flex items-center justify-center overflow-visible select-none py-6">
            {/* Main Container - Compact to prevent icon clipping */}
            <div className="relative w-[350px] h-[350px] xl:w-[550px] xl:h-[550px]">

                {/* SVG for the circular diagram */}
                <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                        {/* Professional Dark Blue Gradients */}
                        <linearGradient id="darkBlueGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0a192f" />
                            <stop offset="100%" stopColor="#112240" />
                        </linearGradient>
                        <linearGradient id="darkBlueGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#112240" />
                            <stop offset="100%" stopColor="#1e3a8a" />
                        </linearGradient>
                        <linearGradient id="darkBlueGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0c1d36" />
                            <stop offset="100%" stopColor="#172a45" />
                        </linearGradient>
                        <linearGradient id="darkBlueGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1e3a8a" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        <linearGradient id="innerCircleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#dbeafe" />
                        </linearGradient>
                        <linearGradient id="suiteCloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0a192f" />
                            <stop offset="100%" stopColor="#1e3a8a" />
                        </linearGradient>

                        {/* Blue gradient shadow filter */}
                        <filter id="blueShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                            <feOffset dx="0" dy="4" result="offsetblur" />
                            <feFlood floodColor="#eef0f3ff" floodOpacity="0.3" />
                            <feComposite in2="offsetblur" operator="in" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Regular shadow */}
                        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
                        </filter>
                    </defs>

                    {/* Outer Ring Segment Backgrounds */}
                    {OUTER_LABELS.map((label, idx) => {
                        const startRad = (label.startAngle * Math.PI) / 180;
                        const endRad = (label.endAngle * Math.PI) / 180;
                        const outerR = 295;
                        const innerR = 235;

                        const x1 = 300 + outerR * Math.cos(startRad);
                        const y1 = 300 + outerR * Math.sin(startRad);
                        const x2 = 300 + outerR * Math.cos(endRad);
                        const y2 = 300 + outerR * Math.sin(endRad);
                        const x3 = 300 + innerR * Math.cos(endRad);
                        const y3 = 300 + innerR * Math.sin(endRad);
                        const x4 = 300 + innerR * Math.cos(startRad);
                        const y4 = 300 + innerR * Math.sin(startRad);

                        const largeArc = label.endAngle - label.startAngle > 180 ? 1 : 0;

                        return (
                            <path
                                key={idx}
                                d={`M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`}
                                fill={label.gradient}
                                stroke="#fff"
                                strokeWidth="1.5"
                                filter="url(#shadow)"
                            />
                        );
                    })}

                    {/* Outer Ring Text Paths */}
                    {OUTER_LABELS.map((label, idx) => {
                        const startRad = (label.startAngle * Math.PI) / 180;
                        const endRad = (label.endAngle * Math.PI) / 180;
                        const r = 265; // Position for text path

                        const x1 = 300 + r * Math.cos(startRad);
                        const y1 = 300 + r * Math.sin(startRad);
                        const x2 = 300 + r * Math.cos(endRad);
                        const y2 = 300 + r * Math.sin(endRad);

                        return (
                            <path
                                key={idx}
                                id={`outer-text-path-${idx}`}
                                d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                                fill="none"
                            />
                        );
                    })}

                    {/* Outer ring text labels */}
                    {OUTER_LABELS.map((label, idx) => {
                        return (
                            <text key={idx} className="text-[14px] font-black fill-white uppercase tracking-wider">
                                <textPath href={`#outer-text-path-${idx}`} startOffset="50%" textAnchor="middle">
                                    {label.text}
                                </textPath>
                            </text>
                        );
                    })}

                    {/* Middle light blue/white gradient ring - Closer to outer */}
                    <circle cx="300" cy="300" r="215" fill="url(#innerCircleGrad)" stroke="#bfdbfe" strokeWidth="2" filter="url(#shadow)" />

                    {/* Module segments with dividing lines */}
                    {MODULES.map((module, idx) => {
                        const angleRad = (module.angle * Math.PI) / 180;
                        const innerR = 110;
                        const outerR = 215;

                        // Dividing line
                        const x1 = 300 + innerR * Math.cos(angleRad + Math.PI / 6);
                        const y1 = 300 + innerR * Math.sin(angleRad + Math.PI / 6);
                        const x2 = 300 + outerR * Math.cos(angleRad + Math.PI / 6);
                        const y2 = 300 + outerR * Math.sin(angleRad + Math.PI / 6);

                        return (
                            <g key={idx}>
                                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#60a5fa" strokeWidth="1.5" opacity="0.4" />
                            </g>
                        );
                    })}

                    {/* Module text labels - Straight and Horizontal */}
                    {MODULES.map((module, idx) => {
                        const r = 160; // Adjusted radius for horizontal labels
                        const angleRad = (module.angle * Math.PI) / 180;
                        const x = 300 + r * Math.cos(angleRad);
                        const y = 300 + r * Math.sin(angleRad);

                        return (
                            <text
                                key={idx}
                                x={x}
                                y={y}
                                className="text-[15px] font-extrabold fill-blue-950 uppercase tracking-tight"
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                {module.name}
                            </text>
                        );
                    })}

                    {/* Inner SuiteCloud circle - Dark Blue */}
                    <circle cx="300" cy="300" r="100" fill="url(#suiteCloudGrad)" stroke="#1e40af" strokeWidth="2" filter="url(#blueShadow)" />

                    {/* SUITECLOUD text on top (curved upward) - White text */}
                    <path id="suiteCloudTopPath" fill="none" d="M 215, 300 a 85,85 0 0,1 170,0" />
                    <text className="text-[13px] font-black fill-white uppercase tracking-[0.3em]">
                        <textPath href="#suiteCloudTopPath" startOffset="50%" textAnchor="middle">
                            SUITECLOUD
                        </textPath>
                    </text>

                    {/* PLATFORM text on bottom (curved downward) - White text */}
                    <path id="platformBottomPath" fill="none" d="M 385, 300 a 85,85 0 0,1 -170,0" />
                    <text className="text-[13px] font-black fill-white uppercase tracking-[0.3em]">
                        <textPath href="#platformBottomPath" startOffset="50%" textAnchor="middle">
                            PLATFORM
                        </textPath>
                    </text>

                    {/* Center white circle for logo - Smaller */}
                    <circle cx="300" cy="300" r="0" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" filter="url(#shadow)" />

                    {/* Dotted circle for revolving icons - Visible orbit closer in */}
                    <circle cx="300" cy="300" r="330" fill="none" stroke="#132552ff" strokeWidth="1" strokeDasharray="10,10" opacity="1" />

                </svg>

                {/* Central NetSuite Logo - Smaller */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] xl:w-[100px] xl:h-[100px] rounded-full bg-white flex items-center justify-center z-40 shadow-lg border-2 border-blue-100">
                    <div className="relative w-[70%] h-[80%]">
                        <Image
                            src="/images/logos/oracle netsuite logo.png"
                            alt="Oracle NetSuite"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Revolving Stakeholder Icons on the dotted circle */}
                <div className="absolute inset-0 z-50 pointer-events-none">
                    {STAKEHOLDERS.map((stakeholder, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 60,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 0
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div
                                    className="absolute pointer-events-auto flex flex-col items-center"
                                    style={{
                                        transform: `rotate(${stakeholder.angle}deg) translateY(-${280}px) rotate(-${stakeholder.angle}deg)`
                                    }}
                                >
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{
                                            duration: 60,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: 0
                                        }}
                                        className="relative flex flex-col items-center"
                                    >
                                        {/* Icon container - Smaller for compact design */}
                                        <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-white flex items-center justify-center text-blue-600 text-lg shadow-[0_4px_12px_rgba(59,130,246,0.3)] border-2 border-blue-200">
                                            <stakeholder.Icon />
                                        </div>

                                        {/* Text label with white background and border */}
                                        <div className="mt-2 text-center">
                                            <span className="text-[10px] font-bold text-blue-900 uppercase tracking-wide whitespace-nowrap bg-white px-2 py-1 rounded-lg border border-blue-200 shadow-sm">
                                                {stakeholder.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};
