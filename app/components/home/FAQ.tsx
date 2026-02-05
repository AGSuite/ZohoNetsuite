"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const netsuiteFaqs = [
  {
    q: "What is Oracle NetSuite ERP?",
    a: "Oracle NetSuite ERP is a cloud-based business management platform that automates financials, operations, and customer management—all in one system.",
  },
  {
    q: "How can NetSuite improve business efficiency?",
    a: "NetSuite streamlines core processes like accounting, inventory, CRM, and eCommerce, enabling real-time insights and faster decision-making.",
  },
  {
    q: "Is NetSuite suitable for small and medium businesses?",
    a: "Yes. NetSuite offers scalable ERP modules that adapt to the growth and complexity of any business size.",
  },
  {
    q: "How secure is Oracle NetSuite?",
    a: "NetSuite follows enterprise-grade security with encrypted data, regular audits, and multi-layer protection at the application and infrastructure level.",
  },
  {
    q: "Can NetSuite integrate with other systems?",
    a: "Yes. NetSuite supports APIs and connectors that allow smooth integration with CRM, HR, or third-party business tools.",
  },
  {
    q: "What kind of support does AGSuite Technologies offer?",
    a: "We provide complete implementation, customization, migration, and 24/7 support for Oracle NetSuite ERP.",
  },
  {
    q: "How long does NetSuite implementation take?",
    a: "Implementation duration depends on business size and customization needs. On average, it takes between 3 to 6 months.",
  },
  {
    q: "Can I migrate from my old ERP to NetSuite?",
    a: "Absolutely. AGSuite ensures smooth migration from legacy systems with minimal downtime and full data integrity.",
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
  // If variant is provided, initialize activeCategory with it; otherwise default to "netsuite"
  const [activeCategory, setActiveCategory] = useState<"zoho" | "netsuite">(
    variant || "netsuite"
  );
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const faqs = activeCategory === "zoho" ? zohoFaqs : netsuiteFaqs;

  const toggle = (idx: number) => {
    setOpenItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="w-full relative text-gray-800 bg-linear-to-br from-gray-100 via-white to-gray-100">
      <section className="py-16 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sidebar - Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <aside className="p-8 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg transition-shadow">
              <div className="space-y-6">
                <h2 className="text-5xl font-medium leading-tight text-gray-900">
                  Frequently Asked <br />
                  <span className="text-rose-600">Questions</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {variant
                    ? variant === "zoho"
                      ? "Find answers to common questions about Zoho solutions."
                      : "Find answers to common questions about Oracle NetSuite."
                    : "Choose between Oracle NetSuite or Zoho to explore FAQs tailored for each solution."}
                </p>

                {/* Filter Buttons - Only show if no variant is specified */}
                {!variant && (
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => {
                        setActiveCategory("netsuite");
                        setOpenItems({});
                      }}
                      className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === "netsuite"
                          ? "bg-linear-to-r from-red-600 to-red-800 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                      NetSuite
                    </button>
                    <button
                      onClick={() => {
                        setActiveCategory("zoho");
                        setOpenItems({});
                      }}
                      className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === "zoho"
                          ? "bg-linear-to-r from-rose-600 to-pink-700 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                      Zoho
                    </button>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* FAQ List */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openItems[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300"
                >
                  <button
                    onClick={() => toggle(idx)}
                    suppressHydrationWarning
                    className="flex justify-between items-center w-full px-6 py-5 text-left group"
                  >
                    <span className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-rose-600 transition-colors">
                      {faq.q}
                    </span>
                    <div
                      className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-600" : "text-gray-500"
                        }`}
                    >
                      <FaChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100 py-4 px-6" : "max-h-0 opacity-0 px-6"
                      }`}
                  >
                    <p className="text-gray-700 leading-relaxed pt-0 pb-4">
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
