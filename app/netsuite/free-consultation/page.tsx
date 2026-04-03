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
    { w: 1, h: 1, top: 40, left: 42, dur: 3.5, delay: 0.5 },
    { w: 2.5, h: 2.5, top: 85, left: 30, dur: 5.5, delay: 1.5 },
];

declare global {
  interface Window {
    validateEmail409531000026445204_ns?: () => boolean;
    checkMandatory409531000026445204_ns?: (e: any) => boolean;
    trackVisitor409531000026445204_ns?: () => void;
  }
}

export default function FreeConsultationTopLevel() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        window.validateEmail409531000026445204_ns = function () {
            const form = document.forms.namedItem('WebToLeads409531000026445204_ns');
            if (!form) return true;
            const emailFld = form.querySelectorAll('input[type="email"], [ftype="email"]');
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

        window.checkMandatory409531000026445204_ns = function (e: any) {
            const form = e.target as HTMLFormElement;
            const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'Annual Revenue', 'Description'];
            const fldLangVal = ['Company Name', 'Name', 'Role', 'Business Email', 'Mobile', 'Annual Revenue', 'Type Message'];

            for (let i = 0; i < mndFileds.length; i++) {
                const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
                if (fieldObj && fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0) {
                    alert(fldLangVal[i] + ' cannot be empty.');
                    fieldObj.focus();
                    return false;
                }
            }

            const recap = document.getElementById('recap409531000026445204_ns');
            if (recap && recap.getAttribute('captcha-verified') === 'false') {
                const recapErr = document.getElementById('recapErr409531000026445204_ns');
                if (recapErr) recapErr.style.visibility = 'visible';
                return false;
            }

            window.trackVisitor409531000026445204_ns?.();
            if (window.validateEmail409531000026445204_ns && !window.validateEmail409531000026445204_ns()) {
                return false;
            }

            return true;
        };

        window.trackVisitor409531000026445204_ns = function () {
          try {
            if (window.$zoho?.salesiq?.visitor) {
              const form = document.forms.namedItem('WebToLeads409531000026445204_ns');
              if (form) {
                const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
                if (LDTuvidObj) { LDTuvidObj.value = window.$zoho.salesiq.visitor.uniqueid() || ''; }
                const nameField = form.elements.namedItem('Last Name') as HTMLInputElement;
                if (nameField?.value) { window.$zoho.salesiq.visitor.name(nameField.value); }
                const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
                if (emailObj?.value) { window.$zoho.salesiq.visitor.email(emailObj.value); }
              }
            }
          } catch (e) { console.log('Zoho tracking error:', e); }
        };
    }, []);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (window.checkMandatory409531000026445204_ns && !window.checkMandatory409531000026445204_ns(e.nativeEvent)) {
            e.preventDefault();
            return;
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

                                    <form 
                                        id="webform409531000026445204_ns"
                                        action="https://crm.zoho.in/crm/WebToLeadForm" 
                                        name="WebToLeads409531000026445204_ns" 
                                        method="POST" 
                                        onSubmit={handleFormSubmit}
                                        acceptCharset="UTF-8"
                                        className="space-y-5"
                                    >
                                        <input type="text" className="hidden" name="xnQsjsdp" value="19335c470c662cf186fc795b18eedf0f9d091f3e89bec0d2ba190d3554f6a65f" readOnly />
                                        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                                        <input type="text" className="hidden" name="xmIwtLD" value="8a87fb772b5b40c206ab7214ad4cb2e8221e4900697815a99f037104263d7ba1f19722ed192796b975626af903499aee" readOnly />
                                        <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
                                        <input type="text" className="hidden" name="returnURL" value="https://agsuitetech.com/best-cloud-based-crm/thank-you/" readOnly />
                                        {/* Do not remove this code. */}
                                        <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
                                        <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                    Full Name <span className="text-blue-600">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="Last Name"
                                                    required
                                                    placeholder="John Doe"
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                    Business Email <span className="text-blue-600">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="Email"
                                                    required
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
                                                    name="Designation"
                                                    required
                                                    placeholder="CFO / Manager"
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                    Mobile <span className="text-blue-600">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="Mobile"
                                                    required
                                                    placeholder="Phone Number"
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
                                                name="Company"
                                                required
                                                placeholder="Company Inc."
                                                className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                    Annual Revenue <span className="text-blue-600">*</span>
                                                </label>
                                                <select
                                                    name="Annual Revenue"
                                                    required
                                                    className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select Revenue</option>
                                                    <option value='Under&#x20;&#x24;500K'>Under &#x24;500K</option>
                                                    <option value='&#x24;500k&#x20;to&#x20;&#x24;1M'>&#x24;500k to &#x24;1M</option>
                                                    <option value='&#x24;1M&#x20;to&#x20;&#x24;2M'>&#x24;1M to &#x24;2M</option>
                                                    <option value='&#x24;2M&#x20;to&#x20;&#x24;5M'>&#x24;2M to &#x24;5M</option>
                                                    <option value='&#x24;5M&#x20;to&#x20;&#x24;10M'>&#x24;5M to &#x24;10M</option>
                                                    <option value='&#x24;10M+'>&#x24;10M+</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">How did you hear about us?</label>
                                                <select name="Lead Source" className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer">
                                                    <option value="">Select Option</option>
                                                    <option value='-None-'>-None-</option>
                                                    <option value='Client&#x20;Referral'>Client Referral</option>
                                                    <option value='Database'>Database</option>
                                                    <option value='Email'>Email</option>
                                                    <option value='Email&#x20;Campaign'>Email Campaign</option>
                                                    <option value='Employee&#x20;Referral'>Employee Referral</option>
                                                    <option value='Event'>Event</option>
                                                    <option value='External&#x20;Referral'>External Referral</option>
                                                    <option value='Google&#x20;Ads&#x20;&#x28;Chat&#x29;'>Google Ads &#x28;Chat&#x29;</option>
                                                    <option value='Google&#x20;Ads&#x20;&#x28;Form&#x29;'>Google Ads &#x28;Form&#x29;</option>
                                                    <option value='Lead&#x20;Gen&#x20;Agency'>Lead Gen Agency</option>
                                                    <option value='LinkedIn'>LinkedIn</option>
                                                    <option value='Linkedlin'>Linkedlin</option>
                                                    <option value='Online&#x20;Store'>Online Store</option>
                                                    <option value='Oracle&#x20;Database'>Oracle Database</option>
                                                    <option value='Oracle&#x20;Partner'>Oracle Partner</option>
                                                    <option value='Oracle&#x20;Referral'>Oracle Referral</option>
                                                    <option value='Others'>Others</option>
                                                    <option value='Phone'>Phone</option>
                                                    <option value='Purchased&#x20;Leads'>Purchased Leads</option>
                                                    <option value='Sales&#x20;Email&#x20;Alias'>Sales Email Alias</option>
                                                    <option value='Sales&#x20;Person&#x20;Contact'>Sales Person Contact</option>
                                                    <option value='Seminar&#x20;Partner'>Seminar Partner</option>
                                                    <option value='Trade&#x20;Show'>Trade Show</option>
                                                    <option value='TSL&#x20;Lead&#x20;-&#x20;Accepted'>TSL Lead - Accepted</option>
                                                    <option value='TSL&#x20;Lead&#x20;-&#x20;Rejected'>TSL Lead - Rejected</option>
                                                    <option value='Twitter'>Twitter</option>
                                                    <option value='Web&#x20;Cases'>Web Cases</option>
                                                    <option value='Web&#x20;Download'>Web Download</option>
                                                    <option value='Web&#x20;Mail'>Web Mail</option>
                                                    <option value='Web&#x20;Research'>Web Research</option>
                                                    <option value='Webinar'>Webinar</option>
                                                    <option value='Website'>Website</option>
                                                    <option value='Website&#x20;&#x28;Chat&#x29;'>Website &#x28;Chat&#x29;</option>
                                                    <option value='Website&#x20;&#x28;Form&#x29;'>Website &#x28;Form&#x29;</option>
                                                    <option value='WebSite&#x20;Visit'>WebSite Visit</option>
                                                    <option value='Zoho&#x20;Partner'>Zoho Partner</option>
                                                    <option value='Zoho&#x20;Partner&#x20;Portal'>Zoho Partner Portal</option>
                                                    <option value='Zoho&#x20;Portal&#x20;Listing'>Zoho Portal Listing</option>
                                                    <option value='Zoho&#x20;Referral'>Zoho Referral</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-gray-700 text-xs font-semimedium uppercase tracking-wider">
                                                Type Message <span className="text-blue-600">*</span>
                                            </label>
                                            <textarea
                                                name="Description"
                                                required
                                                rows={3}
                                                placeholder="Share your project details, goals, or challenges…"
                                                className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3 text-gray-900 text-sm transition-all outline-none resize-none placeholder-gray-400"
                                            />
                                        </div>

                                        {/* Captcha Section */}
                                        <div className="flex flex-col gap-2">
                                            <div className='g-recaptcha' data-sitekey='6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3' data-theme='light' data-callback='rccallback409531000026445204_ns' captcha-verified='false' id='recap409531000026445204_ns'></div>
                                            <div id='recapErr409531000026445204_ns' style={{ display: 'none', color: 'red', fontSize: '12px' }}>Captcha validation failed. If you are not a robot then please try again.</div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semimedium rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] text-sm"
                                        >
                                            <Send size={18} />
                                            Book My Free Consultation
                                        </button>
                                    </form>
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
            
            <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="afterInteractive" />
            <Script id="zoho-salesiq-ns-consult" strategy="afterInteractive">
                {`
                    var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
                    function rccallback409531000026445204_ns() {
                        if(document.getElementById('recap409531000026445204_ns')!=undefined){
                            document.getElementById('recap409531000026445204_ns').setAttribute('captcha-verified',true);
                        }
                        if(document.getElementById('recapErr409531000026445204_ns')!=undefined && document.getElementById('recapErr409531000026445204_ns').style.visibility == 'visible' ){
                            document.getElementById('recapErr409531000026445204_ns').style.visibility='hidden';
                        }
                    }
                `}
            </Script>
            <Script id="wf_anal_ns_consult" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=0da8e2cc66918e4dd02485e36ac2951cc4bcb3d793c12d90fddb19da10f81a2e3f33ebfe28ac1201804c2243b488b148gide78f4a7aa21f61a0e7f1d4d707f57ac5020ab4976395accfade900cdaeb0c714gid0eedbd135dabbb2832b664a9948ee55fa1e6e8c6c2a8c2dea386b01c923ae74cgid29640dbeee89a534ab4e485b49b04442fe41fd069a7f5d762412c9a3a9b26938&tw=76b91257e40af88ff824ca118456bbb493f8897aa0c100c8dd996d392184cc52" />
        </div>
    );
}
