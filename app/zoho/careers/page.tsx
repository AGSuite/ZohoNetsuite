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
  { title: "Zoho Functional Consultant", type: "full-time", location: "remote", locationName: "Remote", experience: "3-5 Years", description: "Lead end-to-end Zoho implementations, gather client requirements, and architect scalable cloud solutions for enterprise businesses." },
  { title: "Zoho Developer", type: "full-time", location: "pune", locationName: "Pune", experience: "2-4 Years", description: "Develop custom applications on Zoho Creator, write complex Deluge scripts, and build seamless integrations via REST APIs." },
  { title: "Zoho Sales Executive", type: "full-time", location: "pune", locationName: "Pune", experience: "1-3 Years", description: "Drive Zoho solution sales, build strong client relationships, manage the complete sales cycle, and identify new business opportunities globally." },
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

export default function ZohoCareersPage() {
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
    { label: "Countries Presence", value: 10, suffix: "+", icon: Globe },
    { label: "Projects Delivered", value: 500, suffix: "+", icon: Target },
    { label: "Annual Growth", value: 35, suffix: "%", icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white">

      {/* ── Hero — matches NetSuite careers exactly but with Zoho accents ─────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/people/global.webp"
            alt="Careers Background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-[120px] sm:pt-[136px] pb-8 sm:pb-10">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-[72px] sm:top-20 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            <Link href="/zoho" className="text-blue-300 hover:text-white transition-colors duration-200">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/zoho/contact" className="text-blue-300 hover:text-white transition-colors">Contact</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Careers</span>
          </motion.nav>

          {/* Main grid — exact same layout as NetSuite careers hero */}
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
              {/* H1 — exact same sizes: 3xl → 4xl → 5xl */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-5 leading-[1.15] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  Build Your Career in the Zoho Ecosystem
                </span>
              </motion.h1>

              {/* Blue accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 mb-5 sm:mb-6 rounded-full"
              />

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10"
              >
                Be part of a global collective of thinkers, builders, and problem solvers. At AGSuite, we empower professionals to master Zoho's cloud suite and deliver transformative business solutions globally.
              </motion.p>

              {/* CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#open-positions"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
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

            {/* RIGHT */}
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
                </div>

                {/* Floating badge top-left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/50 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold">
                    10+
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Years Excellence</div>
                    <div className="text-[11px] text-gray-500">In Zoho Solutions</div>
                  </div>
                </motion.div>

                {/* Floating badge bottom-right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.85, duration: 0.5 }}
                  className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/50 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Global Team</div>
                    <div className="text-[11px] text-gray-500">India, USA, UK & UAE</div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Bottom stats bar */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pt-6 sm:pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((st, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <st.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center">
                      <Counter value={st.value} />
                      <span>{st.suffix}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">{st.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Open Positions & Application Form ───────────────────────────── */}
      <section id="open-positions" className="py-24 sm:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* LEFT: Roles List */}
            <div className="flex-1">
              <div className="mb-10">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                  Career Opportunities
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 tracking-tight">
                  Open Positions at AGSuite
                </h2>
                <p className="text-gray-500 text-base mt-2">
                  Find the role that matches your expertise and passion for the Zoho cloud ecosystem.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                  <Filter className="w-4 h-4 text-gray-400 ml-2" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-gray-700 outline-none cursor-pointer"
                  >
                    {locations.map((loc) => (
                      <option key={loc.value} value={loc.value}>{loc.label}</option>
                    ))}
                  </select>
                </div>
                <div className="w-[1px] h-8 bg-gray-100 hidden sm:block" />
                <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                  <Briefcase className="w-4 h-4 text-gray-400 ml-2" />
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-gray-700 outline-none cursor-pointer"
                  >
                    {jobTypes.map((jt) => (
                      <option key={jt.value} value={jt.value}>{jt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Job Cards */}
              <div className="space-y-4">
                <AnimatePresence>
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, idx) => (
                      <motion.div
                        key={idx}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="group bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-950/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                      >
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 uppercase tracking-wider">
                              {job.experience}
                            </span>
                            <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-blue-500" />
                              {job.locationName}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                            {job.description}
                          </p>
                        </div>
                        <a
                          href="#apply-form"
                          onClick={() => {
                            setHighlightForm(true);
                            setTimeout(() => setHighlightForm(false), 2000);
                          }}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 hover:bg-blue-600 text-white text-sm font-semibold rounded-2xl transition-all duration-300 shrink-0 group-hover:shadow-lg group-hover:shadow-blue-600/30"
                        >
                          Apply Now
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8">
                      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <Search className="w-8 h-8" />
                      </div>
                      <p className="text-gray-500 font-bold text-xl">No positions found matching your criteria.</p>
                      <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search terms.</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT: Form Sticky */}
            <div id="apply-form" className="w-full lg:w-[500px] xl:w-[550px] shrink-0 scroll-mt-36">
              <div className="sticky top-32">
                <div className={`bg-white rounded-3xl overflow-hidden transition-all duration-500 ${highlightForm ? 'border-2 border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.4)] scale-[1.02]' : 'border border-gray-100 shadow-[0_32px_80px_-15px_rgba(0,0,0,0.1)]'}`}>
                  <iframe
                    title="AGSuite Zoho Application Form"
                    frameBorder={0}
                    style={{ height: '650px', width: '100%', border: 'none' }}
                    className="w-full rounded-3xl"
                    src="https://agsuitetech.zohorecruit.in/forms/58f06577622ce45d508407aae11148ce2d6eda0351c5da56a496bbe181a211a6"
                    allow="fullscreen"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
