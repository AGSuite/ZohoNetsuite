"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    TrendingUp,
    Target,
    Mail,
    Heart,
    BarChart3,
    Phone,
    Handshake,
    ClipboardList,
    DollarSign,
    Megaphone,
    Users,
    ShoppingBag,
} from "lucide-react";

// ── CRM Modules that revolve around the centre ────────────────────────────────
const CRM_MODULES = [
    { name: "Sales", icon: TrendingUp, color: "#1d4ed8" },
    { name: "Marketing", icon: Megaphone, color: "#0369a1" },
    { name: "Leads", icon: Target, color: "#0e7490" },
    { name: "Campaigns", icon: Mail, color: "#0284c7" },
    { name: "Service", icon: Heart, color: "#2563eb" },
    { name: "Partners", icon: Handshake, color: "#1d4ed8" },
    { name: "Analytics", icon: BarChart3, color: "#0369a1" },
    { name: "Mobile CRM", icon: Phone, color: "#0e7490" },
    { name: "Quotes", icon: ClipboardList, color: "#0284c7" },
    { name: "Forecasting", icon: DollarSign, color: "#2563eb" },
    { name: "E-Commerce", icon: ShoppingBag, color: "#1d4ed8" },
    { name: "HR / Teams", icon: Users, color: "#0369a1" },
];

// ── Layout constants ──────────────────────────────────────────────────────────
const SVG_SZ = 580;
const CX = SVG_SZ / 2;
const CY = SVG_SZ / 2;
const ORBIT_R = 222;   // orbit radius
const CTR_R = 82;    // centre circle radius
const ICON_D = 76;    // icon circle diameter

