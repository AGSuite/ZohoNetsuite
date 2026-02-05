"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, GraduationCap, Award, CheckCircle2, ArrowRight, ShieldCheck, Zap, Laptop, Globe, Code } from 'lucide-react';
import ContactFormDesign4 from '@/app/netsuite/components/ContactFormDesign4';

export default function NetSuiteTrainingClient() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const trainingModules = [
    {
      title: "Functional Training",
      description: "Comprehensive training for end-users and administrators on core NetSuite modules including ERP, CRM, and Inventory Management.",
      icon: Users,
      benefits: ["Module-specific workflows", "End-user best practices", "Admin configuration"]
    },
    {
      title: "Technical Training",
      description: "Deep dive into SuiteCloud platform development, SuiteScript, and system integration for your technical team.",
      icon: Code,
      benefits: ["SuiteScript 2.x mastery", "Integration architecture", "Custom app building"]
    },
    {
      title: "Analytics & Reporting",
      description: "Master NetSuite's reporting tools, saved searches, and SuiteAnalytics to turn data into actionable business intelligence.",
      icon: Laptop,
      benefits: ["Custom dashboard creation", "Advanced saved searches", "Pivot table mastery"]
    },
    {
      title: "New Release Training",
      description: "Stay ahead of NetSuite's bi-annual updates with targeted training on new features and functional enhancements.",
      icon: Zap,
      benefits: ["Feature impact analysis", "Workflow optimization", "New UI navigation"]
    }
  ];

  const stats = [
    { label: 'Professionals Trained', value: 1200, suffix: '+', icon: GraduationCap },
    { label: 'Course Hours', value: 5000, suffix: '+', icon: BookOpen },
    { label: 'Certification Rate', value: 95, suffix: '%', icon: Award },
    { label: 'Global Reaches', value: 15, suffix: '+', icon: Globe },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const trainingModes = [
    {
      title: "On-Site Training",
      description: "Hands-on, interactive training sessions delivered directly at your office location for maximum team engagement.",
      image: "/images/aboutus/heroimg1.webp"
    },
    {
      title: "Virtual Classrooms",
      description: "Live, instructor-led remote training sessions that allow your distributed workforce to learn from anywhere.",
      image: "/images/lap/lap4.webp"
    },
    {
      title: "Custom Curriculum",
      description: "Tailor-made training programs designed specifically to match your unique business processes and NetSuite configuration.",
      image: "/images/aboutus/vision.webp"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a]">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-2xl"
            >
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase py-2 px-4 rounded-full mb-6 text-blue-400 bg-blue-900/40 border border-blue-800">
                Empower Your Workforce
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight text-white">
                Expert <span className="text-blue-500">NetSuite</span> Training Services
              </h1>
              <p className="text-xl leading-relaxed font-light text-gray-300">
                Maximize your NetSuite ROI with specialized training programs. From end-user basics to advanced SuiteCloud development, we ensure your team has the skills to succeed.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/netsuite/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-900/40">
                  Book a Training Session
                </Link>
                <Link href="#modules" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
                  View Modules
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 relative w-full aspect-square max-w-[550px] z-20"
            >
              <div className="w-full h-full rounded-[3rem] bg-linear-to-br from-blue-600/20 to-indigo-900/20 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative group">
                <Image
                  src="/images/lap/lap2.webp"
                  alt="NetSuite Training Services"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000b21]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Capability Building</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Bridge the Skills Gap
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                The most sophisticated ERP is only as effective as the people who use it. Our training services are designed to eliminate user frustration and ensure your staff can leverage NetSuite's full potential to drive business growth.
              </p>
              <div className="space-y-4">
                {["Role-based training paths", "Hands-on practical exercises", "Ongoing support and mentoring"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image
                src="/images/aboutus/heroimg.webp"
                alt="NetSuite Training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Our Curriculum</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Training Modules</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer targeted modules designed to address the specific needs of different roles within your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                    <module.icon className="text-blue-600 group-hover:text-white transition-colors" size={32} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-gray-900">{module.title}</h4>
                    <p className="text-gray-600 leading-relaxed italic text-sm">
                      {module.description}
                    </p>
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      {module.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-500">
                          <div className="w-1 h-1 bg-blue-500 rounded-full" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modes of Delivery */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Delivery Methods</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="space-y-4">
              {trainingModes.map((mode, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeTab === index ? 'bg-blue-50 border-blue-200 shadow-sm' : 'bg-transparent border-transparent hover:bg-gray-50'
                    }`}
                >
                  <h4 className={`text-xl font-bold transition-colors ${activeTab === index ? 'text-blue-700' : 'text-gray-500'}`}>
                    {mode.title}
                  </h4>
                  <AnimatePresence>
                    {activeTab === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 mt-4 leading-relaxed font-light">
                          {mode.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 h-full min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={trainingModes[activeTab].image}
                    alt={trainingModes[activeTab].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 overflow-hidden relative bg-[#000b21]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-blue-600/10 border border-blue-500/20 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Empower your team with expert NetSuite knowledge.
            </h2>

            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <Link href="/netsuite/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                Talk to an Instructor
              </Link>
              <Link href="/netsuite/services" className="px-10 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md border border-white/10">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
