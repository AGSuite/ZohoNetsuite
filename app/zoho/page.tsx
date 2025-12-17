import Link from 'next/link';
import { ZohoHero } from './components/ZohoHero';
import dynamic from 'next/dynamic';

const ZohoCard = dynamic(() => import('./components/ZohoCard').then(mod => mod.ZohoCard));
const ZohoMetrics = dynamic(() => import('./components/ZohoMetrics')); 
import ZohoDashboardHero from './components/ZohoDashboardHero';

const Features = dynamic(() => import('../components/home/Features').then(mod => mod.Features));
const WhyChooseUs = dynamic(() => import('../components/home/WhyChooseUs').then(mod => mod.WhyChooseUs));
const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('../components/home/FAQ').then(mod => mod.FAQ));
const CTA = dynamic(() => import('../components/home/CTA').then(mod => mod.CTA));
const BlogSection = dynamic(() => import('../components/home/BlogSection').then(mod => mod.BlogSection));

export default function ZohoPage() {
  return (
    <div>
      <ZohoHero
        title="Zoho Solutions"
        subtitle="Complete Business Software Suite"
        description="Transform your business with Zoho's integrated suite of applications. From CRM and HR to finance and marketing, streamline operations and boost productivity with powerful, easy-to-use tools designed for modern businesses."
        ctaText="Explore Solutions"
        ctaHref="/zoho/solutions"
      />

      <ZohoMetrics />

      <ZohoDashboardHero />

      {/* Key Solutions Grid (Existing) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Zoho Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most powerful business applications that drive growth and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ZohoCard
              title="Zoho CRM"
              description="Complete customer relationship management solution with sales automation, marketing campaigns, and customer support."
              icon="🎯"
              href="/zoho/solutions/sales/zoho-crm"
            />
            <ZohoCard
              title="Zoho People"
              description="Comprehensive HR management system for employee lifecycle, payroll, and workforce analytics."
              icon="👥"
              href="/zoho/solutions/hr/zoho-people"
            />
            <ZohoCard
              title="Zoho Books"
              description="Cloud-based accounting software for invoicing, expense tracking, and financial reporting."
              icon="📊"
              href="/zoho/solutions/finance/zoho-books"
            />
            <ZohoCard
              title="Zoho Projects"
              description="Project management tool with time tracking, resource allocation, and collaboration features."
              icon="📋"
              href="/zoho/solutions/projects/zoho-projects"
            />
            <ZohoCard
              title="Zoho Desk"
              description="Customer support ticketing system with multi-channel support and automation capabilities."
              icon="🎫"
              href="/zoho/solutions/service/zoho-desk"
            />
            <ZohoCard
              title="Zoho Analytics"
              description="Business intelligence platform for data visualization, dashboards, and advanced analytics."
              icon="📈"
              href="/zoho/solutions/analytics/zoho-analytics"
            />
          </div>
           <div className="mt-12 text-center">
            <Link href="/zoho/solutions" className="text-blue-600 font-semibold hover:text-blue-800 text-lg">
              View All Zoho Solutions &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Features
        title="Why Companies Choose Zoho"
        subtitle="The operating system for business"
        features={[
          {
            title: "Unified Ecosystem",
            description: "Seamlessly integrated applications that share data and processes, eliminating silos and manual entry.",
            icon: "🔄"
          },
          {
            title: "AI-Powered Intelligence",
            description: "Zia, Zoho's AI, provides predictive insights, automates tasks, and helps you make smarter decisions.",
            icon: "🧠"
          },
          {
            title: "Customizable & Scalable",
            description: "Low-code platforms allow you to build custom apps and scale as your business grows without limit.",
            icon: "⚙️"
          },
        ]}
      />

       {/* Services Grid (Keeping existing structure for Services but refined) */}
       <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Zoho Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
               As a Zoho Advanced Partner, AGSuite provides end-to-end implementation and support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <Link href="/zoho/services/digital-transformation" className="block group">
              <div className="p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors text-center h-full">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600">Digital Transformation</h3>
                <p className="text-sm text-gray-600">Modernize operations</p>
              </div>
            </Link>
             <Link href="/zoho/services/implementation" className="block group">
              <div className="p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors text-center h-full">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600">Implementation</h3>
                <p className="text-sm text-gray-600">Setup & Configuration</p>
              </div>
            </Link>
             <Link href="/zoho/services/training-services" className="block group">
              <div className="p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors text-center h-full">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600">Training</h3>
                <p className="text-sm text-gray-600">Empower your team</p>
              </div>
            </Link>
             <Link href="/zoho/services/managed-services" className="block group">
              <div className="p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors text-center h-full">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600">Managed Services</h3>
                <p className="text-sm text-gray-600">Ongoing Support</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs
        title="Why Partner with AGSuite for Zoho?"
        items={[
          { title: "Advanced Partner", description: "Top-tier certified partner with direct access to Zoho resources.", icon: "🏆" },
          { title: "Certified Experts", description: "Team of certified developers and consultants.", icon: "👨‍💻" },
          { title: "End-to-End Delivery", description: "From consulting to implementation and support.", icon: "🏁" },
          { title: "Industry Focus", description: "Tailored solutions for your specific industry vertical.", icon: "🏭" },
        ]}
      />

      <Testimonials
        testimonials={[
          {
            quote: "AGSuite transformed our chaotic sales process into a streamlined machine with Zoho CRM. The implementation was smooth and the training was excellent.",
            author: "Sarah J.",
            role: "Sales Director",
            company: "TechFlow Inc.",
          },
          {
            quote: "We use Zoho One for everything now. AGSuite helped us migrate from 5 different tools into one unified platform.",
            author: "Mike T.",
            role: "CEO",
            company: "Growth Marketing",
          },
             {
            quote: "Their support team is responsive and knowledgeable. Any time we have an issue with Zoho Books, they resolve it quickly.",
            author: "Emily R.",
            role: "CFO",
            company: "Retail Plus",
          },
        ]}
      />
      
      <BlogSection 
        title="Zoho Insights & News" 
        viewAllHref="/zoho/insights/blogs"
        posts={[
            { title: "Top 5 Features of Zoho CRM 2025", excerpt: "Explore the latest features that are changing the game for sales teams.", date: "Oct 15, 2025", image: "/images/zohoimages/background/zohobg.webp", href: "/zoho/insights/blogs/top-5-zoho-features" },
            { title: "Migrating to Zoho One: A Guide", excerpt: "Step-by-step guide on how to prepare your business for a full suite migration.", date: "Oct 02, 2025", image: "/images/zohoimages/background/zohobg.webp", href: "/zoho/insights/blogs/migrating-to-zoho-one" },
            { title: "Automating HR with Zoho People", excerpt: "How to save hours of administrative work by automating your HR processes.", date: "Sep 28, 2025", image: "/images/zohoimages/background/zohobg.webp", href: "/zoho/insights/blogs/automating-hr" }
        ]}
      />

      <FAQ
        items={[
          { question: "Is Zoho customizable for my industry?", answer: "Yes, Zoho applications are highly customizable. We can tailor fields, workflows, and modules to match your specific industry requirements." },
          { question: "How long does implementation take?", answer: "Timeline varies by complexity. A standard CRM setup takes 2-4 weeks, while a full Zoho One implementation might take 1-3 months." },
          { question: "Do you offer training?", answer: "Absolutely. We provide comprehensive training for your admins and end-users to ensure adoption and success." },
           { question: "Can Zoho integrate with my existing apps?", answer: "Yes, Zoho has a marketplace with hundreds of integrations, and we can build custom integrations using Zoho Flow or REST APIs." },
        ]}
      />

      <CTA
        title="Ready to Transform Your Business with Zoho?"
        description="Book a free consultation with our experts to discuss your needs and see Zoho in action."
        primaryBtnText="Schedule Free Consultation"
        primaryBtnHref="/zoho/contact/free-consultation"
        secondaryBtnText="Request a Quote"
        secondaryBtnHref="/zoho/contact/request-quote"
        variant="blue"
      />
    </div>
  );
}
