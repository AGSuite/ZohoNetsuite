"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const apps = [
  { name: "CRM", logo: "/images/odoo-apps/crm.svg", color: "#8b5cf6" },
  { name: "Accounting", logo: "/images/odoo-apps/accounting.svg", color: "#2563eb" },
  { name: "Sales", logo: "/images/odoo-apps/sales.svg", color: "#f97316" },
  { name: "Inventory", logo: "/images/odoo-apps/inventory.svg", color: "#0d9488" },
  { name: "Website", logo: "/images/odoo-apps/website.svg", color: "#714b67" },
  { name: "Purchase", logo: "/images/odoo-apps/purchase.svg", color: "#0f766e" },
  { name: "Helpdesk", logo: "/images/odoo-apps/helpdesk.svg", color: "#2563eb" },
  { name: "Marketing", logo: "/images/odoo-apps/marketing.svg", color: "#e11d48" },
  { name: "Manufacturing", logo: "/images/odoo-apps/manufacturing.svg", color: "#db2777" },
  { name: "eCommerce", logo: "/images/odoo-apps/ecommerce.svg", color: "#0284c7" },
  { name: "Projects", logo: "/images/odoo-apps/projects.svg", color: "#4f46e5" },
  { name: "Employees", logo: "/images/odoo-apps/employees.svg", color: "#e11d48" },
];

export default function OdooEcosystemSection() {
  return (
    <section id="odoo-ecosystem" className="relative overflow-hidden bg-[linear-gradient(135deg,#050308_0%,#13091f_38%,#2a1050_70%,#5b21b6_100%)] px-6 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(139,92,246,0.28),transparent_34%),radial-gradient(circle_at_88%_24%,rgba(192,132,252,0.22),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="flex justify-center">
          <div className="relative aspect-square w-full max-w-[590px]">
            <div className="odoo-ring-outer absolute inset-[8%] rounded-full border-2 border-dashed border-violet-300/55" />
            <div className="odoo-ring-inner absolute inset-[27%] rounded-full border-2 border-dashed border-purple-300/55" />

            <div className="absolute left-1/2 top-1/2 z-20 flex w-[94px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#643b9f]/15 bg-white p-3 shadow-[0_16px_40px_-16px_rgba(100,59,159,0.5)] sm:w-[138px] sm:p-5">
              <Image src="/images/logos/odoo-logo.png" alt="Odoo business applications" width={180} height={90} className="h-auto w-full object-contain" />
            </div>

            <div className="odoo-orbit-outer absolute inset-0 z-30">
              {apps.slice(0, 8).map((app, index) => {
                const angle = index * 45;
                const radians = (angle * Math.PI) / 180;
                return (
                  <div key={app.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${50 + 42 * Math.sin(radians)}%`, top: `${50 - 42 * Math.cos(radians)}%` }}>
                    <div>
                      <div className="odoo-counter-outer">
                        <div className="flex h-[44px] w-[60px] flex-col items-center justify-center rounded-lg border bg-white/95 shadow-[0_10px_24px_-10px_rgba(15,23,42,0.35)] backdrop-blur sm:h-[58px] sm:w-[88px] sm:rounded-xl" style={{ color: app.color, borderColor: `${app.color}45` }}>
                          <Image src={app.logo} alt={`${app.name} app`} width={34} height={34} className="h-5 w-5 object-contain sm:h-7 sm:w-7" />
                          <span dir="ltr" className="mt-0.5 whitespace-nowrap text-center text-[7px] font-bold leading-none tracking-wide text-slate-700 sm:mt-1 sm:text-[9px]">{app.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="odoo-orbit-inner absolute inset-0 z-30">
              {apps.slice(8).map((app, index) => {
                const angle = index * 90 + 45;
                const radians = (angle * Math.PI) / 180;
                return (
                  <div key={app.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${50 + 23 * Math.sin(radians)}%`, top: `${50 - 23 * Math.cos(radians)}%` }}>
                    <div>
                      <div className="odoo-counter-inner">
                        <div className="flex h-[42px] w-[58px] flex-col items-center justify-center rounded-lg border bg-white/95 shadow-[0_10px_22px_-10px_rgba(15,23,42,0.3)] backdrop-blur sm:h-[56px] sm:w-[84px] sm:rounded-xl" style={{ color: app.color, borderColor: `${app.color}45` }}>
                          <Image src={app.logo} alt={`${app.name} app`} width={32} height={32} className="h-5 w-5 object-contain sm:h-7 sm:w-7" />
                          <span dir="ltr" className="mt-0.5 whitespace-nowrap text-center text-[7px] font-bold leading-none tracking-wide text-slate-700 sm:mt-1 sm:text-[9px]">{app.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">One connected business platform</p>
          <h2 className="mt-4 max-w-xl bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-[clamp(1.5rem,3.4vw,2.8rem)] font-medium leading-[1.2] tracking-[-0.045em] text-transparent">See how the right Odoo apps can simplify your business.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Get a practical application roadmap built around your processes, priorities, and growth plans—not a generic software checklist.</p>

          <div className="mt-8 rounded-2xl border border-violet-300/25 bg-gradient-to-r from-white/10 to-violet-400/10 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">Complimentary strategy session</p>
            <p className="mt-2 text-lg font-semibold text-white">Get your personalized Odoo application roadmap.</p>
            <p className="mt-1 text-sm leading-6 text-slate-300">A focused 30-minute discovery session with clear recommendations for where to start and what to prioritize.</p>
          </div>

          <Link href="#contact" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#3f245f] shadow-xl shadow-black/25 transition hover:-translate-y-1 hover:bg-violet-100">
            Get my free Odoo roadmap <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes odoo-spin-clockwise { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes odoo-spin-counterclockwise { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        .odoo-ring-outer, .odoo-orbit-outer { animation: odoo-spin-clockwise 42s linear infinite; will-change: transform; }
        .odoo-counter-outer { animation: odoo-spin-counterclockwise 42s linear infinite; will-change: transform; }
        .odoo-ring-inner, .odoo-orbit-inner { animation: odoo-spin-counterclockwise 32s linear infinite; will-change: transform; }
        .odoo-counter-inner { animation: odoo-spin-clockwise 32s linear infinite; will-change: transform; }
        .odoo-orbit-outer:hover, .odoo-orbit-outer:hover .odoo-counter-outer, .odoo-orbit-inner:hover, .odoo-orbit-inner:hover .odoo-counter-inner { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .odoo-ring-outer, .odoo-ring-inner, .odoo-orbit-outer, .odoo-orbit-inner, .odoo-counter-outer, .odoo-counter-inner { animation: none; }
        }
      `}</style>
    </section>
  );
}