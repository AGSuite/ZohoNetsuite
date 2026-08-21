"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Send, AlertCircle, ShieldCheck, Zap, Globe, Users2 } from "lucide-react";
import { GoogleRecaptcha, GoogleRecaptchaRef } from "@/app/components/shared/GoogleRecaptcha";

const INVALID_DOMAINS = /@(gmail|yahoo|outlook|live|hotmail|aol)\.[a-z]{2,}$/i;
const VALID_EMAIL_FORMAT = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

export default function CrmHero() {
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
    leadsource: "",
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
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
          subject: "Best Cloud-Based CRM Landing Page Enquiry",
          formTitle: "Best Cloud-Based CRM Landing Page Enquiry",
        }),
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
      className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden font-['DM_Sans',sans-serif] bg-gradient-to-br from-amber-50/50 via-orange-50/30 via-rose-50/30 to-teal-50/30 text-slate-900 scroll-mt-20"
    >
      {/* Background Soft Glows (Mixed Zoho ERP Amber/Orange & HRMS Teal/Emerald Theme) */}
      
      {/* Top-Left: Warm Sunset Amber / Orange Glow */}
      <div className="absolute -top-[25%] -left-[15%] w-[70%] h-[90%] rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/30 to-transparent blur-[150px] pointer-events-none" />
      
      {/* Bottom-Right: Fresh Teal / Emerald Glow */}
      <div className="absolute -bottom-[25%] -right-[15%] w-[70%] h-[90%] rounded-full bg-gradient-to-tl from-teal-200/35 via-emerald-100/25 to-transparent blur-[150px] pointer-events-none" />
      
      {/* Top-Right: Coral Rose Glow */}
      <div className="absolute -top-[20%] -right-[10%] w-[55%] h-[65%] rounded-full bg-gradient-to-bl from-rose-200/30 via-orange-100/20 to-transparent blur-[140px] pointer-events-none" />

      {/* Bottom-Left: Soft Emerald Mint Glow */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[60%] rounded-full bg-gradient-to-tr from-emerald-100/30 via-amber-100/20 to-transparent blur-[140px] pointer-events-none" />

      {/* Center: Soft Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-amber-100/25 blur-[120px] pointer-events-none" />

      {/* Dual Geometric SVG Wave Pattern (ERP Amber/Orange + HRMS Teal/Emerald) */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0" viewBox="0 0 1440 800" fill="none">
        {/* Amber/Orange ERP Wave Curves */}
        <path d="M-100 200C300 100 600 300 1000 150C1300 100 1500 250 1700 200" stroke="url(#crm-mix-grad-1)" strokeWidth="2" strokeDasharray="4 8" />
        <path d="M-100 550C300 450 700 650 1100 500C1400 450 1600 600 1800 550" stroke="url(#crm-mix-grad-2)" strokeWidth="2.5" />
        
        {/* Teal/Emerald HRMS Wave Curves */}
        <path d="M-100 350C300 250 600 450 1000 300C1300 250 1500 400 1700 350" stroke="url(#crm-mix-grad-3)" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.6" />

        <defs>
          <linearGradient id="crm-mix-grad-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="1" stopColor="#EF4444" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="crm-mix-grad-2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EA580C" stopOpacity="0.3" />
            <stop offset="0.5" stopColor="#F97316" stopOpacity="0.7" />
            <stop offset="1" stopColor="#D97706" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="crm-mix-grad-3" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0D9488" stopOpacity="0.3" />
            <stop offset="0.5" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Animated Ambient Glow Particles */}
      <motion.div
        animate={{ y: [0, -35, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] right-[12%] w-4 h-4 rounded-full bg-orange-400/80 blur-[2px] pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 35, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[22%] left-[15%] w-5 h-5 rounded-full bg-amber-400/70 blur-[2px] pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute bottom-[25%] right-[18%] w-3.5 h-3.5 rounded-full bg-teal-400/70 blur-[2px] pointer-events-none hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* LEFT: Hero Copy & Value Content */}
          <div className="w-full flex flex-col justify-start space-y-5">
            {/* Top Pill Badge */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-orange-900 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-xs backdrop-blur-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Zoho CRM Solutions & Consulting</span>
              </motion.div>
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]"
            >
              Empower Your Sales Team with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-900 to-amber-600">
                Zoho CRM
              </span>
            </motion.h1>

            {/* Content Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
            >
              Zoho CRM is a robust, cloud-based customer relationship management (CRM) platform designed to streamline and enhance your business&apos;s sales, marketing, and customer support processes. Zoho CRM provides a comprehensive suite of tools to help businesses of all sizes manage their customer interactions, automate workflows, and gain actionable insights through advanced analytics.
            </motion.p>

            {/* Content Paragraph 2 (Highlighted Card) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="p-5 rounded-2xl bg-white/80 border border-orange-200/80 shadow-sm backdrop-blur-xs text-sm sm:text-base text-slate-700 leading-relaxed font-normal"
            >
              By centralizing customer data and integrating with various business applications, Zoho CRM enables companies to build stronger relationships and drive growth. Zoho CRM facilitates a global network of approximately <strong>250,000 businesses</strong> across more than <strong>180 countries</strong> to acquire more leads, engage with customers, and boost revenue.
            </motion.div>

            {/* Content Paragraph 3 (AGSuite Specialization Statement) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-sm sm:text-base font-bold text-slate-900 bg-gradient-to-r from-orange-100/80 to-amber-100/60 p-3.5 rounded-xl border border-orange-200/90"
            >
              ⭐ At AGSuite Technologies, we specialize in delivering exceptional Zoho CRM solutions tailored to your business needs.
            </motion.p>

            {/* Trust Metric Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <div className="flex items-center gap-2">
                <Users2 className="w-4 h-4 text-orange-600" />
                <span>250,000+ Businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-rose-600" />
                <span>180+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zoho Premium Partner</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Form in Light Gradient Card */}
          <div className="w-full" id="consultation-form">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-[1.5px] rounded-[28px] bg-gradient-to-br from-orange-300/45 via-amber-300/35 to-teal-300/40 shadow-[0_20px_50px_-15px_rgba(249,115,22,0.15),0_4px_20px_-5px_rgba(13,148,136,0.08)]"
            >
              <div className="bg-white rounded-[26px] p-6 sm:p-8 relative overflow-hidden border border-orange-100/60">

                {/* Form Header */}
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Schedule a Free CRM Consultation
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 font-medium">
                    Speak with our certified CRM solution architects for a tailored cloud CRM walkthrough.
                  </p>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Form Body with Dark Red/Orange Labels */}
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyname"
                        required
                        placeholder="Acme Corp"
                        value={formData.companyname}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Business Email & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-white border ${
                          emailError ? "border-red-500 focus:border-red-600" : "border-slate-200 focus:border-orange-500"
                        } focus:ring-1 focus:ring-orange-500 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 shadow-2xs`}
                      />
                      {emailError && (
                        <span className="text-[11px] text-red-600 font-medium block mt-1">
                          {emailError}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                        Role / Designation *
                      </label>
                      <input
                        type="text"
                        name="designation"
                        required
                        placeholder="Sales Director, CEO, CRM Head"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Mobile & Annual Revenue */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                        Mobile *
                      </label>
                      <div className="flex">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl px-2.5 py-2.5 text-xs font-bold text-slate-700 outline-none cursor-pointer"
                        >
                          <option value="+91">IN +91</option>
                          <option value="+1">US +1</option>
                          <option value="+44">UK +44</option>
                          <option value="+61">AU +61</option>
                          <option value="+971">AE +971</option>
                          <option value="+65">SG +65</option>
                          <option value="+49">DE +49</option>
                        </select>
                        <input
                          type="text"
                          name="phone"
                          required
                          minLength={10}
                          maxLength={12}
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-r-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 shadow-2xs"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                        Annual Revenue *
                      </label>
                      <select
                        name="revenue"
                        required
                        value={formData.revenue}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none cursor-pointer transition-all shadow-2xs"
                      >
                        <option value="" disabled>Select Annual Revenue</option>
                        <option value="$5M to $10M">$5M to $10M</option>
                        <option value="$10M to $20M">$10M to $20M</option>
                        <option value="$20M to $30M">$20M to $30M</option>
                        <option value="$30M to $50M">$30M to $50M</option>
                        <option value="$50M to $100M">$50M to $100M</option>
                        <option value="$100M+">$100M+</option>
                      </select>
                    </div>
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <label className="block text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                      How did you hear about us?
                    </label>
                    <select
                      name="leadsource"
                      value={formData.leadsource}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none cursor-pointer transition-all shadow-2xs"
                    >
                      <option value="">-- Select Source --</option>
                      <option value="Email">Email</option>
                      <option value="Event">Event</option>
                      <option value="Friend/Associate">Friend/Associate</option>
                      <option value="Search">Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Referral">Referral</option>
                    </select>
                  </div>

                  {/* Comments / Requirements */}
                  <div>
                    <label className="block text-xs font-bold text-red-700 uppercase tracking-wider mb-1">
                      How We Can Help! *
                    </label>
                    <textarea
                      name="comments"
                      required
                      rows={2}
                      placeholder="Tell us about your Zoho CRM & sales automation requirements..."
                      value={formData.comments}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 resize-none shadow-2xs"
                    />
                    {/* Honeypot field */}
                    <input
                      type="text"
                      name="BirthDate"
                      value={formData.BirthDate}
                      onChange={handleChange}
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Google reCAPTCHA v2 */}
                  <div className="pt-1">
                    <GoogleRecaptcha
                      ref={recaptchaRef}
                      sitekey="6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-extrabold text-white uppercase tracking-wider text-sm bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Submitting Request..." : "Book Free CRM Consultation"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {/* Form Trust Microtext */}
                <p className="text-[11px] text-slate-500 text-center mt-3.5">
                  🔒 100% Privacy Guaranteed. A certified Zoho CRM specialist will connect with you within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
