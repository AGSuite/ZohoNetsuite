"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  UserCog,
  Rocket,
  Send,
  Briefcase,
  HelpCircle,
  Target,
  Users,
} from "lucide-react";

/* ─── Office Locations Data ──────────────────────────────────────────────────── */
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
    // ── INDIA ──────────────────────────────────────────────────────────────────
    {
      region: "INDIA",
      city: "Pune",
      state: "Maharashtra, INDIA",
      flag: "🇮🇳",
      address: "Office No. 1110, 11th floor, Gera's Imperium Rise, Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra, INDIA – 411057",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Gera+Imperium+Rise+Hinjewadi+Pune",
    },
    {
      region: "INDIA",
      city: "Mumbai",
      state: "Maharashtra, INDIA",
      flag: "🇮🇳",
      address: "3rd Floor, Unit no. 4, Inspire, Main Road, G Block BKC, Bandra Kurla Complex, Mumbai, Maharashtra INDIA – 400051",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Inspire+BKC+Bandra+Kurla+Complex+Mumbai",
    },
    {
      region: "INDIA",
      city: "Bangalore",
      state: "Karnataka, INDIA",
      flag: "🇮🇳",
      address: "Whitefield, Survey No. 192, Whitefield Main Road, B Narayanapura, Mahadevapura, Bangalore, KA, INDIA – 560001",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Whitefield+Main+Road+Mahadevapura+Bangalore",
    },
    {
      region: "INDIA",
      city: "Hyderabad",
      state: "Telangana, INDIA",
      flag: "🇮🇳",
      address: "6th Floor, N Heights, Plot No 38, Phase 2 Hitec City, Siddiq Nagar, Hyderabad, Telangana, INDIA – 500081",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=N+Heights+Hitec+City+Hyderabad",
    },
    {
      region: "INDIA",
      city: "Gurugram",
      state: "Haryana, INDIA",
      flag: "🇮🇳",
      address: "07th Floor, Gate No. 03 & Gate No. 04, Ambience Island, NH 48, Gurugram, Haryana, INDIA – 122002",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Ambience+Island+NH48+Gurugram",
    },
    {
      region: "INDIA",
      city: "Udaipur",
      state: "Rajasthan, INDIA",
      flag: "🇮🇳",
      address: "F-18 Subcity Center, Opp. Income Tax Office, Udaipur, Rajasthan INDIA – 313001",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Subcity+Center+Udaipur+Rajasthan",
    },
    // ── USA ────────────────────────────────────────────────────────────────────
    {
      region: "USA",
      city: "Fort Myers",
      state: "Florida, USA",
      flag: "🇺🇸",
      address: "6421-1 Metro Plantation Road, Fort Myers, FL, US – 33966",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=6421+Metro+Plantation+Road+Fort+Myers+FL",
    },
    // ── UK ─────────────────────────────────────────────────────────────────────
    {
      region: "UK",
      city: "St Austell",
      state: "Cornwall, UK",
      flag: "🇬🇧",
      address: "The Old Dairy, Drummers Hill, St Austell, Cornwall, PL26 8XR",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Drummers+Hill+St+Austell+Cornwall",
    },
  ];

