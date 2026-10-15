"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About Us", href: "/odoo#overview" },
  { label: "Solution", href: "/odoo#apps" },
  { label: "Services", href: "/odoo#services" },
  { label: "Industries", href: "/odoo#industries" },
  { label: "Insight", href: "/odoo#approach" },
  { label: "Contact", href: "/odoo#contact" },
];

export default function OdooNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] h-20 bg-white shadow-sm">
      <nav className="mx-auto grid h-full max-w-[1450px] grid-cols-[1fr_auto] items-center px-6 lg:grid-cols-[1fr_auto_1fr]" aria-label="Odoo navigation">
        <Link href="/odoo" className="flex items-center" aria-label="AGSuite Odoo solutions home">
          <Image
            src="/images/logos/agsuite-logo.webp"
            alt="AGSuite Technologies"
            width={240}
            height={80}
            className="h-16 w-auto object-contain sm:h-20"
            priority
          />
        </Link>

        <div className="hidden items-center justify-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-900 transition-colors duration-300 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 sm:gap-4">
          <div className="group relative hidden sm:block">
            <div className="absolute -inset-0.5 animate-pulse rounded-xl bg-gradient-to-r from-emerald-300 via-blue-600 to-fuchsia-400 opacity-75 blur-sm transition duration-300 group-hover:opacity-100" />
            <Link
              href="/odoo#contact"
              className="relative flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-900 shadow-lg transition-all hover:scale-105 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <span className="h-2 w-2 animate-ping rounded-full bg-blue-600" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Best Odoo Partners
              </span>
            </Link>
          </div>

          <div className="group relative hidden lg:block">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 blur-md transition duration-500 group-hover:opacity-100" />
            <Link
              href="/odoo#contact"
              className="relative flex items-center gap-2 whitespace-nowrap rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-bold text-white"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-900 lg:hidden"
            aria-expanded={open}
            aria-controls="odoo-mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="odoo-mobile-menu" className="fixed inset-0 top-20 z-40 overflow-y-auto bg-white p-5 lg:hidden">
          <div className="mx-auto flex max-w-[1450px] flex-col gap-2">
            <Link
              href="/odoo#contact"
              onClick={() => setOpen(false)}
              className="mb-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-extrabold text-slate-900 shadow-md"
            >
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Best Odoo Partners
              </span>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/odoo#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
