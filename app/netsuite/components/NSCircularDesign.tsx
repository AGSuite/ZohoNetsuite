"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaUsers,
    FaChartLine,
    FaDatabase,
    FaCloud,
    FaHandshake,
    FaShoppingCart,
    FaTruck,
    FaCog,
} from "react-icons/fa";
import { BiBrain } from "react-icons/bi";

// ─── SVG geometry constants ───────────────────────────────────────────────────
// ViewBox: "-60 -60 720 720"  →  total 720×720 units, center at (300, 300)
const CX = 300, CY = 300;

// Orbit circle sits clearly outside the outer ring (outerR = 295).
// r = 340 gives a visible gap between the ring and the orbit.
const ORBIT_SVG_R = 340;

// How to convert SVG radius → CSS % for icon positioning:
//   CSS offset from center (%) = (ORBIT_SVG_R / 720) * 100
// because `left: calc(50% + X%)` uses the parent's full width,
// and 720 SVG units = 100% of the container.
const ORBIT_CSS_PCT = (ORBIT_SVG_R / 720) * 100; // ≈ 47.22 %

// ─── Data ─────────────────────────────────────────────────────────────────────

// 8 icons evenly at 45° so they never crowd each other
const STAKEHOLDERS = [
    { Icon: FaUsers,        name: "Customers", angle: 0   },
    { Icon: FaChartLine,    name: "Finance",   angle: 45  },
    { Icon: FaDatabase,     name: "ERP Data",  angle: 90  },
    { Icon: FaCloud,        name: "Cloud ERP", angle: 135 },
    { Icon: BiBrain,        name: "AI Engine", angle: 180 },
    { Icon: FaHandshake,    name: "Partners",  angle: 225 },
    { Icon: FaShoppingCart, name: "Commerce",  angle: 270 },
    { Icon: FaTruck,        name: "Logistics", angle: 315 },
];

// Module labels
const MODULES = [
    { name: "FINANCIALS",  angle: -90 },
    { name: "SCM",         angle: -30 },
    { name: "BFN",         angle:  30 },
    { name: "PSA",         angle:  90 },
    { name: "E-COMMERCE",  angle: 150 },
    { name: "CRM",         angle: 210 },
];

