"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Send, AlertCircle } from "lucide-react";
import { GoogleRecaptcha, GoogleRecaptchaRef } from "@/app/components/shared/GoogleRecaptcha";

const INVALID_DOMAINS = /@(gmail|yahoo|outlook|live|hotmail|aol)\.[a-z]{2,}$/i;
const VALID_EMAIL_FORMAT = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

export default function LandingHero() {
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

  // ─────────────────────────────────────────────────────────────────
  // 🎨  HERO BACKGROUND COLORS
  const hero = {
    sectionGradient: "from-blue-50/70 via-white to-purple-50/60",
    gridColor: "rgba(99,102,241,0.05)",
    gridSize: "60px 60px",
  };

  return (
    <section
      id="hero"
      className={`relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden font-['DM_Sans',sans-serif] bg-gradient-to-br ${hero.sectionGradient}`}
    >
      {/* Barely Visible Grid Pattern Lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${hero.gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${hero.gridColor} 1px, transparent 1px)
          `,
          backgroundSize: hero.gridSize,
        }}
      />

      {/* Diagonal Corner Light Blue & Purple Gradient Accents */}
      <div className="absolute -top-28 -left-28 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/35 via-cyan-200/25 to-indigo-200/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-gradient-to-bl from-purple-300/30 via-indigo-200/25 to-sky-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-sky-200/30 via-blue-200/25 to-purple-200/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 w-[550px] h-[550px] bg-gradient-to-tl from-purple-300/30 via-violet-200/25 to-blue-200/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Left Column: Headline & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-start space-y-6 pt-4"
          >
            {/* Badge */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                NetSuite ERP Software
              </span>
            </div>

            {/* Headline Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Optimize Your Business Operations Effortlessly with the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900">
                #1 Cloud ERP – Oracle NetSuite
              </span>
            </h1>

            {/* Content Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Oracle NetSuite is the world’s fastest-growing Cloud-based ERP & CRM solution and the most customizable Software-as-a-Service (SaaS) platform. It enables companies to manage all key business processes in a single system.
            </p>

            {/* Content Paragraph 2 */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal bg-white/90 border border-slate-200/90 rounded-2xl p-5 shadow-sm">
              Oracle NetSuite is the #1 Cloud-based ERP Solution Platform with more than 43,000 customers worldwide. As an award-winning NetSuite Solution Provider and Implementation Partner, AGSuite helps companies manage their resources better with successful NetSuite deployments tailored to your exact business requirements.
            </p>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">#1 Cloud ERP Suite</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">43,000+ Customers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Certified Experts</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 w-full relative self-start lg:-mt-4"
          >
            {/* Form Container with Light Blue Gradient Background, Top Bar and Strong Shadow */}
            <div className="relative bg-gradient-to-b from-white via-sky-50/40 to-blue-50/80 p-6 sm:p-8 lg:p-9 rounded-3xl border border-blue-200/90 shadow-[0_20px_60px_-10px_rgba(59,130,246,0.2),0_8px_25px_-5px_rgba(99,102,241,0.12)] hover:shadow-[0_25px_70px_-10px_rgba(59,130,246,0.28)] transition-all duration-500 overflow-hidden w-full">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 z-20" />

              <div className="relative z-10">
                <div className="mb-5">
                  <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 bg-clip-text text-transparent tracking-tight">
                    Get a Free Consultation
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                    Connect with Certified NetSuite Solution Architects
                  </p>
                </div>

                {errorMessage && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

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
                        className={`w-full bg-white border ${
                          emailError ? "border-red-500 focus:border-red-600" : "border-slate-200 focus:border-blue-600"
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
                        placeholder="CTO / IT Director / CFO"
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
                      placeholder="Tell us about your NetSuite ERP requirements..."
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
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
