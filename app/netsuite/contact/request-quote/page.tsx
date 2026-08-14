"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
    ChevronRight,
    Calculator,
    ShieldCheck,
    TrendingUp,
    Clock,
    FileSearch,
    Send,
    ArrowRight,
    Briefcase,
    HelpCircle,
    Target
} from "lucide-react";

/* ─── Particles ───────────────────────────────────────────────────────────── */
const PARTICLES = [
    { w: 2, h: 2, top: 10, left: 15, dur: 5, delay: 0.3 },
    { w: 1.5, h: 1.5, top: 25, left: 70, dur: 4.2, delay: 1.1 },
    { w: 3, h: 3, top: 55, left: 8, dur: 6, delay: 0.7 },
    { w: 2, h: 2, top: 75, left: 88, dur: 4.8, delay: 2.0 },
    { w: 1, h: 1, top: 40, left: 42, dur: 3.5, delay: 0.5 },
];


export default function RequestQuotePremium() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const renderRecaptcha = () => {
            const container = document.getElementById('recap409531000042578178');
            if ((window as any).grecaptcha && container) {
                try {
                    (window as any).grecaptcha.render('recap409531000042578178', {
                        'sitekey': '6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_',
                        'theme': 'light',
                        'callback': (window as any).rccallback409531000042578178
                    });
                } catch (e) {
                    // Already rendered or container missing
                }
            }
        };

        const checkAndRenderRecaptcha = () => {
            if ((window as any).grecaptcha?.ready) {
                (window as any).grecaptcha.ready(renderRecaptcha);
            } else {
                const interval = setInterval(() => {
                    if ((window as any).grecaptcha) {
                        (window as any).grecaptcha.ready ? (window as any).grecaptcha.ready(renderRecaptcha) : renderRecaptcha();
                        clearInterval(interval);
                    }
                }, 300);
                setTimeout(() => clearInterval(interval), 6000);
            }
        };

        const loadSalesIQ = () => {
            if (!document.getElementById('zsiqscript')) {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.id = 'zsiqscript';
                script.defer = true;
                script.src = 'https://salesiq.zoho.in/widget';
                document.head.appendChild(script);
            }
        };

        const loadAnalytics = () => {
            if (!document.getElementById('wf_anal')) {
                const script = document.createElement('script');
                script.id = 'wf_anal';
                script.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=dc6cfe6eaa303bd5d195bb5352719bba230c529eae5f6f0823d0a841f9dd57657e6049706260d6effe692960c6c5bab7gid6711126e0f954ae10107c9d2bd1b386506273b37e6e0265531ba837d5c4ed25dgid10b59705091816e9551c4ebc62e953e4111c79398428255d38ea16f03d7b9f05gid0c55c5d686e2e3f755b127157834bc2774e542abc82e5c1ce5eba2a071c6fc31&tw=70c0fd3034b5b59f1ac7be0a50f49b22d50d34cb8687eb35e3649323a8c88143&version=v2';
                document.head.appendChild(script);
            }
        };

        loadSalesIQ();
        loadAnalytics();
        checkAndRenderRecaptcha();

        // Initialize Zoho
        if (typeof window !== 'undefined') {
            window.$zoho = window.$zoho || {};
            window.$zoho.salesiq = window.$zoho.salesiq || {
                widgetcode: 'siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19',
                values: {},
                ready: function () { }
            };
        }

        // Define all required global functions
        window.addAriaSelected409531000042578178 = function (e: any) {
            const optionElem = e.target as HTMLSelectElement;
            const previousSelectedOption = optionElem.querySelector('[aria-selected="true"]');
            if (previousSelectedOption) {
                previousSelectedOption.removeAttribute('aria-selected');
            }
            if (optionElem.options && optionElem.options[optionElem.selectedIndex]) {
                optionElem.options[optionElem.selectedIndex].setAttribute('aria-selected', 'true');
            }
        };

        window.rccallback409531000042578178 = function () {
            const recap = document.getElementById('recap409531000042578178');
            if (recap) {
                recap.setAttribute('captcha-verified', 'true');
            }
            const recapErr = document.getElementById('recapErr409531000042578178');
            if (recapErr && recapErr.style.visibility === 'visible') {
                recapErr.style.visibility = 'hidden';
            }
        };

        window.reCaptchaAlert409531000042578178 = function () {
            const recap = document.getElementById('recap409531000042578178');
            if (recap && recap.getAttribute('captcha-verified') === 'false') {
                const recapErr = document.getElementById('recapErr409531000042578178');
                if (recapErr) {
                    recapErr.style.visibility = 'visible';
                }
                return false;
            }
            return true;
        };

        window.validateEmail409531000042578178 = function () {
            const form = document.forms.namedItem('WebToLeads409531000042578178');
            if (!form) return true;
            const emailFld = form.querySelectorAll('[name="LEADCF8"]');
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
                    const domain = emailVal.split('@')[1].toLowerCase();
                    const forbidden = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com', 'icloud.com'];
                    if (forbidden.includes(domain)) {
                        alert('Please enter a business email address. Personal emails (@' + domain + ') are not accepted.');
                        (emailFld[i] as HTMLInputElement).focus();
                        return false;
                    }
                }
            }
            return true;
        };

        window.validateNumber = function (e: KeyboardEvent) {
            const pattern = /^[0-9]$/;
            if (!pattern.test(e.key)) {
                e.preventDefault();
                return false;
            }
            return true;
        };

        window.sendEmail = function () {
            const form = document.forms.namedItem('WebToLeads409531000042578178');
            if (!form) return;

            const formData = new FormData(form);

            fetch('https://agsuitetech.com/pricing/form_process_quote.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        console.log('Email sent successfully.');
                    } else {
                        console.error('Failed to send email:', data.error);
                    }
                })
                .catch(error => {
                    console.error('Error while sending email:', error);
                });
        };

        window.trackVisitor409531000042578178 = function () {
            try {
                if (window.$zoho?.salesiq?.visitor) {
                    const form = document.forms.namedItem('WebToLeads409531000042578178');
                    if (!form) return;

                    const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
                    if (LDTuvidObj) {
                        LDTuvidObj.value = window.$zoho.salesiq.visitor.uniqueid() || '';
                    }

                    const nameField = form.elements.namedItem('Last Name') as HTMLInputElement;
                    const name = nameField?.value || '';
                    if (name) {
                        window.$zoho.salesiq.visitor.name(name);
                    }

                    const emailObj = form.elements.namedItem('LEADCF8') as HTMLInputElement;
                    if (emailObj && emailObj.value) {
                        window.$zoho.salesiq.visitor.email(emailObj.value);
                    }
                }
            } catch (e) {
                console.error('Tracking error:', e);
            }
        };

        window.checkMandatory409531000042578178 = function (e: any) {
            const form = e.target as HTMLFormElement;
            const mndFileds = ['Company', 'Last Name', 'Mobile', 'LEADCF5', 'LEADCF8', 'LEADCF19', 'LEADCF123'];
            const fldLangVal = ['Company Name', 'Name', 'POC\'s Mobile', 'Service', 'Company Email', 'Annual Revenue', 'How We Can Help You'];

            for (let i = 0; i < mndFileds.length; i++) {
                const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
                if (fieldObj) {
                    if (fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0) {
                        alert(fldLangVal[i] + ' cannot be empty.');
                        fieldObj.focus();
                        return false;
                    }
                }
            }

            const mobileFld = form.elements.namedItem('Mobile') as HTMLInputElement;
            if (mobileFld) {
                const v = mobileFld.value.replace(/\D/g, '');
                if (v.length !== 10) {
                    alert('Mobile number must be exactly 10 digits.');
                    mobileFld.focus();
                    return false;
                }
            }

            if (window.validateEmail409531000042578178 && !window.validateEmail409531000042578178()) {
                return false;
            }

            if (window.reCaptchaAlert409531000042578178 && !window.reCaptchaAlert409531000042578178()) {
                return false;
            }

            return true;
        };
    }, []);

    // Event handlers
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (window.checkMandatory409531000042578178 && !window.checkMandatory409531000042578178(e.nativeEvent)) {
            e.preventDefault();
            return;
        }

        // Visitor Tracking
        try {
            if (window.$zoho?.salesiq?.visitor) {
                const form = e.currentTarget;
                const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
                if (LDTuvidObj) {
                    LDTuvidObj.value = window.$zoho.salesiq.visitor.uniqueid() || '';
                }
                const nameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
                const emailObj = form.elements.namedItem('LEADCF8') as HTMLInputElement;
                if (nameObj) window.$zoho.salesiq.visitor.name(nameObj.value);
                if (emailObj) window.$zoho.salesiq.visitor.email(emailObj.value);
            }
        } catch (err) { }

        // Send internal email
        const formData = new FormData(e.currentTarget);
        try {
            await fetch('https://agsuitetech.com/pricing/form_process_quote.php', {
                method: 'POST',
                body: formData
            });
        } catch (err) {
            console.error('Email send error:', err);
        }
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        window.addAriaSelected409531000042578178?.(e.nativeEvent);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        window.validateNumber?.(e.nativeEvent);
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
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Glow blobs */}
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-cyan-700/10 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/3 pointer-events-none" />

                {/* Floating particles */}
                {PARTICLES.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400/30 pointer-events-none"
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
                                <Calculator className="w-4.5 h-4.5 text-blue-600" />
                                <span className="text-blue-900 text-xs font-medium tracking-widest uppercase">Precision Estimation</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 leading-[1.1] tracking-tight">
                                Transform Potential <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-200">
                                    into Precision Planning.
                                </span>
                            </h1>

                            <div className="space-y-4">
                                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                                    Get an exact, data-driven assessment for your NetSuite project. Our experts provide a transparent roadmap with clear costs, timelines, and measurable ROI.
                                </p>
                            </div>

                            {/* Estimation Process Cards */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: FileSearch,
                                        title: "Requirement Audit",
                                        desc: "We analyze your operational gaps and technical requirements to define a precise project scope."
                                    },
                                    {
                                        icon: ShieldCheck,
                                        title: "Fixed-Price Guarantee",
                                        desc: "Transparent, SLA-backed pricing structures with no hidden costs for enterprise-grade NetSuite deployments."
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: "ROI Projection",
                                        desc: "Quantifying the long-term commercial impact of your NetSuite investment."
                                    },
                                    {
                                        icon: Clock,
                                        title: "Precision Timeline",
                                        desc: "A realistic, milestone-based schedule designed for your go-live success."
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
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                                <item.icon size={20} />
                                            </div>
                                            <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-100 to-transparent group-hover:from-blue-500 transition-all duration-500" />
                                        </div>
                                        <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-black font-medium text-lg mb-2 leading-tight transition-colors">{item.title}</h4>
                                        <p className="text-gray-600 text-xs leading-relaxed font-medium">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ── RIGHT: Zoho Form ───────────────────────────────────────────── */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-[2.5rem] shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                                {/* Top accent bar */}
                                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

                                <div className="p-8 lg:p-10">
                                    <div className="mb-8">
                                        <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-indigo-900 to-cyan-900 sm:text-3xl font-medium mb-2">Request Your Quote</h2>
                                        <p className="text-gray-500 text-base">Fill out the form below and we ll get back to you within 24 hours</p>
                                    </div>

                                    <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm'>
                                        <form
                                            id='webform409531000042578178'
                                            action='https://crm.zoho.in/crm/WebToLeadForm'
                                            name='WebToLeads409531000042578178'
                                            method='POST'
                                            onSubmit={handleFormSubmit}
                                            acceptCharset='UTF-8'
                                            className="space-y-4"
                                        >
                                            {/* Hidden fields */}
                                            <input type='text' className="hidden" name='xnQsjsdp' value='a7ab09fe90f1a05ce89de47da6f5fe4ec35e5a6a7a3407c3169e127670c7dd56' readOnly />
                                            <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                                            <input type='text' className="hidden" name='xmIwtLD' value='835ba19158c9d4cb19f73b22a127785e9b44da4e740d918a07dc322871eff6d54ae26ddbf0315f1ade82dd193bb27d4b' readOnly />
                                            <input type='text' className="hidden" name='Lead Source' value='Web to Leads' readOnly />
                                            <input type='text' className="hidden" name='actionType' value='TGVhZHM=' readOnly />
                                            <input type='text' className="hidden" name='returnURL' value='https://www.agsuite.tech/thank-you' readOnly />
                                            <input type='text' className="hidden" id='ldeskuid' name='ldeskuid' readOnly />
                                            <input type='text' className="hidden" id='LDTuvid' name='LDTuvid' readOnly />


                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider ml-1">Name *</label>
                                                    <input
                                                        type='text'
                                                        id='Last_Name'
                                                        placeholder='John Doe'
                                                        required
                                                        name='Last Name'
                                                        maxLength={80}
                                                        className="w-full bg-blue-50/50 border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 text-sm outline-none transition-all placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider ml-1">Company Name *</label>
                                                    <input
                                                        type='text'
                                                        id='Company'
                                                        placeholder='Company Inc.'
                                                        required
                                                        name='Company'
                                                        maxLength={200}
                                                        className="w-full bg-blue-50/50 border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 text-sm outline-none transition-all placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider ml-1">Company Email *</label>
                                                    <input
                                                        type='email'
                                                        placeholder="john@company.com"
                                                        id='LEADCF8'
                                                        required
                                                        name='LEADCF8'
                                                        maxLength={100}
                                                        className="w-full bg-blue-50/50 border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 text-sm outline-none transition-all placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider ml-1">Mobile *</label>
                                                    <input
                                                        type='text'
                                                        id='Mobile'
                                                        placeholder='+91 00000 00000'
                                                        required
                                                        name='Mobile'
                                                        maxLength={15}
                                                        onChange={(e) => e.target.value = e.target.value.replace(/[^\d+ ]/g, '').slice(0, 15)}
                                                        className="w-full bg-blue-50/50 border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 text-sm outline-none transition-all placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider ml-1">Role *</label>
                                                    <input
                                                        type='text'
                                                        id='Designation'
                                                        required
                                                        name='Designation'
                                                        placeholder='Manager'
                                                        maxLength={100}
                                                        className="w-full bg-blue-50/50 border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 text-sm outline-none transition-all placeholder-gray-400"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider ml-1">Service *</label>
                                                    <select
                                                        className='w-full bg-blue-50/50 border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-700 text-sm outline-none transition-all appearance-none cursor-pointer'
                                                        id='LEADCF5'
                                                        onChange={handleSelectChange}
                                                        required
                                                        name='LEADCF5'
                                                        defaultValue=""
                                                    >
                                                        <option value="-None-">-None-</option>
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

                                                <div className="space-y-1">
                                                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider ml-1">Annual Revenue *</label>
                                                    <select
                                                        className='w-full bg-blue-50/50 border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-700 text-sm outline-none transition-all appearance-none cursor-pointer'
                                                        id='LEADCF19'
                                                        onChange={handleSelectChange}
                                                        required
                                                        name='LEADCF19'
                                                        defaultValue=""
                                                    >
                                                        <option value="" disabled>Select Revenue</option>
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

                                                <div className="space-y-1">
                                                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider ml-1">How did you hear about us?</label>
                                                    <select
                                                        className='w-full bg-blue-50/50 border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-700 text-sm outline-none transition-all appearance-none cursor-pointer'
                                                        id='LEADCF127'
                                                        onChange={handleSelectChange}
                                                        name='LEADCF127'
                                                        defaultValue=""
                                                    >
                                                        <option value="" disabled>Select Option</option>
                                                        <option value="-None-">-None-</option>
                                                        <option value="Email">Email</option>
                                                        <option value="Event">Event</option>
                                                        <option value="Friend /Associate">Friend /Associate</option>
                                                        <option value="Search">Search</option>
                                                        <option value="Social Media">Social Media</option>
                                                        <option value="Referral">Referral</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider ml-1">How We Can Help You *</label>
                                                <textarea
                                                    id='LEADCF123'
                                                    required
                                                    name='LEADCF123'
                                                    placeholder='Share your requirements...'
                                                    rows={3}
                                                    className="w-full bg-blue-50/50 border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 resize-none"
                                                ></textarea>
                                            </div>

                                            <div className='zcwf_row text-center bg-gray-50 rounded-xl p-4'>
                                                <div
                                                    className="g-recaptcha flex justify-center scale-90"
                                                    data-sitekey='6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_'
                                                    data-theme='light'
                                                    data-callback='rccallback409531000042578178'
                                                    captcha-verified='false'
                                                    id='recap409531000042578178'
                                                ></div>
                                                <div id='recapErr409531000042578178' style={{ visibility: 'hidden', color: 'red', fontSize: '12px', marginTop: '4px' }}>
                                                    Captcha validation failed. If you are not a robot then please try again.
                                                </div>
                                            </div>

                                            <button
                                                type='submit'
                                                id='formsubmit'
                                                className='formsubmit w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] text-sm'
                                            >
                                                <Send size={18} />
                                                Get Your Quote Now
                                            </button>
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
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-700 group-hover:scale-110"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
            <Script id="wf_anal_ns_quote" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=dc6cfe6eaa303bd5d195bb5352719bba230c529eae5f6f0823d0a841f9dd57657e6049706260d6effe692960c6c5bab7gid6711126e0f954ae10107c9d2bd1b386506273b37e6e0265531ba837d5c4ed25dgid10b59705091816e9551c4ebc62e953e4111c79398428255d38ea16f03d7b9f05gid0c55c5d686e2e3f755b127157834bc2774e542abc82e5c1ce5eba2a071c6fc31&tw=70c0fd3034b5b59f1ac7be0a50f49b22d50d34cb8687eb35e3649323a8c88143&version=v2" strategy="afterInteractive" />
        </div>
    );
}




