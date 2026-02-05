"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Design 4: Dark Theme with White Form
export default function ContactFormDesign4() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Multi-color gradient glows - Blue, Purple, Pink */}
      <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-cyan-400/25 rounded-full blur-[130px] -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-indigo-500/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[110px] translate-x-1/3 translate-y-1/3"></div>

      {/* White transparent fade overlay for depth */}
      <div className="absolute inset-0 bg-white/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="rounded-[40px] bg-[#0d0d0d]/70 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Inner white fade for form container */}
          <div className="absolute inset-0 bg-white/5 rounded-[40px]"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

            {/* Left Side - Info with Big Question (Dark Theme) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col h-full justify-between p-8 lg:p-16"
            >
              <div>
                {/* Big Question Title */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
                  Ready to Transform{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                    Your Business?
                  </span>
                </h2>

                {/* Multiple Sublines */}
                <div className="space-y-4 mb-10">
                  <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                    Take the first step towards streamlined operations and accelerated growth with Oracle NetSuite.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                    Our certified NetSuite experts are here to understand your unique challenges and craft tailored solutions that drive real results.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed max-w-lg">
                    Whether you're looking to implement, optimize, or integrate NetSuite — we've got you covered.
                  </p>
                </div>

                {/* NetSuite Partner Logo */}
                <div className="mb-10">
                  <Image
                    src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
                    alt="NetSuite Partner"
                    width={220}
                    height={70}
                    className="h-16 w-auto object-contain"
                  />
                </div>

                {/* Trust Badges / Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <p className="text-3xl font-bold text-blue-400 mb-1">180+</p>
                    <p className="text-gray-400 text-sm font-medium">Successful Implementations</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <p className="text-3xl font-bold text-purple-400 mb-1">50+</p>
                    <p className="text-gray-400 text-sm font-medium">NetSuite Experts</p>
                  </div>
                </div>

                {/* Additional Trust Line */}
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Trusted by 180+ enterprises worldwide</span>
                </div>
              </div>

              <div className="mt-10">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]" suppressHydrationWarning>
                  Schedule a Free Consultation
                </button>
              </div>
            </motion.div>

            {/* Right Side - Full White Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white rounded-r-[40px] p-8 lg:p-12 h-full overflow-hidden"
            >
              {/* Light gradient color blobs in corners */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-100/40 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-purple-100/30 rounded-full blur-[70px] -translate-x-1/3 translate-y-1/3"></div>
              <div className="absolute top-1/2 right-0 w-[200px] h-[200px] bg-cyan-100/25 rounded-full blur-[60px] translate-x-1/2"></div>
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-indigo-100/20 rounded-full blur-[50px] translate-x-1/4 translate-y-1/4"></div>

              {/* Form Heading */}
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3">Get Expert Guidance</h3>
                <p className="text-gray-600 text-lg lg:text-xl mb-10">Fill in your details and we'll reach out within 24 hours</p>
              </div>

              <form className="relative z-10 space-y-5" suppressHydrationWarning>
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                    Full Name <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="Last Name"
                    className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
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
                    className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
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
                      className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
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
                      className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
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
                    className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                    placeholder="Company Inc."
                    suppressHydrationWarning
                  />
                </div>

                {/* Service Interest & Annual Revenue - Two columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                      Service Interest <span className="text-blue-500">*</span>
                    </label>
                    <select
                      name="LEADCF5"
                      className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                      suppressHydrationWarning
                    >
                      <option value="">Select Service</option>
                      <option value="NetSuite Implementation">NetSuite Implementation</option>
                      <option value="NetSuite Customization">NetSuite Customization</option>
                      <option value="NetSuite Integration">NetSuite Integration</option>
                      <option value="NetSuite Support">NetSuite Support</option>
                      <option value="NetSuite Training">NetSuite Training</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                      Annual Revenue <span className="text-blue-500">*</span>
                    </label>
                    <select
                      name="LEADCF40"
                      className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all outline-none appearance-none cursor-pointer shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                      suppressHydrationWarning
                    >
                      <option value="">Select Revenue</option>
                      <option value="Under $500K">Under $500K</option>
                      <option value="$500K - $1M">$500K - $1M</option>
                      <option value="$1M - $5M">$1M - $5M</option>
                      <option value="$5M - $10M">$5M - $10M</option>
                      <option value="$10M+">$10M+</option>
                    </select>
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-gray-700 text-xs font-medium uppercase tracking-wider mb-2">
                    Tell us about your requirements
                  </label>
                  <textarea
                    name="Description"
                    rows={3}
                    className="w-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-4 text-gray-900 transition-all resize-none outline-none placeholder-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(0,0,0,0.03)]"
                    placeholder="Share your project details..."
                  ></textarea>
                </div>

                {/* Privacy Checkbox and Submit Button Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-5 h-5 bg-gray-100 border border-gray-300 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all"></div>
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
                    className="shrink-0 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
                    suppressHydrationWarning
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
