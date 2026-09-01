"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { Send, Briefcase, Building2, Target, Heart } from "lucide-react";

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

    const [returnUrl, setReturnUrl] = useState('https://www.agsuite.tech/thank-you');

    useEffect(() => {
        setIsClient(true);
        if (typeof window !== 'undefined') {
            setReturnUrl(window.location.origin + '/thank-you');
        }

        (window as any).addAriaSelected409531000047791049 = function () {
            const optionElem = (event as any).target;
            const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
            if (previousSelectedOption) {
                previousSelectedOption.removeAttribute('aria-selected');
            }
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

        (window as any).checkMandatory409531000047791049 = function () {
            const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF165'];
            const fldLangVal = ['Company Name', 'Name', 'Role', "POC's Email", "POC's Mobile", 'Annual Revenue', 'How We Can Help You', 'Services'];
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
            if ((window as any).reCaptchaAlert409531000047791049 && !(window as any).reCaptchaAlert409531000047791049()) return false;

            const submitButton = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
            if (submitButton) {
                submitButton.setAttribute('disabled', 'true');
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

        (window as any).reCaptchaAlert409531000047791049 = function () {
            const recap = document.getElementById('recap409531000047791049');
            if (recap && recap.getAttribute('captcha-verified') === 'false') {
                const recapErr = document.getElementById('recapErr409531000047791049');
                if (recapErr) recapErr.style.visibility = 'visible';
                return false;
            }
            return true;
        };

        const renderRecaptcha = () => {
            const container = document.getElementById('recap409531000047791049');
            if (container && container.children.length === 0 && (window as any).grecaptcha && (window as any).grecaptcha.render) {
                try {
                    (window as any).grecaptcha.render(container, {
                        sitekey: '6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7',
                        theme: 'light',
                        callback: (window as any).rccallback409531000047791049
                    });
                } catch (e) { }
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

        if (typeof (window as any)._wfa_fstprtcken === 'undefined') {
            (window as any)._wfa_fstprtcken = {};
        }
        (window as any)._wfa_fstprtcken[409531000047791049] = true;
    }, []);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if ((window as any).checkMandatory409531000047791049 && !(window as any).checkMandatory409531000047791049()) {
            e.preventDefault();
            return;
        }
        const targetForm = e.currentTarget;
        const formData = new FormData(targetForm);
        fetch('/api/contact/zoho-notification', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.get('Last Name'),
                email: formData.get('Email'),
                mobile: formData.get('Mobile'),
                role: formData.get('Designation'),
                company: formData.get('Company'),
                services: formData.getAll('LEADCF165'),
                revenue: formData.get('LEADCF19'),
                hearAbout: formData.get('LEADCF127'),
                message: formData.get('LEADCF123'),
                subjectTitle: 'Zoho Contact us Form Enquiry'
            })
        }).catch(() => {});
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
            {/* Zoho CRM Web-to-Lead Analytics */}
            <Script id="wf_anal" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=5be9692ef9ab427acf1391714f2fff91d5b72c469390938cefbd33ab84dd5b8e9c71223ce8c14f44c8e8365f6a8c23d6gidbc632d800f066907ef96d29b7bae4b8ea7e60f0229673f2235936f50246b89fbgid29eac7a96f602c220e122d79c6e3da45331fb2e363513e82ad55c00dfc35c738gidcab4223515c216b81de2936190487e2bac1ebee6f8458681d0b0cd6ba0ce7107&tw=d6fc29e8e9570866ed4bd03fb221b685fd56a29f2bc327bb3bb9169356a4b4e3&version=v2" strategy="lazyOnload" />
            <section id="contact-form" className="relative pt-2 pb-6 sm:pt-3 sm:pb-8 lg:pt-4 lg:pb-10 min-h-[calc(100vh-80px)] flex items-start justify-center bg-[#0a0a0a] overflow-hidden scroll-mt-20">
                {/* Background Decorative Gradients */}
                <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="rounded-3xl bg-[#0d0d0d]/80 backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
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
                            className="p-5 sm:p-7 lg:p-8 flex flex-col justify-between bg-gradient-to-br from-blue-950 via-[#0d0d0d] to-[#0a0a0a] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10"
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
                                <motion.h2
                                    variants={{
                                        hidden: { opacity: 0, y: 15 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                    }}
                                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 tracking-tight leading-tight text-white"
                                >
                                    Architecting <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                                        Your Success
                                    </span>
                                </motion.h2>

                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0, y: 15 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                    }}
                                    className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 max-w-md"
                                >
                                    Join 500+ enterprises that have optimized their operations with our certified Zoho implementation expertise and custom industrial automation.
                                </motion.p>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 15 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                    }}
                                    className="mb-4"
                                >
                                    <Image
                                        src="/images/zoho-logos/zoho premium.webp"
                                        alt="Zoho Premium Partner"
                                        width={240}
                                        height={80}
                                        className="w-48 h-auto object-contain transition-all hover:scale-105 duration-500 rounded-xl p-2.5 bg-white/10 backdrop-blur-md border border-white/10"
                                        sizes="(max-width: 768px) 100vw, 240px"
                                    />
                                </motion.div>

                                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                                    {[
                                        { value: "700+", label: "Projects Completed", icon: Briefcase },
                                        { value: "250+", label: "Global Customers", icon: Building2 },
                                        { value: "15+", label: "Industry Expertise", icon: Target },
                                        { value: "84%", label: "Customer Retention", icon: Heart },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.95, y: 20 },
                                                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * i } }
                                            }}
                                            whileHover={{
                                                scale: 1.03,
                                                transition: { duration: 0.3, ease: "easeOut" },
                                            }}
                                            className="relative group p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-white via-white/95 to-blue-50 border border-blue-100/50 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                                        >
                                            <div className="absolute -right-3 -bottom-3 opacity-[0.25] group-hover:opacity-[0.45] transition-all duration-300 pointer-events-none">
                                                <item.icon className="w-16 h-16 text-blue-900" strokeWidth={1} />
                                            </div>
                                            <div className="relative z-10 flex flex-col items-start text-left">
                                                <div className="mb-2 w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                                                    <item.icon className="w-4 h-4 font-bold" strokeWidth={1.5} />
                                                </div>
                                                <div className="space-y-0.5">
                                                    <div className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#000d2e] via-blue-900 to-black tracking-tight">
                                                        {item.value}
                                                    </div>
                                                    <p className="text-gray-500 font-semibold text-[9px] sm:text-[10px] group-hover:text-blue-700 transition-colors uppercase tracking-widest leading-tight">
                                                        {item.label}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Form */}
                        <div className="p-4 sm:p-5 lg:p-6 bg-white relative flex flex-col justify-center">
                            <div className="relative z-10 mb-3">
                                <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">Let’s Get Started !!</h3>
                            </div>

                            <motion.form
                                id="webform409531000047791049"
                                action="https://crm.zoho.in/crm/WebToLeadForm"
                                name="WebToLeads409531000047791049"
                                method="POST"
                                onSubmit={handleFormSubmit}
                                acceptCharset="UTF-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.05 }}
                                variants={containerVariants}
                                className="space-y-3"
                            >
                                <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="262e1ed99e86602d574e7f7a3556903cf3987a60522587d193269076b51f27ac" readOnly />
                                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                                <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="50434209e66e7930102f5d083964cd0f9819b88a702d9fc9750da997ff754f7e4e67130f9f65fb9d33069cf9e29699b3" readOnly />
                                <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" readOnly />
                                <input type="text" style={{ display: 'none' }} name="returnURL" value={returnUrl} readOnly />
                                <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" value="" readOnly />

                                {/* Hidden default fields required by Zoho */}
                                <select name="Lead Status" className="hidden" defaultValue="Database">
                                    <option value="Database">Database</option>
                                </select>
                                <select name="Lead Source" className="hidden" defaultValue="Website (Form)">
                                    <option value="Website (Form)">Website (Form)</option>
                                </select>
                                <input type="hidden" name="No of Employees" value="0" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1 ml-0.5">Name *</motion.label>
                                        <input type="text" id="Last_Name" name="Last Name" required maxLength={80} className="w-full bg-blue-50/30 border border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-lg px-3 py-2 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-xs text-xs" placeholder="Johnathan Doe" />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1 ml-0.5">Email *</motion.label>
                                        <input type="text" id="Email" data-ftype="email" name="Email" required maxLength={100} className="w-full bg-blue-50/30 border border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-lg px-3 py-2 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-xs text-xs" placeholder="john@enterprise.com" />
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1 ml-0.5">Role *</motion.label>
                                        <input type="text" id="Designation" name="Designation" required maxLength={100} className="w-full bg-blue-50/30 border border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-lg px-3 py-2 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-xs text-xs" placeholder="Manager" />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1 ml-0.5">Mobile *</motion.label>
                                        <input
                                            type="text"
                                            id="Mobile"
                                            name="Mobile"
                                            required
                                            maxLength={30}
                                            className="w-full bg-blue-50/30 border border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-lg px-3 py-2 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-xs text-xs"
                                            placeholder="+91 9876543210"
                                        />
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1 ml-0.5">Company Name *</motion.label>
                                        <input type="text" id="Company" name="Company" required maxLength={200} className="w-full bg-blue-50/30 border border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-lg px-3 py-2 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-xs text-xs" placeholder="Company Inc." />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1 ml-0.5">Services *</motion.label>
                                        <div className="relative group">
                                            <select
                                                id="LEADCF165"
                                                name="LEADCF165"
                                                defaultValue=""
                                                required
                                                onChange={(e) => { (window as any).addAriaSelected409531000047791049?.(); }}
                                                className="w-full bg-blue-50/30 border border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-lg px-3 py-2 text-gray-900 outline-none cursor-pointer text-xs transition-all shadow-xs"
                                            >
                                                <option value="" disabled>-Select Service-</option>
                                                <option value="Zoho Licenses">Zoho Licenses</option>
                                                <option value="Zoho Implementation">Zoho Implementation</option>
                                                {/* <option value="Zoho Licenses + Implementation">Zoho Licenses + Implementation</option> */}
                                                <option value="Zoho Support">Zoho Support</option>
                                                <option value="Zoho Optimization">Zoho Optimization</option>
                                                <option value="Zoho Customization">Zoho Customization</option>
                                                <option value="Zoho Integrations">Zoho Integrations</option>
                                            </select>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1 ml-0.5">Annual Revenue *</motion.label>
                                        <div className="relative group">
                                            <select
                                                id="LEADCF19"
                                                name="LEADCF19"
                                                required
                                                onChange={(e) => { (window as any).addAriaSelected409531000047791049?.(); }}
                                                className="w-full bg-blue-50/30 border border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-lg px-3 py-2 text-gray-900 outline-none cursor-pointer text-xs transition-all shadow-xs"
                                            >
                                                <option value="-None-">-None-</option>
                                                <option value="Less than $ 1M">Less than $ 1M</option>
                                                <option value="$ 1M - 2.5M">$ 1M - 2.5M</option>
                                                <option value="$ 2.5M - 5M">$ 2.5M - 5M</option>
                                                <option value="$ 5M - 10M">$ 5M - 10M</option>
                                                <option value="$ 10M - 15M">$ 10M - 15M</option>
                                                <option value="$ 15M - 25M">$ 15M - 25M</option>
                                                <option value="$ 25M - 50M">$ 25M - 50M</option>
                                                <option value="$ 50M - 100M">$ 50M - 100M</option>
                                                <option value="$ 100M - 250M">$ 100M - 250M</option>
                                                <option value="More than $ 250M">More than $ 250M</option>
                                            </select>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1 ml-0.5">How did you hear about us. *</motion.label>
                                        <div className="relative group">
                                            <select
                                                id="LEADCF127"
                                                name="LEADCF127"
                                                required
                                                onChange={(e) => { (window as any).addAriaSelected409531000047791049?.(); }}
                                                className="w-full bg-blue-50/30 border border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-lg px-3 py-2 text-gray-900 outline-none cursor-pointer text-xs transition-all shadow-xs"
                                            >
                                                <option value="-None-">-None-</option>
                                                <option value="Email">Email</option>
                                                <option value="Event">Event</option>
                                                <option value="Friend/Associate">Friend/Associate</option>
                                                <option value="Search">Search</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Referral">Referral</option>
                                            </select>
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div variants={itemVariants} className="flex flex-col">
                                    <motion.label variants={labelVariants} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1 ml-0.5">How We Can Help You *</motion.label>
                                    <textarea id="LEADCF123" name="LEADCF123" required rows={2} className="w-full bg-blue-50/30 border border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-lg px-3 py-1.5 text-gray-900 outline-none transition-all placeholder-gray-400 resize-none shadow-xs text-xs" placeholder="Tell us about your project goals..." />
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex flex-col gap-1 my-1">
                                  <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="lazyOnload" />
                                  <div
                                    className="g-recaptcha scale-[0.85] origin-left"
                                    data-sitekey="6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7"
                                    data-theme="light"
                                    data-callback="rccallback409531000047791049"
                                    captcha-verified="false"
                                    id="recap409531000047791049"
                                  ></div>
                                  <div
                                    id="recapErr409531000047791049"
                                    style={{ visibility: 'hidden', color: '#ef4444', fontSize: '11px' }}
                                  >
                                    Captcha validation failed. If you are not a robot then please try again.
                                  </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="pt-1">
                                    <input type="submit" id="formsubmit" className="formsubmit zcwf_button w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-md hover:scale-[1.01] active:scale-95 text-xs uppercase tracking-wider cursor-pointer text-center" value="Submit" />
                                </motion.div>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
