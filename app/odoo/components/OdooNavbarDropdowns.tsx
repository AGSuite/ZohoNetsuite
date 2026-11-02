"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";
import type { OdooNavSection } from "./navDataOdoo";

interface DropdownProps {
  item: OdooNavSection;
  closeMenu: () => void;
}

const sectionThemes: Record<string, { banner: string; icon: string; iconHover: string; linkHover: string }> = {
  "About Us": {
    banner: "from-[#2c1832] via-[#593650] to-[#714b67]",
    icon: "bg-purple-50 text-[#714b67]",
    iconHover: "group-hover:bg-[#714b67] group-hover:text-white",
    linkHover: "group-hover:text-[#714b67]",
  },
  Services: {
    banner: "from-[#321a3b] via-[#714b67] to-[#8b5cf6]",
    icon: "bg-violet-50 text-violet-700",
    iconHover: "group-hover:bg-violet-600 group-hover:text-white",
    linkHover: "group-hover:text-violet-700",
  },
  Industries: {
    banner: "from-[#20112d] via-[#56305f] to-[#7c3aed]",
    icon: "bg-fuchsia-50 text-fuchsia-700",
    iconHover: "group-hover:bg-fuchsia-600 group-hover:text-white",
    linkHover: "group-hover:text-fuchsia-700",
  },
  Insights: {
    banner: "from-[#29143a] via-[#643b9f] to-[#4f46e5]",
    icon: "bg-indigo-50 text-indigo-700",
    iconHover: "group-hover:bg-indigo-600 group-hover:text-white",
    linkHover: "group-hover:text-indigo-700",
  },
  Contact: {
    banner: "from-[#1f1328] via-[#714b67] to-[#a855f7]",
    icon: "bg-purple-50 text-purple-700",
    iconHover: "group-hover:bg-purple-600 group-hover:text-white",
    linkHover: "group-hover:text-purple-700",
  },
};

export function OdooDesktopDropdown({ item, closeMenu }: DropdownProps) {
  const theme = sectionThemes[item.title] ?? sectionThemes["About Us"];
  const isAboutUs = item.title === "About Us";

  return (
    <div className="fixed inset-x-0 top-20 z-[520] w-screen border-b border-slate-200 bg-white shadow-2xl">
      <div className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid min-h-fit grid-cols-[2fr_1fr] divide-x divide-slate-100">
          <div className="p-6">
            <div className="space-y-5">
              <div className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${theme.banner} p-5`}>
                <Image src={item.featured.image} alt="" fill sizes="850px" className="object-cover opacity-10" />
                <div className="relative z-10 flex items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.bannerTitle}</h3>
                    <p className="mt-1 text-xs text-white/80">{item.bannerDescription}</p>
                  </div>
                  <Link href={item.viewAllHref} onClick={closeMenu} className="shrink-0 rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-900 transition hover:bg-violet-50">
                    View All
                  </Link>
                </div>
              </div>

              <div className={`grid grid-cols-3 ${isAboutUs ? "gap-4" : "gap-3"}`}>
                {item.children.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link key={link.label} href={link.href} onClick={closeMenu} className={`group flex rounded-xl border border-transparent transition hover:border-slate-100 hover:bg-slate-50 ${isAboutUs ? "min-h-[125px] items-center gap-3.5 p-4" : "items-start gap-2.5 p-3"}`}>
                      <span className={`shrink-0 rounded-lg transition-colors ${isAboutUs ? "p-2.5" : "p-1.5"} ${theme.icon} ${theme.iconHover}`}>
                        {Icon && <Icon className={isAboutUs ? "h-5 w-5" : "h-4 w-4"} />}
                      </span>
                      <span className="min-w-0">
                        <span className={`block font-bold text-slate-900 transition-colors ${isAboutUs ? "text-base" : "text-[14px]"} ${theme.linkHover}`}>{link.label}</span>
                        {link.description && <span className={`${isAboutUs ? "mt-1.5 text-xs leading-5" : "mt-0.5 text-[11px] leading-relaxed"} line-clamp-2 block text-slate-500`}>{link.description}</span>}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col bg-slate-50/70 p-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{item.featured.eyebrow}</p>
            <div className="group relative min-h-[230px] flex-1 overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
              <Image src={item.featured.image} alt="" fill sizes="400px" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1024] via-[#2f1939]/70 to-[#714b67]/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h4 className="text-lg font-bold leading-tight text-white">{item.featured.title}</h4>
                <p className="mt-2 text-[11px] leading-relaxed text-white/80">{item.featured.description}</p>
                <Link href={item.featured.href} onClick={closeMenu} className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white transition-all group-hover:gap-3">
                  {item.featured.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OdooDesktopMegaMenu({ item, closeMenu }: DropdownProps) {
  const categories = item.children[0]?.megaMenu?.categories ?? [];

  return (
    <div className="fixed inset-x-0 top-20 z-[520] max-h-[calc(100vh-5rem)] w-screen overflow-y-auto border-b border-slate-200 bg-slate-50 shadow-2xl">
      <div className="mx-auto max-w-[1540px] px-4 py-2">
        <div className="overflow-hidden bg-white">
          <div className="grid grid-cols-4 border-l border-slate-200">
            {categories.map((category) => (
              <section key={category.title} className="border-r border-slate-200 px-5 py-2.5">
                <h4 className="flex items-center gap-2 pb-1.5 text-sm font-extrabold uppercase tracking-[0.08em] text-slate-800">
                  <span className="h-5 w-1 rounded-full bg-gradient-to-b from-[#714b67] to-violet-600" />
                  {category.title}
                </h4>
                <div className="mt-1">
                  {category.items.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <Link key={sub.label} href={sub.href} onClick={closeMenu} className="group/link flex min-h-9 items-center gap-3 px-1 py-1 transition-all hover:pl-2 hover:text-[#714b67]">
                        {sub.logo ? <Image src={sub.logo} alt="" width={30} height={30} className="h-6 w-6 shrink-0 object-contain transition group-hover/link:scale-110" /> : Icon ? <Icon className="h-5 w-5 shrink-0 text-[#714b67]" /> : null}
                        <span className="text-[13px] font-semibold leading-snug text-slate-700 transition group-hover/link:text-[#714b67]">{sub.label}</span>
                        <ArrowRight className="ml-auto h-3.5 w-3.5 -translate-x-1 text-[#714b67] opacity-0 transition group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
        <div className="flex justify-center py-2">
          <Link href="/odoo/apps" onClick={closeMenu} className="group inline-flex items-center gap-2.5 rounded-full bg-slate-950 px-5 py-2 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#714b67] hover:shadow-lg">
            <Box className="h-4 w-4" />
            Browse all Apps
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}