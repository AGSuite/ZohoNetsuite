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
import MultiSelectDropdown from "@/app/components/shared/MultiSelectDropdown";

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
  image: string;
}[] = [
    {
      region: "INDIA",
      city: "Pune",
      state: "Maharashtra, INDIA",
      flag: "🇮🇳",
      address: `Office No. 1110, 11th floor, Gera's Imperium Rise, Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra, INDIA – 411057.`,
      email: "contact@agsuitetech.com",
      mapUrl: "https://www.google.com/maps/place/AGSuite+Technologies+(Zoho+Premium+Partner)/@18.5963249,73.7154474,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9510b38301b:0x5d84fc070cd2d1c9!8m2!3d18.5963249!4d73.7180223!16s%2Fg%2F11j7z08531?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D",
      image: "/images/offices/pune_city.png",
    },
    {
      region: "INDIA",
      city: "Mumbai",
      state: "Maharashtra, INDIA",
      flag: "🇮🇳",
      address: `3rd Floor, Unit no. 4, Inspire, Main Road, G Block BKC, Bandra Kurla Complex, Mumbai, Maharashtra INDIA – 400051`,
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Inspire+BKC+Bandra+Kurla+Complex+Mumbai",
      image: "/images/offices/mumbai_city.png",
    },
    {
      region: "INDIA",
      city: "Bangalore",
      state: "Karnataka, INDIA",
      flag: "🇮🇳",
      address: `Whitefield, Survey No. 192, Whitefield Main Road, B Narayanapura, Mahadevapura, Bangalore, KA, INDIA – 560001`,
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Whitefield+Main+Road+Mahadevapura+Bangalore",
      image: "/images/offices/bangalore_city.png",
    },
    {
      region: "INDIA",
      city: "Hyderabad",
      state: "Telangana, INDIA",
      flag: "🇮🇳",
      address: `6th Floor, N Heights, Plot No 38, Phase 2 Hitec City, Siddiq nagar, Hyderabad, Telangana, INDIA – 500081`,
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=N+Heights+Hitec+City+Hyderabad",
      image: "/images/offices/hyderabad_city.png",
    },
    {
      region: "INDIA",
      city: "Gurugram",
      state: "Haryana, INDIA",
      flag: "🇮🇳",
      address: `07th Floor, Gate No. 03 & Gate No. 04, Ambience Island, NH 48, Gurugram, Haryana, INDIA – 122002`,
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Ambience+Island+NH48+Gurugram",
      image: "/images/offices/gurugram_city.png",
    },
    {
      region: "INDIA",
      city: "Udaipur",
      state: "Rajasthan, INDIA",
      flag: "🇮🇳",
      address: `F-18 Subcity Center, Opp. Income Tax Office, Udaipur, Rajasthan INDIA – 313001`,
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Subcity+Center+Udaipur+Rajasthan",
      image: "/images/offices/udaipur_city.png",
    },
    {
      region: "USA",
      city: "Fort Myers",
      state: "Florida, USA",
      flag: "🇺🇸",
      address: `6421-1 Metro Plantation Road, Fort Myers, FL, US – 33966`,
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=6421+Metro+Plantation+Road+Fort+Myers+FL",
      image: "/images/offices/florida_city.png",
    },
    {
      region: "UK",
      city: "St Austell",
      state: "Cornwall, UK",
      flag: "🇬🇧",
      address: `The Old Dairy, Drummers Hill, St Austell, Cornwall, PL26 8XR`,
      email: "contact@agsuitetech.com",
      mapUrl: "https://maps.google.com/?q=Drummers+Hill+St+Austell+Cornwall",
      image: "/images/offices/uk_city.png",
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

  const [returnUrl, setReturnUrl] = useState('https://www.agsuite.tech/thank-you');

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setReturnUrl(window.location.origin + '/thank-you');
    }

    (window as any).addAriaSelected409531000047791049 = function (event: any) {
        const optionElem = (event as any).target;
        const prev = optionElem.querySelector('[aria-selected=true]');
        if (prev) prev.removeAttribute('aria-selected');
        optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
    };

    (window as any).validateEmail409531000047791049 = function () {
        const form = document.forms.namedItem('WebToLeads409531000047791049') as HTMLFormElement;
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

    (window as any).rccallback409531000047791049 = function () {
        const recap = document.getElementById('recap409531000047791049');
        if (recap) recap.setAttribute('captcha-verified', 'true');
        const recapErr = document.getElementById('recapErr409531000047791049');
        if (recapErr && recapErr.style.visibility === 'visible') {
            recapErr.style.visibility = 'hidden';
        }
    };

    (window as any).reCaptchaAlert409531000047791049 = function () {
        const recap = document.getElementById('recap409531000047791049');
        if (recap && recap.getAttribute('captcha-verified') === 'false') {
            const recapErr = document.getElementById('recapErr409531000047791049');
            if (recapErr) recapErr.style.visibility = 'visible';
            return false;
        }
        return true;
    };

    (window as any).checkMandatory409531000047791049 = function () {
        const mndFileds = ['Company', 'Last Name', 'Designation', 'Email', 'Mobile', 'LEADCF19', 'LEADCF123', 'LEADCF165'];
        const fldLangVal = ['Company Name', 'Name', 'Role', "POC's Email", "POC's Mobile", 'Annual Revenue', 'How We Can Help You', 'Services'];
        const form = document.forms.namedItem('WebToLeads409531000047791049') as HTMLFormElement;
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
        if ((window as any).validateEmail409531000047791049 && !(window as any).validateEmail409531000047791049()) return false;
        if ((window as any).reCaptchaAlert409531000047791049 && !(window as any).reCaptchaAlert409531000047791049()) return false;
        return true;
    };

    // Bulletproof instant reCAPTCHA renderer
    const renderRecaptcha = () => {
        const container = document.getElementById('recap409531000047791049');
        if (container && container.children.length === 0 && (window as any).grecaptcha && (window as any).grecaptcha.render) {
            try {
                (window as any).grecaptcha.render(container, {
                    sitekey: '6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7',
                    theme: 'light',
                    callback: (window as any).rccallback409531000047791049
                });
            } catch (e) {}
        }
    };

    let attempts = 0;
    const interval = setInterval(() => {
        attempts++;
        const container = document.getElementById('recap409531000047791049');
        if (container && container.children.length > 0) {
            clearInterval(interval);
            return;
        }
        if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
            renderRecaptcha();
        }
        if (attempts > 60) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-16 pb-10">

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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Transform Your Business with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-200">
                  Zoho
                </span>
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              />

              <div className="space-y-4">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
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
                  src="/images/zoho-logos/zoho premium.png"
                  alt="Zoho Premium Partner"
                  width={220}
                  height={70}
                  className="h-16 object-contain"
                  style={{ width: 'auto' }}
                />
              </motion.div>

              {/* Consultation Metrics Cards (Synced from About Us) */}
              <div className="mt-2 grid grid-cols-2 gap-4 sm:gap-5">
                {[
                  { label: "Projects Completed", value: "700+", icon: Briefcase },
                  { label: "Global Customers", value: "250+", icon: Building2 },
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
              <div className="relative bg-white rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

                <div className="relative z-10 p-5 sm:p-6 lg:p-7">
                  <div className="mb-4">
                    <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">Accelerate your growth with zoho</h2>
                  </div>

                  <form
                    action="https://crm.zoho.in/crm/WebToLeadForm"
                    id="webform409531000047791049"
                    name="WebToLeads409531000047791049"
                    method="POST"
                    onSubmit={(e) => {
                      if ((window as any).checkMandatory409531000047791049 && !(window as any).checkMandatory409531000047791049()) {
                        e.preventDefault();
                        return;
                      }
                      const targetForm = e.currentTarget;
                      const formData = new FormData(targetForm);
                      fetch('/api/contact/zoho-notification', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          name: formData.get('Last Name'),
                          email: formData.get('Email'),
                          mobile: formData.get('Mobile'),
                          role: formData.get('Designation'),
                          company: formData.get('Company'),
                          services: formData.getAll('LEADCF165'),
                          revenue: formData.get('LEADCF19'),
                          hearAbout: formData.get('LEADCF127'),
                          message: formData.get('LEADCF123'),
                          subjectTitle: 'Zoho Contact us Form Enquiry'
                        })
                      }).catch(() => {});
                    }}
                    acceptCharset="UTF-8"
                    className="space-y-5"
                  >
                    <input type="text" className="hidden" name="xnQsjsdp" value="67860b2429a550e35c7c44282b3ccd5de42dee7cf8fadbbd5b2f0246e4e596a8" readOnly />
                    <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                    <input type="text" className="hidden" name="xmIwtLD" value="921e163c506154d37a6252eba6666b0ab6a5878005e7d9cb1bf24e8009451307593cbebb06b6266e387cfba4816aa5de" readOnly />
                    <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
                    <input type="text" className="hidden" name="returnURL" value={returnUrl} readOnly />
                    <input type="text" className="hidden" name="aG9uZXlwb3Q" value="" readOnly />

                    {/* Hidden default fields required by Zoho */}
                    <select name="Lead Status" className="hidden" defaultValue="Database">
                      <option value="Database">Database</option>
                    </select>
                    <select name="Lead Source" className="hidden" defaultValue="Website (Form)">
                      <option value="Website (Form)">Website (Form)</option>
                    </select>
                    <input type="hidden" name="No of Employees" value="0" />

                    {/* Name Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Name *</label>
                        <input type="text" id="Last_Name" name="Last Name" required maxLength={80} placeholder="John Doe" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                      </div>
                    </div>

                    {/* Business Email Row */}
                    <div>
                      <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Email *</label>
                      <input type="text" id="Email" data-ftype="email" name="Email" required maxLength={100} placeholder="john@company.com" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                    </div>

                    {/* Mobile + Job Title Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Mobile *</label>
                        <input type="text" id="Mobile" name="Mobile" required maxLength={30} placeholder="+91 9876543210" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Role *</label>
                        <input type="text" id="Designation" name="Designation" required maxLength={100} placeholder="CTO / Manager" className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                      </div>
                    </div>

                    {/* Company Name Row */}
                    <div>
                      <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Company Name *</label>
                      <input type="text" id="Company" name="Company" required maxLength={200} placeholder="Company Inc." className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all placeholder-gray-400 shadow-sm" />
                    </div>

                    {/* Service Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Services *</label>
                        <MultiSelectDropdown
                          id="LEADCF165"
                          name="LEADCF165"
                          placeholder="-Select Service-"
                          bgClassName="bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 shadow-sm"
                          textColorClassName="text-gray-900"
                          options={[
                            "Zoho Licenses",
                            "Zoho Implementation",
                            // "Zoho Licenses + Implementation",
                            "Zoho Support",
                            "Zoho Optimization",
                            "Zoho Customization",
                            "Zoho Integrations",
                          ]}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">Annual Revenue *</label>
                        <select id="LEADCF19" name="LEADCF19" required onChange={(e) => (window as any).addAriaSelected409531000047791049?.(e)} className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none appearance-none cursor-pointer shadow-sm">
                          <option value="-None-">-None-</option>
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
                      <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">How did you hear about us. *</label>
                      <select id="LEADCF127" name="LEADCF127" required onChange={(e) => (window as any).addAriaSelected409531000047791049?.(e)} className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none appearance-none cursor-pointer shadow-sm">
                        <option value="-None-">-None-</option>
                        <option value="Email">Email</option>
                        <option value="Event">Event</option>
                        <option value="Friend/Associate">Friend/Associate</option>
                        <option value="Search">Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral</option>
                      </select>
                    </div>

                    {/* How We Can Help You Row */}
                    <div>
                      <label className="block text-gray-700 text-xs font-semibold uppercase tracking-wider mb-2">How We Can Help You *</label>
                      <textarea id="LEADCF123" name="LEADCF123" required rows={3} placeholder="Tell us about your requirements..." className="w-full bg-blue-50/50 border-2 border-blue-100 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none transition-all resize-none placeholder-gray-400 shadow-sm" />
                    </div>

                    {/* Captcha Section */}
                    <div className="flex flex-col gap-2 my-2">
                      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
                      <div
                        className="g-recaptcha"
                        data-sitekey="6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7"
                        data-theme="light"
                        data-callback="rccallback409531000047791049"
                        captcha-verified="false"
                        id="recap409531000047791049"
                      ></div>
                      <div
                        id="recapErr409531000047791049"
                        style={{ visibility: 'hidden', color: '#ef4444', fontSize: '12px' }}
                      >
                        Captcha validation failed. If you are not a robot then please try again.
                      </div>
                    </div>

                    <input type="submit" id="formsubmit" className="formsubmit zcwf_button w-full shrink-0 inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] text-sm cursor-pointer" value="Submit" />
                  </form>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quick Access Sub-Pages ────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
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
                desc: "Talk to our team.",
                link: "/zoho/free-consultation",
                icon: Target,
                image: "/images/contact/consultation.webp"
              },
              {
                title: "Request Quote",
                desc: "Get project pricing.",
                link: "/zoho/request-quote",
                icon: Clock,
                image: "/images/contact/quote.webp"
              },
              {
                title: "Careers",
                desc: "Join our growing team.",
                link: "/zoho/careers",
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
                  {/* Office Image */}
                  <div className="relative h-40 w-full overflow-hidden shrink-0">
                    <img
                      src={loc.image}
                      alt={`${loc.city} Office`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* Floating flag and region */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm border border-white/20">
                      <img 
                        src={`https://flagcdn.com/${loc.region === "INDIA" ? "in" : loc.region === "USA" ? "us" : "gb"}.svg`}
                        alt={loc.region}
                        className="w-4 h-3 object-cover rounded-sm"
                      />
                      <span className="text-gray-800 font-bold text-[9px] tracking-wider uppercase">{loc.region}</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="relative z-10 p-6 flex flex-col flex-1 gap-4">
                    {/* Flag + City */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 leading-tight">{loc.city}</h3>
                        <p className="text-xs text-blue-600 font-semibold mt-0.5">{loc.state}</p>
                      </div>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-100 shrink-0 shadow-sm">
                        <Building2 className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 w-full" />

                    {/* Contact Details — Address only */}
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 bg-blue-50 border border-blue-100">
                          <MapPin className="w-3 h-3 text-blue-600" />
                        </div>
                        <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm leading-relaxed hover:text-blue-600 hover:underline transition-colors">
                          {loc.address}
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

          {/* Bottom Global CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 rounded-3xl overflow-hidden relative py-10 px-8 sm:px-12 text-left border border-gray-800"
          >
            {/* Background Image with Dark Opacity */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/office/building.webp"
                alt="Office Building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-blue-950/90" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left Side: Content & Contacts */}
              <div className="flex flex-col items-start gap-4 max-w-2xl">
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-tight">
                  Ready to transform your business{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 font-bold">
                    from any location?
                  </span>
                </h3>

                {/* Horizontal Stack for Direct Contact Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-2 text-white/90">
                  <a href="mailto:contact@agsuitetech.com" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors group">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">contact@agsuitetech.com</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 shadow-lg hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  Contact Us Now
                </button>
                <Link
                  href="/zoho/contact/free-consultation"
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

      {/* ── Scripts ───────────────────────────────────────────────────────────── */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer strategy="afterInteractive" />
      {/* Zoho SalesIQ Chatbot - Commented out */}
      {/*
      <Script id="zoho-salesiq" strategy="afterInteractive">
        {`
          var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
        `}
      </Script>
      */}
      <Script id="recap-callback" strategy="afterInteractive">
        {`
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
      <Script id="wf_anal_zoho_contact" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=e7fa82545e6cbc426156b206aa8236f2c686a1dd1fa2201a42f8f8bc1f3ed582856adb0b2a204a9d5af92c2452e3a8a8gidc5c4b2eec1a1272f8a476c638c29bb49a4d78e91e7b5216007f5c7aeef1afd9fgid5f6d199f406123ad764d17f846376ab5e7fab29b0bebbbde07b6a8367d0aba4cgid8d7aa6245a7de773373511b56e3ffa902647cb1e3730e636a86b82d0019d0cce&tw=b2ff6a1aabcf001476b36b61fabd0fbad09ea545696c57b419b7adca06e6ef53&version=v2" strategy="afterInteractive" />
    </div>
  );
}
