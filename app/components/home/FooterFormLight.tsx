"use client";

import { motion } from "framer-motion";

// Light White/Blue Gradient Theme with Full Image on Left
export default function FooterFormLight() {
  return (
    <section className="relative py-0 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Enhanced multi-color gradient orbs */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-blue-300/40 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-300/35 rounded-full blur-[130px] -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[100px]"></div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[850px]">

          {/* Left Side - Full Image with Dark Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] lg:min-h-full"
          >
            {/* Full Background Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Background/teambg.webp"
              alt="Team Collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Black Overlay - Stronger as requested */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

            {/* Decorative gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>

            {/* Content on top of overlay */}
            <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-16">


              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
              >
                Let's Start{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                  Working Together
                </span>
              </motion.h2>

              {/* Subline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-white/80 text-xl lg:text-2xl font-medium leading-relaxed mb-10 max-w-lg"
              >
                Transform your business with our award-winning expertise. We turn complex challenges into automated success stories.
              </motion.p>

              {/* NetSuite Partner Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mb-10"
              >
                <img src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png" alt="NetSuite Partner" className="h-16 w-auto brightness-0 invert" />
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 gap-4 max-w-md mb-10"
              >
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <p className="text-3xl font-bold text-blue-400 mb-1">180+</p>
                  <p className="text-white/70 text-sm font-medium">Successful Projects</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <p className="text-3xl font-bold text-cyan-400 mb-1">100%</p>
                  <p className="text-white/70 text-sm font-medium">Client Satisfaction</p>
                </div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center gap-6 text-white/60 text-sm"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>50+ Experts</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - ContactFormDesign4 Style White Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-white p-8 lg:p-12 xl:p-16 h-full overflow-hidden flex flex-col justify-center"
          >
            {/* Light gradient color blobs in corners */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-indigo-100/40 rounded-full blur-[70px] -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 right-0 w-[200px] h-[200px] bg-cyan-100/35 rounded-full blur-[60px] translate-x-1/2"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[180px] h-[180px] bg-purple-100/25 rounded-full blur-[50px]"></div>

            {/* Form Heading */}
            <div className="relative z-10 mb-8">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3">Get Expert Guidance</h3>
              <p className="text-gray-600 text-lg lg:text-xl">Fill in your details and we'll reach out within 24 hours</p>
            </div>

            <form className="relative z-10 space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                  Full Name <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  name="Last Name"
                  className="w-full bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                  placeholder="John Doe"
                />
              </div>

              {/* Business Email */}
              <div>
                <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                  Business Email <span className="text-blue-500">*</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  className="w-full bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                  placeholder="john@company.com"
                />
              </div>

              {/* Job Title & Mobile - Two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                    Job Title <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="Designation"
                    className="w-full bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                    placeholder="CTO"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                    Mobile Number <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="Mobile"
                    className="w-full bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                  Company Name <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  name="Company"
                  className="w-full bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                  placeholder="Company Inc."
                />
              </div>

              {/* Service Interest & Annual Revenue - Two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                    Service Interest <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="LEADCF5"
                      className="w-full bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                    >
                      <option value="">Select Service</option>
                      <option value="NetSuite Product/Services">Oracle NetSuite</option>
                      <option value="Zoho Products/Services">Zoho Suite</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                    Annual Revenue <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="LEADCF40"
                      className="w-full bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                    >
                      <option value="">Select Revenue</option>
                      <option value="Under $500K">Under $500K</option>
                      <option value="$500K - $1M">$500K - $1M</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M - $10M">$5M - $10M</option>
                      <option value="$10M+">$10M+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                  More Details / Questions <span className="text-blue-500">*</span>
                </label>
                <textarea
                  name="Description"
                  rows={3}
                  className="w-full bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all resize-none outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                  placeholder="Type your questions or project details here..."
                ></textarea>
              </div>

              {/* Privacy Checkbox and Submit Button Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-5 h-5 bg-gray-100 border-2 border-gray-300 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all"></div>
                    <svg className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-500 text-sm leading-tight">
                    I agree to the Privacy Policy and Terms of Service
                  </span>
                </label>

                <button
                  type="submit"
                  className="shrink-0 px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]"
                >
                  Get Free Consultation
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
