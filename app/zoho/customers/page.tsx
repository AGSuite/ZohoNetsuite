import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Handshake } from "lucide-react";
import ZohoCustomersSection from "../components/ZohoCustomersSection";

export const metadata: Metadata = {
  title: "Our Customers | AGSuite Technologies Zoho Partner",
  description: "Meet the businesses that trust AGSuite Technologies for Zoho consulting, implementation, customization, and integration services.",
  alternates: { canonical: "/zoho/customers" },
};

export default function ZohoCustomersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#071d49] to-[#0033ad] px-6 pb-20 pt-36 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(37,99,235,0.35),transparent_38%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm font-medium text-blue-200">
            <Link href="/zoho" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <Link href="/zoho/about-us" className="transition-colors hover:text-white">About Us</Link>
            <ChevronRight className="h-4 w-4 text-white/40" />
            <span className="text-white">Our Customers</span>
          </nav>
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">
              <Handshake className="h-4 w-4" />
              Trusted Partnerships
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Our Customers</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/90">
              We help ambitious organizations transform their operations with tailored Zoho solutions and long-term technology partnerships.
            </p>
          </div>
        </div>
      </section>
      <ZohoCustomersSection />
    </>
  );
}
