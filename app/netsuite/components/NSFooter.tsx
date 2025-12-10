import Link from 'next/link';

export function NSFooter() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NetSuite Solutions</h3>
            <p className="text-gray-300 text-sm mb-4">
              Enterprise-grade ERP and CRM solutions for modern businesses.
              Scale operations with Oracle NetSuite's powerful cloud platform.
            </p>
            <Link href="/" className="text-orange-400 hover:text-orange-300 text-sm">
              ← Back to Platform Selection
            </Link>
          </div>

          <div>
            <h4 className="font-medium mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/netsuite/solutions/core-erp" className="hover:text-white">Core ERP</Link></li>
              <li><Link href="/netsuite/solutions/customer-management" className="hover:text-white">Customer Management</Link></li>
              <li><Link href="/netsuite/solutions/analytics-intelligence" className="hover:text-white">Analytics & Intelligence</Link></li>
              <li><Link href="/netsuite/solutions/ecommerce" className="hover:text-white">E-commerce</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/netsuite/services/digital-transformation" className="hover:text-white">Digital Transformation</Link></li>
              <li><Link href="/netsuite/services/implementation" className="hover:text-white">Implementation</Link></li>
              <li><Link href="/netsuite/services/integration" className="hover:text-white">Integration</Link></li>
              <li><Link href="/netsuite/services/managed-services" className="hover:text-white">Managed Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact & Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/netsuite/contact/support" className="hover:text-white">Support</Link></li>
              <li><Link href="/netsuite/contact/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/netsuite/contact/request-quote" className="hover:text-white">Request Quote</Link></li>
              <li><Link href="/netsuite/contact/free-consultation" className="hover:text-white">Free Consultation</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 NetSuite Solutions. All rights reserved. | <Link href="/netsuite/insights/awards-achievements" className="hover:text-white">Awards & Achievements</Link></p>
        </div>
      </div>
    </footer>
  );
}
