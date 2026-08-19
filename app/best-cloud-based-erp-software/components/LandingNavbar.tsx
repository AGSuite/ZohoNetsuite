"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "NetSuite Platform", href: "#platform" },
    { label: "Why Choose NetSuite", href: "#whyNetSuite" },
    { label: "Business with NetSuite", href: "#businessGrow" },
    { label: "NetSuite Benefits", href: "#benefits" },
    { label: "Pricing", href: "#ERPCost" },
  ];

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroElem = document.getElementById("hero");
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: AGSuite Logo (Prominent Size, Smooth scroll to hero) */}
          <Link
            href="#hero"
            onClick={scrollToHero}
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
            aria-label="AGSuite Technologies Home"
          >
            <div className="relative h-12 w-52 sm:h-14 sm:w-64">
              <Image
                src="/images/logos/agsuite-logo.webp"
                alt="AGSuite Technologies Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Navigation Links (Increased spacing and font size) */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: NetSuite Solution Partner Logo (Increased size, smooth scroll to hero) */}
          <div className="hidden sm:flex items-center justify-end">
            <Link
              href="#hero"
              onClick={scrollToHero}
              className="relative h-12 w-48 sm:h-14 sm:w-56 border border-slate-200/80 rounded-xl p-1.5 shadow-xs bg-white hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center"
              aria-label="Oracle NetSuite Solution Partner Logo"
            >
              <Image
                src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
                alt="Oracle NetSuite Solution Partner Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-800 hover:text-blue-600 p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">Navigation</span>
              <div className="relative h-10 w-36">
                <Image
                  src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
                  alt="Oracle NetSuite Partner Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-slate-800 hover:text-blue-600 py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
