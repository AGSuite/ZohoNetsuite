"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { motion, useInView } from "framer-motion";



/* ------------ Main hero images (keep same paths) ------------ */

const IMAGES = {
  left1: "/images/people/laptopgirl3.webp",
  left2: "/images/people/laptopmen.webp",
  center: "/images/Dashboard/NetsuiteDashboard.webp",
  right1: "/images/people/laptopmen2.webp",
  right2: "/images/people/laptopgirl.webp",
} as const;

const logos = [
  { id: "affle", logo: "/images/assets/affle tech.webp", name: "Affle", link: "https://www.affle.com" },
  { id: "tyfone", logo: "/images/assets/tyfone tech.webp", name: "Tyfone", link: "https://www.tyfone.com" },
  { id: "airling", logo: "/images/assets/airling tech.webp", name: "Airling", link: "#" },
  { id: "videoverse", logo: "/images/assets/video verse tech.webp", name: "VideoVerse", link: "https://www.videoverse.com" },
  { id: "quickheal", logo: "/images/assets/quickheal tech.webp", name: "Quick Heal", link: "https://www.quickheal.com" },
  { id: "controlservice", logo: "/images/assets/control service.webp", name: "Control Service", link: "#" },
  { id: "uniacco", logo: "/images/assets/uniacco service.webp", name: "UniAcco", link: "https://www.uniacco.com" },
  { id: "dlz", logo: "/images/assets/dlz service.webp", name: "DLZ", link: "#" },
  { id: "indovance", logo: "/images/assets/indovance service.webp", name: "Indovance", link: "https://www.indovance.com" },
  { id: "pace", logo: "/images/assets/pace services.webp", name: "Pace", link: "#" },
];

const NSDashboardHero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="agsuite-cloud-solutions-heading"
      className="relative w-full bg-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-5 pt-12 sm:px-6 md:pt-15 lg:px-8">
        {/* Headline + subline + CTA */}
        <header className="max-w-3xl text-center">
          <motion.h1
            id="agsuite-cloud-solutions-heading"
            className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Deliver smarter cloud solutions with{" "}
            <span className="bg-linear-to-r from-red-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              AGSuite experts
            </span>
          </motion.h1>
          <motion.p
            className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500 sm:text-[13px]"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Powering digital transformation for growing businesses worldwide
          </motion.p>
        </header>

        {/* Dashboard + people images */}
        <div className="relative mt-10 w-full max-w-6xl">
          {/* Mobile: just the center dashboard */}
          <motion.div
            className="block md:hidden"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={
              isInView
                ? { y: 0, opacity: 1, scale: 1 }
                : { y: 40, opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="relative mx-auto h-64 max-w-md overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={IMAGES.center}
                alt="AGSuite cloud dashboard overview"
                fill
                sizes="(max-width: 768px) 90vw, 500px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Desktop / Tablet collage layout */}
          <div className="hidden items-center justify-center md:flex">
            {/* Left images (come from right) */}
            <motion.div
              className="hidden lg:block -mr-2"
              initial={{ x: 80, opacity: 0 }}
              animate={
                isInView
                  ? { x: 0, opacity: 1 }
                  : { x: 80, opacity: 0 }
              }
              transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            >
              {/* Smallest, pushed back */}
              <div className="relative h-40 w-32 overflow-hidden rounded-2xl shadow-lg lg:h-44 lg:w-36 xl:h-72 xl:w-30 translate-y-6">
                <Image
                  src={IMAGES.left1}
                  alt="AGSuite consultant collaborating with client"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 150px, 120px"
                />
              </div>
            </motion.div>

            <motion.div
              className="hidden md:block -mr-3"
              initial={{ x: 90, opacity: 0 }}
              animate={
                isInView
                  ? { x: 0, opacity: 1 }
                  : { x: 90, opacity: 0 }
              }
              transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
            >
              {/* Mid-size, slightly behind center */}
              <div className="relative h-52 w-40 overflow-hidden rounded-2xl shadow-lg lg:h-60 lg:w-48 xl:h-94 xl:w-42 translate-y-2">
                <Image
                  src={IMAGES.left2}
                  alt="AGSuite team discussing implementation strategy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 200px, 160px"
                />
              </div>
            </motion.div>

            {/* Center dashboard (big, comes from bottom first) */}
            <motion.div
              className="relative z-20 shrink-0"
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={
                isInView
                  ? { y: 0, opacity: 1, scale: 1 }
                  : { y: 60, opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative h-72 w-[420px] overflow-hidden rounded-3xl shadow-2xl bg-white lg:h-80 lg:w-[520px] xl:h-[420px] xl:w-[680px]">
                <Image
                  src={IMAGES.center}
                  alt="AGSuite cloud dashboard showing business insights"
                  fill
                  sizes="(min-width: 1280px) 680px, (min-width: 1024px) 520px, 420px"
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right images (come from left) */}
            <motion.div
              className="hidden md:block -ml-3"
              initial={{ x: -90, opacity: 0 }}
              animate={
                isInView
                  ? { x: 0, opacity: 1 }
                  : { x: -90, opacity: 0 }
              }
              transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}
            >
              {/* Mid-size, slightly behind center */}
              <div className="relative h-52 w-40 overflow-hidden rounded-2xl shadow-lg lg:h-60 lg:w-48 xl:h-94 xl:w-42 translate-y-2">
                <Image
                  src={IMAGES.right1}
                  alt="Customer using AGSuite solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 200px, 160px"
                />
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block -ml-2"
              initial={{ x: -80, opacity: 0 }}
              animate={
                isInView
                  ? { x: 0, opacity: 1 }
                  : { x: -80, opacity: 0 }
              }
              transition={{ duration: 0.9, delay: 1.4, ease: "easeOut" }}
            >
              {/* Smallest, pushed back */}
              <div className="relative h-40 w-32 overflow-hidden rounded-2xl shadow-lg lg:h-44 lg:w-36 xl:h-72 xl:w-30 translate-y-6">
                <Image
                  src={IMAGES.right2}
                  alt="Happy AGSuite client"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 150px, 120px"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* TRUSTED PARTNERS MARQUEE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="w-full border-t border-gray-200 pt-12 mt-16"
        >
          <p className="mb-8 text-center text-xl font-medium uppercase text-gray-700 tracking-wide">
            Trusted by industry leading brands
          </p>

          <div className="relative w-full overflow-hidden py-6">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="inline-flex">
                  <a
                    href={logo.link || "#"}
                    target={logo.link !== "#" ? "_blank" : undefined}
                    rel={logo.link !== "#" ? "noopener noreferrer" : undefined}
                    className="flex h-12 w-40 sm:h-16 sm:w-44 rounded-2xl items-center justify-center bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                    aria-label={logo.name}
                  >
                    <Image
                      src={logo.logo}
                      alt={`${logo.name} logo`}
                      width={160}
                      height={50}
                      className="h-8 sm:h-13 w-auto object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50.5%); }
        }
        .animate-marquee {
        display: inline-flex;
        animation: marquee 30s linear infinite;
        will-change: transform;
        }
        .animate-marquee:hover {
        animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default NSDashboardHero;
