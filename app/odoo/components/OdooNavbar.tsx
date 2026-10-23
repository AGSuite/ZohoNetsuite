"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { OdooDesktopDropdown, OdooDesktopMegaMenu } from "./OdooNavbarDropdowns";
import { navItemsOdoo } from "./navDataOdoo";

const DEFAULT_SOLUTION_PANEL = "ODOO BUSINESS APPS";

export default function OdooNavbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeSolutionPanel, setActiveSolutionPanel] = useState(DEFAULT_SOLUTION_PANEL);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenus = useCallback(() => {
    setOpenDropdown(null);
    setActiveSolutionPanel(DEFAULT_SOLUTION_PANEL);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const syncDesktop = () => setIsDesktop(media.matches);
    syncDesktop();
    media.addEventListener("change", syncDesktop);
    return () => media.removeEventListener("change", syncDesktop);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeMenus]);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  const openMenu = (title: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(title);
    if (title === "Solutions") setActiveSolutionPanel(DEFAULT_SOLUTION_PANEL);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(closeMenus, 160);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] h-20 border-b border-slate-100 bg-white shadow-sm">
      <nav className="mx-auto grid h-full max-w-[1450px] grid-cols-[1fr_auto] items-center px-5 lg:grid-cols-[auto_1fr_auto] lg:px-6" aria-label="Odoo navigation">
        <Link href="/odoo" className="flex items-center" aria-label="AGSuite Odoo solutions home">
          <Image src="/images/logos/agsuite-logo.webp" alt="AGSuite Technologies" width={240} height={80} priority className="h-16 w-auto object-contain sm:h-20" />
        </Link>

        <div className="hidden items-center justify-center lg:flex">
          {navItemsOdoo.map((item) => {
            const isOpen = openDropdown === item.title;
            return (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => openMenu(item.title)}
                onMouseLeave={scheduleClose}
                onFocus={() => openMenu(item.title)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) scheduleClose();
                }}
              >
                <button
                  type="button"
                  onClick={() => (isOpen ? closeMenus() : openMenu(item.title))}
                  aria-expanded={isOpen}
                  className={"flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-sm font-semibold transition xl:px-4 xl:text-base " + (isOpen ? "text-[#714b67]" : "text-slate-900 hover:text-[#714b67]")}
                >
                  {item.title}
                  <ChevronDown className={"h-4 w-4 transition-transform duration-200 " + (isOpen ? "rotate-180" : "")} />
                </button>

                {isDesktop && item.title === "Solutions" && isOpen && (
                  <OdooDesktopMegaMenu
                    item={item}
                    activePanel={activeSolutionPanel}
                    setActivePanel={setActiveSolutionPanel}
                    closeMenu={closeMenus}
                  />
                )}

                {isDesktop && item.title !== "Solutions" && isOpen && <OdooDesktopDropdown item={item} closeMenu={closeMenus} />}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-end gap-3">
          <div className="group relative hidden xl:block">
            <div className="absolute -inset-0.5 animate-pulse rounded-xl bg-gradient-to-r from-[#714b67] via-[#8b5cf6] to-[#c084fc] opacity-70 blur-sm transition group-hover:opacity-100" />
            <Link href="/odoo#apps" className="relative flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-900 shadow-lg transition hover:scale-105">
              <Sparkles className="h-4 w-4 text-violet-600" />
              <span className="bg-gradient-to-r from-[#714b67] via-violet-600 to-purple-700 bg-clip-text text-transparent">Odoo AI &amp; Automation</span>
            </Link>
          </div>

          <div className="group relative hidden lg:block">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#714b67] to-violet-600 opacity-50 blur-md transition duration-500 group-hover:opacity-90" />
            <Link href="/odoo#contact" className="relative flex items-center gap-2 whitespace-nowrap rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white xl:px-6">
              Request Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="odoo-mobile-menu"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="odoo-mobile-menu" className="fixed inset-0 top-20 z-40 overflow-y-auto bg-white px-5 pb-10 pt-5 lg:hidden">
          <div className="mx-auto max-w-2xl space-y-3">
            <Link href="/odoo#apps" onClick={() => setMobileOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-100 bg-violet-50 px-5 py-3 text-sm font-extrabold text-[#714b67]">
              <Sparkles className="h-4 w-4" /> Odoo AI &amp; Automation
            </Link>

            {navItemsOdoo.map((item) => {
              const isOpen = mobileSection === item.title;
              return (
                <div key={item.title} className="border-b border-slate-100 pb-3">
                  <button type="button" onClick={() => setMobileSection(isOpen ? null : item.title)} className="flex w-full items-center justify-between py-3 text-left text-lg font-bold text-slate-900" aria-expanded={isOpen}>
                    {item.title}
                    <ChevronDown className={"h-5 w-5 transition-transform " + (isOpen ? "rotate-180 text-[#714b67]" : "")} />
                  </button>

                  {isOpen && (
                    <div className="space-y-3 pb-3">
                      {item.title === "Solutions"
                        ? item.children.map((panel) => (
                            <div key={panel.label} className="rounded-xl bg-slate-50 p-4">
                              <Link href={panel.href} onClick={() => setMobileOpen(false)} className="text-xs font-black uppercase tracking-[0.12em] text-[#714b67]">{panel.label}</Link>
                              <div className="mt-3 space-y-4">
                                {panel.megaMenu?.categories.map((category) => (
                                  <div key={category.title}>
                                    <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{category.title}</p>
                                    <div className="mt-1 grid gap-1 sm:grid-cols-2">
                                      {category.items.map((link) => (
                                        <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-lg py-2 text-sm font-semibold text-slate-700 hover:text-[#714b67]">{link.label}</Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))
                        : item.children.map((link) => {
                            const Icon = link.icon;
                            return (
                              <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-slate-50">
                                {Icon && <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#714b67]" />}
                                <span>
                                  <span className="block text-sm font-bold text-slate-800">{link.label}</span>
                                  {link.description && <span className="mt-0.5 block text-xs leading-5 text-slate-500">{link.description}</span>}
                                </span>
                              </Link>
                            );
                          })}

                      {item.title !== "Solutions" && (
                        <Link href={item.featured.href} onClick={() => setMobileOpen(false)} className="block rounded-xl bg-gradient-to-r from-[#3d2138] to-[#714b67] p-4 text-white">
                          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-violet-200">{item.featured.eyebrow}</span>
                          <span className="mt-1 block text-sm font-bold">{item.featured.title}</span>
                          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold">{item.featured.cta} <ArrowRight className="h-3.5 w-3.5" /></span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/odoo#contact" onClick={() => setMobileOpen(false)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-bold text-white">
              Request an Odoo Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
