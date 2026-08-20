"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShieldCheck } from "lucide-react";

export default function LocalizationNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Modules", href: "#modules" },
    { label: "Challenges", href: "#challenges" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace(/^#/, "");
    const element = document.getElementById(targetId);
    if (element) {
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(element, { offset: -80, duration: 0.9, lock: false });
      } else {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToHero = (e: React.MouseEvent) => {
    scrollToSection("#home")(e);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: AGSuite Logo */}
        <Link
          href="#home"
          onClick={scrollToHero}
          aria-label="AGSuite Technologies Home"
          className="shrink-0"
        >
          <Image
            src="/images/logos/agsuite-logo.webp"
            alt="AGSuite Technologies Logo"
            width={200}
            height={70}
            priority
            className="w-[200px] h-[70px] object-contain"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={scrollToSection(link.href)}
              className="px-4 py-2 text-sm xl:text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap rounded-lg hover:bg-slate-50 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: NetSuite Solution Partner Logo + Mobile Button */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="#home"
            onClick={scrollToHero}
            aria-label="Oracle NetSuite Solution Partner"
            className="hidden sm:block"
          >
            <Image
              src="/images/netsuiteimages/netsuitelogos/netsuiteblack.webp"
              alt="Oracle NetSuite Solution Partner Logo"
              width={180}
              height={60}
              priority
              className="w-[180px] h-[60px] object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-900"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-2xl px-6 py-5 space-y-3">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest">Menu</span>
            <Image
              src="/images/netsuiteimages/netsuitelogos/netsuiteblack.webp"
              alt="Black Oracle NetSuite Partner Logo"
              width={130}
              height={40}
              className="object-contain"
            />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={scrollToSection(link.href)}
              className="block text-base font-semibold text-slate-800 hover:text-blue-600 py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
