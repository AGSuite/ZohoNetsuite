"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Send } from "lucide-react";

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
            <section id="contact-form" className="relative py-24 bg-white overflow-hidden scroll-mt-36">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-60"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="rounded-[40px] bg-white border border-blue-100 shadow-2xl overflow-hidden min-h-[700px] flex flex-col lg:flex-row">
                        {/* Left Side: Info */}
                        <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between bg-gradient-to-br from-blue-50 via-white to-indigo-50/30">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-white shadow-sm mb-8">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                    <span className="text-blue-900 text-xs font-semibold tracking-widest uppercase">Contact Us</span>
                                </div>

                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
                                    Ready to Scale <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                        With Zoho?
                                    </span>
                                </h2>

                                <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
                                    Join 500+ businesses that have optimized their operations with our certified Zoho expertise. 
                                    From implementation to custom automation, we've got you covered.
                                </p>

                                <div className="space-y-6 mb-12">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                                            <Send size={20} />
                                        </div>
                                        <p className="text-gray-700 font-medium">Quick Response Guaranteed</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                                            <Image src="/images/Homeicons/Zohoffice/zoho.png" alt="Zoho" width={24} height={24} className="grayscale brightness-0" />
                                        </div>
                                        <p className="text-gray-700 font-medium">Advanced Zoho Partner</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-blue-100">
                                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Technical Support</p>
                                <p className="text-2xl font-bold text-blue-900">+91 909 601 2100</p>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:w-1/2 p-8 lg:p-12 bg-white relative">
                            <form
                                action="https://crm.zoho.in/crm/WebToLeadForm"
                                name="WebToLeads409531000000325116"
                                method="POST"
                                onSubmit={handleFormSubmit}
                                acceptCharset="UTF-8"
                                className="space-y-5"
                            >
                                <input type="text" className="hidden" name="xnQsjsdp" defaultValue="cae9ae065232fde2e40c34423041df835a4066ff2103c546e198d684b35e9861" readOnly />
                                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                                <input type="text" className="hidden" name="xmIwtLD" defaultValue="3820b2b7a84f952a9adb8f71d02ba0d6e9247f59314524fd5d4528cf4dff99b516b0d501ae4661e854a71c2dfb2b5263" readOnly />
                                <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                                <input type="text" className="hidden" name="returnURL" defaultValue="https://agsuitetech.com/contact-us/thank-you.php" readOnly />
                                <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
                                <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Full Name *</label>
                                        <input type="text" name="Last Name" required className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 outline-none transition-all placeholder-gray-400 text-sm" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Business Email *</label>
                                        <input type="email" data-ftype="email" name="Email" required className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 outline-none transition-all placeholder-gray-400 text-sm" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Role *</label>
                                        <input type="text" name="Designation" required className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 outline-none transition-all placeholder-gray-400 text-sm" placeholder="Manager" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Mobile *</label>
                                        <input type="tel" name="Mobile" required className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 outline-none transition-all placeholder-gray-400 text-sm" placeholder="+91 00000 00000" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Company Name *</label>
                                        <input type="text" name="Company" required className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 outline-none transition-all placeholder-gray-400 text-sm" placeholder="Company Inc." />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Solution *</label>
                                        <div className="relative">
                                            <select name="LEADCF5" required defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000000325116?.(); }} className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 outline-none appearance-none cursor-pointer text-sm">
                                                <option value="" disabled>Select Solution</option>
                                                <option value="NetSuite&#x20;Product&#x20;&#x2f;Services">Oracle NetSuite</option>
                                                <option value="Zoho&#x20;Products&#x2f;Services">Zoho Suite</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Annual Revenue *</label>
                                        <div className="relative">
                                            <select name="LEADCF40" required defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000000325116?.(); }} className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 outline-none appearance-none cursor-pointer text-sm">
                                                <option value="" disabled>Select Revenue</option>
                                                <option value="Under&#x20;&#x24;500K">Under $500K</option>
                                                <option value="&#x24;500k&#x20;to&#x20;&#x24;1M">$500k to $1M</option>
                                                <option value="&#x24;1M&#x20;to&#x20;&#x24;2M">$1M to $2M</option>
                                                <option value="&#x24;2M&#x20;to&#x20;&#x24;5M">$2M to $5M</option>
                                                <option value="&#x24;5M&#x20;to&#x20;&#x24;10M">$5M to $10M</option>
                                                <option value="&#x24;10M+">$10M+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Referral Source</label>
                                        <div className="relative">
                                            <select name="LEADCF41" defaultValue="" onChange={(e) => { (e.target as any).ariaSelected = "true"; (window as any).addAriaSelected409531000000325116?.(); }} className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 outline-none appearance-none cursor-pointer text-sm">
                                                <option value="" disabled>Select Option</option>
                                                <option value="Email">Email</option>
                                                <option value="Event">Event</option>
                                                <option value="Friend/Associate">Friend/Associate</option>
                                                <option value="Search">Search</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Referral">Referral</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden">
                                    <select name="Lead Source" defaultValue="Website">
                                        <option value="Website">Website</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Requirements *</label>
                                    <textarea name="Description" required rows={2} className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3 text-gray-900 outline-none transition-all placeholder-gray-400 resize-none text-sm" placeholder="Tell us how we can help..." />
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
                                    <div className="captcha-area transform scale-90 origin-left">
                                        <div className="g-recaptcha" data-sitekey="6Lct5nwkAAAAADdrNkjf_H3jp-0XE9dUqAjgJXQ3" data-theme="light" data-callback="rccallback409531000000325116" captcha-verified="false" id="recap409531000000325116"></div>
                                        <div id="recapErr409531000000325116" style={{ fontSize: '10px', color: 'red', marginTop: '4px', visibility: 'hidden' }}>Please verify reCAPTCHA</div>
                                    </div>

                                    <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-95 text-sm whitespace-nowrap">
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
