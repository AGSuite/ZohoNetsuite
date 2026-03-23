"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Sparkles,
    CheckCircle,
    ChevronRight,
    ArrowRight,
    Briefcase,
    HelpCircle,
    Clock,
    Target,
    Send,
    Users,
    Globe2,
    Building2,
    Globe
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

declare global {
  interface Window {
    validateEmailZConsult?: () => boolean;
    checkMandatoryZConsult?: (e: any) => boolean;
  }
}

export default function ZohoFreeConsultation() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Global Validation Logic for Zoho Consultation Form
        window.validateEmailZConsult = function () {
            const form = document.forms.namedItem('WebToLeadsConsultZoho');
            if (!form) return true;
            const emailFld = form.querySelectorAll('input[type="email"]');
            for (let i = 0; i < emailFld.length; i++) {
                const emailVal = (emailFld[i] as HTMLInputElement).value;
                if (emailVal.replace(/^\s+|\s+$/g, '').length !== 0) {
                    const atpos = emailVal.indexOf('@');
                    const dotpos = emailVal.lastIndexOf('.');
                    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                        alert('Please enter a valid email address.');
                        (emailFld[i] as HTMLInputElement).focus();
                        return false;
                    }
                }
            }
            return true;
        };

        window.checkMandatoryZConsult = function (e: any) {
            const form = e.target as HTMLFormElement;
            const mndFileds = ['Last Name', 'Email', 'Mobile', 'Company', 'Description'];
            const fldLangVal = ['Name', 'Email', 'Mobile', 'Company', 'Challenge Description'];

            for (let i = 0; i < mndFileds.length; i++) {
                const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement;
                if (fieldObj && fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0) {
                    alert(fldLangVal[i] + ' cannot be empty.');
                    fieldObj.focus();
                    return false;
                }
            }

            if (window.validateEmailZConsult && !window.validateEmailZConsult()) {
                return false;
            }

            return true;
        };
    }, []);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (window.checkMandatoryZConsult && !window.checkMandatoryZConsult(e.nativeEvent)) {
            e.preventDefault();
        }
    };

    if (!isClient) return null;

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
                        <Link href="/zoho" className="text-blue-300 hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                        <Link href="/zoho/contact" className="text-blue-300 hover:text-white transition-colors">Contact</Link>
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
                                <Sparkles className="w-4.5 h-4.5 text-yellow-500" />
                                <span className="text-blue-900 text-xs font-medium tracking-widest uppercase">Expert Strategy Session</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 leading-[1.1] tracking-tight">
                                Ignite Your <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-200">
                                    Enterprise Evolution
                                </span>
                            </h1>

                            <div className="space-y-4">
                                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                                    Ready to scale but not sure where to start? Book a free discovery session with our senior certified Zoho consultants to audit your stack or architect your next move.
                                </p>
                            </div>

                            {/* Consultation Benefits Cards */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        step: "01",
                                        title: "Operational Audit",
                                        desc: "A deep dive into your current manual processes or existing legacy systems to identify optimization gaps."
                                    },
                                    {
                                        step: "02",
                                        title: "Strategic Roadmap",
                                        desc: "We architect a phased Zoho implementation plan designed to deliver immediate ROI and long-term scale."
                                    },
                                    {
                                        step: "03",
                                        title: "Senior Expertise",
                                        desc: "Consult directly with specialists who have delivered 250+ successful Zoho projects across 15+ industries."
                                    },
                                    {
                                        step: "04",
                                        title: "Tech Stack Review",
                                        desc: "High-level analysis of your data migration needs, API integrations, and security hardening requirements."
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
                                        <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-black font-bold text-lg mb-2 leading-tight transition-colors uppercase">{item.title}</h4>
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
                            <div className="relative bg-white rounded-[2.5rem] shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />
                                
                                <div className="relative z-10 p-8 lg:p-10">
                                    <div className="mb-8 border-b border-gray-100 pb-6">
                                        <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2 tracking-tight">Book Discovery Session</h2>
                                        <p className="text-gray-500 text-base">Select your preferred focus area — we'll secure your session within 24 hours.</p>
                                    </div>

                                    <form 
                                        action="https://crm.zoho.in/crm/WebToLeadForm" 
                                        name="WebToLeadsConsultZoho" 
                                        method="POST" 
                                        onSubmit={handleFormSubmit}
                                        acceptCharset="UTF-8"
                                        className="space-y-4"
                                    >
                                        <input type="text" className="hidden" name="xnQsjsdp" defaultValue="cae9ae065232fde2e40c34423041df835a4066ff2103c546e198d684b35e9861" readOnly />
                                        <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                                        <input type="text" className="hidden" name="xmIwtLD" defaultValue="3820b2b7a84f952a9adb8f71d02ba0d6e9247f59314524fd5d4528cf4dff99b516b0d501ae4661e854a71c2dfb2b5263" readOnly />
                                        <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                                        <input type="text" className="hidden" name="returnURL" defaultValue="https://agsuitetech.com/contact-us/thank-you.php" readOnly />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                                                <input type="text" name="Last Name" required placeholder="John Doe" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Business Email *</label>
                                                <input type="email" name="Email" required placeholder="john@company.com" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Mobile Number *</label>
                                                <input type="tel" name="Mobile" required placeholder="+91 00000 00000" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Company Name *</label>
                                                <input type="text" name="Company" required placeholder="Company Inc." className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Consultation Focus *</label>
                                            <select name="LEADCF5" required className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all appearance-none cursor-pointer">
                                                <option value="">Select Priority</option>
                                                <option value="Zoho Implementation Strategy">New Implementation Strategy</option>
                                                <option value="Zoho Performance Audit">System Performance Audit</option>
                                                <option value="Zoho Migration Planning">Data Migration Planning</option>
                                                <option value="Zoho Integration Architecting">API & Integration Architecting</option>
                                                <option value="Zoho Licensing Advisory">Cost & Licensing Advisory</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Primary Business Challenge *</label>
                                            <textarea name="Description" required rows={3} placeholder="Tell us about your biggest operational hurdle or your scaling objectives..." className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all resize-none placeholder-gray-400" />
                                        </div>

                                        <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] text-sm">
                                            <Send className="w-4 h-4" />
                                            Secure My Strategy Session
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Quick Access Sub-Pages (THE 4 CARDS) ───────────────────────────── */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Careers",
                                desc: "Join our growing team.",
                                link: "/zoho/contact/careers",
                                icon: Briefcase,
                                image: "/images/contact/carrer.webp"
                            },
                            {
                                title: "Support",
                                desc: "24/7 client support.",
                                link: "/zoho/contact/support",
                                icon: HelpCircle,
                                image: "/images/contact/support.webp"
                            },
                            {
                                title: "Request Quote",
                                desc: "Get project pricing.",
                                link: "/zoho/contact/request-quote",
                                icon: Clock,
                                image: "/images/contact/quote.webp"
                            },
                            {
                                title: "Free Consultation",
                                desc: "Talk to our team.",
                                link: "/zoho/contact/free-consultation",
                                icon: Target,
                                image: "/images/contact/consultation.webp"
                            }
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href={item.link}
                                className="group relative h-[420px] rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 flex flex-col justify-end"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors" />
                                <div className="relative z-10 p-8 text-left">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                                        <item.icon size={24} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-medium text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-300 text-sm mb-6 group-hover:text-white transition-colors">{item.desc}</p>
                                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-white text-blue-900 group-hover:text-blue-600 border border-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm">
                                        <span className="text-xs font-medium uppercase tracking-wider">Explore More</span>
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-700" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
