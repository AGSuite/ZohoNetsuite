"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { Briefcase, Globe2, HeartHandshake, Rocket } from "lucide-react";

const SITE_KEY = "6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y";

interface FooterContactFormProps {
  platform: 'NetSuite' | 'Zoho';
}

export default function FooterContactForm({ platform }: FooterContactFormProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isNetSuite = platform === 'NetSuite';

  // Standardized CRM Config (Unified for both platforms)
  const crmConfig = {
    xnQsjsdp: "37dfc49e97f520b044bada4f449a5c5ccdbce92fc11adcbde859370420398c25",
    xmIwtLD: "12f9e122b2a20e7b120e935f7196c6eb1b4957b3d47254bd86bff874f16310546e1ef014dcf24ff7fdc390003e9608d7",
    returnURL: "https://zoho-netsuite.vercel.app/thank-you",
    rid: "200f842d0dc0f4e7801db792aae6ced7d901985d65eb7fcd23dda6e56700172097a30a3ef869eb06347d3a4bca25bb6fgid9f5592bc44469936204ad4851be9c0dffc44888d04f59693f16e7853eee295cfgid37385f0c9c29469e462007ae410d9ad684100d05f4e169a235f2b84413a975d4gidbf0e0fb6f34ec2f94a391d45ce6b68f60ace7ff29df396e3a70399e1edee5dc5",
    tw: "23f34b37e865b5335ff2a8f585b01a00b88cb9c9a388aa28b4e9e710c025aad4"
  };

  useEffect(() => {
    setIsClient(true);

    const suffix = '409531000042578178';
    const formName = 'WebToLeads409531000042578178';

    (window as any)[`addAriaSelected${suffix}`] = function () {
      const optionElem = (event as any).target;
      const prev = optionElem.querySelector('[aria-selected=true]');
      if (prev) prev.removeAttribute('aria-selected');
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    (window as any).rccallback409531000042578178 = function () {
      if (document.getElementById('recap409531000042578178')) {
        document.getElementById('recap409531000042578178')?.setAttribute('captcha-verified', 'true');
      }
      const errorElement = document.getElementById('recapErr409531000042578178');
      if (errorElement && errorElement.style.visibility === 'visible') {
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

    (window as any)[`validateEmail${suffix}`] = function () {
      const form = (document.forms as any)[formName];
      if (!form) return true;
      const emailFld = form.querySelectorAll('[data-ftype=email]');
      for (let i = 0; i < emailFld.length; i++) {
        const v = emailFld[i].value;
        if (v.replace(/^\s+|\s+$/g, '').length !== 0) {
          const at = v.indexOf('@'), dot = v.lastIndexOf('.');
          if (at < 1 || dot < at + 2 || dot + 2 >= v.length) {
            alert('Please enter a valid email address.');
            emailFld[i].focus();
            return false;
          }
          const domain = v.split('@')[1].toLowerCase();
          const forbidden = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com', 'icloud.com'];
          if (forbidden.includes(domain)) {
            alert('Please enter a business email address. Personal emails (@' + domain + ') are not accepted.');
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    };

    (window as any)[`validateMobile${suffix}`] = function () {
      const form = (document.forms as any)[formName];
      if (!form) return true;
      const mobileFld = form.querySelector('input[name="Mobile"]');
      if (mobileFld) {
        const v = mobileFld.value.replace(/\D/g, '');
        if (v.length !== 10) {
          alert('Mobile number must be exactly 10 digits.');
          mobileFld.focus();
          return false;
        }
      }
      return true;
    };

    (window as any)[`checkMandatory${suffix}`] = function () {
      const fields = ['Company', 'Last Name', 'Mobile', 'LEADCF5', 'LEADCF8', 'LEADCF19', 'LEADCF123'];
      const labels = [
        'Company Name', 
        'Name', 
        "POC's Mobile", 
        'Service', 
        'Company Email', 
        'Annual Revenue', 
        'How We Can Help You'
      ];

      const form = (document.forms as any)[formName];
      if (!form) return false;
      for (let i = 0; i < fields.length; i++) {
        const f = form[fields[i]];
        if (f) {
          if ((f.value.replace(/^\s+|\s+$/g, '')).length === 0) {
            alert(labels[i] + ' cannot be empty.'); f.focus(); return false;
          } else if (f.nodeName === 'SELECT' && f.options[f.selectedIndex].value === '-None-') {
            alert(labels[i] + ' cannot be none.'); f.focus(); return false;
          }
        }
      }
      if (!(window as any)[`validateEmail${suffix}`]()) return false;
      if (!(window as any)[`validateMobile${suffix}`]()) return false;
      if ((window as any).reCaptchaAlert409531000042578178 && !(window as any).reCaptchaAlert409531000042578178()) return false;
      return true;
    };

    const setupSubmit = () => {
      const $ = (window as any).$;
      if (!$) return false;
      $(`#shared_webform_${platform}`).off('submit').on('submit', function (e: any) {
        if (!(window as any).checkMandatory409531000042578178()) return;
        const btn = document.querySelector(`.crmWebToEntityForm .formsubmit-${platform}`);
        if (btn) btn.setAttribute('disabled', 'true');

        const formData = new FormData(e.target);
        
        const emailData = {
          name: formData.get('Last Name'),
          email: formData.get('LEADCF8'),
          role: formData.get('Designation'),
          mobile: formData.get('Mobile'),
          company: formData.get('Company'),
          service: formData.get('LEADCF5'),
          revenue: formData.get('LEADCF19'),
          hearAboutUs: formData.get('LEADCF127'),
          requirements: formData.get('LEADCF123'),
          platform: platform
        };

        fetch('/api/contact/netsuite', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(emailData)
        }).catch(err => console.error('Email error:', err));

        const form = e.target;
        form.action = isNetSuite ? 'https://crm.zoho.in/crm/WebToLeadForm' : 'https://crm.zoho.in/crm/WebToLeadForm';
        form.method = 'POST';
        form.target = `zoho_iframe_${platform}`;
        
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('zohoFormSuccess'));
          if (btn) btn.removeAttribute('disabled');
        }, 2000);

        return true;
      });
      return true;
    };

    const renderRecaptcha = () => {
      if ((window as any).grecaptcha && document.getElementById('recap409531000042578178')) {
        try {
          (window as any).grecaptcha.render('recap409531000042578178', {
            'sitekey': SITE_KEY,
            'theme': 'light',
            'callback': (window as any).rccallback409531000042578178
          });
        } catch (e) {
          // Already rendered
        }
      }
    };

    const jqInterval = setInterval(() => { if (setupSubmit()) clearInterval(jqInterval); }, 300);
    setTimeout(() => clearInterval(jqInterval), 10000);

    if ((window as any).grecaptcha?.ready) {
      (window as any).grecaptcha.ready(renderRecaptcha);
    } else {
      const rcInt = setInterval(() => {
        if ((window as any).grecaptcha) {
          (window as any).grecaptcha.ready ? (window as any).grecaptcha.ready(renderRecaptcha) : renderRecaptcha();
          clearInterval(rcInt);
        }
      }, 300);
      setTimeout(() => clearInterval(rcInt), 5000);
    }

    const onSuccess = () => {
      setSubmitted(true);
      setTimeout(() => {
        router.push('/thank-you');
      }, 1000);
    };
    window.addEventListener('zohoFormSuccess', onSuccess);
    return () => window.removeEventListener('zohoFormSuccess', onSuccess);
  }, [platform, isNetSuite, router]);

  if (!isClient) return null;

  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" strategy="lazyOnload" />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="lazyOnload" />
      <Script
        id={`wf_anal_${platform}`}
        src={`https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=${crmConfig.rid}&tw=${crmConfig.tw}`}
        strategy="lazyOnload"
      />
      <iframe name={`zoho_iframe_${platform}`} style={{ display: 'none' }}></iframe>

      <section id="contact-form" className="relative py-24 bg-[#0a0a0a] overflow-hidden scroll-mt-36">
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] bg-[#0d0d0d]/70 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 rounded-[40px]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

              {/* Left Side - Standardized platform-specific content */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col h-full justify-between p-8 lg:p-14 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/Background/grid-white.svg')] opacity-[0.05] pointer-events-none z-10" />
                <div className="absolute inset-0 z-0 opacity-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-transparent to-blue-900/60" />
                </div>
                <div className="relative z-20">
                  <motion.h2
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]"
                  >
                    Ready to Transform{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Your Business?</span>
                  </motion.h2>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    className="space-y-4 mb-10 text-gray-300"
                  >
                    <p className="text-lg">
                      {isNetSuite 
                        ? "Take the first step towards streamlined operations and accelerated growth with Oracle NetSuite."
                        : "Empower your team and drive exceptional growth with Zoho's integrated suite of business applications."}
                    </p>
                  </motion.div>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    className="mb-10"
                  >
                    <Image 
                      src={isNetSuite ? "/images/netsuiteimages/netsuitelogos/netsuitepartner1.png" : "/images/zoho logos/zoho premium.png"} 
                      alt={isNetSuite ? "NetSuite Partner" : "Zoho Partner"} 
                      width={220} height={70} 
                      className="h-16 w-auto object-contain" 
                      sizes="(max-width: 768px) 100vw, 220px" 
                    />
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { label: "Projects Completed", value: "600+", icon: Briefcase },
                      { label: "Global Customers", value: "200+", icon: Globe2 },
                      { label: "Customer Retention", value: "84%", icon: HeartHandshake },
                      { label: "Years Experience", value: "15+", icon: Rocket }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        variants={{ 
                          hidden: { opacity: 0, y: 20 }, 
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } 
                        }}
                        className="p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 backdrop-blur-md shadow-2xl hover:bg-white hover:border-white hover:-translate-y-1 transition-all duration-500 group"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                            <stat.icon size={20} />
                          </div>
                          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/30 to-transparent group-hover:from-blue-500 transition-all duration-500" />
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-white tracking-tight mb-0.5 group-hover:text-blue-950 transition-colors duration-500">{stat.value}</p>
                          <h4 className="font-bold text-lg leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500">{stat.label}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Standardized form (NetSuite style for both) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-white rounded-r-[40px] p-8 lg:p-12 h-full flex flex-col justify-center"
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center py-8 gap-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-500 text-sm max-w-xs mx-auto">Your enquiry has been submitted successfully. Our team will reach out to you within 24 hours.</p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] text-sm"
                    >
                      Submit Another Enquiry
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">Get Expert Guidance</h3>
                      <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">Fill in your details and our team will reach out within 24 hours.</p>
                    </div>

                <div id="crmWebToEntityForm" className="crmWebToEntityForm">
                  <form id={`shared_webform_${platform}`} name="WebToLeads409531000042578178" action="https://crm.zoho.in/crm/WebToLeadForm" method="POST" target={`zoho_iframe_${platform}`} acceptCharset="UTF-8" className="space-y-4">
                    <input type="text" style={{ display: 'none' }} name="xnQsjsdp" defaultValue={crmConfig.xnQsjsdp} readOnly />
                    <input type="text" style={{ display: 'none' }} name="Lead Source" value="Web to Leads" readOnly />
                    <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                    <input type="text" style={{ display: 'none' }} name="xmIwtLD" defaultValue={crmConfig.xmIwtLD} readOnly />
                    <input type="text" style={{ display: 'none' }} name="actionType" defaultValue="TGVhZHM=" readOnly />
                    <input type="text" style={{ display: 'none' }} name="returnURL" defaultValue={crmConfig.returnURL} readOnly />
                    <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" defaultValue="" readOnly />
                    {!isNetSuite && (
                      <>
                        <input type="text" style={{ display: 'none' }} id="ldeskuid" name="ldeskuid" readOnly />
                        <input type="text" style={{ display: 'none' }} id="LDTuvid" name="LDTuvid" readOnly />
                      </>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Name <span className="text-red-500">*</span></label>
                        <input type="text" name="Last Name" maxLength={80} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="John Doe" suppressHydrationWarning />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Company Email <span className="text-red-500">*</span></label>
                        <input type="text" data-ftype="email" name="LEADCF8" maxLength={100} autoComplete="off" required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="john@company.com" suppressHydrationWarning />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Role <span className="text-red-500">*</span></label>
                        <input type="text" name="Designation" maxLength={100} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="Manager" suppressHydrationWarning />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">POC's Mobile <span className="text-red-500">*</span></label>
                        <input type="text" name="Mobile" maxLength={30} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="+91 00000 00000" suppressHydrationWarning />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Company Name <span className="text-red-500">*</span></label>
                        <input type="text" name="Company" maxLength={200} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all shadow-sm" placeholder="Company Inc." suppressHydrationWarning />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Service <span className="text-red-500">*</span></label>
                        <select name="LEADCF5" onChange={() => (window as any).addAriaSelected409531000042578178?.()} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm" suppressHydrationWarning>
                          <option value="-None-">-None-</option>
                          <option value="Licenses">Licenses</option>
                          <option value="AMC">AMC</option>
                          <option value="NetSuite Product /Services">NetSuite Product /Services</option>
                          <option value="Zoho Products/Services">Zoho Products/Services</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">Annual Revenue <span className="text-red-500">*</span></label>
                        <select name="LEADCF19" onChange={() => (window as any).addAriaSelected409531000042578178?.()} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm" suppressHydrationWarning>
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
                        <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">How did you hear about us.</label>
                        <select name="LEADCF127" onChange={() => (window as any).addAriaSelected409531000042578178?.()} className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all shadow-sm" suppressHydrationWarning>
                          <option value="-None-">-None-</option>
                          <option value="Email">Email</option>
                          <option value="Event">Event</option>
                          <option value="Friend /Associate">Friend /Associate</option>
                          <option value="Search">Search</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Referral">Referral</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-xs font-bold uppercase tracking-widest mb-1.5">How We Can Help You <span className="text-red-500">*</span></label>
                      <textarea name="LEADCF123" rows={2} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none placeholder-gray-400 resize-none text-sm transition-all shadow-sm" placeholder="Share your requirements..." suppressHydrationWarning />
                    </div>

                    {/* reCAPTCHA v2 Checkbox Widget */}
                    <div className="pt-2">
                      <div className="g-recaptcha" data-sitekey={SITE_KEY} data-theme="light" data-callback="rccallback409531000042578178" captcha-verified="false" id="recap409531000042578178" />
                      <div id="recapErr409531000042578178" style={{ fontSize: '11px', color: '#ef4444', marginTop: '4px', visibility: 'hidden' }}>Captcha validation failed. If you are not a robot then please try again.</div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <input
                        type="submit"
                        className={`formsubmit-${platform} flex-1 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] text-sm cursor-pointer`}
                        value="Submit Request"
                        suppressHydrationWarning
                      />
                      <input 
                        type="reset" 
                        className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all text-sm cursor-pointer" 
                        value="Reset" 
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
      </section>
      <Script 
        id="wf_anal" 
        src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=ffa911f519bdac1fd37141e7458859338a4c0807209e53fcd9161a4ef8002b597777f2d47c34393e74912d83270ec629gid2020ff77b8590645f6909775bceb1dfe9b354b521b7d31a381183051979950afgidc32afce85ab5735ae0662898fbed0b63bef845d0ee34535ca4044be79f94eb16gidc20f47455171d038199ce12255d9fb14618138cdb451a0053d17b76b5cbc594d&tw=a5bf274d720cc51e70d06319b934b2ae14a201bb6424c6ca86bd81d126e9d37e"
        strategy="lazyOnload"
      />
    </>
  );
}
