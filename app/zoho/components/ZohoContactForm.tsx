"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";

declare global {
    interface Window {
        validateEmailZDesign4?: () => boolean;
        checkMandatoryZDesign4?: (e: any) => boolean;
    }
}

export default function ZohoContactForm() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        window.validateEmailZDesign4 = function () {
            const form = document.forms.namedItem('WebToLeadsDesign4Zoho');
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

        window.checkMandatoryZDesign4 = function (e: any) {
            const form = e.target as HTMLFormElement;
            const mndFileds = ['Last Name', 'Email', 'Mobile', 'Company', 'Description'];
            const fldLangVal = ['Name', 'Email', 'Mobile', 'Company', 'Requirements'];

            for (let i = 0; i < mndFileds.length; i++) {
                const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement;
                if (fieldObj && fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0) {
                    alert(fldLangVal[i] + ' cannot be empty.');
                    fieldObj.focus();
                    return false;
                }
            }

            if (window.validateEmailZDesign4 && !window.validateEmailZDesign4()) {
                return false;
            }

            return true;
        };
    }, []);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (window.checkMandatoryZDesign4 && !window.checkMandatoryZDesign4(e.nativeEvent)) {
            e.preventDefault();
        }
    };

    if (!isClient) return null;

    return (
        <section id="contact-form" className="relative py-24 bg-[#0a0a0a] overflow-hidden scroll-mt-36">
            {/* Multi-color gradient glows - Blue, Purple, Pink */}
            <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/15 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-cyan-400/10 rounded-full blur-[130px] -translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[110px] translate-x-1/3 translate-y-1/3"></div>

            {/* White transparent fade overlay for depth */}
            <div className="absolute inset-0 bg-white/[0.01]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="rounded-[40px] bg-[#111]/80 backdrop-blur-2xl border border-white/5 shadow-2xl overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

                        {/* Left Side - Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col h-full justify-between p-8 lg:p-16"
                        >
                            <div>
                                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
                                    Ready to Transform{" "}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                                        Your Business?
                                    </span>
                                </h2>

                                <div className="space-y-4 mb-10">
                                    <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                                        Take the first step towards streamlined operations and accelerated growth with the Zoho Ecosystem.
                                    </p>
                                    <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                                        Our certified Zoho experts are here to architect tailored solutions that solve your unique business challenges.
                                    </p>
                                </div>

                                {/* Zoho Partner Logo */}
                                <div className="mb-10">
                                    <Image
                                        src="/images/zohoimages/zoho-logo.webp"
                                        alt="Zoho Partner"
                                        width={200}
                                        height={60}
                                        className="h-10 w-auto object-contain filter brightness-0 invert opacity-80"
                                    />
                                </div>

                                {/* Statistics */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                        <p className="text-3xl font-bold text-blue-400 mb-1">250+</p>
                                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Implementations</p>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                        <p className="text-3xl font-bold text-cyan-400 mb-1">75+</p>
                                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Certified Experts</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-500 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                    </div>
                                    <span>24/7 Global Support Coverage</span>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="/zoho/contact/free-consultation"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02]"
                                >
                                    Schedule a Free Zoho Demo
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right Side - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative bg-white rounded-r-[40px] p-8 lg:p-12 h-full"
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Get Expert Guidance</h3>
                            <p className="text-gray-500 text-sm mb-8">Connect with our certified Zoho consultants today.</p>

                            <form
                                action="https://crm.zoho.in/crm/WebToLeadForm"
                                name="WebToLeadsDesign4Zoho"
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

                                <div>
                                    <label htmlFor="lastName" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Full Name *</label>
                                    <input type="text" id="lastName" name="Last Name" required placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Business Email *</label>
                                    <input type="email" id="email" name="Email" required placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="mobile" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Mobile Number *</label>
                                        <input type="tel" id="mobile" name="Mobile" required placeholder="+91 00000 00000" className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Company *</label>
                                        <input type="text" id="company" name="Company" required placeholder="Company Inc." className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="serviceInterest" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Service Interest *</label>
                                    <select id="serviceInterest" name="LEADCF5" required className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none appearance-none cursor-pointer">
                                        <option value="">Select Service</option>
                                        <option value="Zoho One Implementation">Zoho One Implementation</option>
                                        <option value="Zoho CRM Customization">Zoho CRM Customization</option>
                                        <option value="Zoho Creator Development">Zoho Creator Development</option>
                                        <option value="Zoho Integration">Zoho Integration</option>
                                        <option value="Zoho Managed Support">Zoho Managed Support</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Requirements *</label>
                                    <textarea id="description" name="Description" required rows={3} placeholder="Share your project goals or challenges..." className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all resize-none placeholder-gray-400" />
                                </div>

                                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-blue-500/30 hover:scale-[1.01] text-sm">
                                    <Send className="w-4 h-4" />
                                    Get Started
                                </button>

                                <p className="text-[10px] text-gray-400 text-center">
                                    By clicking 'Get Started', you agree to our Privacy Policy and Terms of Service.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
