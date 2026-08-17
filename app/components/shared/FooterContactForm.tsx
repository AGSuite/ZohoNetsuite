"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { Briefcase, Building2, Heart, Target } from "lucide-react";

function FooterStatCard({ item, index }: { item: any; index: number }) {
  const numericValue = parseInt(item.value.replace(/\D/g, "")) || 0;
  const suffix = item.value.replace(/\d/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayCount(v));
    return () => unsubscribe();
  }, [rounded]);

  const triggerRoll = () => {
    animate(count, numericValue, {
      duration: 1.5,
      ease: "easeOut",
      from: 0,
    });
  };

  useEffect(() => {
    triggerRoll();
  }, [numericValue]);

  return (
    <motion.div
      onMouseEnter={triggerRoll}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        rotateX: -5,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      transition={{ delay: 0.3 + index * 0.1 }}
      style={{ perspective: 1000 }}
      className="relative group p-5 sm:p-6 rounded-[2rem] bg-gradient-to-br from-white via-white/95 to-blue-50 border border-blue-100/50 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative faint icon bg */}
      <div className="absolute -right-4 -bottom-4 opacity-[0.25] group-hover:opacity-[0.45] transition-all duration-500 pointer-events-none">
        <item.icon className="w-24 h-24 text-blue-900" strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col items-start text-left">
        <div className="mb-4 w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
          <item.icon className="w-5.5 h-5.5 font-bold" strokeWidth={1.5} />
        </div>
        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#000d2e] via-blue-900 to-black tracking-tight">
            {displayCount}
            {suffix}
          </div>
          <p className="text-gray-500 font-semibold text-[10px] sm:text-[11px] group-hover:text-blue-700 transition-colors uppercase tracking-widest leading-tight">
            {item.label}
          </p>
        </div>
      </div>
    </motion.div>
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
        xnQsjsdp: "d53cf6d2d91bd2c21647f1856ba77f750df004edeb1b81d56dde47d4e8ff036e",
        xmIwtLD: "0dbca13c9e4fae22e074d8e1a51df222b069fd131b4ed865fd39ad02a316b18241f1902d40a5e065b29b169b79077aff",
        serviceFieldName: "LEADCF166",
        serviceLabel: "Netsuite Services *",
        serviceDefault: "-Select NetSuite Service-",
        serviceOptions: [
          "NetSuite Licenses",
          "NetSuite Implementation",
          "NetSuite Licenses + Implementation",
          "New Subsidiary Implementation",
          "NetSuite Support",
          "NetSuite Optimization",
          "NetSuite Customization",
          "NetSuite Integrations",
          "NetSuite India Localization",
          "NetSuite Data Backup for India",
        ],
        analyticsUrl: "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=4166fb27fa5cc1cf01b8928a236946a1c2bdc6db7e59b193ea91f9c33521aff9a5b0a3f55d9bcbdb236dbab2e40baae2gid9ed1878e9054f25c0b6d3def4c6e478c7c24c8927c7c8e4d9fe1fa0c11f87875gid5f7aa6ebd053d5fd78ba0faa9cc73893b516b5e0e48b61583832fdc7ade510b7gidc7a000443c81ecd27f65e71f073e3e3e9a9cdf3699f81a305ac6bbae40fe1be7&tw=2cd0917d1cca3bbaebdf154ac89ffb93db64aad22b9b101985cc3ca35acbffc6&version=v2",
        validateFuncName: "checkMandatory409531000047791096",
        validateEmailFuncName: "validateEmail409531000047791096",
        recapId: "recap409531000047791096_footer_ns",
        recapErrId: "recapErr409531000047791096_footer_ns",
        recapCallbackName: "rccallback409531000047791096_footer_ns",
        reCapAlertFuncName: "reCaptchaAlert409531000047791096_footer_ns",
      }
    : {
        formId: "webform409531000047791049",
        formName: "WebToLeads409531000047791049",
        xnQsjsdp: "afe7fc5b0536228280a461c09acb8cd162fafbcf476effeaa3a356db2e458dc1",
        xmIwtLD: "5a82ca35749552f4f750cae5dec3c5b7d801c95f58f820da5a9e196736a46f71217d8315d7638831db35e87703ae69fb",
        serviceFieldName: "LEADCF165",
        serviceLabel: "Zoho Services *",
        serviceDefault: "-Select Zoho Service-",
        serviceOptions: [
          "Zoho Licenses",
          "Zoho Implementation",
          "Zoho Licenses + Implementation",
          "Zoho Support",
          "Zoho Optimization",
          "Zoho Customization",
          "Zoho Integrations",
        ],
        analyticsUrl: "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=e7fa82545e6cbc426156b206aa8236f2c686a1dd1fa2201a42f8f8bc1f3ed582856adb0b2a204a9d5af92c2452e3a8a8gidc5c4b2eec1a1272f8a476c638c29bb49a4d78e91e7b5216007f5c7aeef1afd9fgid5f6d199f406123ad764d17f846376ab5e7fab29b0bebbbde07b6a8367d0aba4cgid8d7aa6245a7de773373511b56e3ffa902647cb1e3730e636a86b82d0019d0cce&tw=b2ff6a1aabcf001476b36b61fabd0fbad09ea545696c57b419b7adca06e6ef53&version=v2",
        validateFuncName: "checkMandatory409531000047791049",
        validateEmailFuncName: "validateEmail409531000047791049",
        recapId: "recap409531000047791049_footer_zoho",
        recapErrId: "recapErr409531000047791049_footer_zoho",
        recapCallbackName: "rccallback409531000047791049_footer_zoho",
        reCapAlertFuncName: "reCaptchaAlert409531000047791049_footer_zoho",
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
            'sitekey': '6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_',
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
            strategy="afterInteractive"
          />
          <Script
            id={`wf_anal_${platform}`}
            src={config.analyticsUrl}
            strategy="lazyOnload"
          />
        </>
      )}

      <section id="contact-form" className="relative py-14 sm:py-24 bg-[#0a0a0a] overflow-hidden scroll-mt-36">
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl sm:rounded-[40px] bg-[#0d0d0d]/70 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 rounded-3xl sm:rounded-[40px]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

              {/* Left Side - Platform Content */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-br from-blue-950/40 via-purple-950/20 to-transparent">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
                  >
                    {isNetSuite ? 'Oracle NetSuite Practice' : 'Zoho Authorized Partner'}
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
                  >
                    {isNetSuite ? (
                      <>Transform Your Business with <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Oracle NetSuite</span></>
                    ) : (
                      <>Accelerate Growth with <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">Zoho Solutions</span></>
                    )}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
                  >
                    {isNetSuite
                      ? 'Connect with our certified NetSuite consultants for licensing, multi-subsidiary implementations, optimizations, and custom integrations tailored for enterprise scale.'
                      : 'Partner with AGSuite for complete Zoho ecosystem strategy, implementation, custom deluge development, license optimization, and 24/7 technical support.'}
                  </motion.p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-auto pt-4">
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
              <div className="p-8 sm:p-12 lg:p-16 bg-white flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
                      <p className="text-gray-600 max-w-md mx-auto mb-8">Your request has been received. Our team will get back to you shortly.</p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] text-sm"
                      >
                        Submit Another Enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-6 sm:mb-8">
                        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">Get Expert Guidance</h3>
                        <p className="text-sm sm:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">Fill in your details and our team will reach out within 24 hours.</p>
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
                          className="space-y-4"
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

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Name <span className="text-red-500">*</span></label>
                              <input type="text" id="Last_Name" name="Last Name" maxLength={80} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="John Doe" suppressHydrationWarning />
                            </div>
                            <div>
                              <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Email <span className="text-red-500">*</span></label>
                              <input type="text" id="Email" data-ftype="email" name="Email" maxLength={100} autoComplete="off" required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="john@company.com" suppressHydrationWarning />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Role <span className="text-red-500">*</span></label>
                              <input type="text" id="Designation" name="Designation" maxLength={100} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="Manager" suppressHydrationWarning />
                            </div>
                            <div>
                              <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Mobile <span className="text-red-500">*</span></label>
                              <input type="text" id="Mobile" name="Mobile" maxLength={30} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="+91 9876543210" suppressHydrationWarning />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Company Name <span className="text-red-500">*</span></label>
                              <input type="text" id="Company" name="Company" maxLength={200} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="Company Inc." suppressHydrationWarning />
                            </div>
                            <div>
                              <label htmlFor={`service_${platform}`} className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">{config.serviceLabel}</label>
                              <select
                                id={config.serviceFieldName}
                                name={config.serviceFieldName}
                                defaultValue=""
                                onChange={(e) => (window as any).addAriaSelectedFooter?.(e)}
                                required
                                className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm"
                                suppressHydrationWarning
                              >
                                <option value="" disabled>{config.serviceDefault}</option>
                                {config.serviceOptions.map((opt) => (
                                  <option key={opt} value={opt}>{opt}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor={`revenue_${platform}`} className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Annual Revenue <span className="text-red-500">*</span></label>
                              <select
                                id="LEADCF19"
                                name="LEADCF19"
                                onChange={(e) => (window as any).addAriaSelectedFooter?.(e)}
                                required
                                className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm"
                                suppressHydrationWarning
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
                            <div>
                              <label htmlFor={`hear_${platform}`} className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">How did you hear about us. <span className="text-red-500">*</span></label>
                              <select
                                id="LEADCF127"
                                name="LEADCF127"
                                onChange={(e) => (window as any).addAriaSelectedFooter?.(e)}
                                required
                                className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm"
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
                            <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">How We Can Help You <span className="text-red-500">*</span></label>
                            <textarea
                              id="LEADCF123"
                              name="LEADCF123"
                              rows={2}
                              required
                              className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none placeholder-gray-400 resize-none text-sm transition-all shadow-sm"
                              placeholder="Share your requirements..."
                              suppressHydrationWarning
                            />
                          </div>

                          {/* Captcha Section */}
                          <div className="flex flex-col gap-2 my-2">
                            <div
                              className="g-recaptcha"
                              data-sitekey="6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_"
                              data-theme="light"
                              data-callback={config.recapCallbackName}
                              captcha-verified="false"
                              id={config.recapId}
                            ></div>
                            <div
                              id={config.recapErrId}
                              style={{ visibility: 'hidden', color: '#ef4444', fontSize: '12px' }}
                            >
                              Captcha validation failed. If you are not a robot then please try again.
                            </div>
                          </div>

                          <div className="flex pt-2">
                            <input
                              type="submit"
                              id="formsubmit"
                              className="formsubmit zcwf_button flex-1 py-3.5 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] text-sm uppercase tracking-widest cursor-pointer"
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
