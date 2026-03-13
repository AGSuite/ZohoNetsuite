"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactFormZoho() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact-form" className="relative py-24 bg-[#0a0a0a] overflow-hidden scroll-mt-36">
            <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-red-500/20 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[110px] translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="rounded-[40px] bg-[#0d0d0d]/80 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left Side */}
                        <div className="p-8 lg:p-16 flex flex-col justify-center">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Ready for <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Zoho Mastery?</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8">
                                Leverage the power of the Zoho One suite to unify your business operations. Our experts help you implement, customize, and scale.
                            </p>
                            <div className="flex items-center gap-4 text-gray-400">
                                <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                                    <CheckCircle className="text-red-500" />
                                </div>
                                <span>Premier Zoho Consulting Partner</span>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="bg-white p-8 lg:p-12 relative">
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle className="text-green-600 w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                                    <p className="text-gray-500">Our Zoho consultant will contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-gray-700 text-xs font-bold uppercase mb-2">First Name</label>
                                            <input type="text" required className="w-full bg-red-50/30 border-2 border-red-100 rounded-xl px-4 py-3 outline-none focus:border-red-500 transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-xs font-bold uppercase mb-2">Last Name</label>
                                            <input type="text" required className="w-full bg-red-50/30 border-2 border-red-100 rounded-xl px-4 py-3 outline-none focus:border-red-500 transition-all" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-xs font-bold uppercase mb-2">Business Email</label>
                                        <input type="email" required className="w-full bg-red-50/30 border-2 border-red-100 rounded-xl px-4 py-3 outline-none focus:border-red-500 transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-xs font-bold uppercase mb-2">Message</label>
                                        <textarea rows={3} className="w-full bg-red-50/30 border-2 border-red-100 rounded-xl px-4 py-3 outline-none focus:border-red-500 transition-all resize-none"></textarea>
                                    </div>
                                    <button type="submit" className="w-full py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                                        <Send size={18} /> Send Application
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
