"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Send, Users, Rocket, Target, Award } from "lucide-react";

export default function ZohoContactForm() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        (window as any).addAriaSelected409531000000325116 = function () {
            const optionElem = (event as any).target;
            const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
            if (previousSelectedOption) {
                previousSelectedOption.removeAttribute('aria-selected');
            }
            optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
        };

        (window as any).rccallback409531000000325116 = function () {
            if (document.getElementById('recap409531000000325116')) {
                document.getElementById('recap409531000000325116')?.setAttribute('captcha-verified', 'true');
            }
            const errorElement = document.getElementById('recapErr409531000000325116');
            if (errorElement && errorElement.style.visibility === 'visible') {
                errorElement.style.visibility = 'hidden';
            }
        };

        (window as any).reCaptchaAlert409531000000325116 = function () {
            const recap = document.getElementById('recap409531000000325116');
            if (recap && recap.getAttribute('captcha-verified') === 'false') {
                const errorElement = document.getElementById('recapErr409531000000325116');
                if (errorElement) {
                    errorElement.style.visibility = 'visible';
                }
                return false;
            }
            return true;
        };

        (window as any).validateEmail409531000000325116 = function () {
            const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
            if (!form) return true;
            const emailFld = form.querySelectorAll('[data-ftype=email]');
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

        (window as any).checkMandatory409531000000325116 = function () {
            const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'Description', 'LEADCF5', 'LEADCF40'];
            const fldLangVal = ['Company Name', 'Name', 'Role', 'Business Email', 'Mobile', 'Requirements', 'Service Interest', 'Annual Revenue'];
            const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
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
                    }
                }
            }
            if ((window as any).validateEmail409531000000325116 && !(window as any).validateEmail409531000000325116()) return false;
            if ((window as any).reCaptchaAlert409531000000325116 && !(window as any).reCaptchaAlert409531000000325116()) return false;

            (window as any).trackVisitor409531000000325116?.();
            (window as any).sendEmail?.();
            const submitButton = document.querySelector('.formsubmit-zoho') as HTMLButtonElement;
            if (submitButton) {
                submitButton.setAttribute('disabled', 'true');
            }
            return true;
        };

        (window as any).sendEmail = function () {
            const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
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

        (window as any).trackVisitor409531000000325116 = function () {
            try {
                if ((window as any).$zoho && (window as any).$zoho.salesiq) {
                    const form = document.forms.namedItem('WebToLeads409531000000325116') as HTMLFormElement;
                    if (form) {
                        const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
                        if (LDTuvidObj) {
                            LDTuvidObj.value = (window as any).$zoho.salesiq.visitor.uniqueid();
                        }
                        const nameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
                        const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
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
        if ((window as any).checkMandatory409531000000325116 && !(window as any).checkMandatory409531000000325116()) {
            e.preventDefault();
        }
    };

    if (!isClient) return null;

    return (
        <>
            <Script
                src="https://www.google.com/recaptcha/api.js"
                strategy="lazyOnload"
            />
            <section id="contact-form" className="relative py-28 bg-[#0a0a0a] overflow-hidden scroll-mt-36">
                {/* Background Decorative Gradients */}
                <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="rounded-[40px] bg-[#0d0d0d]/80 backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden min-h-[720px] flex flex-col lg:flex-row">
                        {/* Left Side: Brand Narrative */}
                        <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-blue-950 via-[#0d0d0d] to-[#0a0a0a] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/Background/grid-white.svg')] opacity-[0.03] pointer-events-none"></div>
                            
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-sm mb-8">
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                                    <span className="text-blue-100 text-[10px] font-bold tracking-widest uppercase">Global Excellence</span>
                                </div>

                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.05] text-white">
                                    Architecting <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                                        Your Success
                                    </span>
                                </h2>

                                <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-sm">
                                    Join 500+ enterprises that have optimized their operations with our certified Zoho implementation expertise and custom industrial automation.
                                </p>

                                <div className="mb-12">
                                    <Image 
                                        src="/images/zoho logos/zoho premium.png" 
                                        alt="Zoho Premium Partner" 
                                        width={360} 
                                        height={120} 
                                        className="w-64 h-auto object-contain transition-all hover:scale-105 duration-500 rounded-2xl p-3 bg-white/10 backdrop-blur-md border border-white/10" 
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                                    {/* Card 1 */}
                                    <div className="group relative p-5 rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="p-2.5 bg-blue-50 rounded-2xl text-blue-600 mb-3 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                <Award size={21} strokeWidth={1.5} />
                                            </div>
                                            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-1">Success Stories</p>
                                            <p className="text-2xl font-bold text-gray-900 tracking-tight">500+</p>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="group relative p-5 rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="p-2.5 bg-indigo-50 rounded-2xl text-indigo-600 mb-3 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                                <Rocket size={21} strokeWidth={1.5} />
                                            </div>
                                            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-1">Solution Modules</p>
                                            <p className="text-2xl font-bold text-gray-900 tracking-tight">40+</p>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="group relative p-5 rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="p-2.5 bg-blue-50 rounded-2xl text-blue-800 mb-3 border border-blue-100 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                                                <Target size={21} strokeWidth={1.5} />
                                            </div>
                                            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-1">Experience</p>
                                            <p className="text-2xl font-bold text-gray-900 tracking-tight">15+ Yrs</p>
                                        </div>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="group relative p-5 rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="p-2.5 bg-indigo-50 rounded-2xl text-indigo-800 mb-3 border border-indigo-100 group-hover:bg-indigo-800 group-hover:text-white transition-colors duration-300">
                                                <Users size={21} strokeWidth={1.5} />
                                            </div>
                                            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-1">Consultants</p>
                                            <p className="text-2xl font-bold text-gray-900 tracking-tight">50+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:w-1/2 p-10 lg:p-16 bg-white relative border-l border-blue-50">
                            <div className="relative z-10 mb-10">
                                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Get Expert Guidance</h3>
                                <p className="text-gray-600">Fill in your details and we'll reach out within 24 hours</p>
                            </div>

                            <form
                                action="https://crm.zoho.in/crm/WebToLeadForm"
                                name="WebToLeads409531000000325116"
                                method="POST"
                                onSubmit={handleFormSubmit}
                                acceptCharset="UTF-8"
                                className="space-y-6"
                            >
                                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="cae9ae065232fde2e40c34423041df835a4066ff2103c546e198d684b35e9861" readOnly />
                                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                                <input type="text" className="hidden" name="xmIwtLD" defaultValue="3820b2b7a84f952a9adb8f71d02ba0d6e9247f59314524fd5d4528cf4dff99b516b0d501ae4661e854a71c2dfb2b5263" readOnly />
                                <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                                <input type="text" className="hidden" name="returnURL" defaultValue="https://agsuitetech.com/contact-us/thank-you.php" readOnly />
                                <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
                                <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <div>
                                        <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Full Identity *</label>
                                        <input type="text" name="Last Name" required className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="Johnathan Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Work Email *</label>
                                        <input type="email" data-ftype="email" name="Email" required className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="john@enterprise.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <div>
                                        <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Job Role *</label>
                                        <input type="text" name="Designation" required className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="Manager" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Direct Contact *</label>
                                        <input type="tel" name="Mobile" required className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="+91 00000 00000" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <div>
                                        <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Enterprise *</label>
                                        <input type="text" name="Company" required className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 shadow-sm focus:shadow-md text-sm" placeholder="Company Inc." />
                                    </div>
                                    <div>
                                        <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Solution Area *</label>
                                        <div className="relative group">
                                            <select name="LEADCF5" required defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000000325116?.(); }} className="w-full bg-blue-50/30 border-2 border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm focus:shadow-md pr-10">
                                                <option value="" disabled>Select Solution</option>
                                                <option value="NetSuite&#x20;Product&#x20;&#x2f;Services">Oracle NetSuite</option>
                                                <option value="Zoho&#x20;Products&#x2f;Services">Zoho Suite</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600 transition-transform group-hover:scale-110">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <div>
                                        <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Revenue *</label>
                                        <div className="relative group">
                                            <select name="LEADCF40" required defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000000325116?.(); }} className="w-full bg-blue-50/30 border-2 border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm focus:shadow-md pr-10">
                                                <option value="" disabled>Select Yearly Revenue</option>
                                                <option value="Under&#x20;&#x24;500K">Under $500K</option>
                                                <option value="&#x24;500k&#x20;to&#x20;&#x24;1M">$500k - $1M</option>
                                                <option value="&#x24;1M&#x20;to&#x20;&#x24;2M">$1M - $2M</option>
                                                <option value="&#x24;2M&#x20;to&#x20;&#x24;5M">$2M - $5M</option>
                                                <option value="&#x24;5M&#x20;to&#x20;&#x24;10M">$5M - $10M</option>
                                                <option value="&#x24;10M+">$10M+</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Referral Path</label>
                                        <div className="relative group">
                                            <select name="LEADCF41" defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000000325116?.(); }} className="w-full bg-blue-50/30 border-2 border-blue-100/50 group-hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm focus:shadow-md pr-10">
                                                <option value="" disabled>How did you find us?</option>
                                                <option value="Email">Email</option>
                                                <option value="Search">Search</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Referral">Recommendation</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden">
                                    <select name="Lead Source" defaultValue="Website">
                                        <option value="Website">Zoho Channel</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-800 text-[10px] font-bold uppercase tracking-widest mb-2 ml-1">Requirements *</label>
                                    <textarea name="Description" required rows={3} className="w-full bg-blue-50/30 border-2 border-blue-100/50 hover:border-blue-400 focus:border-blue-700 rounded-2xl px-5 py-3.5 text-gray-900 outline-none transition-all placeholder-gray-400 resize-none shadow-sm focus:shadow-md text-sm" placeholder="Tell us about your project goals..." />
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-2">
                                    <div className="captcha-area transform scale-90 origin-left">
                                        <div className="g-recaptcha" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-theme="light" data-callback="rccallback409531000000325116" captcha-verified="false" id="recap409531000000325116"></div>
                                        <div id="recapErr409531000000325116" style={{ fontSize: '11px', color: '#dc2626', marginTop: '6px', fontWeight: '600', visibility: 'hidden' }}>Security verification required.</div>
                                    </div>

                                    <button type="submit" className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-blue-700 to-gray-900 hover:from-blue-800 hover:to-black text-white font-bold rounded-2xl transition-all shadow-[0_15px_30px_-5px_rgba(30,58,138,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(30,58,138,0.4)] hover:scale-[1.03] active:scale-95 formsubmit-zoho text-sm uppercase tracking-widest">
                                        Send Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
