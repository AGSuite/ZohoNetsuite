"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
    Clock,
    CheckCircle,
    ChevronRight,
    ArrowRight,
    Briefcase,
    HelpCircle,
    Target,
    Send,
    Star,
    Zap,
    Users,
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


export default function ZohoRequestQuotePage() {
    const [isClient, setIsClient] = useState(false);
    const [returnUrl, setReturnUrl] = useState('https://www.agsuite.tech/thank-you');

    useEffect(() => {
        setIsClient(true);
        if (typeof window !== 'undefined') {
            setReturnUrl(window.location.origin + '/thank-you');
        }

        (window as any).addAriaSelected409531000047791049 = function () {
            const optionElem = (event as any).target;
            const prev = optionElem.querySelector('[aria-selected=true]');
            if (prev) prev.removeAttribute('aria-selected');
            optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
        };

        (window as any).validateEmail409531000047791049 = function () {
            const form = document.forms.namedItem('WebToLeads409531000047791049') as HTMLFormElement;
            if (!form) return true;
            const emailFld = form.querySelectorAll('[data-ftype="email"]');
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

        (window as any).rccallback409531000047791049 = function () {
            const recap = document.getElementById('recap409531000047791049');
            if (recap) recap.setAttribute('captcha-verified', 'true');
            const recapErr = document.getElementById('recapErr409531000047791049');
            if (recapErr && recapErr.style.visibility === 'visible') {
                recapErr.style.visibility = 'hidden';
            }
        };

        (window as any).checkMandatory409531000047791049 = function () {
            const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF127', 'LEADCF165'];
            const fldLangVal = ['Company Name', 'Name', 'Role', 'Email', 'Mobile', 'Annual Revenue', 'How We Can Help You', 'How did you hear about us.', 'Services'];
            const form = document.forms.namedItem('WebToLeads409531000047791049') as HTMLFormElement;
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
            if ((window as any).validateEmail409531000047791049 && !(window as any).validateEmail409531000047791049()) return false;

            const recap = document.getElementById('recap409531000047791049');
            if (recap && recap.getAttribute('captcha-verified') === 'false') {
                const recapErr = document.getElementById('recapErr409531000047791049');
                if (recapErr) recapErr.style.visibility = 'visible';
                return false;
            }
            return true;
        };

        // Bulletproof instant reCAPTCHA renderer
        const renderRecaptcha = () => {
            const container = document.getElementById('recap409531000047791049');
            if (container && container.children.length === 0 && (window as any).grecaptcha && (window as any).grecaptcha.render) {
                try {
                    (window as any).grecaptcha.render(container, {
                        sitekey: '6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_',
                        theme: 'light',
                        callback: (window as any).rccallback409531000047791049
                    });
                } catch (e) {}
            }
        };

        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            const container = document.getElementById('recap409531000047791049');
            if (container && container.children.length > 0) {
                clearInterval(interval);
                return;
            }
            if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
                renderRecaptcha();
            }
            if (attempts > 60) clearInterval(interval);
        }, 100);

        return () => clearInterval(interval);
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

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-12">

                    {/* Breadcrumb */}
                    <motion.nav
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm font-medium mb-8"
                    >
                        <Link href="/zoho" className="text-blue-300 hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                        <Link href="/zoho/contact" className="text-blue-300 hover:text-white transition-colors">Contact</Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                        <span className="text-white/60">Request Quote</span>
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
                                <Zap className="w-4.5 h-4.5 text-yellow-500" />
                                <span className="text-blue-900 text-xs font-medium tracking-widest uppercase">Transparent Licensing & Implementation</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 leading-[1.1] tracking-tight">
                                Accelerate Growth with <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-200">
                                    Custom Zoho Pricing
                                </span>
                            </h1>

                            <div className="space-y-4">
                                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                                    Whether you need license optimization, full-scale implementation, custom Deluge development, or third-party integrations, get an exact statement of work and custom quote.
                                </p>
                            </div>

                            {/* Cards restored on left side */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        step: "01",
                                        title: "Scope Analysis",
                                        desc: "Comprehensive evaluation of your required Zoho modules and custom workflow logic."
                                    },
                                    {
                                        step: "02",
                                        title: "Licensing Strategy",
                                        desc: "Optimized user licensing structure (Zoho One vs. Standalone) to maximize cost efficiency."
                                    },
                                    {
                                        step: "03",
                                        title: "Implementation SOW",
                                        desc: "Itemized scope of work covering configuration, data migration, and API integrations."
                                    },
                                    {
                                        step: "04",
                                        title: "Post-Go-Live Support",
                                        desc: "Flexible SLA packages for continuous user training, maintenance, and system upgrades."
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
                                        <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2 tracking-tight">Request Project Estimate</h2>
                                        <p className="text-gray-500 text-base">Fill in your requirements below — our solution architects will analyze your scope and respond shortly.</p>
                                    </div>

                                    <form 
                                        id="webform409531000047791049"
                                        action="https://crm.zoho.in/crm/WebToLeadForm" 
                                        name="WebToLeads409531000047791049" 
                                        method="POST" 
                                        onSubmit={(e) => {
                                            if ((window as any).checkMandatory409531000047791049 && !(window as any).checkMandatory409531000047791049()) {
                                                e.preventDefault();
                                            }
                                        }}
                                        acceptCharset="UTF-8"
                                        className="space-y-4"
                                    >
                                        <input type="text" className="hidden" name="xnQsjsdp" value="44276f8beed192b8f7e1be65072c435bb8635d713a36ed1383283b028345f158" readOnly />
                                        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                                        <input type="text" className="hidden" name="xmIwtLD" value="828a6444caf550aa2c7fb30baee0af20ebe53bb4ec14fa9cb848cbaba047cf09851f23ca8992cf00b57712dc4036845e" readOnly />
                                        <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
                                        <input type="text" className="hidden" name="returnURL" value={returnUrl} readOnly />
                                        <input type="text" className="hidden" name="aG9uZXlwb3Q" value="" readOnly />

                                        {/* Hidden default fields required by Zoho */}
                                        <select name="Lead Status" className="hidden" defaultValue="Database">
                                            <option value="Database">Database</option>
                                        </select>
                                        <select name="Lead Source" className="hidden" defaultValue="Website (Form)">
                                            <option value="Website (Form)">Website (Form)</option>
                                        </select>
                                        <input type="hidden" name="No of Employees" value="0" />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Name *</label>
                                                <input type="text" id="Last_Name" name="Last Name" required maxLength={80} placeholder="John Doe" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Email *</label>
                                                <input type="text" id="Email" data-ftype="email" name="Email" required maxLength={100} placeholder="john@company.com" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Role *</label>
                                                <input type="text" id="Designation" name="Designation" required maxLength={100} placeholder="CFO / Manager" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Mobile *</label>
                                                <input type="text" id="Mobile" name="Mobile" required maxLength={30} placeholder="+91 9876543210" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Services *</label>
                                                <select id="LEADCF165" name="LEADCF165" defaultValue="" required onChange={() => (window as any).addAriaSelected409531000047791049?.()} className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all appearance-none cursor-pointer">
                                                    <option value="" disabled>-Select Service-</option>
                                                    <option value="Zoho Licenses">Zoho Licenses</option>
                                                    <option value="Zoho Implementation">Zoho Implementation</option>
                                                    <option value="Zoho Licenses + Implementation">Zoho Licenses + Implementation</option>
                                                    <option value="Zoho Support">Zoho Support</option>
                                                    <option value="Zoho Optimization">Zoho Optimization</option>
                                                    <option value="Zoho Customization">Zoho Customization</option>
                                                    <option value="Zoho Integrations">Zoho Integrations</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Annual Revenue *</label>
                                                <select id="LEADCF19" name="LEADCF19" required onChange={() => (window as any).addAriaSelected409531000047791049?.()} className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all appearance-none cursor-pointer">
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
                                            <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">Company Name *</label>
                                            <input type="text" id="Company" name="Company" required maxLength={200} placeholder="Company Inc." className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">How did you hear about us. *</label>
                                            <select id="LEADCF127" name="LEADCF127" required onChange={() => (window as any).addAriaSelected409531000047791049?.()} className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all appearance-none cursor-pointer">
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
                                            <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider">How We Can Help You *</label>
                                            <textarea id="LEADCF123" name="LEADCF123" required rows={3} placeholder="Share your requirements..." className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all resize-none placeholder-gray-400" />
                                        </div>

                                        {/* Captcha Section */}
                                        <div className="flex flex-col gap-2 my-2">
                                          <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
                                          <div
                                            className="g-recaptcha"
                                            data-sitekey="6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_"
                                            data-theme="light"
                                            data-callback="rccallback409531000047791049"
                                            captcha-verified="false"
                                            id="recap409531000047791049"
                                          ></div>
                                          <div
                                            id="recapErr409531000047791049"
                                            style={{ visibility: 'hidden', color: '#ef4444', fontSize: '12px' }}
                                          >
                                            Captcha validation failed. If you are not a robot then please try again.
                                          </div>
                                        </div>

                                        <input type="submit" id="formsubmit" className="formsubmit zcwf_button w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] text-sm uppercase tracking-widest cursor-pointer" value="Request Project Quote" />
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
                                desc: "Talk to our team.",
                                link: "/zoho/free-consultation",
                                icon: Target,
                                image: "/images/contact/consultation.webp"
                            },
                            {
                                title: "Request Quote",
                                desc: "Get project pricing.",
                                link: "/zoho/request-quote",
                                icon: Clock,
                                image: "/images/contact/quote.webp"
                            },
                            {
                                title: "Careers",
                                desc: "Join our growing team.",
                                link: "/zoho/careers",
                                icon: Briefcase,
                                image: "/images/contact/carrer.webp"
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
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
