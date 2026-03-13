"use client";

import React from "react";
import { motion } from "framer-motion";
import SubHero from "../components/SubHero";
import { Phone, Mail, Clock, HelpCircle, ArrowRight } from "lucide-react";

export default function ZohoSupportPage() {
  const channels = [
    {
      icon: Mail,
      title: "Email Support",
      contact: "zoho.support@agsuitetech.com",
      desc: "functional and technical Zoho queries."
    },
    {
      icon: Phone,
      title: "Instant Help",
      contact: "+91 (20) 1234 5678",
      desc: "For urgent system downtime or critical bugs."
    },
    {
      icon: Clock,
      title: "SLA Commitment",
      contact: "Fast turnaround",
      desc: "Dedicated support for all Zoho modules."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SubHero
        title="24/7"
        gradientText="Zoho Support"
        subtitle="Don't let technical hurdles slow you down. Our certified Zoho experts are here to ensure your business keeps running smoothly."
        breadcrumb="Support"
      />

      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Expert Assistance</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          From CRM customizations to Books troubleshooting, we provide end-to-end support for the entire Zoho One suite.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {channels.map((channel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-red-50/30 p-8 rounded-3xl border border-red-100 hover:border-red-300 hover:shadow-2xl transition-all group text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors text-red-600">
                <channel.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h4>
              <p className="text-red-600 font-bold mb-2">{channel.contact}</p>
              <p className="text-gray-500 text-sm">{channel.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#1a0000] to-[#2a0505] rounded-[3rem] p-12 text-white text-left relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Dedicated Support Portal</h3>
              <p className="text-red-100/70 text-lg mb-8">
                Raise tickets, track progress, and communicate directly with our engineers through our centralized portal.
              </p>
              <button className="bg-red-600 text-white font-bold px-10 py-4 rounded-full hover:bg-red-700 transition-all flex items-center gap-2">
                Access Portal <ArrowRight size={18} />
              </button>
            </div>
            <div className="hidden lg:flex justify-center">
              <HelpCircle size={120} className="text-red-600/20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
