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

// pad: extra inner padding (0–12) to visually balance logos with unusual aspect ratios
// unopt: true = skip Next.js image optimisation (for tiny/low-res PNGs)
const logos = [
  { id: "affle",          logo: "/images/assets/affle%20tech.webp",                          name: "Affle",         link: "https://www.affle.com",          pad: 4               },
  { id: "tyfone",         logo: "/images/assets/tyfone%20tech.webp",                         name: "Tyfone",        link: "https://www.tyfone.com",         pad: 4               },
  { id: "airling",        logo: "/images/assets/airling%20tech.webp",                        name: "Airling",       link: "#",                             pad: 4               },
  { id: "videoverse",     logo: "/images/netuite%20client%20images/videoverse.png",          name: "VideoVerse",    link: "https://www.videoverse.com",     pad: 1, unopt: true  },  // 318×159 low-res
  { id: "quickheal",      logo: "/images/assets/quickheal%20tech.webp",                      name: "Quick Heal",    link: "https://www.quickheal.com",      pad: 7               },
  { id: "controlservice", logo: "/images/assets/control%20service.webp",                     name: "Control Svc",   link: "#",                             pad: 4               },
  { id: "uniacco",        logo: "/images/netuite%20client%20images/uniacco.png",             name: "UniAcco",       link: "https://www.uniacco.com",        pad: 4               },
  { id: "dlz",            logo: "/images/assets/dlz%20service.webp",                         name: "DLZ",           link: "#",                             pad: 4               },
  { id: "indovance",      logo: "/images/netuite%20client%20images/Indovance-new-logo.webp", name: "Indovance",     link: "https://www.indovance.com",      pad: 5               },
  { id: "pace",           logo: "/images/assets/pace%20services.webp",                       name: "Pace",          link: "#",                             pad: 4               },
  { id: "aidash",         logo: "/images/netuite%20client%20images/aidashlogo.png",          name: "AiDash",        link: "#",                             pad: 4, unopt: true  },  // 200×100 low-res
  { id: "controlcase",    logo: "/images/netuite%20client%20images/controlcase.png",         name: "ControlCase",   link: "#",                             pad: 4               },
  { id: "escalent",       logo: "/images/netuite%20client%20images/escalent.webp",           name: "Escalent",      link: "#",                             pad: 5               },
  { id: "finn",           logo: "/images/netuite%20client%20images/FINN-Logo(1).jpg",        name: "Finn",          link: "#",                             pad: 4               },
  { id: "flatworld",      logo: "/images/netuite%20client%20images/flatworld.png",           name: "Flatworld",     link: "#",                             pad: 9               },  // aspect 3.51 — large orb icon
  { id: "coastal",        logo: "/images/netuite%20client%20images/image%20(13).png",        name: "Coastal",       link: "#",                             pad: 4               },
  { id: "kale",           logo: "/images/netuite%20client%20images/kale.png",                name: "Kale",          link: "#",                             pad: 8               },  // aspect 3.11 — has tagline
  { id: "keycraft",       logo: "/images/netuite%20client%20images/keycraft.png",            name: "Keycraft",      link: "#",                             pad: 8               },  // aspect 2.82 — tall & wide
  { id: "modaxo",         logo: "/images/netuite%20client%20images/modaxo.png",              name: "Modaxo",        link: "#",                             pad: 5               },
  { id: "prioritytire",   logo: "/images/netuite%20client%20images/prioritytire.png",        name: "Priority Tire", link: "#",                             pad: 5               },
  { id: "signal",         logo: "/images/netuite%20client%20images/signal.png",              name: "Signal",        link: "#",                             pad: 5, unopt: true  },  // 244×58 low-res
  { id: "traxon",         logo: "/images/netuite%20client%20images/traxon.png",              name: "Traxon",        link: "#",                             pad: 4               },
  { id: "tsi",            logo: "/images/netuite%20client%20images/tsi-logo.png",            name: "TSI",           link: "#",                             pad: 4               },
  { id: "loylogic",       logo: "/images/netuite%20client%20images/loylogic.png",            name: "LoyLogic",      link: "#",                             pad: 2               },  // aspect 0.96 SQUARE — minimal pad
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
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {logos.concat(logos).map((logo, index) => {
                const p = logo.pad ?? 4;
                return (
                  <div key={index} className="inline-flex px-5">
                    <a
                      href={logo.link || "#"}
                      target={logo.link !== "#" ? "_blank" : undefined}
                      rel={logo.link !== "#" ? "noopener noreferrer" : undefined}
                      className="flex h-16 w-44 sm:h-20 sm:w-52 items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                      style={{ padding: `${p * 2}px ${p * 3}px` }}
                      aria-label={logo.name}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={logo.logo}
                          alt={`${logo.name} logo`}
                          fill
                          sizes="(max-width: 640px) 176px, 208px"
                          className="object-contain transition-all duration-300"
                          unoptimized={logo.unopt === true}
                        />
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
        }
        .animate-marquee {
        display: inline-flex;
        animation: marquee 120s linear infinite;
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




