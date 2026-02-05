"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navItemsNetSuite as navItems } from '@/app/components/navDataNetSuite';

const SECTION_LABELS = ['ERP', 'CRM', 'Commerce'];

const NavbarNetSuite = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>('NETSUITE');
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [openMobileSolution, setOpenMobileSolution] = useState<string>('NETSUITE');
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/' || pathname === '/netsuite';
  const alwaysScrolled = !isHomePage;

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  const canonicalize = (label: string) => {
    if (label.toLowerCase().includes('erp')) return 'ERP';
    if (label.toLowerCase().includes('crm')) return 'CRM';
    if (label.toLowerCase().includes('commerce')) return 'Commerce';
    return label;
  };

  const handleMegaMenuClick = (label: string) => {
    setOpenMegaMenu(label);
  };

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled || alwaysScrolled
        ? 'bg-white shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="mx-auto max-w-7xl w-full px-5 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src="/images/logos/agsuite-logo.webp"
            alt="AGSuite Logo"
            width={120}
            height={40}
            priority
            className="w-auto h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative dropdown-container"
              onMouseEnter={() => {
                if (closeTimeout.current) clearTimeout(closeTimeout.current);
                setOpenDropdown(item.title);
                if (item.title === 'Solutions') setOpenMegaMenu('NETSUITE');
              }}
              onMouseLeave={() => {
                closeTimeout.current = setTimeout(() => {
                  setOpenDropdown(null);
                  setOpenMegaMenu(null);
                }, 150);
              }}
            >
              <button
                className={`px-4 py-2 transition-colors duration-300 flex items-center gap-1.5 whitespace-nowrap text-base font-medium ${isScrolled || alwaysScrolled ? 'text-gray-900' : 'text-gray-900'
                  } hover:text-blue-600`}
              >
                {item.title}
                {item.children.length > 0 && (
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* Dropdown for non-Solutions */}
              {item.title !== 'Solutions' && item.children.length > 0 && openDropdown === item.title && (
                <div className="fixed left-1/2 -translate-x-1/2 top-20 w-[1100px] bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-200 z-50 overflow-hidden mt-1">
                  <div className="grid grid-cols-[2fr_1fr] divide-x divide-gray-100 min-h-fit">
                    {/* Left Section - Content */}
                    <div className="p-6">
                      <div className="space-y-5">
                        {/* Banner */}
                        <div className={`relative rounded-xl p-5 overflow-hidden bg-gradient-to-r ${item.title === 'Services' ? 'from-blue-600 to-indigo-700' :
                          item.title === 'Industries' ? 'from-indigo-600 to-purple-700' :
                            item.title === 'Insights' ? 'from-purple-600 to-pink-700' :
                              item.title === 'Contact' ? 'from-cyan-600 to-blue-700' :
                                'from-gray-900 to-gray-800'
                          }`}>
                          <div className="absolute inset-0 opacity-10">
                            <Image
                              src={
                                item.title === 'Services' ? "/images/lap/lap4.webp" :
                                  item.title === 'Industries' ? "/images/people/fourteam.webp" :
                                    item.title === 'Insights' ? "/images/lap/lap3.webp" :
                                      item.title === 'Contact' ? "/images/people/laptopmen.webp" :
                                        "/images/lap/lap1.webp"
                              }
                              alt={item.title} fill className="object-cover"
                            />
                          </div>
                          <div className="relative z-10 flex items-center justify-between">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-0.5">
                                {item.title === 'Services' ? 'Our NetSuite Services' :
                                  item.title === 'Industries' ? 'Industries We Serve' :
                                    item.title === 'Insights' ? 'Insights & Resources' :
                                      item.title === 'Contact' ? 'Get In Touch' :
                                        'About AGSuite'}
                              </h3>
                              <p className="text-white/80 text-xs">
                                {item.title === 'Services' ? 'Accelerate your business growth' :
                                  item.title === 'Industries' ? 'Tailored solutions for every vertical' :
                                    item.title === 'Insights' ? 'Expert knowledge and trends' :
                                      item.title === 'Contact' ? "We're here to help you succeed" :
                                        'Your trusted implementation partner'}
                              </p>
                            </div>
                            <Link
                              href={item.title === 'Services' ? '/netsuite/services' : item.title === 'Industries' ? '/netsuite/industries' : item.title === 'Insights' ? '/netsuite/insights' : item.title === 'Contact' ? '/netsuite/contact' : '/netsuite/about'}
                              className="px-4 py-2 bg-white text-gray-900 text-xs font-bold rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              View All
                            </Link>
                          </div>
                        </div>

                        {/* Links Grid */}
                        <div className={`grid gap-3 ${item.title === 'Services' || item.title === 'Industries' ? 'grid-cols-3' : 'grid-cols-2'}`}>
                          {item.children.map((link, i) => {
                            const showDescription = item.title !== 'Services' && item.title !== 'Industries';
                            return (
                              <Link
                                key={i}
                                href={link.href}
                                className={`group flex items-start gap-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all font-outfit ${showDescription ? 'p-4' : 'p-3'}`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                <div className={`p-2 rounded-lg transition-colors flex-shrink-0 ${item.title === 'Services' ? 'bg-blue-50 group-hover:bg-blue-100' :
                                  item.title === 'Industries' ? 'bg-indigo-50 group-hover:bg-indigo-100' :
                                    item.title === 'Insights' ? 'bg-purple-50 group-hover:bg-purple-100' :
                                      item.title === 'Contact' ? 'bg-cyan-50 group-hover:bg-cyan-100' :
                                        'bg-gray-100 group-hover:bg-gray-200'
                                  }`}>
                                  {link.icon && <link.icon className={`w-5 h-5 ${item.title === 'Services' ? 'text-blue-600' :
                                    item.title === 'Industries' ? 'text-indigo-600' :
                                      item.title === 'Insights' ? 'text-purple-600' :
                                        item.title === 'Contact' ? 'text-cyan-600' :
                                          'text-gray-700'
                                    }`} />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className={`${showDescription ? 'text-[16px]' : 'text-[14px]'} font-bold text-gray-900 group-hover:text-blue-600 transition-colors ${showDescription ? 'mb-1' : ''}`}>{link.label}</div>
                                  {showDescription && (
                                    <p className="text-[14px] text-gray-500 leading-relaxed line-clamp-1">{link.description}</p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Featured Card */}
                    <div className="p-6 bg-gray-50/50 flex flex-col items-stretch h-full">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Featured Solution</div>
                      <div className="relative flex-1 w-full rounded-2xl overflow-hidden shadow-lg group/card border border-gray-100 min-h-[180px]">
                        <Image
                          src={
                            item.title === 'Services' ? "/images/lap/lap4.webp" :
                              item.title === 'Industries' ? "/images/people/fourteam.webp" :
                                item.title === 'Insights' ? "/images/lap/lap3.webp" :
                                  item.title === 'Contact' ? "/images/people/laptopmen.webp" :
                                    "/images/lap/lap1.webp"
                          }
                          alt="Featured" fill className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                        <div className="absolute inset-0 p-5 flex flex-col justify-end">
                          <h4 className="text-lg font-bold text-white mb-1 leading-tight">Empower Your Business</h4>
                          <p className="text-[11px] text-white/80 mb-3 leading-relaxed">Leverage cloud ERP to drive growth.</p>
                          <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover/card:gap-3 transition-all" onClick={() => setOpenDropdown(null)}>
                            Get started now <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mega Menu for Solutions */}
              {item.title === 'Solutions' && openDropdown === 'Solutions' && (
                <div className="fixed left-0 right-0 top-20 w-screen bg-gray-50 backdrop-blur-md shadow-2xl border-b border-gray-200 z-50">
                  <div className="max-w-7xl mx-auto px-5 py-6">
                    <div className="flex gap-6">
                      {/* Tabs */}
                      <div className="w-72 flex-shrink-0 space-y-3">
                        {item.children.map((child, idx) => (
                          <div
                            key={idx}
                            className={`group/tab relative h-36 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-500 ${openMegaMenu === child.label ? 'border-blue-500 shadow-lg scale-[1.02]' : 'border-transparent hover:border-blue-200'}`}
                            onMouseEnter={() => setOpenMegaMenu(child.label)}
                          >
                            <Image
                              src={child.label === 'NETSUITE' ? "/images/lap/lap1.webp" : "/images/lap/lap2.webp"}
                              alt={child.label}
                              fill
                              className="object-cover group-hover/tab:scale-110 transition-transform duration-700"
                            />
                            <div className={`absolute inset-0 mix-blend-multiply opacity-80 transition-colors duration-500 ${child.label === 'NETSUITE'
                                ? 'bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900'
                                : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900'
                              }`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-4">
                              <h5 className="text-white font-black text-lg leading-tight uppercase tracking-wider">{child.label}</h5>
                              <p className="text-white/80 text-[10px] mt-0.5 line-clamp-1">{child.megaMenu?.description}</p>
                              <div className="mt-2.5 flex items-center justify-between">
                                <Link
                                  href={child.href}
                                  className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-[9px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  Explore {child.label === 'NETSUITE' ? 'Solution' : 'Add-ons'}
                                </Link>
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${openMegaMenu === child.label ? 'bg-blue-600' : 'bg-white/10 group-hover/tab:bg-blue-600'}`}>
                                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Content Grid */}
                      <div className={`flex-1 grid gap-4 auto-rows-max ${openMegaMenu === 'NETSUITE ADD-ONS' ? 'grid-cols-2' : 'grid-cols-4'}`}>
                        {(openMegaMenu === 'NETSUITE ADD-ONS'
                          ? [...(item.children.find(c => c.label === openMegaMenu)?.megaMenu?.categories || [])].sort((a, b) => a.title === 'Other Add-ons' ? -1 : 1)
                          : item.children.find(c => c.label === openMegaMenu)?.megaMenu?.categories
                        )?.map((cat, ci) => {
                          const isAddons = openMegaMenu === 'NETSUITE ADD-ONS';
                          const isHighlighted = ci === 0;

                          return (
                            <div
                              key={ci}
                              className={`group/cat relative overflow-hidden bg-linear-to-br from-white via-blue-50/40 to-indigo-50/20 rounded-xl border transition-all duration-500 shadow-sm hover:shadow-xl hover:scale-[1.01]
                                ${isHighlighted ? 'border-blue-200 border-2' : 'border-blue-50 border'}
                                ${isAddons ? 'p-6' : 'p-4'}
                              `}
                            >
                              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover/cat:scale-150 duration-700 pointer-events-none" />
                              <h4 className={`relative z-10 font-bold text-blue-950 uppercase mb-4 border-b border-blue-100 pb-2 ${isAddons ? 'text-[18px]' : 'text-[13px]'}`}>{cat.title}</h4>
                              <div className="relative z-10 space-y-4">
                                {cat.items.map((sub: any, si: number) => {
                                  const isMagento = sub.label.includes('Magento');
                                  const isShopify = sub.label.includes('Shopify');
                                  const isAmazon = sub.label.includes('Amazon');
                                  const isIndia = sub.label.includes('India');
                                  const isCommission = sub.label.includes('Commission');

                                  const brandColor = isMagento ? 'text-[#f46f25]' :
                                    isShopify ? 'text-[#96bf48]' :
                                      isAmazon ? 'text-[#232f3e]' :
                                        isIndia ? 'text-[#000080]' :
                                          isCommission ? 'text-emerald-600' : 'text-blue-600';

                                  const hoverBg = isMagento ? 'group-hover/link:bg-[#f46f25]' :
                                    isShopify ? 'group-hover/link:bg-[#96bf48]' :
                                      isAmazon ? 'group-hover/link:bg-[#232f3e]' :
                                        isIndia ? 'group-hover/link:bg-[#000080]' :
                                          isCommission ? 'group-hover/link:bg-emerald-600' : 'group-hover/link:bg-blue-600';

                                  return (
                                    <Link
                                      key={si}
                                      href={sub.href}
                                      className="group/link block"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      <div className="flex items-start gap-5">
                                        {isAddons && (
                                          <div className={`w-12 h-12 rounded-2xl bg-white shadow-md border border-blue-100 flex items-center justify-center shrink-0 transition-all duration-500 group-hover/link:rotate-6 group-hover/link:scale-110 ${hoverBg}`}>
                                            {isMagento || isShopify ? (
                                              <svg className={`w-6 h-6 transition-colors duration-300 ${brandColor} group-hover/link:text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                            ) : isAmazon ? (
                                              <svg className={`w-6 h-6 transition-colors duration-300 ${brandColor} group-hover/link:text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                                            ) : isIndia ? (
                                              <svg className={`w-6 h-6 transition-colors duration-300 ${brandColor} group-hover/link:text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2.5 2.5 0 012.5-2.5h1.065M9 21h6a2 2 0 002-2v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1a2 2 0 002 2z" /></svg>
                                            ) : isCommission ? (
                                              <svg className={`w-6 h-6 transition-colors duration-300 ${brandColor} group-hover/link:text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            ) : (
                                              <svg className={`w-6 h-6 transition-colors duration-300 ${brandColor} group-hover/link:text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                                            )}
                                          </div>
                                        )}
                                        <div className={`flex-1 ${!isAddons ? 'flex items-center gap-2' : ''}`}>
                                          {!isAddons && <div className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover/link:bg-blue-600 transition-all shrink-0" />}
                                          <div className={`font-medium group-hover/link:translate-x-1 transition-all leading-snug ${isAddons ? 'text-[14px] mb-0.5' : 'text-[12px] text-blue-900 group-hover/link:text-blue-600'} ${isAddons ? brandColor : ''}`}>{sub.label}</div>
                                          {isAddons && sub.description && (
                                            <p className="text-[11px] text-blue-900/70 font-medium line-clamp-1 leading-relaxed group-hover/link:text-gray-900 transition-colors">{sub.description}</p>
                                          )}
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleNavbar}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'bg-gray-100' : 'bg-gray-100/10'} text-gray-900`}
            aria-label="Toggle mobile menu"
          >
            {openNavbar ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>

          <div className="hidden lg:block relative group">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 blur-md opacity-50 group-hover:opacity-100 transition duration-500" />
            <Link href="/netsuite/contact" className="relative px-6 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-sm flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {openNavbar && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto p-5">
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-4">
                <button
                  className="w-full flex items-center justify-between text-lg font-bold text-gray-900 py-2"
                  onClick={() => setOpenMobileSection(openMobileSection === item.title ? null : item.title)}
                >
                  {item.title}
                  <svg className={`w-5 h-5 transition-transform ${openMobileSection === item.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>

                {openMobileSection === item.title && (
                  <div className="mt-2 space-y-1 pl-4">
                    {item.children.map((child: any, i: number) => (
                      <Link key={i} href={child.href} className="block py-2 text-sm text-gray-600 font-medium" onClick={() => setOpenNavbar(false)}>{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/netsuite/contact" className="block w-full py-3 bg-blue-600 text-white text-center font-bold rounded-xl" onClick={() => setOpenNavbar(false)}>Request a Demo</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarNetSuite;
