"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

export default function ContactFormDesign4() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <section id="contact-form" className="relative py-24 bg-[#0a0a0a] overflow-hidden scroll-mt-36">
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-blue-500/30 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/25 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="rounded-[40px] bg-[#0d0d0d]/70 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-white/5 rounded-[40px]"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              {/* Left Side - Info */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col h-full justify-between p-8 lg:p-14 relative overflow-hidden"
              >
                {/* Background Grid and Illustration */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/Background/grid-white.svg')] opacity-[0.05] pointer-events-none z-10"></div>
                <div className="absolute inset-0 z-0 opacity-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-transparent to-blue-900/60"></div>
                </div>

                <div className="relative z-20">
                  <motion.h2
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]"
                  >
                    Ready to Transform{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                      Your Business?
                    </span>
                  </motion.h2>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="space-y-4 mb-10 text-gray-300"
                  >
                    <p className="text-lg">Take the first step towards streamlined operations and accelerated growth with Oracle NetSuite.</p>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="mb-10"
                  >
                    <Image
                      src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
                      alt="NetSuite Partner"
                      width={220}
                      height={70}
                      className="h-16 w-auto object-contain"
                      sizes="(max-width: 768px) 100vw, 220px"
                    />
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4 mb-8 text-white">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                      }}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <p className="text-3xl font-bold text-blue-400 mb-1">180+</p>
                      <p className="text-gray-400 text-sm">Successful Implementations</p>
                    </motion.div>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                      }}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <p className="text-3xl font-bold text-purple-400 mb-1">50+</p>
                      <p className="text-gray-400 text-sm">NetSuite Experts</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-white rounded-r-[40px] p-8 lg:p-12 h-full flex flex-col justify-center min-h-[600px]"
              >
                <div className="relative z-10 mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Get Expert Guidance</h3>
                  <p className="text-gray-600">Fill in your details and we'll reach out within 24 hours</p>
                </div>

                <div id="zoho-form-container" className="relative z-10 min-h-[400px]">
                  <Script
                    id="formScript409531000042578178"
                    src="https://crm.zoho.in/crm/WebFormServeServlet?rid=e430edbc2e9d0fbba9e7fcd14e46a4af82785285c7eff5944994c3d0be8aa260a0a7c25927e82f599b2157280a4b6bbegida4025099534dc3b967c9fff0c4ea1a7df4611418914a4ed8f134f08dfc085a1a&script=$sYG"
                    strategy="afterInteractive"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
