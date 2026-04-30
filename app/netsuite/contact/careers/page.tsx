"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  MapPin,
  Search,
  ArrowRight,
  Filter,
  ChevronRight,
  Target,
  Users,
  Rocket,
  Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ------ DATA ------
const jobs = [
  { title: "NetSuite Solutions Consultant - Presales", type: "full-time", location: "pune", locationName: "Pune", experience: "4-7 Years", description: "Lead presales activities, conduct product demonstrations, and architect tailored NetSuite solutions for enterprise clients." },
  { title: "NetSuite Sales Executive", type: "full-time", location: "pune", locationName: "Pune", experience: "2-5 Years", description: "Drive NetSuite license and services sales, manage the end-to-end sales cycle, and build lasting client partnerships." },
  { title: "NetSuite SCA Developer", type: "full-time", location: "pune", locationName: "Pune", experience: "3-5 Years", description: "Develop and customize SuiteCommerce Advanced (SCA) web stores, implement pixel-perfect designs, and enhance eCommerce UX." },
  { title: "NetSuite Techno Functional Consultant", type: "full-time", location: "pune", locationName: "Pune", experience: "4-6 Years", description: "Bridge the gap between business needs and technical execution. Handle both functional setups and SuiteScript customizations." },
  { title: "NetSuite Technical Consultant", type: "full-time", location: "pune", locationName: "Pune", experience: "3-6 Years", description: "Write complex SuiteScripts, build robust integrations, and optimize NetSuite architecture for maximum performance." },
  { title: "NetSuite Functional Consultant", type: "full-time", location: "pune", locationName: "Pune", experience: "3-6 Years", description: "Lead NetSuite ERP implementations, configure core modules, conduct user training, and ensure successful go-lives." },
  { title: "NetSuite Developer", type: "full-time", location: "pune", locationName: "Pune", experience: "2-4 Years", description: "Develop Suitelets, RESTlets, and custom NetSuite workflows to automate business processes and enhance functionality." },
  { title: "NetSuite Technical Lead", type: "full-time", location: "pune", locationName: "Pune", experience: "6-9 Years", description: "Lead a team of developers, architect complex technical solutions, and ensure high-quality delivery of NetSuite projects." },
  { title: "NetSuite Functional Lead", type: "full-time", location: "pune", locationName: "Pune", experience: "6-9 Years", description: "Oversee multiple NetSuite implementation projects, guide functional teams, and act as a senior advisor for enterprise clients." },
];

const locations = [
  { value: 'all', label: 'All Locations' },
  { value: 'pune', label: 'Pune, Maharashtra' },
  { value: 'udaipur', label: 'Udaipur, Rajasthan' },
  { value: 'usa', label: 'USA' },
  { value: 'uk', label: 'UK' },
  { value: 'remote', label: 'Remote' },
];

const jobTypes = [
  { value: 'all', label: 'All Job Types' },
  { value: 'full-time', label: 'Full-Time' },
];

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current: number) => Math.round(current));
  useEffect(() => {
    spring.set(inView ? value : 0);
  }, [inView, spring, value]);
  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

