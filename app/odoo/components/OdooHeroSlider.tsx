"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import OdooDashboardVisual from "./OdooDashboardVisual";
import OdooSupportVisual from "./OdooSupportVisual";

const slides = [
  {
    title: "Your trusted Odoo partner",
    accent: "for smarter business growth",
    description:
      "Connect sales, finance, inventory, manufacturing, projects, people, and commerce through an Odoo environment shaped around your priorities.",
    primary: "Plan your Odoo journey",
    secondary: "Explore the app suite",
    visual: "team",
  },
  {
    title: "Bring every team together",
    accent: "with one source of truth",
    description:
      "Give teams a shared view of customers, stock, finance, service, and live operational workflows without disconnected systems.",
    primary: "Build your Odoo platform",
    secondary: "Explore Odoo services",
    visual: "dashboard",
  },
  {
    title: "Fit the platform to",
    accent: "the way your business works",
    description:
      "Configure applications, roles, approvals, reports, and automation around real processes instead of forcing teams into a generic template.",
    primary: "Discuss customization",
    secondary: "View the app suite",
    visual: "customization",
  },
  {
    title: "Keep Odoo connected",
    accent: "and ready for what comes next",
    description:
      "Integrate essential systems, support adoption, and continuously improve your Odoo environment as operations and priorities evolve.",
    primary: "Talk to our Odoo team",
    secondary: "See our approach",
    visual: "support",
  },
] as const;

function ProductVisual({ type }: { type: "customization" }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-orange-300/15 via-amber-200/20 to-purple-400/10 blur-2xl pointer-events-none" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-2.5 sm:p-3 shadow-2xl backdrop-blur">
        <Image
          src="/images/people/odoo_team_collaboration_customization.webp"
          alt="Team collaborating with custom configured Odoo ERP"
          width={1024}
          height={576}
          priority
          className="aspect-[16/9] w-full rounded-[1.4rem] object-cover object-center shadow-sm"
        />
      </div>

      {/* Floating Accent Badge: Top-Right */}
      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-orange-100 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.14)] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-xs font-bold text-slate-800">Tailored Workflows</span>
      </div>

      {/* Floating Accent Badge: Bottom-Left */}
      <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 z-10 bg-[#1c122b]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-purple-400/30 text-white shadow-[0_12px_28px_-6px_rgba(28,18,43,0.35)] flex items-center gap-2">
        <span className="text-xs font-semibold text-purple-200">Custom Roles & Automation</span>
      </div>
    </div>
  );
}

export default function OdooHeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const move = useCallback((direction: number) => {
    setActive((current) => (current + direction + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => move(1), 6500);
    return () => window.clearInterval(timer);
  }, [move, paused]);

  const slide = slides[active];
  const isTeam = slide.visual === "team";

  return (
    <section
      id="overview"
      className="relative isolate min-h-screen overflow-hidden bg-white px-6 pb-10 pt-24 lg:pt-28"
      aria-roledescription="carousel"
      aria-label="Odoo solutions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        if (event.key === "ArrowRight") move(1);
      }}
      tabIndex={0}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={"background-" + active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 -z-30"
        >
          {isTeam ? (
            <Image
              src="/images/odoo-about/odoo-team-collaboration.png"
              alt="A collaborative business team working with connected Odoo-style dashboards"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center top", transform: "translateY(22px) scale(1.06)" }}
            />
          ) : active === 2 ? (
            /* Third slider: very light white gradient with light orange */
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_18%,rgba(251,146,60,0.14),transparent_50%),radial-gradient(circle_at_15%_75%,rgba(254,215,170,0.22),transparent_48%),radial-gradient(circle_at_65%_80%,rgba(255,237,213,0.35),transparent_45%),linear-gradient(135deg,#ffffff_0%,#fffbf7_35%,#fff6ed_75%,#ffffff_100%)]" />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(100,59,159,0.14),transparent_30%),radial-gradient(circle_at_68%_82%,rgba(37,99,235,0.12),transparent_32%),linear-gradient(135deg,#ffffff_0%,#fbf8ff_55%,#eef5ff_100%)]" />
          )}
        </motion.div>
      </AnimatePresence>

      {isTeam && (
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.90)_32%,rgba(255,255,255,0.50)_58%,rgba(255,255,255,0.16)_75%,rgba(255,255,255,0)_92%)]" />
      )}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(100,59,159,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(100,59,159,0.10)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[calc(100vh-8.5rem)] max-w-7xl items-center pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 42 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -36 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={
              "grid w-full items-center gap-8 lg:gap-10 " +
              (isTeam
                ? "lg:grid-cols-1"
                : slide.visual === "dashboard" || slide.visual === "support"
                ? "lg:grid-cols-[0.85fr_1.15fr]"
                : "lg:grid-cols-[0.86fr_1.14fr]")
            }
            role="group"
            aria-roledescription="slide"
            aria-label={(active + 1) + " of " + slides.length}
          >
            <div
              className={
                "relative z-10 " +
                (slide.visual === "dashboard" || slide.visual === "support"
                  ? "max-w-xl xl:max-w-2xl"
                  : "max-w-3xl")
              }
            >
              <h1 className="text-[clamp(1.5rem,3.4vw,2.8rem)] font-medium leading-[1.2] tracking-[-0.045em] text-slate-950">
                <span className="block">{slide.title}</span>
                <span className="block bg-gradient-to-r from-[#643b9f] via-[#7048c8] to-[#2563eb] bg-clip-text text-transparent">
                  {slide.accent}
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{slide.description}</p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#643b9f] px-7 py-4 font-bold text-white shadow-xl shadow-[#643b9f]/20 transition hover:-translate-y-1 hover:bg-[#4c2d7d]"
                >
                  {slide.primary} <ArrowRight size={18} />
                </Link>
                <Link
                  href={active === 3 ? "#approach" : active === 1 || active === 2 ? "#services" : "#apps"}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/90 px-7 py-4 font-bold text-slate-700 backdrop-blur transition hover:border-[#643b9f]/40 hover:text-[#643b9f]"
                >
                  {slide.secondary}
                </Link>
              </div>
            </div>

            {!isTeam && (
              <div className="hidden lg:block overflow-visible">
                {slide.visual === "dashboard" ? (
                  <OdooDashboardVisual />
                ) : slide.visual === "support" ? (
                  <OdooSupportVisual />
                ) : (
                  <ProductVisual type={slide.visual} />
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-6 bottom-7 z-20 mx-auto flex max-w-7xl items-center justify-between gap-5">
        <div className="flex items-center gap-2" aria-label="Choose a slide">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              className={"h-2.5 rounded-full transition-all duration-300 " + (active === index ? "w-10 bg-[#643b9f]" : "w-2.5 bg-slate-400/60 hover:bg-slate-500")}
              aria-label={"Show slide " + (index + 1) + ": " + item.title}
              aria-current={active === index ? "true" : undefined}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:border-[#643b9f]/40 hover:text-[#643b9f]"
            aria-label="Previous slide"
          >
            <ChevronLeft size={21} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="grid h-11 w-11 place-items-center rounded-full bg-[#643b9f] text-white shadow-lg transition hover:bg-[#4c2d7d]"
            aria-label="Next slide"
          >
            <ChevronRight size={21} />
          </button>
        </div>
      </div>
    </section>
  );
}