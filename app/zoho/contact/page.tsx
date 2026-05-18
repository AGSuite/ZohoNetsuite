"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform, animate, useMotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  Globe,
  Globe2,
  CheckCircle,
  ChevronRight,
  Building2,
  Send,
  Briefcase,
  HelpCircle,
  Target,
  Users,
  UserCog,
  Heart,
  Rocket,
} from "lucide-react";

function StatCard({ item, index }: { item: any; index: number }) {
  const numericValue = parseInt(item.value.replace(/\D/g, "")) || 0;
  const suffix = item.value.replace(/\d/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayCount(v));
    return () => unsubscribe();
  }, [rounded]);

  const triggerRoll = () => {
    animate(count, numericValue, {
      duration: 1.5,
      ease: "easeOut",
      from: 0,
    });
  };

  useEffect(() => {
    triggerRoll();
  }, [numericValue]);

  return (
    <motion.div
      onMouseEnter={triggerRoll}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        rotateX: -5,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      transition={{ delay: 0.4 + index * 0.1 }}
      style={{ perspective: 1000 }}
      className="relative group p-6 rounded-[2rem] bg-gradient-to-br from-white via-white/95 to-blue-50 border border-blue-100/50 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
    >
      {/* Decorative faint icon bg */}
      <div className="absolute -right-4 -bottom-4 opacity-[0.25] group-hover:opacity-[0.45] transition-all duration-500 pointer-events-none">
        <item.icon className="w-24 h-24 text-blue-900" strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col items-start text-left">
        <div className="mb-5 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
          <item.icon className="w-6 h-6 font-bold" strokeWidth={1.5} />
        </div>
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-900 to-black tracking-tight">
            {displayCount}
            {suffix}
          </div>
          <p className="text-gray-500 font-semibold text-[10px] group-hover:text-blue-700 transition-colors uppercase tracking-widest leading-tight">
            {item.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Office Locations Data (Zoho Values) ────────────────────────────────── */
type Region = "All" | "INDIA" | "USA" | "UK";

const locations: {
  region: Region;
  city: string;
  state: string;
  flag: string;
  address: string;
  email: string;
  phone?: string;
  mapUrl: string;
}[] = [
    {
      region: "INDIA",
      city: "Pune",
      state: "Maharashtra, INDIA",
      flag: "🇮🇳",
      address: `Office No. 1110, 11th floor, Gera's Imperium Rise, Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra, INDIA – 411057.`,
      email: "contact@agsuitetech.com",
      mapUrl: "https://www.google.com/maps/place/AGSuite+Technologies+(Zoho+Premium+Partner)/@18.5963249,73.7154474,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9510b38301b:0x5d84fc070cd2d1c9!8m2!3d18.5963249!4d73.7180223!16s%2Fg%2F11j7z08531?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
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

/* ─── Particles ──────────────────────────────────────────────────────────── */
const PARTICLES = [
  { w: 2, h: 2, top: 10, left: 15, dur: 5, delay: 0.3 },
  { w: 1.5, h: 1.5, top: 25, left: 70, dur: 4.2, delay: 1.1 },
  { w: 3, h: 3, top: 55, left: 8, dur: 6, delay: 0.7 },
  { w: 2, h: 2, top: 75, left: 88, dur: 4.8, delay: 2.0 },
  { w: 1, h: 1, top: 40, left: 42, dur: 3.5, delay: 0.5 },
  { w: 2.5, h: 2.5, top: 85, left: 30, dur: 5.5, delay: 1.5 },
];

export default function ZohoContactPage() {
  const [locationFilter, setLocationFilter] = useState<Region>("All");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Global functions for Zoho CRM Form
    (window as any).validateEmail409531000042578178 = function () {
      const form = document.forms.namedItem('WebToLeads409531000042578178');
      if (!form) return true;
      const emailFld = form.querySelectorAll('[name="LEADCF8"]');
      for (let i = 0; i < emailFld.length; i++) {
        const emailVal = (emailFld[i] as HTMLInputElement).value;
        if (emailVal.replace(/^\s+|\s+$/g, '').length !== 0) {
          const atpos = emailVal.indexOf('@');
          const dotpos = emailVal.lastIndexOf('.');
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Please enter a valid email address.');
            (emailFld[i] as HTMLInputElement).focus();
            return false;
          }
          const domain = emailVal.split('@')[1].toLowerCase();
          const forbidden = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com', 'icloud.com'];
          if (forbidden.includes(domain)) {
            alert('Please enter a business email address. Personal emails (@' + domain + ') are not accepted.');
            (emailFld[i] as HTMLInputElement).focus();
            return false;
          }
        }
      }
      return true;
    };

    (window as any).checkMandatory409531000042578178 = function (e: any) {
      const form = e.target as HTMLFormElement;
      const mndFileds = ['Company', 'Last Name', 'Mobile', 'LEADCF5', 'LEADCF8', 'LEADCF19', 'LEADCF123'];
      const fldLangVal = ['Company Name', 'Name', 'POC\'s Mobile', 'Service', 'Company Email', 'Annual Revenue', 'How We Can Help You'];

      for (let i = 0; i < mndFileds.length; i++) {
        const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement;
        if (fieldObj && fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0) {
          alert(fldLangVal[i] + ' cannot be empty.');
          fieldObj.focus();
          return false;
        }
      }

      const mobileFld = form.elements.namedItem('Mobile') as HTMLInputElement;
      if (mobileFld) {
        const v = mobileFld.value.replace(/\D/g, '');
        if (v.length !== 10) {
          alert('Mobile number must be exactly 10 digits.');
          mobileFld.focus();
          return false;
        }
      }

      const recap = document.getElementById('recap409531000042578178');
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
        const recapErr = document.getElementById('recapErr409531000042578178');
        if (recapErr) recapErr.style.visibility = 'visible';
        return false;
      }

      if ((window as any).validateEmail409531000042578178 && !(window as any).validateEmail409531000042578178()) {
        return false;
      }

      return true;
    };

    // Handle reCAPTCHA rendering for SPA navigation
    const renderRecaptcha = () => {
      const container = document.getElementById('recap409531000042578178');
      if ((window as any).grecaptcha && container) {
        try {
          if (container.children.length > 0) return;
          (window as any).grecaptcha.render('recap409531000042578178', {
            'sitekey': '6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y',
            'theme': 'light',
            'callback': (window as any).rccallback409531000042578178
          });
        } catch (e) {}
      }
    };

    (window as any).rccallback409531000042578178 = function() {
      const recap = document.getElementById('recap409531000042578178');
      if (recap) recap.setAttribute('captcha-verified', 'true');
      const recapErr = document.getElementById('recapErr409531000042578178');
      if (recapErr) recapErr.style.visibility = 'hidden';
    };

    if ((window as any).grecaptcha) {
      (window as any).grecaptcha.ready ? (window as any).grecaptcha.ready(renderRecaptcha) : renderRecaptcha();
    } else {
      const interval = setInterval(() => {
        if ((window as any).grecaptcha) {
          (window as any).grecaptcha.ready ? (window as any).grecaptcha.ready(renderRecaptcha) : renderRecaptcha();
          clearInterval(interval);
        }
      }, 300);
      setTimeout(() => clearInterval(interval), 5000);
    }
  }, []);

  const sendEmail = async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    try {
      const response = await fetch('https://agsuitetech.com/pricing/form_process_contact.php', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.status === 'success') {
        console.log('Email sent successfully.');
      } else {
        console.error('Failed to send email:', data.error);
      }
    } catch (error) {
      console.error('Error while sending email:', error);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if ((window as any).checkMandatory409531000042578178 && !(window as any).checkMandatory409531000042578178(e.nativeEvent)) {
      e.preventDefault();
      return;
    }
    
    // Visitor Tracking update
    try {
      if ((window as any).$zoho && (window as any).$zoho.salesiq) {
        const form = e.currentTarget;
        const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
        if (LDTuvidObj) {
          LDTuvidObj.value = (window as any).$zoho.salesiq.visitor.uniqueid();
        }
        const nameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
        const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
        if (nameObj) {
          (window as any).$zoho.salesiq.visitor.name(nameObj.value);
        }
        if (emailObj) {
          (window as any).$zoho.salesiq.visitor.email(emailObj.value);
        }
      }
    } catch (err) {}

    await sendEmail(e.currentTarget);
    const submitButton = document.querySelector('.formsubmit-contact') as HTMLButtonElement;
    if (submitButton) {
      submitButton.setAttribute('disabled', 'true');
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white">

      {/* ── Hero / Form Section ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#000814] via-[#000d2e] to-[#001a4d] flex items-center">

        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-cyan-700/10 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-12">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm font-medium mb-8"
          >
            <Link href="/zoho" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/60">Contact</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            {/* ── LEFT: Headline + Info ─────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white backdrop-blur-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-900 text-xs font-medium tracking-widest uppercase">Get in Touch</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-medium text-white leading-[1.1] tracking-tight">
                Architecting Enterprise Excellence with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-200">
                  Zoho Precision
                </span>
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              />

              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  Bridge the gap between vision and execution. Partner with certified Zoho experts to build a resilient, unified, and data-driven enterprise.
                </p>
              </div>

              {/* Partner Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 mb-2"
              >
                <Image
                  src="/images/zoho logos/zoho premium.png"
                  alt="Zoho Partner"
                  width={220}
                  height={70}
                  className="h-16 object-contain"
                  style={{ width: 'auto' }}
                />
              </motion.div>

              {/* Consultation Metrics Cards (Synced from About Us) */}
              <div className="mt-2 grid grid-cols-2 gap-4 sm:gap-5">
                {[
                  { label: "Projects Completed", value: "600+", icon: Briefcase },
                  { label: "Global Customers", value: "200+", icon: Building2 },
                  { label: "Industry Expertise", value: "15+", icon: Target },
                  { label: "Happy Clients", value: "500+", icon: Users },
                  { label: "Years Experience", value: "15+", icon: Rocket },
                  { label: "Countries Serving", value: "10+", icon: Globe2 },
                ].map((item, i) => (
                  <StatCard key={i} item={item} index={i} />
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Form (PERFECT NETSUITE MIRROR) ──────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-white rounded-[2.5rem] shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />
                
                <div className="relative z-10 p-8 lg:p-10">
                  <div className="mb-8 border-b border-gray-100 pb-6">
                    <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2 tracking-tight">Get Expert Guidance</h2>
                    <p className="text-gray-500 text-base">Fill in your details — we'll respond within 24 hours.</p>
                  </div>

                  <form 
                    action="https://crm.zoho.in/crm/WebToLeadForm" 
                    id="WebToLeads409531000042578178"
                    name="WebToLeads409531000042578178" 
                    method="POST" 
                    onSubmit={handleFormSubmit}
                    acceptCharset="UTF-8"
                    className="space-y-5"
                  >
                    <input type="text" className="hidden" name="xnQsjsdp" defaultValue="37dfc49e97f520b044bada4f449a5c5ccdbce92fc11adcbde859370420398c25" readOnly />
                    <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                    <input type="text" className="hidden" name="xmIwtLD" defaultValue="12f9e122b2a20e7b120e935f7196c6eb1b4957b3d47254bd86bff874f16310546e1ef014dcf24ff7fdc390003e9608d7" readOnly />
                    <input type="text" className="hidden" name="Lead Source" value="Web to Leads" readOnly />
                    <input type="text" className="hidden" name="actionType" defaultValue="TGVhZHM=" readOnly />
                    <input type="text" className="hidden" name="returnURL" defaultValue="https://zoho-netsuite.vercel.app/thank-you" readOnly />
                    <input type="text" className="hidden" id="ldeskuid" name="ldeskuid" readOnly />
                    <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                    {/* Name Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Name *</label>
                        <input type="text" id="Last_Name" name="Last Name" required placeholder="John Doe" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                      </div>
                    </div>

                    {/* Business Email Row */}
                    <div>
                      <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Business Email *</label>
                      <input type="email" name="LEADCF8" required placeholder="john@company.com" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                    </div>

                    {/* Mobile + Job Title Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Mobile Number *</label>
                        <input type="tel" name="Mobile" required placeholder="+91 00000 00000" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                       </div>
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Job Title *</label>
                        <input type="text" name="Designation" required placeholder="CTO" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                      </div>
                    </div>

                    {/* Company Name Row */}
                    <div>
                      <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Company Name *</label>
                      <input type="text" name="Company" required placeholder="Company Inc." className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                    </div>

                    {/* Service Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Service *</label>
                        <select name="LEADCF5" id="LEADCF5" required className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none appearance-none cursor-pointer shadow-sm">
                          <option value="-None-">-None-</option>
                          <option value="Licenses">Licenses</option>
                          <option value="AMC">AMC</option>
                          <option value="NetSuite Product /Services">NetSuite Product /Services</option>
                          <option value="Zoho Products/Services">Zoho Products/Services</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Annual Revenue *</label>
                        <select name="LEADCF19" id="Annual_Revenue" required className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none appearance-none cursor-pointer shadow-sm">
                          <option value="">Select Revenue</option>
                          <option value="Less than 8 Cr ($ 1M)">Less than 8 Cr ($ 1M)</option>
                          <option value="8 - 20 Cr ($ 1M - 2.5M)">8 - 20 Cr ($ 1M - 2.5M)</option>
                          <option value="20 - 40 Cr ($ 2.5M - 5M)">20 - 40 Cr ($ 2.5M - 5M)</option>
                          <option value="40 - 80 Cr ($ 5M - 10M)">40 - 80 Cr ($ 5M - 10M)</option>
                          <option value="80 - 120 Cr ($ 10M - 15M)">80 - 120 Cr ($ 10M - 15M)</option>
                          <option value="120 - 200 Cr ($ 15M - 25M)">120 - 200 Cr ($ 15M - 25M)</option>
                          <option value="200 - 400 Cr ($ 25M - 50M)">200 - 400 Cr ($ 25M - 50M)</option>
                          <option value="400 - 800 Cr ($ 50M - 100M)">400 - 800 Cr ($ 50M - 100M)</option>
                          <option value="800 - 2000 Cr ($ 100M - 250M)">800 - 2000 Cr ($ 100M - 250M)</option>
                          <option value="More than 2000 Cr ($ 250M+)">More than 2000 Cr ($ 250M+)</option>
                        </select>
                      </div>
                    </div>



                    {/* How did you hear about us Row */}
                    <div>
                      <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">How did you hear about us?</label>
                      <select name="LEADCF127" id="Lead_Source_Contact" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none appearance-none cursor-pointer shadow-sm">
                        <option value="-None-">-None-</option>
                        <option value="Email">Email</option>
                        <option value="Event">Event</option>
                        <option value="Friend /Associate">Friend /Associate</option>
                        <option value="Search">Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral</option>
                      </select>
                    </div>

                    {/* Requirements Textarea */}
                    <div>
                      <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">How We Can Help You *</label>
                      <textarea id="Description" name="LEADCF123" required rows={3} placeholder="How We Can Help You*" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all resize-none placeholder-gray-400 shadow-sm" />
                    </div>

                    {/* Captcha Section */}
                    <div className="flex flex-col gap-2">
                      <div data-sitekey='6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y' data-theme='light' data-callback='rccallback409531000042578178' captcha-verified='false' id='recap409531000042578178'></div>
                      <div id='recapErr409531000042578178' style={{ visibility: 'hidden', color: 'red', fontSize: '12px' }}>Captcha validation failed. If you are not a robot then please try again.</div>
                    </div>

                    {/* Privacy + Submit Row */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative mt-0.5">
                          <input type="checkbox" className="sr-only peer" required />
                          <div className="w-5 h-5 bg-gray-100 border-2 border-gray-100 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all" />
                          <svg className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-500 text-sm leading-snug">
                          I agree to the Privacy Policy and Terms of Service.
                        </span>
                      </label>

                      <button type="submit" className="shrink-0 inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] text-sm formsubmit-contact">
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quick Access Sub-Pages (THE 4 CARDS) ─────────────────────────── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Careers",
                desc: "Join our growing team.",
                link: "/zoho/contact/careers",
                icon: Briefcase,
                image: "/images/contact/carrer.webp"
              },
              {
                title: "Support",
                desc: "24/7 client support.",
                link: "/zoho/contact/support",
                icon: HelpCircle,
                image: "/images/contact/support.webp"
              },
              {
                title: "Request Quote",
                desc: "Get project pricing.",
                link: "/zoho/contact/request-quote",
                icon: Clock,
                image: "/images/contact/quote.webp"
              },
              {
                title: "Free Consultation",
                desc: "Talk to our team.",
                link: "/zoho/contact/free-consultation",
                icon: Target,
                image: "/images/contact/consultation.webp"
              }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group relative h-[420px] rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 flex flex-col justify-end"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors" />
                <div className="relative z-10 p-8 text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 group-hover:text-white transition-colors">{item.desc}</p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-blue-900 group-hover:text-blue-600 border border-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm">
                    <span className="text-xs font-medium uppercase tracking-wider">Explore More</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Office Locations Section ─────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-white">
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
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] bg-indigo-100/40 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-100/20 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5 shadow-sm">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">Our Global Presence</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
              We're Where{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Innovation Happens
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              With offices across India, USA, and UK, our certified Zoho experts are always just a conversation away.
            </p>
          </motion.div>

          {/* Region Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap"
          >
            {(["All", "INDIA", "USA", "UK"] as Region[]).map(tab => {
              const isActive = locationFilter === tab;

              const labels: Record<Region, string> = { All: "Global Offices", INDIA: "INDIA", USA: "USA", UK: "UK" };
              return (
                <button
                  key={tab}
                  onClick={() => setLocationFilter(tab)}
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${isActive
                    ? "bg-gradient-to-r from-[#0a1f5c] to-[#1d4ed8] text-white border-transparent shadow-lg shadow-blue-600/25 scale-[1.03]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 shadow-sm"
                    }`}
                >
                  <span className="text-base leading-none" suppressHydrationWarning>
                    {tab === "All" ? (
                      "🌐"
                    ) : (
                      <img 
                        src={`https://flagcdn.com/${tab === "INDIA" ? "in" : tab === "USA" ? "us" : "gb"}.svg`}
                        alt={tab}
                        className="w-5 h-3.5 rounded-sm object-cover inline-block"
                      />
                    )}
                  </span>
                  {labels[tab]}
                </button>
              );
            })}
          </motion.div>

          {/* Locations Grid */}
          <motion.div
            key={locationFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {locations
              .filter(loc => locationFilter === "All" || loc.region === locationFilter)
              .map((loc, index) => (
                <motion.div
                  key={`${loc.city}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.22 } }}
                  className="group relative bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="h-[3px] w-full shrink-0" style={{ background: "linear-gradient(90deg, #0a1f5c, #1d4ed8, #60a5fa)" }} />
                  <div className="relative z-10 p-6 flex flex-col flex-1 gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-7 rounded-md overflow-hidden shadow-sm border border-gray-100 shrink-0">
                          <img 
                            src={`https://flagcdn.com/${loc.region === "INDIA" ? "in" : loc.region === "USA" ? "us" : "gb"}.svg`}
                            alt={loc.region}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-gray-900 leading-tight">{loc.city}</h3>
                          <p className="text-xs text-blue-600 font-semibold mt-0.5">{loc.state}</p>
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-100 shrink-0 shadow-sm">
                        <Building2 className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="h-px bg-gray-100 w-full" />
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-blue-50 border border-blue-100">
                          <MapPin className="w-3 h-3 text-blue-600" />
                        </div>
                        <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm leading-relaxed hover:text-blue-600 hover:underline transition-colors">
                          {loc.address}
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 border border-blue-100">
                          <Mail className="w-3 h-3 text-blue-600" />
                        </div>
                        <a href={`mailto:${loc.email}`} className="text-gray-700 text-sm font-semibold hover:text-blue-600 transition-colors">
                          {loc.email}
                        </a>
                      </div>
                    </div>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 px-5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group/btn shadow-md"
                      style={{ background: "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)" }}
                    >
                      Locate Our Office
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom Global CTA ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-[2.5rem] overflow-hidden relative"
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
            
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-indigo-600/25 rounded-full blur-[90px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 w-[500px] h-[250px] bg-cyan-700/15 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-4">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 text-xs font-semibold tracking-wider uppercase">Anywhere You Are</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-medium text-white mb-4 leading-tight">
                  No Matter Your{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">
                    Location
                  </span>
                  {" "}— We're Ready to Help
                </h3>
                <p className="text-blue-100/70 text-base leading-relaxed">
                  Our global team of certified Zoho consultants delivers world-class implementations, 24/7 support, and tailored solutions wherever you operate.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#0a1f5c] font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-200 shadow-xl hover:scale-[1.02] text-sm"
                >
                  <Send className="w-4 h-4" />
                  Contact Us Now
                </button>
                <Link
                  href="/zoho/contact/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-200 text-sm"
                >
                  Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Scripts ───────────────────────────────────────────────────────────── */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="afterInteractive" />
      <Script id="zoho-salesiq" strategy="afterInteractive">
        {`
          var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
          function rccallback409531000042578178() {
            if(document.getElementById('recap409531000042578178')!=undefined){
              document.getElementById('recap409531000042578178').setAttribute('captcha-verified',true);
            }
            if(document.getElementById('recapErr409531000042578178')!=undefined && document.getElementById('recapErr409531000042578178').style.visibility == 'visible' ){
              document.getElementById('recapErr409531000042578178').style.visibility='hidden';
            }
          }
        `}
      </Script>
    </div>
  );
}
