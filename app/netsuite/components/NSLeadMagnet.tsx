"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download, TrendingUp, CheckCircle2,
  Shield, Zap, ChevronRight, Phone, ChevronDown
} from "lucide-react";
import Image from "next/image";

/* ── Country codes with flagcdn.com iso codes ── */
const COUNTRY_CODES = [
  { code: "+91", iso: "in", name: "India" },
  { code: "+1", iso: "us", name: "USA" },
  { code: "+44", iso: "gb", name: "UK" },
  { code: "+971", iso: "ae", name: "UAE" },
  { code: "+61", iso: "au", name: "Australia" },
  { code: "+65", iso: "sg", name: "Singapore" },
  { code: "+60", iso: "my", name: "Malaysia" },
  { code: "+966", iso: "sa", name: "Saudi Arabia" },
  { code: "+27", iso: "za", name: "South Africa" },
];

/* ── Region data with flagcdn.com iso codes ── */
const REGIONS = [
  {
    rank: "01", iso: "in", country: "India", region: "South Asia",
    growth: "28%", stat: "YoY ERP adoption", highlight: "Fastest growing market",
    color: "from-orange-500 to-orange-600", border: "border-orange-300", accent: "text-orange-600",
    insight: "GST mandates & Digital India push driving mass NetSuite adoption across mid-market.",
  },
  {
    rank: "02", iso: "us", country: "United States", region: "North America",
    growth: "25%", stat: "Cloud ERP growth rate", highlight: "Largest NetSuite market",
    color: "from-blue-500 to-blue-600", border: "border-blue-300", accent: "text-blue-600",
    insight: "SaaS-first culture and SOX compliance make NetSuite the #1 ERP choice.",
  },
  {
    rank: "03", iso: "ae", country: "UAE & Middle East", region: "GCC Region",
    growth: "34%", stat: "Digital transformation spend", highlight: "Vision 2030 catalyst",
    color: "from-emerald-500 to-teal-600", border: "border-emerald-300", accent: "text-emerald-600",
    insight: "Vision 2030 & Saudi Expo legacy pushing enterprises off legacy ERPs at record pace.",
  },
  {
    rank: "04", iso: "gb", country: "United Kingdom", region: "Europe",
    growth: "19%", stat: "Post-Brexit ERP upgrades", highlight: "Compliance-driven surge",
    color: "from-violet-500 to-purple-600", border: "border-violet-300", accent: "text-violet-600",
    insight: "Post-Brexit restructuring is forcing CFOs to modernise ERP stacks now.",
  },
  {
    rank: "05", iso: "au", country: "Australia", region: "Asia-Pacific",
    growth: "23%", stat: "Cloud ERP growth rate", highlight: "APAC high-growth pick",
    color: "from-cyan-500 to-sky-600", border: "border-cyan-300", accent: "text-cyan-600",
    insight: "Tax digitalisation & remote-work mandates are accelerating cloud ERP investments.",
  },
];

const FORBIDDEN_DOMAINS = [
  "gmail.com", "yahoo.com", "outlook.com", "hotmail.com",
  "live.com", "icloud.com", "rediffmail.com", "ymail.com",
];

/* ── Reusable flag image (same src pattern as our-offices page) ── */
function FlagImg({ iso, className = "" }: { iso: string; className?: string }) {
  return (
    <img
      src={`https://flagcdn.com/${iso}.svg`}
      alt={iso.toUpperCase()}
      className={`object-cover rounded-[2px] ${className}`}
    />
  );
}

