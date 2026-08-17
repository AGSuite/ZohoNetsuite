"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { Briefcase, Globe2, HeartHandshake, Rocket } from "lucide-react";

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
        xnQsjsdp: "2ae4ca1841d27018fa82a0a48a96f1c01673f80384140a440922ae0aab21aae3",
        xmIwtLD: "56ac8377184c3ea501a9db3ccd450a182e7e602f9cbf901b0c9852cc9de9f7c713a4ce3d1e636d34dc4666caf4082423",
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
        analyticsUrl: "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=f84d1d6876a443cf36bdeab891c5582d7c3e142d9fce42d31ffc393506d6d6d54dbf7f9cf10e11397fb06e31977be163gid65b81325138b2fc10191c2ef7b4572a0b18f76ffadabafd1f029455ae866a59cgidf169f3e66dfe1cbf71d7bc2d3d67d57ab12b228f83d723a6a15eb3cfddecc257gid6d99bc21bab3635e5f6b816b959e07211ea39cb1eae372096d63da78a4b9dccc&tw=1db53bf46a6a8b587793bb8f51f25b9b772d35495cdb16dcd3a6abe2ad6ecd11&version=v2",
        validateFuncName: "checkMandatory409531000047791096",
        validateEmailFuncName: "validateEmail409531000047791096",
        recapId: "recap409531000042578178_footer_ns",
        recapErrId: "recapErr409531000042578178_footer_ns",
        recapCallbackName: "rccallback409531000042578178_footer_ns",
        reCapAlertFuncName: "reCaptchaAlert409531000042578178_footer_ns",
      }
    : {
        formId: "webform409531000047791049",
        formName: "WebToLeads409531000047791049",
        xnQsjsdp: "44276f8beed192b8f7e1be65072c435bb8635d713a36ed1383283b028345f158",
        xmIwtLD: "828a6444caf550aa2c7fb30baee0af20ebe53bb4ec14fa9cb848cbaba047cf09851f23ca8992cf00b57712dc4036845e",
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
        analyticsUrl: "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=9ba9275d1ba2433ba28d0334bf486bd4abd2959e16f782d43429c03186c9c487ee6f78924b1f1106a6dcdd75ba579e09gid78093e56f2fc99f0c3f7443fa899e4c18fd4da32e2cd843412f5927181c00bf0gidea78ce0862d60f0bac5830045d1916c9e69beb39a32cd7c56efb4ce7272d5041gidbbdbb445da8de25a4acca8138c2d3d7ad156c3359920d67288f1804861f07da4&tw=0d7d7da9c337c2ca94057ef8d792e49bf952b4466492d31358d902f3ddf85962&version=v2",
        validateFuncName: "checkMandatory409531000047791049",
        validateEmailFuncName: "validateEmail409531000047791049",
        recapId: "recap409531000047791049_footer_zoho",
        recapErrId: "recapErr409531000047791049_footer_zoho",
        recapCallbackName: "rccallback409531000047791049_footer_zoho",
        reCapAlertFuncName: "reCaptchaAlert409531000047791049_footer_zoho",
      };

  useEffect(() => {
    setIsClient(true);

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
      const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF127', config.serviceFieldName];
      const fldLangVal = ['Company Name', 'Name', 'Role', 'Email', 'Mobile', 'Annual Revenue', 'How We Can Help You', 'How did you hear about us.', config.serviceLabel.replace(' *', '')];
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
      if ((window as any).grecaptcha && container) {
        try {
          if (container.children.length > 0) return;
          (window as any).grecaptcha.render(config.recapId, {
            'sitekey': '6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_',
            'theme': 'light',
            'callback': (window as any)[config.recapCallbackName]
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

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Globe2, title: isNetSuite ? "Global Deployments" : "Full Ecosystem", desc: isNetSuite ? "Multi-country ERP rollouts" : "50+ Zoho apps supported" },
                      { icon: Rocket, title: "Fast Implementation", desc: isNetSuite ? "SuiteSuccess methodology" : "Rapid setup & migration" },
                      { icon: HeartHandshake, title: "Dedicated Support", desc: "Post-go-live optimization" },
                      { icon: Briefcase, title: "Certified Experts", desc: isNetSuite ? "NetSuite ERP consultants" : "Zoho certified developers" }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                      >
                        <item.icon className="w-6 h-6 text-blue-400 mb-2" />
                        <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </motion.div>
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
                            }
                          }}
                          acceptCharset="UTF-8"
                          className="space-y-4"
                        >
                          <input type="text" className="hidden" name="xnQsjsdp" value={config.xnQsjsdp} readOnly />
                          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                          <input type="text" className="hidden" name="xmIwtLD" value={config.xmIwtLD} readOnly />
                          <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
                          <input type="text" className="hidden" name="returnURL" value="https://www.agsuite.tech/thank-you" readOnly />
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
                              value="Submit Request"
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
