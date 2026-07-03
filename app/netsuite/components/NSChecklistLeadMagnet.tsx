"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download, CheckCircle2, Shield, Phone, ChevronDown, ClipboardCheck, ArrowRight
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

const FORBIDDEN_DOMAINS = [
  "gmail.com", "yahoo.com", "outlook.com", "hotmail.com",
  "live.com", "icloud.com", "rediffmail.com", "ymail.com",
];

/* ── Reusable flag image ── */
function FlagImg({ iso, className = "" }: { iso: string; className?: string }) {
  return (
    <img
      src={`https://flagcdn.com/${iso}.svg`}
      alt={iso.toUpperCase()}
      className={`object-cover rounded-[2px] ${className}`}
    />
  );
}

/* ── Custom country-code dropdown ── */
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
        className="flex items-center gap-1.5 bg-gray-50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-500 rounded-xl px-2.5 py-2.5 outline-none transition-all cursor-pointer text-gray-800"
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
            className="absolute bottom-full left-0 mb-1.5 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden w-56"
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

export default function NSChecklistLeadMagnet() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
          leadType: 'Implementation Checklist',
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
    <section
      className="relative overflow-hidden py-16 md:py-24 font-['DM_Sans',sans-serif]"
      style={{
        background: "radial-gradient(at 0% 82.58333206176758%, #4a055c 0px, transparent 50%), radial-gradient(at 97.58620673212512% 84.0833330154419%, #10011f 0px, transparent 50%), radial-gradient(at 10.73275845626305% 10.12499968210856%, #000000 0px, transparent 50%), radial-gradient(at 48.66379293902167% 89.91666634877524%, #1000ed 0px, transparent 50%), #021526"
      }}
    >
      {/* Square Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] w-full px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: Heading & Inline Form */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
                <ClipboardCheck className="w-4 h-4" /> Pre-Implementation Playbook
              </div>

              <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
                The Essential Checklist Before You Implement NetSuite
              </h2>
            </div>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
              Don&#39;t join the 50% of ERP rollouts that exceed budget. Prepare your team, audit your data, and map subsidiaries with our comprehensive 50-point preparation playbook.
            </p>

            {/* Inline Compact Form Card */}
            <div className="w-full max-w-xl bg-white border border-blue-200/50 rounded-2xl p-4 sm:p-5 shadow-xl mt-4">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="checklist-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-100">
                          <Download className="w-4 h-4 text-blue-600" />
                        </div>
                        <p className="text-sm sm:text-base font-extrabold text-gray-900">
                          Download Checklist — <span className="text-blue-600">Free PDF</span>
                        </p>
                      </div>

                      {isClient && (
                        <form onSubmit={handleSubmit} noValidate className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                              <label className="block text-gray-600 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                maxLength={80}
                                suppressHydrationWarning
                                className={`w-full bg-gray-50 border-2 rounded-xl px-3.5 py-2.5 text-gray-900 placeholder-gray-400 outline-none text-sm transition-all ${errors.name ? "border-red-400 font-medium" : "border-gray-200 focus:border-blue-500 font-medium focus:bg-white"
                                  }`}
                              />
                              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            <div>
                              <label className="block text-gray-600 text-[10px] font-bold uppercase tracking-wider mb-1.5">
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
                                className={`w-full bg-gray-50 border-2 rounded-xl px-3.5 py-2.5 text-gray-900 placeholder-gray-400 outline-none text-sm transition-all ${errors.email ? "border-red-400 font-medium" : "border-gray-200 focus:border-blue-500 font-medium focus:bg-white"
                                  }`}
                              />
                              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                          </div>

                          <div>
                            <label className="block text-gray-600 text-[10px] font-bold uppercase tracking-wider mb-1.5">
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
                                className={`flex-1 bg-gray-50 border-2 rounded-xl px-3.5 py-2.5 text-gray-900 placeholder-gray-400 outline-none text-sm transition-all ${errors.phone ? "border-red-400 font-medium" : "border-gray-200 focus:border-blue-500 font-medium focus:bg-white"
                                  }`}
                              />
                            </div>
                            {errors.phone && (
                              <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1.5">
                                <Phone className="w-3.5 h-3.5 text-red-500" /> {errors.phone}
                              </p>
                            )}
                          </div>

                          <button
                            type="submit"
                            disabled={loading}
                            suppressHydrationWarning
                            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-75 shadow-md mt-1 cursor-pointer"
                            style={{ background: "linear-gradient(135deg,#2563eb,#3b82f6)" }}
                          >
                            {loading ? (
                              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              <><Download className="w-4 h-4" /> Get Checklist Now</>
                            )}
                          </button>
                        </form>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="checklist-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-8 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-300 flex items-center justify-center text-blue-600">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-lg font-bold">Checklist sent! 📈</p>
                      <p className="text-gray-500 text-xs mt-2 max-w-[240px] mx-auto leading-relaxed">
                        We sent the PDF to your email. Check your inbox to download your playbook.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Checklist Image Card stretched to match height */}
          <div className="lg:col-span-6 flex h-full w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 w-full h-full flex min-h-[350px] lg:min-h-full"
            >
              <Image
                src="/images/Background/netsuite_checklist.png"
                alt="NetSuite Implementation Checklist"
                fill
                className="w-full h-full object-cover select-none"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
