"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const netsuiteFaqs = [
  {
    q: "What is Oracle NetSuite ERP?",
    a: "Oracle NetSuite ERP is a cloud-native business management suite that unifies financials, inventory, supply chain, CRM, HR, and eCommerce into a single real-time platform — eliminating data silos and giving leadership full visibility across every function.",
  },
  {
    q: "How does NetSuite ERP help reduce operational costs?",
    a: "NetSuite automates manual, error-prone processes like invoice matching, purchase approvals, financial reconciliation, and inventory replenishment — cutting administrative overhead and freeing your team to focus on high-value work.",
  },
  {
    q: "Is NetSuite ERP suitable for mid-sized and growing businesses?",
    a: "Yes. NetSuite is purpose-built for scale — from 10-person startups to multi-entity global enterprises. Its modular architecture means you only activate and pay for what you need today, then expand seamlessly as your business grows.",
  },
  {
    q: "How long does a NetSuite ERP implementation take?",
    a: "A typical NetSuite ERP implementation takes 3 to 6 months depending on the complexity, number of modules, data migration scope, and integrations required. AGSuite follows a structured SuiteSuccess methodology to keep timelines predictable.",
  },
  {
    q: "Can NetSuite ERP integrate with our existing tools?",
    a: "Absolutely. NetSuite connects via native connectors and REST/SOAP APIs to platforms like Salesforce, Shopify, WooCommerce, ADP, Microsoft 365, and hundreds more — ensuring your entire tech stack works as one.",
  },
  {
    q: "How secure is NetSuite for sensitive business data?",
    a: "NetSuite maintains enterprise-grade security including 256-bit data encryption, role-based access control, multi-factor authentication, SOC 1 & 2 compliance, and 99.98% uptime SLAs — all hosted on Oracle's global cloud infrastructure.",
  },
  {
    q: "Can we migrate from our legacy ERP to NetSuite?",
    a: "Yes. AGSuite Technologies provides full data migration services — mapping, cleansing, and validating your historical data from ERPs like SAP, Microsoft Dynamics, QuickBooks, or custom systems — ensuring zero data loss.",
  },
  {
    q: "What ongoing support does AGSuite provide after go-live?",
    a: "We offer dedicated post-implementation support including system health monitoring, user training, customisation requests, module upgrades, and a priority helpdesk — ensuring your NetSuite environment continues to perform as your business evolves.",
  },
];

const zohoFaqs = [
  {
    q: "What is Zoho One?",
    a: "Zoho One is an all-in-one suite of 45+ integrated business applications designed to manage every aspect of your business from one platform.",
  },
  {
    q: "Can Zoho be customized for my business needs?",
    a: "Yes. Zoho apps are highly customizable — AGSuite can tailor forms, workflows, and automation to your exact business requirements.",
  },
  {
    q: "Is Zoho CRM suitable for large enterprises?",
    a: "Absolutely. Zoho CRM scales from startups to large organizations with features like AI insights, advanced analytics, and automation.",
  },
  {
    q: "Does Zoho integrate with third-party tools?",
    a: "Yes. Zoho offers strong API support and built-in integrations for tools like Google Workspace, Microsoft 365, Slack, and more.",
  },
  {
    q: "What type of support does AGSuite provide for Zoho?",
    a: "We provide setup, migration, customization, automation, and training for Zoho solutions to ensure maximum ROI.",
  },
  {
    q: "Is Zoho secure for sensitive business data?",
    a: "Yes. Zoho maintains strict security standards with data encryption, multi-factor authentication, and GDPR compliance.",
  },
  {
    q: "Can I migrate from another CRM to Zoho CRM?",
    a: "Yes, AGSuite helps businesses migrate from Salesforce, HubSpot, or other CRMs to Zoho with minimal disruption.",
  },
];

interface FAQProps {
  variant?: "zoho" | "netsuite";
}

export const FAQ = ({ variant }: FAQProps) => {
  const [activeCategory, setActiveCategory] = useState<"zoho" | "netsuite">(
    variant || "netsuite"
  );
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const faqs = activeCategory === "zoho" ? zohoFaqs : netsuiteFaqs;

  const toggle = (idx: number) => {
    setOpenItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="w-full relative text-gray-800 bg-white">
      <section className="py-16 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sidebar - Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <aside className="p-8 rounded-2xl bg-blue-50/70 border border-blue-100 shadow-sm">
              <div className="space-y-5">
                {/* Blue accent bar */}
                <div className="w-10 h-1 bg-blue-600 rounded-full" />

                <h2 className="text-4xl md:text-5xl font-medium leading-tight text-gray-900">
                  Frequently <br />
                  Asked{" "}
                  <span className="text-blue-600">Questions</span>
                </h2>

                <p className="text-gray-500 leading-relaxed text-sm">
                  {variant
                    ? variant === "zoho"
                      ? "Find answers to common questions about Zoho solutions and how AGSuite can help."
                      : "Everything you need to know about NetSuite ERP — from pricing and licensing to implementation and long-term support."
                    : "Choose between Oracle NetSuite or Zoho to explore FAQs tailored for each solution."}
                </p>

                {/* Filter Buttons — only shown when no variant is locked */}
                {!variant && (
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => {
                        setActiveCategory("netsuite");
                        setOpenItems({});
                      }}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === "netsuite"
                          ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                          : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600"
                        }`}
                    >
                      NetSuite
                    </button>
                    <button
                      onClick={() => {
                        setActiveCategory("zoho");
                        setOpenItems({});
                      }}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === "zoho"
                          ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                          : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600"
                        }`}
                    >
                      Zoho
                    </button>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* FAQ Accordion List */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openItems[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className={`rounded-xl border transition-all duration-300 ${isOpen
                      ? "bg-white border-blue-300 shadow-md shadow-blue-100"
                      : "bg-white border-gray-100 hover:border-blue-200 hover:shadow-sm"
                    }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    suppressHydrationWarning
                    className="flex justify-between items-center w-full px-6 py-5 text-left group"
                  >
                    <span
                      className={`text-base md:text-lg font-semibold transition-colors pr-4 ${isOpen
                          ? "text-blue-700"
                          : "text-gray-800 group-hover:text-blue-600"
                        }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                          ? "bg-blue-600 text-white rotate-180"
                          : "bg-blue-50 text-blue-400 group-hover:bg-blue-100"
                        }`}
                    >
                      <FaChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                        ? "max-h-96 opacity-100 pb-5 px-6"
                        : "max-h-0 opacity-0 px-6"
                      }`}
                  >
                    <div className="w-full h-px bg-blue-100 mb-4" />
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
