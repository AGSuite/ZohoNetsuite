"use client";

import { motion } from "framer-motion";

// Light Red/Pink Gradient Theme - FLIPPED LAYOUT (Form Left, Content Right)
export default function FooterFormRed() {
  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-red-50 via-pink-50 to-orange-50">
      {/* Enhanced multi-color warm gradient orbs */}
      <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-red-300/45 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-0 right-0 w-[750px] h-[750px] bg-pink-300/50 rounded-full blur-[130px] translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-300/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-rose-200/35 rounded-full blur-[110px] -translate-x-1/4 translate-y-1/4"></div>
      
      {/* White fade overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] bg-white/60 backdrop-blur-2xl border border-red-200/50 p-8 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* White transparent overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent rounded-[40px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT Side - Form (Flipped) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-3xl rounded-[32px] p-8 lg:p-12 border border-white/80 shadow-2xl relative">
                <div className="absolute inset-0 bg-linear-to-b from-red-50/50 to-transparent rounded-[32px] pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Request a Consultation</h3>
                  <p className="text-slate-600 font-medium mb-8">Tell us about your needs.</p>

                  <form className="grid grid-cols-1 gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input type="text" name="Company" className="w-full bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl px-5 py-4 text-slate-900 font-medium transition-all outline-none" placeholder="Company Name*" />
                      <input type="text" name="Last Name" className="w-full bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl px-5 py-4 text-slate-900 font-medium transition-all outline-none" placeholder="Full Name*" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input type="email" name="Email" className="w-full bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl px-5 py-4 text-slate-900 font-medium transition-all outline-none" placeholder="Business Email*" />
                      <input type="tel" name="Mobile" className="w-full bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl px-5 py-4 text-slate-900 font-medium transition-all outline-none" placeholder="Mobile Number*" />
                    </div>

                    <textarea name="Description" rows={3} className="w-full bg-slate-50 border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl px-5 py-4 text-slate-900 font-medium transition-all resize-none outline-none" placeholder="Your Requirements*"></textarea>

                    <button type="submit" className="w-full px-8 py-5 bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform">
                      Get Started
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
            
            {/* RIGHT Side - Content with Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="inline-block px-6 py-3 rounded-full border border-red-200 bg-red-50/80 mb-6 backdrop-blur-md shadow-sm">
                <span className="text-red-700 text-sm font-bold tracking-wider uppercase">Why Choose Us</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                Accelerate Your <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-red-600 via-pink-600 to-orange-600">
                  Business Growth
                </span>
              </h2>

              <p className="text-slate-700 text-xl font-medium leading-relaxed mb-10">
                Partner with industry experts who deliver results.
              </p>

              {/* Feature List with Icons */}
              <div className="space-y-5">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-red-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-red-500 to-pink-500 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">50+ Certified Experts</p>
                    <p className="text-slate-500 text-sm">NetSuite & Zoho professionals</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-pink-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-pink-500 to-orange-500 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">Rapid Deployment</p>
                    <p className="text-slate-500 text-sm">Go live in weeks, not months</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-orange-100 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">24/7 Support</p>
                    <p className="text-slate-500 text-sm">Always here when you need us</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
