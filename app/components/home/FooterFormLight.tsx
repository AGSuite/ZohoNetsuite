"use client";

import { motion } from "framer-motion";

import Image from "next/image";

// Light White/Blue Gradient Theme with Full Image on Left
export default function FooterFormLight() {
  return (
    <section id="contact-form" className="relative py-0 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 scroll-mt-36">
      {/* Enhanced multi-color gradient orbs */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-blue-300/40 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-300/35 rounded-full blur-[130px] -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[100px]"></div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left Side - Full Image with Dark Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[350px] lg:min-h-full"
          >
            {/* Full Background Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src="/images/Background/teambg.webp"
              alt="Team Collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Black Overlay - Stronger as requested */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

            {/* Decorative gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>

            {/* Content on top of overlay */}
            <div className="relative z-10 flex flex-col justify-center h-full p-6 lg:p-10">


              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight tracking-tight"
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
                className="text-white/80 text-sm sm:text-base font-medium leading-relaxed mb-6 max-w-lg"
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
                <Image 
                  src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png" 
                  alt="NetSuite Partner" 
                  width={200}
                  height={64}
                  className="h-16 w-auto brightness-0 invert object-contain" 
                />
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
            className="relative bg-white p-5 sm:p-6 lg:p-7 h-full overflow-hidden flex flex-col justify-center"
          >
            {/* Light gradient color blobs in corners */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-indigo-100/40 rounded-full blur-[70px] -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 right-0 w-[200px] h-[200px] bg-cyan-100/35 rounded-full blur-[60px] translate-x-1/2"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[180px] h-[180px] bg-purple-100/25 rounded-full blur-[50px]"></div>

            {/* Form Heading */}
            <div className="relative z-10 mb-4">
              <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">Let’s Get Started !!</h3>
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
                  suppressHydrationWarning
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
                  suppressHydrationWarning
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
                    suppressHydrationWarning
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
                    suppressHydrationWarning
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
                  suppressHydrationWarning
                />
              </div>

              {/* Service Interest & Annual Revenue - Two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                    NetSuite Solution <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="LEADCF5"
                      className="w-full bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                      suppressHydrationWarning
                    >
                      <option value="">Select NetSuite Solution</option>
                      <option value="NetSuite ERP">NetSuite ERP</option>
                      <option value="NetSuite CRM">NetSuite CRM</option>
                      <option value="NetSuite OneWorld">NetSuite OneWorld</option>
                      <option value="NetSuite SuiteCommerce">NetSuite SuiteCommerce</option>
                      <option value="NetSuite Planning & Budgeting">NetSuite Planning & Budgeting</option>
                      <option value="NetSuite SuiteProject Pro">NetSuite SuiteProject Pro</option>
                      <option value="NetSuite Analytics Warehouse">NetSuite Analytics Warehouse</option>
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
                      suppressHydrationWarning
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

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="formsubmit"
                  className="w-full sm:w-auto shrink-0 px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] uppercase tracking-widest text-sm cursor-pointer"
                  suppressHydrationWarning
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}




