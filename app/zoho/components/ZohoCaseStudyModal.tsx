"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import IntlTelInput from "@intl-tel-input/react/with-utils";
import "intl-tel-input/styles";

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  company: string;
  industry: string;
  recipientEmail: string;
}

interface ZohoCaseStudyModalProps {
  isOpen: boolean;
  selectedStudy: CaseStudy | null;
  closeModal: () => void;
}

export default function ZohoCaseStudyModal({
  isOpen,
  selectedStudy,
  closeModal,
}: ZohoCaseStudyModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    "Last Name": "",
    Designation: "",
    Mobile: "",
    Email: "",
    Company: "",
    countryCode: "",
  });
  const [isMobileValid, setIsMobileValid] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "Mobile") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digits }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isMobileValid) {
      alert("Please enter a valid mobile number.");
      return;
    }

    const response = await fetch("/api/contact/case-study", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        Mobile: formData.Mobile,
        caseStudyTitle: selectedStudy?.title,
        caseStudyId: selectedStudy?.id,
        recipientEmail: selectedStudy?.recipientEmail,
        platform: "Zoho",
      }),
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-full max-w-md bg-white rounded-3xl shadow-2xl z-[1001] overflow-y-auto max-h-[90vh]"
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-black/20 rounded-full text-white transition-colors z-10"
                suppressHydrationWarning
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#001f5c] to-[#0a0a0a] p-6 text-white">
                <h2 className="text-xl font-bold mb-2 pr-8 leading-tight">
                  Access Zoho Case Study
                </h2>
                <p className="text-blue-100/90 text-sm pr-4">
                  {selectedStudy?.title}
                </p>
              </div>

              {/* Modal Body (Form / Success) */}
              <div className="p-6 md:p-8 text-left text-slate-800">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-slate-600">
                      Your request has been received. We'll send the case study
                      to your email shortly.
                    </p>
                    <button
                      onClick={closeModal}
                      className="mt-8 px-8 py-3 bg-[#001f5c] text-white font-bold rounded-xl hover:bg-black transition-colors"
                      suppressHydrationWarning
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="Last Name"
                          required
                          value={formData["Last Name"]}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          placeholder="John Doe"
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Designation *
                        </label>
                        <input
                          type="text"
                          name="Designation"
                          required
                          value={formData["Designation"]}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          placeholder="Manager"
                          suppressHydrationWarning
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile *
                      </label>
                      <div className="w-full text-slate-900">
                        <IntlTelInput
                          value={formData.Mobile}
                          onChangeNumber={(val) => {
                            setFormData((prev) => ({ ...prev, Mobile: val }));
                          }}
                          onChangeValidity={(isValid) => {
                            setIsMobileValid(isValid);
                          }}
                          initialCountry="in"
                          separateDialCode={true}
                          strictMode={true}
                          countryOrder={["in", "us", "gb", "ae"]}
                          inputProps={{
                            className:
                              "w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition-all text-sm",
                            placeholder: "Enter mobile number",
                            required: true,
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          name="Email"
                          required
                          value={formData["Email"]}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          placeholder="john@company.com"
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company *
                        </label>
                        <input
                          type="text"
                          name="Company"
                          required
                          value={formData["Company"]}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                          placeholder="Company Name"
                          suppressHydrationWarning
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#001f5c] to-[#0a0a0a] text-white font-bold rounded-xl hover:shadow-lg transition-all mt-4"
                      suppressHydrationWarning
                    >
                      Get Case Study
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .iti { display: block !important; width: 100% !important; }
                .iti__country-list { color: #000000 !important; }
              `,
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
