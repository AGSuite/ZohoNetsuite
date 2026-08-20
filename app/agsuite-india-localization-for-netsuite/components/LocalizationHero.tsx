"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, Send, AlertCircle, Award, FileCheck, RefreshCw, Zap } from "lucide-react";
import { GoogleRecaptcha, GoogleRecaptchaRef } from "@/app/components/shared/GoogleRecaptcha";

const INVALID_DOMAINS = /@(gmail|yahoo|outlook|live|hotmail|aol)\.[a-z]{2,}$/i;
const VALID_EMAIL_FORMAT = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

export default function LocalizationHero() {
  const router = useRouter();
  const recaptchaRef = useRef<GoogleRecaptchaRef>(null);

  const [formData, setFormData] = useState({
    name: "",
    companyname: "",
    email: "",
    countryCode: "+91",
    phone: "",
    designation: "",
    revenue: "",
    leadsource: "India Localization Landing Page",
    comments: "",
    BirthDate: "", // Honeypot field
  });

  const [emailError, setEmailError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone" && value !== "" && !/^[0-9]+$/.test(value)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const val = value.trim();
      if (val && !VALID_EMAIL_FORMAT.test(val)) {
        setEmailError("Please enter a valid email address (example@company.com).");
      } else if (INVALID_DOMAINS.test(val)) {
        setEmailError("Please use a business email address instead of Gmail/Yahoo/Outlook.");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!VALID_EMAIL_FORMAT.test(formData.email)) {
      setErrorMessage("Please enter a valid business email address.");
      return;
    }

    if (INVALID_DOMAINS.test(formData.email)) {
      setErrorMessage("Please use a business work email address instead of free email domains.");
      return;
    }

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setErrorMessage("Please verify that you are not a robot (reCAPTCHA).");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const data = await res.json();

      if (data.status === 1) {
        router.push("/best-cloud-based-erp-software/free-consultation/thankyou");
      } else {
        setErrorMessage(data.msg || "Submission failed. Please try again.");
        recaptchaRef.current?.reset();
      }
    } catch (err) {
      console.error("Form error:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden font-['DM_Sans',sans-serif] bg-gradient-to-b from-[#020204] via-[#070b16] to-[#0c1022] text-white"
    >
      {/* Grid Pattern Lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99,102,241,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99,102,241,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Deep Blue & Purple Ambient Glow Blobs on Black Theme */}
      <div className="absolute -top-28 -left-28 w-[650px] h-[650px] bg-gradient-to-br from-blue-600/25 via-indigo-600/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[650px] h-[650px] bg-gradient-to-bl from-purple-600/25 via-indigo-600/15 to-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* LEFT: Hero Copy & Feature List (50% Equal Width, Aligned to Form Top) */}
          <div className="w-full flex flex-col justify-start space-y-5">
            {/* Top Pill Badge */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                India Localization for NetSuite
              </motion.div>
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight tracking-tight"
            >
              Streamlined Tax Management With{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                AGSuite India Localization for NetSuite
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
            >
              Full Indian tax compliance inside NetSuite — GST automation, e-invoicing with IRP, TDS/TCS management, e-Way Bills, and GSTR filing reports. Built for Indian businesses running on NetSuite.
            </motion.p>

            {/* Highlight Callout Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-4 sm:p-5 rounded-2xl bg-white/20 border border-white/10 backdrop-blur-md text-xs sm:text-lg text-slate-200 leading-relaxed font-medium shadow-sm"
            >
              Eliminate manual tax calculations, compliance risks, and penalties with AGSuite&apos;s 100% Native SuiteCloud localization SuiteApp. Designed for seamless multi-state operations and global subsidiary consolidation.
            </motion.div>

            {/* Trust Highlights Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">100% Statutory Compliant</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Real-Time IRP & e-Way Bill</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Automated TDS/TCS & 26Q</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">MCA Audit Trail (Rule 3(1))</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">GSTR-2B ITC Matching</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Schedule III Balance Sheet</span>
              </div>
            </motion.div>

            {/* Quick Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-300"
            >
              <div><span className="text-blue-400 font-extrabold text-sm">500+</span> Deployments</div>
              <div><span className="text-indigo-400 font-extrabold text-sm">100%</span> Compliant</div>
              <div><span className="text-purple-400 font-extrabold text-sm">85%</span> Faster Close</div>
              <div><span className="text-emerald-400 font-extrabold text-sm">24/7</span> Support</div>
            </motion.div>
          </div>

          {/* RIGHT: Lead Capture Consultation Form (50% Equal Width with Wider Form) */}
          <div className="w-full" id="consultation-form">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-[2px] rounded-[28px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(99,102,241,0.25)]"
            >
              <div className="bg-white rounded-[26px] p-6 sm:p-8 relative overflow-hidden">
                {/* Form Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Fast 1-Day Activation Demo
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Request Localization Demo
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Speak with our certified NetSuite tax architects for a tailored India compliance walkthrough.
                  </p>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="BirthDate"
                    value={formData.BirthDate}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Error Banner */}
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyname"
                      required
                      placeholder="Your company name"
                      value={formData.companyname}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${emailError ? "border-red-400 bg-red-50/30" : "border-slate-200"
                        }`}
                    />
                    {emailError && (
                      <p className="text-[11px] text-red-600 mt-1 font-medium">{emailError}</p>
                    )}
                  </div>

                  {/* Phone & Country Code */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="px-2.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-semibold outline-none w-24 shrink-0 cursor-pointer"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+61">🇦🇺 +61</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Annual Revenue / NetSuite Status */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Annual Revenue
                      </label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      >
                        <option value="">Select Range</option>
                        <option value="Under ₹10 Cr">Under ₹10 Cr</option>
                        <option value="₹10 Cr - ₹50 Cr">₹10 Cr - ₹50 Cr</option>
                        <option value="₹50 Cr - ₹250 Cr">₹50 Cr - ₹250 Cr</option>
                        <option value="₹250 Cr+">₹250 Cr+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        NetSuite Status
                      </label>
                      <select
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      >
                        <option value="">Select Status</option>
                        <option value="Existing NetSuite User">Existing NetSuite User</option>
                        <option value="Currently Implementing">Currently Implementing</option>
                        <option value="Evaluating NetSuite ERP">Evaluating NetSuite ERP</option>
                        <option value="Need SuiteApp Only">Need SuiteApp Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Google reCAPTCHA */}
                  <div className="flex justify-center my-2 scale-90 sm:scale-100 origin-center">
                    <GoogleRecaptcha
                      ref={recaptchaRef}
                      sitekey="6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-sm shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Scheduling Demo...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Book Free Localization Demo</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 leading-tight">
                    🔒 100% Confidential. No spam. Instant consultation callback.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
