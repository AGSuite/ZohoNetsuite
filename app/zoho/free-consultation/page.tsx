"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  CheckCircle,
  ArrowRight,
  Briefcase,
  Clock,
  Target,
  Send
} from "lucide-react";
import MultiSelectDropdown from "@/app/components/shared/MultiSelectDropdown";
import IntlTelInput from "@intl-tel-input/react/with-utils";
import "intl-tel-input/styles";

/* ─── Particles ───────────────────────────────────────────────────────────── */
const PARTICLES = [
  { w: 2, h: 2, top: 10, left: 15, dur: 5, delay: 0.3 },
  { w: 1.5, h: 1.5, top: 25, left: 70, dur: 4.2, delay: 1.1 },
  { w: 3, h: 3, top: 55, left: 8, dur: 6, delay: 0.7 },
  { w: 2, h: 2, top: 75, left: 88, dur: 4.8, delay: 2.0 },
  { w: 1, h: 1, top: 40, left: 42, dur: 3.5, delay: 0.5 },
  { w: 2.5, h: 2.5, top: 85, left: 30, dur: 5.5, delay: 1.5 },
  { w: 1.5, h: 1.5, top: 18, left: 55, dur: 4.0, delay: 0.9 },
  { w: 2, h: 2, top: 62, left: 76, dur: 5.3, delay: 0.2 },
];

