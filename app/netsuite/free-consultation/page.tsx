"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Sparkles,
    CheckCircle,
    Target,
    ChevronRight,
    Send,
    ArrowRight,
    Briefcase,
    HelpCircle,
    Clock
} from "lucide-react";

/* ─── Particles ───────────────────────────────────────────────────────────── */
const PARTICLES = [
    { w: 2, h: 2, top: 10, left: 15, dur: 5, delay: 0.3 },
    { w: 1.5, h: 1.5, top: 25, left: 70, dur: 4.2, delay: 1.1 },
    { w: 3, h: 3, top: 55, left: 8, dur: 6, delay: 0.7 },
    { w: 2, h: 2, top: 75, left: 88, dur: 4.8, delay: 2.0 },
    { w: 1, h: 1, top: 40, left: 42, dur: 3.5, delay: 0.5 },
    { w: 2.5, h: 2.5, top: 85, left: 30, dur: 5.5, delay: 1.5 },
];

export default function FreeConsultationTopLevel() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        serviceInterest: "",
        annualRevenue: "",
        message: "",
        privacyAccepted: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white">

            {/* ── Hero / Form Section ─────────────────────────────────────────────── */}
            <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#000814] via-[#000d2e] to-[#001a4d] flex items-center">

                {/* Grid lines */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "70px 70px",
                    }}
                />

                {/* Glow blobs */}
                <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-cyan-700/10 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/3 pointer-events-none" />

                {/* Floating particles */}
                {PARTICLES.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400/40 pointer-events-none"
                        style={{ width: p.w, height: p.h, top: `${p.top}%`, left: `${p.left}%` }}
                        animate={{ y: [0, -22, 0], opacity: [0.25, 0.9, 0.25] }}
                        transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
                    />
                ))}

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-20">

                    {/* Breadcrumb */}
                    <motion.nav
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm font-medium mb-16"
                    >
                        <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                        <Link href="/netsuite/contact" className="text-blue-300 hover:text-white transition-colors">Contact</Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                        <span className="text-white/60">Free Consultation</span>
                    </motion.nav>

                    <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

                        {/* ── LEFT: Content ─────────────────────────────────────────── */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-10 lg:sticky lg:top-32"
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white backdrop-blur-md w-fit shadow-lg shadow-blue-500/10">
                                <Sparkles className="w-4.5 h-4.5 text-yellow-400" />
                                <span className="text-blue-900 text-xs font-medium tracking-widest uppercase">Free Discovery Session</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 leading-[1.1] tracking-tight">
                                Ignite Your Enterprise <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-200">
                                    Evolution with Expert
                                </span>
                            </h1>

                            <div className="space-y-4">
                                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                                    Ready to scale? Book a session with our certified consultants to audit your stack or architect your next move.
                                    Our consultation sessions are designed to provide immediate value. We focus on identifying bottlenecks and outlining actionable strategies
                                </p>
                            </div>

                            {/* Consultation Process Cards */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        step: "01",
                                        title: "Discovery & Gap Analysis",
                                        desc: "Identifying unique business challenges, operational inefficiencies, and long-term scaling goals to architect the right solution."
                                    },
                                    {
                                        step: "02",
                                        title: "Strategic System Audit",
                                        desc: "A high-level technical review of your existing ERP or manual processes to uncover and eliminate mission-critical bottlenecks."
                                    },
                                    {
                                        step: "03",
                                        title: "Tailored Solution Roadmap",
                                        desc: "Architecting a strategic NetSuite implementation or optimization plan specifically tailored to your industry-unique requirements."
                                    },
                                    {
                                        step: "04",
                                        title: "Senior Expert Consultation",
                                        desc: "A deep-dive Q&A session with our senior certified consultants to resolve any technical, operational, or commercial queries."
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        className="p-6 rounded-3xl border border-white/20 bg-gradient-to-br from-white via-white/95 to-blue-50 shadow-xl hover:shadow-blue-400/20 hover:-translate-y-1 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-blue-600 text-sm font-black tracking-widest uppercase">{item.step}</span>
                                            <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-100 to-transparent group-hover:from-blue-500 transition-all duration-500" />
                                        </div>
                                        <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-black font-medium text-lg mb-2 leading-tight transition-colors">{item.title}</h4>
                                        <p className="text-gray-600 text-xs leading-relaxed font-medium">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ── RIGHT: Form ───────────────────────────────────────────── */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                                {/* Top accent bar */}
                                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

                                {/* Light blobs inside form */}
                                <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-blue-50/80 rounded-full blur-[80px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-indigo-50/60 rounded-full blur-[70px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

                                <div className="relative z-10 p-8 lg:p-10">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-indigo-900 to-cyan-900 sm:text-3xl font-medium mb-2">Schedule a free consultation session</h2>
                                        <p className="text-gray-500 text-base">Select your area of interest below — we'll connect soon.</p>
                                    </div>

                                    {submitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center py-16 text-center gap-4"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                                <CheckCircle className="w-8 h-8 text-green-600" />
                                            </div>
                                            <h3 className="text-xl font-medium text-gray-900">Request Sent!</h3>
                                            <p className="text-gray-500 max-w-xs">Thank you for your interest. Our experts will reach out within 24 hours.</p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider mb-2">
                                                        First Name <span className="text-blue-600">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="John"
                                                        value={formData.firstName}
                                                        onChange={e => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                                                        className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider mb-2">
                                                        Last Name <span className="text-blue-600">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="Doe"
                                                        value={formData.lastName}
                                                        onChange={e => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                                                        className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider mb-2">
                                                    Business Email <span className="text-blue-600">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider mb-2">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        placeholder="+1 (555) 000-0000"
                                                        value={formData.phone}
                                                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                                        className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider mb-2">
                                                        Job Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="CFO"
                                                        value={formData.jobTitle}
                                                        onChange={e => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                                                        className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider mb-2">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Company Inc."
                                                    value={formData.company}
                                                    onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider mb-2">
                                                    Service Interest <span className="text-blue-600">*</span>
                                                </label>
                                                <select
                                                    value={formData.serviceInterest}
                                                    onChange={e => setFormData(prev => ({ ...prev, serviceInterest: e.target.value }))}
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select Service Interest</option>
                                                    <option value="ERP Implementation">ERP Implementation</option>
                                                    <option value="System Audit">System Audit</option>
                                                    <option value="Customization">Customization</option>
                                                    <option value="Integration">Integration</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider mb-2">
                                                    How can we help?
                                                </label>
                                                <textarea
                                                    rows={3}
                                                    placeholder="Share your project details, goals, or challenges…"
                                                    value={formData.message}
                                                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none resize-none placeholder-gray-400"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semimedium rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] text-sm"
                                            >
                                                <Send size={18} />
                                                Book My Free Consultation
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Quick Access Sub-Pages ────────────────────────────────────────── */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Careers",
                                desc: "Join our growing team.",
                                link: "/netsuite/contact/careers",
                                icon: Briefcase,
                                image: "/images/contact/carrer.webp"
                            },
                            {
                                title: "Support",
                                desc: "24/7 client support.",
                                link: "/netsuite/contact/support",
                                icon: HelpCircle,
                                image: "/images/contact/support.webp"
                            },
                            {
                                title: "Request Quote",
                                desc: "Get a project estimate.",
                                link: "/netsuite/contact/request-quote",
                                icon: Clock,
                                image: "/images/contact/quote.webp"
                            },
                            {
                                title: "Free Consultation",
                                desc: "Talk to an expert.",
                                link: "/netsuite/contact/free-consultation",
                                icon: Target,
                                image: "/images/contact/consultation.webp"
                            }
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href={item.link}
                                className="group relative h-[420px] rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 flex flex-col justify-end"
                            >
                                {/* Background Image */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors" />

                                {/* Content */}
                                <div className="relative z-10 p-8 text-left">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                                        <item.icon size={24} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-medium text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-300 text-sm mb-6 group-hover:text-white transition-colors">{item.desc}</p>

                                    {/* Button Style Link */}
                                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-white text-blue-900 group-hover:text-blue-600 border border-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm">
                                        <span className="text-xs font-medium uppercase tracking-wider">Explore More</span>
                                        <ArrowRight size={14} />
                                    </div>
                                </div>

                                {/* Bottom Progress Bar */}
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-700" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
