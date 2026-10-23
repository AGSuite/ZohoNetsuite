"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { OdooNavSection } from "./navDataOdoo";

interface DropdownProps {
  item: OdooNavSection;
  closeMenu: () => void;
}

interface MegaMenuProps extends DropdownProps {
  activePanel: string;
  setActivePanel: (label: string) => void;
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

const categoryThemes = [
  "from-purple-50 to-violet-50/30 border-purple-100 text-purple-950",
  "from-blue-50 to-indigo-50/30 border-blue-100 text-blue-950",
  "from-emerald-50 to-teal-50/30 border-emerald-100 text-emerald-950",
  "from-amber-50 to-orange-50/30 border-amber-100 text-amber-950",
  "from-fuchsia-50 to-pink-50/30 border-fuchsia-100 text-fuchsia-950",
  "from-cyan-50 to-sky-50/30 border-cyan-100 text-cyan-950",
];

export function OdooDesktopDropdown({ item, closeMenu }: DropdownProps) {
  const theme = sectionThemes[item.title] ?? sectionThemes["About Us"];

  return (
    <div className="fixed inset-x-0 top-20 z-50 w-screen border-b border-slate-200 bg-white shadow-2xl">
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

              <div className="grid grid-cols-3 gap-3">
                {item.children.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link key={link.label} href={link.href} onClick={closeMenu} className="group flex items-start gap-2.5 rounded-xl border border-transparent p-3 transition hover:border-slate-100 hover:bg-slate-50">
                      <span className={`shrink-0 rounded-lg p-1.5 transition-colors ${theme.icon} ${theme.iconHover}`}>
                        {Icon && <Icon className="h-4 w-4" />}
                      </span>
                      <span className="min-w-0">
                        <span className={`block text-[14px] font-bold text-slate-900 transition-colors ${theme.linkHover}`}>{link.label}</span>
                        {link.description && <span className="mt-0.5 line-clamp-2 block text-[11px] leading-relaxed text-slate-500">{link.description}</span>}
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

export function OdooDesktopMegaMenu({ item, activePanel, setActivePanel, closeMenu }: MegaMenuProps) {
  const selected = item.children.find((child) => child.label === activePanel) ?? item.children[0];
  const categories = selected?.megaMenu?.categories ?? [];
  const isApps = selected?.label === "ODOO BUSINESS APPS";

  return (
    <div className="fixed inset-x-0 top-20 z-50 w-screen border-b border-slate-200 bg-slate-50 shadow-2xl">
      <div className="mx-auto max-w-[1500px] px-5 py-4">
        <div className="flex gap-4">
          <div className="grid w-64 shrink-0 grid-rows-2 gap-3 self-stretch">
            {item.children.map((child, index) => {
              const active = selected?.label === child.label;
              return (
                <div
                  key={child.label}
                  onMouseEnter={() => setActivePanel(child.label)}
                  onFocus={() => setActivePanel(child.label)}
                  className={`group relative min-h-[150px] cursor-pointer overflow-hidden rounded-xl border-2 transition duration-300 ${active ? "scale-[1.01] border-[#8b5cf6] shadow-lg" : "border-transparent hover:border-purple-200"}`}
                  tabIndex={0}
                >
                  <Image
                    src={index === 0 ? "/images/odoo/odoo-growth-dashboard.png" : "/images/navbar/services.png"}
                    alt=""
                    fill
                    sizes="256px"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 opacity-85 mix-blend-multiply ${index === 0 ? "bg-gradient-to-br from-[#3d2138] via-[#714b67] to-[#6d28d9]" : "bg-gradient-to-br from-[#25142f] via-[#5b2774] to-[#4338ca]"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5">
                    <h4 className="text-[13px] font-black uppercase leading-tight tracking-wider text-white">{child.label}</h4>
                    <p className="mt-1 line-clamp-1 text-[10px] text-white/80">{child.megaMenu?.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <Link href={child.href} onClick={closeMenu} className="rounded-lg bg-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur transition hover:bg-violet-600">
                        Explore
                      </Link>
                      <span className={`grid h-7 w-7 place-items-center rounded-full transition ${active ? "bg-violet-600" : "bg-white/10 group-hover:bg-violet-600"}`}>
                        <ArrowRight className="h-3.5 w-3.5 text-white" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`grid flex-1 auto-rows-fr items-stretch gap-3 ${isApps ? "grid-cols-3 grid-rows-2" : "grid-cols-2 grid-rows-1"}`}>
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className={`group relative overflow-hidden rounded-xl border bg-gradient-to-br p-3.5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg ${categoryThemes[categoryIndex % categoryThemes.length]}`}>
                <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-white/50 transition duration-700 group-hover:scale-150" />
                <h4 className="relative border-b border-current/10 pb-2 text-[11px] font-bold uppercase tracking-[0.14em]">{category.title}</h4>
                <div className="relative mt-2.5 grid gap-2">
                  {category.items.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <Link key={sub.label} href={sub.href} onClick={closeMenu} className="group/link flex items-center gap-2.5 rounded-lg p-1 transition hover:bg-white/70">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-white/80 bg-white shadow-sm transition group-hover/link:scale-105">
                          {sub.logo ? <Image src={sub.logo} alt="" width={20} height={20} className="h-[18px] w-[18px] object-contain" /> : Icon ? <Icon className="h-3.5 w-3.5 text-[#714b67]" /> : null}
                        </span>
                        <span className="text-xs font-bold leading-tight text-slate-900 transition group-hover/link:translate-x-0.5 group-hover/link:text-violet-700">{sub.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
