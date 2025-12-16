"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navItemsNetSuite as navItems } from '../../components/navDataNetSuite';

const NavbarNetSuite = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const isHomePage = pathname === '/';
  const isSolutionSubpage = pathname.startsWith('/solutions/zoho/') || pathname.startsWith('/solutions/netsuite/');
  const alwaysScrolled = !isHomePage;

  const toggleNavbar = () => setOpenNavbar((prev) => !prev);

  const CANON = {
    NETSUITE: 'NETSUITE',
    ADDONS: 'NETSUITE ADD-ONS',
  } as const;

  const canonicalize = (s?: string) => {
    const v = (s || '').toUpperCase().replace(/\s+/g, ' ').trim();
    if (
      v === 'NETSUITE ADD ONS' ||
      v === 'NETSUITE ADDONS' ||
      v === 'NETSUITE ADD-ONS' ||
      v === 'NETSUITE ADD ON' ||
      v === 'NETSUITE ADD-ON'
    ) return CANON.ADDONS;
    if (v === 'NETSUITE') return CANON.NETSUITE;
    return v;
  };

  const SECTION_LABELS: string[] = [CANON.NETSUITE, CANON.ADDONS];
  const [openMobileSolution, setOpenMobileSolution] = useState<string>(CANON.NETSUITE);

  const toggleDropdown = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
      setOpenMegaMenu(null);
    } else {
      setOpenDropdown(title);
      if (title === 'Solutions') {
        setOpenMegaMenu('NETSUITE');
      }
    }
  };

  const handleMegaMenuClick = (label: string) => {
    setOpenMegaMenu(label);
  };

  useEffect(() => {
    if (alwaysScrolled || isSolutionSubpage) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysScrolled, isSolutionSubpage]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (!e.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
        setOpenMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`fixed top-0 shadow-md left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled || alwaysScrolled
          ? 'bg-white backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src={
              !mounted
                ? "/images/logos/agsuite-logo.webp"
                : isHomePage
                ? scrolled
                  ? "/images/logos/agsuite-logo.webp"
                  : "/images/logos/agsuite-logo.webp"
                : "/images/logos/agsuite-logo.webp"
            }
            alt="AGSuite Logo"
            width={120}
            height={40}
            priority
            className="transition-all duration-300"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative dropdown-container"
              onMouseEnter={() => {
                if (closeTimeout.current) {
                  clearTimeout(closeTimeout.current);
                  closeTimeout.current = null;
                }
                setOpenDropdown(item.title);
                if (item.title === 'Solutions') {
                  setOpenMegaMenu('NETSUITE');
                }
              }}
              onMouseLeave={() => {
                closeTimeout.current = setTimeout(() => {
                  setOpenDropdown(null);
                  setOpenMegaMenu(null);
                }, 150);
              }}
              style={{ display: 'inline-block', width: '100%' }}
            >
              <button
                className={`px-5 py-3 hover:text-blue-900 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap ${
                  isScrolled || alwaysScrolled ? 'text-black' : 'text-gray-900'
                }`}
                tabIndex={0}
                onClick={() => toggleDropdown(item.title)}
                onFocus={() => {
                  setOpenDropdown(item.title);
                  if (item.title === 'Solutions') {
                    setOpenMegaMenu('NETSUITE');
                  }
                }}
                onBlur={() => {
                  setTimeout(() => {
                    if (!document.querySelector('.dropdown-container:hover')) {
                      setOpenDropdown(null);
                      setOpenMegaMenu(null);
                    }
                  }, 100);
                }}
              >
                {item.title}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === item.title ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown for non-Solutions */}
              {item.title !== 'Solutions' && item.children.length > 0 && openDropdown === item.title && (
                <div className="fixed left-0 right-0 top-20 w-screen bg-gradient-to-br from-white via-white to-white backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-200 z-50">
                  <div className="mx-auto max-w-[1600px] px-5 sm:px-10 md:px-12 lg:px-5 py-8">
                    {item.title === 'Services' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 flex flex-col items-start">
                          <h3 className="text-5xl font-medium text-blue-600 mb-5">Our Services</h3>
                          <p className="text-lg text-gray-900">
                            Explore our comprehensive range of services to accelerate your business growth.
                          </p>
                        </div>
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {item.children.map((link, i) => (
                            <div
                              key={i}
                              className="bg-white p-4 rounded-lg shadow flex flex-col items-start"
                            >
                              <Link
                                href={link.href}
                                className="text-base text-black mb-1 hover:underline flex items-center gap-2"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.icon && <link.icon />}
                                {link.label}
                              </Link>
                              <p className="text-xs text-gray-900 mb-2">{link.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.title === 'Industries' && (
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="p-6 flex flex-col items-start">
                          <h3 className="text-5xl font-medium text-blue-600 mb-5">Industries We Serve</h3>
                          <p className="text-lg text-gray-900">
                            We provide tailored solutions for a wide range of industries.
                          </p>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                          {item.children.map((link, i) => (
                            <div
                              key={i}
                              className="bg-white p-4 rounded-lg shadow flex flex-col items-start"
                            >
                              <Link
                                href={link.href}
                                className="text-base text-black mb-1 hover:underline flex items-center gap-2"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.icon && <link.icon />}
                                {link.label}
                              </Link>
                              <p className="text-xs text-gray-600 mb-2">{link.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.title === 'Insights' && (
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="p-6 flex flex-col items-start">
                          <h3 className="text-5xl font-medium text-blue-600 mb-5">Insights & Resources</h3>
                          <p className="text-lg text-gray-900">Stay updated with our latest resources.</p>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                          {item.children.map((link, i) => (
                            <div
                              key={i}
                              className="bg-white p-4 rounded-lg shadow flex flex-col items-start"
                            >
                              <Link
                                href={link.href}
                                className="text-base text-black mb-1 hover:underline flex items-center gap-2"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.icon && <link.icon />}
                                {link.label}
                              </Link>
                              <p className="text-xs text-gray-600 mb-2">{link.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.title === 'Contact' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 flex flex-col items-start">
                          <h3 className="text-5xl font-medium text-blue-600 mb-5">Contact Us</h3>
                          <p className="text-lg text-gray-900">Reach out for support or opportunities.</p>
                          <Link
                            href="/contact-us"
                            className="inline-block bg-blue-600 text-white font-medium px-8 py-3 mt-5 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                          >
                            Contact Us
                          </Link>
                        </div>
                        <div className="md:col-span-2 grid grid-cols-2 gap-4">
                          {item.children.map((link, i) => (
                            <div
                              key={i}
                              className="bg-white p-4 rounded-lg shadow flex flex-col items-start"
                            >
                              <Link
                                href={link.href}
                                className="text-base text-black mb-1 hover:underline flex items-center gap-2"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.icon && <link.icon />}
                                {link.label}
                              </Link>
                              <p className="text-xs text-gray-600 mb-2">{link.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {!['Services', 'Industries', 'Insights', 'Contact'].includes(item.title) && (
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="p-6 flex flex-col items-start text-left">
                          <h3 className="text-5xl font-medium text-blue-600 mb-5">
                            {item.title}
                          </h3>
                          <p className="text-lg text-gray-900">
                            Empowering businesses through innovation.
                          </p>
                        </div>
                        <div className=" gap-4">
                          {item.children.map((link, i) => (
                            <div
                              key={i}
                              className="bg-white p-4 rounded-lg shadow flex flex-col items-start"
                            >
                              <Link
                                href={link.href}
                                className="text-base text-black mb-1 hover:underline flex items-center gap-2"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {link.icon && <link.icon />}
                                {link.label}
                              </Link>
                              {link.description && (
                                <p className="text-xs text-gray-600 mb-2">{link.description}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Mega Menu for Solutions (NETSUITE) */}
              {item.title === 'Solutions' &&
                item.children.some((child) => child.megaMenu) &&
                openDropdown === 'Solutions' && (
                  <div
                    className="hidden lg:block fixed left-0 right-0 top-20 w-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-50 backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-300 z-50"
                    style={{ maxHeight: '80vh', overflowY: 'auto', borderRadius: '0 0 2rem 2rem' }}
                  >
                    <div className="max-w-[1600px] mx-auto px-5 sm:px-10 md:px-12 lg:px-5 py-8 relative">
                      <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-500 text-xl font-bold focus:outline-none"
                        onClick={() => {
                          setOpenDropdown(null);
                          setOpenMegaMenu(null);
                        }}
                        aria-label="Close megamenu"
                      >
                        &times;
                      </button>

                      <div className="flex gap-8">
                        {/* Tabs */}
                        <div className="w-48 flex-shrink-0">
                          <div className="space-y-2">
                            {item.children.map((child, idx) => {
                              const isMega = !!child.megaMenu;
                              const tabContent = (
                                <div
                                  className={`group cursor-pointer p-4 rounded-l-lg border transition-all duration-200 ${
                                    openMegaMenu === child.label
                                      ? 'border-gray-100 bg-gray-100'
                                      : 'border-transparent hover:border-blue-100 hover:bg-blue-50'
                                  }`}
                                  onMouseEnter={() => handleMegaMenuClick(child.label)}
                                >
                                  <div className="flex items-center justify-between">
                                    <h3
                                      className={`text-base font-bold transition-colors duration-200 ${
                                        openMegaMenu === child.label
                                          ? 'text-blue-600'
                                          : 'text-gray-900 group-hover:text-blue-600'
                                      }`}
                                    >
                                      {child.label}
                                    </h3>
                                    {isMega && <span className="text-xs text-gray-500">Click</span>}
                                  </div>
                                  {child.megaMenu?.description && (
                                    <p className="text-xs text-gray-600 mt-1">
                                      {child.megaMenu.description.substring(0, 60)}...
                                    </p>
                                  )}
                                </div>
                              );
                              return isMega ? (
                                <Link
                                  key={idx}
                                  href={child.href}
                                  passHref
                                  onClick={() => {
                                    setOpenNavbar(false);
                                    setOpenDropdown(null);
                                    setOpenMegaMenu(null);
                                  }}
                                >
                                  {tabContent}
                                </Link>
                              ) : (
                                <div key={idx}>{tabContent}</div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Mega menu content */}
                        <div className="flex-1 min-h-[400px] pb-4 relative">
                          {item.children.map((child, idx) => (
                            <div
                              key={idx}
                              className={`transition-all duration-300 ${
                                openMegaMenu === child.label
                                  ? 'opacity-100 visible relative'
                                  : 'opacity-0 invisible absolute top-0 left-0 right-0'
                              }`}
                            >
                              <div className="space-y-4">
                                <div
                                  className={`grid gap-6 ${
                                    child.label === 'NETSUITE' // Adjust grid based on content if needed
                                      ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4'
                                      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                                  }`}
                                >
                                  {child.megaMenu?.categories.map((category, catIndex) => (
                                    <div
                                      key={catIndex}
                                      className="space-y-2 bg-white rounded-lg shadow-md p-2 border border-gray-100 hover:shadow-lg transition-shadow duration-200"
                                    >
                                      <h4 className="text-sm font-normal text-blue-600 uppercase tracking-wide border-b border-blue-200 pb-1">
                                        {category.title}
                                      </h4>
                                      <ul className="space-y-0">
                                        {category.items.map((subItem, subIndex) => (
                                          <li key={subIndex}>
                                            <Link
                                              href={subItem.href}
                                              className="block text-xs font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 py-1"
                                              onClick={() => {
                                                setOpenDropdown(null);
                                                setOpenMegaMenu(null);
                                              }}
                                            >
                                              {subItem.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleNavbar}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'bg-gray-100/80 hover:bg-gray-200/80' : 'bg-white/20 hover:bg-white/30'
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-500' : 'text-gray-900'
              }`}
            >
              {openNavbar ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex relative inline-flex group">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg group-hover:opacity-100 transition duration-700" />
            <Link
              href="/netsuite/contact"
              className="relative px-6 py-2.5 rounded-xl bg-gray-900 text-white font-semibold shadow-xl flex items-center gap-2"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.237 6.29a.75.75 0 111.04-1.08l3.53 3.25a.75.75 0 010 1.08l-3.53 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {openNavbar && (
        <div
          className={`lg:hidden border-t transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md border-gray-200'
              : 'bg-white/95 backdrop-blur-md border-gray-200'
          }`}
        >
          <div className="px-5 py-4 space-y-4 h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  className="w-full flex items-center justify-between text-lg mb-2 transition-colors duration-300 text-gray-900"
                  onClick={() =>
                    setOpenMobileSection(openMobileSection === item.title ? null : item.title)
                  }
                  aria-expanded={openMobileSection === item.title}
                  aria-controls={`mobile-section-${index}`}
                >
                  {item.title}
                  <span
                    className={`ml-2 transition-transform duration-200 ${
                      openMobileSection === item.title ? 'rotate-90' : ''
                    }`}
                  >
                    &gt;
                  </span>
                </button>

                {openMobileSection === item.title && (
                  item.title === 'Solutions' ? (
                    <div
                      id={`mobile-section-${index}`}
                      role="region"
                      aria-labelledby={`mobile-section-${index}`}
                      className="
                        -mx-2 max-h-[70vh] overflow-y-auto no-scrollbar
                        bg-white
                        rounded-md px-2 pb-3
                      "
                    >
                      <div className="pt-2 flex items-center gap-2 sticky top-0 z-10 bg-inherit backdrop-blur-sm">
                        {SECTION_LABELS.map((sec) => (
                          <button
                            key={sec}
                            type="button"
                            onClick={() => setOpenMobileSolution(sec)}
                            className={`
                              text-[11px] tracking-wide uppercase font-semibold px-3 py-1.5 rounded-full border transition-colors
                              ${openMobileSolution === sec
                                ? 'text-blue-700 bg-blue-50 border-blue-200'
                                : 'text-gray-700 bg-gray-100 border-gray-200'}
                            `}
                            aria-pressed={openMobileSolution === sec}
                          >
                            {sec}
                          </button>
                        ))}
                      </div>

                      <div className="mt-3 space-y-3">
                        {SECTION_LABELS.map((label) => {
                          const sectionNode = item.children.find(
                            (c: any) => canonicalize(c.label) === label
                          );
                          if (!sectionNode?.megaMenu?.categories) return null;

                          type SubItem = { href: string; label: string };
                          type Category = { items?: SubItem[] };

                          const links = (sectionNode.megaMenu.categories as Category[]).flatMap((cat) =>
                            (cat.items || []).map((sub) => ({ href: sub.href, label: sub.label }))
                          );
                          if (!links.length) return null;

                          const active = openMobileSolution === label;

                          return (
                            <div key={label} className={`${active ? 'block' : 'hidden'} transition-all duration-200`}>
                              <div
                                className="
                                  grid gap-2
                                  grid-cols-1
                                  [@media(min-width:380px)]:grid-cols-2
                                  sm:grid-cols-2
                                "
                              >
                                {links.map((sub: { href: string; label: string }) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={() => setOpenNavbar(false)}
                                    className="
                                      block text-xs font-medium rounded px-3 py-2 border
                                      transition-colors duration-200
                                      text-gray-900 border-gray-200 hover:bg-blue-50 hover:text-blue-600
                                    "
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <ul
                      id={`mobile-section-${index}`}
                      className="pl-4 space-y-2"
                      role="region"
                      aria-labelledby={`mobile-section-${index}`}
                    >
                      {item.children.map((link: any, i: number) => (
                        <li key={i}>
                          <Link
                            href={link.href}
                            className="block px-4 py-2 text-sm rounded-md transition-colors duration-300 text-gray-500 hover:bg-gray-100"
                            onClick={() => setOpenNavbar(false)}
                          >
                            <div className="flex items-center gap-2">
                              {link.icon && <link.icon />}
                              {link.label}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-gray-200">
              <div className="relative inline-flex group w-full">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg group-hover:opacity-100 transition duration-700" />
                <Link
                  href="/netsuite/contact"
                  className="relative block w-full text-center px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-xl"
                  onClick={() => setOpenNavbar(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarNetSuite;