/* ─── Particles (static to avoid SSR mismatch) ────────────────────────────── */
const PARTICLES = [
  { w: 2, h: 2, top: 10, left: 15, dur: 5, delay: 0.3 },
  { w: 1.5, h: 1.5, top: 25, left: 70, dur: 4.2, delay: 1.1 },
  { w: 3, h: 3, top: 55, left: 8, dur: 6, delay: 0.7 },
  { w: 2, h: 2, top: 75, left: 88, dur: 4.8, delay: 2.0 },
  { w: 1, h: 1, top: 40, left: 42, dur: 3.5, delay: 0.5 },
  { w: 2.5, h: 2.5, top: 85, left: 30, dur: 5.5, delay: 1.5 },
  { w: 1.5, h: 1.5, top: 18, left: 55, dur: 4.0, delay: 0.9 },
  { w: 2, h: 2, top: 62, left: 76, dur: 5.3, delay: 0.2 },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [locationFilter, setLocationFilter] = useState<Region>("All");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Global functions for Zoho CRM Form
    (window as any).validateEmail409531000042578178_ns = function () {
      const form = document.forms.namedItem('WebToLeadsContactNetSuite');
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

    (window as any).checkMandatory409531000042578178_ns = function (e: any) {
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

      const recap = document.getElementById('recap409531000042578178_ns');
      if (recap && recap.getAttribute('captcha-verified') === 'false') {
        const recapErr = document.getElementById('recapErr409531000042578178_ns');
        if (recapErr) recapErr.style.visibility = 'visible';
        return false;
      }

      if ((window as any).validateEmail409531000042578178_ns && !(window as any).validateEmail409531000042578178_ns()) {
        return false;
      }

      return true;
    };

    // Handle reCAPTCHA rendering for SPA navigation
    const renderRecaptcha = () => {
      const container = document.getElementById('recap409531000042578178_ns');
      if ((window as any).grecaptcha && container) {
        try {
          if (container.children.length > 0) return;
          (window as any).grecaptcha.render('recap409531000042578178_ns', {
            'sitekey': '6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y',
            'theme': 'light',
            'callback': (window as any).rccallback409531000042578178_ns
          });
        } catch (e) {}
      }
    };

    (window as any).rccallback409531000042578178_ns = function() {
      const recap = document.getElementById('recap409531000042578178_ns');
      if (recap) recap.setAttribute('captcha-verified', 'true');
      const recapErr = document.getElementById('recapErr409531000042578178_ns');
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if ((window as any).checkMandatory409531000042578178_ns && !(window as any).checkMandatory409531000042578178_ns(e.nativeEvent)) {
      e.preventDefault();
      return;
    }

    // Visitor Tracking update
    try {
      // @ts-ignore
      if (window.$zoho && window.$zoho.salesiq) {
        const form = e.currentTarget;
        const LDTuvidObj = form.elements.namedItem('LDTuvid') as HTMLInputElement;
        if (LDTuvidObj) {
          // @ts-ignore
          LDTuvidObj.value = window.$zoho.salesiq.visitor.uniqueid();
        }
        const nameObj = form.elements.namedItem('Last Name') as HTMLInputElement;
        const emailObj = form.elements.namedItem('LEADCF8') as HTMLInputElement;
        if (nameObj) {
          // @ts-ignore
          window.$zoho.salesiq.visitor.name(nameObj.value);
        }
        if (emailObj) {
          // @ts-ignore
          window.$zoho.salesiq.visitor.email(emailObj.value);
        }
      }
    } catch (err) {}

    await sendEmail(e.currentTarget);
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

        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/40 pointer-events-none"
            style={{ width: p.w, height: p.h, top: `${p.top}%`, left: `${p.left}%` }}
            animate={{ y: [0, -22, 0], opacity: [0.25, 0.9, 0.25] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-20">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-2 text-sm font-medium mb-16"
            aria-label="Breadcrumb"
          >
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/60">Contact</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            {/* ── LEFT: Headline + Info ─────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-10 lg:sticky lg:top-32"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white backdrop-blur-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-900 text-xs font-medium tracking-widest uppercase">Get in Touch</span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl xl:text-5xl font-medium text-white leading-[1.1] tracking-tight">
                Architecting Enterprise Excellence with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                  NetSuite Precision
                </span>
              </h1>

              {/* Divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              />

              {/* Sublines */}
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                  Bridge the gap between vision and execution. Partner with India’s leading certified consultants to build a resilient, data-driven enterprise.
                </p>
              </div>

              {/* Consultation Metrics Cards (Synced from About Us) */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: 'Implementations', value: '180+', icon: Building2 },
                  { label: 'NS Experts', value: '50+', icon: Users },
                  { label: 'Countries', value: '6+', icon: Globe2 },
                  { label: 'Industries', value: '30+', icon: Target },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ rotate: 1.5, y: -5 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="relative group p-6 rounded-[2rem] bg-gradient-to-br from-white via-white/95 to-blue-50 border border-blue-100/50 hover:border-blue-400 transition-all duration-500 shadow-xl shadow-blue-900/5 overflow-hidden"
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
                        <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#000d2e] via-blue-900 to-black tracking-tight">
                          {item.value}
                        </div>
                        <p className="text-gray-500 font-semibold text-[10px] sm:text-[11px] group-hover:text-blue-700 transition-colors uppercase tracking-widest leading-tight">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Contact Form ────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

                {/* Light blobs inside form */}
                <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-blue-50/80 rounded-full blur-[80px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-indigo-50/60 rounded-full blur-[70px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

                <div className="relative z-10 p-8 lg:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2">Connect with Strategic Architects</h2>
                    <p className="text-gray-500 text-base">Fill in your details — we'll respond within 24 hours.</p>
                  </div>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center gap-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-medium text-gray-900">Message Sent!</h3>
                      <p className="text-gray-500 max-w-xs">Thank you for reaching out. Our team will connect with you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form 
                      action="https://crm.zoho.in/crm/WebToLeadForm" 
                      id="WebToLeads409531000042578178"
                      name="WebToLeadsContactNetSuite" 
                      method="POST" 
                      onSubmit={handleSubmit}
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
                          <label className="block text-gray-700 text-xs font-semibold tracking-wider mb-2 uppercase">
                            Name <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            id="Last_Name"
                            name="Last Name"
                            placeholder="John Doe"
                            className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                          />
                        </div>
                      </div>

                      {/* Business Email */}
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold tracking-wider mb-2 uppercase">
                          Business Email <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          name="LEADCF8"
                          placeholder="john@company.com"
                          className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                        />
                      </div>

                      {/* Phone + Job Title */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-700 text-xs font-semibold tracking-wider mb-2 uppercase">
                            POC's Mobile <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="tel"
                            name="Mobile"
                            placeholder="+91 00000 00000"
                            className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-xs font-semibold tracking-wider mb-2 uppercase">
                            Job Title <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            name="Designation"
                            placeholder="CFO"
                            className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold tracking-wider mb-2 uppercase">
                          Company Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="Company"
                          placeholder="Company Inc."
                          className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none placeholder-gray-400"
                        />
                      </div>

                      {/* Service Interest + Annual Revenue */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-700 text-xs font-semibold tracking-wider mb-2 uppercase">
                            Service Interest <span className="text-blue-600">*</span>
                          </label>
                          <select
                            name="LEADCF5"
                            className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer"
                          >
                            <option value="-None-">-None-</option>
                            <option value="Licenses">Licenses</option>
                            <option value="AMC">AMC</option>
                            <option value="NetSuite Product /Services">NetSuite Product /Services</option>
                            <option value="Zoho Products/Services">Zoho Products/Services</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-700 text-xs font-semibold tracking-wider mb-2 uppercase">
                            Annual Revenue <span className="text-blue-600">*</span>
                          </label>
                          <select
                            name="LEADCF19"
                            className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer"
                          >
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

                      {/* How did you hear about us? */}
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold tracking-wider mb-2 uppercase">How did you hear about us?</label>
                        <select name="LEADCF127" className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none appearance-none cursor-pointer">
                          <option value="-None-">-None-</option>
                          <option value="Email">Email</option>
                          <option value="Event">Event</option>
                          <option value="Friend /Associate">Friend /Associate</option>
                          <option value="Search">Search</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Referral">Referral</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold tracking-wider mb-2 uppercase">
                          How We Can Help You <span className="text-blue-600">*</span>
                        </label>
                        <textarea
                          required
                          name="LEADCF123"
                          rows={4}
                          placeholder="How We Can Help You*"
                          className="w-full bg-gradient-to-br from-blue-50/60 via-white to-purple-50/30 border-2 border-blue-100 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-gray-900 text-sm transition-all outline-none resize-none placeholder-gray-400 shadow-sm"
                        />
                      </div>

                      {/* Captcha Section */}
                      <div className="flex flex-col gap-2">
                        <div data-sitekey='6LcWAs0sAAAAAEnzRj3y4c4zhunjhWHq4r7-Ci3y' data-theme='light' data-callback='rccallback409531000042578178_ns' captcha-verified='false' id='recap409531000042578178_ns'></div>
                        <div id='recapErr409531000042578178_ns' style={{ visibility: 'hidden', color: 'red', fontSize: '12px' }}>Captcha validation failed. If you are not a robot then please try again.</div>
                      </div>

                      {/* Privacy + Submit */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className="relative mt-0.5">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              required
                            />
                            <div className="w-5 h-5 bg-gray-100 border-2 border-gray-300 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all" />
                            <svg className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-500 text-sm leading-snug">
                            I agree to the{" "}
                            <Link href="#" className="text-blue-600 underline hover:text-blue-700">Privacy Policy</Link>
                            {" "}and{" "}
                            <Link href="#" className="text-blue-600 underline hover:text-blue-700">Terms of Service</Link>
                          </span>
                        </label>

                        <button
                          type="submit"
                          className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.03] text-sm formsubmit-contact"
                        >
                          <Send className="w-4 h-4" />
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Quick Access Sub-Pages ────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Careers",
                desc: "Join our growing team.",
                link: "/netsuite/contact/careers",
                icon: Briefcase,
                image: "/images/contact/carrer.webp"
              },
              {
                title: "Support",
                desc: "24/7 client support.",
                link: "/netsuite/contact/support",
                icon: HelpCircle,
                image: "/images/contact/support.webp"
              },
              {
                title: "Request Quote",
                desc: "Get a project estimate.",
                link: "/netsuite/contact/request-quote",
                icon: Clock,
                image: "/images/contact/quote.webp"
              },
              {
                title: "Free Consultation",
                desc: "Talk to an expert.",
                link: "/netsuite/contact/free-consultation",
                icon: Target,
                image: "/images/contact/consultation.webp"
              }
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group relative h-[420px] rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 flex flex-col justify-end"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors" />

                {/* Content */}
                <div className="relative z-10 p-8 text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 group-hover:text-white transition-colors">{item.desc}</p>

                  {/* Button Style Link */}
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-white text-blue-900 group-hover:text-blue-600 border border-white/20 hover:border-white transition-all duration-300 backdrop-blur-sm">
                    <span className="text-xs font-medium uppercase tracking-wider">Explore More</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* Bottom Progress Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Office Locations Section ─────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Dashed Grid Background */}
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
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              )
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              )
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Tricolor Ambient Gradient Blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-100/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] bg-blue-100/40 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-100/20 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-xs font-semimedium tracking-widest uppercase">Our Global Offices</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
              We're Where{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                You Are
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              With offices across India, USA, and UK, our certified NetSuite experts are always just a conversation away.
            </p>
          </motion.div>

          {/* ── Region Filter Tabs ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap"
          >
            {(["All", "INDIA", "USA", "UK"] as Region[]).map(tab => {
              const isActive = locationFilter === tab;
              const flags: Record<Region, string> = { All: "🌐", INDIA: "🇮🇳", USA: "🇺🇸", UK: "🇬🇧" };
              const labels: Record<Region, string> = { All: "Our Offices", INDIA: "INDIA", USA: "USA", UK: "UK" };
              return (
                <button
                  key={tab}
                  onClick={() => setLocationFilter(tab)}
                  suppressHydrationWarning
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semimedium transition-all duration-300 border ${isActive
                    ? "bg-gradient-to-r from-[#0a1f5c] to-[#1d4ed8] text-white border-transparent shadow-lg shadow-blue-600/25 scale-[1.03]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                >
                  <span className="text-base leading-none">{flags[tab]}</span>
                  {labels[tab]}
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-white/10 pointer-events-none"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* ── Location Cards Grid ────────────────────────────────────────── */}
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
                  {/* Top gradient accent line */}
                  <div
                    className="h-[3px] w-full shrink-0"
                    style={{ background: "linear-gradient(90deg, #0a1f5c, #1d4ed8, #60a5fa)" }}
                  />

                  {/* Card body */}
                  <div className="relative z-10 p-6 flex flex-col flex-1 gap-4">

                    {/* Flag + City */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{loc.flag}</span>
                        <div>
                          <h3 className="text-base font-medium text-gray-900 leading-tight">{loc.city}</h3>
                          <p className="text-xs text-blue-600 font-semimedium mt-0.5">{loc.state}</p>
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-100 shrink-0">
                        <Building2 className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 w-full" />

                    {/* Contact Details — Address + Email only */}
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-blue-50 border border-blue-100">
                          <MapPin className="w-3 h-3 text-blue-600" />
                        </div>
                        <a
                          href={loc.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 text-sm leading-relaxed hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                        >
                          {loc.address}
                        </a>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 border border-blue-100">
                          <Mail className="w-3 h-3 text-blue-600" />
                        </div>
                        <a
                          href={`mailto:${loc.email}`}
                          className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors"
                        >
                          {loc.email}
                        </a>
                      </div>

                      {loc.phone && (
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 border border-blue-100">
                            <Phone className="w-3 h-3 text-blue-600" />
                          </div>
                          <a
                            href={`tel:${loc.phone}`}
                            className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors"
                          >
                            {loc.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Connect Button */}
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 px-5 rounded-xl font-semimedium text-sm text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group/btn"
                      style={{ background: "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)"; }}
                    >
                      Connect Us Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Bottom global CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-14 rounded-3xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #000814 0%, #001240 20%, #0a2472 45%, #1d4ed8 65%, #0e1b6e 80%, #000d2e 100%)",
            }}
          >
            {/* Grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Glow blobs */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-indigo-600/25 rounded-full blur-[90px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 w-[500px] h-[250px] bg-cyan-700/15 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            {/* Floating particles */}
            {[
              { w: 2, h: 2, top: 15, left: 10, dur: 4.5, delay: 0 },
              { w: 1.5, h: 1.5, top: 70, left: 25, dur: 3.8, delay: 0.8 },
              { w: 2.5, h: 2.5, top: 30, left: 80, dur: 5.2, delay: 0.3 },
              { w: 1, h: 1, top: 80, left: 60, dur: 4.0, delay: 1.5 },
              { w: 2, h: 2, top: 50, left: 45, dur: 3.5, delay: 0.6 },
              { w: 1.5, h: 1.5, top: 20, left: 55, dur: 5.5, delay: 1.2 },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/50 pointer-events-none"
                style={{ width: p.w, height: p.h, top: `${p.top}%`, left: `${p.left}%` }}
                animate={{ y: [0, -18, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
              />
            ))}

            <div className="relative z-10 px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-4">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 text-xs font-semimedium tracking-wider uppercase">Anywhere You Are</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-medium text-white mb-3 leading-tight">
                  No Matter Your{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">
                    Location
                  </span>
                  {" "}— We're Ready to Help
                </h3>
                <p className="text-blue-100/70 text-base leading-relaxed">
                  Our global team of NetSuite certified consultants delivers world-class ERP implementations, 24/7 support, and tailored NetSuite solutions wherever you operate.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a1f5c] font-medium rounded-xl hover:bg-cyan-50 transition-all duration-200 shadow-2xl shadow-blue-900/40 hover:scale-[1.02] text-sm"
                  onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  <Send className="w-4 h-4" />
                  Contact Us Now
                </a>
                <Link
                  href="/netsuite/contact/free-consultation"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semimedium rounded-xl hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-200 text-sm"
                >
                  Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Scripts ─────────────────────────────────────────────────────────── */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="afterInteractive" />
      <Script id="wf_anal" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=200f842d0dc0f4e7801db792aae6ced7d901985d65eb7fcd23dda6e56700172097a30a3ef869eb06347d3a4bca25bb6fgid9f5592bc44469936204ad4851be9c0dffc44888d04f59693f16e7853eee295cfgid37385f0c9c29469e462007ae410d9ad684100d05f4e169a235f2b84413a975d4gidbf0e0fb6f34ec2f94a391d45ce6b68f60ace7ff29df396e3a70399e1edee5dc5&tw=23f34b37e865b5335ff2a8f585b01a00b88cb9c9a388aa28b4e9e710c025aad4" strategy="afterInteractive" />
      <Script id="zoho-salesiq-ns" strategy="afterInteractive">
        {`
          var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
          function rccallback409531000042578178_ns() {
            if(document.getElementById('recap409531000042578178_ns')!=undefined){
              document.getElementById('recap409531000042578178_ns').setAttribute('captcha-verified',true);
            }
            if(document.getElementById('recapErr409531000042578178_ns')!=undefined && document.getElementById('recapErr409531000042578178_ns').style.visibility == 'visible' ){
              document.getElementById('recapErr409531000042578178_ns').style.visibility='hidden';
            }
          }
        `}
      </Script>
      <Script id="wf_anal_ns" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=200f842d0dc0f4e7801db792aae6ced7d901985d65eb7fcd23dda6e56700172097a30a3ef869eb06347d3a4bca25bb6fgid9f5592bc44469936204ad4851be9c0dffc44888d04f59693f16e7853eee295cfgid37385f0c9c29469e462007ae410d9ad684100d05f4e169a235f2b84413a975d4gidbf0e0fb6f34ec2f94a391d45ce6b68f60ace7ff29df396e3a70399e1edee5dc5&tw=23f34b37e865b5335ff2a8f585b01a00b88cb9c9a388aa28b4e9e710c025aad4" />
    </div>
  );
}
