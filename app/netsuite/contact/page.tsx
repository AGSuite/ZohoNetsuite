"use client";

import React, { useState, useEffect } from "react";
import { motion, useTransform, animate, useMotionValue } from "framer-motion";
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
  Building2,
  Rocket,
  Send,
  Briefcase,
  Target,
  Heart,
  Shield,
} from "lucide-react";
import dynamic from "next/dynamic";
import "intl-tel-input/styles";

const IntlTelInput = dynamic(() => import("@intl-tel-input/react/with-utils"), {
  ssr: false,
  loading: () => (
    <input
      type="tel"
      id="Mobile"
      name="Mobile"
      required
      maxLength={30}
      placeholder="Mobile number"
      className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400"
    />
  ),
});

function StatCard({ item }: { item: any; index?: number }) {
  return (
    <div
      className="relative group p-4 rounded-xl bg-gradient-to-br from-white via-white/95 to-blue-50/90 border border-blue-100/60 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative faint icon bg */}
      <div className="absolute -right-2 -bottom-2 opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-300 pointer-events-none">
        <item.icon className="w-16 h-16 text-blue-900" strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col items-start text-left">
        <div className="mb-2.5 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
          <item.icon className="w-4 h-4" strokeWidth={1.5} />
        </div>
        <div className="space-y-1">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#000d2e] via-blue-900 to-black tracking-tight leading-tight">
            {item.value}
          </div>
          <p className="text-gray-500 font-semibold text-[11px] group-hover:text-blue-700 transition-colors uppercase tracking-wider leading-tight">
            {item.label}
          </p>
        </div>
      </div>
    </div>
  );
}

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
  image: string;
}[] = [
    {
      region: "INDIA",
      city: "Pune",
      state: "Maharashtra, INDIA",
      flag: "🇮🇳",
      address: "Office No. 1110, 11th floor, Gera's Imperium Rise, Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra, INDIA – 411057",
      email: "contact@agsuitetech.com",
      mapUrl: "https://www.google.com/maps/place/AGSuite+Technologies+(Top+NetSuite+Partner)/@18.5964114,73.7182446,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bbbaf62357d1:0x8b9a4ecd422c8b03!8m2!3d18.5964114!4d73.7182446!16s%2Fg%2F11kjps0bgc?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
      image: "/images/offices/pune_city.png",
    },
    {
      region: "INDIA",
      city: "Mumbai",
      state: "Maharashtra, INDIA",
      flag: "🇮🇳",
      address: "3rd Floor, Unit no. 4, Inspire, Main Road, G Block BKC, Bandra Kurla Complex, Mumbai, Maharashtra INDIA – 400051",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Inspire+BKC+Bandra+Kurla+Complex+Mumbai",
      image: "/images/offices/mumbai_city.png",
    },
    {
      region: "INDIA",
      city: "Bangalore",
      state: "Karnataka, INDIA",
      flag: "🇮🇳",
      address: "Whitefield, Survey No. 192, Whitefield Main Road, B Narayanapura, Mahadevapura, Bangalore, KA, INDIA – 560001",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Whitefield+Main+Road+Mahadevapura+Bangalore",
      image: "/images/offices/bangalore_city.png",
    },
    {
      region: "INDIA",
      city: "Hyderabad",
      state: "Telangana, INDIA",
      flag: "🇮🇳",
      address: "6th Floor, N Heights, Plot No 38, Phase 2 Hitec City, Siddiq Nagar, Hyderabad, Telangana, INDIA – 500081",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=N+Heights+Hitec+City+Hyderabad",
      image: "/images/offices/hyderabad_city.png",
    },
    {
      region: "INDIA",
      city: "Gurugram",
      state: "Haryana, INDIA",
      flag: "🇮🇳",
      address: "07th Floor, Gate No. 03 & Gate No. 04, Ambience Island, NH 48, Gurugram, Haryana, INDIA – 122002",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Ambience+Island+NH48+Gurugram",
      image: "/images/offices/gurugram_city.png",
    },
    {
      region: "INDIA",
      city: "Udaipur",
      state: "Rajasthan, INDIA",
      flag: "🇮🇳",
      address: "F-18 Subcity Center, Opp. Income Tax Office, Udaipur, Rajasthan INDIA – 313001",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Subcity+Center+Udaipur+Rajasthan",
      image: "/images/offices/udaipur_city.png",
    },
    {
      region: "USA",
      city: "Fort Myers",
      state: "Florida, USA",
      flag: "🇺🇸",
      address: "6421-1 Metro Plantation Road, Fort Myers, FL, US – 33966",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=6421+Metro+Plantation+Road+Fort+Myers+FL",
      image: "/images/offices/florida_city.png",
    },
    {
      region: "UK",
      city: "St Austell",
      state: "Cornwall, UK",
      flag: "🇬🇧",
      address: "The Old Dairy, Drummers Hill, St Austell, Cornwall, PL26 8XR",
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Drummers+Hill+St+Austell+Cornwall",
      image: "/images/offices/uk_city.png",
    },
  ];

