import Link from 'next/link';
import { NSHero } from './components/NSHero';
import dynamic from 'next/dynamic';

const NSCard = dynamic(() => import('./components/NSCard').then(mod => mod.NSCard));
const NSMetrics = dynamic(() => import('./components/NSMetrics')); 
import NSDashboardHero from './components/NSDashboardHero';

const Features = dynamic(() => import('../components/home/Features').then(mod => mod.Features));
const WhyChooseUs = dynamic(() => import('../components/home/WhyChooseUs').then(mod => mod.WhyChooseUs));
const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('../components/home/FAQ').then(mod => mod.FAQ));
const CTA = dynamic(() => import('../components/home/CTA').then(mod => mod.CTA));
const BlogSection = dynamic(() => import('../components/home/BlogSection').then(mod => mod.BlogSection));

export default function NetSuitePage() {
  return (
    <div>
      <NSHero
        title="NetSuite Solutions"
        subtitle="Enterprise ERP & CRM Platform"
        description="Transform your enterprise with Oracle NetSuite's comprehensive cloud platform. Streamline operations, gain real-time insights, and scale your business with integrated ERP, CRM, and e-commerce solutions designed for growing enterprises."
        ctaText="Explore Solutions"
        ctaHref="/netsuite/solutions"
      />

      <NSMetrics />

      <NSDashboardHero />

      {/* Key Solutions Grid (Existing) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core NetSuite Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover powerful enterprise solutions that drive growth and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NSCard
              title="Core ERP"
              description="Complete enterprise resource planning with financial management, inventory control, and order processing."
              icon="🏢"
              href="/netsuite/solutions/core-erp"
            />
            <NSCard
              title="Customer Management"
              description="Advanced CRM with sales automation, customer service, and marketing tools for better customer relationships."
              icon="🤝"
              href="/netsuite/solutions/customer-management"
            />
            <NSCard
              title="Analytics & Intelligence"
              description="Real-time business intelligence with advanced analytics, dashboards, and AI-powered insights."
              icon="📊"
              href="/netsuite/solutions/analytics-intelligence"
            />
            <NSCard
              title="E-commerce"
              description="Integrated online store management with order fulfillment, payment processing, and customer experience tools."
              icon="🛒"
              href="/netsuite/solutions/ecommerce"
            />
            <NSCard
              title="Project Management"
              description="Comprehensive project planning, resource allocation, and time tracking for professional services."
              icon="📋"
              href="/netsuite/solutions/project-management"
            />
            <NSCard
              title="SuiteSuccess"
              description="Dedicated customer success program with personalized support, training, and optimization services."
              icon="⭐"
              href="/netsuite/solutions/specialized-solutions/suitesuccess"
            />
          </div>
           <div className="mt-12 text-center">
            <Link href="/netsuite/solutions" className="text-orange-600 font-semibold hover:text-orange-800 text-lg">
              View All NetSuite Solutions &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Features
        title="Why Enterprises Choose NetSuite"
        subtitle="The unified business management suite"
        features={[
          {
            title: "Real-Time Visibility",
            description: "Gain a complete, real-time view of your business performance across all departments from a single dashboard.",
            icon: "👁️"
          },
          {
            title: "Scalability for Growth",
            description: "A platform that grows with you, from startup to enterprise, supporting international expansion seamlessly.",
            icon: "📈"
          },
          {
            title: "Built-in Best Practices",
            description: "Leverage industry-specific best practices (SuiteSuccess) to go live faster and get value sooner.",
            icon: "🏆"
          },
        ]}
      />

       {/* Services Grid */}
       <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our NetSuite Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
               AGSuite provides expert consulting and implementation to ensure your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <Link href="/netsuite/services/digital-transformation" className="block group">
              <div className="p-8 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors text-center h-full">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600">Digital Transformation</h3>
                <p className="text-sm text-gray-600">Strategic Modernization</p>
              </div>
            </Link>
             <Link href="/netsuite/services/implementation" className="block group">
              <div className="p-8 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors text-center h-full">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600">Implementation</h3>
                <p className="text-sm text-gray-600">Expert Deployment</p>
              </div>
            </Link>
             <Link href="/netsuite/services/integration" className="block group">
              <div className="p-8 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors text-center h-full">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600">Integration</h3>
                <p className="text-sm text-gray-600">Connect Systems</p>
              </div>
            </Link>
             <Link href="/netsuite/services/managed-services" className="block group">
              <div className="p-8 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors text-center h-full">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600">Managed Services</h3>
                <p className="text-sm text-gray-600">Optimization & Support</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs
        title="Why Partner with AGSuite for NetSuite?"
        items={[
          { title: "Solution Provider", description: "Official NetSuite Solution Provider with deep expertise.", icon: "🏅" },
          { title: "Industry Experts", description: "Specialized knowledge in manufacturing, retail, and services.", icon: "🏭" },
          { title: "Proven Track Record", description: "Successfully delivered complex implementations globally.", icon: "🌏" },
          { title: "Agile Approach", description: "Flexible and iterative implementation methodology.", icon: "🔄" },
        ]}
      />

      <Testimonials
        testimonials={[
          {
            quote: "NetSuite gave us the visibility we needed to expand internationally. AGSuite's team made the transition seamless.",
            author: "David L.",
            role: "COO",
            company: "Global Logistics",
          },
          {
            quote: "The financial reporting capabilities are unmatched. We closed our books in half the time.",
            author: "Jennifer K.",
            role: "CFO",
            company: "Manufacturing Corp",
          },
           {
            quote: "AGSuite's customization of NetSuite perfectly fit our unique workflow needs.",
            author: "Robert M.",
            role: "CTO",
            company: "Service Pro",
          },
        ]}
      />
      
      <BlogSection 
        title="NetSuite Insights" 
        viewAllHref="/netsuite/insights/blogs"
        posts={[
            { title: "NetSuite Use Cases for Manufacturing", excerpt: "How discrete and process manufacturers leverage NetSuite for efficiency.", date: "Oct 12, 2025", image: "/images/netsuiteimages/background/netsuitebg.webp", href: "/netsuite/insights/blogs/manufacturing-use-cases" },
            { title: "Preparing for ERP Implementation", excerpt: "Key steps to ensure your NetSuite implementation project is a success.", date: "Sep 25, 2025", image: "/images/netsuiteimages/background/netsuitebg.webp", href: "/netsuite/insights/blogs/erp-prep-guide" },
            { title: "NetSuite 2025.2 Release Notes", excerpt: "An overview of the exciting new features in the latest NetSuite update.", date: "Sep 10, 2025", image: "/images/netsuiteimages/background/netsuitebg.webp", href: "/netsuite/insights/blogs/release-notes-2025-2" }
        ]}
      />

      <FAQ
        items={[
          { question: "Is NetSuite suitable for small businesses?", answer: "Yes, NetSuite is modular. You can start with the basics (Financials/CRM) and add more modules as you grow." },
          { question: "Can I migrate my data from QuickBooks?", answer: "Yes, we specialize in migrating historical data from QuickBooks, Xero, and other legacy systems to NetSuite." },
          { question: "What industries do you support?", answer: "We have deep expertise in Manufacturing, Retail, Wholesale Distribution, Software/Tech, and Professional Services." },
           { question: "How is NetSuite priced?", answer: "NetSuite pricing is subscription-based, depending on the number of users and modules. Contact us for a custom quote." },
        ]}
      />

      <CTA
        title="Scale with the World's #1 Cloud ERP"
        description="Schedule a demo to see how NetSuite can streamline your business operations."
        primaryBtnText="Request NetSuite Demo"
        primaryBtnHref="/netsuite/contact/request-quote"
        secondaryBtnText="Contact Sales"
        secondaryBtnHref="/netsuite/contact/support"
        variant="orange"
      />
    </div>
  );
}
