"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Send } from "lucide-react";
import MultiSelectDropdown from "@/app/components/shared/MultiSelectDropdown";

export default function LandingHero() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    (window as any).addAriaSelected409531000047791096 = function (event?: Event) {
      if (!event?.target) return;
      const optionElem = event.target as HTMLSelectElement;
      const previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
      if (previousSelectedOption) {
        previousSelectedOption.removeAttribute('aria-selected');
      }
      if (optionElem.options[optionElem.selectedIndex]) {
        optionElem.options[optionElem.selectedIndex].ariaSelected = 'true';
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("Last Name"),
      email: formData.get("LEADCF8"),
      role: formData.get("Designation") || "",
      mobile: formData.get("Mobile"),
      company: formData.get("Company"),
      service: formData.getAll("LEADCF166").join(", "),
      revenue: formData.get("LEADCF19"),
      requirements: formData.get("LEADCF123") || "",
      platform: "LandingPage-ERP"
    };

    try {
      await fetch("/api/contact/netsuite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      window.location.href = "https://www.agsuitetech.com/thank-you";
    } catch (err) {
      console.error("Submission error:", err);
      window.location.href = "https://www.agsuitetech.com/thank-you";
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────
  // 🎨  HERO BACKGROUND COLORS
  const hero = {
    // Section base gradient: diagonal light blue to purple flow
    sectionGradient: "from-blue-50/70 via-white to-purple-50/60",

    // Grid lines — clean subtle geometric pattern
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

          {/* Right Column: Contact Form — shifted up with -mt-4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 w-full relative self-start lg:-mt-4"
          >
            {/* Form Container with Light Blue Gradient Background, Top Bar and Strong Shadow */}
            <div className="relative bg-gradient-to-b from-white via-sky-50/40 to-blue-50/80 p-7 sm:p-9 lg:p-10 rounded-3xl border border-blue-200/90 shadow-[0_20px_60px_-10px_rgba(59,130,246,0.2),0_8px_25px_-5px_rgba(99,102,241,0.12)] hover:shadow-[0_25px_70px_-10px_rgba(59,130,246,0.28)] transition-all duration-500 overflow-hidden w-full">
              {/* Top Accent Gradient Bar (matching Benefits card design) */}
              <div className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 z-20" />

              <div className="relative z-10">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">
                    Get Expert Consultation
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 mt-1.5 font-medium">
                    Connect with Certified NetSuite Solution Architects
                  </p>
                </div>

                <form
                  id="webform409531000047791096"
                  name="WebToLeads409531000047791096"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="Last Name"
                        required
                        maxLength={80}
                        placeholder="John Doe"
                        className="w-full bg-white/90 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wider mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="Company"
                        required
                        maxLength={200}
                        placeholder="Acme Corp"
                        className="w-full bg-white/90 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="LEADCF8"
                        required
                        maxLength={100}
                        placeholder="john@company.com"
                        className="w-full bg-white/90 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wider mb-1.5">
                        Mobile Phone *
                      </label>
                      <input
                        type="text"
                        name="Mobile"
                        required
                        maxLength={30}
                        placeholder="+91 9876543210"
                        className="w-full bg-white/90 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Job Title & Services MultiSelect */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wider mb-1.5">
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="Designation"
                        maxLength={100}
                        placeholder="CTO / IT Director"
                        className="w-full bg-white/90 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base outline-none transition-all placeholder-slate-400 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wider mb-1.5">
                        Services *
                      </label>
                      <MultiSelectDropdown
                        id="LEADCF166"
                        name="LEADCF166"
                        placeholder="Select Services"
                        darkMenu={false}
                        bgClassName="bg-white/90 border border-slate-200 focus:border-blue-600 focus:bg-white shadow-2xs"
                        textColorClassName="text-slate-900"
                        options={[
                          "NetSuite Licenses",
                          "NetSuite Implementation",
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

                  {/* Annual Revenue */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wider mb-1.5">
                      Annual Revenue *
                    </label>
                    <select
                      id="LEADCF19"
                      name="LEADCF19"
                      required
                      onChange={(e) => (window as any).addAriaSelected409531000047791096?.(e)}
                      className="w-full bg-white/90 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base outline-none cursor-pointer transition-all appearance-none shadow-2xs"
                    >
                      <option value="-None-">-Select Revenue Range-</option>
                      <option value="Less than 8 Cr ($ 1M)">Less than 8 Cr ($ 1M)</option>
                      <option value="8 - 20 Cr ($ 1M - 2.5M)">8 - 20 Cr ($ 1M - 2.5M)</option>
                      <option value="20 - 40 Cr ($ 2.5M - 5M)">20 - 40 Cr ($ 2.5M - 5M)</option>
                      <option value="40 - 80 Cr ($ 5M - 10M)">40 - 80 Cr ($ 5M - 10M)</option>
                      <option value="80 - 120 Cr ($ 10M - 15M)">80 - 120 Cr ($ 10M - 15M)</option>
                      <option value="120 - 200 Cr ($ 15M - 25M)">120 - 200 Cr ($ 15M - 25M)</option>
                      <option value="200 - 400 Cr ($ 25M - 50M)">200 - 400 Cr ($ 25M - 50M)</option>
                      <option value="400 - 800 Cr ($ 50M - 100M)">400 - 800 Cr ($ 50M - 100M)</option>
                      <option value="800 - 2000 Cr ($ 100M - 250M)">800 - 2000 Cr ($ 100M - 250M)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-blue-950 uppercase tracking-wider mb-1.5">
                      Requirements / Message
                    </label>
                    <textarea
                      name="LEADCF123"
                      rows={2}
                      placeholder="Tell us about your project requirements..."
                      className="w-full bg-white/90 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-slate-900 text-sm sm:text-base outline-none transition-all placeholder-slate-400 resize-none shadow-2xs"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-extrabold text-white uppercase tracking-wider text-sm sm:text-base bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Submitting..." : "Get Free Quote & Demo"}</span>
                    <Send className="w-5 h-5" />
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
