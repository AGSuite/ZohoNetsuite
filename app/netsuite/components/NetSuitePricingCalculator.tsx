'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import {
    ChevronLeft,
    ChevronRight,
    Building2,
    Settings,
    Check,
    Sparkles,
    Plus,
    Minus
} from 'lucide-react';
import { submitPricingQuote } from '@/app/api/actions/submitPricingQuote';

// --- INTERFACES ---
interface CalculatorFormData {
    industries: string[];
    customIndustry: string;
    countryEntities: Record<string, number>;
    modules: string[];
    otherModule: string;
    name: string;
    companyname: string;
    email: string;
    phone: string;
    countryCode: string;
    role: string;
    revenue: string;
    aboutus: string;
    message: string;
}

type FormErrors = Partial<Record<keyof CalculatorFormData, string>>;

const NetSuitePricingCalculator = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState<CalculatorFormData>({
        industries: [],
        customIndustry: '',
        countryEntities: {},
        modules: [],
        otherModule: '',
        name: '',
        companyname: '',
        email: '',
        phone: '',
        countryCode: '+1',
        role: '',
        revenue: '',
        aboutus: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const totalSteps = 4;

    const industries = ['Software and Technology', 'Manufacturing', 'Retail & E-Commerce', 'Wholesale Distribution', 'Professional Services', 'Media and Publishing', 'Transport & Logistics', 'Ads & Marketing', 'Other'];
    const countries = ['India', 'USA', 'UK', 'Canada', 'Australia', 'UAE', 'Singapore', 'Japan', 'France', 'Germany', 'Dubai', 'Malaysia'];
    const commonModules = ['Accounting / Financials', 'CRM', 'Fixed Asset Management', 'Inventory Management', 'Project Management'];

    const industryModules: Record<string, string[]> = {
        'Software and Technology': ['Subscription Billing', 'Revenue Recognition', 'Planning & Budgeting'],
        'Manufacturing': ['Work Orders', 'Assembly Management', 'Advanced Manufacturing'],
        'Retail & E-Commerce': ['Point of Sale (POS)', 'Order Management', 'SCIS'],
        'Wholesale Distribution': ['Warehouse (WMS)', 'Demand Planning', 'Shipping Integration'],
        'Professional Services': ['Project Management', 'Resource Planning', 'Time & Expense'],
        'Media and Publishing': ['Advanced Financials', 'Revenue Recognition'],
        'Transport & Logistics': ['Inventory Visibility', 'Inbound Logistics'],
        'Ads & Marketing': ['Job Costing', 'Resource Planning'],
        'Other': ['Advanced Financials', 'Procurement']
    };

    const revenueRanges = ['Under $1M', '$1M to $10M', '$10M to $50M', '$50M to $100M', '$100M to $500M', '$500M+'];
    const stepTitles = ['Industry', 'Geo', 'Solutions', 'Finish'];

    const COUNTRY_CODES = [
        { code: '+91', label: 'IN (+91)' },
        { code: '+1', label: 'US (+1)' },
        { code: '+44', label: 'UK (+44)' },
        { code: '+971', label: 'UAE (+971)' },
        { code: '+966', label: 'KSA (+966)' },
        { code: '+974', label: 'QA (+974)' },
        { code: '+965', label: 'KW (+965)' },
        { code: '+968', label: 'OM (+968)' },
        { code: '+973', label: 'BH (+973)' },
        { code: '+65', label: 'SG (+65)' },
        { code: '+61', label: 'AU (+61)' },
        { code: '+1-C', label: 'CA (+1)' },
        { code: '+31', label: 'NL (+31)' },
        { code: '+353', label: 'IE (+353)' },
        { code: '+49', label: 'DE (+49)' },
        { code: '+33', label: 'FR (+33)' },
        { code: '+64', label: 'NZ (+64)' },
        { code: '+27', label: 'ZA (+27)' },
        { code: '+852', label: 'HK (+852)' },
        { code: '+60', label: 'MY (+60)' },
    ];

    const updateFormData = <K extends keyof CalculatorFormData>(field: K, value: CalculatorFormData[K]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
    };

    const toggleIndustry = (ind: string) => {
        const current = [...formData.industries];
        const index = current.indexOf(ind);
        if (index > -1) { current.splice(index, 1); } else { current.push(ind); }
        updateFormData('industries', current);
    };

    const validateStep = (step: number): boolean => {
        const n: FormErrors = {};
        if (step === 1 && formData.industries.length === 0) n.industries = 'Required';
        if (step === 2 && Object.keys(formData.countryEntities).length === 0) n.countryEntities = 'Required';
        if (step === 3 && formData.modules.length === 0) n.modules = 'Required';
        if (step === 4) {
            if (!formData.name.trim()) n.name = 'Full name is required';
            if (!formData.email.trim()) {
                n.email = 'Business email is required';
            } else {
                const domain = formData.email.split('@')[1]?.toLowerCase();
                const forbidden = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com', 'icloud.com'];
                if (forbidden.includes(domain)) {
                    n.email = `Business email only (@${domain} not allowed)`;
                }
            }
            if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
                n.phone = 'Please enter exactly 10 digits';
            }
        }
        setErrors(n);
        return Object.keys(n).length === 0;
    };

    const nextStep = () => { if (validateStep(currentStep)) setCurrentStep(p => Math.min(p + 1, totalSteps)); };
    const prevStep = () => setCurrentStep(p => Math.max(p - 1, 1));

    const handleCountryToggle = (c: string) => {
        const m = { ...formData.countryEntities };
        if (m[c]) delete m[c]; else m[c] = 1;
        updateFormData('countryEntities', m);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep(4)) return;
        setSubmitting(true);
        try {
            const res = await submitPricingQuote(formData);
            if (res?.ok) {
                setShowSuccess(true);
            } else {
                alert(`Error: ${res?.error || 'Failed to send quote'}`);
            }
        } catch (err) {
            alert('Something went wrong. Please check your connection.');
        } finally { 
            setSubmitting(false); 
        }
    };

    const aggregatedRecommendations = useMemo(() => {
        const recs = new Set<string>();
        formData.industries.forEach(ind => {
            if (industryModules[ind]) {
                industryModules[ind].forEach(m => recs.add(m));
            }
        });
        return Array.from(recs);
    }, [formData.industries]);

    // ── SUCCESS SCREEN ──────────────────────────────────────────────────────
    if (showSuccess) return (
        <div className="min-h-[60vh] flex items-center justify-center p-6 md:p-12 bg-white rounded-2xl md:rounded-[3rem] mx-auto max-w-2xl">
            <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl shadow-blue-500/20">
                    <Check className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium text-slate-900 mb-2">Quote Sent Successfully</h2>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto text-sm md:text-base">Our team will be in touch shortly.</p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-2xl font-medium uppercase tracking-widest hover:scale-105 transition-all text-sm md:text-base"
                >
                    Close
                </button>
            </div>
        </div>
    );

    // ── MAIN CALCULATOR ─────────────────────────────────────────────────────
    return (
        <div className="w-full max-w-6xl mx-auto bg-[#020617] text-slate-200 border border-white/10 rounded-2xl md:rounded-[3rem] shadow-2xl flex flex-col font-['DM_Sans',sans-serif] overflow-hidden relative min-h-[600px] md:min-h-[700px]">

            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-slate-950 to-purple-900/10 pointer-events-none z-0" />

            {/* ── HEADER ── */}
            <div className="relative z-20 px-4 sm:px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-[#0033ad] via-[#111827] to-[#581c87] flex items-center justify-between gap-3 border-b border-white/5 flex-wrap sm:flex-nowrap">

                {/* Logos */}
                <div className="flex items-center p-1 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 shrink-0">
                    <div className="flex items-center gap-3 md:gap-6 px-3 md:px-4 py-1.5 md:py-2">
                        <Image
                            src="/images/logos/agsuite_logo.webp"
                            alt="AGSuite"
                            width={110}
                            height={36}
                            className="h-7 md:h-10 w-auto object-contain brightness-0 invert"
                        />
                        <div className="w-px h-4 bg-white/40" />
                        <Image
                            src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
                            alt="NetSuite Partner"
                            width={110}
                            height={36}
                            className="h-7 md:h-10 w-auto object-contain brightness-0 invert"
                        />
                    </div>
                </div>

                {/* Step indicators */}
                <div className="flex items-center gap-1.5 sm:gap-3 ml-auto">
                    {stepTitles.map((t, i) => (
                        <div key={i} className={`flex items-center gap-1.5 sm:gap-2 transition-all ${currentStep >= i + 1 ? 'opacity-100' : 'opacity-30'}`}>
                            <span className={`w-6 h-6 md:w-7 md:h-7 rounded-md md:rounded-lg flex items-center justify-center text-[9px] md:text-[10px] font-bold border shrink-0 ${currentStep === i + 1 ? 'bg-white text-blue-900 border-white' : 'border-white/20 text-white'}`}>
                                {i + 1}
                            </span>
                            <span className="hidden md:block text-[10px] font-medium uppercase tracking-[0.15em] text-white/80">{t}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── MAIN CONTENT ── */}
            <main className="relative z-10 flex-1 overflow-y-auto px-4 sm:px-6 md:px-10 lg:px-12 py-6 md:py-10 custom-scrollbar scroll-smooth">
                <form onSubmit={handleSubmit} className="h-full flex flex-col">

                    {/* STEP 1: INDUSTRY */}
                    {currentStep === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="mb-6 md:mb-10 flex flex-wrap justify-between items-start gap-3">
                                <div>
                                    <h2 className="text-2xl md:text-4xl font-medium text-white mb-1 md:mb-2">Select Your Industry</h2>
                                    <p className="text-sm md:text-lg text-slate-400">Choose all verticals that represent your business operations.</p>
                                </div>
                                <div className="text-blue-400 text-xs md:text-sm font-bold uppercase tracking-widest bg-blue-500/10 px-3 md:px-4 py-1.5 md:py-2 rounded-xl border border-blue-500/20 shrink-0">
                                    {formData.industries.length} Selected
                                </div>
                            </div>
                            <div className="overflow-y-auto max-h-[42vh] md:max-h-[50vh] pr-1 custom-scrollbar">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                                    {industries.map(ind => {
                                        const isActive = formData.industries.includes(ind);
                                        return (
                                            <button
                                                key={ind} type="button" onClick={() => toggleIndustry(ind)}
                                                className={`p-4 md:p-5 rounded-2xl border-2 transition-all text-left flex items-center gap-3 md:gap-4 group relative overflow-hidden h-16 md:h-24 ${isActive
                                                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-400 shadow-xl'
                                                    : 'bg-gradient-to-br from-white to-blue-50 border-white text-slate-900 hover:border-blue-200'}`}
                                            >
                                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${isActive ? 'bg-white/20' : 'bg-blue-600/10'}`}>
                                                    <Building2 className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                                                </div>
                                                <span className={`text-sm md:text-[17px] font-medium tracking-tight leading-tight transition-colors ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-blue-700'}`}>{ind}</span>
                                                {isActive && (
                                                    <div className="absolute top-2.5 right-2.5">
                                                        <div className="bg-white rounded-full p-0.5"><Check size={9} className="text-blue-600" strokeWidth={5} /></div>
                                                    </div>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: GEO */}
                    {currentStep === 2 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="mb-6 md:mb-8">
                                <h2 className="text-2xl md:text-4xl font-medium text-white mb-1 md:mb-2">Geographic Scope</h2>
                                <p className="text-sm md:text-lg text-slate-400">Where does your business operate globally?</p>
                            </div>
                            {/* Country grid */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 mb-6 md:mb-10">
                                {countries.map(c => (
                                    <button
                                        key={c} type="button" onClick={() => handleCountryToggle(c)}
                                        className={`py-3 md:py-4 rounded-xl border-2 transition-all text-[10px] md:text-[11px] font-medium uppercase tracking-widest ${formData.countryEntities[c]
                                            ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                                            : 'bg-white border-white text-slate-900 hover:border-blue-100'}`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                            {/* Selected countries */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-h-[240px] md:max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                                {Object.keys(formData.countryEntities).map(c => (
                                    <div key={c} className="bg-gradient-to-br from-white to-blue-50 p-3 md:p-5 rounded-2xl md:rounded-3xl flex items-center justify-between border-2 border-white shadow-lg gap-2">
                                        <span className="text-sm md:text-lg font-medium text-slate-900 truncate">{c}</span>
                                        <div className="flex items-center gap-2 md:gap-4 bg-blue-100/50 p-1.5 md:p-2 rounded-xl md:rounded-2xl border border-blue-200 shrink-0">
                                            <button type="button" onClick={() => updateFormData('countryEntities', { ...formData.countryEntities, [c]: Math.max(1, formData.countryEntities[c] - 1) })} className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-white flex items-center justify-center text-slate-600 hover:text-red-600 shadow-sm">
                                                <Minus size={14} />
                                            </button>
                                            <span className="text-sm md:text-lg font-medium text-blue-900 w-5 text-center tabular-nums">{formData.countryEntities[c]}</span>
                                            <button type="button" onClick={() => updateFormData('countryEntities', { ...formData.countryEntities, [c]: formData.countryEntities[c] + 1 })} className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 shadow-sm">
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 3: SOLUTIONS */}
                    {currentStep === 3 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="mb-6 md:mb-10">
                                <h2 className="text-2xl md:text-4xl font-medium text-white mb-1 md:mb-2">Solution Pack</h2>
                                <p className="text-sm md:text-lg text-slate-400">Select modules required for your NetSuite environment.</p>
                            </div>
                            <div className="space-y-6 md:space-y-10">
                                {aggregatedRecommendations.length > 0 && (
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 md:mb-5">Tailored Recommendations</p>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
                                            {aggregatedRecommendations.map(m => (
                                                <button
                                                    key={m} type="button"
                                                    onClick={() => updateFormData('modules', formData.modules.includes(m) ? formData.modules.filter(x => x !== m) : [...formData.modules, m])}
                                                    className={`p-3 md:p-4 rounded-xl border-2 text-[10px] md:text-[11px] font-medium transition-all text-center ${formData.modules.includes(m)
                                                        ? 'bg-[#0033ad] border-[#2563eb] text-white shadow-lg'
                                                        : 'bg-white border-white text-slate-900 hover:border-blue-50'}`}
                                                >
                                                    {m}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 md:mb-5">General Modules</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
                                        {commonModules.map(m => (
                                            <button
                                                key={m} type="button"
                                                onClick={() => updateFormData('modules', formData.modules.includes(m) ? formData.modules.filter(x => x !== m) : [...formData.modules, m])}
                                                className={`p-3 md:p-4 rounded-xl border-2 text-[10px] md:text-[11px] font-medium transition-all text-center ${formData.modules.includes(m)
                                                    ? 'bg-[#0033ad] border-[#2563eb] text-white shadow-lg'
                                                    : 'bg-white border-white text-slate-900 hover:border-blue-50'}`}
                                            >
                                                {m}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 4: CONTACT */}
                    {currentStep === 4 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="mb-4 md:mb-10">
                                <h2 className="text-xl md:text-4xl font-medium text-white mb-1 md:mb-2">Final Review</h2>
                                <p className="text-xs md:text-lg text-slate-400">Complete your details to receive the tailored quote.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2.5 md:gap-6 max-w-4xl">
                                {/* Full Name */}
                                <div className="space-y-1 md:space-y-2">
                                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-400 pl-0.5">Full Name</label>
                                    <input
                                        type="text" value={formData.name}
                                        onChange={e => updateFormData('name', e.target.value)}
                                        placeholder="John Doe"
                                        className="w-full bg-white border border-white/20 px-3 py-2.5 md:p-5 rounded-lg md:rounded-2xl text-sm md:text-lg font-medium text-slate-900 focus:border-blue-500 outline-none transition-all shadow-sm"
                                    />
                                </div>
                                {/* Company Name */}
                                <div className="space-y-1 md:space-y-2">
                                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-400 pl-0.5">Company</label>
                                    <input
                                        type="text" value={formData.companyname}
                                        onChange={e => updateFormData('companyname', e.target.value)}
                                        placeholder="e.g. AGSuite"
                                        className="w-full bg-white border border-white/20 px-3 py-2.5 md:p-5 rounded-lg md:rounded-2xl text-sm md:text-lg font-medium text-slate-900 focus:border-blue-500 outline-none transition-all shadow-sm"
                                    />
                                </div>
                                {/* Email */}
                                <div className="space-y-1 md:space-y-2">
                                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-400 pl-0.5">Email</label>
                                    <input
                                        type="email" value={formData.email}
                                        onChange={e => updateFormData('email', e.target.value)}
                                        placeholder="email@company.com"
                                        className="w-full bg-white border border-white/20 px-3 py-2.5 md:p-5 rounded-lg md:rounded-2xl text-sm md:text-lg font-medium text-slate-900 focus:border-blue-500 outline-none transition-all shadow-sm"
                                    />
                                </div>
                                {/* Phone */}
                                <div className="space-y-1 md:space-y-2">
                                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-400 pl-0.5">Phone (10 Digits)</label>
                                    <div className="flex gap-2">
                                        <select
                                            value={formData.countryCode}
                                            onChange={e => updateFormData('countryCode', e.target.value)}
                                            className="w-24 bg-white border border-white/20 px-2 py-2.5 md:p-5 rounded-lg md:rounded-2xl text-xs md:text-sm font-medium text-slate-900 focus:border-blue-500 outline-none transition-all shadow-sm"
                                        >
                                            {COUNTRY_CODES.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                                        </select>
                                        <input
                                            type="tel" value={formData.phone}
                                            onChange={e => updateFormData('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                                            placeholder="9876543210"
                                            maxLength={10}
                                            className={`flex-1 bg-white border ${errors.phone ? 'border-red-500' : 'border-white/20'} px-3 py-2.5 md:p-5 rounded-lg md:rounded-2xl text-sm md:text-lg font-medium text-slate-900 focus:border-blue-500 outline-none transition-all shadow-sm`}
                                        />
                                    </div>
                                    {errors.phone && <p className="text-[10px] text-red-500 mt-1 pl-1 font-bold">{errors.phone}</p>}
                                </div>
                                {/* Revenue — full width */}
                                <div className="col-span-2 space-y-1 md:space-y-2">
                                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-400 pl-0.5">Revenue (ARR)</label>
                                    <select
                                        value={formData.revenue}
                                        onChange={e => updateFormData('revenue', e.target.value)}
                                        className="w-full bg-white border border-white/20 px-3 py-2.5 md:p-5 rounded-lg md:rounded-2xl text-sm md:text-lg font-medium text-slate-900 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer shadow-sm"
                                    >
                                        <option value="">Select Revenue Range</option>
                                        {revenueRanges.map(r => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </main>

            {/* ── FOOTER NAV ── */}
            <div className="relative z-10 px-3 sm:px-6 md:px-12 py-3 md:py-8 border-t border-white/5 bg-slate-900/40 backdrop-blur-3xl flex items-center justify-between gap-2">
                <button
                    type="button" onClick={prevStep} disabled={currentStep === 1}
                    className="flex items-center gap-1 md:gap-3 px-3 sm:px-5 md:px-8 py-2 md:py-3 rounded-lg md:rounded-2xl text-[9px] md:text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-all disabled:opacity-0 shrink-0"
                >
                    <ChevronLeft size={15} /> <span className="hidden sm:inline">Previous</span>
                </button>

                {/* Step dots — mobile only */}
                <div className="flex sm:hidden items-center gap-1.5">
                    {stepTitles.map((_, i) => (
                        <div key={i} className={`rounded-full transition-all duration-300 ${currentStep === i + 1 ? 'w-4 h-1.5 bg-blue-500' : 'w-1.5 h-1.5 bg-white/20'}`} />
                    ))}
                </div>

                <div className="flex items-center gap-2 md:gap-5 shrink-0">
                    {currentStep < totalSteps ? (
                        <button
                            type="button" onClick={nextStep}
                            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 sm:px-6 md:px-12 py-2 md:py-4 rounded-lg md:rounded-2xl font-bold uppercase tracking-wider hover:scale-105 shadow-lg shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-1.5 md:gap-3 text-[10px] md:text-sm"
                        >
                            Continue <ChevronRight size={13} />
                        </button>
                    ) : (
                        <button
                            type="button" onClick={handleSubmit}
                            className="bg-gradient-to-r from-[#0033ad] to-[#1e40af] text-white px-4 sm:px-8 md:px-14 py-2 md:py-5 rounded-xl md:rounded-[2.2rem] font-bold uppercase tracking-wider hover:scale-105 shadow-xl shadow-blue-600/30 active:scale-95 transition-all flex items-center gap-1.5 md:gap-3 text-[10px] md:text-sm"
                        >
                            {submitting ? 'Sending...' : 'Get Quote'} <Sparkles size={13} />
                        </button>
                    )}
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 20px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
            `}</style>
        </div>
    );
};

export default NetSuitePricingCalculator;




