import React from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Header/Hero */}
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e293b_0%,transparent_70%)] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm font-medium mb-12 text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl">
            We value your trust. This policy outlines how we handle your data with transparency and care.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-900 prose-li:text-slate-900 text-slate-900">
            
            <h2 className="text-2xl font-bold mt-12 mb-6">Information We Collect</h2>
            <p>We may collect the following categories of personal and non-personal information:</p>
            
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">a. Information You Provide Voluntarily</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, phone number, company name</li>
                  <li>Any other information you submit through our contact forms or service inquiries</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">b. Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited, time spent on the Site, and referring URL</li>
                  <li>Cookies and tracking technologies (see Cookie Policy)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-16 mb-6">How We Use Your Information</h2>
            <p>We may use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries and provide services</li>
              <li>Improve website performance and user experience</li>
              <li>Send service updates, newsletters, or marketing communications</li>
              <li>Ensure legal and regulatory compliance</li>
            </ul>

            <h2 className="text-2xl font-bold mt-16 mb-6">Legal Basis for Processing (GDPR)</h2>
            <p>For users from the EU/EEA, we process your personal data under the following lawful bases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> When you subscribe or fill out forms</li>
              <li><strong>Contractual necessity:</strong> To respond to service inquiries or requests</li>
              <li><strong>Legitimate interest:</strong> To enhance our services and secure our website</li>
              <li><strong>Legal obligation:</strong> To comply with laws or enforce agreements</li>
            </ul>

            <h2 className="text-2xl font-bold mt-16 mb-6">Your Rights (GDPR & CCPA)</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Correct or update your data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict data processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with your data protection authority</li>
            </ul>
            <p className="mt-6 flex items-center gap-2">
              To exercise your rights, please email us at 
              <a href="mailto:privacy@agsuitetech.com" className="text-blue-600 font-semibold hover:underline">privacy@agsuitetech.com</a>
            </p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Cookies & Tracking</h2>
            <p>
              We use cookies to enhance site navigation, analyze site usage, and assist in marketing. You can manage your cookie preferences in your browser settings. For more details, see our <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.
            </p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Data Sharing & Disclosure</h2>
            <p>We do not sell your personal information. We may share it only with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trusted service providers and partners under confidentiality agreements</li>
              <li>Law enforcement or government authorities when legally required</li>
              <li>Third parties in connection with a business transaction (e.g., merger or acquisition)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-16 mb-6">Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfill the purposes described in this policy or as required by law.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Security of Your Data</h2>
            <p>We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">International Data Transfers</h2>
            <p>If you are located outside India, your data may be transferred to and processed in India or other jurisdictions where we or our service providers operate. We ensure adequate safeguards in such cases.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Third-Party Links</h2>
            <p>Our Site may contain links to third-party websites. We are not responsible for their content, privacy practices, or terms.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Children’s Privacy</h2>
            <p>Our services are not intended for children under the age of 16. We do not knowingly collect personal information from minors.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised ‘Effective Date.’</p>

            <div className="mt-20 p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h2 className="text-2xl font-bold mb-6 !mt-0">Contact Us</h2>
              <div className="space-y-4">
                <p className="font-bold text-slate-900">AGSuite Technologies Pvt. Ltd.</p>
                <div className="flex items-center gap-3 text-slate-900">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:contact@agsuitetech.com" className="hover:text-blue-600 transition-colors">contact@agsuitetech.com</a>
                </div>
                <div className="flex items-start gap-3 text-slate-900">
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
