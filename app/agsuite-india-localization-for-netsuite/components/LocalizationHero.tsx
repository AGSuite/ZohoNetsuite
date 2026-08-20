"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Send, AlertCircle, ShieldCheck } from "lucide-react";
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
          subject: "AGSuite India Localization for NetSuite Landing Page Enquiry",
          formTitle: "AGSuite India Localization for NetSuite Landing Page Enquiry",
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

          {/* LEFT: Hero Copy & Feature List */}
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

            {/* Subtitle / Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
            >
              Full Indian tax compliance inside NetSuite — GST automation, e-invoicing with IRP, TDS/TCS management, e-Way Bills, and GSTR filing reports. Built for Indian businesses running on NetSuite.
            </motion.p>

            {/* Circular Design Content Paragraph 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 shadow-md backdrop-blur-xs"
            >
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                India Localization for NetSuite simplifies the complexities of Indian tax regulations, providing a cloud-native solution for GST, TDS, and statutory compliance. As a specialized NetSuite India localization partner, we help businesses automate e-invoicing via IRP, multi-state GSTIN management, e-way bills, and MCA audit-ready financial statements within a single unified platform.
              </p>
            </motion.div>

            {/* Quick Check Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-y-2 pt-1"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Multi-GSTIN Management</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Section 194Q & 206C</span>
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

          {/* RIGHT: Form Matching Best ERP Landing Page Structure */}
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

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Request Localization Demo
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 font-medium">
                    Speak with our certified NetSuite tax architects for a tailored India compliance walkthrough.
                  </p>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Form Body Matching Best ERP Fields & Styles */}
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyname"
                        required
                        placeholder="Acme Corp"
                        value={formData.companyname}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Business Email & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-white border ${emailError ? "border-red-500 focus:border-red-600" : "border-slate-200 focus:border-blue-600"
                          } focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 shadow-2xs`}
                      />
                      {emailError && (
                        <span className="text-[11px] text-red-600 font-medium block mt-1">
                          {emailError}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                        Role / Designation *
                      </label>
                      <input
                        type="text"
                        name="designation"
                        required
                        placeholder="CTO / CFO / Finance Head"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Mobile & Annual Revenue */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
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
                          className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-r-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 shadow-2xs"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                        Annual Revenue *
                      </label>
                      <select
                        name="revenue"
                        required
                        value={formData.revenue}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none cursor-pointer transition-all shadow-2xs"
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
                    <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                      How did you hear about us?
                    </label>
                    <select
                      name="leadsource"
                      value={formData.leadsource}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none cursor-pointer transition-all shadow-2xs"
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
                    <label className="block text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">
                      How We Can Help! *
                    </label>
                    <textarea
                      name="comments"
                      required
                      rows={2}
                      placeholder="Tell us about your NetSuite India compliance requirements..."
                      value={formData.comments}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-all placeholder-slate-400 resize-none shadow-2xs"
                    />
                    {/* Honeypot field (hidden from real users, traps bots) */}
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
                    className="w-full py-3.5 px-6 rounded-xl font-extrabold text-white uppercase tracking-wider text-sm bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Submitting..." : "Book Free Consultation"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
