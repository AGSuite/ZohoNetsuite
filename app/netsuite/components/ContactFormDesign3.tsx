"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Design 3: Dark Left with Yellow/Lime Glow & White Right Form (Matches Image 3)
export default function ContactFormDesign3() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#111] lg:bg-linear-to-r lg:from-[#111] lg:to-[#f0f0f0]">
      {/* Enhanced yellow/lime glows with additional warmth */}
      <div className="absolute top-0 left-0 w-full h-full lg:w-1/2 bg-[#111]">
         <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-lime-400/30 rounded-full blur-[120px]"></div>
         <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[100px] -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-green-400/15 rounded-full blur-[90px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden">
          
          {/* Left Side - Dark with Icon */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] p-12 lg:p-20 relative flex flex-col justify-center items-center text-center lg:items-start lg:text-left min-h-[600px]"
          >
             <h2 className="text-4xl lg:text-5xl font-medium text-white mb-12">
               Send a request
             </h2>

             {/* Placeholder for 3D Bubble Icon */}
             <div className="relative w-64 h-64 mb-12 animate-float">
                <div className="absolute inset-0 bg-linear-to-tr from-gray-700 to-gray-400 rounded-full opacity-30 blur-xl"></div>
                {/* Simulated 3D Icon using CSS/SVG */}
                <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="80" cy="100" r="40" fill="url(#grad1)" className="opacity-90" />
                   <circle cx="120" cy="80" r="50" fill="url(#grad2)" />
                   <defs>
                      <radialGradient id="grad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 80) rotate(50) scale(40)">
                         <stop stopColor="#aaa" />
                         <stop offset="1" stopColor="#333" />
                      </radialGradient>
                      <radialGradient id="grad2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 60) rotate(50) scale(50)">
                         <stop stopColor="#fff" />
                         <stop offset="1" stopColor="#666" />
                      </radialGradient>
                   </defs>
                </svg>
             </div>
          </motion.div>

          {/* Right Side - White Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-12 lg:p-20 flex flex-col justify-center"
          >
            <form className="space-y-5">
               <div className="group">
                  <label className="block text-gray-500 text-sm mb-2">Your full name</label>
                  <input type="text" name="Last Name" className="w-full bg-[#f3f4f6] border border-transparent focus:bg-white focus:border-gray-300 rounded-lg px-4 py-3 text-gray-900 transition-all outline-none" placeholder="John Smith" />
               </div>

               <div className="group">
                  <label className="block text-gray-500 text-sm mb-2">Email</label>
                  <input type="email" name="Email" className="w-full bg-[#f3f4f6] border border-transparent focus:bg-white focus:border-gray-300 rounded-lg px-4 py-3 text-gray-900 transition-all outline-none" placeholder="name@yourcompany.com" />
               </div>

               <div className="group">
                  <label className="block text-gray-500 text-sm mb-2">Phone number</label>
                  <input type="tel" name="Mobile" className="w-full bg-[#f3f4f6] border border-transparent focus:bg-white focus:border-gray-300 rounded-lg px-4 py-3 text-gray-900 transition-all outline-none" placeholder="+1" />
               </div>

               <div className="group">
                  <label className="block text-gray-500 text-sm mb-2">Details</label>
                  <textarea name="Description" rows={3} className="w-full bg-[#f3f4f6] border border-transparent focus:bg-white focus:border-gray-300 rounded-lg px-4 py-3 text-gray-900 transition-all outline-none resize-none" placeholder="Provide us with further details"></textarea>
               </div>

               <button type="submit" className="w-full bg-[#dfff00] hover:bg-[#cbe600] text-black font-bold py-4 rounded-xl transition-colors shadow-lg mt-4">
                  Send a request
               </button>
            </form>
          </motion.div>
        
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
