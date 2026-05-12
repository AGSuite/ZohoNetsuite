"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaUsers,
    FaChartLine,
    FaBriefcase,
    FaShoppingCart,
    FaTruck,
    FaHandshake,
    FaUserTie,
    FaHeadset,
} from "react-icons/fa";

// Stakeholder positions - will revolve on dotted circle
const STAKEHOLDERS = [
    { Icon: FaUsers, name: "Customers", angle: 0 },
    { Icon: FaChartLine, name: "Finance", angle: 45 },
    { Icon: FaUserTie, name: "Sales Rep", angle: 90 },
    { Icon: FaHeadset, name: "Support", angle: 135 },
    { Icon: FaHandshake, name: "Partners", angle: 180 },
    { Icon: FaBriefcase, name: "HR Manager", angle: 225 },
    { Icon: FaShoppingCart, name: "E-commerce", angle: 270 },
    { Icon: FaTruck, name: "Logistics", angle: 315 },
];

// Module labels in the ring
const MODULES = [
    { name: "RECRUIT & PEOPLE", angle: -90 },
    { name: "BOOKS & INVENTORY", angle: -30 },
    { name: "PROJECTS & FLOW", angle: 30 },
    { name: "MARKETING PLUS", angle: 90 },
    { name: "CRM & SALESIQ", angle: 150 },
    { name: "ANALYTICS & CREATOR", angle: 210 },
];

// Outer ring labels with red/pink gradient colors
const OUTER_LABELS = [
    { text: "Sales & Marketing", startAngle: 135, endAngle: 225, gradient: "url(#redGrad1)" },
    { text: "Finance & Operations", startAngle: 225, endAngle: 315, gradient: "url(#redGrad2)" },
    { text: "IT & Development", startAngle: -45, endAngle: 45, gradient: "url(#redGrad3)" },
    { text: "HR & Collaboration", startAngle: 45, endAngle: 135, gradient: "url(#redGrad4)" },
];