export default function ZohoFreeConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [mobile, setMobile] = useState("");
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [returnUrl, setReturnUrl] = useState('https://www.agsuite.tech/thank-you');

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setReturnUrl(window.location.origin + '/thank-you');
    }

    (window as any).addAriaSelected409531000047791049 = function () {
      const optionElem = (event as any).target;
      const prev = optionElem.querySelector('[aria-selected=true]');
      if (prev) prev.removeAttribute('aria-selected');
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

    (window as any).rccallback409531000047791049 = function () {
      const recap = document.getElementById('recap409531000047791049');
      if (recap) recap.setAttribute('captcha-verified', 'true');
      const recapErr = document.getElementById('recapErr409531000047791049');
      if (recapErr && recapErr.style.visibility === 'visible') {
        recapErr.style.visibility = 'hidden';
      }
    };

    (window as any).checkMandatory409531000047791049 = function () {
      const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF127', 'LEADCF165'];
      const fldLangVal = ['Company Name', 'Name', 'Role', 'Email', 'Mobile', 'Annual Revenue', 'How We Can Help You', 'How did you hear about us.', 'Services'];
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

      const recap = document.getElementById('recap409531000047791049');
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
        const recapErr = document.getElementById('recapErr409531000047791049');
        if (recapErr) recapErr.style.visibility = 'visible';
        return false;
      }

      return true;
    };

    const renderRecaptcha = () => {
      const container = document.getElementById('recap409531000047791049');
      if (container && container.children.length === 0 && (window as any).grecaptcha && (window as any).grecaptcha.render) {
        try {
          (window as any).grecaptcha.render(container, {
            sitekey: '6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7',
            theme: 'light',
            callback: (window as any).rccallback409531000047791049
          });
        } catch (e) { }
      }
    };

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const container = document.getElementById('recap409531000047791049');
      if (container && container.children.length > 0) {
        clearInterval(interval);
        return;
      }
      if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
        renderRecaptcha();
      }
      if (attempts > 60) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const sendEmail = async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    fetch('/api/contact/zoho-notification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('Last Name'),
        email: formData.get('Email'),
        mobile: formData.get('Mobile'),
        role: formData.get('Designation'),
        company: formData.get('Company'),
        services: formData.getAll('LEADCF165'),
        revenue: formData.get('LEADCF19'),
        hearAbout: formData.get('LEADCF127'),
        message: formData.get('LEADCF123'),
        subjectTitle: 'Zoho Free Consultation Form Enquiry'
      })
    }).catch(() => { });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if ((window as any).checkMandatory409531000047791049 && !(window as any).checkMandatory409531000047791049()) {
      e.preventDefault();
      return;
    }

    try {
      // @ts-ignore
      if (window.$zoho && window.$zoho.salesiq) {
        const form = e.currentTarget;
        const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
        if (LDTuvidObj) {
          // @ts-ignore
          LDTuvidObj.value = window.$zoho.salesiq.visitor.uniqueid();
        }
        const nameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
        const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
        if (nameObj) {
          // @ts-ignore
          window.$zoho.salesiq.visitor.name(nameObj.value);
        }
        if (emailObj) {
          // @ts-ignore
          window.$zoho.salesiq.visitor.email(emailObj.value);
        }
      }
    } catch (err) { }

    await sendEmail(e.currentTarget);
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white">

      {/* ── Hero / Form Section ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(ellipse_90%_90%_at_50%_-15%,rgba(14,165,233,0.28),rgba(0,8,20,0.98)_70%),linear-gradient(135deg,#000814_0%,#000d2e_50%,#001a4d_100%)]">

        {/* Square Grid Pattern Lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.1) 75%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.1) 75%, transparent 100%)",
          }}
        />

        {/* Gradient Glow Blobs */}
        <div className="absolute -top-24 -left-24 w-[650px] h-[650px] bg-gradient-to-br from-blue-600/35 via-cyan-400/25 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-indigo-600/30 via-purple-600/20 to-cyan-500/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/30 via-blue-600/25 to-indigo-700/25 rounded-full blur-[140px] pointer-events-none" />

        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/40 pointer-events-none"
            style={{ width: p.w, height: p.h, top: `${p.top}%`, left: `${p.left}%` }}
            animate={{ y: [0, -22, 0], opacity: [0.25, 0.9, 0.25] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

            {/* ── LEFT: Hero Content ────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center gap-5 pt-2"
            >
              {/* H1 */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-semibold text-white leading-tight tracking-tight mb-3">
                  Scale Your Business <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                    with Zoho Solutions
                  </span>
                </h1>

                {/* Divider */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 72 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-4"
                />

                {/* Subline */}
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
                  Ready to scale? Book a session with our certified Zoho consultants to audit your stack, identify operational bottlenecks, and architect your tailored roadmap.
                </p>
              </div>

              {/* Consultation Process Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    step: "01",
                    title: "Operational Audit",
                    desc: "Identify optimization gaps & legacy bottlenecks"
                  },
                  {
                    step: "02",
                    title: "Strategic Roadmap",
                    desc: "Architect a phased plan for immediate ROI"
                  },
                  {
                    step: "03",
                    title: "Senior Expertise",
                    desc: "Consult directly with senior certified Zoho experts"
                  },
                  {
                    step: "04",
                    title: "Tech Stack Review",
                    desc: "Analyze migration, APIs, and security hardening"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="relative group p-5 rounded-2xl bg-gradient-to-br from-white via-white/95 to-blue-50/90 border border-blue-100/60 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden text-left"
                  >
                    <div className="relative z-10 flex flex-col items-start">
                      <div className="mb-3 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 font-extrabold text-xs group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xs">
                        {item.step}
                      </div>
                      <h4 className="text-[15px] sm:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#000d2e] via-blue-900 to-black tracking-tight leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Free Consultation Form ──────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full relative"
            >
              {/* Ambient Glow Behind Form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-cyan-400/25 to-indigo-600/30 rounded-3xl blur-xl -z-10 pointer-events-none" />

              <div className="relative bg-white p-6 sm:p-7 rounded-2xl border border-blue-100/80 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.25),0_10px_25px_-5px_rgba(6,182,212,0.18),0_30px_70px_rgba(0,0,0,0.35)] overflow-hidden w-full">
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 z-20" />

                <div className="relative z-10 pt-1">
                  <h2 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 bg-clip-text text-transparent tracking-tight mb-3">
                    Book Your Free Consultation
                  </h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center gap-3"
                    >
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Request Sent!</h3>
                      <p className="text-xs text-gray-500 max-w-xs">Thank you for reaching out. Our certified Zoho experts will connect with you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form
                      action="https://crm.zoho.in/crm/WebToLeadForm"
                      id="webform409531000047791049"
                      name="WebToLeads409531000047791049"
                      method="POST"
                      onSubmit={handleSubmit}
                      acceptCharset="UTF-8"
                      className="space-y-3"
                    >
                      <input type="text" className="hidden" name="xnQsjsdp" value="67860b2429a550e35c7c44282b3ccd5de42dee7cf8fadbbd5b2f0246e4e596a8" readOnly />
                      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                      <input type="text" className="hidden" name="xmIwtLD" value="921e163c506154d37a6252eba6666b0ab6a5878005e7d9cb1bf24e8009451307593cbebb06b6266e387cfba4816aa5de" readOnly />
                      <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
                      <input type="text" className="hidden" name="returnURL" value={returnUrl} readOnly />
                      <input type="text" className="hidden" name="aG9uZXlwb3Q" value="" readOnly />
                      <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                      <select name="Lead Status" className="hidden" defaultValue="Database">
                        <option value="Database">Database</option>
                      </select>
                      <select name="Lead Source" className="hidden" defaultValue="Website (Form)">
                        <option value="Website (Form)">Website (Form)</option>
                      </select>
                      <input type="hidden" name="No of Employees" value="0" />

                      {/* Row 1: Name & Company */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Name <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            id="Last_Name"
                            name="Last Name"
                            maxLength={80}
                            placeholder="John Doe"
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Company <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            id="Company"
                            name="Company"
                            required
                            maxLength={200}
                            placeholder="Company Inc."
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400"
                          />
                        </div>
                      </div>

                      {/* Row 2: Email & Mobile */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Email <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            id="Email"
                            data-ftype="email"
                            required
                            name="Email"
                            maxLength={100}
                            placeholder="john@company.com"
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Mobile <span className="text-blue-600">*</span>
                          </label>
                          <div className="w-full text-slate-900 contact-iti-wrapper">
                            <IntlTelInput
                              value={mobile}
                              onChangeNumber={(val) => setMobile(val)}
                              onChangeValidity={(isValid) => setIsMobileValid(isValid)}
                              initialCountry="in"
                              separateDialCode={true}
                              strictMode={true}
                              countryOrder={["in", "us", "gb", "ae"]}
                              inputProps={{
                                id: "Mobile",
                                name: "Mobile",
                                required: true,
                                maxLength: 30,
                                placeholder: "Mobile number",
                                className: "w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Role & Annual Revenue */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Role <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            id="Designation"
                            name="Designation"
                            required
                            maxLength={100}
                            placeholder="CTO / Manager"
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Annual Revenue <span className="text-blue-600">*</span>
                          </label>
                          <select
                            id="LEADCF19"
                            name="LEADCF19"
                            required
                            onChange={(e) => (window as any).addAriaSelected409531000047791049?.(e)}
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none cursor-pointer transition-all"
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
                      </div>

                      {/* Row 4: Services & Source */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Zoho Services <span className="text-blue-600">*</span>
                          </label>
                          <MultiSelectDropdown
                            id="LEADCF165"
                            name="LEADCF165"
                            placeholder="-Select Service-"
                            className="!py-2.5 !px-3 !text-xs"
                            bgClassName="bg-white border border-slate-200"
                            textColorClassName="text-slate-900"
                            options={[
                              "Zoho Licenses",
                              "Zoho Implementation",
                              "Zoho Support",
                              "Zoho Optimization",
                              "Zoho Customization",
                              "Zoho Integrations",
                            ]}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            How did you hear? <span className="text-blue-600">*</span>
                          </label>
                          <select
                            id="LEADCF127"
                            name="LEADCF127"
                            required
                            onChange={(e) => (window as any).addAriaSelected409531000047791049?.(e)}
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none cursor-pointer transition-all"
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

                      {/* Row 5: Message */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          How We Can Help You <span className="text-blue-600">*</span>
                        </label>
                        <textarea
                          required
                          name="LEADCF123"
                          rows={3}
                          placeholder="Tell us about your requirements..."
                          className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs transition-all outline-none resize-none placeholder-slate-400"
                        />
                      </div>

                      {/* Captcha */}
                      <div className="flex flex-col gap-0.5 -mb-2.5">
                        <div
                          data-sitekey="6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7"
                          data-theme="light"
                          data-callback="rccallback409531000047791049"
                          captcha-verified="false"
                          id="recap409531000047791049"
                          className="g-recaptcha scale-[0.82] origin-left"
                        ></div>
                        <div
                          id="recapErr409531000047791049"
                          style={{ visibility: 'hidden', color: 'red', fontSize: '11px' }}
                        >
                          Captcha validation failed. Please try again.
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="-mt-1">
                        <button
                          type="submit"
                          id="formsubmit"
                          className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-blue-500/30 hover:scale-[1.02] text-sm uppercase tracking-wider cursor-pointer formsubmit-contact"
                        >
                          <Send className="w-4 h-4" />
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx global>{`
          .contact-iti-wrapper .iti {
            width: 100%;
            display: block;
          }
          .contact-iti-wrapper .iti__flag-container {
            height: 100%;
          }
          .contact-iti-wrapper .iti__selected-dial-code {
            font-size: 12px;
          }
          .contact-iti-wrapper .iti__selected-country {
            height: 100%;
            border-radius: 0.75rem 0 0 0.75rem;
            padding: 0 8px;
          }
          .contact-iti-wrapper .iti__tel-input {
            border-radius: 0 0.75rem 0.75rem 0 !important;
          }
          .contact-iti-wrapper .iti__dropdown-content {
            z-index: 70;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
          }
        `}</style>
      </section>

      {/* ── Quick Access Sub-Pages ────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 tracking-tight">
              Explore More Ways to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Connect
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Free Consultation",
                desc: "Talk to our team.",
                link: "/zoho/free-consultation",
                icon: Target,
                image: "/images/contact/consultation.webp"
              },
              {
                title: "Request Quote",
                desc: "Get project pricing.",
                link: "/zoho/request-quote",
                icon: Clock,
                image: "/images/contact/quote.webp"
              },
              {
                title: "Careers",
                desc: "Join our growing team.",
                link: "/zoho/careers",
                icon: Briefcase,
                image: "/images/contact/carrer.webp"
              }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group relative h-[420px] rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 flex flex-col justify-end"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors" />
                <div className="relative z-10 p-8 text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 group-hover:text-white transition-colors">{item.desc}</p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-blue-900 group-hover:text-blue-600 border border-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm">
                    <span className="text-xs font-medium uppercase tracking-wider">Explore More</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scripts ───────────────────────────────────────────────────────────── */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="afterInteractive" />
      <Script id="wf_anal_zoho_consult" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=e7fa82545e6cbc426156b206aa8236f2c686a1dd1fa2201a42f8f8bc1f3ed582856adb0b2a204a9d5af92c2452e3a8a8gidc5c4b2eec1a1272f8a476c638c29bb49a4d78e91e7b5216007f5c7aeef1afd9fg5f6d199f406123ad764d17f846376ab5e7fab29b0bebbbde07b6a8367d0aba4cgid8d7aa6245a7de773373511b56e3ffa902647cb1e3730e636a86b82d0019d0cce&tw=b2ff6a1aabcf001476b36b61fabd0fbad09ea545696c57b419b7adca06e6ef53&version=v2" strategy="afterInteractive" />
    </div>
  );
}
