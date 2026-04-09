"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ShoppingBag, Package, Truck, Globe, Users, Zap, ArrowRight, Check, ChevronRight, BarChart3, CheckCircle2, TrendingUp, Layers } from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";

const PARTICLES = [{ w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 }, { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 }, { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 }, { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 }, { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 }, { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 }];

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) spring.set(value); else spring.set(0); }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function MagentoConnectorPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pageFaqs = [
    { q: "Does the connector support both Adobe Commerce B2B and B2C in the same integration?", a: "Yes. The Magento Connector handles both commerce models in a single integration — with separate processing logic for B2B company accounts, shared catalogs, and PO-based ordering alongside standard B2C guest and registered checkout flows." },
    { q: "How does Adobe Commerce Multi-Source Inventory (MSI) work with NetSuite?", a: "Our connector fully maps Adobe Commerce MSI sources to NetSuite Multi-Location Inventory locations. Stock reservations, per-source quantities, and priority-based source selection are all synchronized between the two platforms in real time." },
    { q: "Can we sync configurable, bundle, and grouped products?", a: "Yes. All Adobe Commerce native product types — simple, configurable, virtual, bundled, and grouped — are fully supported. Configurable product variants are mapped to NetSuite item variants with complete attribute and option sync." },
    { q: "How does tier and volume pricing sync work?", a: "NetSuite price levels and customer group pricing are mapped to Adobe Commerce shared catalog rules and tier price tables. When you update pricing in NetSuite, changes are pushed automatically to the corresponding Adobe Commerce price rules — no manual catalog management needed." },
    { q: "How are Adobe Commerce B2B company accounts handled?", a: "Each B2B company account in Adobe Commerce is linked to its corresponding company or customer in NetSuite. Credit limits, payment terms, purchase order workflows, and approval rules are all synchronized between both platforms." },
    { q: "What happens when a customer returns a configurable product?", a: "Returns and refunds are handled at the variant level — the correct SKU inventory is restored, the corresponding credit memo is created in NetSuite, and the refund is reconciled against the original order. All return workflows support both online and in-store scenarios." },
    { q: "Does the connector support global multi-site Adobe Commerce setups?", a: "Yes. Multi-website and multi-store-view Adobe Commerce setups are fully supported, with each website or store view mappable to a separate NetSuite subsidiary, currency, and tax jurisdiction for complete multi-entity financial reporting." },
    { q: "How long does the Magento Connector implementation take?", a: "A standard B2C implementation takes 4–6 weeks. B2B-enabled implementations with shared catalog, MSI, and company account sync typically take 6–8 weeks due to the additional configuration complexity." },
  ];

  const stats = [
    { label: "Order Speed Gain", value: 90, suffix: "%", icon: Zap },
    { label: "Error Reduction", value: 99, suffix: "%", icon: CheckCircle2 },
    { label: "Products Synced", value: 50, suffix: "k+", icon: Package },
    { label: "Growth Enablement", value: 100, suffix: "%", icon: TrendingUp },
  ];

  const modules = [
    { title: "Order Management", description: "Automated order flow from Adobe Commerce to NetSuite including all customer data and line items.", image: "/images/modules/dashboard module.webp", color: "#1e3a8a", rgb: "30,58,138" },
    { title: "Inventory Sync", description: "Real-time inventory updates for single or multi-source inventory across all warehouse locations.", image: "/images/modules/dashbord module.webp", color: "#065f46", rgb: "6,95,70" },
    { title: "Customer Sync", description: "Sync customer groups, company accounts, addresses, and credit limits for B2B operations.", image: "/images/modules/working module.webp", color: "#7c2d12", rgb: "124,45,18" },
    { title: "Shipment Tracking", description: "Push tracking information from NetSuite back to Adobe Commerce the moment orders ship.", image: "/images/modules/any module.webp", color: "#4c1d95", rgb: "76,29,149" },
    { title: "Price List Sync", description: "Sync complex NetSuite price levels and customer group pricing directly to Adobe Commerce.", image: "/images/modules/any modules.webp", color: "#0c4a6e", rgb: "12,74,110" },
    { title: "Tier Pricing", description: "Support for volume-based pricing structures defined in NetSuite and synced to catalog rules.", image: "/images/modules/module8.webp", color: "#713f12", rgb: "113,63,18" },
    { title: "Product Catalog Sync", description: "Manage thousands of SKUs and product variants from NetSuite and publish to Adobe Commerce.", image: "/images/modules/sheet module.webp", color: "#134e4a", rgb: "19,78,74" },
    { title: "Multi-Source Inventory", description: "Full support for Adobe Commerce MSI and NetSuite Multi-Location Inventory per warehouse.", image: "/images/modules/csm modules.webp", color: "#831843", rgb: "131,24,67" },
    { title: "B2B Company Accounts", description: "Sync company accounts, credit limits, and purchase order workflows for B2B buyers.", image: "/images/modules/managging together module.webp", color: "#1e3a8a", rgb: "30,58,138" },
    { title: "Omnichannel Returns", description: "Manage returns and refunds seamlessly across online and offline channels from NetSuite.", image: "/images/modules/account modules.webp", color: "#064e3b", rgb: "6,78,59" },
    { title: "Configurable Products", description: "Handle simple, configurable, bundled, and grouped products with full variant relationship sync.", image: "/images/modules/chatt mdoule.webp", color: "#78350f", rgb: "120,53,15" },
    { title: "Tax Compliance", description: "Accurate tax calculation and reporting for domestic and global Adobe Commerce sales.", image: "/images/modules/mobile module.webp", color: "#3b0764", rgb: "59,7,100" },
  ];

  const benefits = [
    { title: "B2B & B2C in One Integration", description: "Adobe Commerce is used for both B2B and B2C commerce — and our connector handles both models in a single integration, with different logic for each order type, customer group, and pricing rule.", image: "/images/lap/lap5.webp", points: ["Corporate account and PO sync", "Customer group pricing support", "Shared catalog integration", "B2B credit limit enforcement"] },
    { title: "Complex Catalog Without Limits", description: "Manage thousands of SKUs, product variants, configurable products, bundles, and grouped items from NetSuite — then publish to Adobe Commerce automatically with no manual catalogue management.", image: "/images/lap/lap2.webp", points: ["All Adobe Commerce product types", "Variant and option sync", "Bundle and grouped product support", "Attribute set mapping"] },
    { title: "Multi-Source Inventory Precision", description: "Our connector fully supports Adobe Commerce Multi-Source Inventory alongside NetSuite Multi-Location Inventory — giving you accurate per-warehouse stock visibility across both platforms.", image: "/images/people/fourteam.webp", points: ["Per-location inventory accuracy", "Source-stock mapping", "Real-time reservation updates", "Low-stock alerting"] },
    { title: "Tier & Volume Pricing", description: "Sync NetSuite's complex tier and volume pricing structures directly to Adobe Commerce shared catalogs and customer group price rules — eliminating manual price management entirely.", image: "/images/people/laptopmen2.webp", points: ["Tier price sync by quantity", "Customer group price rules", "Shared catalog support", "Currency-specific pricing"] },
    { title: "Real-Time Order Processing", description: "High-volume Adobe Commerce stores need fast order processing. Our connector ensures every order reaches NetSuite within minutes — not hours — enabling immediate warehouse action and faster shipping.", image: "/images/lap/lap3.webp", points: ["Sub-5-minute order delivery", "High-volume API optimized", "Retry and error handling", "Custom business logic support"] },
    { title: "Tax & Global Compliance", description: "Whether you sell nationally or globally, our connector ensures tax codes, rates, and calculation logic are correctly applied to every Adobe Commerce order as it enters NetSuite.", image: "/images/lap/lap4.webp", points: ["Tax code mapping by region", "VAT and GST support", "Tax-exempt customer handling", "Compliance audit trails"] },
  ];

  const CARD_BG = "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)";

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg,#000814,#000f22,#001535)" }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/50">Add-Ons</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/80">Magento Connector</span>
          </motion.nav>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">NetSuite Magento Connector</span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                Connect Adobe Commerce (Magento) with NetSuite for unified B2B and B2C operations — orders, inventory, catalog, pricing, and customers synced automatically.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl hover:scale-105">
                  Connect Magento Now <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/lap/lap3.webp" alt="Magento Connector" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><Layers className="w-5 h-5 text-white" /></div>
                    <div><p className="text-gray-900 text-sm font-bold">Adobe Commerce ↔ NetSuite</p><p className="text-gray-500 text-xs mt-0.5">B2B · B2C · MSI · Catalog · Pricing</p></div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8 }} className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><Globe className="w-5 h-5 text-white" /></div>
                  <div><p className="text-gray-900 text-[13px] font-bold whitespace-nowrap">NetSuite Magento Connector</p><p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">B2B · B2C · Multi-Source · Configurable</p></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="border-t border-white/15 pt-5 sm:pt-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="text-center group">
                  <div className="flex justify-center mb-2 sm:mb-3"><div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl group-hover:bg-blue-700/30 transition-colors"><s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform" /></div></div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1"><Counter value={s.value} /><span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span></div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm px-2">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* STICKY NAV */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 overflow-x-auto py-4">
            {[["What is it?", "#what-is"], ["Capabilities", "#modules"], ["Benefits", "#benefits"], ["Pricing", "#pricing"], ["FAQ", "#faq"]].map(([label, href]) => (
              <a key={href} href={href} className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* WHAT IS */}
      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex items-center justify-center rounded-2xl p-4 mt-15" style={{ minHeight: 340 }}>
              <Image src="/images/netsuiteimages/solutions/NetsuiteSRP.webp" alt="Magento Connector" width={560} height={380} className="w-full h-auto rounded-xl object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6 mt-15">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">Unify Adobe Commerce and NetSuite — B2B & B2C Together.</h3>
              <p className="text-lg text-gray-600 leading-relaxed">The NetSuite Magento Connector bridges your Adobe Commerce storefront with NetSuite ERP — handling the complexity of B2B accounts, multi-source inventory, tiered pricing, and high-volume order processing automatically.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Whether you run B2C, B2B, or both, our connector keeps every product, price, order, customer, and inventory record in sync with no manual intervention required.</p>
              <div className="pt-4">
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}>
                  Explore Magento Connector <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight size={17} /></motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="py-16 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl font-medium text-gray-900 text-center">Magento Integration Capabilities</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-600 text-lg max-w-2xl text-center">12 enterprise-grade capabilities for Adobe Commerce and NetSuite integration</motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, i) => (
              <Link key={i} href="#contact-form" className="block">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer" style={{ minHeight: 340 }}>
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image src={mod.image} alt={mod.title} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom,transparent 0%,rgba(${mod.rgb},0.4) 70%,rgba(${mod.rgb},1) 100%)` }} />
                  </div>
                  <div className="flex-1 p-5 pb-6 flex flex-col relative" style={{ backgroundColor: `rgb(${mod.rgb})` }}>
                    <h4 className="text-white font-bold text-lg mb-2">{mod.title}</h4>
                    <p className="text-white/90 text-sm leading-snug line-clamp-3">{mod.description}</p>
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase text-[10px] px-3 py-1.5 rounded-full shadow-md">Explore <ArrowRight size={10} /></span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36" style={{ background: CARD_BG }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle,rgba(37,99,235,0.25) 0%,transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Why Merchants Choose Our Magento Connector</h3>
          </motion.div>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center">
              {benefits.map((item, index) => (
                <button key={index} onClick={() => setActiveBenefit(index)} suppressHydrationWarning
                  className={`group w-full flex flex-col px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-white shadow-xl border-l-4 border-blue-600' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 ? <Users size={20} /> : index === 1 ? <Package size={20} /> : index === 2 ? <Layers size={20} /> : index === 3 ? <BarChart3 size={20} /> : index === 4 ? <Zap size={20} /> : <Globe size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3 pl-9">
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">{item.points.map((pt, pi) => (<li key={pi} className="flex items-start gap-2 text-sm text-gray-600"><Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}</li>))}</ul>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-12 bg-gray-50 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#000d1a' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-blue-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Much Does the Magento Connector Cost?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">The NetSuite Magento Connector is priced per-instance on a monthly or annual subscription — Business for single B2C store, Pro for B2B and B2C operations with up to 3 store views, and Enterprise for high-volume multi-site operations with unlimited views and dedicated management. Contact our team for a custom quote based on your catalog size, order volume, and B2B requirements.</p>
                <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-blue-400 hover:text-white transition-all shadow-md">
                  Talk to an Integration Expert <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#001022]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#002040]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#003060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/people5_11zon.webp" alt="Magento Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about the NetSuite Magento Connector — B2B, B2C, MSI, configurable products, tier pricing, and implementation."
        customFaqs={[
          { q: "Does the connector support both Adobe Commerce B2B and B2C in the same integration?", a: "Yes. The Magento Connector handles both commerce models in a single integration — with separate processing logic for B2B company accounts, shared catalogs, and PO-based ordering alongside standard B2C guest and registered checkout flows." },
          { q: "How does Adobe Commerce Multi-Source Inventory (MSI) work with NetSuite?", a: "Our connector fully maps Adobe Commerce MSI sources to NetSuite Multi-Location Inventory locations. Stock reservations, per-source quantities, and priority-based source selection are all synchronized between the two platforms in real time." },
          { q: "Can we sync configurable, bundle, and grouped products?", a: "Yes. All Adobe Commerce native product types — simple, configurable, virtual, bundled, and grouped — are fully supported. Configurable product variants are mapped to NetSuite item variants with complete attribute and option sync." },
          { q: "How does tier and volume pricing sync work?", a: "NetSuite price levels and customer group pricing are mapped to Adobe Commerce shared catalog rules and tier price tables. When you update pricing in NetSuite, changes are pushed automatically to the corresponding Adobe Commerce price rules — no manual catalog management needed." },
          { q: "How are Adobe Commerce B2B company accounts handled?", a: "Each B2B company account in Adobe Commerce is linked to its corresponding company or customer in NetSuite. Credit limits, payment terms, purchase order workflows, and approval rules are all synchronized between both platforms." },
          { q: "What happens when a customer returns a configurable product?", a: "Returns and refunds are handled at the variant level — the correct SKU inventory is restored, the corresponding credit memo is created in NetSuite, and the refund is reconciled against the original order. All return workflows support both online and in-store scenarios." },
          { q: "Does the connector support global multi-site Adobe Commerce setups?", a: "Yes. Multi-website and multi-store-view Adobe Commerce setups are fully supported, with each website or store view mappable to a separate NetSuite subsidiary, currency, and tax jurisdiction for complete multi-entity financial reporting." },
          { q: "How long does the Magento Connector implementation take?", a: "A standard B2C implementation takes 4–6 weeks. B2B-enabled implementations with shared catalog, MSI, and company account sync typically take 6–8 weeks due to the additional configuration complexity." },
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0891b2] shadow-2xl">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {PARTICLES.map((p, i) => (<motion.div key={i} className="absolute bg-white rounded-full" style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }} animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }} />))}
            </div>
            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Unify Magento and NetSuite — <span className="text-cyan-200">Start Today.</span></h2>
                <p className="text-white/80 text-lg md:text-xl">Join B2B and B2C merchants using our connector to automate their Adobe Commerce operations with real-time NetSuite synchronization.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all group active:scale-95">
                Connect Magento <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