// Outer dark-blue segments
const OUTER_LABELS = [
    { text: "Multi-Currency",          startAngle: 135, endAngle: 225, gradient: "url(#g1)" },
    { text: "Multi-Company Tax",       startAngle: 225, endAngle: 315, gradient: "url(#g2)" },
    { text: "Multi-Language",          startAngle: -45, endAngle:  45, gradient: "url(#g3)" },
    { text: "Multi-Subsidiary Mgmt",   startAngle:  45, endAngle: 135, gradient: "url(#g4)" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export const NSCircularDesign = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const m = window.matchMedia("(max-width: 1023px)");
        setIsMobile(m.matches);
        const fn = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        m.addEventListener("change", fn);
        return () => m.removeEventListener("change", fn);
    }, []);

    return (
        <div className="relative w-full h-[460px] lg:h-[570px] xl:h-[640px] flex items-center justify-center overflow-visible select-none py-6">
            {/* Container — square, sized to match the visual diagram */}
            <div className="relative w-[370px] h-[370px] lg:w-[490px] lg:h-[490px] xl:w-[555px] xl:h-[555px]">

                {/* ── SVG static rings ─────────────────────────────────────── */}
                <svg viewBox="-60 -60 720 720" className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0a192f"/><stop offset="100%" stopColor="#112240"/>
                        </linearGradient>
                        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#112240"/><stop offset="100%" stopColor="#1e3a8a"/>
                        </linearGradient>
                        <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0c1d36"/><stop offset="100%" stopColor="#172a45"/>
                        </linearGradient>
                        <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1e3a8a"/><stop offset="100%" stopColor="#3b82f6"/>
                        </linearGradient>
                        <linearGradient id="midGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#dbeafe"/>
                        </linearGradient>
                        <linearGradient id="coreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0a192f"/><stop offset="100%" stopColor="#1e3a8a"/>
                        </linearGradient>
                        <filter id="sh"><feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.2"/></filter>
                        <filter id="bsh" x="-60%" y="-60%" width="220%" height="220%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
                            <feOffset dy="4" result="off"/>
                            <feFlood floodColor="#c5d4e8" floodOpacity="0.3"/>
                            <feComposite in2="off" operator="in"/>
                            <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
                        </filter>
                    </defs>

                    {/* Outer ring segments */}
                    {OUTER_LABELS.map((lbl, i) => {
                        const sR = (lbl.startAngle * Math.PI) / 180;
                        const eR = (lbl.endAngle   * Math.PI) / 180;
                        const oR = 295, iR = 235;
                        const la = (lbl.endAngle - lbl.startAngle) > 180 ? 1 : 0;
                        const x1=CX+oR*Math.cos(sR), y1=CY+oR*Math.sin(sR);
                        const x2=CX+oR*Math.cos(eR), y2=CY+oR*Math.sin(eR);
                        const x3=CX+iR*Math.cos(eR), y3=CY+iR*Math.sin(eR);
                        const x4=CX+iR*Math.cos(sR), y4=CY+iR*Math.sin(sR);
                        return (
                            <path key={i}
                                d={`M${x1} ${y1} A${oR} ${oR} 0 ${la} 1 ${x2} ${y2} L${x3} ${y3} A${iR} ${iR} 0 ${la} 0 ${x4} ${y4}Z`}
                                fill={lbl.gradient} stroke="#fff" strokeWidth="1.5" filter="url(#sh)"
                            />
                        );
                    })}

                    {/* Outer ring text paths */}
                    {OUTER_LABELS.map((lbl, i) => {
                        const r   = 265;
                        const mid = (lbl.startAngle + lbl.endAngle) / 2;
                        const bot = mid > 45 && mid < 225;
                        const a1  = (bot ? lbl.endAngle   : lbl.startAngle) * Math.PI / 180;
                        const a2  = (bot ? lbl.startAngle : lbl.endAngle)   * Math.PI / 180;
                        return (
                            <path key={i} id={`op${i}`}
                                d={`M${CX+r*Math.cos(a1)} ${CY+r*Math.sin(a1)} A${r} ${r} 0 0 ${bot?0:1} ${CX+r*Math.cos(a2)} ${CY+r*Math.sin(a2)}`}
                                fill="none"
                            />
                        );
                    })}

                    {/* Outer ring text — fontSize in SVG user-units so it scales with viewBox */}
                    {OUTER_LABELS.map((lbl, i) => (
                        <text key={i} fontSize="20" fontWeight="900" fill="white" letterSpacing="3">
                            <textPath href={`#op${i}`} startOffset="50%" textAnchor="middle">
                                {lbl.text}
                            </textPath>
                        </text>
                    ))}

                    {/* Middle (light-blue) ring */}
                    <circle cx={CX} cy={CY} r="215" fill="url(#midGrad)" stroke="#bfdbfe" strokeWidth="2" filter="url(#sh)"/>

                    {/* Module segment dividers */}
                    {MODULES.map((m, i) => {
                        const a = (m.angle * Math.PI) / 180 + Math.PI / 6;
                        return (
                            <line key={i}
                                x1={CX+110*Math.cos(a)} y1={CY+110*Math.sin(a)}
                                x2={CX+215*Math.cos(a)} y2={CY+215*Math.sin(a)}
                                stroke="#60a5fa" strokeWidth="1.5" opacity="0.4"
                            />
                        );
                    })}

                    {/* Module labels — two-line tspan for long names */}
                    {MODULES.map((m, i) => {
                        const a = (m.angle * Math.PI) / 180;
                        const x = CX + 160 * Math.cos(a);
                        const y = CY + 160 * Math.sin(a);
                        // Split "E-COMMERCE" into two lines: "E-" and "COMMERCE"
                        const parts = m.name === "E-COMMERCE"
                            ? ["E-", "COMMERCE"]
                            : [m.name];
                        return (
                            <text key={i}
                                x={x} y={y}
                                fontSize="18" fontWeight="800" fill="#1e3a5f"
                                textAnchor="middle" dominantBaseline="middle" letterSpacing="1"
                            >
                                {parts.length === 2 ? (
                                    <>
                                        <tspan x={x} dy="-10">{parts[0]}</tspan>
                                        <tspan x={x} dy="22">{parts[1]}</tspan>
                                    </>
                                ) : (
                                    m.name
                                )}
                            </text>
                        );
                    })}

                    {/* Inner SuiteCloud circle */}
                    <circle cx={CX} cy={CY} r="105" fill="url(#coreGrad)" stroke="#1e40af" strokeWidth="2" filter="url(#bsh)"/>

                    {/* SUITECLOUD curved text on top arc */}
                    <path id="sp" fill="none" d={`M${CX-85} ${CY} a85,85 0 0,1 170,0`}/>
                    <text fontSize="14" fontWeight="900" fill="white" letterSpacing="5">
                        <textPath href="#sp" startOffset="50%" textAnchor="middle">SUITECLOUD</textPath>
                    </text>

                    {/* PLATFORM curved text on bottom arc */}
                    <path id="pp" fill="none" d={`M${CX-85} ${CY} a85,85 0 0,0 170,0`}/>
                    <text fontSize="14" fontWeight="900" fill="white" letterSpacing="5">
                        <textPath href="#pp" startOffset="50%" textAnchor="middle">PLATFORM</textPath>
                    </text>

                    {/* ── Dashed orbit circle ──────────────────────────────── */}
                    {/* r = ORBIT_SVG_R = 310 units, just outside the outer ring (295) */}
                    <circle cx={CX} cy={CY} r={ORBIT_SVG_R}
                        fill="none" stroke="#1e3a8a" strokeWidth="1.8"
                        strokeDasharray="7,7" opacity="0.85"
                    />
                </svg>

                {/* ── Central NetSuite logo ─────────────────────────────────── */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[58px] h-[58px] lg:w-[72px] lg:h-[72px] xl:w-[82px] xl:h-[82px] rounded-full bg-white flex items-center justify-center z-40 shadow-lg border-2 border-blue-100">
                    <Image src="/images/logos/oracle%20netsuite%20logo.png" alt="Oracle NetSuite" width={60} height={60} className="object-contain"/>
                </div>

                {/*
                  ── Revolving icons ───────────────────────────────────────────
                  ONE shared motion.div rotates 360° around the container center.
                  Each icon is positioned at ORBIT_CSS_PCT from center (matches
                  the SVG dashed circle at r=310 / 720 total = 43.06%).
                  Each icon counter-rotates -360° to stay upright.
                */}
                <motion.div
                    className="absolute inset-0 z-50 pointer-events-none"
                    style={{ transformOrigin: "50% 50%" }}
                    animate={isMobile ? {} : { rotate: 360 }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                >
                    {STAKEHOLDERS.map((s, i) => {
                        const rad = (s.angle * Math.PI) / 180;
                        const ox  = (ORBIT_CSS_PCT * Math.cos(rad)).toFixed(3);
                        const oy  = (ORBIT_CSS_PCT * Math.sin(rad)).toFixed(3);

                        return (
                            <div
                                key={i}
                                className="absolute pointer-events-auto"
                                style={{
                                    left:      `calc(50% + ${ox}%)`,
                                    top:       `calc(50% + ${oy}%)`,
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                {/* Counter-rotation keeps the icon label upright */}
                                <motion.div
                                    className="flex flex-col items-center gap-1"
                                    style={{ transformOrigin: "50% 50%" }}
                                    animate={isMobile ? {} : { rotate: -360 }}
                                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="w-11 h-11 lg:w-13 lg:h-13 xl:w-14 xl:h-14 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-[0_4px_14px_rgba(59,130,246,0.35)] border-2 border-blue-100">
                                        <s.Icon size={19} />
                                    </div>
                                    <span className="text-[9px] lg:text-[10px] font-bold text-blue-900 uppercase tracking-wide whitespace-nowrap bg-white/95 px-1.5 py-0.5 rounded border border-blue-100 shadow-sm leading-none">
                                        {s.name}
                                    </span>
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>

            </div>
        </div>
    );
};
