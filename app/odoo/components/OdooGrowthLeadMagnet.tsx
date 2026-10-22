"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const highlights = [
  "A clear view of sales, finance, and inventory",
  "Real-time insights for faster decisions",
  "One flexible platform that grows with you",
];

export default function OdooGrowthLeadMagnet() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
      <div className="relative mx-auto grid max-w-[1400px] items-stretch gap-12 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="flex h-full flex-col justify-center py-4"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#714b67]">
              <Sparkles size={15} /> Grow without limits
            </span>
            <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.45rem)] font-medium leading-[1.04] tracking-[-0.05em] text-slate-950">
              Join <span className="bg-gradient-to-r from-[#714b67] via-[#8b5cf6] to-[#5b21b6] bg-clip-text text-transparent">28 million happy users</span>
            </h2>
            <p className="mt-4 text-xl font-medium leading-8 text-slate-700">who grow their business with Odoo.</p>
            <p className="mt-5 text-base leading-7 text-slate-600">Bring your teams, workflows, and business data together in one connected workspace built around the way you operate.</p>

            <ul className="mt-7 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#8b5cf6]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="#contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#714b67] px-7 py-4 font-bold text-white shadow-xl shadow-[#714b67]/20 transition hover:-translate-y-1 hover:bg-[#5d3d56]">
              Start your Odoo journey <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="flex h-full items-center lg:-mr-16"
        >
          <Image
            src="/images/odoo/odoo-growth-dashboard-transparent.png"
            alt="Odoo-inspired business dashboard showing revenue, sales pipeline, CRM, finance, and inventory data"
            width={1536}
            height={1024}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full object-contain lg:w-[118%] lg:max-w-none lg:shrink-0"
          />
        </motion.div>
      </div>
    </section>
  );
}