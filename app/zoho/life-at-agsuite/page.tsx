"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  User,
  Heart,
  Coffee,
  Star,
  Trophy,
  Target,
  Sparkles,
  MapPin,
  Smile,
  Camera,
  Zap,
  Briefcase,
  Users,
  Play,
  Calendar,
} from "lucide-react";
import ContactFormDesign4 from "../../netsuite/components/ContactFormDesign4";

export default function LifeAtAGSuiteZoho() {
  const [activeTab, setActiveTab] = useState("all");

  // --- PLACEHOLDER DATA Arrays ---
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/images/life/team1.webp",
    },
    { name: "Jane Smith", role: "CTO", image: "/images/life/team2.webp" },
    {
      name: "Alice Johnson",
      role: "Lead Consultant",
      image: "/images/life/team3.webp",
    },
    {
      name: "Bob Williams",
      role: "Senior Developer",
      image: "/images/life/team4.webp",
    },
    {
      name: "Emma Davis",
      role: "Marketing Head",
      image: "/images/life/team5.webp",
    },
    {
      name: "Michael Brown",
      role: "Sales Director",
      image: "/images/life/team6.webp",
    },
    {
      name: "Sophia Wilson",
      role: "Project Manager",
      image: "/images/life/team7.webp",
    },
    {
      name: "Liam Miller",
      role: "UI/UX Designer",
      image: "/images/life/team8.webp",
    },
  ];

  const achievements = [
    {
      title: "Best Workplace Award",
      year: "2024",
      description:
        "Recognized for outstanding company culture, employee satisfaction, and inclusive environment.",
      image: "/images/life/achievement1.webp",
      icon: Trophy,
    },
    {
      title: "Top Solution Provider",
      year: "2023",
      description:
        "Awarded for excellence in delivering enterprise cloud implementations globally.",
      image: "/images/life/achievement2.webp",
      icon: Star,
    },
    {
      title: "Innovation Excellence",
      year: "2023",
      description:
        "Honored for our proprietary integrations, pushing the boundaries of cloud ERP technology.",
      image: "/images/life/achievement3.webp",
      icon: Zap,
    },
  ];

  const officePhotos = [
    "/images/life/office1.webp",
    "/images/life/office2.webp",
    "/images/life/office3.webp",
    "/images/life/office4.webp",
    "/images/life/office5.webp",
    "/images/life/office6.webp",
  ];

  const events = [
    {
      title: "Annual Retreat",
      image: "/images/life/event1.webp",
      category: "culture",
      date: "Jan 2025",
    },
    {
      title: "Diwali Celebrations",
      image: "/images/life/event2.webp",
      category: "culture",
      date: "Nov 2024",
    },
    {
      title: "Global Hackathon",
      image: "/images/life/event3.webp",
      category: "innovation",
      date: "Aug 2024",
    },
    {
      title: "Leadership Summit",
      image: "/images/life/event4.webp",
      category: "business",
      date: "May 2024",
    },
    {
      title: "Team Lunch & Learn",
      image: "/images/life/event5.webp",
      category: "learning",
      date: "Mar 2024",
    },
    {
      title: "Sports Tournament",
      image: "/images/life/event6.webp",
      category: "culture",
      date: "Feb 2024",
    },
  ];

  const eventFilters = [
    { id: "all", label: "All Events" },
    { id: "culture", label: "Culture & Fun" },
    { id: "innovation", label: "Innovation" },
    { id: "business", label: "Business" },
    { id: "learning", label: "Learning" },
  ];

  const filteredEvents =
    activeTab === "all"
      ? events
      : events.filter((e) => e.category === activeTab);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white">
      {/* ─────────────────────────────────────────────────────────
          HERO SECTION
      ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/life/hero-bg.webp"
            alt="Life at AGSuite Hero"
            fill
            className="object-cover object-center scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000814]/90 via-[#001535]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </div>

        {/* Animated Particles/Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm font-semibold mb-8 backdrop-blur-md bg-white/5 border border-white/10 w-max px-4 py-2 rounded-full"
          >
            <Link
              href="/"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <Link
              href="/zoho"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Zoho
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
            <span className="text-white">Life at AGSuite</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-bold tracking-widest text-xs uppercase mb-6">
              Our Culture & People
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Work Hard. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Play Integrally.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium">
              We are a collective of thinkers, builders, and innovators
              passionate about technology. Discover the vibrant energy,
              collaborative spirit, and the exceptional people that make AGSuite
              a phenomenal place to grow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#team"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 scale-100 hover:scale-105"
              >
                Meet the Team <ArrowRight size={18} />
              </Link>
              <Link
                href="#environment"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Tour Our Office
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Card Overlap */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute -bottom-16 right-10 lg:right-20 hidden lg:flex bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl max-w-sm z-20 items-center gap-5"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
            <Heart className="text-white w-8 h-8" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">People First</h4>
            <p className="text-gray-300 text-sm mt-1 leading-snug">
              We believe our greatest asset is our incredibly talented team.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CORE VALUES / ENVIRONMENT HIGHLIGHTS
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why You'll Love It Here
            </h2>
            <p className="text-lg text-gray-600">
              At AGSuite, we don't just offer jobs. We offer a continuous
              journey of learning, shared triumphs, and an environment where
              your ideas actually matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Coffee,
                title: "Dynamic Environment",
                desc: "A vibrant workspace designed for collaboration, focus, and a bit of fun.",
              },
              {
                icon: Users,
                title: "Inclusive Culture",
                desc: "Diverse voices united by a common passion for excellence and innovation.",
              },
              {
                icon: Target,
                title: "Growth & Learning",
                desc: "Regular workshops, certifications, and endless opportunities to level up.",
              },
              {
                icon: Smile,
                title: "Work-Life Balance",
                desc: "Flexible policies, wellness programs, and events to keep you energized.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          OUR ENVIRONMENT & OFFICE (Bento Grid)
      ────────────────────────────────────────────────────────── */}
      <section id="environment" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">
                Headquarters
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Workspace
              </h2>
              <p className="text-gray-600 text-lg">
                Step into an office where creativity flows. Designed for the
                modern hybrid worker, our spaces are equipped to inspire
                top-tier engineering and consulting.
              </p>
            </div>
            <Link
              href="#contact-form"
              className="shrink-0 inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              Visit Us <ArrowRight size={18} />
            </Link>
          </div>

          {/* Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Large Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group min-h-[300px]"
            >
              <Image
                src={officePhotos[0]}
                alt="Office Space"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="text-white font-bold text-2xl flex items-center gap-3">
                  <MapPin className="text-blue-400" /> Main Collaboration Hub
                </p>
              </div>
            </motion.div>
            {/* Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden group min-h-[250px]"
            >
              <Image
                src={officePhotos[1]}
                alt="Pantry"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg flex items-center gap-2">
                  <Coffee className="text-blue-400 w-5 h-5" /> Cafeteria
                </p>
              </div>
            </motion.div>
            {/* Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden group min-h-[250px]"
            >
              <Image
                src={officePhotos[2]}
                alt="Meeting Room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg flex items-center gap-2">
                  <Users className="text-blue-400 w-5 h-5" /> Conference Rooms
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          OUR TEAM
      ────────────────────────────────────────────────────────── */}
      <section
        id="team"
        className="py-24 bg-[#0a0f1c] relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Meet the Minds Behind AGSuite
            </h2>
            <p className="text-lg text-gray-400">
              Our strength lies in our individuality. Together, our diverse team
              of NetSuite architects, developers, and consultants form an
              unstoppable force.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-colors"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                </div>
                <div className="absolute flex flex-col justify-end p-6 bottom-0 w-full z-10 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white font-bold text-xl">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium text-sm mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/zoho/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition shadow-xl"
            >
              Join Our Team <Briefcase size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          OFFICE EVENTS & CELEBRATIONS
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">
              Life Beyond Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Events & Celebrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We celebrate milestones, festivals, and everyday victories.
              Explore some of our memorable moments.
            </p>
          </div>

          {/* Filter logic */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {eventFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveTab(filter.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === filter.id
                    ? "bg-gray-900 text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredEvents.map((event, i) => (
                <motion.div
                  layout
                  key={event.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-blue-600 flex items-center gap-1.5">
                      <Camera size={14} /> {event.category.toUpperCase()}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-3">
                      <Calendar size={16} /> {event.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {event.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          ACHIEVEMENTS / AWARDS
      ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 text-center lg:text-left">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">
                Milestones
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Achievements
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Proof that when you focus on people and processes, success
                naturally follows. We are proud to be recognized by the
                industry's best.
              </p>
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 font-bold px-8 py-4 rounded-full border border-blue-100 hover:bg-blue-600 hover:text-white transition-all"
              >
                Partner With Us <ArrowRight size={18} />
              </Link>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden group ${i === 2 ? "sm:col-span-2 sm:w-1/2 justify-self-center" : ""}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
                  <ach.icon className="w-10 h-10 text-yellow-500 mb-6 relative z-10" />
                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900">
                      {ach.title}
                    </h3>
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-full">
                      {ach.year}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                    {ach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CONTACT SECTION (CTA)
      ────────────────────────────────────────────────────────── */}
      <ContactFormDesign4 />
    </div>
  );
}
