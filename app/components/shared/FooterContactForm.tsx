"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { Briefcase, Building2, Heart, Target } from "lucide-react";
import MultiSelectDropdown from "./MultiSelectDropdown";

function FooterStatCard({ item }: { item: any; index?: number }) {
  return (
    <div
      className="relative group p-5 sm:p-6 rounded-[2rem] bg-gradient-to-br from-white via-white/95 to-blue-50 border border-blue-100/50 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative faint icon bg */}
      <div className="absolute -right-4 -bottom-4 opacity-[0.25] group-hover:opacity-[0.45] transition-opacity duration-300 pointer-events-none">
        <item.icon className="w-24 h-24 text-blue-900" strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col items-start text-left">
        <div className="mb-4 w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
          <item.icon className="w-5.5 h-5.5 font-bold" strokeWidth={1.5} />
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#000d2e] via-blue-900 to-black tracking-tight">
            {item.value}
          </div>
          <p className="text-gray-500 font-semibold text-[10px] sm:text-[11px] group-hover:text-blue-700 transition-colors uppercase tracking-widest leading-tight">
            {item.label}
          </p>
        </div>
      </div>
    </div>
  );
}

interface FooterContactFormProps {
  platform: 'NetSuite' | 'Zoho';
}

export default function FooterContactForm({ platform }: FooterContactFormProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isNetSuite = platform === 'NetSuite';

  const config = isNetSuite
    ? {
        formId: "webform409531000047791096",
        formName: "WebToLeads409531000047791096",
        xnQsjsdp: "e79cbdec5c6e5b7d7f71b6fd074e22822590c7d5f2b4c7d541bbbb65cad7c1e9",
        xmIwtLD: "07822c70b4131fef446a0a686c99d5195d6d6ddfa0431c1f0eeb3f080cc03771374f84de08a3fd4604be9855603d3099",
        serviceFieldName: "LEADCF166",
        serviceLabel: "Netsuite Services *",
        serviceDefault: "-Select NetSuite Service-",
        serviceOptions: [
          "NetSuite Licenses",
          "NetSuite Implementation",
          // "NetSuite Licenses + Implementation",
          "New Subsidiary Implementation",
          "NetSuite Support",
          "NetSuite Optimization",
          "NetSuite Customization",
          "NetSuite Integrations",
          "NetSuite India Localization",
          "NetSuite Data Backup for India",
        ],
        analyticsUrl: "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=9928b42954d320356885bb078ab0c3360c484e291c9e63097274653a3641def28b6749111011c9996c331f7836c7a2e8gid872197a4e4b8e909c249edeced5a19f1d2f950e702a3b0289fff2eacb04b67b1gid273da06b7bb3796c20973a82554d312ddd92ec671fa5a6016c080db58e6ccf5agidf40ec6d150665170b0cb2e595aa0cb939a02ed9792327816f3776b9eead7fe3a&tw=48a179f0eb3b7de8eccbf4bf9c2ace934d9e1bdc655d88e07911628e929af667&version=v2",
        validateFuncName: "checkMandatory409531000047791096",
        validateEmailFuncName: "validateEmail409531000047791096",
        recapId: "recap409531000047791096_footer_ns",
        recapErrId: "recapErr409531000047791096_footer_ns",
        recapCallbackName: "rccallback409531000047791096_footer_ns",
        reCapAlertFuncName: "reCaptchaAlert409531000047791096_footer_ns",
        recapSiteKey: "6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7",
      }
    : {
        formId: "webform409531000047791049",
        formName: "WebToLeads409531000047791049",
        xnQsjsdp: "262e1ed99e86602d574e7f7a3556903cf3987a60522587d193269076b51f27ac",
        xmIwtLD: "50434209e66e7930102f5d083964cd0f9819b88a702d9fc9750da997ff754f7e4e67130f9f65fb9d33069cf9e29699b3",
        serviceFieldName: "LEADCF165",
        serviceLabel: "Zoho Services *",
        serviceDefault: "-Select Zoho Service-",
        serviceOptions: [
          "Zoho Licenses",
          "Zoho Implementation",
          // "Zoho Licenses + Implementation",
          "Zoho Support",
          "Zoho Optimization",
          "Zoho Customization",
          "Zoho Integrations",
        ],
        analyticsUrl: "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=5be9692ef9ab427acf1391714f2fff91d5b72c469390938cefbd33ab84dd5b8e9c71223ce8c14f44c8e8365f6a8c23d6gidbc632d800f066907ef96d29b7bae4b8ea7e60f0229673f2235936f50246b89fbgid29eac7a96f602c220e122d79c6e3da45331fb2e363513e82ad55c00dfc35c738gidcab4223515c216b81de2936190487e2bac1ebee6f8458681d0b0cd6ba0ce7107&tw=d6fc29e8e9570866ed4bd03fb221b685fd56a29f2bc327bb3bb9169356a4b4e3&version=v2",
        validateFuncName: "checkMandatory409531000047791049",
        validateEmailFuncName: "validateEmail409531000047791049",
        recapId: "recap409531000047791049_footer_zoho",
        recapErrId: "recapErr409531000047791049_footer_zoho",
        recapCallbackName: "rccallback409531000047791049_footer_zoho",
        reCapAlertFuncName: "reCaptchaAlert409531000047791049_footer_zoho",
        recapSiteKey: "6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7",
      };

  const [returnUrl, setReturnUrl] = useState('https://www.agsuite.tech/thank-you');

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setReturnUrl(window.location.origin + '/thank-you');
    }

    (window as any).addAriaSelectedFooter = function (event: any) {
      const optionElem = event.target;
      const prev = optionElem.querySelector('[aria-selected=true]');
      if (prev) prev.removeAttribute('aria-selected');
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    (window as any)[config.validateEmailFuncName] = function () {
      const form = document.forms.namedItem(config.formName) as HTMLFormElement;
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

    (window as any)[config.validateFuncName] = function () {
      const mndFileds = isNetSuite
        ? ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF127', config.serviceFieldName]
        : ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', config.serviceFieldName];
      const fldLangVal = isNetSuite
        ? ['Company Name', 'Name', 'Role', 'Email', 'Mobile', 'Annual Revenue', 'How We Can Help You', 'How did you hear about us.', config.serviceLabel.replace(' *', '')]
        : ['Company Name', 'Name', 'Role', "POC's Email", "POC's Mobile", 'Annual Revenue', 'How We Can Help You', config.serviceLabel.replace(' *', '')];
      const form = document.forms.namedItem(config.formName) as HTMLFormElement;
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
      if ((window as any)[config.validateEmailFuncName] && !(window as any)[config.validateEmailFuncName]()) return false;
      if ((window as any)[config.reCapAlertFuncName] && !(window as any)[config.reCapAlertFuncName]()) return false;

      const submitButton = document.querySelector(`.crmWebToEntityForm .formsubmit`) as HTMLInputElement;
      if (submitButton) {
        submitButton.setAttribute('disabled', 'true');
      }
      return true;
    };

    (window as any)[config.recapCallbackName] = function () {
      const recap = document.getElementById(config.recapId);
      if (recap) recap.setAttribute('captcha-verified', 'true');
      const recapErr = document.getElementById(config.recapErrId);
      if (recapErr && recapErr.style.visibility === 'visible') {
        recapErr.style.visibility = 'hidden';
      }
    };

    (window as any)[config.reCapAlertFuncName] = function () {
      const recap = document.getElementById(config.recapId);
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
        const recapErr = document.getElementById(config.recapErrId);
        if (recapErr) recapErr.style.visibility = 'visible';
        return false;
      }
      return true;
    };

    const renderRecaptcha = () => {
      const container = document.getElementById(config.recapId);
      if (container && container.children.length === 0 && (window as any).grecaptcha && (window as any).grecaptcha.render) {
        try {
          (window as any).grecaptcha.render(container, {
            'sitekey': config.recapSiteKey,
            'theme': 'light',
            'callback': (window as any)[config.recapCallbackName]
          });
        } catch (e) { }
      }
    };

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const container = document.getElementById(config.recapId);
      if (container && container.children.length > 0) {
        clearInterval(interval);
        return;
      }
      if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
        renderRecaptcha();
      }
      if (attempts > 60) clearInterval(interval);
    }, 100);
  }, [platform, isNetSuite, config]);

  const [loadScripts, setLoadScripts] = useState(false);
  useEffect(() => {
    if (!isClient) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoadScripts(true);
        observer.disconnect();
      }
    }, { rootMargin: '600px' });
    const target = document.getElementById('contact-form');
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, [isClient]);

  if (!isClient) return null;

  return (
    <>
      {loadScripts && (
        <>
          <Script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
            strategy="lazyOnload"
          />
          <Script
            id={`wf_anal_${platform}`}
            src={config.analyticsUrl}
            strategy="lazyOnload"
          />
        </>
      )}

      <section id="contact-form" className="relative pt-2 pb-6 sm:pt-3 sm:pb-8 lg:pt-4 lg:pb-10 min-h-[calc(100vh-80px)] flex items-start justify-center bg-[#0a0a0a] overflow-hidden scroll-mt-20">
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-[#0d0d0d]/80 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 rounded-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

              {/* Left Side - Platform Content */}
              <div className="p-5 sm:p-7 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-br from-blue-950/40 via-purple-950/20 to-transparent">
                <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight"
                    >
                      {isNetSuite ? (
                        <>Transform Your Business with <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Oracle NetSuite</span></>
                      ) : (
                        <>Accelerate Growth with <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">Zoho Solutions</span></>
                      )}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl"
                    >
                      {isNetSuite
                        ? 'Connect with our certified NetSuite consultants for licensing, multi-subsidiary implementations, optimizations, and custom integrations tailored for enterprise scale.'
                        : 'Partner with AGSuite for complete Zoho ecosystem strategy, implementation, custom deluge development, license optimization, and 24/7 technical support.'}
                    </motion.p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-auto pt-2">
                    {[
                      { value: "700+", label: "Projects Completed", icon: Briefcase },
                      { value: "250+", label: "Global Customers", icon: Building2 },
                      { value: "15+", label: "Industry Expertise", icon: Target },
                      { value: "84%", label: "Customer Retention", icon: Heart },
                    ].map((item, idx) => (
                      <FooterStatCard key={idx} item={item} index={idx} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="p-4 sm:p-5 lg:p-6 bg-white flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm">Your request has been received. Our team will get back to you shortly.</p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-md hover:scale-[1.02] text-xs uppercase tracking-wider"
                      >
                        Submit Another Enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-3">
                        <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">Let’s Get Started !!</h3>
                      </div>

                      <div id="crmWebToEntityForm" className="crmWebToEntityForm">
                        <form
                          id={config.formId}
                          name={config.formName}
                          action="https://crm.zoho.in/crm/WebToLeadForm"
                          method="POST"
                          onSubmit={(e) => {
                            if ((window as any)[config.validateFuncName] && !(window as any)[config.validateFuncName]()) {
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
                                services: formData.getAll(config.serviceFieldName),
                                revenue: formData.get('LEADCF19'),
                                hearAbout: formData.get('LEADCF127'),
                                message: formData.get('LEADCF123'),
                                subjectTitle: isNetSuite ? 'NetSuite Contact us Form Enquiry' : 'Zoho Contact us Form Enquiry'
                              })
                            }).catch(() => {});
                          }}
                          acceptCharset="UTF-8"
                          className="space-y-3"
                        >
                          <input type="text" className="hidden" name="xnQsjsdp" value={config.xnQsjsdp} readOnly />
                          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                          <input type="text" className="hidden" name="xmIwtLD" value={config.xmIwtLD} readOnly />
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

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Name <span className="text-red-500">*</span></label>
                              <input type="text" id="Last_Name" name="Last Name" maxLength={80} required className="w-full bg-gray-50 border border-blue-100 focus:border-blue-500 rounded-lg px-3 py-2 text-gray-900 outline-none text-xs transition-all shadow-xs" placeholder="John Doe" suppressHydrationWarning />
                            </div>
                            <div>
                              <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Email <span className="text-red-500">*</span></label>
                              <input type="text" id="Email" data-ftype="email" name="Email" maxLength={100} autoComplete="off" required className="w-full bg-gray-50 border border-blue-100 focus:border-blue-500 rounded-lg px-3 py-2 text-gray-900 outline-none text-xs transition-all shadow-xs" placeholder="john@company.com" suppressHydrationWarning />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Role <span className="text-red-500">*</span></label>
                              <input type="text" id="Designation" name="Designation" maxLength={100} required className="w-full bg-gray-50 border border-blue-100 focus:border-blue-500 rounded-lg px-3 py-2 text-gray-900 outline-none text-xs transition-all shadow-xs" placeholder="Manager" suppressHydrationWarning />
                            </div>
                            <div>
                              <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Mobile <span className="text-red-500">*</span></label>
                              <input type="text" id="Mobile" name="Mobile" maxLength={30} required className="w-full bg-gray-50 border border-blue-100 focus:border-blue-500 rounded-lg px-3 py-2 text-gray-900 outline-none text-xs transition-all shadow-xs" placeholder="+91 9876543210" suppressHydrationWarning />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Company Name <span className="text-red-500">*</span></label>
                              <input type="text" id="Company" name="Company" maxLength={200} required className="w-full bg-gray-50 border border-blue-100 focus:border-blue-500 rounded-lg px-3 py-2 text-gray-900 outline-none text-xs transition-all shadow-xs" placeholder="Company Inc." suppressHydrationWarning />
                            </div>
                            <div>
                              <label htmlFor={`service_${platform}`} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">{config.serviceLabel}</label>
                              <MultiSelectDropdown
                                id={config.serviceFieldName}
                                name={config.serviceFieldName}
                                placeholder={config.serviceDefault}
                                bgClassName="bg-gray-50 border border-blue-100 focus:border-blue-500 hover:border-blue-300 shadow-xs text-xs py-1.5 px-3 rounded-lg"
                                textColorClassName="text-gray-900"
                                options={config.serviceOptions}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label htmlFor={`revenue_${platform}`} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">Annual Revenue <span className="text-red-500">*</span></label>
                              <select
                                id="LEADCF19"
                                name="LEADCF19"
                                onChange={(e) => (window as any).addAriaSelectedFooter?.(e)}
                                required
                                className="w-full bg-gray-50 border border-blue-100 focus:border-blue-500 rounded-lg px-3 py-2 text-gray-900 outline-none appearance-none cursor-pointer text-xs transition-all shadow-xs"
                                suppressHydrationWarning
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
                            <div>
                              <label htmlFor={`hear_${platform}`} className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">How did you hear about us. <span className="text-red-500">*</span></label>
                              <select
                                id="LEADCF127"
                                name="LEADCF127"
                                onChange={(e) => (window as any).addAriaSelectedFooter?.(e)}
                                required
                                className="w-full bg-gray-50 border border-blue-100 focus:border-blue-500 rounded-lg px-3 py-2 text-gray-900 outline-none appearance-none cursor-pointer text-xs transition-all shadow-xs"
                                suppressHydrationWarning
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
                          </div>

                          <div>
                            <label className="block text-gray-700 text-[10px] font-bold uppercase tracking-wider mb-1">How We Can Help You <span className="text-red-500">*</span></label>
                            <textarea
                              id="LEADCF123"
                              name="LEADCF123"
                              rows={2}
                              required
                              className="w-full bg-gray-50 border border-blue-100 focus:border-blue-500 rounded-lg px-3 py-1.5 text-gray-900 outline-none placeholder-gray-400 resize-none text-xs transition-all shadow-xs"
                              placeholder="Share your requirements..."
                              suppressHydrationWarning
                            />
                          </div>

                          {/* Captcha Section */}
                          <div className="flex flex-col gap-1 my-1">
                            <div
                              className="g-recaptcha scale-[0.85] origin-left"
                              data-sitekey={config.recapSiteKey}
                              data-theme="light"
                              data-callback={config.recapCallbackName}
                              captcha-verified="false"
                              id={config.recapId}
                            ></div>
                            <div
                              id={config.recapErrId}
                              style={{ visibility: 'hidden', color: '#ef4444', fontSize: '11px' }}
                            >
                              Captcha validation failed. If you are not a robot then please try again.
                            </div>
                          </div>

                          <div className="flex pt-1">
                            <input
                              type="submit"
                              id="formsubmit"
                              className="formsubmit zcwf_button flex-1 py-3 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-xl transition-all shadow-md hover:scale-[1.01] text-xs uppercase tracking-wider cursor-pointer"
                              value="Submit"
                              suppressHydrationWarning
                            />
                          </div>
                        </form>
                      </div>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
