"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
            const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF127', 'LEADCF165'];
            const fldLangVal = ['Company Name', 'Name', 'Role', "POC's Email", "POC's Mobile", 'Annual Revenue', 'How We Can Help You', 'How did you hear about us.', 'Services'];
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

            const submitButton = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
            if (submitButton) {
                submitButton.setAttribute('disabled', 'true');
            }
            return true;
        };

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
            <Script id="wf_anal" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=0eb6a535c81a04e07aa886637740a304d7d59028aa8cf0d09048e8d1fbedf647e44d9f74b254709a0882eb1c31136d9cgid6d4592f2dce66ea8bcc60167960b9d0d27138cba33ac6ce7248c5c53d3a06fdcgid365cc1061c930ed0655f44af7ff3ea4d0b60a3b2784693cb6b2d5828f4dd9f35gid1cae83d6cd96c22775ca40c3b71805971400a95aea889397fdfa8c8f955523fd&tw=d336253c98c6a8f95f079a1420d0d2411cea660a574b2a28d90b4690781c9053&version=v2" strategy="afterInteractive" />
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
                                className="space-y-6"
                            >
                                <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="ce6ebe1d9e713fef68d407d2105f962cb111097dcf75c7448aa9ab6b81795a86" readOnly />
                                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                                <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="f709a413582c4286a2de04d475889148eb84a2d09b828569c9eba502ddcc5faa4e3fd730e1dcd4cb039e9925fd212664" readOnly />
                                <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" readOnly />
                                <input type="text" style={{ display: 'none' }} name="returnURL" value="https://www.agsuite.tech/thank-you" readOnly />
                                <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" value="" readOnly />

                                {/* Hidden default fields required by Zoho */}
                                <select name="Lead Status" className="hidden" defaultValue="Database">
                                    <option value="Database">Database</option>
                                </select>
                                <select name="Lead Source" className="hidden" defaultValue="Website (Form)">
                                    <option value="Website (Form)">Website (Form)</option>
                                </select>
                                <input type="hidden" name="No of Employees" value="0" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2 ml-1">Name *</motion.label>
                                        <input type="text" id="Last_Name" name="Last Name" required maxLength={80} className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="Johnathan Doe" />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2 ml-1">POC's Email *</motion.label>
                                        <input type="text" id="Email" data-ftype="email" name="Email" required maxLength={100} className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="john@enterprise.com" />
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2 ml-1">Role *</motion.label>
                                        <input type="text" id="Designation" name="Designation" required maxLength={100} className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="Manager" />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2 ml-1">POC's Mobile *</motion.label>
                                        <input
                                            type="text"
                                            id="Mobile"
                                            name="Mobile"
                                            required
                                            maxLength={30}
                                            className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm"
                                            placeholder="+91 9876543210"
                                        />
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2 ml-1">Company Name *</motion.label>
                                        <input type="text" id="Company" name="Company" required maxLength={200} className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="Company Inc." />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2 ml-1">Services *</motion.label>
                                        <div className="relative group">
                                            <select
                                                id="LEADCF165"
                                                name="LEADCF165"
                                                required
                                                onChange={(e) => { (window as any).addAriaSelected409531000047791049?.(); }}
                                                className="w-full bg-blue-50/30 border-2 border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none cursor-pointer text-sm transition-all shadow-sm focus:shadow-md"
                                            >
                                                <option value="" disabled selected>-Select Service-</option>
                                                <option value="Zoho Licenses">Zoho Licenses</option>
                                                <option value="Zoho Implementation">Zoho Implementation</option>
                                                <option value="Zoho Licenses + Implementation">Zoho Licenses + Implementation</option>
                                                <option value="Zoho Support">Zoho Support</option>
                                                <option value="Zoho Optimization">Zoho Optimization</option>
                                                <option value="Zoho Customization">Zoho Customization</option>
                                                <option value="Zoho Integrations">Zoho Integrations</option>
                                            </select>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2 ml-1">Annual Revenue *</motion.label>
                                        <div className="relative group">
                                            <select
                                                id="LEADCF19"
                                                name="LEADCF19"
                                                required
                                                onChange={(e) => { (window as any).addAriaSelected409531000047791049?.(); }}
                                                className="w-full bg-blue-50/30 border-2 border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none cursor-pointer text-sm transition-all shadow-sm focus:shadow-md"
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
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="flex flex-col">
                                        <motion.label variants={labelVariants} className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2 ml-1">How did you hear about us. *</motion.label>
                                        <div className="relative group">
                                            <select
                                                id="LEADCF127"
                                                name="LEADCF127"
                                                required
                                                onChange={(e) => { (window as any).addAriaSelected409531000047791049?.(); }}
                                                className="w-full bg-blue-50/30 border-2 border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none cursor-pointer text-sm transition-all shadow-sm focus:shadow-md"
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
                                    <motion.label variants={labelVariants} className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2 ml-1">How We Can Help You *</motion.label>
                                    <textarea id="LEADCF123" name="LEADCF123" required rows={3} className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 resize-none shadow-sm focus:shadow-md text-sm" placeholder="Tell us about your project goals..." />
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                    <input type="submit" id="formsubmit" className="formsubmit zcwf_button w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:scale-[1.02] active:scale-95 text-sm uppercase tracking-widest cursor-pointer" value="Submit" />
                                    <input type="reset" className="zcwf_button px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-2xl text-sm cursor-pointer" value="Reset" />
                                </motion.div>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