/* ── Custom country-code dropdown (images inside options) ── */
function CountryCodePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (code: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = COUNTRY_CODES.find(c => c.code === value) ?? COUNTRY_CODES[0];

  /* close on outside click */
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0 flex">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 bg-gray-50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-500 rounded-xl px-2.5 py-2.5 outline-none transition-all cursor-pointer"
        style={{ minWidth: 84 }}
      >
        <FlagImg iso={selected.iso} className="w-5 h-3.5 shrink-0" />
        <span className="text-xs font-bold text-gray-800">{selected.code}</span>
        <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown list */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1.5 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden w-56"
          >
            {COUNTRY_CODES.map(c => (
              <li key={c.code}>
                <button
                  type="button"
                  onClick={() => { onChange(c.code); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 text-sm text-left transition-colors ${c.code === value
                    ? "bg-blue-50 text-blue-700 font-bold"
                    : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  <FlagImg iso={c.iso} className="w-6 h-4 shrink-0" />
                  <span className="font-semibold text-sm text-gray-500 w-12 shrink-0">{c.code}</span>
                  <span className="text-sm text-gray-700 truncate">{c.name}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function NSLeadMagnet() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeRegion, setActiveRegion] = useState(0);

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name cannot be empty.";

    if (!email.trim()) {
      errs.email = "Work email cannot be empty.";
    } else {
      const at = email.indexOf("@"), dot = email.lastIndexOf(".");
      if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
        errs.email = "Enter a valid email.";
      } else {
        const domain = email.split("@")[1].toLowerCase();
        if (FORBIDDEN_DOMAINS.includes(domain))
          errs.email = `Use a work email — not @${domain}.`;
      }
    }

    const digits = phone.replace(/\D/g, "");
    if (!phone.trim()) errs.phone = "Mobile number cannot be empty.";
    else if (digits.length !== 10) errs.phone = "Must be exactly 10 digits.";

    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      const response = await fetch('/api/contact/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          countryCode,
          leadType: 'Fastest ROI Report',
          platform: 'NetSuite'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative py-0 overflow-hidden bg-white">
      <div
        className="relative mx-auto max-w-[1536px]"
        style={{ background: "linear-gradient(135deg,#020617 0%,#0a0f2e 30%,#0c1a4a 60%,#050d2e 100%)" }}
      >
        {/* Map Background Overlay */}
        <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/Background/world-map-light.png"
            alt="World Map Background"
            fill
            priority
            loading="eager"
            className="w-full h-full object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle,#3b82f6 0%,transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle,#f59e0b 0%,transparent 70%)" }} />
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

            {/* ── LEFT : Heading + Subtitle + Form Card ─────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 lg:gap-8 h-full"
            >
              <div className="flex flex-col gap-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="text-4xl md:text-5xl font-medium leading-[1.1] text-white"
                >
                  Top 5 Regions Where{" "}
                  <span className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(90deg,#f59e0b,#fbbf24)" }}>
                    NetSuite Delivers
                  </span>{" "}<br></br>
                  the Fastest ROI
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.22 }}
                  className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl"
                >
                  Compare regional growth benchmarks, compliance catalysts, and digital migration rates to maximize your cloud ERP investment.
                </motion.p>
              </div>

              {/* Form card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl border-2 border-amber-400/20 bg-white shadow-xl p-5 sm:p-6 max-w-xl"
              >
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-4">
                          <div className="p-1.5 rounded-lg" style={{ background: "rgba(245,158,11,0.12)" }}>
                            <Download className="w-4 h-4 text-amber-500" />
                          </div>
                          <p className="text-sm sm:text-base font-extrabold text-gray-900">
                            Get the Full Report — <span className="text-amber-500">Free</span>
                          </p>
                        </div>

                        {isClient && (
                          <form onSubmit={handleSubmit} noValidate className="space-y-4">

                            {/* Name + Email — one row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              <div>
                                <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                                  Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  placeholder="John Doe"
                                  maxLength={80}
                                  suppressHydrationWarning
                                  className={`w-full bg-gray-50 border-2 rounded-xl px-3.5 py-2.5 text-gray-900 outline-none text-sm transition-all ${errors.name ? "border-red-400 font-medium" : "border-blue-100 focus:border-blue-500 font-medium"
                                    }`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                              </div>
                              <div>
                                <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                                  Work Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="john@company.com"
                                  maxLength={100}
                                  autoComplete="off"
                                  suppressHydrationWarning
                                  className={`w-full bg-gray-50 border-2 rounded-xl px-3.5 py-2.5 text-gray-900 outline-none text-sm transition-all ${errors.email ? "border-red-400 font-medium" : "border-blue-100 focus:border-blue-500 font-medium"
                                    }`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                              </div>
                            </div>

                            {/* Phone with custom flag picker */}
                            <div>
                              <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                                Mobile Number <span className="text-red-500">*</span>
                              </label>
                              <div className="flex gap-2">
                                <CountryCodePicker value={countryCode} onChange={setCountryCode} />
                                <input
                                  type="tel"
                                  name="Mobile"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                                  placeholder="98765 43210"
                                  maxLength={10}
                                  suppressHydrationWarning
                                  className={`flex-1 bg-gray-50 border-2 rounded-xl px-3.5 py-2.5 text-gray-900 outline-none text-sm transition-all ${errors.phone ? "border-red-400 font-medium" : "border-blue-100 focus:border-blue-500 font-medium"
                                    }`}
                                />
                              </div>
                              {errors.phone && (
                                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1.5">
                                  <Phone className="w-3 h-3" />{errors.phone}
                                </p>
                              )}
                            </div>

                            {/* Submit */}
                            <button
                              type="submit"
                              disabled={loading}
                              suppressHydrationWarning
                              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-900 transition-all hover:opacity-90 active:scale-95 disabled:opacity-70 shadow-md mt-1 cursor-pointer"
                              style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24)" }}
                            >
                              {loading ? (
                                <span className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                              ) : (
                                <><Download className="w-4 h-4" /> Download Free Report</>
                              )}
                            </button>
                          </form>
                        )}
                      </div>


                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center gap-4 py-8 text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-amber-50 border-2 border-amber-300 flex items-center justify-center">
                        <CheckCircle2 className="w-7 h-7 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-gray-900 text-lg font-bold">Report on its way! 🎉</p>
                        <p className="text-gray-500 text-xs mt-1 max-w-[240px] mx-auto leading-relaxed">
                          Check your inbox — usually arrives in 2 minutes.
                          Our team will reach out shortly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* ── RIGHT : White region cards with flagcdn flags ─── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              {REGIONS.map((r, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  onClick={() => setActiveRegion(i)}
                  className={`w-full text-left rounded-2xl border-2 bg-white transition-all duration-300 overflow-hidden ${activeRegion === i
                    ? `${r.border} shadow-xl`
                    : "border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md"
                    }`}
                >
                  <div className="w-full px-6 py-5">
                    <div className="flex items-center gap-4">
                      {/* Rank — black */}
                      <span className="text-base md:text-lg font-black text-gray-900 w-8 shrink-0">{r.rank}</span>

                      {/* Flag image from flagcdn */}
                      <img
                        src={`https://flagcdn.com/${r.iso}.svg`}
                        alt={r.country}
                        className="w-12 h-8 object-cover rounded-md shrink-0 shadow-sm border border-gray-100"
                      />

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-base font-extrabold text-gray-900 leading-tight">{r.country}</p>
                            <p className="text-xs text-gray-400 font-semibold">{r.region}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className={`text-lg md:text-xl font-black bg-gradient-to-r ${r.color} bg-clip-text text-transparent`}>
                              {r.growth}
                            </p>
                            <p className="text-[11px] md:text-xs text-gray-400 font-semibold">{r.stat}</p>
                          </div>
                        </div>
                      </div>

                      <ChevronRight className={`w-5 h-5 shrink-0 transition-transform duration-300 ${activeRegion === i ? `rotate-90 ${r.accent}` : "text-gray-300"
                        }`} />
                    </div>

                    <AnimatePresence>
                      {activeRegion === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className={`mt-4 pt-4 border-t ${r.border}`}>
                            <div className="flex items-start gap-2">
                              <TrendingUp className={`w-4 h-4 ${r.accent} shrink-0 mt-0.5`} />
                              <p className="text-sm text-gray-600 leading-relaxed font-medium">{r.insight}</p>
                            </div>
                            <span className={`inline-flex items-center gap-1.5 mt-2.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${r.color}`}>
                              <Zap className="w-3 h-3" /> {r.highlight}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
