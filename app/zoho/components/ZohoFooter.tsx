import Link from 'next/link';

export function ZohoFooter() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zoho Solutions</h3>
            <p className="text-gray-300 text-sm mb-4">
              Complete business software suite for modern enterprises.
              Streamline operations, boost productivity, and drive growth.
            </p>
            <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
              ← Back to Platform Selection
            </Link>
          </div>

          <div>
            <h4 className="font-medium mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/zoho/solutions/sales" className="hover:text-white">Sales & CRM</Link></li>
              <li><Link href="/zoho/solutions/hr" className="hover:text-white">HR & People</Link></li>
              <li><Link href="/zoho/solutions/finance" className="hover:text-white">Finance</Link></li>
              <li><Link href="/zoho/solutions/marketing" className="hover:text-white">Marketing</Link></li>
              <li><Link href="/zoho/solutions/analytics" className="hover:text-white">Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/zoho/services/digital-transformation" className="hover:text-white">Digital Transformation</Link></li>
              <li><Link href="/zoho/services/integration-services" className="hover:text-white">Integration Services</Link></li>
              <li><Link href="/zoho/services/training-services" className="hover:text-white">Training</Link></li>
              <li><Link href="/zoho/services/managed-services" className="hover:text-white">Managed Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact & Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/zoho/contact/support" className="hover:text-white">Support</Link></li>
              <li><Link href="/zoho/contact/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/zoho/contact/request-quote" className="hover:text-white">Request Quote</Link></li>
              <li><Link href="/zoho/contact/free-consultation" className="hover:text-white">Free Consultation</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Zoho Solutions. All rights reserved. | <Link href="/zoho/insights/awards-achievements" className="hover:text-white">Awards & Achievements</Link></p>
        </div>
      </div>
    </footer>
  );
}
