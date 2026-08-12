"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Send, Users, Rocket, Target, Award } from "lucide-react";

export default function ZohoContactForm() {
    const [isClient, setIsClient] = useState(false);
    const [selectedCode, setSelectedCode] = useState('+91');

    const COUNTRY_CODES = [
        { code: '+91', label: 'IN (+91)' },
        { code: '+1', label: 'US (+1)' },
        { code: '+44', label: 'UK (+44)' },
        { code: '+971', label: 'UAE (+971)' },
        { code: '+966', label: 'KSA (+966)' },
        { code: '+974', label: 'QA (+974)' },
        { code: '+965', label: 'KW (+965)' },
        { code: '+968', label: 'OM (+968)' },
        { code: '+973', label: 'BH (+973)' },
        { code: '+65', label: 'SG (+65)' },
        { code: '+61', label: 'AU (+61)' },
        { code: '+31', label: 'NL (+31)' },
        { code: '+353', label: 'IE (+353)' },
        { code: '+49', label: 'DE (+49)' },
        { code: '+33', label: 'FR (+33)' },
        { code: '+27', label: 'ZA (+27)' },
        { code: '+852', label: 'HK (+852)' },
    ];

    useEffect(() => {
        setIsClient(true);

        (window as any).addAriaSelected409531000042578178 = function () {
            const optionElem = (event as any).target;
            const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
            if (previousSelectedOption) {
                previousSelectedOption.removeAttribute('aria-selected');
            }
            optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
        };

        (window as any).rccallback409531000042578178 = function () {
            if (document.getElementById('recap409531000042578178')) {
                document.getElementById('recap409531000042578178')?.setAttribute('captcha-verified', 'true');
            }
            const errorElement = document.getElementById('recapErr409531000042578178');
            if (errorElement) {
                errorElement.style.visibility = 'hidden';
            }
        };

        (window as any).reCaptchaAlert409531000042578178 = function () {
            const recap = document.getElementById('recap409531000042578178');
            if (recap && recap.getAttribute('captcha-verified') === 'false') {
                const errorElement = document.getElementById('recapErr409531000042578178');
                if (errorElement) {
                    errorElement.style.visibility = 'visible';
                }
                return false;
            }
            return true;
        };

        // Handle reCAPTCHA rendering for SPA navigation
        const renderRecaptcha = () => {
            const container = document.getElementById('recap409531000042578178');
            if ((window as any).grecaptcha && container) {
                try {
                    if (container.children.length > 0) return;
                    (window as any).grecaptcha.render('recap409531000042578178', {
                        'sitekey': '6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y',
                        'theme': 'light',
                        'callback': (window as any).rccallback409531000042578178
                    });
                } catch (e) { }
            }
        };

        if ((window as any).grecaptcha) {
            (window as any).grecaptcha.ready ? (window as any).grecaptcha.ready(renderRecaptcha) : renderRecaptcha();
        } else {
            const interval = setInterval(() => {
                if ((window as any).grecaptcha) {
                    (window as any).grecaptcha.ready ? (window as any).grecaptcha.ready(renderRecaptcha) : renderRecaptcha();
                    clearInterval(interval);
                }
            }, 300);
            setTimeout(() => clearInterval(interval), 5000);
        }

        (window as any).validateEmail409531000042578178 = function () {
            const form = document.forms.namedItem('WebToLeads409531000042578178') as HTMLFormElement;
            if (!form) return true;
            const emailFld = form.querySelectorAll('[name="LEADCF8"]');
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

        (window as any).checkMandatory409531000042578178 = function () {
            const mndFileds = ['Company', 'Last Name', 'LEADCF8', 'Mobile', 'LEADCF5', 'LEADCF19', 'LEADCF123'];
            const fldLangVal = ['Company Name', 'Name', 'Business Email', 'Mobile', 'Zoho Solution', 'Annual Revenue', 'Requirements'];
            const form = document.forms.namedItem('WebToLeads409531000042578178') as HTMLFormElement;
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
                            alert(fldLangVal[i] + ' cannot be empty.');
                            fieldObj.focus();
                            return false;
                        }
                    } else if (fieldObj.name === 'Mobile' && fieldObj.value.replace(/\D/g, '').length !== 10) {
                        alert('Please enter a valid 10-digit mobile number.');
                        fieldObj.focus();
                        return false;
                    }
                }
            }
            if ((window as any).validateEmail409531000042578178 && !(window as any).validateEmail409531000042578178()) return false;
            if ((window as any).reCaptchaAlert409531000042578178 && !(window as any).reCaptchaAlert409531000042578178()) return false;

            (window as any).trackVisitor409531000042578178?.();
            (window as any).sendEmail?.();
            const submitButton = document.querySelector('.formsubmit-zoho') as HTMLButtonElement;
            if (submitButton) {
                submitButton.setAttribute('disabled', 'true');
            }
            return true;
        };

        (window as any).sendEmail = function () {
            const form = document.forms.namedItem('WebToLeads409531000042578178') as HTMLFormElement;
            if (!form) return;
            const formData = new FormData(form);

            fetch('https://agsuitetech.com/pricing/form_process_contact.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Internal processing successful');
                })
                .catch(error => {
                    console.error('Error in internal processing:', error);
                });
        };

        (window as any).trackVisitor409531000042578178 = function () {
            try {
                if ((window as any).$zoho && (window as any).$zoho.salesiq) {
                    const form = document.forms.namedItem('WebToLeads409531000042578178') as HTMLFormElement;
                    if (form) {
                        const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
                        if (LDTuvidObj) {
                            LDTuvidObj.value = (window as any).$zoho.salesiq.visitor.uniqueid();
                        }
                        const nameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
                        const emailObj = form.elements.namedItem('LEADCF8') as HTMLInputElement;
                        if (nameObj) {
                            (window as any).$zoho.salesiq.visitor.name(nameObj.value);
                        }
                        if (emailObj) {
                            (window as any).$zoho.salesiq.visitor.email(emailObj.value);
                        }
                    }
                }
            } catch (err) { }
        };
    }, []);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if ((window as any).checkMandatory409531000042578178 && !(window as any).checkMandatory409531000042578178()) {
            e.preventDefault();
            return;
        }
        // Combine code and mobile
        const form = e.currentTarget;
        const mobileField = form.elements.namedItem('Mobile') as HTMLInputElement;
        if (mobileField) {
            mobileField.value = `${selectedCode} ${mobileField.value}`;
        }
    };

    if (!isClient) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    } as any;

    const labelVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    } as any;

    return (
        <>
            <Script
                src="https://www.google.com/recaptcha/api.js"
                strategy="afterInteractive"
            />
            {/* Zoho CRM Web-to-Lead Analytics */}
            <Script id="wf_anal" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=200f842d0dc0f4e7801db792aae6ced7d901985d65eb7fcd23dda6e56700172097a30a3ef869eb06347d3a4bca25bb6fgid9f5592bc44469936204ad4851be9c0dffc44888d04f59693f16e7853eee295cfgid37385f0c9c29469e462007ae410d9ad684100d05f4e169a235f2b84413a975d4gidbf0e0fb6f34ec2f94a391d45ce6b68f60ace7ff29df396e3a70399e1edee5dc5&tw=23f34b37e865b5335ff2a8f585b01a00b88cb9c9a388aa28b4e9e710c025aad4" />
            <section id="contact-form" className="relative py-28 bg-[#0a0a0a] overflow-hidden scroll-mt-36">
                {/* Background Decorative Gradients */}
                <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="rounded-[40px] bg-[#0d0d0d]/80 backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden min-h-[720px] flex flex-col lg:flex-row">
                        {/* Left Side: Brand Narrative */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.12,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-blue-950 via-[#0d0d0d] to-[#0a0a0a] relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/Background/grid-white.svg')] opacity-[0.05] pointer-events-none z-10"></div>

                            {/* Expert Guidance Illustration */}
                            <div className="absolute inset-0 z-0 opacity-40">
                                <Image
                                    src="/images/zohoimages/background/zoho-expert-guidance.png"
                                    alt="Professional Expertise"
                                    fill
                                    className="object-cover object-center mix-blend-screen"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-transparent to-[#0a0a0a]/90"></div>
                            </div>

                            <div className="relative z-20 text-left">
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                    }}
                                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-sm mb-8"
                                >
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                                    <span className="text-blue-100 text-[10px] font-bold tracking-widest uppercase">Global Excellence</span>
                                </motion.div>

                                <motion.h2
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                    }}
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.05] text-white"
                                >
                                    Architecting <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                                        Your Success
                                    </span>
                                </motion.h2>

                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                    }}
                                    className="text-gray-300 text-base leading-relaxed mb-10 max-w-sm"
                                >
                                    Join 500+ enterprises that have optimized their operations with our certified Zoho implementation expertise and custom industrial automation.
                                </motion.p>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                    }}
                                    className="mb-6"
                                >
                                    <Image
                                        src="/images/zoho logos/zoho premium.png"
                                        alt="Zoho Premium Partner"
                                        width={360}
                                        height={120}
                                        className="w-64 h-auto object-contain transition-all hover:scale-105 duration-500 rounded-2xl p-3 bg-white/10 backdrop-blur-md border border-white/10"
                                        sizes="(max-width: 768px) 100vw, 360px"
                                    />
                                </motion.div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                                    {[
                                        { icon: Award, label: "Success Stories", val: "500+", color: "blue", lightColor: "blue" },
                                        { icon: Rocket, label: "Solution Modules", val: "50+", color: "indigo", lightColor: "indigo" },
                                        { icon: Target, label: "Experience", val: "15+ Yrs", color: "blue", lightColor: "blue" },
                                        { icon: Users, label: "Consultants", val: "50+", color: "indigo", lightColor: "indigo" }
                                    ].map((card, i) => (
                                        <motion.div
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.95, y: 20 },
                                                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * i } }
                                            }}
                                            className="group relative p-5 rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                        >
                                            <div className="flex flex-col items-center text-center">
                                                <div className={`p-2.5 bg-${card.lightColor}-50 rounded-2xl text-${card.color}-600 mb-3 border border-${card.lightColor}-100 group-hover:bg-${card.color}-600 group-hover:text-white transition-colors duration-300`}>
                                                    <card.icon size={21} strokeWidth={1.5} />
                                                </div>
                                                <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-1">{card.label}</p>
                                                <p className="text-2xl font-bold text-gray-900 tracking-tight">{card.val}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Form */}
                        <div className="lg:w-1/2 p-10 lg:p-16 bg-white relative border-l border-blue-50">
                            <div className="relative z-10 mb-10">
                                <h3 className="text-3xl lg:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-[#0a0a0a]">Get Expert Guidance</h3>
                                <p className="text-gray-600">Fill in your details and we'll reach out within 24 hours</p>
                            </div>

                            <motion.form
                                action="https://crm.zoho.in/crm/WebToLeadForm"
                                id="WebToLeads409531000042578178"
                                name="WebToLeads409531000042578178"
                                method="POST"
                                onSubmit={handleFormSubmit}
                                acceptCharset="UTF-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.05 }}
                                variants={containerVariants}
                                className="space-y-6"
                            >
                                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="37dfc49e97f520b044bada4f449a5c5ccdbce92fc11adcbde859370420398c25" readOnly />
                                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                                <input type="text" className="hidden" name="xmIwtLD" defaultValue="12f9e122b2a20e7b120e935f7196c6eb1b4957b3d47254bd86bff874f16310546e1ef014dcf24ff7fdc390003e9608d7" readOnly />
                                <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                                <input type="text" className="hidden" name="returnURL" defaultValue="https://zoho-netsuite.vercel.app/thank-you" readOnly />
                                <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
                                <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-black text-sm font-bold uppercase tracking-wider mb-2 ml-1">Full Identity *</motion.label>
                                        <input type="text" name="Last Name" required className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="Johnathan Doe" />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-black text-sm font-bold uppercase tracking-wider mb-2 ml-1">Work Email *</motion.label>
                                        <input type="email" name="LEADCF8" required className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="john@enterprise.com" />
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-black text-sm font-bold uppercase tracking-wider mb-2 ml-1">Job Role *</motion.label>
                                        <input type="text" name="Designation" required className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="Manager" />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-black text-sm font-bold uppercase tracking-wider mb-2 ml-1">Direct Contact (10 Digits) *</motion.label>
                                        <div className="flex gap-2">
                                            <select
                                                value={selectedCode}
                                                onChange={(e) => setSelectedCode(e.target.value)}
                                                className="w-24 bg-blue-50/30 border-2 border-blue-100/50 focus:border-blue-700 rounded-2xl px-2 py-3.5 text-xs font-semibold outline-none transition-all shadow-sm"
                                            >
                                                {COUNTRY_CODES.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                                            </select>
                                            <input
                                                type="tel"
                                                name="Mobile"
                                                required
                                                maxLength={10}
                                                onChange={(e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10)}
                                                className="flex-1 bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm"
                                                placeholder="9876543210"
                                            />
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-black text-sm font-bold uppercase tracking-wider mb-2 ml-1">Enterprise *</motion.label>
                                        <input type="text" name="Company" required className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="Company Inc." />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-black text-sm font-bold uppercase tracking-wider mb-2 ml-1">Solution Area</motion.label>
                                        <div className="relative group">
                                            <select name="LEADCF5" defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000042578178?.(); }} className="w-full bg-blue-50/30 border-2 border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm focus:shadow-md pr-10">
                                                <option value="" disabled>Select Zoho Solution *</option>
                                                <option value='Zoho&#x20;CRM&#x20;&amp;&#x20;Sales'>Zoho CRM &amp; Sales</option>
                                                <option value='Zoho&#x20;Finance&#x20;&amp;&#x20;Accounting'>Zoho Finance &amp; Accounting</option>
                                                <option value='Zoho&#x20;HR&#x20;&amp;&#x20;People'>Zoho HR &amp; People</option>
                                                <option value='Zoho&#x20;Marketing&#x20;&amp;&#x20;Automation'>Zoho Marketing &amp; Automation</option>
                                                <option value='Zoho&#x20;IT&#x20;&amp;&#x20;Support'>Zoho IT &amp; Support</option>
                                                <option value='Zoho&#x20;BI&#x20;&amp;&#x20;Analytics'>Zoho BI &amp; Analytics</option>
                                                <option value='Zoho&#x20;Developer&#x20;Platforms'>Zoho Developer Platforms</option>
                                                <option value='Zoho&#x20;One&#x20;&#x28;Complete&#x20;Suite&#x29;'>Zoho One (Complete Suite)</option>
                                                <option value='NetSuite Product /Services'>NetSuite Product /Services</option>
                                                <option value='Zoho Products/Services'>Zoho Products/Services</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600 transition-transform group-hover:scale-110">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-black text-sm font-bold uppercase tracking-wider mb-2 ml-1">Revenue *</motion.label>
                                        <div className="relative group">
                                            <select name="LEADCF19" required defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000042578178?.(); }} className="w-full bg-blue-50/30 border-2 border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm focus:shadow-md pr-10">
                                                <option value="" disabled>Select Yearly Revenue</option>
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
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-black text-sm font-bold uppercase tracking-wider mb-2 ml-1">Referral Path</motion.label>
                                        <div className="relative group">
                                            <select name="LEADCF127" defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000042578178?.(); }} className="w-full bg-blue-50/30 border-2 border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm focus:shadow-md pr-10">
                                                <option value="" disabled>How did you find us?</option>
                                                <option value="-None-">-None-</option>
                                                <option value="Email">Email</option>
                                                <option value="Event">Event</option>
                                                <option value="Friend /Associate">Friend /Associate</option>
                                                <option value="Search">Search</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Referral">Referral</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>




                                <motion.div variants={itemVariants} className="flex flex-col">
                                    <motion.label variants={labelVariants} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-black text-sm font-bold uppercase tracking-wider mb-2 ml-1">Requirements *</motion.label>
                                    <textarea name="LEADCF123" required rows={3} className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 resize-none shadow-sm focus:shadow-md text-sm" placeholder="Tell us about your project goals..." />
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-2">
                                    <div className="captcha-area transform scale-90 origin-left">
                                        <div data-sitekey="6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y" data-theme="light" data-callback="rccallback409531000042578178" captcha-verified="false" id="recap409531000042578178"></div>
                                        <div id="recapErr409531000042578178" style={{ fontSize: '11px', color: '#dc2626', marginTop: '6px', fontWeight: '600', visibility: 'hidden' }}>Security verification required.</div>
                                    </div>

                                    <button type="submit" className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-blue-700 to-gray-900 hover:from-blue-800 hover:to-black text-white font-bold rounded-2xl transition-all shadow-[0_15px_30px_-5px_rgba(30,58,138,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(30,58,138,0.4)] hover:scale-[1.03] active:scale-95 formsubmit-zoho text-sm uppercase tracking-widest">
                                        Send Now
                                    </button>
                                </motion.div>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}




