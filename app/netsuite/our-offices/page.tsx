'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  MapPin, 
  Mail, 
  Building2, 
  ArrowRight, 
  ChevronRight, 
  Send,
  Target,
  Users,
  Globe2,
  Phone,
  Star,
  Database,
  Navigation
} from 'lucide-react';
import dynamic from 'next/dynamic';

const GlobalOfficeMap = dynamic(() => import('../components/GlobalOfficeMap'), { ssr: false });

type Region = "All" | "INDIA" | "USA" | "UK";

interface Location {
  region: Region;
  city: string;
  state: string;
  flag: string;
  address: string;
  email: string;
  phone?: string;
  mapUrl: string;
}

const locations: Location[] = [
  {
    region: "INDIA",
    city: "Pune",
    state: "Maharashtra, INDIA",
    flag: "🇮🇳",
    address: `Office No. 1110, 11th floor, Gera's Imperium Rise, Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra, INDIA – 411057.`,
    email: "contact@agsuitetech.com",
    mapUrl: "https://www.google.com/maps/place/AGSuite+Technologies+(Top+NetSuite+Partner)/@18.5964114,73.7182446,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bbbaf62357d1:0x8b9a4ecd422c8b03!8m2!3d18.5964114!4d73.7182446!16s%2Fg%2F11kjps0bgc?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    region: "INDIA",
    city: "Mumbai",
    state: "Maharashtra, INDIA",
    flag: "🇮🇳",
    address: `3rd Floor, Unit no. 4, Inspire, Main Road, G Block BKC, Bandra Kurla Complex, Mumbai, Maharashtra INDIA – 400051`,
    email: "contact@agsuitetech.com",
    mapUrl: "https://maps.google.com/?q=Inspire+BKC+Bandra+Kurla+Complex+Mumbai",
  },
  {
    region: "INDIA",
    city: "Bangalore",
    state: "Karnataka, INDIA",
    flag: "🇮🇳",
    address: `Whitefield, Survey No. 192, Whitefield Main Road, B Narayanapura, Mahadevapura, Bangalore, KA, INDIA – 560001`,
    email: "contact@agsuitetech.com",
    mapUrl: "https://maps.google.com/?q=Whitefield+Main+Road+Mahadevapura+Bangalore",
  },
  {
    region: "INDIA",
    city: "Hyderabad",
    state: "Telangana, INDIA",
    flag: "🇮🇳",
    address: `6th Floor, N Heights, Plot No 38, Phase 2 Hitec City, Siddiq nagar, Hyderabad, Telangana, INDIA – 500081`,
    email: "contact@agsuitetech.com",
    mapUrl: "https://maps.google.com/?q=N+Heights+Hitec+City+Hyderabad",
  },
  {
    region: "INDIA",
    city: "Gurugram",
    state: "Haryana, INDIA",
    flag: "🇮🇳",
    address: `07th Floor, Gate No. 03 & Gate No. 04, Ambience Island, NH 48, Gurugram, Haryana, INDIA – 122002`,
    email: "contact@agsuitetech.com",
    mapUrl: "https://maps.google.com/?q=Ambience+Island+NH48+Gurugram",
  },
  {
    region: "INDIA",
    city: "Udaipur",
    state: "Rajasthan, INDIA",
    flag: "🇮🇳",
    address: `F-18 Subcity Center, Opp. Income Tax Office, Udaipur, Rajasthan INDIA – 313001`,
    email: "contact@agsuitetech.com",
    mapUrl: "https://maps.google.com/?q=Subcity+Center+Udaipur+Rajasthan",
  },
  {
    region: "USA",
    city: "Fort Myers",
    state: "Florida, USA",
    flag: "🇺🇸",
    address: `6421-1 Metro Plantation Road, Fort Myers, FL, US – 33966`,
    email: "contact@agsuitetech.com",
    mapUrl: "https://maps.google.com/?q=6421+Metro+Plantation+Road+Fort+Myers+FL",
  },
  {
    region: "UK",
    city: "St Austell",
    state: "Cornwall, UK",
    flag: "🇬🇧",
    address: `The Old Dairy, Drummers Hill, St Austell, Cornwall, PL26 8XR`,
    email: "contact@agsuitetech.com",
    mapUrl: "https://maps.google.com/?q=Drummers+Hill+St+Austell+Cornwall",
  },
];

