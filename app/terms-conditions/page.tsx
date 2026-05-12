import React from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, MapPin } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Hero */}
      <section className="relative py-24 bg-slate-950 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e293b_0%,transparent_70%)] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm font-medium mb-12 text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Terms and Conditions</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Terms and Conditions
          </h1>
          <p className="mt-6 text-slate-400 text-lg max-w-2xl">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 text-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-900 prose-li:text-slate-900">
            
            <h2 className="text-2xl font-bold mt-12 mb-6">Use of This Site</h2>
            <p>You may use this Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations.</li>
              <li>Use the Site in a way that may harm AGSuite Technologies or its users.</li>
              <li>Attempt to gain unauthorized access to any part of the Site.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-16 mb-6">Intellectual Property</h2>
            <p>
              All content, including text, graphics, branding, logos, icons, images, and software, is the intellectual property of AGSuite Technologies or its licensors. Reproduction, distribution, or republication of content without written permission is strictly prohibited.
            </p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Information Accuracy</h2>
            <p>
              While we strive to ensure the information on the Site is accurate and current, we do not guarantee the completeness, accuracy, or reliability of the content. Content is provided “as is” and may be updated or removed without notice.
            </p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites. These are provided for convenience only, and we do not endorse or assume responsibility for the content, policies, or practices of such third parties.
            </p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Data Privacy & Protection</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">a. General</h3>
                <p>Your use of the Site is also governed by our <Link href="/privacy-policy" className="text-blue-600 font-semibold hover:underline">Privacy Policy</Link>, which explains how we collect, use, and protect your personal data.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">b. GDPR Compliance (EU Visitors)</h3>
                <p>If you are located in the European Economic Area (EEA), we process your personal data in accordance with the General Data Protection Regulation (GDPR). You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access or correct your data.</li>
                  <li>Request data deletion (“right to be forgotten”).</li>
                  <li>Restrict or object to data processing.</li>
                  <li>File a complaint with a data protection authority.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">c. CCPA Compliance (California Residents)</h3>
                <p>Under the California Consumer Privacy Act (CCPA), California residents may:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to the categories and specific pieces of personal information we collect.</li>
                  <li>Request deletion of personal information.</li>
                  <li>Opt out of the sale of personal information (we do not sell user data).</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 flex items-center gap-2">
              You can exercise your data rights by contacting us at 
              <a href="mailto:privacy@agsuitetech.com" className="text-blue-600 font-semibold hover:underline">privacy@agsuitetech.com</a>.
            </p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to improve user experience and for analytical purposes. By using the Site, you consent to our use of cookies, as outlined in our <Link href="/cookie-policy" className="text-blue-600 font-semibold hover:underline">Cookie Policy</Link>.
            </p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, AGSuite Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising out of your access to or use of the Site.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Disclaimer</h2>
            <p>The Site and its content are provided on an “as-is” basis without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to fitness for a particular purpose and non-infringement.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Termination</h2>
            <p>We reserve the right to restrict or terminate access to the Site for any user who violates these Terms, without notice.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Modifications to These Terms</h2>
            <p>We may revise these Terms & Conditions at any time by updating this page. Continued use of the Site after such changes constitutes acceptance of the updated terms.</p>

            <h2 className="text-2xl font-bold mt-16 mb-6">Governing Law</h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of courts in Pune, Maharashtra.</p>

            <div className="mt-20 p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h2 className="text-2xl font-bold mb-6 !mt-0">Contact Us</h2>
              <div className="space-y-4 text-slate-900">
                <p>For questions, complaints, or legal inquiries, please contact:</p>
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




