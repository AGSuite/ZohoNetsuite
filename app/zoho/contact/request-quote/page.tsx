"use client";

import React from "react";
import SubHero from "../components/SubHero";
import ContactFormZoho from "../../components/ContactFormZoho";
import { CheckCircle } from "lucide-react";

export default function ZohoRequestQuote() {
  return (
    <div className="min-h-screen bg-white">
      <SubHero
        title="Get a Custom"
        gradientText="Zoho Quote"
        subtitle="Transform your business with the right Zoho plan. Share your requirements for a detailed price estimate."
        breadcrumb="Request Quote"
      />

      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 font-serif">Tailored Pricing</h2>
          <ul className="space-y-6">
            {[
              {
                title: "Module Selection",
                desc: "Pay only for what you need with Zoho's flexible application model."
              },
              {
                title: "Implementation Roadmap",
                desc: "No hidden costs. Clear milestones and transparent billing."
              },
              {
                title: "Consultancy Included",
                desc: "Our quotes include expert advice on optimizing your Zoho environment."
              }
            ].map((item, i) => (
              <li key={i} className="flex gap-4 group">
                <div className="mt-1 transition-transform group-hover:scale-110">
                  <CheckCircle size={28} className="text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <ContactFormZoho />
        </div>
      </section>
    </div>
  );
}
