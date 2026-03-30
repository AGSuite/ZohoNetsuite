import React from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, MapPin, Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Hero */}
      <section className="relative py-24 bg-slate-950 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e293b_0%,transparent_70%)] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm font-medium mb-12 text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Cookie Policy</span>
          </nav>
          <div className="flex items-center gap-4 mb-6">
            <Cookie className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Cookie Policy
            </h1>
          </div>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl">
            This policy explaining how we use cookies to improve your digital experience.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 text-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-900 prose-li:text-slate-900">
            
            <h2 className="text-2xl font-bold mt-12 mb-6">What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help improve your browsing experience by remembering preferences, enabling functionalities, and analyzing site performance.
            </p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Essential Cookies</h3>
                <p className="text-sm">Necessary for the website to function properly. These cannot be disabled.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Performance Cookies</h3>
                <p className="text-sm">Help us understand how visitors interact with our website by collecting anonymous data.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Functional Cookies</h3>
                <p className="text-sm">Remember user choices and preferences to provide more personalized features.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Targeting/Marketing Cookies</h3>
                <p className="text-sm">Track usage for personalized advertising and measuring marketing performance.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-16 mb-6">Third-Party Cookies</h2>
            <p>
              We may use third-party tools (e.g., Google Analytics, Facebook Pixel) that set cookies. These are governed by their own privacy policies.
            </p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Your Cookie Choices</h2>
            <p>You can manage your preferences through the following options:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adjust your browser settings to block or delete cookies.</li>
              <li>Opt out of third-party cookies (e.g., via Google Ad Settings).</li>
              <li>Use our cookie consent banner to manage preferences.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-16 mb-6">Cookie Retention</h2>
            <p>Session cookies are deleted when the browser closes. Persistent cookies remain until expired or manually deleted.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Do Not Track (DNT) Signals</h2>
            <p>Our Site currently does not respond to Do Not Track signals.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Changes to This Cookie Policy</h2>
            <p>We may update this policy periodically. Updates will be reflected with a new ‘Effective Date’ on this page.</p>

            <div className="mt-20 p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h2 className="text-2xl font-bold mb-6 !mt-0">Contact Us</h2>
              <div className="space-y-4 text-slate-900">
                <p className="font-bold text-slate-900">AGSuite Technologies Pvt. Ltd.</p>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:contact@agsuitetech.com" className="hover:text-blue-600 transition-colors">contact@agsuitetech.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <span>
                    AGSuite Technologies Pvt. Ltd.,<br />
                    Office No. 1110, 11th floor, Gera’s Imperium Rise,<br />
                    Hinjewadi Rajiv Gandhi Infotech Park,<br />
                    Hinjewadi, Pune, Maharashtra, INDIA – 411057.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
