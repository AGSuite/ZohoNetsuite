"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

// Updated Site Key from User's latest source code
const SITE_KEY = '6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y';

export default function ContactFormDesign4() {
  const [isClient, setIsClient] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsClient(true);

    (window as any).addAriaSelected409531000042578178 = function () {
      const optionElem = (event as any).target;
      const prev = optionElem.querySelector('[aria-selected=true]');
      if (prev) prev.removeAttribute('aria-selected');
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    (window as any).rccallback409531000042578178 = function () {
      const recap = document.getElementById('recap409531000042578178');
      if (recap) recap.setAttribute('captcha-verified', 'true');
      const err = document.getElementById('recapErr409531000042578178') as HTMLElement;
      if (err && err.style.visibility === 'visible') err.style.visibility = 'hidden';
    };

    (window as any).reCaptchaAlert409531000042578178 = function () {
      const recap = document.getElementById('recap409531000042578178');
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
        const err = document.getElementById('recapErr409531000042578178') as HTMLElement;
        if (err) err.style.visibility = 'visible';
        return false;
      }
      return true;
    };

    (window as any).validateEmail409531000042578178 = function () {
      const form = (document.forms as any)['WebToLeads409531000042578178'];
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
        }
      }
      return true;
    };

    (window as any).checkMandatory409531000042578178 = function () {
      const fields = ['Company', 'Last Name', 'Mobile', 'LEADCF5', 'LEADCF8', 'LEADCF19', 'LEADCF123'];
      const labels = ['Company Name', 'Name', "POC's Mobile", 'Service', 'Company Email', 'Annual Revenue', 'How We Can Help You'];
      const form = (document.forms as any)['WebToLeads409531000042578178'];
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
      if (!(window as any).validateEmail409531000042578178()) return false;
      if (!(window as any).reCaptchaAlert409531000042578178()) return false;
      return true;
    };

    const setupSubmit = () => {
      const $ = (window as any).$;
      if (!$) return false;
      $('#webform409531000042578178').off('submit').on('submit', function (e: any) {
        e.preventDefault();
        if (!(window as any).checkMandatory409531000042578178()) return;
        const btn = document.querySelector('.crmWebToEntityForm .formsubmit');
        if (btn) btn.setAttribute('disabled', 'true');

        const formData = new FormData(e.target);
        $.ajax({
          url: 'https://crm.zoho.in/crm/WebToLeadForm',
          type: 'POST', data: formData, cache: false, contentType: false, processData: false,
          success: function () {
            window.dispatchEvent(new CustomEvent('zohoFormSuccess'));
            if (btn) btn.removeAttribute('disabled');
          },
          error: function () { alert('An error occurred. Please try again.'); if (btn) btn.removeAttribute('disabled'); }
        });
      });
      return true;
    };

    const renderRecaptcha = () => {
      const el = document.getElementById('recap409531000042578178');
      if ((window as any).grecaptcha && el && el.children.length === 0) {
        try {
          (window as any).grecaptcha.render('recap409531000042578178', {
            sitekey: SITE_KEY,
            theme: 'light',
            callback: (window as any).rccallback409531000042578178
          });
        } catch (e) { /* already rendered */ }
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

    const onSuccess = () => setSubmitted(true);
    window.addEventListener('zohoFormSuccess', onSuccess);
    return () => window.removeEventListener('zohoFormSuccess', onSuccess);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="afterInteractive" />
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=069e092375575a1e16cff3709212ca48b1dee364b5e258d07e2825eb3a8f979960011550a5cf722bfe0baab2ee0b42e0gide1f9a8778d9bbe722bfd3dd9d6871544609c210a5c71bd6723a8bd56cd54b44bgidad3c0985806665d32e537489d04a70f46fb69c481bf46d036ef2a0463d7dbc3dgid6b5a7c9f7266316b8a40a1fe46bc95787d06941b759046068de31f96621a5255&tw=3be8f3a0538b8f1813b3b1f3d9ef5839d9a254acbafc102c58ed0ac42ec862b5"
        strategy="afterInteractive"
      />

      <section id="contact-form" className="relative py-24 bg-[#0a0a0a] overflow-hidden scroll-mt-36">
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] bg-[#0d0d0d]/70 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 rounded-[40px]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

              {/* Left Side */}
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
                    <p className="text-lg">Take the first step towards streamlined operations and accelerated growth with Oracle NetSuite.</p>
                  </motion.div>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    className="mb-10"
                  >
                    <Image src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png" alt="NetSuite Partner" width={220} height={70} className="h-16 w-auto object-contain" sizes="(max-width: 768px) 100vw, 220px" />
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4 mb-8 text-white">
                    <motion.div variants={{ hidden: { opacity: 0, scale: 0.95, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } } }} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-blue-400 mb-1">180+</p>
                      <p className="text-gray-400 text-sm">Successful Implementations</p>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, scale: 0.95, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-purple-400 mb-1">50+</p>
                      <p className="text-gray-400 text-sm">NetSuite Experts</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Zoho Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-white rounded-r-[40px] p-8 lg:p-12 h-full flex flex-col justify-center"
              >
                {submitted ? (
                  /* ── Thank You Card ── */
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
                  /* ── Form ── */
                  <>
                    <div className="mb-6">
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Get Expert Guidance</h3>
                      <p className="text-gray-500 text-sm">Fill in your details and we'll reach out within 24 hours</p>
                    </div>

                <div id="crmWebToEntityForm" className="crmWebToEntityForm">
                  <form id="webform409531000042578178" name="WebToLeads409531000042578178" acceptCharset="UTF-8" className="space-y-4">
                    <input type="text" style={{ display: 'none' }} name="xnQsjsdp" defaultValue="9e5e3c8bd8dbe33b3ebd8beeff15bfc7a999e539b0f1dfe9df8bc9129fdcbcfc" readOnly />
                    <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                    <input type="text" style={{ display: 'none' }} name="xmIwtLD" defaultValue="9abbe069f15c156742400c19b48c3e97c607c2c14cb77d221e1d84dbba11348392d15fd7a164fe674db90188648c7b56" readOnly />
                    <input type="text" style={{ display: 'none' }} name="actionType" defaultValue="TGVhZHM=" readOnly />
                    <input type="text" style={{ display: 'none' }} name="returnURL" defaultValue="null" readOnly />
                    <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" defaultValue="" readOnly />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="Last_Name" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Name <span className="text-red-500">*</span></label>
                        <input type="text" id="Last_Name" name="Last Name" maxLength={80} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="LEADCF8" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Company Email <span className="text-red-500">*</span></label>
                        <input type="text" data-ftype="email" id="LEADCF8" name="LEADCF8" maxLength={100} autoComplete="off" required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all" placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="Designation" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Role</label>
                        <input type="text" id="Designation" name="Designation" maxLength={100} className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all" placeholder="Manager" />
                      </div>
                      <div>
                        <label htmlFor="Mobile" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">POC's Mobile <span className="text-red-500">*</span></label>
                        <input type="text" id="Mobile" name="Mobile" maxLength={30} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all" placeholder="+91 00000 00000" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="Company" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Company Name <span className="text-red-500">*</span></label>
                        <input type="text" id="Company" name="Company" maxLength={200} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none text-sm transition-all" placeholder="Company Inc." />
                      </div>
                      <div>
                        <label htmlFor="LEADCF5" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Service <span className="text-red-500">*</span></label>
                        <select id="LEADCF5" name="LEADCF5" onChange={() => (window as any).addAriaSelected409531000042578178?.()} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all">
                          <option value="-None-">-None-</option>
                          <option value="Licenses">Licenses</option>
                          <option value="AMC">AMC</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="LEADCF19" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">Annual Revenue <span className="text-red-500">*</span></label>
                        <select id="LEADCF19" name="LEADCF19" onChange={() => (window as any).addAriaSelected409531000042578178?.()} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all">
                          <option value="-None-">-None-</option>
                          <option value="Less&#x20;than&#x20;8&#x20;Cr&#x20;&#x28;&#x24;&#x20;1M&#x29;">Less than 8 Cr ($ 1M)</option>
                          <option value="8&#x20;-&#x20;20&#x20;Cr&#x20;&#x28;&#x24;&#x20;1M&#x20;-&#x20;2.5M&#x29;">8 - 20 Cr ($ 1M - 2.5M)</option>
                          <option value="20&#x20;-&#x20;40&#x20;Cr&#x20;&#x28;&#x24;&#x20;2.5M&#x20;-&#x20;5M&#x29;">20 - 40 Cr ($ 2.5M - 5M)</option>
                          <option value="40&#x20;-&#x20;80&#x20;Cr&#x20;&#x28;&#x24;&#x20;5M&#x20;-&#x20;10M&#x29;">40 - 80 Cr ($ 5M - 10M)</option>
                          <option value="80&#x20;-&#x20;120&#x20;Cr&#x20;&#x28;&#x24;&#x20;10M&#x20;-&#x20;15M&#x29;">80 - 120 Cr ($ 10M - 15M)</option>
                          <option value="120&#x20;-&#x20;200&#x20;Cr&#x20;&#x28;&#x24;&#x20;15M&#x20;-&#x20;25M&#x29;">120 - 200 Cr ($ 15M - 25M)</option>
                          <option value="200&#x20;-&#x20;400&#x20;Cr&#x20;&#x28;&#x24;&#x20;25M&#x20;-&#x20;50M&#x29;">200 - 400 Cr ($ 25M - 50M)</option>
                          <option value="400&#x20;-&#x20;800&#x20;Cr&#x20;&#x28;&#x24;&#x20;50M&#x20;-&#x20;100M&#x29;">400 - 800 Cr ($ 50M - 100M)</option>
                          <option value="800&#x20;-&#x20;2000&#x20;Cr&#x20;&#x28;&#x24;&#x20;100M&#x20;-&#x20;250M&#x29;">800 - 2000 Cr ($ 100M - 250M)</option>
                          <option value="More&#x20;than&#x20;2000&#x20;Cr&#x20;&#x28;&#x24;&#x20;250M&#x2b;&#x29;">More than 2000 Cr ($ 250M+)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="LEADCF127" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">How did you hear about us</label>
                        <select id="LEADCF127" name="LEADCF127" onChange={() => (window as any).addAriaSelected409531000042578178?.()} className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none appearance-none cursor-pointer text-sm transition-all">
                          <option value="-None-">-None-</option>
                          <option value="Email">Email</option>
                          <option value="Event">Event</option>
                          <option value="Friend&#x2f;Associate">Friend/Associate</option>
                          <option value="Search">Search</option>
                          <option value="Social&#x20;Media">Social Media</option>
                          <option value="Referral">Referral</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="LEADCF123" className="block text-gray-700 text-[10px] font-bold uppercase tracking-widest mb-1.5">How We Can Help You <span className="text-red-500">*</span></label>
                      <textarea id="LEADCF123" name="LEADCF123" rows={2} required className="w-full bg-gray-50 border-2 border-blue-100 focus:border-blue-500 rounded-xl px-4 py-2.5 text-gray-900 outline-none placeholder-gray-400 resize-none text-sm transition-all" placeholder="Share your requirements..." />
                    </div>

                    {/* reCAPTCHA v2 Checkbox Widget */}
                    <div className="pt-2">
                      <div className="g-recaptcha" data-sitekey={SITE_KEY} data-theme="light" data-callback="rccallback409531000042578178" captcha-verified="false" id="recap409531000042578178" />
                      <div id="recapErr409531000042578178" style={{ fontSize: '11px', color: '#ef4444', marginTop: '4px', visibility: 'hidden' }}>Captcha validation failed. If you are not a robot then please try again.</div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <input
                        type="submit"
                        id="formsubmit"
                        className="formsubmit flex-1 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] text-sm cursor-pointer"
                        value="Submit Request"
                      />
                      <input 
                        type="reset" 
                        className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all text-sm cursor-pointer" 
                        value="Reset" 
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
    </>
  );
}
