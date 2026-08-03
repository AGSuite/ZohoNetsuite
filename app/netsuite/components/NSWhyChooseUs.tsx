"use client";
import Image from "next/image";
import { Briefcase, Sparkles, Rocket, Layers, Award, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const NSWhyChooseUs = () => {
  const points = [
    {
      icon: <Briefcase className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />,
      title: "CFO-First ERP Strategy",
      desc: "We solve real CFO challenges like delayed reporting, compliance risks, manual processes, and lack of business visibility with intelligent NetSuite solutions.",
      accent: "from-blue-500 via-indigo-500 to-cyan-400",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />,
      title: "AI-Driven Automation & Real-Time Insights",
      desc: "Reduce manual work, accelerate decision-making, and gain real-time financial visibility with AI-powered automation and smart dashboards.",
      accent: "from-indigo-500 via-purple-500 to-pink-500",
    },
    {
      icon: <Rocket className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-300" />,
      title: "Faster ROI with Scalable ERP Solutions",
      desc: "Our implementation approach focuses on rapid deployment, faster user adoption, and measurable business outcomes with minimal disruption.",
      accent: "from-cyan-400 via-teal-500 to-emerald-400",
    },
    {
      icon: <Layers className="w-6 h-6 text-violet-400 group-hover:text-white transition-colors duration-300" />,
      title: "Expertise in Complex Finance Operations",
      desc: "From multi-entity consolidation and intercompany accounting to compliance automation and revenue recognition—we simplify complex finance processes.",
      accent: "from-violet-500 via-purple-500 to-indigo-500",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400 group-hover:text-white transition-colors duration-300" />,
      title: "Industry-Focused NetSuite Expertise",
      desc: "Tailored ERP solutions designed specifically for IT/ITES, Financial Services, Manufacturing, Retail, SaaS, and high-growth enterprises.",
      accent: "from-amber-400 via-orange-500 to-pink-500",
    },
    {
      icon: <Handshake className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors duration-300" />,
      title: "Long-Term Technology & Growth Partner",
      desc: "Beyond implementation, we continuously optimize, support, and scale your NetSuite ecosystem as your business evolves.",
      accent: "from-emerald-400 via-teal-500 to-blue-500",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 font-['DM_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/Background/teambg2.webp"
              alt="Business technology background"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-950/95 via-gray-900/90 to-gray-900/75" />

          {/* Content */}
          <div className="relative z-20 p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mb-12">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4 backdrop-blur-sm"
              >
                Our Advantage
              </motion.span>
              <motion.h2
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight"
              >
                Why Choose AGSuite
              </motion.h2>
            </div>

            {/* 2-Column Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: "easeOut"
                  }}
                  className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10 hover:border-white/30 cursor-pointer overflow-hidden"
                >
                  {/* Bright Color Gradient Glow Shadow - ON MOUSE OVER */}
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${point.accent} blur-md opacity-0 group-hover:opacity-45 transition duration-500 pointer-events-none`} />

                  {/* Top Gradient Border Accent Line on Hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${point.accent} opacity-0 group-hover:opacity-100 transition duration-300`} />

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon Box with Bright Gradient Hover State */}
                    <div className={`shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r ${point.accent} group-hover:border-transparent group-hover:shadow-lg`}>
                      {point.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 transition-all duration-300">
                        {point.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NSWhyChooseUs;




