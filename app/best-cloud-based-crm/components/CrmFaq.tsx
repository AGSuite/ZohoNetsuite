"use client";

import React from "react";
import { FAQ } from "@/app/components/home/FAQ";
import { getZohoProductFaqs } from "@/app/zoho/data/zohoProductFaqs";

export default function CrmFaq() {
  const productFaqs = getZohoProductFaqs("Zoho CRM — Modern Customer Relationship Management");

  return (
    <section id="faq" className="scroll-mt-20">
      <FAQ variant="zoho" layout="sidebar" customFaqs={productFaqs || undefined} />
    </section>
  );
}
