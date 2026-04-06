"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const NSIntegrationDesign = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-white">

            <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">






                    {/* Left side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden w-full">
                            <div className="relative aspect-[4/3] overflow-hidden group">
                                <Image
                                    src="/images/lap/integration design.png"
                                    alt="NetSuite Integration Design"
                                    fill
                                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>


                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-8"
                    >
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider"
                            >
                                Unified Architecture
                            </motion.span>
                            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-600 leading-[1.1]">
                                Seamless NetSuite Integration Design
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                Connect NetSuite to your entire tech stack with high-performance integration patterns. Our designs ensure data consistency, security, and scalability across all enterprise functions.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "API-First Approach", desc: "Robust REST/SOAP endpoint architecture." },
                                { title: "Cloud Integration", desc: "Native cloud-to-cloud synchronization." },
                                { title: "Real-time Processing", desc: "Zero-latency business intelligence flow." },
                                { title: "Secure Data Tunnel", desc: "Enterprise-grade encryption protocols." }
                            ].map((info, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100 group"
                                >
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{info.title}</h4>
                                    <p className="text-sm text-slate-500 mt-1">{info.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            <Link
                                href="/netsuite/solutions"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all group shadow-xl hover:shadow-blue-500/25"
                            >
                                Explore Details <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default NSIntegrationDesign;