export const CRMCircularDesign = () => {
    const total = CRM_MODULES.length;

    return (
        <div
            className="relative flex items-center justify-center select-none"
            style={{ width: SVG_SZ, height: SVG_SZ }}
        >
            {/* Subtle radial glow behind the whole design */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 78% 78% at 50% 50%, rgba(147,197,253,0.14) 0%, transparent 70%)",
                }}
            />

            {/* ── REVOLVING RING OF CIRCLE CARDS ───────────────────────────────── */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 50%" }}
            >
                {CRM_MODULES.map((mod, i) => {
                    const angleDeg = (360 / total) * i - 90;
                    const rad = (angleDeg * Math.PI) / 180;
                    const px = ORBIT_R * Math.cos(rad);
                    const py = ORBIT_R * Math.sin(rad);
                    const containerW = 96;
                    const Icon = mod.icon;

                    return (
                        <motion.div
                            key={i}
                            className="absolute flex flex-col items-center"
                            style={{
                                left: `calc(50% + ${px}px - ${containerW / 2}px)`,
                                top: `calc(50% + ${py}px - ${ICON_D / 2}px)`,
                                width: containerW,
                            }}
                            /* Counter-rotate so each card stays upright */
                            animate={{ rotate: -360 }}
                            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                        >
                            {/* ── WHITE CIRCLE with blue border ── */}
                            <div
                                style={{
                                    width: ICON_D,
                                    height: ICON_D,
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #ffffff 0%, #dbeafe 100%)",
                                    border: "1.5px solid rgba(96,165,250,0.75)",
                                    boxShadow: "0 4px 14px rgba(37,99,235,0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon style={{ color: mod.color, width: 28, height: 28 }} />
                            </div>

                            {/* ── Module label ── */}
                            <span
                                className="text-center font-semibold leading-tight mt-1.5 whitespace-nowrap"
                                style={{ color: "#bfdbfe", fontSize: 11, letterSpacing: "0.02em" }}
                            >
                                {mod.name}
                            </span>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* ── SVG: gradient dotted spokes + centre circle ───────────────────── */}
            <svg
                viewBox={`0 0 ${SVG_SZ} ${SVG_SZ}`}
                width={SVG_SZ}
                height={SVG_SZ}
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: 2 }}
            >
                <defs>
                    {/* Arrowhead marker — light blue */}
                    <marker
                        id="crm-arrow"
                        markerWidth="3"
                        markerHeight="3"
                        refX="2.5"
                        refY="1.5"
                        orient="auto"
                    >
                        <path d="M 0 0 L 3 1.5 L 0 3 Z" fill="#93c5fd" opacity="0.85" />
                    </marker>

                    {/* Per-spoke gradient — same blue as ERP */}
                    {CRM_MODULES.map((_, i) => {
                        const angleDeg = (360 / total) * i - 90;
                        const rad = (angleDeg * Math.PI) / 180;
                        const x1 = CX + (CTR_R + 20) * Math.cos(rad);
                        const y1 = CY + (CTR_R + 20) * Math.sin(rad);
                        const x2 = CX + (ORBIT_R - ICON_D / 2 - 18) * Math.cos(rad);
                        const y2 = CY + (ORBIT_R - ICON_D / 2 - 18) * Math.sin(rad);
                        return (
                            <linearGradient
                                key={`cg-${i}`}
                                id={`crmsg${i}`}
                                x1={x1} y1={y1}
                                x2={x2} y2={y2}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                            </linearGradient>
                        );
                    })}

                    {/* Centre circle gradient — white core */}
                    <radialGradient id="crm-cg" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="55%" stopColor="#eff6ff" />
                        <stop offset="100%" stopColor="#bfdbfe" />
                    </radialGradient>

                    {/* Drop shadow on centre */}
                    <filter id="crm-cs" x="-30%" y="-30%" width="160%" height="160%">
                        <feDropShadow dx="0" dy="3" stdDeviation="9" floodColor="#3b82f6" floodOpacity="0.22" />
                    </filter>
                </defs>

                {/* Gradient dotted spokes */}
                {CRM_MODULES.map((_, i) => {
                    const angleDeg = (360 / total) * i - 90;
                    const rad = (angleDeg * Math.PI) / 180;
                    const x1 = CX + (CTR_R + 20) * Math.cos(rad);
                    const y1 = CY + (CTR_R + 20) * Math.sin(rad);
                    const x2 = CX + (ORBIT_R - ICON_D / 2 - 18) * Math.cos(rad);
                    const y2 = CY + (ORBIT_R - ICON_D / 2 - 18) * Math.sin(rad);
                    return (
                        <line
                            key={i}
                            x1={x1} y1={y1}
                            x2={x2} y2={y2}
                            stroke={`url(#crmsg${i})`}
                            strokeWidth="0.7"
                            strokeDasharray="2 5"
                            markerEnd="url(#crm-arrow)"
                        />
                    );
                })}

                {/* Centre circle — border ring */}
                <circle
                    cx={CX} cy={CY} r={CTR_R}
                    fill="none"
                    stroke="rgba(96,165,250,0.65)"
                    strokeWidth="1.5"
                    filter="url(#crm-cs)"
                />
                {/* Centre circle — white fill */}
                <circle
                    cx={CX} cy={CY} r={CTR_R - 1}
                    fill="url(#crm-cg)"
                    stroke="rgba(147,197,253,0.5)"
                    strokeWidth="1"
                />
                {/* Inner decorative dotted ring */}
                <circle
                    cx={CX} cy={CY} r={CTR_R - 16}
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                    opacity="0.5"
                />
            </svg>

            {/* ── Centre text: ORACLE NetSuite CRM ─────────────────────────────── */}
            <div
                className="absolute flex flex-col items-center justify-center text-center z-10 pointer-events-none"
                style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: CTR_R * 1.4,
                }}
            >
                {/* ORACLE */}
                <p
                    className="font-light text-blue-900 leading-none tracking-[3px] uppercase"
                    style={{ fontSize: 9 }}
                >
                    Oracle
                </p>
                {/* NetSuite */}
                <p className="font-black text-blue-800 leading-tight" style={{ fontSize: 22 }}>
                    NetSuite
                </p>
                {/* CRM badge */}
                <p className="font-bold text-blue-600 leading-snug" style={{ fontSize: 13 }}>
                    CRM
                </p>
            </div>
        </div>
    );
};
