"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navItemsNetSuite as navItems } from '@/app/components/navDataNetSuite';

import dynamic from 'next/dynamic';

const DesktopDropdown = dynamic(() => import('./NavbarDropdowns').then(mod => mod.DesktopDropdown));
const DesktopMegaMenu = dynamic(() => import('./NavbarDropdowns').then(mod => mod.DesktopMegaMenu));

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
  const [isDesktop, setIsDesktop] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setScrolled(window.scrollY > 10);
    };
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
    <header className={`fixed top-0 left-0 right-0 z-[100] h-20 transition-all duration-300 ${isScrolled || alwaysScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="max-w-[1450px] mx-auto px-6 h-full flex items-center justify-between">
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
