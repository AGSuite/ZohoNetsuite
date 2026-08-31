"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  Building2,
  Send,
  Briefcase,
  Target,
  Users,
  Rocket,
} from "lucide-react";
import MultiSelectDropdown from "@/app/components/shared/MultiSelectDropdown";
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

function StatCard({ item }: { item: { label: string; value: string; icon: any }; index: number }) {
  const numericValue = parseInt(item.value.replace(/\D/g, "")) || 0;
  const suffix = item.value.replace(/\d/g, "");
  const [displayCount, setDisplayCount] = useState(numericValue);

  return (
    <div
      className="relative group p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-white via-white/95 to-blue-50/90 border border-blue-100/60 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative faint icon bg */}
      <div className="absolute -right-2 -bottom-2 opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-300 pointer-events-none">
        <item.icon className="w-16 h-16 text-blue-900" strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col items-start text-left">
        <div className="mb-2 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
          <item.icon className="w-4 h-4" strokeWidth={1.5} />
        </div>
        <div className="space-y-0.5">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#000d2e] via-blue-900 to-black tracking-tight leading-tight">
            {displayCount}{suffix}
          </div>
          <p className="text-gray-500 font-semibold text-[11px] group-hover:text-blue-700 transition-colors uppercase tracking-wider leading-tight">
            {item.label}
          </p>
        </div>
      </div>
    </div>
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

export default function ZohoContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [locationFilter, setLocationFilter] = useState<Region>("All");
  const [mobile, setMobile] = useState("");
  const [, setIsMobileValid] = useState(false);
  const [returnUrl, setReturnUrl] = useState("https://www.agsuite.tech/thank-you");

  const initRecaptcha = useCallback(() => {
    if (typeof window === "undefined") return;
    const container = document.getElementById("recap409531000047791049");
    if (container && container.children.length === 0 && (window as any).grecaptcha?.render) {
      try {
        (window as any).grecaptcha.render(container, {
          sitekey: "6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7",
          theme: "light",
          callback: (window as any).rccallback409531000047791049,
        });
      } catch { }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReturnUrl(window.location.origin + "/thank-you");
      (window as any).onRecaptchaLoadZoho = initRecaptcha;

      (window as any).addAriaSelected409531000047791049 = function (event: any) {
        const optionElem = event.target;
        const prev = optionElem.querySelector("[aria-selected=true]");
        if (prev) prev.removeAttribute("aria-selected");
        optionElem.querySelectorAll("option")[optionElem.selectedIndex].ariaSelected = "true";
      };

      (window as any).validateEmail409531000047791049 = function () {
        const form = document.forms.namedItem("WebToLeads409531000047791049") as HTMLFormElement;
        if (!form) return true;
        const emailFld = form.querySelectorAll('[data-ftype="email"]');
        for (let i = 0; i < emailFld.length; i++) {
          const emailVal = (emailFld[i] as HTMLInputElement).value;
          if (emailVal.replace(/^\s+|\s+$/g, "").length !== 0) {
            const atpos = emailVal.indexOf("@");
            const dotpos = emailVal.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
              alert("Please enter a valid email address.");
              (emailFld[i] as HTMLInputElement).focus();
              return false;
            }
          }
        }
        return true;
      };

      (window as any).rccallback409531000047791049 = function () {
        const recap = document.getElementById("recap409531000047791049");
        if (recap) recap.setAttribute("captcha-verified", "true");
        const recapErr = document.getElementById("recapErr409531000047791049");
        if (recapErr && recapErr.style.visibility === "visible") {
          recapErr.style.visibility = "hidden";
        }
      };

      (window as any).reCaptchaAlert409531000047791049 = function () {
        const recap = document.getElementById("recap409531000047791049");
        if (recap && recap.getAttribute("captcha-verified") === "false") {
          const recapErr = document.getElementById("recapErr409531000047791049");
          if (recapErr) recapErr.style.visibility = "visible";
          return false;
        }
        return true;
      };

      (window as any).checkMandatory409531000047791049 = function () {
        const mndFileds = ["Company", "Last Name", "Designation", "Email", "Mobile", "LEADCF19", "LEADCF123", "LEADCF165"];
        const fldLangVal = ["Company Name", "Name", "Role", "POC's Email", "POC's Mobile", "Annual Revenue", "How We Can Help You", "Services"];
        const form = document.forms.namedItem("WebToLeads409531000047791049") as HTMLFormElement;
        if (!form) return false;

        for (let i = 0; i < mndFileds.length; i++) {
          const fieldObj = form.elements.namedItem(mndFileds[i]) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
          if (fieldObj) {
            if (fieldObj.value.replace(/^\s+|\s+$/g, "").length === 0) {
              alert(fldLangVal[i] + " cannot be empty.");
              fieldObj.focus();
              return false;
            } else if (fieldObj.nodeName === "SELECT") {
              const selectField = fieldObj as HTMLSelectElement;
              if (selectField.options[selectField.selectedIndex].value === "" || selectField.options[selectField.selectedIndex].value === "-None-") {
                alert(fldLangVal[i] + " cannot be none.");
                selectField.focus();
                return false;
              }
            }
          }
        }
        if ((window as any).validateEmail409531000047791049 && !(window as any).validateEmail409531000047791049()) return false;
        if ((window as any).reCaptchaAlert409531000047791049 && !(window as any).reCaptchaAlert409531000047791049()) return false;
        return true;
      };

      if ((window as any).grecaptcha?.render) {
        initRecaptcha();
      }
    }
  }, [initRecaptcha]);

  const sendEmail = async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    fetch("/api/contact/zoho-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("Last Name"),
        email: formData.get("Email"),
        mobile: formData.get("Mobile"),
        role: formData.get("Designation"),
        company: formData.get("Company"),
        services: formData.getAll("LEADCF165"),
        revenue: formData.get("LEADCF19"),
        hearAbout: formData.get("LEADCF127"),
        message: formData.get("LEADCF123"),
        subjectTitle: "Zoho Contact us Form Enquiry",
      }),
    }).catch(() => { });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if ((window as any).checkMandatory409531000047791049 && !(window as any).checkMandatory409531000047791049()) {
      e.preventDefault();
      return;
    }

    try {
      // @ts-ignore
      if (window.$zoho && window.$zoho.salesiq) {
        const form = e.currentTarget;
        const LDTuvidObj = form.elements.namedItem("LDTuvid") as HTMLInputElement;
        if (LDTuvidObj) {
          // @ts-ignore
          LDTuvidObj.value = window.$zoho.salesiq.visitor.uniqueid();
        }
        const nameObj = form.elements.namedItem("Last Name") as HTMLInputElement;
        const emailObj = form.elements.namedItem("Email") as HTMLInputElement;
        if (nameObj && emailObj) {
          // @ts-ignore
          window.$zoho.salesiq.visitor.name(nameObj.value);
          // @ts-ignore
          window.$zoho.salesiq.visitor.email(emailObj.value);
        }
      }
    } catch { }

    sendEmail(e.currentTarget);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white">
      {/* ── Hero / Form Section ─────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[radial-gradient(ellipse_90%_90%_at_50%_-15%,rgba(14,165,233,0.28),rgba(0,8,20,0.98)_70%),linear-gradient(135deg,#000814_0%,#000d2e_50%,#001a4d_100%)]">
        {/* Square Grid Pattern Lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Gradient Glow Blobs */}
        <div className="absolute -top-24 -left-24 w-[650px] h-[650px] bg-gradient-to-br from-blue-600/25 via-cyan-400/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-indigo-600/20 via-purple-600/15 to-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

        {/* Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* ── LEFT: Hero Content ────────────────────────────────────────── */}
            <div className="flex flex-col justify-between pt-6 lg:pt-8">
              {/* H1 */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-semibold text-white leading-tight tracking-tight mb-3">
                  Transform Your Business with{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                    Zoho
                  </span>
                </h1>

                {/* Divider */}
                <div className="w-18 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-4" />

                {/* Subline */}
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md mb-5">
                  Bridge the gap between vision and execution. Partner with certified Zoho experts to build a resilient, unified, and data-driven enterprise.
                </p>

                {/* Partner Logo */}
                <div className="mb-6 h-14 relative w-56">
                  <Image
                    src="/images/zoho-logos/zoho premium.png"
                    alt="Zoho Premium Partner"
                    fill
                    priority
                    sizes="220px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Stat Cards — 3 columns */}
              <div className="grid grid-cols-3 gap-3">
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
            </div>

            {/* ── RIGHT: Contact Form ────────────────────────────────────────── */}
            <div className="w-full relative">
              {/* Ambient Glow Behind Form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-cyan-400/25 to-indigo-600/30 rounded-3xl blur-xl -z-10 pointer-events-none" />

              <div className="relative bg-white p-6 sm:p-7 rounded-2xl border border-blue-100/80 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.25),0_10px_25px_-5px_rgba(6,182,212,0.18),0_30px_70px_rgba(0,0,0,0.35)] overflow-hidden w-full min-h-[580px]">
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 z-20" />

                <div className="relative z-10 pt-1">
                  <h2 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 bg-clip-text text-transparent tracking-tight mb-3">
                    Talk to a Zoho Expert
                  </h2>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Message Sent!</h3>
                      <p className="text-xs text-gray-500 max-w-xs">
                        Thank you for reaching out. Our certified Zoho experts will connect with you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form
                      action="https://crm.zoho.in/crm/WebToLeadForm"
                      id="webform409531000047791049"
                      name="WebToLeads409531000047791049"
                      method="POST"
                      onSubmit={handleSubmit}
                      acceptCharset="UTF-8"
                      className="space-y-3"
                    >
                      <input type="text" className="hidden" name="xnQsjsdp" value="262e1ed99e86602d574e7f7a3556903cf3987a60522587d193269076b51f27ac" readOnly />
                      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                      <input type="text" className="hidden" name="xmIwtLD" value="50434209e66e7930102f5d083964cd0f9819b88a702d9fc9750da997ff754f7e4e67130f9f65fb9d33069cf9e29699b3" readOnly />
                      <input type="text" className="hidden" name="actionType" value="TGVhZHM=" readOnly />
                      <input type="text" className="hidden" name="returnURL" value={returnUrl} readOnly />
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
                          <div className="w-full text-slate-900 contact-iti-wrapper min-h-[38px]">
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
                            placeholder="CTO / Manager"
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
                            onChange={(e) => (window as any).addAriaSelected409531000047791049?.(e)}
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
                            Zoho Services <span className="text-blue-600">*</span>
                          </label>
                          <MultiSelectDropdown
                            id="LEADCF165"
                            name="LEADCF165"
                            placeholder="-Select Service-"
                            className="!py-2.5 !px-3 !text-xs"
                            bgClassName="bg-white border border-slate-200"
                            textColorClassName="text-slate-900"
                            options={[
                              "Zoho Licenses",
                              "Zoho Implementation",
                              "Zoho Support",
                              "Zoho Optimization",
                              "Zoho Customization",
                              "Zoho Integrations",
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
                            onChange={(e) => (window as any).addAriaSelected409531000047791049?.(e)}
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
                          placeholder="Tell us about your requirements..."
                          className="w-full bg-white border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3 py-2.5 text-slate-900 text-xs transition-all outline-none resize-none placeholder-slate-400"
                        />
                      </div>

                      {/* Captcha */}
                      <div className="flex flex-col gap-0.5 min-h-[64px]">
                        <div
                          data-sitekey="6LeWKowtAAAAACYRbbynrmgj7_9Oiqz-QvTAEZb7"
                          data-theme="light"
                          data-callback="rccallback409531000047791049"
                          captcha-verified="false"
                          id="recap409531000047791049"
                          className="g-recaptcha scale-[0.82] origin-left"
                        ></div>
                        <div
                          id="recapErr409531000047791049"
                          style={{ visibility: "hidden", color: "red", fontSize: "11px" }}
                        >
                          Captcha validation failed. Please try again.
                        </div>
                      </div>

                      {/* Submit */}
                      <div>
                        <button
                          type="submit"
                          id="formsubmit"
                          className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-500/30 hover:scale-[1.01] text-sm uppercase tracking-wider cursor-pointer formsubmit-contact"
                        >
                          <Send className="w-4 h-4" />
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
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
      <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 tracking-tight">
              Explore More Ways to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Connect
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Free Consultation",
                desc: "Talk to our team.",
                link: "/zoho/free-consultation",
                icon: Target,
                image: "/images/contact/consultation.webp",
              },
              {
                title: "Request Quote",
                desc: "Get project pricing.",
                link: "/zoho/request-quote",
                icon: Clock,
                image: "/images/contact/quote.webp",
              },
              {
                title: "Careers",
                desc: "Join our growing team.",
                link: "/zoho/careers",
                icon: Briefcase,
                image: "/images/contact/carrer.webp",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1.5 flex flex-col justify-end"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 p-6 sm:p-8 text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-1.5">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-5 group-hover:text-white transition-colors">{item.desc}</p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-blue-900 group-hover:text-blue-600 border border-white/20 transition-colors duration-300">
                    <span className="text-xs font-semibold uppercase tracking-wider">Explore More</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Office Locations Section ─────────────────────────────────────── */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4 shadow-xs">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">Our Global Presence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 mb-3 tracking-tight">
              We&apos;re Where{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Innovation Happens
              </span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              With offices across India, USA, and UK, our certified Zoho experts are always just a conversation away.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap">
            {(["All", "INDIA", "USA", "UK"] as Region[]).map((tab) => {
              const isActive = locationFilter === tab;
              const labels: Record<Region, string> = { All: "Global Offices", INDIA: "INDIA", USA: "USA", UK: "UK" };
              return (
                <button
                  key={tab}
                  onClick={() => setLocationFilter(tab)}
                  className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border cursor-pointer ${isActive
                    ? "bg-gradient-to-r from-[#0a1f5c] to-[#1d4ed8] text-white border-transparent shadow-md shadow-blue-600/25"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 shadow-xs"
                    }`}
                >
                  <span className="text-base leading-none">
                    {tab === "All" ? (
                      "🌐"
                    ) : (
                      <span className="inline-block w-4.5 h-3 overflow-hidden rounded-xs relative">
                        <Image
                          src={`https://flagcdn.com/${tab === "INDIA" ? "in" : tab === "USA" ? "us" : "gb"}.svg`}
                          alt={tab}
                          width={18}
                          height={12}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </span>
                    )}
                  </span>
                  {labels[tab]}
                </button>
              );
            })}
          </div>

          {/* Locations Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations
              .filter((loc) => locationFilter === "All" || loc.region === locationFilter)
              .map((loc, index) => (
                <div
                  key={`${loc.city}-${index}`}
                  className="group relative bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-200 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all duration-200"
                >
                  {/* Office Image */}
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
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xs border border-white/20">
                      <span className="inline-block w-4 h-3 overflow-hidden rounded-xs relative">
                        <Image
                          src={`https://flagcdn.com/${loc.region === "INDIA" ? "in" : loc.region === "USA" ? "us" : "gb"}.svg`}
                          alt={loc.region}
                          width={16}
                          height={12}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </span>
                      <span className="text-gray-800 font-bold text-[9px] tracking-wider uppercase">{loc.region}</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col flex-1 gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 leading-tight">{loc.city}</h3>
                        <p className="text-xs text-blue-600 font-semibold mt-0.5">{loc.state}</p>
                      </div>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-100 shrink-0 shadow-xs">
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
                          className="text-gray-600 text-xs sm:text-sm leading-relaxed hover:text-blue-600 hover:underline transition-colors"
                        >
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
                            className="text-gray-700 text-xs sm:text-sm font-medium hover:text-blue-600 transition-colors"
                          >
                            {loc.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white transition-all duration-200 hover:shadow-md group/btn shadow-xs"
                      style={{ background: "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)" }}
                    >
                      Locate Our Office
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom Global CTA */}
          <div className="mt-12 sm:mt-14 rounded-3xl overflow-hidden relative py-8 sm:py-10 px-6 sm:px-12 text-left border border-gray-800">
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

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
              <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-2xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-tight">
                  Ready to transform your business{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 font-bold">
                    from any location?
                  </span>
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-1 text-white/90">
                  <a href="mailto:contact@agsuitetech.com" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors group">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">contact@agsuitetech.com</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Contact Us Now
                </button>
                <Link
                  href="/zoho/contact/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold border border-white/30 text-white rounded-xl hover:bg-white/15 hover:border-white/60 backdrop-blur-sm transition-all duration-200"
                >
                  Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scripts ───────────────────────────────────────────────────────────── */}
      <Script src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadZoho&render=explicit" async defer strategy="lazyOnload" />
      <Script id="recap-callback" strategy="lazyOnload">
        {`
          function rccallback409531000047791049() {
            var el = document.getElementById('recap409531000047791049');
            if(el) el.setAttribute('captcha-verified', 'true');
            var err = document.getElementById('recapErr409531000047791049');
            if(err && err.style.visibility === 'visible') err.style.visibility = 'hidden';
          }
        `}
      </Script>
      <Script id="wf_anal_zoho_contact" src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=5be9692ef9ab427acf1391714f2fff91d5b72c469390938cefbd33ab84dd5b8e9c71223ce8c14f44c8e8365f6a8c23d6gidbc632d800f066907ef96d29b7bae4b8ea7e60f0229673f2235936f50246b89fbgid29eac7a96f602c220e122d79c6e3da45331fb2e363513e82ad55c00dfc35c738gidcab4223515c216b81de2936190487e2bac1ebee6f8458681d0b0cd6ba0ce7107&tw=d6fc29e8e9570866ed4bd03fb221b685fd56a29f2bc327bb3bb9169356a4b4e3&version=v2" strategy="lazyOnload" />
    </div>
  );
}
