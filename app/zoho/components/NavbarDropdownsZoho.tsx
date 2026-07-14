"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface DesktopDropdownProps {
    item: any;
    setOpenDropdown: (val: string | null) => void;
}

export const DesktopDropdown: React.FC<DesktopDropdownProps> = ({ item, setOpenDropdown }) => {
    return (
        <div className="fixed left-0 right-0 top-20 w-screen bg-white shadow-2xl border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-5 py-6">
                <div className="grid grid-cols-[2fr_1fr] divide-x divide-gray-100 min-h-fit">
                    {/* Left Section - Content */}
                    <div className="p-6">
                        <div className="space-y-5">
                            {/* Banner */}
                            <div className={`relative rounded-xl p-5 overflow-hidden bg-gradient-to-r ${item.title === 'Services' ? 'from-red-600 to-rose-700' :
                                item.title === 'Industries' ? 'from-rose-600 to-pink-700' :
                                    item.title === 'Insights' ? 'from-pink-600 to-red-600' :
                                        item.title === 'Contact' ? 'from-red-700 to-rose-800' :
                                            'from-gray-900 to-gray-800'
                                }`}>
                                <div className="absolute inset-0 opacity-10">
                                    <Image
                                        src={
                                            item.title === 'Services' ? "/images/navbar/services.png" :
                                                item.title === 'Industries' ? "/images/navbar/industries.png" :
                                                    item.title === 'Insights' ? "/images/navbar/insights.png" :
                                                        item.title === 'Contact' ? "/images/navbar/contact.png" :
                                                            "/images/navbar/about.png"
                                        }
                                        alt={item.title} fill className="object-cover"
                                        sizes="400px"
                                    />
                                </div>
                                <div className="relative z-10 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-0.5">
                                            {item.title === 'Services' ? 'Our Zoho Services' :
                                                item.title === 'Industries' ? 'Industries We Serve' :
                                                    item.title === 'Insights' ? 'Insights & Resources' :
                                                        item.title === 'Contact' ? 'Get In Touch' :
                                                            item.title}
                                        </h3>
                                        <p className="text-white/80 text-xs">
                                            {item.title === 'Services' ? 'Accelerate your business growth' :
                                                item.title === 'Industries' ? 'Tailored solutions for every vertical' :
                                                    item.title === 'Insights' ? 'Expert knowledge and trends' :
                                                        item.title === 'Contact' ? "We're here to help you succeed" :
                                                            'Your trusted implementation partner'}
                                        </p>
                                    </div>
                                    {item.title !== 'About Us' && (
                                        <Link
                                            href={item.title === 'Services' ? '/zoho/services' : item.title === 'Industries' ? '/zoho/industries' : item.title === 'Insights' ? '/zoho/insights' : item.title === 'Contact' ? '/zoho/contact' : '/zoho/about-us'}
                                            className="px-4 py-2 bg-white text-gray-900 text-xs font-bold rounded-lg hover:bg-gray-100 transition-colors"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            View All
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Links Grid */}
                            <div className="grid gap-3 grid-cols-3">
                                {item.children.map((link: any, i: number) => {
                                    return (
                                        <Link
                                            key={i}
                                            href={link.href}
                                            className="group flex items-start gap-2.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all font-outfit p-3"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            <div className={`p-1.5 rounded-lg transition-colors flex-shrink-0 ${item.title === 'Services' ? 'bg-red-50 group-hover:bg-red-100' :
                                                item.title === 'Industries' ? 'bg-rose-50 group-hover:bg-rose-100' :
                                                    item.title === 'Insights' ? 'bg-pink-50 group-hover:bg-pink-100' :
                                                        item.title === 'Contact' ? 'bg-red-50 group-hover:bg-red-100' :
                                                            'bg-gray-100 group-hover:bg-gray-200'
                                                }`}>
                                                {link.icon && <link.icon className={`w-4 h-4 ${item.title === 'Services' ? 'text-red-600' :
                                                    item.title === 'Industries' ? 'text-rose-600' :
                                                        item.title === 'Insights' ? 'text-pink-600' :
                                                            item.title === 'Contact' ? 'text-red-600' :
                                                                'text-gray-700'
                                                    }`} />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[14px] font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-0.5">{link.label}</div>
                                                {link.description && (
                                                    <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-1">{link.description}</p>
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
                                    item.title === 'Services' ? "/images/navbar/services.png" :
                                        item.title === 'Industries' ? "/images/navbar/industries.png" :
                                            item.title === 'Insights' ? "/images/navbar/insights.png" :
                                                item.title === 'Contact' ? "/images/navbar/contact.png" :
                                                    "/images/navbar/about.png"
                                }
                                alt="Featured" fill className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                                sizes="400px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                            <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                <h4 className="text-lg font-bold text-white mb-1 leading-tight">Empower Your Business</h4>
                                <p className="text-[11px] text-white/80 mb-3 leading-relaxed">Leverage Zoho to drive growth.</p>
                                <Link href="/zoho/contact" className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover/card:gap-3 transition-all" onClick={() => setOpenDropdown(null)}>
                                    Get started now <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const COLOR_MAP: Record<string, { bg: string, border: string, text: string, hover: string, iconBg: string, iconText: string }> = {
    'Sales': { bg: 'from-blue-50/50 to-indigo-50/20', border: 'border-blue-100', text: 'text-blue-950', hover: 'group-hover/link:bg-blue-600', iconBg: 'bg-blue-50', iconText: 'text-blue-600' },
    'HR': { bg: 'from-purple-50/50 to-violet-50/20', border: 'border-purple-100', text: 'text-purple-950', hover: 'group-hover/link:bg-purple-600', iconBg: 'bg-purple-50', iconText: 'text-purple-600' },
    'Finance': { bg: 'from-emerald-50/50 to-green-50/20', border: 'border-emerald-100', text: 'text-emerald-950', hover: 'group-hover/link:bg-emerald-600', iconBg: 'bg-emerald-50', iconText: 'text-emerald-600' },
    'Projects': { bg: 'from-amber-50/50 to-orange-50/20', border: 'border-amber-100', text: 'text-amber-950', hover: 'group-hover/link:bg-amber-600', iconBg: 'bg-amber-50', iconText: 'text-amber-600' },
    'Service': { bg: 'from-cyan-50/50 to-teal-50/20', border: 'border-cyan-100', text: 'text-cyan-950', hover: 'group-hover/link:bg-cyan-600', iconBg: 'bg-cyan-50', iconText: 'text-cyan-600' },
    'Collaboration': { bg: 'from-sky-50/50 to-blue-50/20', border: 'border-sky-100', text: 'text-sky-950', hover: 'group-hover/link:bg-sky-600', iconBg: 'bg-sky-50', iconText: 'text-sky-600' },
    'Marketing': { bg: 'from-rose-50/50 to-pink-50/20', border: 'border-rose-100', text: 'text-rose-950', hover: 'group-hover/link:bg-rose-600', iconBg: 'bg-rose-50', iconText: 'text-rose-600' },
    'Analytics': { bg: 'from-violet-50/50 to-fuchsia-50/20', border: 'border-violet-100', text: 'text-violet-950', hover: 'group-hover/link:bg-violet-600', iconBg: 'bg-violet-50', iconText: 'text-violet-600' },
    'Developer & IT': { bg: 'from-slate-50/50 to-gray-50/20', border: 'border-slate-200', text: 'text-slate-950', hover: 'group-hover/link:bg-slate-600', iconBg: 'bg-slate-50', iconText: 'text-slate-600' },
    'Suites': { bg: 'from-orange-50/50 to-red-50/20', border: 'border-orange-100', text: 'text-orange-950', hover: 'group-hover/link:bg-orange-600', iconBg: 'bg-orange-50', iconText: 'text-orange-600' },
};

export const DesktopMegaMenu: React.FC<any> = ({ item, openMegaMenu, setOpenMegaMenu, setOpenDropdown }) => {
    return (
        <div className="fixed left-0 right-0 top-20 w-screen bg-gray-50 backdrop-blur-md shadow-2xl border-b border-gray-200 z-50">
            <div className="max-w-[1600px] mx-auto px-5 py-6">
                <div className="flex gap-6">
                    {/* Tabs */}
                    <div className="w-72 flex-shrink-0 space-y-3">
                        {item.children.map((child: any, idx: number) => (
                            <div
                                key={idx}
                                className={`group/tab relative h-36 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-500 ${openMegaMenu === child.label ? 'border-red-500 shadow-lg scale-[1.02]' : 'border-transparent hover:border-red-200'}`}
                                onMouseEnter={() => setOpenMegaMenu(child.label)}
                            >
                                <Image
                                    src={"/images/lap/lap1.webp"}
                                    alt={child.label}
                                    fill
                                    className="object-cover group-hover/tab:scale-110 transition-transform duration-700"
                                    sizes="300px"
                                />
                                <div className={`absolute inset-0 mix-blend-multiply opacity-80 transition-colors duration-500 ${child.label === 'ZOHO'
                                    ? 'bg-gradient-to-br from-red-900 via-rose-900 to-pink-900'
                                    : 'bg-gradient-to-br from-rose-900 via-pink-900 to-red-900'
                                    }`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-4">
                                    <h5 className="text-white font-black text-lg leading-tight uppercase tracking-wider">{child.label}</h5>
                                    <p className="text-white/80 text-[10px] mt-0.5 line-clamp-1">{child.megaMenu?.description}</p>
                                    <div className="mt-2.5 flex items-center justify-between">
                                        <Link
                                            href={child.href}
                                            className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-[9px] font-bold uppercase tracking-widest hover:bg-red-600 transition-colors"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            Explore Zoho
                                        </Link>
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${openMegaMenu === child.label ? 'bg-red-600' : 'bg-white/10 group-hover/tab:bg-red-600'}`}>
                                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Grid */}
                    <div className={`flex-1 grid gap-4 auto-rows-max grid-cols-4 lg:grid-cols-5`}>
                        {item.children.find((c: any) => c.label === openMegaMenu)?.megaMenu?.categories?.map((cat: any, ci: number) => {
                            const colors = COLOR_MAP[cat.title] || COLOR_MAP['Sales'];
                            const isHighlighted = ci === 0;

                            return (
                                <div
                                    key={ci}
                                    className={`group/cat relative overflow-hidden bg-linear-to-br ${colors.bg} rounded-xl border transition-all duration-500 shadow-sm hover:shadow-xl hover:scale-[1.01]
                    ${isHighlighted ? `${colors.border} border-2` : `${colors.border} border`}
                    p-2.5
                  `}
                                >
                                    <div className={`absolute top-0 right-0 w-24 h-24 ${colors.iconBg}/10 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover/cat:scale-150 duration-700 pointer-events-none`} />
                                    <h4 className={`relative z-10 font-bold ${colors.text} uppercase mb-3.5 border-b ${colors.border} pb-1.5 text-[12px] whitespace-nowrap overflow-hidden text-ellipsis tracking-wider`}>{cat.title}</h4>
                                    <div className="relative z-10 space-y-2.5">
                                        {cat.items.map((sub: any, si: number) => {
                                            return (
                                                <Link
                                                    key={si}
                                                    href={sub.href}
                                                    className="group/link block"
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <div className={`p-1.5 rounded-lg ${colors.iconBg} ${colors.hover} transition-all shrink-0 shadow-sm`}>
                                                            {sub.icon && <sub.icon className={`w-4 h-4 ${colors.iconText} group-hover/link:text-white transition-colors`} />}
                                                        </div>
                                                        <div className={`font-bold group-hover/link:translate-x-1 transition-all leading-tight text-[14px] text-gray-900 group-hover/link:${colors.iconText}`}>
                                                            {sub.label}
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
    );
};




