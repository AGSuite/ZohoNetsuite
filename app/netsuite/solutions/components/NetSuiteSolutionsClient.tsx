"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import FlipNumbers from 'react-flip-numbers';
import { Trophy, Users, Globe2, Rocket, Layout, Database, Share2, Code, ShieldCheck, HeartHandshake, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import FooterFormSection from '@/app/components/home/FooterFormSection';

export default function NetSuiteSolutionsClient() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const netSuiteSolutions = [
    {
      title: "CRM",
      description: "Replace spreadsheets with automated processes to improve customer responsiveness.",
      link: "/netsuite/solutions/crm"
    },
    {
      title: "SRP",
      description: "Improve cash flow and eliminate revenue leakage by completing projects within timelines.",
      link: "/netsuite/solutions/srp"
    },
    {
      title: "Business Intelligence",
      description: "Perform actionable analysis and gain operational insights across departments with SuiteAnalytics.",
      link: "/netsuite/solutions/business-intelligence"
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      description: "Automate core processes and gain real-time visibility into operational and financial performance.",
      link: "/netsuite/solutions/erp"
    },
    {
      title: "Accounting Software",
      description: "Transform general ledger management, optimize AR/AP, and streamline tax management.",
      link: "/netsuite/solutions/accounting"
    },
    {
      title: "Global Business Management",
      description: "Manage multiple subsidiaries from a single cloud solution, ensuring standardized processes globally.",
      link: "/netsuite/solutions/global"
    },
    {
      title: "OpenAir",
      description: "Leading cloud-based PSA solution that ensures timely project delivery through enhanced resource utilization.",
      link: "/netsuite/solutions/openair"
    },
    {
      title: "SuiteSuccess",
      description: "Complete suite of ERP, CRM, PSA, commerce, HR, and BI solutions on the NetSuite cloud platform.",
      link: "/netsuite/solutions/suitesuccess"
    },
    {
      title: "E-Commerce Solutions",
      description: "Unify business operations and commerce applications for personalized shopping experiences.",
      link: "/netsuite/solutions/ecommerce"
    }
  ];

  const stats = [
    { label: 'Enterprises Served', value: 180, suffix: '+', icon: Trophy },
    { label: 'NetSuite Experts', value: 50, suffix: '+', icon: Users },
    { label: 'Global Roll-outs', value: 50, suffix: '+', icon: Globe2 },
    { label: 'Years Experience', value: 15, suffix: '+', icon: Rocket },
  ];

  const services = [
    {
      title: "Digital Transformation",
      description: "Empowering businesses with modern, scalable, and automated digital solutions that streamline operations and accelerate growth.",
      icon: Layout,
      href: "/netsuite/services/digital-transformation"
    },
    {
      title: "Implementation",
      description: "Expert NetSuite implementation services ensuring a smooth transition ensuring your business processes are optimized for success.",
      icon: Database,
      href: "/netsuite/services/implementation"
    },
    {
      title: "Integration Services",
      description: "Connect your apps, ERP, CRM, and workflows seamlessly using API-led, cloud-to-cloud, and hybrid integrations tailored for your business.",
      icon: Share2,
      href: "/netsuite/services/integration"
    },
    {
      title: "SuiteCloud Development",
      description: "Build fast, efficient, and scalable business apps with NetSuite's SuiteCloud platform to automate processes and improve productivity.",
      icon: Code,
      href: "/netsuite/services/suitecloud"
    },
    {
      title: "Managed Services",
      description: "End-to-end support, monitoring, and optimization of your NetSuite environment so your business runs smoothly without downtime.",
      icon: ShieldCheck,
      href: "/netsuite/services/managed-services"
    },
    {
      title: "Consulting & Advisory",
      description: "Strategic guidance to help you align NetSuite with your long-term business goals and industry best practices.",
      icon: HeartHandshake,
      href: "/netsuite/services/consulting"
    }
  ];

  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);

  const challenges = [
    {
      title: "Complexity Overload",
      description: "As businesses grow, managing multiple disconnected functions—finance, sales, and operations—leads to massive operational complexity. Traditional systems often fail to keep pace, resulting in fragmented data and inefficient communication across departments. This lack of a central platform causes significant delays in decision-making and project execution.",
      image: "/images/lap/lap2.webp"
    },
    {
      title: "Reporting Friction",
      description: "Consolidating financial data manually from different business units can take weeks of painstaking manual work. By the time reports are finalized, the data is outdated, making real-time strategic decisions nearly impossible. Businesses lose their competitive edge when they cannot react quickly to market shifts due to stale reporting cycles.",
      image: "/images/lap/lap3.webp"
    },
    {
      title: "Manual Process Errors",
      description: "Relying on legacy spreadsheets for critical business data is a recipe for disaster. Human errors in data entry, version control issues, and broken formulas can lead to costly financial discrepancies and data inconsistencies that undermine stakeholders' trust. Moving away from manual processes is essential for maintaining accurate, audit-ready records.",
      image: "/images/lap/lap4.webp"
    },
    {
      title: "Visibility Gaps",
      description: "Without a unified view of the organization, leadership often lacks real-time insights into key performance indicators such as project profitability, resource allocation, and cash flow. These visibility gaps prevent proactive problem-solving, as issues are often discovered only after they have significantly impacted the bottom line.",
      image: "/images/lap/lap5.webp"
    },
    {
      title: "Integration Debt",
      description: "Many organizations struggle with 'brittle' IT architectures where legacy systems are connected via custom scripts that break during software updates. This accumulation of integration debt slows down digital transformation initiatives and makes it difficult to adopt new technologies that could streamline operations and improve customer experiences.",
      image: "/images/aboutus/heroimg.webp"
    }
  ];

  const benefits = [
    {
      title: "Accelerated Growth",
      description: "Scale your business effortlessly with a cloud-native platform that grows with you across new markets and subsidiaries.",
      image: "/images/aboutus/mission1.webp"
    },
    {
      title: "Total Visibility",
      description: "Real-time dashboards and unified data provide 360-degree visibility for faster, data-driven decision-making.",
      image: "/images/aboutus/niche.webp"
    },
    {
      title: "Future-Proof Platform",
      description: "Automatic bi-annual updates ensure you always have the latest features and security without disruption.",
      image: "/images/aboutus/vision.webp"
    },
    {
      title: "Lower Total Cost",
      description: "Reduce IT infrastructure costs by up to 50% by consolidating systems on a single cloud platform.",
      image: "/images/aboutus/social.webp"
    },
    {
      title: "Operational Excellence",
      description: "Automate lead-to-cash processes to improve efficiency and free teams for strategic, high-value work.",
      image: "/images/aboutus/CTA2.webp"
    }
  ];

  const addons = [
    {
      title: "India Localization",
      description: "Handle GST, Tax Audit, and local compliance within NetSuite with our certified localization suite.",
      link: "/netsuite/solutions/addons/india-localization"
    },
    {
      title: "Smart Commission",
      description: "Automate complex sales commission calculations and incentive structures directly in NetSuite.",
      link: "/netsuite/solutions/addons/smart-commission"
    },
    {
      title: "Data Backup",
      description: "Ensure your critical NetSuite data is securely backed up and accessible whenever you need it.",
      link: "/netsuite/solutions/addons/data-backup"
    },
    {
      title: "E-Commerce Connectors",
      description: "Sync your Shopify, Magento, or WooCommerce store with NetSuite for real-time inventory and order management.",
      link: "/netsuite/solutions/addons/connectors"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-gray-900 selection:text-white bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a]">
      {/* Premium Hero Section */}
      <section className="relative pt-12 pb-10 lg:pt-48 lg:pb-12 overflow-hidden text-white">
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
    
              <h1 className="text-5xl md:text-6xl font-semibold mb-8 leading-[1.05] tracking-tight text-white">
                Oracle <span className="text-blue-500">Net
                Suite</span> Business Solutions
              </h1>
              <p className="text-xl leading-relaxed font-light text-gray-300">
                AGSuite provides comprehensive NetSuite solutions tailored to your unique business needs. From core ERP to specialized add-ons, we help you scale with confidence.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/netsuite/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-900/40">
                  Get Started Now
                </Link>
                <Link href="#solutions" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
                  View Features
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 relative w-full aspect-square max-w-[550px] z-20"
            >
              <div className="w-full h-[450px] rounded-2xl bg-linear-to-br from-blue-600/20 to-indigo-900/20 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative group">
                <Image
                  src="/images/lap/lap1.webp"
                  alt="Oracle NetSuite Business Solutions"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000b21]/60 to-transparent" />
              </div>
              
              {/* Top Right Floating Card */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-10 -right-6 lg:-right-12 bg-gray-50 backdrop-blur-2xl border border-white/20 p-3 rounded-xl shadow-2xl max-w-[360px] z-20"
              >
                <div className="flex items-center gap-3">
                   <div className="p-2.5 bg-blue-600 rounded-xl">
                     <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <h4 className="text-xs font-semibold text-black  uppercase tracking-wider">38,000+ Clients                    The world's most deployed cloud ERP system.
</h4>
                </div>
                {/* <p className="text-sm text-blue-50/90 leading-relaxed font-medium">
                  The world's most deployed cloud ERP system.
                </p> */}
              </motion.div>

              {/* Bottom Center Quote Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-11 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl w-[85%] z-30 border border-white/30"
              >
                 <div className="flex flex-col items-center text-center">
                   <svg className="w-7 h-7 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                   </svg>
                   <p className="text-gray-900 text-xs font-bold uppercase tracking-wide leading-tight">
                     Digital transformation starts with a unified suite
                   </p>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction / What is NetSuite */}
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
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Introduction</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  What is Oracle NetSuite?
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Oracle NetSuite is the world's most deployed cloud Enterprise Resource Planning (ERP) solution. 
                Built from the ground up for the cloud, it provides a single, unified platform to manage every aspect of your business—from financials and CRM to inventory and e-commerce.
              </p>
              {/* <p className="text-lg text-gray-600 leading-relaxed font-light">
                With real-time visibility and a single source of truth, NetSuite empowers over 38,000 organizations globally to scale faster, work smarter, and drive sustainable growth.
              </p> */}
              <div className="pt-4">
                <Link href="/netsuite/solutions/why-netsuite/main" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Deep Dive into NetSuite <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image 
                src="/images/lap/group1.webp" 
                alt="NetSuite Unified Platform" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why NetSuite Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE - IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
            >
              <Image 
                src="/images/lap/group2.webp" 
                alt="Why Choose Oracle NetSuite for Business Growth" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>

            {/* RIGHT SIDE - CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Why Choose Us</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Why NetSuite is the Right Choice for Your Business
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Discover why thousands of fast-growing organizations worldwide trust Oracle NetSuite as their cloud ERP platform to drive digital transformation, streamline operations, and achieve sustainable growth in today's competitive landscape.
              </p>

              

              <div className="pt-4">
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Explore NetSuite Benefits <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* NetSuite Services Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <h2 className="text-5xl font-semibold text-gray-900 text-center">
            NetSuite Services
          </h2>

          <p className="text-gray-700 text-lg max-w-2xl text-center">
            We provide end-to-end services to ensure your NetSuite environment is perfectly aligned with your business needs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
            {services.map((service, index) => {
              const cardBgColors = [
                "bg-linear-to-br from-[#ffffff] to-[#eef0ff]",
                "bg-linear-to-br from-[#ffffff] to-[#eaf6ff]",
                "bg-linear-to-br from-[#ffffff] to-[#e8ffef]",
                "bg-linear-to-br from-[#ffffff] to-[#f9eaff]",
                "bg-linear-to-br from-[#ffffff] to-[#ffece8]",
                "bg-linear-to-br from-[#ffffff] to-[#eaf8ff]",
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                >
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    variants={{
                      initial: { scale: 1 },
                      hover: { 
                        scale: 1.04,
                        transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
                      }
                    }}
                    className={`
                      relative group rounded-2xl p-7 border border-gray-200 
                      transition-all duration-300 h-full shadow-xl hover:shadow-red-100
                      ${cardBgColors[index % cardBgColors.length]}
                    `}
                  >
                    {/* ICON with rotation animation triggered by card hover */}
                    <motion.div
                      variants={{
                        initial: { rotate: 0, y: 0 },
                        hover: { 
                          rotate: 360, 
                          y: -6,
                          transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }
                        }
                      }}
                      className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5"
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* TITLE */}
                    <h2 className="text-lg font-semibold text-gray-900 leading-tight">
                      {service.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {service.description}
                    </p>

                    {/* LINK */}
                    <div className="mt-6 border-t border-gray-300 pt-3">
                      <Link
                        href={service.href}
                        className="text-black hover:text-red-600 text-sm font-medium transition-all"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

     
      {/* Benefits Section */}
      <section className="py-24 bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a] overflow-hidden relative">
        {/* Decorative elements matching hero section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Benefits</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Key Advantages of NetSuite</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Discover how NetSuite transforms business operations and drives growth</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - IMAGE */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={benefits[activeBenefit].image}
                    alt={benefits[activeBenefit].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>  
            </div>

            {/* RIGHT SIDE - BENEFITS LIST */}
            <div className="space-y-4">
              {benefits.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeBenefit === index 
                      ? 'bg-white/10 border-blue-400/50 shadow-lg backdrop-blur-sm' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${
                      activeBenefit === index 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50' 
                        : 'bg-white/10 text-blue-300'
                    }`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${
                      activeBenefit === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {item.title}
                    </h4>
                  </div>
                  <AnimatePresence>
                    {activeBenefit === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-blue-100 mt-4 leading-relaxed pl-12">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a] overflow-hidden relative">
        {/* Decorative elements matching hero section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Challenges</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Common Business Challenges</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Understanding the obstacles that NetSuite helps you overcome</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - CHALLENGES LIST */}
            <div className="space-y-4">
              {challenges.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveChallenge(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeChallenge === index 
                      ? 'bg-white/10 border-blue-400/50 shadow-lg backdrop-blur-sm' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${
                      activeChallenge === index 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50' 
                        : 'bg-white/10 text-blue-300'
                    }`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${
                      activeChallenge === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {item.title}
                    </h4>
                  </div>
                  <AnimatePresence>
                    {activeChallenge === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-blue-100 mt-4 leading-relaxed pl-12">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChallenge}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={challenges[activeChallenge].image}
                    alt={challenges[activeChallenge].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>  
            </div>
          </div>
        </div>
      </section>

      {/* NetSuite Solutions Grid */}
      <section id="solutions" className="py-24 bg-linear-to-b from-white via-[#ffffff] to-[#ffffff] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">NetSuite Solutions</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions to power every aspect of your business operations
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {netSuiteSolutions.map((solution, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(to bottom right, #ffffff, #ffffff)",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                style={{
                  background: "linear-gradient(to bottom right, #0a1f44, #1a2f5a, #0f2847)"
                }}
                className="border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 ease-in-out group flex flex-col"
              >
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white group-hover:text-gray-900 mb-3 transition-colors duration-300 ease-in-out">
                    {solution.title}
                  </h4>
                  <p className="text-blue-100 group-hover:text-gray-600 leading-relaxed text-sm mb-4 transition-colors duration-300 ease-in-out">
                    {solution.description}
                  </p>
                </div>
                
                <Link 
                  href={solution.link} 
                  className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-300 ease-in-out mt-auto"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 overflow-hidden relative bg-gray-50">
         <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden"
            >
               {/* Background Image */}
               <Image
                 src="/images/lap/group1.webp"
                 alt="NetSuite Solutions Background"
                 fill
                 className="object-cover"
               />
               
               {/* Gradient Overlay - Dark left to transparent right */}
               <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-transparent" />
               
               {/* Decorative blur elements */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl -mr-32 -mt-32" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-3xl -ml-32 -mb-32" />

               {/* Content - Left Aligned */}
               <div className="relative z-10 max-w-2xl">
                 <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 leading-tight text-left">
                   Scale your business with the world's #1 Cloud ERP. Ready to get started?
                 </h2>
                 
                 <div className="flex justify-start">
                   <Link href="/netsuite/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                     Talk to an Expert
                   </Link>
                 </div>
               </div>
            </motion.div>
         </div>
      </section>

      <FooterFormSection />
    </div>
  );
}
