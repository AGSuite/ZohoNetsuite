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
    Search,
    Zap
} from "lucide-react";

const ORBITS = [
    { radius: 140, duration: 25, color: "rgba(59, 130, 246, 0.4)" }, // blue-500
    { radius: 210, duration: 40, color: "rgba(37, 99, 235, 0.3)" }, // blue-600
    { radius: 280, duration: 55, color: "rgba(29, 78, 216, 0.2)" }, // blue-700
];

const NODES = [
    { icon: TrendingUp, label: "Sales", angle: 0, orbit: 0, color: "#BFDBFE" },
    { icon: Heart, label: "Care", angle: 120, orbit: 0, color: "#93C5FD" },
    { icon: Target, label: "Deals", angle: 240, orbit: 0, color: "#60A5FA" },

    { icon: Mail, label: "Email", angle: 45, orbit: 1, color: "#3B82F6" },
    { icon: Phone, label: "Calls", angle: 135, orbit: 1, color: "#2563EB" },
    { icon: Search, label: "Zia AI", angle: 225, orbit: 1, color: "#1D4ED8" },
    { icon: Megaphone, label: "Social", angle: 315, orbit: 1, color: "#1E40AF" },

    { icon: BarChart3, label: "Reports", angle: 90, orbit: 2, color: "#60A5FA" },
    { icon: Handshake, label: "Partner", angle: 180, orbit: 2, color: "#BFDBFE" },
    { icon: ClipboardList, label: "Tasks", angle: 270, orbit: 2, color: "#93C5FD" },
    { icon: DollarSign, label: "Quotes", angle: 0, orbit: 2, color: "#3B82F6" },
];

export const ZohoCRMCircularDesign = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <style>{`
                @keyframes orbit-revolve {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes hub-pulse {
                    0%, 100% { opacity: 0.15; transform: scale(1); }
                    50% { opacity: 0.25; transform: scale(1.05); }
                }
                .animate-orbit-revolve {
                    animation: orbit-revolve var(--duration) linear infinite;
                    will-change: transform;
                }
                .animate-hub-pulse {
                    animation: hub-pulse 4s ease-in-out infinite;
                    will-change: transform, opacity;
                }
            `}</style>
            
            {/* ── Background Glow ────────────────────────────────────────────────── */}
            <div className="absolute w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[100px] animate-hub-pulse" />

            {/* ── Orbits ──────────────────────────────────────────────────────────── */}
            {ORBITS.map((orbit, i) => (
                <div
                    key={i}
                    className="absolute border rounded-full pointer-events-none animate-orbit-revolve"
                    style={{
                        width: orbit.radius * 2,
                        height: orbit.radius * 2,
                        borderColor: orbit.color,
                        borderWidth: "1px",
                        '--duration': `${orbit.duration}s`
                    } as any}
                />
            ))}

            {/* ── Nodes ────────────────────────────────────────────────────────────── */}
            {NODES.map((node, i) => {
                const radius = ORBITS[node.orbit].radius;
                const duration = ORBITS[node.orbit].duration;

                return (
                    <div
                        key={i}
                        className="absolute animate-orbit-revolve"
                        style={{
                            width: radius * 2,
                            height: radius * 2,
                            '--duration': `${duration}s`
                        } as any}
                    >
                        <div
                            className="absolute flex flex-col items-center justify-center"
                            style={{
                                left: "50%",
                                top: 0,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {/* Node Core */}
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/20 flex items-center justify-center shadow-2xl backdrop-blur-md relative group cursor-pointer"
                            >
                                <node.icon
                                    className="w-5 h-5 transition-transform group-hover:scale-110"
                                    style={{ color: node.color }}
                                />

                                {/* Tooltip */}
                                <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap pointer-events-none uppercase tracking-wider">
                                    {node.label}
                                </div>

                                {/* Active Pulse */}
                                <div
                                    className="absolute inset-0 rounded-2xl animate-ping opacity-20 pointer-events-none"
                                    style={{ backgroundColor: node.color }}
                                />
                            </motion.div>
                        </div>
                    </div>
                );
            })}

            {/* ── Central Hub ──────────────────────────────────────────────────────── */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15, delay: 0.5 }}
                className="relative z-20 w-32 h-32 rounded-full bg-slate-950 border-2 border-blue-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)] overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-white/10" />
                <div className="flex flex-col items-center gap-1">
                    <Zap className="w-10 h-10 text-blue-400" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                        Zoho CRM
                    </span>
                </div>

                {/* Rotating Hub Ring */}
                <div
                    className="absolute inset-2 border-t-2 border-r-2 border-blue-400/30 rounded-full animate-orbit-revolve"
                    style={{ '--duration': '10s' } as any}
                />
            </motion.div>
        </div>
    );
};