export default function CareersPage() {
  const [type, setType] = useState('all');
  const [location, setLocation] = useState('all');
  const [highlightForm, setHighlightForm] = useState(false);

  const filteredJobs = jobs.filter(
    (job) =>
      (type === 'all' || job.type === type) &&
      (location === 'all' || job.location === location)
  );

  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });

  const stats = [
    { label: "Global Professionals", value: 150, suffix: "+", icon: Users },
    { label: "Countries Presence", value: 5, suffix: "+", icon: Globe },
    { label: "Projects Delivered", value: 500, suffix: "+", icon: Target },
    { label: "Annual Growth", value: 35, suffix: "%", icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white">

      {/* ── Hero — matches digital-transformation service page exactly ─────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/people/global.webp"
            alt="Careers Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors duration-200">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/contact" className="text-blue-300 hover:text-white transition-colors">Contact</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Careers</span>
          </motion.nav>

          {/* Main grid — exact same layout as service hero */}
          <div
            className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8"
            style={{ minHeight: "calc(100vh - 150px)" }}
          >
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* H1 — exact same sizes as digital-transformation: 3xl → 4xl → 5xl */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-5 leading-[1.15] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  Build Your Career with AGSuite Technologies
                </span>
              </motion.h1>

              {/* Blue accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 mb-5 sm:mb-6 rounded-full"
              />

              {/* Paragraph — same text-base sm:text-lg as service hero */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10"
              >
                Be part of a global collective of thinkers, builders, and problem solvers. At AGSuite, we don't just fill roles — we escalate careers through mission-critical NetSuite projects and a culture of radical excellence.
              </motion.p>

              {/* CTA button — same style as service hero */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#open-positions"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-blue-600/30 hover:scale-105"
                >
                  Explore Open Roles
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — exact service-hero: w-[88%] ml-auto, height 390, rounded-2xl, 2 floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ minHeight: 460 }}
            >
              <div className="relative w-[88%] ml-auto">

                {/* Main image — 390px height, rounded-2xl */}
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50"
                  style={{ height: 390 }}
                >
                  <Image
                    src="/images/contact/carrer.webp"
                    alt="Life at AGSuite"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>

                {/* Bottom floating card — same as service page */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-8 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3 z-10"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, #0a1f5c, #1d4ed8)" }}
                  >
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold leading-tight">
                      Join a growing global team
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                      150+ professionals · 5 countries · 500+ projects delivered
                    </p>
                  </div>
                </motion.div>

                {/* Top-left floating card — same as service page */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)" }}
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">
                      AGSuite Careers
                    </p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">
                      NetSuite · ERP · CRM · Cloud · Integration
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Stats row — same as service page */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-5 sm:pt-6"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.12, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl sm:rounded-2xl group-hover:bg-blue-700/30 transition-colors duration-300">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 sm:mb-2 flex items-center justify-center gap-1">
                    <Counter value={stat.value} />
                    <span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base px-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Open Positions ─────────────────────────────────────────────────── */}
      <section id="open-positions" className="pt-16 pb-32 relative overflow-hidden bg-white scroll-mt-20">

        {/* Dashed Grid Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, #c0d1f9ff 1px, transparent 1px),
              linear-gradient(to bottom, #94b3fbff 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              )
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              )
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Tricolor Ambient Gradient Blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-100/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] bg-blue-100/40 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-100/20 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* Section Header — matches Global Offices style */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-xs font-medium tracking-widest uppercase">Explore Roles</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
              Open{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Positions
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Find your perfect role and join our global team of experts.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-20">

            {/* LEFT: Position List */}
            <div className="flex-1">

              {/* Filters */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="relative group">
                  <Filter className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full pl-12 pr-10 py-4 bg-white border border-gray-100 rounded-3xl appearance-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-gray-700 cursor-pointer shadow-sm shadow-blue-900/5"
                  >
                    {jobTypes.map((jt) => (
                      <option key={jt.value} value={jt.value}>{jt.label}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
                <div className="relative group">
                  <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-10 py-4 bg-white border border-gray-100 rounded-3xl appearance-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-gray-700 cursor-pointer shadow-sm shadow-blue-900/5"
                  >
                    {locations.map((loc) => (
                      <option key={loc.value} value={loc.value}>{loc.label}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>

              {/* Job Cards */}
              <div className="space-y-6">
                <AnimatePresence mode="popLayout">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, idx) => (
                      <motion.div
                        key={job.title}
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="group relative z-10 hover:z-50 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/40 p-6 sm:p-8 rounded-[2rem] border border-white/90 shadow-[0_8px_32px_rgba(0,13,46,0.10)] hover:shadow-[0_16px_48px_rgba(0,13,46,0.18)] hover:border-blue-200 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-8"
                      >
                        <div className="flex items-center gap-6 relative z-10">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-blue-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                            style={{ background: "linear-gradient(135deg, #0a1f5c, #1d4ed8)" }}
                          >
                            <Briefcase size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#0a1f5c] group-hover:text-blue-700 transition-colors tracking-tight uppercase leading-tight">
                              {job.title}
                            </h3>
                            <div className="flex items-center gap-5 mt-2 text-sm font-semibold">
                              <span className="flex items-center gap-1.5 text-[#0a1f5c]">
                                <MapPin size={14} className="text-blue-500" /> {job.locationName}
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                              <span className="capitalize text-[#0a1f5c] font-bold">{job.type.replace('-', ' ')}</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl left-0 top-full mt-2 w-full translate-y-4 group-hover:translate-y-0">
                          <div className="bg-white rounded-3xl border border-blue-100 p-6 relative overflow-hidden shadow-2xl ring-1 ring-black/5">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                            <div className="absolute -top-2 left-10 w-4 h-4 bg-white border-t border-l border-blue-100 rotate-45" />
                            <h4 className="text-[#0a1f5c] font-bold text-xl mb-3 pr-4 tracking-tight">{job.title}</h4>
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-xl border border-blue-100">Exp: {job.experience}</span>
                              <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-100 capitalize">{job.type.replace('-', ' ')}</span>
                              <span className="px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold rounded-xl border border-orange-100">{job.locationName}</span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                              {job.description}
                            </p>
                            <button
                              onClick={() => {
                                document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                                setHighlightForm(true);
                                setTimeout(() => setHighlightForm(false), 2000);
                              }}
                              className="w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 hover:bg-blue-600 transition-all hover:scale-[1.02]"
                              style={{ background: "linear-gradient(135deg, #0a1f5c, #1d4ed8)" }}
                            >
                              Apply For This Role <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                            setHighlightForm(true);
                            setTimeout(() => setHighlightForm(false), 2000);
                          }}
                          className="sm:w-auto w-full px-8 py-4 rounded-2xl text-white font-bold text-sm hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group-hover:translate-x-1 relative z-10"
                          style={{ background: "linear-gradient(135deg, #0a1f5c, #1d4ed8)" }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #1d4ed8, #3b82f6)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #0a1f5c, #1d4ed8)";
                          }}
                        >
                          Apply Now <ArrowRight size={18} />
                        </button>
                      </motion.div>
                    ))
                  ) : (
                    <div className="py-24 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6 border border-gray-100 text-gray-300 shadow-sm">
                        <Search size={32} />
                      </div>
                      <p className="text-gray-500 font-bold text-xl">No positions found matching your criteria.</p>
                      <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search terms.</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT: Form Sticky */}
            <div id="apply-form" className="w-full lg:w-[550px] xl:w-[600px] shrink-0 scroll-mt-1">
              <div className="sticky top-32">
                <div className={`bg-white rounded-[3rem] border overflow-hidden transition-all duration-500 ${highlightForm ? 'border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.4)] scale-[1.02]' : 'border-gray-100 shadow-[0_32px_80px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_32px_80px_-15px_rgba(29,78,216,0.15)]'}`}>
                  <div className="bg-gradient-to-br from-[#000814] to-[#001a4d] p-10 text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold mb-3 tracking-tight">Express Interest</h3>
                      <p className="text-blue-200 text-base leading-relaxed font-medium">
                        Apply for current openings at <span className="font-bold text-white underline decoration-blue-500/50">AGSuite Technologies</span>.
                      </p>
                    </div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  </div>
                  <div className="bg-white p-0">
                    <iframe
                      title="AGSuite Zoho Application Form"
                      frameBorder={0}
                      className="w-full h-[1350px] rounded-[3rem]"
                      src="https://agsuitetech.zohorecruit.in/forms/58f06577622ce45d508407aae11148ceb8899baae51685ee90b1efbe959f4f75"
                      allow="fullscreen"
                      scrolling="no"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
