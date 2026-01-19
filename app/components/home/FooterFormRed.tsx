"use client";

import { motion } from "framer-motion";

// Light Red/Pink Gradient Theme - FLIPPED LAYOUT (Form Left, Content Right)
export default function FooterFormRed() {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Rainbow Glow Background */}
      <div
        className="absolute inset-x-0 top-0 h-[500px] mx-auto w-full opacity-10 blur-[100px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #ef4444 -0.55%, #ec4899 22.86%, #f97316 48.36%, #ea580c 73.33%, #fbbf24 99.34%)"
        }}
      />

      {/* Background Orbs - Soft Red/Orange */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

      {/* LEFT Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[40%] p-10 lg:p-16 flex flex-col justify-center relative z-10"
      >
        <h2 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
          Accelerate Your <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-orange-600">
            Digital Evolution
          </span>
        </h2>

        <div className="space-y-4 mb-10 max-w-lg">
          <p className="text-slate-700 text-lg leading-relaxed">
            Take the first step towards streamlined operations and accelerated growth with Oracle NetSuite.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Our certified NetSuite experts are here to understand your unique challenges and craft tailored solutions that drive real results.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Whether you're looking to implement, optimize, or integrate NetSuite — we've got you covered.
          </p>
        </div>

        {/* NetSuite Partner Logo */}
        <div className="mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/netsuiteimages/netsuitelogos/netsuiteblack.png"
            alt="NetSuite Partner"
            className="h-14 w-auto"
          />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-6 max-w-lg mb-8">
          <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-red-100 shadow-sm group hover:bg-white/80 transition-colors">
            <p className="text-3xl font-bold text-red-600 mb-1 group-hover:scale-110 transition-transform origin-left">180+</p>
            <p className="text-slate-600 text-sm font-medium">Successful Implementations</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-orange-100 shadow-sm group hover:bg-white/80 transition-colors">
            <p className="text-3xl font-bold text-orange-600 mb-1 group-hover:scale-110 transition-transform origin-left">50+</p>
            <p className="text-slate-600 text-sm font-medium">NetSuite Experts</p>
          </div>
        </div>

        {/* Additional Trust Line */}
        <div className="flex items-center gap-3 text-slate-600 text-sm">
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Trusted by 180+ enterprises worldwide</span>
        </div>
      </motion.div>

      {/* RIGHT Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-[60%] flex flex-col justify-center p-10 lg:p-24 relative z-10"
      >
        <div className="max-w-2xl w-full mx-auto bg-white/80 backdrop-blur-xl p-8 lg:p-12 rounded-[40px] border border-white/60 shadow-2xl relative overflow-hidden group">
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="mb-8 relative z-10">
            <h3 className="text-4xl font-bold text-slate-900 mb-3">Start Your Growth Journey</h3>
            <p className="text-slate-600">Connect with our team for a personalized growth strategy.</p>
          </div>

          <form className="space-y-6 relative z-10">
            {/* Full Name */}
            <div>
              <label className="block text-slate-700 text-xs font-medium uppercase tracking-wider mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="Last Name"
                className="w-full bg-white border border-slate-200 focus:border-red-500 focus:bg-red-50/30 focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400"
                placeholder="John Doe"
              />
            </div>

            {/* Business Email */}
            <div>
              <label className="block text-slate-700 text-xs font-medium uppercase tracking-wider mb-2">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="Email"
                className="w-full bg-white border border-slate-200 focus:border-red-500 focus:bg-red-50/30 focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400"
                placeholder="john@company.com"
              />
            </div>

            {/* Job Title & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-slate-700 text-xs font-medium uppercase tracking-wider mb-2">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Designation"
                  className="w-full bg-white border border-slate-200 focus:border-red-500 focus:bg-red-50/30 focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400"
                  placeholder="CTO"
                />
              </div>
              <div>
                <label className="block text-slate-700 text-xs font-medium uppercase tracking-wider mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="Mobile"
                  className="w-full bg-white border border-slate-200 focus:border-red-500 focus:bg-red-50/30 focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-slate-700 text-xs font-medium uppercase tracking-wider mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="Company"
                className="w-full bg-white border border-slate-200 focus:border-red-500 focus:bg-red-50/30 focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400"
                placeholder="Company Inc."
              />
            </div>

            {/* Service & Revenue */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-slate-700 text-xs font-medium uppercase tracking-wider mb-2">
                  Service Interest <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="LEADCF5"
                    className="w-full bg-white border border-slate-200 focus:border-red-500 focus:bg-red-50/30 focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3 text-slate-900 outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Select Service</option>
                    <option value="NetSuite Implementation">NetSuite Implementation</option>
                    <option value="NetSuite Customization">NetSuite Customization</option>
                    <option value="NetSuite Integration">NetSuite Integration</option>
                    <option value="NetSuite Support">NetSuite Support</option>
                    <option value="NetSuite Training">NetSuite Training</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-slate-700 text-xs font-medium uppercase tracking-wider mb-2">
                  Annual Revenue <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="LEADCF40"
                    className="w-full bg-white border border-slate-200 focus:border-red-500 focus:bg-red-50/30 focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3 text-slate-900 outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Select Revenue</option>
                    <option value="Under $500K">Under $500K</option>
                    <option value="$500K - $1M">$500K - $1M</option>
                    <option value="$1M - $5M">$1M - $5M</option>
                    <option value="$5M - $10M">$5M - $10M</option>
                    <option value="$10M+">$10M+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-slate-700 text-xs font-medium uppercase tracking-wider mb-2">
                Tell us about your requirements
              </label>
              <textarea
                name="Description"
                rows={3}
                className="w-full bg-white border border-slate-200 focus:border-red-500 focus:bg-red-50/30 focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3 text-slate-900 outline-none transition-all resize-none placeholder:text-slate-400"
                placeholder="Share your project details..."
              ></textarea>
            </div>

            {/* Checkbox and Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-5 h-5 bg-white border border-slate-300 rounded peer-checked:bg-red-600 peer-checked:border-red-600 transition-all"></div>
                  <svg className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-600 text-sm leading-tight group-hover:text-slate-700 transition-colors">
                  I agree to the Privacy Policy and Terms of Service
                </span>
              </label>

              <button
                type="submit"
                className="shrink-0 px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
