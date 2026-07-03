"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navItemsZoho as navItems } from '../../components/navDataZoho';

import dynamic from 'next/dynamic';

const DesktopDropdown = dynamic(() => import('./NavbarDropdownsZoho').then(mod => mod.DesktopDropdown));
const DesktopMegaMenu = dynamic(() => import('./NavbarDropdownsZoho').then(mod => mod.DesktopMegaMenu));

const SECTION_LABELS = ['ZOHO'];

const ZohoNavbar = () => {
  const pathname = usePathname();
  const isStudio = pathname.includes('/studio');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>('ZOHO');
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [openMobileSolution, setOpenMobileSolution] = useState<string>('ZOHO');
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    setMounted(true);
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(media.matches);
    const handleResize = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };
    window.addEventListener('scroll', handleScroll);
    media.addEventListener('change', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      media.removeEventListener('change', handleResize);
    };
  }, []);

  const isHomePage = pathname === '/' || pathname === '/zoho';
  const alwaysScrolled = !isHomePage;

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  const handleMegaMenuClick = (label: string) => {
    setOpenMegaMenu(label);
  };

  if (isStudio) return null;
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-[100] h-20 bg-white shadow-sm flex items-center">
        <div className="max-w-[1450px] mx-auto px-6 w-full flex items-center justify-between">
          <div className="w-32 h-10 bg-gray-100 animate-pulse rounded" />
          <div className="hidden lg:flex gap-4">
             {[1,2,3,4,5].map(i => <div key={i} className="w-20 h-4 bg-gray-100 animate-pulse rounded" />)}
          </div>
          <div className="w-24 h-10 bg-gray-100 animate-pulse rounded" />
        </div>
      </header>
    );
  }


  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] h-20 transition-all duration-300 ${isScrolled || alwaysScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="max-w-[1450px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/zoho" aria-label="Home">
          <Image
            src="/images/logos/agsuite-logo.webp"
            alt="AGSuite Logo"
            width={240}
            height={80}
            priority
            fetchPriority="high"
            className="w-[240px] h-[80px] object-contain"
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
                if (item.title === 'Solutions') setOpenMegaMenu('ZOHO');
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
                  } hover:text-red-600`}
              >
                {item.title}
                {item.children.length > 0 && (
                  <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* Dropdown for non-Solutions */}
              {isDesktop && item.title !== 'Solutions' && item.children.length > 0 && openDropdown === item.title && (
                <DesktopDropdown item={item} setOpenDropdown={setOpenDropdown} />
              )}

              {/* Mega Menu for Solutions */}
              {isDesktop && item.title === 'Solutions' && openDropdown === 'Solutions' && (
                <DesktopMegaMenu
                  item={item}
                  openMegaMenu={openMegaMenu}
                  setOpenMegaMenu={setOpenMegaMenu}
                  setOpenDropdown={setOpenDropdown}
                />
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
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-400 to-rose-500 blur-md opacity-50 group-hover:opacity-100 transition duration-500" />
            <Link href="/zoho/contact" className="relative px-6 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-sm flex items-center gap-2">
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
                  className="w-full flex items-center justify-between text-lg font-bold text-gray-900 py-2 hover:text-red-600 transition-colors"
                  onClick={() => setOpenMobileSection(openMobileSection === item.title ? null : item.title)}
                >
                  {item.title}
                  <svg className={`w-5 h-5 transition-transform ${openMobileSection === item.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>

                {openMobileSection === item.title && (
                  <div className="mt-2 space-y-1 pl-4">
                    {item.title === 'Solutions' ? (
                      item.children.find((c: any) => c.label === openMobileSolution)?.megaMenu?.categories?.map((cat: any, ci: number) => (
                        <div key={ci} className="mb-4">
                          <h4 className="font-bold text-gray-900 text-sm mb-2 uppercase border-b border-gray-100 pb-1">{cat.title}</h4>
                          <div className="space-y-1">
                            {cat.items.map((sub: any, si: number) => (
                              <Link key={si} href={sub.href} className="block py-1.5 text-[13px] text-gray-600 font-medium hover:text-red-500 transition-colors" onClick={() => setOpenNavbar(false)}>{sub.label}</Link>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      item.children.map((child: any, i: number) => (
                        <Link key={i} href={child.href} className="block py-2 text-sm text-gray-600 font-medium hover:text-red-500 transition-colors" onClick={() => setOpenNavbar(false)}>{child.label}</Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-12">
              <Link href="/zoho/contact" className="block w-full py-3 bg-red-600 text-white text-center font-bold rounded-xl" onClick={() => setOpenNavbar(false)}>Request a Demo</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default ZohoNavbar;




