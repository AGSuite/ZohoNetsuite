"use client";

import { motion } from "framer-motion";

// Design 1: Dark Theme with Cyan/Blue Glow (Matches Image 1)
export default function ContactFormDesign1() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0f1115]">
      {/* Enhanced Background Gradients/Glows with more vibrant colors */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/25 rounded-full blur-[140px] translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

      {/* Grainy Texture Overlay (Optional) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="rounded-[40px] bg-[#1a1d24]/80 backdrop-blur-3xl border border-white/5 p-8 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* White transparent fade overlay for depth */}
          <div className="absolute inset-0 bg-white/10 rounded-[40px] pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <div className="inline-block px-4 py-2 rounded-lg border border-white/10 bg-white/5 mb-12">
                  <span className="text-gray-300 text-sm tracking-wide">Contact</span>
                </div>

                <h2 className="text-5xl lg:text-7xl font-sans font-medium text-white mb-8 tracking-tight">
                  Get In touch <br />
                  with us!
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Have questions or ideas? We'd love to hear from you. Reach out anytime and let's connect.
                </p>
              </div>

              <div className="mt-16">
                <button className="px-8 py-4 bg-linear-to-r from-blue-900 to-blue-800 hover:from-blue-950 hover:to-blue-900 text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl">
                  Contact Us
                </button>
              </div>
            </motion.div>

            {/* Right Side - Dark Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0f1115] rounded-3xl p-8 lg:p-12 border border-white/5 shadow-inner"
            >
              <h3 className="text-2xl font-medium text-white mb-8">Contact Us</h3>

              <form className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">First Name</label>
                    <input type="text" name="Last Name" className="w-full bg-transparent border-b border-white/10 text-white pb-2 focus:border-white/50 focus:outline-none transition-all placeholder-transparent" placeholder="Name" />
                  </div>
                  <div className="group">
                    <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">Last Name</label>
                    <input type="text" name="Designation" className="w-full bg-transparent border-b border-white/10 text-white pb-2 focus:border-white/50 focus:outline-none transition-all placeholder-transparent" placeholder="Job" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">Mobile Number</label>
                    <input type="tel" name="Mobile" className="w-full bg-transparent border-b border-white/10 text-white pb-2 focus:border-white/50 focus:outline-none transition-all placeholder-transparent" placeholder="Mobile" />
                  </div>
                  <div className="group">
                    <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">Email Address</label>
                    <input type="email" name="Email" className="w-full bg-transparent border-b border-white/10 text-white pb-2 focus:border-white/50 focus:outline-none transition-all placeholder-transparent" placeholder="Email" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">Company</label>
                  <input type="text" name="Company" className="w-full bg-transparent border-b border-white/10 text-white pb-2 focus:border-white/50 focus:outline-none transition-all placeholder-transparent" placeholder="Company" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                     <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">Service Interest</label>
                     <select name="LEADCF5" className="w-full bg-transparent border-b border-white/10 text-white pb-2 focus:border-white/50 focus:outline-none transition-all appearance-none cursor-pointer">
                        <option value="" className="bg-[#0f1115]">Select Service</option>
                        <option value="NetSuite Product/Services" className="bg-[#0f1115]">Oracle NetSuite</option>
                        <option value="Zoho Products/Services" className="bg-[#0f1115]">Zoho Suite</option>
                     </select>
                  </div>
                  <div className="group">
                     <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">Annual Revenue</label>
                     <select name="LEADCF40" className="w-full bg-transparent border-b border-white/10 text-white pb-2 focus:border-white/50 focus:outline-none transition-all appearance-none cursor-pointer">
                        <option value="" className="bg-[#0f1115]">Select Revenue</option>
                        <option value="Under $500K" className="bg-[#0f1115]">Under $500K</option>
                        <option value="$1M+" className="bg-[#0f1115]">$1M+</option>
                        <option value="$10M+" className="bg-[#0f1115]">$10M+</option>
                     </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-gray-500 text-sm mb-2 group-focus-within:text-white transition-colors">Message</label>
                  <textarea name="Description" rows={2} className="w-full bg-transparent border-b border-white/10 text-white pb-2 focus:border-white/50 focus:outline-none transition-all resize-none placeholder-transparent" placeholder="Message"></textarea>
                </div>

                <div className="mt-4">
                  <button type="submit" className="px-8 py-3 bg-linear-to-r from-blue-900 to-blue-800 hover:from-blue-950 hover:to-blue-900 text-white font-bold rounded-lg transition-all duration-300 w-full lg:w-auto shadow-lg hover:shadow-xl">
                    Submit
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
