"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    DollarSign,
    ShoppingCart,
    Settings,
    Package,
    ClipboardList,
    Warehouse,
    Truck,
    Handshake,
    Users,
    BarChart3,
    TrendingUp,
    ShoppingBag,
    Megaphone,
} from "lucide-react";

const ERP_MODULES = [
    { name: "Finance", icon: DollarSign, color: "#1d4ed8" },
    { name: "Procurement", icon: ShoppingCart, color: "#0369a1" },
    { name: "Manufacturing", icon: Settings, color: "#0e7490" },
    { name: "Inventory Mgmt", icon: Package, color: "#0284c7" },
    { name: "Order Mgmt", icon: ClipboardList, color: "#2563eb" },
    { name: "Warehouse Mgmt", icon: Warehouse, color: "#1d4ed8" },
    { name: "Supply Chain", icon: Truck, color: "#0369a1" },
    { name: "CRM", icon: Handshake, color: "#0e7490" },
    { name: "Project Mgmt", icon: BarChart3, color: "#0284c7" },
    { name: "Workforce Mgmt", icon: TrendingUp, color: "#2563eb" },
    { name: "HR Management", icon: Users, color: "#1d4ed8" },
    { name: "Ecommerce", icon: ShoppingBag, color: "#0369a1" },
    { name: "Marketing", icon: Megaphone, color: "#0e7490" },
];

// Regular octagon clip-path in % (for CSS)
function octagonClip(w: number, h: number): string {
    const r = Math.min(w, h) / 2;
    const s = r * 0.414;
    const cx = w / 2;
    const cy = h / 2;
    const pts = [
        [cx - s, cy - r], [cx + s, cy - r],
        [cx + r, cy - s], [cx + r, cy + s],
        [cx + s, cy + r], [cx - s, cy + r],
        [cx - r, cy + s], [cx - r, cy - s],
    ];
    return `polygon(${pts
        .map(([x, y]) => `${((x / w) * 100).toFixed(1)}% ${((y / h) * 100).toFixed(1)}%`)
        .join(", ")})`;
}

// Octagon polygon points for SVG (absolute px)
function octagonPts(cx: number, cy: number, r: number): string {
    const s = r * 0.414;
    return [
        [cx - s, cy - r], [cx + s, cy - r],
        [cx + r, cy - s], [cx + r, cy + s],
        [cx + s, cy + r], [cx - s, cy + r],
        [cx - r, cy + s], [cx - r, cy - s],
    ].map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
}

// Constants
const SVG = 580;
const CX = SVG / 2;
const CY = SVG / 2;
const ORBIT_R = 222;   // orbit radius
const CTR_R = 82;    // center octagon radius
const ICON_SZ = 76;    // octagon card size

