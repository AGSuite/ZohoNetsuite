"use client";

import { motion } from "framer-motion";

// Design 2: Green Glow with Glass Form (Matches Image 2)
export default function ContactFormDesign2() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050505]">
      {/* Enhanced Background Glows with multiple colors */}
      <div className="absolute top-0 left-1/2 w-[1000px] h-[600px] bg-green-500/25 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-400/15 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-emerald-500/20 rounded-full blur-[130px] -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Large Text Watermark */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 font-medium text-[12vw] text-white/5 pointer-events-none select-none tracking-tight leading-none">
        CONTACT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Side - Info & Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-300 text-xs font-semibold tracking-wider uppercase">Contact</span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6">Get in touch</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Have questions or ready to transform your business with AI automation?
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="group p-5 rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-white/10 transition-colors">
                         <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                         <p className="text-white font-medium">Email us</p>
                         <p className="text-gray-500 text-sm">contact@agsuitetech.com</p>
                      </div>
                   </div>
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                   </div>
                </div>
              </div>

              {/* Call Card */}
               <div className="group p-5 rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-white/10 transition-colors">
                         <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                         <p className="text-white font-medium">Call us</p>
                         <p className="text-gray-500 text-sm">+(1) 456-7890</p>
                      </div>
                   </div>
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                   </div>
                </div>
              </div>

               {/* Location Card */}
               <div className="group p-5 rounded-2xl bg-[#111] border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-white/10 transition-colors">
                         <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                         <p className="text-white font-medium">Our location</p>
                         <p className="text-gray-500 text-sm">New York, USA</p>
                      </div>
                   </div>
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/3 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              {/* White transparent fade overlay for depth */}
              <div className="absolute inset-0 bg-white/10 rounded-3xl pointer-events-none"></div>
              
              <form className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="group">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block ml-1">Full Name</label>
                     <input type="text" name="Last Name" className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/40 rounded-xl px-4 py-3 text-white transition-all outline-none" placeholder="Name" />
                  </div>
                   <div className="group">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block ml-1">Email</label>
                     <input type="email" name="Email" className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/40 rounded-xl px-4 py-3 text-white transition-all outline-none" placeholder="Email" />
                  </div>
                   <div className="group">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block ml-1">Message</label>
                     <textarea name="Description" rows={5} className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/40 rounded-xl px-4 py-3 text-white transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full bg-linear-to-r from-blue-900 to-blue-800 hover:from-blue-950 hover:to-blue-900 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  Submit
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
