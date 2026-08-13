"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
    LifeBuoy,
    Clock,
    CheckCircle,
    ChevronRight,
    ArrowRight,
    Briefcase,
    HelpCircle,
    Target,
    Send,
    Phone,
    Mail,
    Globe,
    Upload,
    RefreshCcw,
    Users
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

export default function ZohoSupportPage() {
    const [isClient, setIsClient] = useState(false);
    const [captchaUrl, setCaptchaUrl] = useState("");
    const [captchaDigest, setCaptchaDigest] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        // Manual implementation of Zoho Desk Captcha Regeneration for React
        window.zsRegenerateCaptcha = function () {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://desk.zoho.in/support/GenerateCaptcha?action=getNewCaptcha&_=' + new Date().getTime(), true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        setCaptchaUrl(response.captchaUrl);
                        setCaptchaDigest(response.captchaDigest);
                    } catch (e) {
                        console.error("Captcha error:", e);
                    }
                }
            };
            xhr.send();
        };

        // Capture Zoho Desk's callback in the parent scope for error handling
        window.showAnimateMessageDiv = (message, isError) => {
            alert(message || "Unable to process your request");
            setIsSubmitting(false);
        };

        return () => {
            // @ts-ignore
            window.zsRegenerateCaptcha = undefined;
            // @ts-ignore
            window.showAnimateMessageDiv = undefined;
        };
    }, []);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        const required = ["Subject", "First Name", "Contact Name", "Email", "zsWebFormCaptchaWord"];
        let isValid = true;

        for (const field of required) {
            const fld = form.elements.namedItem(field) as HTMLInputElement;
            if (fld && !fld.value.trim()) {
                alert(`${field === 'Contact Name' ? 'Last Name' : field} cannot be empty`);
                if (fld.focus) fld.focus();
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            e.preventDefault();
            return;
        }

        // External Visitor Tracking (SalesIQ)
        try {
            // @ts-ignore
            if (window.$zoho && window.$zoho.salesiq) {
                const name = (form.elements.namedItem('First Name') as HTMLInputElement).value + ' ' + (form.elements.namedItem('Contact Name') as HTMLInputElement).value;
                const email = (form.elements.namedItem('Email') as HTMLInputElement).value;
                // @ts-ignore
                window.$zoho.salesiq.visitor.name(name);
                // @ts-ignore
                window.$zoho.salesiq.visitor.email(email);
            }
        } catch (err) {}

        setIsSubmitting(true);
    };

    const handleIframeLoad = () => {
        if (isSubmitting) {
            setIsSubmitting(false);
            setSubmitted(true);
            // reset captcha for next time
            if (window.zsRegenerateCaptcha) {
                window.zsRegenerateCaptcha();
            }
        }
    };

    if (!isClient) return null;

    return (
        <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white">
            <Script src="https://js.zohostatic.in/support/app/js/jqueryandencoder.ef05974972bf3bca1b87.js" strategy="afterInteractive" />

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
                        <span className="text-white/60">Support</span>
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
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white backdrop-blur-sm w-fit shadow-lg shadow-blue-500/10">
                                <LifeBuoy className="w-4.5 h-4.5 text-blue-600" />
                                <span className="text-blue-900 text-xs font-medium tracking-widest uppercase">Zoho Desk Integration</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-50 via-indigo-50 to-cyan-50 leading-[1.1] tracking-tight">
                                Specialized Zoho <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-200">
                                     Helpdesk Support.
                                </span>
                            </h1>

                            <div className="space-y-4">
                                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                                    Directly connected to our Zoho Desk environment. Open a case for technical issues, environment optimization, or customization requests.
                                </p>
                            </div>

                            {/* Support Info Cards */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Mail,
                                        title: "Direct Ticketing",
                                        contact: "Automated Case Creation",
                                        desc: "Detail your issue to initiate an immediate support workflow."
                                    },
                                    {
                                        icon: RefreshCcw,
                                        title: "SLA Response",
                                        contact: "Priority Management",
                                        desc: "Every ticket is tracked with strict response and resolution SLAs."
                                    },
                                    {
                                        icon: Users,
                                        title: "Certified Experts",
                                        contact: "75+ Zoho Specialists",
                                        desc: "Access a global pool of certified consultants for complex fixes."
                                    },
                                    {
                                        icon: Target,
                                        title: "Optimization",
                                        contact: "System Performance",
                                        desc: "Beyond fixes, we optimize your Zoho environment for peak efficiency."
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        className="p-6 rounded-[2rem] border border-white/20 bg-white hover:bg-gray-50 transition-all duration-300 group shadow-xl shadow-black/20"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                                <item.icon size={20} />
                                            </div>
                                        </div>
                                        <h4 className="text-gray-900 font-bold text-lg mb-1 leading-tight uppercase transition-colors">{item.title}</h4>
                                        <p className="text-blue-600 text-sm font-semibold mb-2">{item.contact}</p>
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
                                    {submitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center py-16 text-center gap-4"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                                <CheckCircle className="w-8 h-8 text-green-600" />
                                            </div>
                                            <h3 className="text-xl font-medium text-gray-900">Ticket Created!</h3>
                                            <p className="text-gray-500 max-w-xs leading-relaxed text-sm">Your support request has been queued. A Zoho specialist will reach out shortly.</p>
                                            <button 
                                                onClick={() => setSubmitted(false)}
                                                className="mt-6 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
                                            >
                                                Submit Another Case
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <>
                                            <div className="mb-8 border-b border-gray-100 pb-6">
                                                <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2 tracking-tight">Open Support Ticket</h2>
                                                <p className="text-gray-500 text-base">Fill out the form to open a case in our Zoho Desk.</p>
                                            </div>

                                            <form 
                                                action="https://desk.zoho.in/support/WebToCase" 
                                                name="zsWebToCase_100504000001340024" 
                                                id="zsWebToCase_100504000001340024" 
                                                target="zsWebToCase_iframe"
                                                method="POST" 
                                                onSubmit={handleFormSubmit}
                                                encType="multipart/form-data"
                                                acceptCharset="UTF-8"
                                                className="space-y-5"
                                            >
                                                <input type="hidden" name="xnQsjsdp" defaultValue="edbsne80a7a137f60f5b09ef1e4c9bc70ad0a" />
                                                <input type="hidden" name="xmIwtLD" defaultValue="edbsn0d3e8787e0f8593207d41c639514556c45c9d78bb3f63e8d870ddcd0989381fd" />
                                                <input type="hidden" name="xJdfEaS" value={captchaDigest} readOnly />
                                                <input type="hidden" name="actionType" defaultValue="Q2FzZXM=" />
                                                <input type="hidden" id="property(module)" name="property(module)" defaultValue="Cases" />
                                                <input type="hidden" id="dependent_field_values_Cases" defaultValue='{"JSON_VALUES":{},"JSON_SELECT_VALUES":{},"JSON_MAP_DEP_LABELS":[]}' />
                                                <input type="hidden" name="returnURL" defaultValue="https://www.agsuite.tech/thank-you" />

                                                {/* Subject */}
                                                <div>
                                                    <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Subject *</label>
                                                    <input type="text" name="Subject" required placeholder="Briefly describe the issue" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                                                </div>

                                                {/* Name Row */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                    <div>
                                                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">First Name *</label>
                                                        <input type="text" name="First Name" required placeholder="John" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Last Name *</label>
                                                        <input type="text" name="Contact Name" required placeholder="Doe" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                                                    </div>
                                                </div>

                                                {/* Email + Priority */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                    <div>
                                                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Email *</label>
                                                        <input type="email" name="Email" required placeholder="john@company.com" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Priority</label>
                                                        <select name="Priority" defaultValue="" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all appearance-none cursor-pointer shadow-sm">
                                                            <option value="" disabled>-None-</option>
                                                            <option value="High">High</option>
                                                            <option value="Medium">Medium</option>
                                                            <option value="Low">Low</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Product Selection */}
                                                <div>
                                                    <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Zoho Product Name</label>
                                                    <select name="Zoho Product Name" id="CASECF1" defaultValue="" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all appearance-none cursor-pointer shadow-sm">
                                                        <option value="" disabled>-None-</option>
                                                        <option value="Zoho People">Zoho People</option>
                                                        <option value="Zoho CRM">Zoho CRM</option>
                                                        <option value="Zoho Books">Zoho Books</option>
                                                        <option value="Zoho Creator">Zoho Creator</option>
                                                        <option value="Zoho inventory">Zoho inventory</option>
                                                        <option value="Zoho Payroll">Zoho Payroll</option>
                                                        <option value="Zoho Projects">Zoho Projects</option>
                                                        <option value="Zoho Desk">Zoho Desk</option>
                                                        <option value="Zoho Campaigns">Zoho Campaigns</option>
                                                    </select>
                                                </div>

                                                {/* Description */}
                                                <div>
                                                    <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Issue Description</label>
                                                    <textarea name="Description" rows={3} placeholder="Please provide technical details..." className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all resize-none placeholder-gray-400 shadow-sm" />
                                                </div>

                                                {/* Captcha */}
                                                <div className="bg-blue-50/30 p-5 rounded-2xl border border-blue-100 space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <label className="text-gray-700 text-xs font-semibold uppercase tracking-wider">Security Verification *</label>
                                                        <button type="button" onClick={() => window.zsRegenerateCaptcha && window.zsRegenerateCaptcha()} className="text-blue-600 text-[10px] font-bold uppercase hover:underline flex items-center gap-1">
                                                            <RefreshCcw className="w-3 h-3" /> Refresh
                                                        </button>
                                                    </div>
                                                    
                                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                                        <div className="w-full sm:w-1/2 h-14 bg-white rounded-lg border border-blue-100 flex items-center justify-center overflow-hidden">
                                                            {captchaUrl ? (
                                                                <img src={captchaUrl} alt="Captcha" className="h-full object-contain" />
                                                            ) : (
                                                                <p className="text-xs text-blue-300 animate-pulse">Loading Captcha...</p>
                                                            )}
                                                        </div>
                                                        <div className="w-full sm:w-1/2">
                                                            <input type="text" name="zsWebFormCaptchaWord" required placeholder="Enter Code" className="w-full bg-white border-2 border-blue-100 focus:border-blue-600 rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all text-center tracking-widest font-bold" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Submit */}
                                                <button 
                                                    type="submit" 
                                                    id="zsSubmitButton_100504000001340024"
                                                    disabled={isSubmitting}
                                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed group"
                                                >
                                                    {isSubmitting ? (
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    ) : (
                                                        <>
                                                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                            Submit Case to Desk
                                                        </>
                                                    )}
                                                </button>
                                            </form>
                                            <iframe 
                                                name="zsWebToCase_iframe" 
                                                id="zsWebToCase_iframe" 
                                                style={{ display: "none" }}
                                                onLoad={handleIframeLoad}
                                            />
                                        </>
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
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">
                            Explore More Ways to Connect
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Free Consultation",
                                desc: "Talk to our team.",
                                link: "/zoho/contact/free-consultation",
                                icon: Target,
                                image: "/images/contact/consultation.webp"
                            },
                            {
                                title: "Request Quote",
                                desc: "Get project pricing.",
                                link: "/zoho/contact/request-quote",
                                icon: Clock,
                                image: "/images/contact/quote.webp"
                            },
                            {
                                title: "Careers",
                                desc: "Join our growing team.",
                                link: "/zoho/contact/careers",
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

            {/* Trigger captcha load on mount */}
            <Script id="captcha-loader" strategy="afterInteractive">
                {`
                    setTimeout(function() {
                        if (window.zsRegenerateCaptcha) {
                            window.zsRegenerateCaptcha();
                        }
                    }, 1000);
                `}
            </Script>
        </div>
    );
}




