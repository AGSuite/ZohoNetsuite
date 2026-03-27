"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
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

declare global {
  interface Window {
    validateEmailZConsult?: () => boolean;
    checkMandatoryZConsult?: (e: any) => boolean;
    rccallback409531000000398076?: () => void;
  }
}

export default function FreeConsultation() {
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
                    const restrictedDomains = /(gmail\.com|yahoo\.com|outlook\.com|live\.com)$/i;
                    if (restrictedDomains.test(emailVal)) {
                        alert('Gmail, Yahoo, Outlook, and Live email addresses are not allowed.');
                        (emailFld[i] as HTMLInputElement).focus();
                        return false;
                    }
                }
            }
            return true;
        };

        window.checkMandatoryZConsult = function (e: any) {
            const form = e.target as HTMLFormElement;
            const mndFileds = ['Last Name', 'Email', 'Designation', 'Mobile', 'Company', 'LEADCF5', 'Annual_Revenue', 'Description'];
            const fldLangVal = ['Name', 'Email', 'Role', 'Mobile', 'Company', 'Product/Services', 'Annual Revenue', 'Challenge Description'];

            for (let i = 0; i < mndFileds.length; i++) {
                const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
                if (fieldObj && fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0) {
                    alert(fldLangVal[i] + ' cannot be empty.');
                    fieldObj.focus();
                    return false;
                }
            }

            const recap = document.getElementById('recap409531000000398076');
            if (recap && recap.getAttribute('captcha-verified') === 'false') {
                const recapErr = document.getElementById('recapErr409531000000398076');
                if (recapErr) recapErr.style.visibility = 'visible';
                return false;
            }

            if (window.validateEmailZConsult && !window.validateEmailZConsult()) {
                return false;
            }

            return true;
        };
    }, []);

    const sendEmail = async (form: HTMLFormElement) => {
        const formData = new FormData(form);
        try {
            const response = await fetch('https://agsuitetech.com/pricing/consultation_process.php', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            if (data.status === 'success') {
                console.log('Email sent successfully.');
            } else {
                console.error('Failed to send email:', data.error);
            }
        } catch (error) {
            console.error('Error while sending email:', error);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (window.checkMandatoryZConsult && !window.checkMandatoryZConsult(e.nativeEvent)) {
            e.preventDefault();
            return;
        }

        // Visitor Tracking
        try {
            // @ts-ignore
            if (window.$zoho && window.$zoho.salesiq) {
                const form = e.currentTarget;
                const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
                if (LDTuvidObj) {
                    // @ts-ignore
                    LDTuvidObj.value = window.$zoho.salesiq.visitor.uniqueid();
                }
                const nameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
                const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
                if (nameObj) {
                    // @ts-ignore
                    window.$zoho.salesiq.visitor.name(nameObj.value);
                }
                if (emailObj) {
                    // @ts-ignore
                    window.$zoho.salesiq.visitor.email(emailObj.value);
                }
            }
        } catch (err) {}

        await sendEmail(e.currentTarget);
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
                                <Sparkles className="w-4.5 h-4.5 text-yellow-500" />
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
                                        <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-black font-bold text-lg mb-2 leading-tight transition-colors">{item.title}</h4>
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
                                    <form 
                                        id="webform409531000000398076"
                                        action="https://crm.zoho.in/crm/WebToLeadForm" 
                                        name="WebToLeadsConsultZoho" 
                                        method="POST" 
                                        onSubmit={handleFormSubmit}
                                        acceptCharset="UTF-8"
                                        className="space-y-5"
                                    >
                                        <input type="text" className="hidden" name="xnQsjsdp" defaultValue="c8ca8ae9d9a028ad1829d7b6672a73889deb8a8363ec4697c92f3db46344ff6b" readOnly />
                                        <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                                        <input type="text" className="hidden" name="xmIwtLD" defaultValue="2f6fbcbccdbab984b5b2558389fe0f6d28bf60ce7e3964b2b6210b4f5a840a2a0047f993325f425b93837214b9dbeabb" readOnly />
                                        <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                                        <input type="text" className="hidden" name="returnURL" defaultValue="https://agsuitetech.com/free-consultation-now/thank-you.php" readOnly />
                                        <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
                                        <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Name *</label>
                                                <input type="text" id="Last_Name" name="Last Name" required placeholder="John Doe" className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400" />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Business Email *</label>
                                                <input type="email" id="Email" name="Email" required placeholder="john@company.com" className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Role *</label>
                                                <input type="text" id="Designation" name="Designation" required placeholder="Director / CFO" className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400" />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Mobile Number *</label>
                                                <input type="tel" id="Mobile" name="Mobile" required placeholder="+1 (555) 000-0000" className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Company Name *</label>
                                                <input type="text" id="Company" name="Company" required placeholder="Company Inc." className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400" />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Product/Services *</label>
                                                <select id="LEADCF5" name="LEADCF5" required className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer" defaultValue="">
                                                    <option value="" disabled>Select Core Product</option>
                                                    <option value='Oracle&#x20;NetSuite'>Oracle NetSuite</option>
                                                    <option value='Zoho'>Zoho</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Annual Revenue *</label>
                                                <select id="Annual_Revenue" name="Annual_Revenue" required className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer" defaultValue="">
                                                    <option value="" disabled>Select Range</option>
                                                    <option value='Under&#x20;&#x24;500K'>Under &#x24;500K</option>
                                                    <option value='&#x24;500k&#x20;to&#x20;&#x24;1M'>&#x24;500k to &#x24;1M</option>
                                                    <option value='&#x24;1M&#x20;to&#x20;&#x24;2M'>&#x24;1M to &#x24;2M</option>
                                                    <option value='&#x24;2M&#x20;to&#x20;&#x24;5M'>&#x24;2M to &#x24;5M</option>
                                                    <option value='&#x24;5M&#x20;to&#x20;&#x24;10M'>&#x24;5M to &#x24;10M</option>
                                                    <option value='&#x24;10M&#x20;to&#x20;&#x24;20M'>&#x24;10M to &#x24;20M</option>
                                                    <option value='&#x24;20M&#x20;to&#x20;&#x24;30M'>&#x24;20M to &#x24;30M</option>
                                                    <option value='&#x24;30M&#x20;to&#x20;&#x24;50M'>&#x24;30M to &#x24;50M</option>
                                                    <option value='&#x24;50M&#x20;to&#x20;&#x24;100M'>&#x24;50M to &#x24;100M</option>
                                                    <option value='&#x24;100M&#x20;to&#x20;&#x24;150M'>&#x24;100M to &#x24;150M</option>
                                                    <option value='&#x24;150M&#x20;to&#x20;&#x24;200M'>&#x24;150M to &#x24;200M</option>
                                                    <option value='&#x24;200M&#x20;to&#x20;&#x24;250M'>&#x24;200M to &#x24;250M</option>
                                                    <option value='&#x24;250M&#x20;to&#x20;&#x24;300M'>&#x24;250M to &#x24;300M</option>
                                                    <option value='&#x24;300M&#x20;to&#x20;&#x24;400M'>&#x24;300M to &#x24;400M</option>
                                                    <option value='&#x24;400M&#x20;to&#x20;&#x24;500M'>&#x24;400M to &#x24;500M</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Lead Source</label>
                                                <select id="Lead_Source" name="Lead Source" className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer" defaultValue="">
                                                    <option value="" disabled>How did you hear?</option>
                                                    <option value='Email'>Email</option>
                                                    <option value='Event'>Event</option>
                                                    <option value='Friend&#x2f;Associate&#x2f;Accountant'>Friend / Associate</option>
                                                    <option value='Search'>Search</option>
                                                    <option value='Social&#x20;Media'>Social Media</option>
                                                    <option value='Referral'>Referral</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Tell Us How We Can Help *</label>
                                            <textarea id="Description" name="Description" required rows={3} placeholder="Share your project goals or current operational challenges…" className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none resize-none placeholder-gray-400" />
                                        </div>

                                        {/* Captcha Section */}
                                        <div className="flex flex-col gap-2">
                                            <div className='g-recaptcha' data-sitekey='6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3' data-theme='light' data-callback='rccallback409531000000398076' captcha-verified='false' id='recap409531000000398076'></div>
                                            <div id='recapErr409531000000398076' style={{ display: 'none', color: 'red', fontSize: '12px' }}>Captcha validation failed. If you are not a robot then please try again.</div>
                                        </div>

                                        <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] text-sm">
                                            <Send className="w-4 h-4" />
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
            {/* ── Scripts ─────────────────────────────────────────────────────────── */}
            <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="afterInteractive" />
            <Script id="zoho-salesiq-consult" strategy="afterInteractive">
                {`
                    var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
                    function rccallback409531000000398076() {
                        if(document.getElementById('recap409531000000398076')!=undefined){
                            document.getElementById('recap409531000000398076').setAttribute('captcha-verified',true);
                        }
                        if(document.getElementById('recapErr409531000000398076')!=undefined && document.getElementById('recapErr409531000000398076').style.visibility == 'visible' ){
                            document.getElementById('recapErr409531000000398076').style.visibility='hidden';
                        }
                    }
                `}
            </Script>
            <Script id="wf_anal_consult" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=e9afb9e35a2bbd47add959e56e33e0879319b2c30faae93144ceb41c12088615d10f6ceab6f573426dacb17b83561b72gidc4904c4c6a88fccfccdba12a96a9253ab1e43e0ff3c4202a2713cd70980714b0gidf9df2680fefedb48bf61611dd8257371d95c724209cd7e51551844c331b447d3gid670a6f27d1ba095ba42cef1e786b991f3bb06a823459ffd6f12a9e48fce97bba&tw=255e274a3d4071d2619df92ea60a0ab44be6cb0d7910b47114703256f4e9e7c7" />
        </div>
    );
}