export const ZohoCircularDesign = () => {
    return (
        <div className="relative w-full h-[450px] xl:h-[550px] flex items-center justify-center overflow-visible select-none py-6">
            <div className="relative w-[350px] h-[350px] xl:w-[550px] xl:h-[550px]">

                <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                        {/* Zoho Red/Pink Gradients */}
                        <linearGradient id="redGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#880e4f" />
                            <stop offset="100%" stopColor="#ad1457" />
                        </linearGradient>
                        <linearGradient id="redGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ad1457" />
                            <stop offset="100%" stopColor="#c2185b" />
                        </linearGradient>
                        <linearGradient id="redGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#c2185b" />
                            <stop offset="100%" stopColor="#d81b60" />
                        </linearGradient>
                        <linearGradient id="redGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#d81b60" />
                            <stop offset="100%" stopColor="#e91e63" />
                        </linearGradient>
                        <linearGradient id="innerCircleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#fce4ec" />
                        </linearGradient>
                        <linearGradient id="zohoOneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#880e4f" />
                            <stop offset="100%" stopColor="#c2185b" />
                        </linearGradient>

                        <filter id="redShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                            <feOffset dx="0" dy="4" result="offsetblur" />
                            <feFlood floodColor="#f48fb1" floodOpacity="0.3" />
                            <feComposite in2="offsetblur" operator="in" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

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
                        const r = 265;

                        const x1 = 300 + r * Math.cos(startRad);
                        const y1 = 300 + r * Math.sin(startRad);
                        const x2 = 300 + r * Math.cos(endRad);
                        const y2 = 300 + r * Math.sin(endRad);

                        return (
                            <path
                                key={idx}
                                id={`outer-text-path-zoho-${idx}`}
                                d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                                fill="none"
                            />
                        );
                    })}

                    {/* Outer ring text labels */}
                    {OUTER_LABELS.map((label, idx) => {
                        return (
                            <text key={idx} className="text-[14px] font-black fill-white uppercase tracking-wider">
                                <textPath href={`#outer-text-path-zoho-${idx}`} startOffset="50%" textAnchor="middle">
                                    {label.text}
                                </textPath>
                            </text>
                        );
                    })}

                    <circle cx="300" cy="300" r="215" fill="url(#innerCircleGrad)" stroke="#f8bbd0" strokeWidth="2" filter="url(#shadow)" />

                    {MODULES.map((module, idx) => {
                        const angleRad = (module.angle * Math.PI) / 180;
                        const innerR = 110;
                        const outerR = 215;

                        const x1 = 300 + innerR * Math.cos(angleRad + Math.PI / 6);
                        const y1 = 300 + innerR * Math.sin(angleRad + Math.PI / 6);
                        const x2 = 300 + outerR * Math.cos(angleRad + Math.PI / 6);
                        const y2 = 300 + outerR * Math.sin(angleRad + Math.PI / 6);

                        return (
                            <g key={idx}>
                                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f06292" strokeWidth="1.5" opacity="0.4" />
                            </g>
                        );
                    })}

                    {MODULES.map((module, idx) => {
                        const r = 160;
                        const angleRad = (module.angle * Math.PI) / 180;
                        const x = 300 + r * Math.cos(angleRad);
                        const y = 300 + r * Math.sin(angleRad);

                        return (
                            <text
                                key={idx}
                                x={x}
                                y={y}
                                className="text-[15px] font-extrabold fill-rose-950 uppercase tracking-tight"
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                {module.name}
                            </text>
                        );
                    })}

                    <circle cx="300" cy="300" r="100" fill="url(#zohoOneGrad)" stroke="#880e4f" strokeWidth="2" filter="url(#redShadow)" />

                    <path id="zohoOneTopPath" fill="none" d="M 215, 300 a 85,85 0 0,1 170,0" />
                    <text className="text-[13px] font-black fill-white uppercase tracking-[0.3em]">
                        <textPath href="#zohoOneTopPath" startOffset="50%" textAnchor="middle">
                            ZOHO ONE
                        </textPath>
                    </text>

                    <path id="zohoOneBottomPath" fill="none" d="M 385, 300 a 85,85 0 0,1 -170,0" />
                    <text className="text-[13px] font-black fill-white uppercase tracking-[0.3em]">
                        <textPath href="#zohoOneBottomPath" startOffset="50%" textAnchor="middle">
                            OPERATING SYSTEM
                        </textPath>
                    </text>

                    <circle cx="300" cy="300" r="330" fill="none" stroke="#880e4f" strokeWidth="1" strokeDasharray="10,10" opacity="0.3" />

                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] xl:w-[100px] xl:h-[100px] rounded-full bg-white flex items-center justify-center z-40 shadow-lg border-2 border-rose-100">
                    <div className="relative w-[70%] h-[80%]">
                        <Image
                            src="/images/zoho logos/zoho premium.png"
                            alt="Zoho Premium Partner"
                            fill
                            className="object-contain"
                        />

                    </div>
                </div>

                <div className="absolute inset-0 z-50 pointer-events-none">
                    <style>{`
                        @keyframes revolve {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                        @keyframes counter-revolve {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(-360deg); }
                        }
                        .animate-revolve {
                            animation: revolve 60s linear infinite;
                            will-change: transform;
                        }
                        .animate-counter-revolve {
                            animation: counter-revolve 60s linear infinite;
                            will-change: transform;
                        }
                    `}</style>
                    {STAKEHOLDERS.map((stakeholder, idx) => {
                        return (
                            <div
                                key={idx}
                                className="absolute inset-0 flex items-center justify-center animate-revolve"
                            >
                                <div
                                    className="absolute pointer-events-auto flex flex-col items-center"
                                    style={{
                                        transform: `rotate(${stakeholder.angle}deg) translateY(-${280}px) rotate(-${stakeholder.angle}deg)`
                                    }}
                                >
                                    <div className="relative flex flex-col items-center animate-counter-revolve">
                                        <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-white flex items-center justify-center text-rose-600 text-lg shadow-[0_4px_12px_rgba(233,30,99,0.3)] border-2 border-rose-200">
                                            <stakeholder.Icon />
                                        </div>
                                        <div className="mt-2 text-center">
                                            <span className="text-[10px] font-bold text-rose-900 uppercase tracking-wide whitespace-nowrap bg-white px-2 py-1 rounded-lg border border-rose-200 shadow-sm">
                                                {stakeholder.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};




