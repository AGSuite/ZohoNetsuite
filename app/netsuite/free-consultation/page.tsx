"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
    Sparkles,
    CheckCircle,
    ChevronRight,
    ArrowRight,
    Briefcase,
    HelpCircle,
    Clock,
    Target,
    Send
} from "lucide-react";

/* ─── Particles ───────────────────────────────────────────────────────────── */
const PARTICLES = [
    { w: 2, h: 2, top: 10, left: 15, dur: 5, delay: 0.3 },
    { w: 1.5, h: 1.5, top: 25, left: 70, dur: 4.2, delay: 1.1 },
    { w: 3, h: 3, top: 55, left: 8, dur: 6, delay: 0.7 },
    { w: 2, h: 2, top: 75, left: 88, dur: 4.8, delay: 2.0 },
];

export default function FreeConsultationTopLevel() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        (window as any).addAriaSelected409531000047791096 = function (event: any) {
            const optionElem = (event as any).target;
            const prev = optionElem.querySelector('[aria-selected=true]');
            if (prev) prev.removeAttribute('aria-selected');
            optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
        };

        (window as any).validateEmail409531000047791096 = function () {
            const form = document.forms.namedItem('WebToLeads409531000047791096') as HTMLFormElement;
            if (!form) return true;
            const emailFld = form.querySelectorAll('[ftype="email"]');
            for (let i = 0; i < emailFld.length; i++) {
                const emailVal = (emailFld[i] as HTMLInputElement).value;
                if ((emailVal.replace(/^\s+|\s+$/g, '')).length !== 0) {
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

        (window as any).checkMandatory409531000047791096 = function () {
            const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF127', 'LEADCF166'];
            const fldLangVal = ['Company Name', 'Name', 'Role', "POC's Email", "POC's Mobile", 'Annual Revenue', 'How We Can Help You', 'How did you hear about us.', 'Netsuite Services'];
            const form = document.forms.namedItem('WebToLeads409531000047791096') as HTMLFormElement;
            if (!form) return false;

            for (let i = 0; i < mndFileds.length; i++) {
                const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
                if (fieldObj) {
                    if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length === 0) {
                        alert(fldLangVal[i] + ' cannot be empty.');
                        fieldObj.focus();
                        return false;
                    } else if (fieldObj.nodeName === 'SELECT') {
                        const selectField = fieldObj as HTMLSelectElement;
                        if (selectField.options[selectField.selectedIndex].value === '' || selectField.options[selectField.selectedIndex].value === '-None-') {
                            alert(fldLangVal[i] + ' cannot be none.');
                            fieldObj.focus();
                            return false;
                        }
                    }
                }
            }
            if ((window as any).validateEmail409531000047791096 && !(window as any).validateEmail409531000047791096()) return false;
            return true;
        };

        // Handle reCAPTCHA rendering for SPA navigation
        const renderRecaptcha = () => {
            const container = document.getElementById('recap409531000042578178_ns');
            if ((window as any).grecaptcha && container) {
                try {
                    // Check if already rendered
                    if (container.children.length > 0) return;

                    (window as any).grecaptcha.render('recap409531000042578178_ns', {
                        'sitekey': '6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_',
                        'theme': 'light',
                        'callback': (window as any).rccallback409531000042578178_ns
                    });
                } catch (e) {
                    console.error("reCAPTCHA render error:", e);
                }
            }
        };

        if ((window as any).grecaptcha) {
            if ((window as any).grecaptcha.ready) {
                (window as any).grecaptcha.ready(renderRecaptcha);
            } else {
                renderRecaptcha();
            }
        } else {
            const interval = setInterval(() => {
                if ((window as any).grecaptcha) {
                    if ((window as any).grecaptcha.ready) {
                        (window as any).grecaptcha.ready(renderRecaptcha);
                    } else {
                        renderRecaptcha();
                    }
                    clearInterval(interval);
                }
            }, 300);
            setTimeout(() => clearInterval(interval), 5000);
        }
    }, []);

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
                                      <form 
                                        id="webform409531000047791096"
                                        action="https://crm.zoho.in/crm/WebToLeadForm" 
                                        name="WebToLeads409531000047791096" 
                                        method="POST" 
                                        onSubmit={(e) => {
                                            if ((window as any).checkMandatory409531000047791096 && !(window as any).checkMandatory409531000047791096()) {
                                                e.preventDefault();
                                            }
                                        }}
                                        acceptCharset="UTF-8"
                                        className="space-y-4"
                                    >
                                        <input type="text" className="hidden" name="xnQsjsdp" value="2ae4ca1841d27018fa82a0a48a96f1c01673f80384140a440922ae0aab21aae3" readOnly />
                                        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                                        <input type="text" className="hidden" name="xmIwtLD" value="56ac8377184c3ea501a9db3ccd450a182e7e602f9cbf901b0c9852cc9de9f7c713a4ce3d1e636d34dc4666caf4082423" readOnly />
                                        <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
                                        <input type="text" className="hidden" name="returnURL" value="https://www.agsuite.tech/thank-you" readOnly />
                                        <input type="text" className="hidden" name="aG9uZXlwb3Q" value="" readOnly />

                                        {/* Hidden default fields required by Zoho */}
                                        <select name="Lead Status" className="hidden" defaultValue="Database">
                                            <option value="Database">Database</option>
                                        </select>
                                        <select name="Lead Source" className="hidden" defaultValue="Website (Form)">
                                            <option value="Website (Form)">Website (Form)</option>
                                        </select>
                                        <input type="hidden" name="No of Employees" value="0" />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                    Name <span className="text-blue-600">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="Last_Name"
                                                    name="Last Name"
                                                    required
                                                    maxLength={80}
                                                    placeholder="John Doe"
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                    POC's Email <span className="text-blue-600">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="Email"
                                                    ftype="email"
                                                    name="Email"
                                                    required
                                                    maxLength={100}
                                                    placeholder="john@company.com"
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                    Role <span className="text-blue-600">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="Designation"
                                                    name="Designation"
                                                    required
                                                    maxLength={100}
                                                    placeholder="CFO / Manager"
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                    POC's Mobile <span className="text-blue-600">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="Mobile"
                                                    name="Mobile"
                                                    required
                                                    maxLength={30}
                                                    placeholder="+91 9876543210"
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                Company Name <span className="text-blue-600">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="Company"
                                                name="Company"
                                                required
                                                maxLength={200}
                                                placeholder="Company Inc."
                                                className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                    Netsuite Services <span className="text-blue-600">*</span>
                                                </label>
                                                <select
                                                    id="LEADCF166"
                                                    name="LEADCF166"
                                                    required
                                                    onChange={(e) => (window as any).addAriaSelected409531000047791096?.(e)}
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer"
                                                >
                                                    <option value="" disabled selected>-Select NetSuite Service-</option>
                                                    <option value="NetSuite Licenses">NetSuite Licenses</option>
                                                    <option value="NetSuite Implementation">NetSuite Implementation</option>
                                                    <option value="NetSuite Licenses + Implementation">NetSuite Licenses + Implementation</option>
                                                    <option value="New Subsidiary Implementation">New Subsidiary Implementation</option>
                                                    <option value="NetSuite Support">NetSuite Support</option>
                                                    <option value="NetSuite Optimization">NetSuite Optimization</option>
                                                    <option value="NetSuite Customization">NetSuite Customization</option>
                                                    <option value="NetSuite Integrations">NetSuite Integrations</option>
                                                    <option value="NetSuite India Localization">NetSuite India Localization</option>
                                                    <option value="NetSuite Data Backup for India">NetSuite Data Backup for India</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                    Annual Revenue <span className="text-blue-600">*</span>
                                                </label>
                                                <select
                                                    id="LEADCF19"
                                                    name="LEADCF19"
                                                    required
                                                    onChange={(e) => (window as any).addAriaSelected409531000047791096?.(e)}
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer"
                                                >
                                                    <option value="-None-">-None-</option>
                                                    <option value="Less than 8 Cr ($ 1M)">Less than 8 Cr ($ 1M)</option>
                                                    <option value="8 - 20 Cr ($ 1M - 2.5M)">8 - 20 Cr ($ 1M - 2.5M)</option>
                                                    <option value="20 - 40 Cr ($ 2.5M - 5M)">20 - 40 Cr ($ 2.5M - 5M)</option>
                                                    <option value="40 - 80 Cr ($ 5M - 10M)">40 - 80 Cr ($ 5M - 10M)</option>
                                                    <option value="80 - 120 Cr ($ 10M - 15M)">80 - 120 Cr ($ 10M - 15M)</option>
                                                    <option value="120 - 200 Cr ($ 15M - 25M)">120 - 200 Cr ($ 15M - 25M)</option>
                                                    <option value="200 - 400 Cr ($ 25M - 50M)">200 - 400 Cr ($ 25M - 50M)</option>
                                                    <option value="400 - 800 Cr ($ 50M - 100M)">400 - 800 Cr ($ 50M - 100M)</option>
                                                    <option value="800 - 2000 Cr ($ 100M - 250M)">800 - 2000 Cr ($ 100M - 250M)</option>
                                                    <option value="More than 2000 Cr ($ 250M+)">More than 2000 Cr ($ 250M+)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">How did you hear about us. *</label>
                                            <select id="LEADCF127" name="LEADCF127" required onChange={(e) => (window as any).addAriaSelected409531000047791096?.(e)} className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer">
                                                <option value="-None-">-None-</option>
                                                <option value="Email">Email</option>
                                                <option value="Event">Event</option>
                                                <option value="Friend/Associate">Friend/Associate</option>
                                                <option value="Search">Search</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Referral">Referral</option>
                                            </select>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                How We Can Help You <span className="text-blue-600">*</span>
                                            </label>
                                            <textarea
                                                id="LEADCF123"
                                                name="LEADCF123"
                                                required
                                                rows={3}
                                                placeholder="Share your project details, goals, or challenges…"
                                                className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none resize-none placeholder-gray-400"
                                            />
                                        </div>

                                        <input type="submit" id="formsubmit" className="formsubmit zcwf_button w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] text-sm uppercase tracking-widest cursor-pointer" value="Secure My Strategy Session" />
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Quick Access Sub-Pages ────────────────────────────────────────── */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 tracking-tight">
                            Explore More Ways to{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                Connect
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Free Consultation",
                                desc: "Talk to an expert.",
                                link: "/netsuite/contact/free-consultation",
                                icon: Target,
                                image: "/images/contact/consultation.webp"
                            },
                            {
                                title: "Request Quote",
                                desc: "Get a project estimate.",
                                link: "/netsuite/contact/request-quote",
                                icon: Clock,
                                image: "/images/contact/quote.webp"
                            },
                            {
                                title: "Careers",
                                desc: "Join our growing team.",
                                link: "/netsuite/contact/careers",
                                icon: Briefcase,
                                image: "/images/contact/carrer.webp"
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
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
            
            <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="afterInteractive" />
            <Script id="zoho-salesiq-ns-consult" strategy="afterInteractive">
                {`
                    var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
                    function rccallback409531000042578178_ns() {
                        if(document.getElementById('recap409531000042578178_ns')!=undefined){
                            document.getElementById('recap409531000042578178_ns').setAttribute('captcha-verified',true);
                        }
                        if(document.getElementById('recapErr409531000042578178_ns')!=undefined && document.getElementById('recapErr409531000042578178_ns').style.visibility == 'visible' ){
                            document.getElementById('recapErr409531000042578178_ns').style.visibility='hidden';
                        }
                    }
                `}
            </Script>
            <Script id="wf_anal_ns_consult" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=dc6cfe6eaa303bd5d195bb5352719bba230c529eae5f6f0823d0a841f9dd57657e6049706260d6effe692960c6c5bab7gid6711126e0f954ae10107c9d2bd1b386506273b37e6e0265531ba837d5c4ed25dgid10b59705091816e9551c4ebc62e953e4111c79398428255d38ea16f03d7b9f05gid0c55c5d686e2e3f755b127157834bc2774e542abc82e5c1ce5eba2a071c6fc31&tw=70c0fd3034b5b59f1ac7be0a50f49b22d50d34cb8687eb35e3649323a8c88143&version=v2" />
        </div>
    );
}