export const ERPCircularDesign = () => {
    const total = ERP_MODULES.length;

    return (
        <div
            className="relative flex items-center justify-center select-none"
            style={{ width: SVG, height: SVG }}
        >
            {/* Subtle glow behind whole design */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 78% 78% at 50% 50%, rgba(147,197,253,0.14) 0%, transparent 70%)",
                }}
            />

            {/* ── REVOLVING RING OF CARDS ── */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 50%" }}
            >
                {ERP_MODULES.map((mod, i) => {
                    const angleDeg = (360 / total) * i - 90;
                    const rad = (angleDeg * Math.PI) / 180;
                    const px = ORBIT_R * Math.cos(rad);
                    const py = ORBIT_R * Math.sin(rad);

                    // Container: icon (76×76) + gap + label (~20px)
                    // Center the icon box at orbit point → top offset = -ICON_SZ/2
                    // label hangs below → extends outward from center
                    const containerW = 96;
                    const containerH = ICON_SZ + 8 + 20;

                    return (
                        <motion.div
                            key={i}
                            className="absolute flex flex-col items-center"
                            style={{
                                left: `calc(50% + ${px}px - ${containerW / 2}px)`,
                                top: `calc(50% + ${py}px - ${ICON_SZ / 2}px)`,
                                width: containerW,
                            }}
                            /* Counter-rotate so each card & label stays upright */
                            animate={{ rotate: -360 }}
                            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                        >
                            {/* ── OCTAGON CARD with thin light border ── */}
                            {/* We use a wrapper div for the subtle border effect */}
                            <div
                                style={{
                                    width: ICON_SZ,
                                    height: ICON_SZ,
                                    clipPath: octagonClip(ICON_SZ, ICON_SZ),
                                    background: "linear-gradient(135deg, #ffffff 0%, #dbeafe 100%)",
                                    /* visible but light border via inset shadow */
                                    boxShadow: "inset 0 0 0 1.5px rgba(96, 165, 250, 0.75), 0 4px 14px rgba(37,99,235,0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {React.createElement(mod.icon, {
                                    style: { color: mod.color, width: 28, height: 28 },
                                })}
                            </div>

                            {/* ── MODULE LABEL outside the card ── */}
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

            {/* ── SVG: gradient dotted arrow spokes + center octagon ── */}
            <svg
                viewBox={`0 0 ${SVG} ${SVG}`}
                width={SVG}
                height={SVG}
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: 2 }}
            >
                <defs>
                    {/* Small arrowhead marker — light blue */}
                    <marker
                        id="dot-arrow"
                        markerWidth="3"
                        markerHeight="3"
                        refX="2.5"
                        refY="1.5"
                        orient="auto"
                    >
                        <path d="M 0 0 L 3 1.5 L 0 3 Z" fill="#93c5fd" opacity="0.85" />
                    </marker>

                    {/* Gradient for each spoke — generated per-angle dynamically below */}
                    {ERP_MODULES.map((_, i) => {
                        const angleDeg = (360 / total) * i - 90;
                        const rad = (angleDeg * Math.PI) / 180;
                        const x1 = CX + (CTR_R + 20) * Math.cos(rad);
                        const y1 = CY + (CTR_R + 20) * Math.sin(rad);
                        const x2 = CX + (ORBIT_R - ICON_SZ / 2 - 18) * Math.cos(rad);
                        const y2 = CY + (ORBIT_R - ICON_SZ / 2 - 18) * Math.sin(rad);
                        return (
                            <linearGradient
                                key={`grad-${i}`}
                                id={`sg${i}`}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                            </linearGradient>
                        );
                    })}

                    {/* Center octagon gradient */}
                    <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="60%" stopColor="#eff6ff" />
                        <stop offset="100%" stopColor="#bfdbfe" />
                    </radialGradient>

                    {/* Center shadow */}
                    <filter id="cs" x="-30%" y="-30%" width="160%" height="160%">
                        <feDropShadow dx="0" dy="3" stdDeviation="9" floodColor="#3b82f6" floodOpacity="0.22" />
                    </filter>
                </defs>

                {/* Gradient dotted arrow spokes */}
                {ERP_MODULES.map((_, i) => {
                    const angleDeg = (360 / total) * i - 90;
                    const rad = (angleDeg * Math.PI) / 180;
                    const x1 = CX + (CTR_R + 20) * Math.cos(rad);
                    const y1 = CY + (CTR_R + 20) * Math.sin(rad);
                    const x2 = CX + (ORBIT_R - ICON_SZ / 2 - 18) * Math.cos(rad);
                    const y2 = CY + (ORBIT_R - ICON_SZ / 2 - 18) * Math.sin(rad);
                    return (
                        <line
                            key={i}
                            x1={x1} y1={y1}
                            x2={x2} y2={y2}
                            stroke={`url(#sg${i})`}
                            strokeWidth="0.7"
                            strokeDasharray="2 5"
                            markerEnd="url(#dot-arrow)"
                        />
                    );
                })}

                {/* Center octagon — BORDER layer */}
                <polygon
                    points={octagonPts(CX, CY, CTR_R)}
                    fill="none"
                    stroke="rgba(96, 165, 250, 0.65)"
                    strokeWidth="1.5"
                    filter="url(#cs)"
                />
                {/* Center octagon — FILL layer */}
                <polygon
                    points={octagonPts(CX, CY, CTR_R - 1)}
                    fill="url(#cg)"
                    stroke="rgba(147,197,253,0.5)"
                    strokeWidth="1"
                />
                {/* Inner decorative octagon ring */}
                <polygon
                    points={octagonPts(CX, CY, CTR_R - 16)}
                    fill="none"
                    stroke="#93c5fd"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                    opacity="0.5"
                />
            </svg>

            {/* ── CENTER TEXT ── */}
            <div
                className="absolute flex flex-col items-center justify-center text-center z-10 pointer-events-none"
                style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: CTR_R * 1.4,
                }}
            >
                <p className="font-black text-blue-900 leading-none" style={{ fontSize: 36 }}>
                    13
                </p>
                <p className="font-black text-blue-800 leading-tight" style={{ fontSize: 19 }}>
                    ERP
                </p>
                <p className="font-bold text-blue-600 leading-snug" style={{ fontSize: 14 }}>
                    Modules
                </p>
            </div>
        </div>
    );
};




