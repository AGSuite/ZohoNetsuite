"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { Send, Briefcase, Globe2, HeartHandshake, Rocket } from "lucide-react";

export default function ContactFormDesign4() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    (window as any).addAriaSelected409531000047791096 = function () {
      const optionElem = (event as any).target;
      const prev = optionElem.querySelector('[aria-selected=true]');
      if (prev) prev.removeAttribute('aria-selected');
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    (window as any).validateEmail409531000047791096 = function () {
      const form = document.forms.namedItem('WebToLeads409531000047791096') as HTMLFormElement;
      if (!form) return true;
      const emailFld = form.querySelectorAll('[data-ftype="email"]');
      for (let i = 0; i < emailFld.length; i++) {
        const v = (emailFld[i] as HTMLInputElement).value;
        if (v.replace(/^\s+|\s+$/g, '').length !== 0) {
          const at = v.indexOf('@'), dot = v.lastIndexOf('.');
          if (at < 1 || dot < at + 2 || dot + 2 >= v.length) {
            alert('Please enter a valid email address.');
            (emailFld[i] as HTMLInputElement).focus();
            return false;
          }
        }
      }
      return true;
    };

    (window as any).checkMandatory409531000047791096 = function () {
      const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF127', 'LEADCF166'];
      const fldLangVal = ['Company Name', 'Name', 'Role', 'Email', 'Mobile', 'Annual Revenue', 'How We Can Help You', 'How did you hear about us.', 'Netsuite Services'];
      const form = document.forms.namedItem('WebToLeads409531000047791096') as HTMLFormElement;
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
      if ((window as any).validateEmail409531000047791096 && !(window as any).validateEmail409531000047791096()) return false;
      if ((window as any).reCaptchaAlert409531000042578178_design4_ns && !(window as any).reCaptchaAlert409531000042578178_design4_ns()) return false;

      const submitButton = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement;
      if (submitButton) {
        submitButton.setAttribute('disabled', 'true');
      }
      return true;
    };

    (window as any).rccallback409531000042578178_design4_ns = function () {
      const recap = document.getElementById('recap409531000042578178_design4_ns');
      if (recap) recap.setAttribute('captcha-verified', 'true');
      const recapErr = document.getElementById('recapErr409531000042578178_design4_ns');
      if (recapErr && recapErr.style.visibility === 'visible') {
        recapErr.style.visibility = 'hidden';
      }
    };

    (window as any).reCaptchaAlert409531000042578178_design4_ns = function () {
      const recap = document.getElementById('recap409531000042578178_design4_ns');
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
        const recapErr = document.getElementById('recapErr409531000042578178_design4_ns');
        if (recapErr) recapErr.style.visibility = 'visible';
        return false;
      }
      return true;
    };

    const renderRecaptcha = () => {
      const container = document.getElementById('recap409531000047791096');
      if ((window as any).grecaptcha && container) {
        try {
          if (container.children.length > 0) return;
          (window as any).grecaptcha.render('recap409531000047791096', {
            'sitekey': '6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_',
            'theme': 'light',
            'callback': (window as any).rccallback409531000047791096
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

    if (typeof (window as any)._wfa_fstprtcken === 'undefined') {
      (window as any)._wfa_fstprtcken = {};
    }
    (window as any)._wfa_fstprtcken[409531000047791096] = true;
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if ((window as any).checkMandatory409531000047791096 && !(window as any).checkMandatory409531000047791096()) {
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
        services: formData.getAll('LEADCF166'),
        revenue: formData.get('LEADCF19'),
        hearAbout: formData.get('LEADCF127'),
        message: formData.get('LEADCF123'),
        subjectTitle: 'NetSuite Contact us Form Enquiry'
      })
    }).catch(() => {});
  };

  if (!isClient) return null;

  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      {/* NetSuite Web-to-Lead Analytics */}
      <Script id="wf_anal_netsuite" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=f84d1d6876a443cf36bdeab891c5582d7c3e142d9fce42d31ffc393506d6d6d54dbf7f9cf10e11397fb06e31977be163gid65b81325138b2fc10191c2ef7b4572a0b18f76ffadabafd1f029455ae866a59cgidf169f3e66dfe1cbf71d7bc2d3d67d57ab12b228f83d723a6a15eb3cfddecc257gid6d99bc21bab3635e5f6b816b959e07211ea39cb1eae372096d63da78a4b9dccc&tw=1db53bf46a6a8b587793bb8f51f25b9b772d35495cdb16dcd3a6abe2ad6ecd11&version=v2" strategy="afterInteractive" />
      <section id="contact-form" className="relative py-24 bg-slate-950 overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            {/* Left Narrative */}
            <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-950 relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                  NetSuite Practice
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                  Accelerate Enterprise Growth with <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Oracle NetSuite</span>
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Get in touch with our certified NetSuite consultants for licensing, multi-subsidiary implementations, optimizations, and custom integrations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe2, title: "Global Deployments", desc: "Multi-country ERP rollouts" },
                    { icon: Rocket, title: "Fast Implementation", desc: "SuiteSuccess methodology" },
                    { icon: HeartHandshake, title: "Dedicated Support", desc: "Post-go-live optimization" },
                    { icon: Briefcase, title: "Domain Experts", desc: "Certified NetSuite consultants" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <item.icon className="w-6 h-6 text-blue-400 mb-2" />
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/2 p-10 lg:p-14 bg-white">
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Request NetSuite Consultation</h3>
                <p className="text-slate-600 text-sm">Fill out the details below to connect with our NetSuite team.</p>
              </div>

              <form
                id="webform409531000047791096"
                action="https://crm.zoho.in/crm/WebToLeadForm"
                name="WebToLeads409531000047791096"
                method="POST"
                onSubmit={handleFormSubmit}
                acceptCharset="UTF-8"
                className="space-y-5"
              >
                <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="d53cf6d2d91bd2c21647f1856ba77f750df004edeb1b81d56dde47d4e8ff036e" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="0dbca13c9e4fae22e074d8e1a51df222b069fd131b4ed865fd39ad02a316b18241f1902d40a5e065b29b169b79077aff" readOnly />
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Name *</label>
                    <input type="text" id="Last_Name" name="Last Name" required maxLength={80} placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Email *</label>
                    <input type="text" id="Email" data-ftype="email" name="Email" required maxLength={100} placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Role *</label>
                    <input type="text" id="Designation" name="Designation" required maxLength={100} placeholder="CTO / Manager" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Mobile *</label>
                    <input type="text" id="Mobile" name="Mobile" required maxLength={30} placeholder="+91 9876543210" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Company Name *</label>
                    <input type="text" id="Company" name="Company" required maxLength={200} placeholder="Company Inc." className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Netsuite Services *</label>
                    <select id="LEADCF166" name="LEADCF166" defaultValue="" required onChange={(e) => (window as any).addAriaSelected409531000047791096?.()} className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none cursor-pointer">
                      <option value="" disabled>-Select NetSuite Service-</option>
                      <option value="NetSuite Licenses">NetSuite Licenses</option>
                      <option value="NetSuite Implementation">NetSuite Implementation</option>
                      <option value="NetSuite Licenses + Implementation">NetSuite Licenses + Implementation</option>
                      <option value="New Subsidiary Implementation">New Subsidiary Implementation</option>
                      <option value="NetSuite Support">NetSuite Support</option>
                      <option value="NetSuite Optimization">NetSuite Optimization</option>
                      <option value="NetSuite Customization">NetSuite Customization</option>
                      <option value="NetSuite Integrations">NetSuite Integrations</option>
                      <option value="NetSuite India Localization">NetSuite India Localization</option>
                      <option value="NetSuite Data Backup for India">NetSuite Data Backup for India</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Annual Revenue *</label>
                    <select id="LEADCF19" name="LEADCF19" required onChange={(e) => (window as any).addAriaSelected409531000047791096?.()} className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none cursor-pointer">
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">How did you hear about us. *</label>
                    <select id="LEADCF127" name="LEADCF127" required onChange={(e) => (window as any).addAriaSelected409531000047791096?.()} className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none cursor-pointer">
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">How We Can Help You *</label>
                  <textarea id="LEADCF123" name="LEADCF123" required rows={3} placeholder="Tell us about your NetSuite requirement..." className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none resize-none transition-all" />
                </div>

                {/* Captcha Section */}
                <div className="flex flex-col gap-2 my-2">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LfSYoItAAAAAGehWFygolLQdx9Sk2qkRDcG6_C_"
                    data-theme="light"
                    data-callback="rccallback409531000047791096"
                    captcha-verified="false"
                    id="recap409531000047791096"
                  ></div>
                  <div
                    id="recapErr409531000047791096"
                    style={{ visibility: 'hidden', color: '#ef4444', fontSize: '12px' }}
                  >
                    Captcha validation failed. If you are not a robot then please try again.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <input type="submit" id="formsubmit" className="formsubmit zcwf_button w-full sm:w-auto px-10 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-95 text-sm uppercase tracking-widest cursor-pointer" value="Submit" />
                  <input type="reset" className="zcwf_button px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm cursor-pointer" value="Reset" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
