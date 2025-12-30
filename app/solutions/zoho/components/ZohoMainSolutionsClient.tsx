"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Trophy, Globe2, Share2, Rocket, Layout, Database, Code, ShieldCheck, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import FooterFormSection from '../../../components/home/FooterFormSection';
import FlipNumbers from 'react-flip-numbers';

export default function ZohoMainSolutionsClient() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const categories = [
    {
      title: "Sales & Marketing",
      description: "Close more deals and reach your audience with Zoho CRM, Marketing Automation, and social media management tools.",
      image: "/images/lap/lap2.webp",
      highlight: "Revenue Growth"
    },
    {
      title: "Finance & Operations",
      description: "Manage your books, inventory, and warehouse with Zoho Books and Inventory, integrated for seamless operations.",
      image: "/images/lap/lap3.webp",
      highlight: "Compliance"
    },
    {
      title: "Human Resources",
      description: "Streamline recruitment, employee management, and payroll with Zoho People and Recruit.",
      image: "/images/lap/lap4.webp",
      highlight: "Talent Management"
    },
    {
      title: "Customer Service",
      description: "Deliver exceptional support across all channels with Zoho Desk and Assist.",
      image: "/images/lap/lap5.webp",
      highlight: "Support Excellence"
    },
    {
      title: "BI & Analytics",
      description: "Turn your data into actionable insights with Zoho Analytics and advanced reporting features.",
      image: "/images/aboutus/niche1.webp",
      highlight: "Data Driven"
    },
    {
      title: "Collaboration & Email",
      description: "Work together effectively with Zoho Mail, Cliq, and our comprehensive workplace suite.",
      image: "/images/aboutus/visiongirl.webp",
      highlight: "Team Synergy"
    }
  ];

  const stats = [
    { label: 'Enterprises Managed', value: 300, suffix: '+', icon: Trophy },
    { label: 'Workflows Automated', value: 1200, suffix: '+', icon: Globe2 },
    { label: 'Data Accuracy', value: 99, suffix: '%', icon: Share2 },
    { label: 'Years Experience', value: 12, suffix: '+', icon: Rocket },
  ];

  const services = [
    {
      title: "Implementation",
      description: "End-to-end setup of Zoho applications tailored specifically to your organizational structure and goals.",
      icon: Layout,
      href: "/zoho/services/implementation"
    },
    {
      title: "Customization",
      description: "Personalize your Zoho environment with custom fields, layouts, and automation scripts to fit your workflow.",
      icon: Database,
      href: "/zoho/services/creator-development"
    },
    {
      title: "Integrations",
      description: "Bridge the gap between Zoho and your existing tools for a truly unified data ecosystem.",
      icon: Share2,
      href: "/zoho/services/integration"
    },
    {
      title: "Training",
      description: "Empower your workforce with hands-on sessions to ensure high adoption rates and expert usage.",
      icon: Code,
      href: "/zoho/services/training-services"
    },
    {
      title: "Managed Support",
      description: "Dedicated assistance to keep your Zoho instance running smoothly as your business evolves.",
      icon: ShieldCheck,
      href: "/zoho/services/managed-services"
    },
    {
      title: "Strategic Consulting",
      description: "Expert advice on scaling your operations and choosing the right mix of Zoho applications.",
      icon: HeartHandshake,
      href: "/zoho/services/consulting"
    }
  ];

  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);

  const challenges = [
    {
      title: "Disconnected Applications",
      description: "As your organization grows, managing separate, unlinked applications for sales, HR, and finance results in dangerous data silos and massive operational drag. This fragmentation prevents a clear, unified view of the business, leading to missed opportunities and increased overhead. A truly integrated ecosystem is the only way to ensure your data works for you, not against you.",
      image: "/images/lap/lap2.webp"
    },
    {
      title: "Manual Data Entry",
      description: "Manually entering the same information across multiple platforms significantly increases error rates and wastes hundreds of productive hours every single month. These manual processes create bottlenecks that slow down your entire business cycle and frustrate your workforce. Automating these repetitive tasks allows your team to focus on the high-value strategic work.",
      image: "/images/lap/lap3.webp"
    },
    {
      title: "Security & Governance Risk",
      description: "Managing user permissions across dozens of independent applications creates significant security blind spots and compliance risks for the enterprise. Without centralized governance, it is nearly impossible to maintain a secure audit trail or ensure that sensitive data is protected consistently. A unified platform provides the robust administrative control required for modern security.",
      image: "/images/lap/lap4.webp"
    },
    {
      title: "Information Transparency",
      description: "Critical business information often remains trapped in individual employee mailboxes or scattered local spreadsheets, preventing cross-departmental collaboration. This lack of transparency leads to inconsistent customer experiences and makes it difficult for leadership to get an accurate, real-time pulse on KPIs or project statuses across the organization.",
      image: "/images/lap/lap5.webp"
    },
    {
      title: "Slow Operational Response",
      description: "Without automated workflows, internal requests and customer support tickets often get buried, leading to frustrating delays and lost revenue. These slow response times can significantly damage your brand reputation and customer satisfaction over time. Implementing intelligent, automated task routing ensures that every critical request is addressed by the right person promptly.",
      image: "/images/aboutus/heroimg.webp"
    }
  ];

  const benefits = [
    {
      title: "Unified Business Suite",
      description: "Unify every department—from sales and marketing to finance and HR—with a single, cohesive operating system designed for modern scale. Zoho One ensures that data flows seamlessly from lead to cash, providing your entire organization with a single, verifiable source of truth. This deep integration eliminates friction and empowers teams to work in perfect alignment.",
      image: "/images/aboutus/mission1.webp"
    },
    {
      title: "End-to-End Automation",
      description: "Implement sophisticated, cross-app automated workflows that take care of repetitive tasks and complex approval processes throughout your entire business. By automating these routines, you significantly reduce human error and free up your creative workforce to focus on the innovations that truly differentiate your brand in a competitive global market.",
      image: "/images/aboutus/niche1.webp"
    },
    {
      title: "Simplified Admin Management",
      description: "Take advantage of centralized administrative controls for all 55+ Zoho applications, making user management and security auditing completely effortless. This consolidated approach to IT management reduces complexity, lowers ongoing administrative costs, and ensures that your organization stays compliant with the latest data regulations.",
      image: "/images/aboutus/visiongirl.webp"
    },
    {
      title: "Real-time Strategic Insights",
      description: "With all your disparate business data living in a single, unified ecosystem, you can leverage advanced BI to gain deep, actionable insights into your operations. From complex sales forecasting to real-time project profitability tracking, have the critical numbers you need to make confident, data-driven decisions that propel your business forward.",
      image: "/images/aboutus/heroimg1.webp"
    },
    {
      title: "Flexible and Cost-Effective Scaling",
      description: "Zoho's flexible and scalable pricing models allow your business to add new capabilities and users without the massive overhead associated with multiple individual software contracts. This predictable cost structure enables you to expand your digital capabilities as your business grows, ensuring your technology investment always delivers maximum ROI.",
      image: "/images/aboutus/mission.webp"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-red-900 selection:text-white bg-linear-to-b from-[#1a0505] via-[#1a0505] to-[#0a0a0a]">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-2xl"
            >
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase py-2 px-4 rounded-full mb-6 text-red-400 bg-red-900/40 border border-red-800">
                Advanced Zoho Experts
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight text-white">
                Zoho <span className="text-red-500">Business</span> Solutions
              </h1>
              <p className="text-xl leading-relaxed font-light text-gray-300">
                Run your entire business on Zoho with a unified suite of applications designed to help you scale, automate, and succeed. AGSuite provides the expertise to pull it all together.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact-us" className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition shadow-xl shadow-red-900/40">
                  Talk to an Expert
                </Link>
                <Link href="#solutions" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
                  Explore Categories
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 relative w-full aspect-square max-w-[550px] z-20"
            >
              <div className="w-full h-full rounded-[3rem] bg-linear-to-br from-red-600/20 to-amber-900/20 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(220,38,38,0.2)] relative group">
                <Image
                  src="/images/lap/lap1.webp"
                  alt="Zoho Business Solutions"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a0505]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 relative z-20 -translate-y-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-10 rounded-[3rem] border border-red-500/20 backdrop-blur-xl bg-red-600/5 shadow-2xl shadow-red-900/20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-400">
                  <stat.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-black text-white flex items-center">
                    <FlipNumbers
                      height={48}
                      width={32}
                      color="white"
                      play={statsInView}
                      numbers={stat.value.toString()}
                      duration={2}
                    />
                    {stat.suffix && <span className="ml-1 -translate-y-1 inline-block">{stat.suffix}</span>}
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2 text-gray-400">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
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
                <h2 className="text-red-600 font-bold uppercase tracking-wider text-sm">Platform</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Seamlessly Integrated Business Ecosystem
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Why use twenty different logins and disconnected spreadsheets when you can have one unified platform? Zoho provides the breadth and depth to handle everything from your first lead to your final audit.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Our role is to bridge the technical gap—ensuring your Zoho applications talk to each other and to your existing team, removing friction and boosting productivity from day one.
              </p>
              <div className="pt-4">
                <Link href="/zoho/solutions" className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  View Full Product Suite <ArrowRight size={18} />
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
                src="/images/aboutus/heroimg1.webp" 
                alt="Zoho Integration" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-red-600 font-bold uppercase tracking-wider text-sm">Comprehensive Delivery</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Zoho Solution Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We don't just sell software; we deliver results through a dedicated lifecycle of support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <service.icon className="text-red-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6 italic text-sm">
                  {service.description}
                </p>
                <Link href={service.href} className="text-red-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Categories Grid */}
      <section id="solutions" className="py-24 border-y bg-[#1a0505] border-red-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Explore Our Solutions</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Tailored solutions for every department in your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/10 transition-all group flex flex-col"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-red-900/60 to-transparent" />
                </div>

                <div className="space-y-4 flex-1">
                  <span className="text-red-400 text-[10px] font-bold uppercase tracking-[0.2em]">{feature.highlight}</span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-1 bg-red-500 rounded-full" />
                  <p className="text-gray-300 leading-relaxed font-light text-sm">
                    {feature.description}
                  </p>
                </div>

                <Link href="/free-consultation" className="mt-8 inline-flex items-center gap-2 text-red-400 font-bold hover:text-red-300 transition group/link text-xs uppercase tracking-widest">
                  View Specifications
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Challenges</span>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mt-6">Overcoming Growth Hurdles</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="order-2 lg:order-1 space-y-4">
              {challenges.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveChallenge(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeChallenge === index ? 'bg-gray-50 border-gray-200 shadow-sm' : 'bg-transparent border-transparent hover:bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full transition-colors ${activeChallenge === index ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeChallenge === index ? 'text-gray-900' : 'text-gray-500'}`}>
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
                        <p className="text-gray-600 mt-4 leading-relaxed font-light pl-11">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2 relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 h-full min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChallenge}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={challenges[activeChallenge].image}
                    alt={challenges[activeChallenge].title}
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

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Benefits</span>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mt-6">Advantages of Zoho One</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200 h-full min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={benefits[activeBenefit].image}
                    alt={benefits[activeBenefit].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-4">
              {benefits.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeBenefit === index ? 'bg-white border-red-200 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full transition-colors ${activeBenefit === index ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeBenefit === index ? 'text-gray-900' : 'text-gray-500'}`}>
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
                        <p className="text-gray-600 mt-4 leading-relaxed font-light pl-11">
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

      {/* Modern CTA */}
      <section className="py-24 overflow-hidden relative bg-[#1a0505]">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-red-600/10 border border-red-500/20 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-3xl -mr-32 -mt-32" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 blur-3xl -ml-32 -mb-32" />

               <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                 Ready to empower your team with Zoho?
               </h2>
               
               <div className="flex flex-wrap justify-center gap-6 relative z-10">
                 <Link href="/contact-us" className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition shadow-xl">
                   Talk to an Expert
                 </Link>
                 <Link href="/zoho/solutions" className="px-10 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md border border-white/10">
                   Explore Products
                 </Link>
               </div>
            </motion.div>
         </div>
      </section>

      <FooterFormSection />
    </div>
  );
}