export default function NetSuiteOfficesPage() {
  const [locationFilter, setLocationFilter] = useState<Region>("All");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white">
      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg, #000814, #000f22, #001535)" }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-[120px] sm:pt-[136px] pb-12">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-sm font-medium mb-8"
          >
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/about-us" className="text-blue-300 hover:text-white transition-colors">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Our Offices</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6"
              >
                <Globe className="w-3.5 h-3.5" /> Global Presence
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6"
              >
                Our Global{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                  Presence
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-6 rounded-full"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mb-10"
              >
                Strategically located across continents, our global offices provide the local expertise and worldwide perspective needed to scale your enterprise with NetSuite.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="#offices-grid"
                  className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  Explore Locations
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/netsuite/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Right side: Hero Image with floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ minHeight: 460 }}
            >
              <div className="relative w-[88%] ml-auto">
                <div 
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-white/10"
                  style={{ height: 390 }}
                >
                  <Image
                    src="/images/aboutus/global_office_hero.png"
                    alt="AGSuite Global Offices"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Floating Card 1: Top Left */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-6 -left-8 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-gray-100 flex items-center gap-4 z-20"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <Globe2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold">Global Network</p>
                    <p className="text-gray-500 text-xs mt-0.5">3+ Countries, 8+ Cities</p>
                  </div>
                </motion.div>

                {/* Floating Card 2: Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-gray-100 flex items-center gap-4 z-20"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold">Strategic Locations</p>
                    <p className="text-gray-500 text-xs mt-0.5">Positioned for Your Success</p>
                  </div>
                </motion.div>
                
                {/* Floating Card 3: Top Right (Stats) */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="absolute top-10 -right-12 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl hidden xl:block"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl font-bold text-white">98%</span>
                    <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Client Satisfaction</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="border-t border-white/15 pt-8 mt-12 sm:mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Global Offices', value: '8+', icon: Building2, color: 'text-blue-400' },
                { label: 'Countries', value: '3+', icon: Globe2, color: 'text-cyan-400' },
                { label: 'Consultants', value: '100+', icon: Users, color: 'text-indigo-400' },
                { label: 'Success Rate', value: '98%', icon: Target, color: 'text-blue-300' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-3xl font-bold text-white">{item.value}</span>
                  </div>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Global Presence (Map Section) ────────────────────────────── */}
      <section id="map" className="py-24 relative overflow-hidden bg-white border-b border-gray-100">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">Our Global Presence</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
              A World of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Possibilities
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Delivering excellence across continents with a strong and growing worldwide footprint. Hover over the points to explore our key locations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-9xl overflow-hidden rounded-3xl border border-gray-100 shadow-xl"
          >
            <GlobalOfficeMap />
          </motion.div>
        </div>
      </section>

      {/* ── Our Global Offices (Grid Section) ───────────────────────────── */}
      <section id="offices-grid" className="py-24 relative overflow-hidden bg-white">
        {/* Decorative Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(to right, #c0d1f9ff 1px, transparent 1px), linear-gradient(to bottom, #94b3fbff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5 shadow-sm">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">Our Offices</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
              We're Where{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600">
                You Are
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              With offices across India, USA, and UK, our certified NetSuite experts are always just a conversation away.
            </p>
          </motion.div>

          {/* Region Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap"
          >
            {(["All", "INDIA", "USA", "UK"] as Region[]).map(tab => {
              const isActive = locationFilter === tab;
              const flags: Record<Region, string> = { All: "🌐", INDIA: "🇮🇳", USA: "🇺🇸", UK: "🇬🇧" };
              const labels: Record<Region, string> = { All: "Global Offices", INDIA: "INDIA", USA: "USA", UK: "UK" };
              return (
                <button
                  key={tab}
                  onClick={() => setLocationFilter(tab)}
                  className={`relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border ${isActive
                    ? "bg-gradient-to-r from-[#0a1f5c] to-[#1d4ed8] text-white border-transparent shadow-lg shadow-blue-600/25 scale-[1.03]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 shadow-sm"
                    }`}
                >
                  <span className="text-base leading-none">{flags[tab]}</span>
                  {labels[tab]}
                </button>
              );
            })}
          </motion.div>

          {/* Locations Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {locations
                .filter(loc => locationFilter === "All" || loc.region === locationFilter)
                .map((loc, index) => (
                  <motion.div
                    key={`${loc.city}-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-white rounded-3xl overflow-hidden flex flex-col border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-300"
                  >
                    <div className="h-[4px] w-full shrink-0" style={{ background: "linear-gradient(90deg, #0a1f5c, #1d4ed8, #60a5fa)" }} />
                    <div className="relative z-10 p-8 flex flex-col flex-1 gap-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative w-10 h-7 rounded-md overflow-hidden shadow-sm border border-gray-100">
                            <img 
                              src={`https://flagcdn.com/${loc.region === "INDIA" ? "in" : loc.region === "USA" ? "us" : "gb"}.svg`}
                              alt={loc.region}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 leading-tight">{loc.city}</h3>
                            <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mt-1">{loc.state}</p>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-100 shrink-0">
                          <Building2 className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      
                      <div className="h-px bg-gray-100 w-full" />
                      
                      <div className="space-y-4 flex-1">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                            <MapPin className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm leading-relaxed hover:text-blue-600 transition-colors">
                            {loc.address}
                          </a>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                            <Mail className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <a href={`mailto:${loc.email}`} className="text-gray-800 text-sm font-bold hover:text-blue-600 transition-colors">
                            {loc.email}
                          </a>
                        </div>

                        {loc.phone && (
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                              <Phone className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <a href={`tel:${loc.phone}`} className="text-gray-800 text-sm font-bold hover:text-blue-600 transition-colors">
                              {loc.phone}
                            </a>
                          </div>
                        )}
                      </div>

                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group/btn shadow-md"
                        style={{ background: "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)" }}
                      >
                        Locate Our Office
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[3rem] overflow-hidden relative p-12 md:p-20 text-center"
            style={{
              background: "linear-gradient(135deg, #000814 0%, #001240 20%, #0a2472 45%, #1d4ed8 65%, #0e1b6e 80%, #000d2e 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-4">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-xs font-semibold tracking-wider uppercase">Anywhere You Are</span>
              </div>
              
              <h3 className="text-3xl sm:text-5xl font-medium text-white leading-tight">
                Ready to transform your business{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 font-bold">
                  from any location?
                </span>
              </h3>
              
              <p className="text-blue-100/70 text-lg sm:text-xl leading-relaxed">
                Our global team of certified NetSuite consultants delivers world-class implementations, 24/7 support, and tailored solutions wherever you operate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                <Link
                  href="/netsuite/contact/request-quote"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#0a1f5c] font-bold rounded-2xl hover:bg-cyan-50 transition-all duration-300 shadow-2xl hover:scale-[1.05] text-base"
                >
                  <Send className="w-5 h-5" />
                  Contact Us Now
                </Link>
                <Link
                  href="/netsuite/contact/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-300 text-base"
                >
                  Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}




