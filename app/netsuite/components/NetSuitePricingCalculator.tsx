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

    const updateFormData = <K extends keyof CalculatorFormData>(field: K, value: CalculatorFormData[K]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
    };

    const toggleIndustry = (ind: string) => {
        const current = [...formData.industries];
        const index = current.indexOf(ind);
        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(ind);
        }
        updateFormData('industries', current);
    };

    const validateStep = (step: number): boolean => {
        const n: FormErrors = {};
        if (step === 1 && formData.industries.length === 0) n.industries = 'Required';
        if (step === 2 && Object.keys(formData.countryEntities).length === 0) n.countryEntities = 'Required';
        if (step === 3 && formData.modules.length === 0) n.modules = 'Required';
        if (step === 4) {
            if (!formData.name.trim()) n.name = 'Req';
            if (!formData.email.trim()) n.email = 'Req';
            if (!formData.phone.trim()) n.phone = 'Req';
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
            if (res?.ok) setShowSuccess(true);
        } finally { setSubmitting(false); }
    };

    // Calculate aggregated recommendations for all selected industries
    const aggregatedRecommendations = useMemo(() => {
        const recs = new Set<string>();
        formData.industries.forEach(ind => {
            if (industryModules[ind]) {
                industryModules[ind].forEach(m => recs.add(m));
            }
        });
        return Array.from(recs);
    }, [formData.industries]);

    if (showSuccess) return (
        <div className="h-full flex items-center justify-center p-12 bg-white rounded-[3rem]">
            <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20"><Check className="w-10 h-10 text-white" /></div>
                <h2 className="text-3xl font-medium text-slate-900 mb-3">Quote Sent Successfully</h2>
                <p className="text-slate-500 mb-10 max-w-sm">Our team will be in touch shortly.</p>
                <button onClick={() => window.location.reload()} className="bg-blue-600 text-white px-12 py-4 rounded-2xl font-medium uppercase tracking-widest hover:scale-105 transition-all">Close</button>
            </div>
        </div>
    );

    return (
        <div className="w-[95vw] max-w-6xl h-[min(800px,90vh)] bg-[#020617] text-slate-200 border border-white/10 rounded-[3rem] shadow-2xl flex flex-col font-['DM_Sans',sans-serif] overflow-hidden relative">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-slate-950 to-purple-900/10 pointer-events-none z-0" />

            {/* Header: Enhanced with Larger Logos & Tighter Items */}
            <div className="relative z-20 px-10 py-5 bg-gradient-to-r from-[#0033ad] via-[#111827] to-[#581c87] flex items-center justify-between border-b border-white/5">
                <div className="flex items-center p-1 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-6 px-4 py-2">
                        <Image src="/images/logos/agsuite_logo.webp" alt="AGSuite" width={140} height={45} className="h-10 w-auto object-contain brightness-0 invert" />
                        <div className="w-px h-4 bg-white/40" />
                        <Image src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png" alt="NetSuite Partner" width={140} height={45} className="h-10 w-auto object-contain brightness-0 invert" />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {stepTitles.map((t, i) => (
                        <div key={i} className={`flex items-center gap-2 transition-all ${currentStep >= i + 1 ? 'opacity-100' : 'opacity-30'}`}>
                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold border ${currentStep === i + 1 ? 'bg-white text-blue-900 border-white' : 'border-white/20 text-white'}`}>{i + 1}</span>
                            <span className="hidden lg:block text-[10px] font-medium uppercase tracking-[0.15em] text-white/80">{t}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <main className="relative z-10 flex-1 overflow-y-auto px-12 py-10 custom-scrollbar scroll-smooth">
                <form onSubmit={handleSubmit} className="h-full flex flex-col">

                    {/* STEP 1: INDUSTRY */}
                    {currentStep === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="mb-10 flex justify-between items-end">
                                <div>
                                    <h2 className="text-4xl font-medium text-white mb-2">Select Your Industry</h2>
                                    <p className="text-lg text-slate-400">Choose all verticals that represent your business operations.</p>
                                </div>
                                <div className="text-blue-400 text-sm font-bold uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20">
                                    {formData.industries.length} Selected
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {industries.map(ind => {
                                    const isActive = formData.industries.includes(ind);
                                    return (
                                        <button
                                            key={ind} type="button" onClick={() => toggleIndustry(ind)}
                                            className={`p-5 rounded-2xl border-2 transition-all text-left flex items-center gap-4 group relative overflow-hidden h-24 ${isActive
                                                ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-400 shadow-xl'
                                                : 'bg-gradient-to-br from-white to-blue-50 border-white text-slate-900 hover:border-blue-200'}`}
                                        >
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${isActive ? 'bg-white/20' : 'bg-blue-600/10'}`}>
                                                <Building2 className={`w-5 h-5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className={`text-[17px] font-medium tracking-tight leading-tight transition-colors ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-blue-700'}`}>{ind}</span>
                                            </div>
                                            {isActive && (
                                                <div className="absolute top-3 right-3">
                                                    <div className="bg-white rounded-full p-0.5"><Check size={10} className="text-blue-600" strokeWidth={5} /></div>
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* STEP 2: GEO */}
                    {currentStep === 2 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="mb-8">
                                <h2 className="text-4xl font-medium text-white mb-2">Geographic Scope</h2>
                                <p className="text-lg text-slate-400">Where does your business operate globally?</p>
                            </div>
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
                                {countries.map(c => (
                                    <button
                                        key={c} type="button" onClick={() => handleCountryToggle(c)}
                                        className={`py-4 rounded-xl border-2 transition-all text-[11px] font-medium uppercase tracking-widest ${formData.countryEntities[c]
                                            ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                                            : 'bg-white border-white text-slate-900 hover:border-blue-100'}`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                {Object.keys(formData.countryEntities).map(c => (
                                    <div key={c} className="bg-gradient-to-br from-white to-blue-50 p-5 rounded-3xl flex items-center justify-between border-2 border-white shadow-lg">
                                        <span className="text-lg font-medium text-slate-900">{c}</span>
                                        <div className="flex items-center gap-4 bg-blue-100/50 p-2 rounded-2xl border border-blue-200">
                                            <button type="button" onClick={() => updateFormData('countryEntities', { ...formData.countryEntities, [c]: Math.max(1, formData.countryEntities[c] - 1) })} className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-slate-600 hover:text-red-600 shadow-sm"><Minus size={16} /></button>
                                            <span className="text-lg font-medium text-blue-900 w-6 text-center tabular-nums">{formData.countryEntities[c]}</span>
                                            <button type="button" onClick={() => updateFormData('countryEntities', { ...formData.countryEntities, [c]: formData.countryEntities[c] + 1 })} className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 shadow-sm"><Plus size={16} /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 3: SOLUTIONS */}
                    {currentStep === 3 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="mb-10">
                                <h2 className="text-4xl font-medium text-white mb-2">Solution Pack</h2>
                                <p className="text-lg text-slate-400">Select modules required for your NetSuite environment.</p>
                            </div>
                            <div className="space-y-10">
                                {aggregatedRecommendations.length > 0 && (
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">Tailored Recommendations</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {aggregatedRecommendations.map(m => (
                                                <button
                                                    key={m} type="button"
                                                    onClick={() => updateFormData('modules', formData.modules.includes(m) ? formData.modules.filter(x => x !== m) : [...formData.modules, m])}
                                                    className={`p-6 rounded-[2rem] border-2 transition-all flex items-center gap-5 text-left h-24 ${formData.modules.includes(m)
                                                        ? 'bg-blue-600 border-blue-400 text-white shadow-xl translate-y-[-2px]'
                                                        : 'bg-gradient-to-br from-white to-blue-50 border-white text-slate-900 hover:border-blue-100'}`}
                                                >
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-inner ${formData.modules.includes(m) ? 'bg-white/20' : 'bg-blue-100'}`}><Settings size={18} className={formData.modules.includes(m) ? 'text-white' : 'text-blue-600'} /></div>
                                                    <span className="text-[17px] font-medium transition-colors">{m}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">General Modules</p>
                                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                                        {commonModules.map(m => (
                                            <button
                                                key={m} type="button" onClick={() => updateFormData('modules', formData.modules.includes(m) ? formData.modules.filter(x => x !== m) : [...formData.modules, m])}
                                                className={`p-4 rounded-xl border-2 text-[11px] font-medium transition-all text-center ${formData.modules.includes(m)
                                                    ? 'bg-slate-700 border-slate-600 text-white shadow-lg'
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
                            <div className="mb-10">
                                <h2 className="text-4xl font-medium text-white mb-2">Final Review</h2>
                                <p className="text-lg text-slate-400">Complete your details to receive the tailored quote.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto lg:mx-0">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-400 pl-1">Full Name</label>
                                    <input type="text" value={formData.name} onChange={e => updateFormData('name', e.target.value)} placeholder="e.g. John Doe" className="w-full bg-white border border-white/20 p-5 rounded-2xl text-lg font-medium text-slate-900 focus:border-blue-500 outline-none transition-all shadow-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-400 pl-1">Company Name</label>
                                    <input type="text" value={formData.companyname} onChange={e => updateFormData('companyname', e.target.value)} placeholder="e.g. AGSuite" className="w-full bg-white border border-white/20 p-5 rounded-2xl text-lg font-medium text-slate-900 focus:border-blue-500 outline-none transition-all shadow-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-400 pl-1">Business Email</label>
                                    <input type="email" value={formData.email} onChange={e => updateFormData('email', e.target.value)} placeholder="email@company.com" className="w-full bg-white border border-white/20 p-5 rounded-2xl text-lg font-medium text-slate-900 focus:border-blue-500 outline-none transition-all shadow-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-400 pl-1">Phone Number</label>
                                    <input type="tel" value={formData.phone} onChange={e => updateFormData('phone', e.target.value)} placeholder="+1 (555) 000-0000" className="w-full bg-white border border-white/20 p-5 rounded-2xl text-lg font-medium text-slate-900 focus:border-blue-500 outline-none transition-all shadow-sm" />
                                </div>
                                <div className="col-span-1 md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-blue-400 pl-1">Company Revenue (ARR)</label>
                                    <select value={formData.revenue} onChange={e => updateFormData('revenue', e.target.value)} className="w-full bg-white border border-white/20 p-5 rounded-2xl text-lg font-medium text-slate-900 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer shadow-sm">
                                        <option value="">Select Revenue Range</option>
                                        {revenueRanges.map(r => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </main>

            {/* Footer with Professional Blue Gradient Primary Action */}
            <div className="relative z-10 px-12 py-8 border-t border-white/5 bg-slate-900/40 backdrop-blur-3xl flex items-center justify-between">
                <button
                    type="button" onClick={prevStep} disabled={currentStep === 1}
                    className="flex items-center gap-3 px-8 py-3 rounded-2xl text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-all disabled:opacity-0"
                >
                    <ChevronLeft size={20} /> Previous
                </button>
                <div className="flex items-center gap-5">
                    {currentStep < totalSteps ? (
                        <button type="button" onClick={nextStep} className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-12 py-4 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 shadow-xl shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-3">
                            Continue <ChevronRight size={18} />
                        </button>
                    ) : (
                        <button type="button" onClick={handleSubmit} className="bg-gradient-to-r from-[#0033ad] to-[#1e40af] text-white px-14 py-5 rounded-[2.2rem] font-bold uppercase tracking-[0.2em] hover:scale-105 shadow-2xl shadow-blue-600/30 active:scale-95 transition-all flex items-center gap-3">
                            {submitting ? 'Submitting...' : 'Generate Quote'} <Sparkles size={20} />
                        </button>
                    )}
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 20px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
            `}</style>
        </div>
    );
};

export default NetSuitePricingCalculator;
