'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Building2,
    Globe,
    Settings,
    Mail,
    Check,
    Sparkles,
    Plus,
    Minus,
} from 'lucide-react';
import { submitPricingQuote } from '@/app/api/actions/submitPricingQuote';

// --- INTERFACES ---
interface CalculatorFormData {
    industries: string;
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

type FormErrors = Partial<Record<keyof CalculatorFormData, string>> & {
    countryEntities?: string;
};

const NetSuitePricingCalculator = () => {
    // --- STATE MANAGEMENT ---
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState<CalculatorFormData>({
        industries: '',
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
    const [attemptedSubmit, setAttemptedSubmit] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const totalSteps = 4;

    // --- DATA ARRAYS ---
    const industries = [
        'Software and Technology',
        'Manufacturing',
        'Retail & E-Commerce',
        'Wholesale Distribution',
        'IT and Professional Services',
        'Media and Publishing',
        'Transportation and Logistics',
        'Advertising and Digital Marketing',
        'Other'
    ];

    const countries = ['India', 'USA', 'UK', 'Canada', 'Australia', 'Russia', 'France', 'Dubai', 'Singapore', 'Japan', 'Malaysia', 'Sri Lanka'];

    const commonModules = ['Accounting / Financials', 'CRM', 'Fixed Asset Management'];

    const industryModules: Record<string, string[]> = {
        'Software and Technology': ['Subscription Billing', 'Revenue Recognition', 'Planning & Budgeting'],
        'Manufacturing': ['Work Orders', 'Assembly Management', 'Advanced Manufacturing'],
        'Retail & E-Commerce': ['Point of Sale (POS)', 'Order Management', 'SCIS'],
        'Wholesale Distribution': ['Warehouse Management', 'Demand Planning', 'Shipping Integration'],
        'IT and Professional Services': ['Project Management', 'Resource Planning', 'Time & Expense'],
        'Media and Publishing': ['Advanced Financials', 'Revenue Recognition'],
        'Transportation and Logistics': ['Inventory Management', 'Inbound Logistics'],
        'Advertising and Digital Marketing': ['Job Costing', 'Resource Planning'],
        'Other': ['Advanced Financials', 'Procurement']
    };

    const revenueRanges = ['Under $500K', '$500k to $1M', '$1M to $2M', '$2M to $5M', '$5M to $10M', '$10M to $20M', '$20M to $30M', '$30M to $50M', '$50M to $100M', '$100M to $150M', '$150M to $200M', '$200M to $250M', '$250M to $300M', '$300M to $400M', '$400M to $500M', '$500M to $1B', '$1B to $2B', '$2B to $4B', '$4 Billion+'];
    const hearAboutOptions = ['Google Search', 'Referral', 'Social Media', 'NetSuite Event', 'Other'];
    const countryCodes = [{ code: '+1', country: 'USA' }, { code: '+91', country: 'India' }, { code: '+44', country: 'UK' }];

    const stepTitles = ['Industry', 'Structure', 'Solution', 'Contact'];
    const stepIcons = [Building2, Globe, Settings, Mail];

    // --- HELPERS ---
    const restrictedDomains = useMemo(() => ['gmail.com', 'yahoo.com', 'outlook.com'], []);

    const updateFormData = <K extends keyof CalculatorFormData>(field: K, value: CalculatorFormData[K]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors: FormErrors = {};

        switch (step) {
            case 1: {
                if (!formData.industries) newErrors.industries = 'Please select your industry.';
                else if (formData.industries === 'Other' && !formData.customIndustry.trim()) newErrors.customIndustry = 'Please specify your industry.';
                break;
            }
            case 2: {
                const selectedCount = Object.keys(formData.countryEntities).length;
                if (selectedCount === 0) newErrors.countryEntities = 'Please select at least one country.';
                else {
                    const invalid = Object.values(formData.countryEntities).some(val => val < 1);
                    if (invalid) newErrors.countryEntities = 'Each country must have at least 1 entity.';
                }
                break;
            }
            case 3: {
                if (formData.modules.length === 0) newErrors.modules = 'Please select at least one module.';
                break;
            }
            case 4: {
                if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
                if (!formData.companyname.trim()) newErrors.companyname = 'Company Name is required.';
                if (!formData.email.trim()) {
                    newErrors.email = 'Business Email is required.';
                } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
                    newErrors.email = 'Valid email is required.';
                } else {
                    const domain = formData.email.split('@')[1]?.toLowerCase() || '';
                    if (restrictedDomains.includes(domain)) {
                        newErrors.email = 'Please use a business email.';
                    }
                }
                if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
                if (!formData.role.trim()) newErrors.role = 'Role is required.';
                if (!formData.revenue) newErrors.revenue = 'Annual Revenue is required.';
                if (!formData.message.trim()) newErrors.message = 'Please tell us more.';
                break;
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleCountryToggle = (country: string) => {
        const newMap = { ...formData.countryEntities };
        if (newMap[country]) {
            delete newMap[country];
        } else {
            newMap[country] = 1;
        }
        updateFormData('countryEntities', newMap);
    };

    const updateEntityCount = (country: string, val: number) => {
        const newMap = { ...formData.countryEntities };
        newMap[country] = Math.max(1, val);
        updateFormData('countryEntities', newMap);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAttemptedSubmit(true);
        if (!validateStep(4)) return;
        try {
            setSubmitting(true);
            const res = await submitPricingQuote(formData);
            if (res?.ok) setShowSuccess(true);
            else setSubmitError(res?.error || 'Submission failed.');
        } catch (err) {
            setSubmitError('Unexpected error.');
        } finally {
            setSubmitting(false);
        }
    };

    const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

    if (showSuccess) {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 font-['DM_Sans',sans-serif]">
                <div className="bg-[#0f172a] border border-slate-800 rounded-[2.5rem] p-16 max-w-xl w-full text-center shadow-2xl">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#FF44EC] to-[#FF675E] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-pink-500/20">
                        <Check className="w-10 h-10 text-white" strokeWidth={3} />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Success!</h2>
                    <p className="text-slate-400 mb-10 text-lg leading-relaxed font-medium">Your request has been received. Our experts will reach out to you within 24 hours.</p>
                    <button onClick={() => window.location.reload()} className="w-full bg-gradient-to-r from-[#FF44EC] to-[#FF675E] text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-pink-500/10">
                        Start New Quote
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-['DM_Sans',sans-serif] pb-20 selection:bg-pink-500/30">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800/50">
                <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/30">
                            <Sparkles className="text-white w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-white leading-none">NetSuite ROI Calculator</h1>
                            <p className="text-xs text-blue-400 font-bold uppercase tracking-[0.2em] mt-1.5">Enterprise Business Engine</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {stepTitles.map((title, i) => (
                            <div key={i} className={`flex items-center gap-2.5 transition-all ${currentStep >= i + 1 ? 'opacity-100' : 'opacity-40'}`}>
                                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border-2 ${currentStep === i + 1 ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-700 text-slate-500'}`}>{i + 1}</span>
                                <span className="text-xs font-bold uppercase tracking-widest">{title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-slate-900 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 via-[#FF44EC] to-[#FF675E] transition-all duration-1000 ease-out" style={{ width: `${progressPercentage}%` }} />
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12">
                {/* Full Space for Form */}
                <div className="bg-[#0f172a] border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col min-h-[700px]">
                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col">

                        <div className="flex-1 p-10 lg:p-20 overflow-y-auto custom-scrollbar">

                            {/* STEP 1: INDUSTRY */}
                            {currentStep === 1 && (
                                <div className="animate-in fade-in duration-500 space-y-12">
                                    <div className="max-w-3xl">
                                        <h2 className="text-4xl font-bold text-white mb-4 leading-tight tracking-tight">Identify Your Industry</h2>
                                        <p className="text-lg text-slate-400 font-medium">Select the vertical that best describes your primary business operations.</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {industries.map(ind => (
                                            <button
                                                key={ind}
                                                type="button"
                                                onClick={() => updateFormData('industries', ind)}
                                                className={`group p-8 rounded-2xl border-2 transition-all text-left relative overflow-hidden h-full flex flex-col ${formData.industries === ind
                                                        ? 'bg-white border-blue-500 shadow-2xl scale-[1.02]'
                                                        : 'bg-white border-transparent hover:border-slate-300 hover:shadow-lg'
                                                    }`}
                                            >
                                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all shadow-sm ${formData.industries === ind ? 'bg-blue-600 shadow-blue-200' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                                                    <Building2 className={`w-7 h-7 ${formData.industries === ind ? 'text-white' : 'text-slate-500'}`} />
                                                </div>
                                                <h4 className="text-lg font-bold text-slate-900 leading-snug font-medium mb-auto pr-8">{ind}</h4>
                                                {formData.industries === ind && (
                                                    <div className="absolute top-8 right-8 text-blue-600">
                                                        <Check size={24} strokeWidth={4} />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>

                                    {formData.industries === 'Other' && (
                                        <div className="mt-10 animate-in slide-in-from-top-4 max-w-2xl">
                                            <label className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Specify Your Industry</label>
                                            <input
                                                type="text"
                                                value={formData.customIndustry}
                                                onChange={e => updateFormData('customIndustry', e.target.value)}
                                                placeholder="What's your specific niche?"
                                                className="w-full bg-[#1e293b] border-2 border-slate-700 p-6 rounded-2xl text-white text-lg font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                    )}
                                    {attemptedSubmit && errors.industries && <p className="text-red-400 text-sm font-bold uppercase tracking-widest mt-6 animate-pulse">{errors.industries}</p>}
                                </div>
                            )}

                            {/* STEP 2: GLOBAL STRUCTURE */}
                            {currentStep === 2 && (
                                <div className="animate-in fade-in duration-500 space-y-12">
                                    <div className="max-w-3xl">
                                        <h2 className="text-4xl font-bold text-white mb-4 leading-tight tracking-tight">Global Infrastructure</h2>
                                        <p className="text-lg text-slate-400 font-medium">Map your international footprint and organizational scale.</p>
                                    </div>

                                    <div className="space-y-14">
                                        <div>
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6 flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                                1. Select Operating Countries
                                            </h3>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                                                {countries.map(country => (
                                                    <button
                                                        key={country}
                                                        type="button"
                                                        onClick={() => handleCountryToggle(country)}
                                                        className={`py-4 px-3 rounded-xl border-2 text-xs font-bold uppercase tracking-widest transition-all ${formData.countryEntities[country]
                                                                ? 'bg-blue-600 border-blue-600 text-white shadow-xl scale-105'
                                                                : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                                                            }`}
                                                    >
                                                        {country}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {Object.keys(formData.countryEntities).length > 0 && (
                                            <div className="animate-in fade-in duration-700">
                                                <h3 className="text-sm font-bold uppercase tracking-widest text-pink-400 mb-6 flex items-center gap-3">
                                                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                                                    2. Configure Legal Entity Counts
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {Object.keys(formData.countryEntities).map(country => (
                                                        <div key={country} className="bg-white p-6 rounded-2xl flex items-center justify-between border-2 border-transparent hover:border-blue-500 transition-all shadow-lg">
                                                            <div className="min-w-0">
                                                                <h4 className="text-slate-900 font-bold text-lg truncate">{country}</h4>
                                                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Multi-Entity Configuration</p>
                                                            </div>
                                                            <div className="flex items-center gap-5 bg-slate-100 p-2 rounded-xl">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => updateEntityCount(country, formData.countryEntities[country] - 1)}
                                                                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 hover:text-red-500 shadow-sm transition-colors border border-slate-100"
                                                                >
                                                                    <Minus size={20} strokeWidth={3} />
                                                                </button>
                                                                <span className="text-xl font-bold text-slate-900 w-8 text-center">{formData.countryEntities[country]}</span>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => updateEntityCount(country, formData.countryEntities[country] + 1)}
                                                                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 hover:text-blue-600 shadow-sm transition-colors border border-slate-100"
                                                                >
                                                                    <Plus size={20} strokeWidth={3} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {attemptedSubmit && errors.countryEntities && <p className="text-red-400 text-sm font-bold uppercase tracking-widest mt-8 animate-pulse">{errors.countryEntities}</p>}
                                </div>
                            )}

                            {/* STEP 3: SOLUTION ARCHITECT */}
                            {currentStep === 3 && (
                                <div className="animate-in fade-in duration-500 space-y-12">
                                    <div className="max-w-3xl">
                                        <h2 className="text-4xl font-bold text-white mb-4 leading-tight tracking-tight">Solution Architecture</h2>
                                        <p className="text-lg text-slate-400 font-medium">Select the strategic modules required for your enterprise transformation.</p>
                                    </div>

                                    <div className="space-y-14">
                                        {formData.industries && industryModules[formData.industries] && (
                                            <div>
                                                <h3 className="text-sm font-bold uppercase tracking-widest text-pink-500 mb-8 flex items-center gap-3">
                                                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                                                    Tailored for {formData.industries}
                                                </h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {industryModules[formData.industries].map(module => (
                                                        <button
                                                            key={module}
                                                            type="button"
                                                            onClick={() => {
                                                                const list = formData.modules.includes(module) ? formData.modules.filter(m => m !== module) : [...formData.modules, module];
                                                                updateFormData('modules', list);
                                                            }}
                                                            className={`group p-6 rounded-2xl border-2 transition-all flex items-center gap-6 text-left h-full ${formData.modules.includes(module)
                                                                    ? 'bg-blue-600 border-blue-600 shadow-2xl text-white scale-[1.02]'
                                                                    : 'bg-white border-transparent hover:border-slate-300 text-slate-900 shadow-md'
                                                                }`}
                                                        >
                                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all ${formData.modules.includes(module) ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                                                                <Settings size={20} className={formData.modules.includes(module) ? 'text-white' : 'text-slate-600'} />
                                                            </div>
                                                            <span className="text-base font-bold leading-tight">{module}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div>
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8 flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                                                Core Enterprise Modules
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {commonModules.map(module => (
                                                    <button
                                                        key={module}
                                                        type="button"
                                                        onClick={() => {
                                                            const list = formData.modules.includes(module) ? formData.modules.filter(m => m !== module) : [...formData.modules, module];
                                                            updateFormData('modules', list);
                                                        }}
                                                        className={`group p-6 rounded-2xl border-2 transition-all flex items-center gap-5 text-left h-full ${formData.modules.includes(module)
                                                                ? 'bg-indigo-600 border-indigo-600 shadow-2xl text-white scale-[1.02]'
                                                                : 'bg-white border-transparent hover:border-slate-300 text-slate-900 shadow-md'
                                                            }`}
                                                    >
                                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-sm transition-all ${formData.modules.includes(module) ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
                                                            <Check size={18} className={formData.modules.includes(module) ? 'text-white' : 'text-slate-600'} strokeWidth={3} />
                                                        </div>
                                                        <span className="text-sm font-bold leading-tight">{module}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {attemptedSubmit && errors.modules && <p className="text-red-400 text-sm font-bold uppercase tracking-widest mt-8 animate-pulse">{errors.modules}</p>}
                                </div>
                            )}

                            {/* STEP 4: CONTACT */}
                            {currentStep === 4 && (
                                <div className="animate-in fade-in duration-500 space-y-12">
                                    <div className="max-w-3xl">
                                        <h2 className="text-4xl font-bold text-white mb-4 leading-tight tracking-tight">Request Strategic ROI Report</h2>
                                        <p className="text-lg text-slate-400 font-medium">Finalize your profile to receive a comprehensive implementation roadmap and cost projection.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Contact Person Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={e => updateFormData('name', e.target.value)}
                                                placeholder="Ex: Alexander Hamilton"
                                                className="w-full bg-[#1e293b] border-2 border-slate-700 p-5 rounded-xl text-sm font-bold text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Corporate Entity Name</label>
                                            <input
                                                type="text"
                                                value={formData.companyname}
                                                onChange={e => updateFormData('companyname', e.target.value)}
                                                placeholder="Global Enterprises Ltd."
                                                className="w-full bg-[#1e293b] border-2 border-slate-700 p-5 rounded-xl text-sm font-bold text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Verified Business Email</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={e => updateFormData('email', e.target.value)}
                                                placeholder="strategy@company.com"
                                                className="w-full bg-[#1e293b] border-2 border-slate-700 p-5 rounded-xl text-sm font-bold text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Contact Number</label>
                                            <div className="flex bg-[#1e293b] rounded-xl border-2 border-slate-700 overflow-hidden focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                                                <select
                                                    value={formData.countryCode}
                                                    onChange={e => updateFormData('countryCode', e.target.value)}
                                                    className="bg-slate-800 px-4 border-none border-r border-slate-700 outline-none font-bold text-slate-300 text-sm cursor-pointer"
                                                >
                                                    {countryCodes.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                                                </select>
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={e => updateFormData('phone', e.target.value)}
                                                    className="flex-1 bg-transparent p-5 text-sm font-bold text-white outline-none"
                                                    placeholder="Primary number"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Organizational Role</label>
                                            <input
                                                type="text"
                                                value={formData.role}
                                                onChange={e => updateFormData('role', e.target.value)}
                                                placeholder="Ex: Chief Financial Officer"
                                                className="w-full bg-[#1e293b] border-2 border-slate-700 p-5 rounded-xl text-sm font-bold text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Aggregate Annual Revenue</label>
                                            <select
                                                value={formData.revenue}
                                                onChange={e => updateFormData('revenue', e.target.value)}
                                                className="w-full bg-[#1e293b] border-2 border-slate-700 p-5 rounded-xl text-sm font-bold text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="">Choose Scale</option>
                                                {revenueRanges.map(r => <option key={r} value={r}>{r}</option>)}
                                            </select>
                                        </div>
                                        <div className="md:col-span-2 space-y-2.5">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Core Objectives & Goals</label>
                                            <textarea
                                                rows={5}
                                                value={formData.message}
                                                onChange={e => updateFormData('message', e.target.value)}
                                                placeholder="Briefly describe your high-level business goals and implementation timeline..."
                                                className="w-full bg-[#1e293b] border-2 border-slate-700 p-6 rounded-2xl text-sm font-bold text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-600 resize-none shadow-inner"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ACTION FOOTER */}
                        <div className="p-10 border-t border-slate-800 bg-[#020617]/80 backdrop-blur-xl flex items-center justify-between">
                            <button
                                type="button"
                                onClick={prevStep}
                                disabled={currentStep === 1 || submitting}
                                className="group flex items-center gap-3 px-10 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest border-2 border-slate-700 hover:bg-slate-800 transition-all disabled:opacity-20 shadow-md"
                            >
                                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                Previous Step
                            </button>

                            <div className="flex items-center gap-6">
                                {currentStep < totalSteps ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="group flex items-center gap-4 bg-gradient-to-r from-[#FF44EC] to-[#FF675E] text-white px-12 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-pink-500/20 transition-all ring-4 ring-transparent hover:ring-pink-500/10"
                                    >
                                        Continue to Next Phase
                                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="group flex items-center gap-4 bg-gradient-to-r from-[#FF44EC] to-[#FF675E] text-white px-14 py-6 rounded-2xl text-sm font-black uppercase tracking-widest hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-pink-500/30 transition-all disabled:opacity-50 ring-4 ring-transparent hover:ring-pink-500/20"
                                    >
                                        {submitting ? 'Authenticating Data...' : 'Generate Strategic Report'}
                                        <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                                    </button>
                                )}
                            </div>
                        </div>

                    </form>
                </div>
            </main>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      `}</style>
        </div>
    );
};

export default NetSuitePricingCalculator;
