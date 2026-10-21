"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutUsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 56]);

  return (
    <section ref={heroRef} className="relative h-[115vh] bg-white pt-20" aria-labelledby="odoo-about-title">
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-hidden">
        <motion.div style={{ scale, borderRadius }} className="relative h-full overflow-hidden bg-[#171020] shadow-2xl">
          <Image
            src="/images/aboutus/aboutusbg.webp"
            alt="AGSuite team delivering connected Odoo solutions"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#271635]/72 to-[#643b9f]/28" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />

          <div className="relative mx-auto flex h-full max-w-[1480px] items-center px-6 sm:px-8 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl text-white">
              <h1 id="odoo-about-title" className="text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                Business systems shaped around how your teams work.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                We combine process understanding, ERP experience, and practical Odoo delivery to help organizations build connected operations that people can confidently use and improve.
              </p>
              <Link href="#contact-form" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#643b9f] shadow-xl transition hover:-translate-y-1 hover:bg-purple-50">
                Talk to our Odoo team <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
