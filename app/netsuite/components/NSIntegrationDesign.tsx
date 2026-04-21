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
                            <div className="relative aspect-[3/3] overflow-hidden group">
                                <Image
                                    src="/images/netsuiteimages/background/integration-image.png"
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
                                className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100"
                            >
                                Unified Architecture
                            </motion.span>
                            <h2 className="text-4xl md:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-600 leading-[1.1]">
                                Smart & Scalable NetSuite ERP Integrations That Power Your Business
                            </h2>
                            <div className="space-y-4">
                                <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                                    At AGSuite Technologies, we deliver end-to-end NetSuite integrations that unify your entire business ecosystem—from banking and CRM to eCommerce, payments, and logistics—ensuring seamless data flow across all functions.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                                    We have integrated NetSuite with platforms like Salesforce, Shopify, PayPal, and Amazon, enabling businesses to automate workflows, eliminate data silos, and gain real-time visibility to drive smarter decisions and scalable growth.
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "API Approach",
                                    desc: "Flexible and scalable integrations built for evolving needs.",
                                    icon: <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}><CheckCircle2 className="w-5 h-5" /></motion.div>,
                                    color: "from-blue-600 to-indigo-600"
                                },
                                {
                                    title: "Cloud Connectivity",
                                    desc: "Seamless connectivity across all enterprise systems.",
                                    icon: <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity }}><ArrowRight className="w-5 h-5 rotate-[-45deg]" /></motion.div>,
                                    color: "from-emerald-500 to-teal-600"
                                },
                                {
                                    title: "Real-Time Sync",
                                    desc: "Instant insights for faster financial decision-making.",
                                    icon: <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}><div className="w-1.5 h-1.5 bg-red-500 rounded-full absolute -top-1 -right-1 animate-pulse" /><ArrowRight className="w-5 h-5" /></motion.div>,
                                    color: "from-orange-500 to-red-600"
                                },
                                {
                                    title: "Secure Tunnel",
                                    desc: "Enterprise-grade security for safe data exchange.",
                                    icon: <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }}><CheckCircle2 className="w-5 h-5" /></motion.div>,
                                    color: "from-slate-700 to-slate-900"
                                }
                            ].map((info, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="relative p-7 rounded-2xl bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:-translate-y-1 group"
                                >
                                    {/* Geometric Background Detail */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-slate-50 to-transparent -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />

                                    {/* Left Accent Line */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${info.color} scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-r-sm`} />

                                    <div className="relative z-10">
                                        {/* Horizontal Header (Icon + Title) */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-11 h-11 shrink-0 rounded-xl bg-linear-to-br ${info.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-500`}>
                                                {info.icon}
                                            </div>
                                            <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                                                {info.title}
                                            </h4>
                                        </div>

                                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                            {info.desc}
                                        </p>
                                    </div>
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
