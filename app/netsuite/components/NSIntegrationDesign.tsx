"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
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
                        <div className="relative overflow-hidden w-full flex justify-center">
                            <div className="relative aspect-[3/3] overflow-hidden w-[92%] mx-auto">
                                <Image
                                    src="/images/lap/integration image.png"
                                    alt="NetSuite Integration Design"
                                    fill
                                    priority
                                    loading="eager"
                                    className="object-contain"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
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



                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            <Link
                                href="/netsuite-integration"
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