/* ─── Particles ────────────────────────────────────────────────────────────── */
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
  const [mobile, setMobile] = useState("");
  const [isMobileValid, setIsMobileValid] = useState(false);

  useEffect(() => {
    setIsClient(true);

    (window as any).addAriaSelected409531000047791096 = function (event: any) {
      const optionElem = (event as any).target;
      const prev = optionElem.querySelector('[aria-selected=true]');
      if (prev) prev.removeAttribute('aria-selected');
      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    (window as any).validateEmail409531000047791096 = function () {
      const form = document.forms.namedItem('WebToLeads409531000047791096') as HTMLFormElement;
      if (!form) return true;
      const emailFld = form.querySelectorAll('[data-ftype="email"]');
      for (let i = 0; i < emailFld.length; i++) {
        const emailVal = (emailFld[i] as HTMLInputElement).value;
        if ((emailVal.replace(/^\s+|\s+$/g, '')).length !== 0) {
          const atpos = emailVal.indexOf('@');
          const dotpos = emailVal.lastIndexOf('.');
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Please enter a valid email address.');
            (emailFld[i] as HTMLInputElement).focus();
            return false;
          }
        }
      }
      return true;
    };

    (window as any).checkMandatory409531000047791096 = function () {
      const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF127', 'LEADCF166'];
      const fldLangVal = ['Company Name', 'Name', 'Role', 'Email', 'Mobile', 'Annual Revenue', 'How We Can Help You', 'How did you hear about us.', 'Netsuite Services'];
      const form = document.forms.namedItem('WebToLeads409531000047791096') as HTMLFormElement;
      if (!form) return false;

      for (let i = 0; i < mndFileds.length; i++) {
        const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        if (fieldObj) {
          if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length === 0) {
            alert(fldLangVal[i] + ' cannot be empty.');
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName === 'SELECT') {
            const selectField = fieldObj as HTMLSelectElement;
            if (selectField.options[selectField.selectedIndex].value === '' || selectField.options[selectField.selectedIndex].value === '-None-') {
              alert(fldLangVal[i] + ' cannot be none.');
              fieldObj.focus();
              return false;
            }
          }
        }
      }
      if ((window as any).validateEmail409531000047791096 && !(window as any).validateEmail409531000047791096()) return false;

      const recap = document.getElementById('recap409531000047791096');
      if (recap && recap.getAttribute('captcha-verified') !== 'true') {
        const recapErr = document.getElementById('recapErr409531000047791096');
        if (recapErr) recapErr.style.visibility = 'visible';
        return false;
      }
      return true;
    };

    const renderRecaptcha = () => {
      const container = document.getElementById('recap409531000047791096');
      if ((window as any).grecaptcha && container) {
        try {
          if (container.children.length > 0) return;
          (window as any).grecaptcha.render('recap409531000047791096', {
            'sitekey': '6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7',
            'theme': 'light',
            'callback': (window as any).rccallback409531000047791096
          });
        } catch (e) { }
      }
    };

    (window as any).rccallback409531000047791096 = function () {
      const recap = document.getElementById('recap409531000047791096');
      if (recap) recap.setAttribute('captcha-verified', 'true');
      const recapErr = document.getElementById('recapErr409531000047791096');
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
    fetch('/api/contact/zoho-notification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('Last Name'),
        email: formData.get('Email'),
        mobile: formData.get('Mobile'),
        role: formData.get('Designation'),
        company: formData.get('Company'),
        services: formData.getAll('LEADCF166'),
        revenue: formData.get('LEADCF19'),
        hearAbout: formData.get('LEADCF127'),
        message: formData.get('LEADCF123'),
        subjectTitle: 'NetSuite Contact us Form Enquiry'
      })
    }).catch(() => { });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if ((window as any).checkMandatory409531000047791096 && !(window as any).checkMandatory409531000047791096()) {
      e.preventDefault();
      return;
    }

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
        const emailObj = form.elements.namedItem('Email') as HTMLInputElement;
        if (nameObj) {
          // @ts-ignore
          window.$zoho.salesiq.visitor.name(nameObj.value);
        }
        if (emailObj) {
          // @ts-ignore
          window.$zoho.salesiq.visitor.email(emailObj.value);
        }
      }
    } catch (err) { }

    await sendEmail(e.currentTarget);
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white">

      {/* ── Hero / Form Section ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(ellipse_90%_90%_at_50%_-15%,rgba(14,165,233,0.28),rgba(0,8,20,0.98)_70%),linear-gradient(135deg,#000814_0%,#000d2e_50%,#001a4d_100%)]">

        {/* Square Grid Pattern Lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.1) 75%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.1) 75%, transparent 100%)",
          }}
        />

        {/* Gradient Glow Blobs */}
        <div className="absolute -top-24 -left-24 w-[650px] h-[650px] bg-gradient-to-br from-blue-600/35 via-cyan-400/25 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-indigo-600/30 via-purple-600/20 to-cyan-500/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/30 via-blue-600/25 to-indigo-700/25 rounded-full blur-[140px] pointer-events-none" />

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

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

            {/* ── LEFT: Hero Content ────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-between pt-8"
            >
              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-semibold text-white leading-tight tracking-tight mb-3">
                Scale Your Business with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                  Oracle NetSuite ERP
                </span>
              </h1>

              {/* Divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 72 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-4"
              />

              {/* Subline */}
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md mb-5">
                Bridge the gap between vision and execution. Partner with India&apos;s leading certified consultants to build a resilient, data-driven enterprise.
              </p>

              {/* Partner Logo */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-5"
              >
                <Image
                  src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
                  alt="NetSuite Partner"
                  width={220}
                  height={64}
                  className="h-14 w-auto object-contain"
                />
              </motion.div>

              {/* Stat Cards — 3 columns */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Projects Done', value: '700+', icon: Briefcase },
                  { label: 'Global Clients', value: '250+', icon: Building2 },
                  { label: 'Industries', value: '15+', icon: Target },
                  { label: 'Retention Rate', value: '84%', icon: Heart },
                  { label: 'Yrs Experience', value: '15+', icon: Rocket },
                  { label: 'Countries', value: '10+', icon: Globe2 },
                ].map((item, i) => (
                  <StatCard key={i} item={item} index={i} />
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Contact Form ────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full relative"
            >
              {/* Ambient Glow Behind Form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-cyan-400/25 to-indigo-600/30 rounded-3xl blur-xl -z-10 pointer-events-none" />

              <div className="relative bg-white p-6 sm:p-7 rounded-2xl border border-blue-100/80 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.25),0_10px_25px_-5px_rgba(6,182,212,0.18),0_30px_70px_rgba(0,0,0,0.35)] overflow-hidden w-full">
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 z-20" />

                <div className="relative z-10 pt-1">
                  <h2 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 bg-clip-text text-transparent tracking-tight mb-3">
                    Talk to a NetSuite Expert
                  </h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center gap-3"
                    >
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Message Sent!</h3>
                      <p className="text-xs text-gray-500 max-w-xs">Thank you for reaching out. Our team will connect with you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form
                      action="https://crm.zoho.in/crm/WebToLeadForm"
                      id="webform409531000047791096"
                      name="WebToLeads409531000047791096"
                      method="POST"
                      onSubmit={handleSubmit}
                      acceptCharset="UTF-8"
                      className="space-y-3"
                    >
                      <input type="text" className="hidden" name="xnQsjsdp" value="e79cbdec5c6e5b7d7f71b6fd074e22822590c7d5f2b4c7d541bbbb65cad7c1e9" readOnly />
                      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                      <input type="text" className="hidden" name="xmIwtLD" value="07822c70b4131fef446a0a686c99d5195d6d6ddfa0431c1f0eeb3f080cc03771374f84de08a3fd4604be9855603d3099" readOnly />
                      <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
                      <input type="text" className="hidden" name="returnURL" value="https://www.agsuite.tech/thank-you" readOnly />
                      <input type="text" className="hidden" name="aG9uZXlwb3Q" value="" readOnly />
                      <input type="text" className="hidden" id="LDTuvid" name="LDTuvid" readOnly />

                      <select name="Lead Status" className="hidden" defaultValue="Database">
                        <option value="Database">Database</option>
                      </select>
                      <select name="Lead Source" className="hidden" defaultValue="Website (Form)">
                        <option value="Website (Form)">Website (Form)</option>
                      </select>
                      <input type="hidden" name="No of Employees" value="0" />

                      {/* Row 1: Name & Company */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Name <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            id="Last_Name"
                            name="Last Name"
                            maxLength={80}
                            placeholder="John Doe"
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Company <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            id="Company"
                            name="Company"
                            required
                            maxLength={200}
                            placeholder="Company Inc."
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400"
                          />
                        </div>
                      </div>

                      {/* Row 2: Email & Mobile */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Email <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            id="Email"
                            data-ftype="email"
                            required
                            name="Email"
                            maxLength={100}
                            placeholder="john@company.com"
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Mobile <span className="text-blue-600">*</span>
                          </label>
                          <div className="w-full text-slate-900 contact-iti-wrapper">
                            <IntlTelInput
                              value={mobile}
                              onChangeNumber={(val) => setMobile(val)}
                              onChangeValidity={(isValid) => setIsMobileValid(isValid)}
                              initialCountry="in"
                              separateDialCode={true}
                              strictMode={true}
                              countryOrder={["in", "us", "gb", "ae"]}
                              inputProps={{
                                id: "Mobile",
                                name: "Mobile",
                                required: true,
                                maxLength: 30,
                                placeholder: "Mobile number",
                                className: "w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Role & Annual Revenue */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Role <span className="text-blue-600">*</span>
                          </label>
                          <input
                            type="text"
                            id="Designation"
                            name="Designation"
                            required
                            maxLength={100}
                            placeholder="CFO / Manager"
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none transition-all placeholder-slate-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Annual Revenue <span className="text-blue-600">*</span>
                          </label>
                          <select
                            id="LEADCF19"
                            name="LEADCF19"
                            required
                            onChange={(e) => (window as any).addAriaSelected409531000047791096?.(e)}
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none cursor-pointer transition-all"
                          >
                            <option value="-None-">-None-</option>
                            <option value="Less than $ 1M">Less than $ 1M</option>
                            <option value="$ 1M - 2.5M">$ 1M - 2.5M</option>
                            <option value="$ 2.5M - 5M">$ 2.5M - 5M</option>
                            <option value="$ 5M - 10M">$ 5M - 10M</option>
                            <option value="$ 10M - 15M">$ 10M - 15M</option>
                            <option value="$ 15M - 25M">$ 15M - 25M</option>
                            <option value="$ 25M - 50M">$ 25M - 50M</option>
                            <option value="$ 50M - 100M">$ 50M - 100M</option>
                            <option value="$ 100M - 250M">$ 100M - 250M</option>
                            <option value="More than $ 250M">More than $ 250M</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 4: Services & Source */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            NetSuite Services <span className="text-blue-600">*</span>
                          </label>
                          <MultiSelectDropdown
                            id="LEADCF166"
                            name="LEADCF166"
                            placeholder="-Select Service-"
                            className="!py-2.5 !px-3 !text-xs"
                            bgClassName="bg-white border border-slate-200"
                            textColorClassName="text-slate-900"
                            options={[
                              "NetSuite Licenses",
                              "NetSuite Implementation",
                              "New Subsidiary Implementation",
                              "NetSuite Support",
                              "NetSuite Optimization",
                              "NetSuite Customization",
                              "NetSuite Integrations",
                              "NetSuite India Localization",
                              "NetSuite Data Backup for India",
                            ]}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            How did you hear? <span className="text-blue-600">*</span>
                          </label>
                          <select
                            id="LEADCF127"
                            name="LEADCF127"
                            required
                            onChange={(e) => (window as any).addAriaSelected409531000047791096?.(e)}
                            className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs outline-none cursor-pointer transition-all"
                          >
                            <option value="-None-">-None-</option>
                            <option value="Email">Email</option>
                            <option value="Event">Event</option>
                            <option value="Friend/Associate">Friend/Associate</option>
                            <option value="Search">Search</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Referral">Referral</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 5: Message */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          How We Can Help You <span className="text-blue-600">*</span>
                        </label>
                        <textarea
                          required
                          name="LEADCF123"
                          rows={3}
                          placeholder="Tell us how we can help..."
                          className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs transition-all outline-none resize-none placeholder-slate-400"
                        />
                      </div>

                      {/* Captcha */}
                      <div className="flex flex-col gap-0.5 -mb-2.5">
                        <div data-sitekey='6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7' data-theme='light' data-callback='rccallback409531000047791096' captcha-verified='false' id='recap409531000047791096' className="g-recaptcha scale-[0.82] origin-left"></div>
                        <div id='recapErr409531000047791096' style={{ visibility: 'hidden', color: 'red', fontSize: '11px' }}>Captcha validation failed. Please try again.</div>
                      </div>

                      {/* Submit */}
                      <div className="-mt-1">
                        <button
                          type="submit"
                          id="formsubmit"
                          className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-blue-500/30 hover:scale-[1.02] text-sm uppercase tracking-wider cursor-pointer formsubmit-contact"
                        >
                          <Send className="w-4 h-4" />
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx global>{`
          .contact-iti-wrapper .iti {
            width: 100%;
            display: block;
          }
          .contact-iti-wrapper .iti__flag-container {
            height: 100%;
          }
          .contact-iti-wrapper .iti__selected-dial-code {
            font-size: 12px;
          }
          .contact-iti-wrapper .iti__selected-country {
            height: 100%;
            border-radius: 0.75rem 0 0 0.75rem;
            padding: 0 8px;
          }
          .contact-iti-wrapper .iti__tel-input {
            border-radius: 0 0.75rem 0.75rem 0 !important;
          }
          .contact-iti-wrapper .iti__dropdown-content {
            z-index: 70;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
          }
        `}</style>
      </section>

      {/* ── Quick Access Sub-Pages ────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 tracking-tight">
              Explore More Ways to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Connect
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Free Consultation",
                desc: "Talk to an expert.",
                link: "/netsuite/free-consultation",
                icon: Target,
                image: "/images/contact/consultation.webp"
              },
              {
                title: "Request Quote",
                desc: "Get a project estimate.",
                link: "/netsuite/request-quote",
                icon: Clock,
                image: "/images/contact/quote.webp"
              },
              {
                title: "Careers",
                desc: "Join our growing team.",
                link: "/netsuite/careers",
                icon: Briefcase,
                image: "/images/contact/carrer.webp"
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

      {/* ── Office Locations Section ─────────────────────────────────────────── */}
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
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-100/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] bg-blue-100/40 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-100/20 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-xs font-medium tracking-widest uppercase">Our Global Offices</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
              We&apos;re Where{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                You Are
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              With offices across India, USA, and UK, our certified NetSuite experts are always just a conversation away.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap"
          >
            {(["All", "INDIA", "USA", "UK"] as Region[]).map(tab => {
              const isActive = locationFilter === tab;
              const labels: Record<Region, string> = { All: "Our Offices", INDIA: "INDIA", USA: "USA", UK: "UK" };
              return (
                <button
                  key={tab}
                  onClick={() => setLocationFilter(tab)}
                  suppressHydrationWarning
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${isActive
                    ? "bg-gradient-to-r from-[#0a1f5c] to-[#1d4ed8] text-white border-transparent shadow-lg shadow-blue-600/25 scale-[1.03]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                >
                  <span className="text-base leading-none" suppressHydrationWarning>
                    {tab === "All" ? "🌐" : tab === "INDIA" ? "🇮🇳" : tab === "USA" ? "🇺🇸" : "🇬🇧"}
                  </span>
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
                  <div className="relative h-40 w-full overflow-hidden shrink-0 bg-slate-100">
                    <Image
                      src={loc.image}
                      alt={`${loc.city} Office`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm border border-white/20">
                      <span className="text-xs">{loc.flag}</span>
                      <span className="text-gray-800 font-bold text-[9px] tracking-wider uppercase">{loc.region}</span>
                    </div>
                  </div>

                  <div className="relative z-10 p-6 flex flex-col flex-1 gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 leading-tight">{loc.city}</h3>
                        <p className="text-xs text-blue-600 font-semibold mt-0.5">{loc.state}</p>
                      </div>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-100 shrink-0">
                        <Building2 className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>

                    <div className="h-px bg-gray-100 w-full" />

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

                      {loc.phone && (
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 border border-blue-100">
                            <Phone className="w-3 h-3 text-blue-600" />
                          </div>
                          <a href={`tel:${loc.phone}`} className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors">
                            {loc.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 px-5 rounded-xl font-medium text-sm text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group/btn"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 rounded-3xl overflow-hidden relative py-10 px-8 sm:px-12 text-left border border-gray-800"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/office/building.webp"
                alt="Office Building"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-blue-950/90" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex flex-col items-start gap-4 max-w-2xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-tight">
                  Ready to transform your business{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 font-bold">
                    from any location?
                  </span>
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-2 text-white/90">
                  <a href="mailto:contact@agsuitetech.com" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors group">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">contact@agsuitetech.com</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 shadow-lg hover:scale-105"
                  onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  <Send className="w-4 h-4" />
                  Contact Us Now
                </a>
                <Link
                  href="/netsuite/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold border border-white/30 text-white rounded-xl hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-200 hover:scale-105"
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
      <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="lazyOnload" />
      <Script id="recap-callback-ns" strategy="lazyOnload">
        {`
          function rccallback409531000047791096() {
            if(document.getElementById('recap409531000047791096')!=undefined){
              document.getElementById('recap409531000047791096').setAttribute('captcha-verified',true);
            }
            if(document.getElementById('recapErr409531000047791096')!=undefined && document.getElementById('recapErr409531000047791096').style.visibility == 'visible' ){
              document.getElementById('recapErr409531000047791096').style.visibility='hidden';
            }
          }
        `}
      </Script>
      <Script id="wf_anal_ns" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=9928b42954d320356885bb078ab0c3360c484e291c9e63097274653a3641def28b6749111011c9996c331f7836c7a2e8gid872197a4e4b8e909c249edeced5a19f1d2f950e702a3b0289fff2eacb04b67b1gid273da06b7bb3796c20973a82554d312ddd92ec671fa5a6016c080db58e6ccf5agidf40ec6d150665170b0cb2e595aa0cb939a02ed9792327816f3776b9eead7fe3a&tw=48a179f0eb3b7de8eccbf4bf9c2ace934d9e1bdc655d88e07911628e929af667&version=v2" strategy="lazyOnload" />
    </div>
  );
}
