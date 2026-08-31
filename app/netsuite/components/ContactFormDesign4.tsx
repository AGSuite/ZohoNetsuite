"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { Send, Briefcase, Building2, Target, Heart } from "lucide-react";
import MultiSelectDropdown from "@/app/components/shared/MultiSelectDropdown";

function Design4StatCard({ item }: { item: any; index?: number }) {
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
            'sitekey': '6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7',
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
      <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="lazyOnload" />
      {/* NetSuite Web-to-Lead Analytics */}
      <Script id="wf_anal_netsuite" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=9928b42954d320356885bb078ab0c3360c484e291c9e63097274653a3641def28b6749111011c9996c331f7836c7a2e8gid872197a4e4b8e909c249edeced5a19f1d2f950e702a3b0289fff2eacb04b67b1gid273da06b7bb3796c20973a82554d312ddd92ec671fa5a6016c080db58e6ccf5agidf40ec6d150665170b0cb2e595aa0cb939a02ed9792327816f3776b9eead7fe3a&tw=48a179f0eb3b7de8eccbf4bf9c2ace934d9e1bdc655d88e07911628e929af667&version=v2" strategy="lazyOnload" />
      <section id="contact-form" className="relative py-10 sm:py-12 bg-slate-950 overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left Narrative */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-950 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                    Accelerate Enterprise Growth with <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Oracle NetSuite</span>
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                    Get in touch with our certified NetSuite consultants for licensing, multi-subsidiary implementations, optimizations, and custom integrations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-auto pt-2">
                  {[
                    { value: "700+", label: "Projects Completed", icon: Briefcase },
                    { value: "250+", label: "Global Customers", icon: Building2 },
                    { value: "15+", label: "Industry Expertise", icon: Target },
                    { value: "84%", label: "Customer Retention", icon: Heart },
                  ].map((item, idx) => (
                    <Design4StatCard key={idx} item={item} index={idx} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="p-5 sm:p-6 lg:p-7 bg-white flex flex-col justify-center">
              <div className="mb-4">
                <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">Let’s Get Started !!</h3>
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
                <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="e79cbdec5c6e5b7d7f71b6fd074e22822590c7d5f2b4c7d541bbbb65cad7c1e9" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="07822c70b4131fef446a0a686c99d5195d6d6ddfa0431c1f0eeb3f080cc03771374f84de08a3fd4604be9855603d3099" readOnly />
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
                    <MultiSelectDropdown
                      id="LEADCF166"
                      name="LEADCF166"
                      placeholder="-Select NetSuite Service-"
                      bgClassName="bg-slate-50 border border-slate-200 focus:border-blue-600 hover:border-blue-400"
                      textColorClassName="text-slate-900"
                      options={[
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
                      ]}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Annual Revenue *</label>
                    <select id="LEADCF19" name="LEADCF19" required onChange={(e) => (window as any).addAriaSelected409531000047791096?.()} className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none cursor-pointer">
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
                    data-sitekey="6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7"
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

                <div className="pt-2">
                  <input type="submit" id="formsubmit" className="formsubmit zcwf_button w-full px-10 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-95 text-sm uppercase tracking-widest cursor-pointer text-center" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
