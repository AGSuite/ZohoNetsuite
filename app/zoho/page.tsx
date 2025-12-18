import Link from 'next/link';
import { ZohoHero } from './components/ZohoHero';

import ZohoMetrics from './components/ZohoMetrics';
import ZohoDashboardHero from './components/ZohoDashboardHero';
import dynamic from 'next/dynamic';

const ZohoIndustries = dynamic(() => import('./components/ZohoIndustries').then(mod => mod.default));
const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('../components/home/FAQ').then(mod => mod.FAQ));
const CTA = dynamic(() => import('../components/home/CTA').then(mod => mod.CTA));
const ZohoServices = dynamic(() => import('./components/ZohoServices').then(mod => mod.default));
const ZohoCTA = dynamic(() => import('./components/ZohoCTA').then(mod => mod.default));
const ZohoHowItWorks = dynamic(() => import('./components/ZohoHowItWorks').then(mod => mod.default));
const ZohoWhyChooseUs = dynamic(() => import('./components/ZohoWhyChooseUs').then(mod => mod.default));
const ZohoTestimonialSection = dynamic(() => import('./components/ZohoTestimonialSection').then(mod => mod.default));
const FooterFormSection = dynamic(() => import('../components/home/FooterFormSection').then(mod => mod.default));


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

       <ZohoServices />


      <ZohoIndustries />

      <ZohoCTA />


      <ZohoHowItWorks />

      <ZohoWhyChooseUs />

      <ZohoTestimonialSection />


      


      <FAQ variant="zoho" />

      <CTA
        title="Ready to Transform Your Business with Zoho?"
        description="Book a free consultation with our experts to discuss your needs and see Zoho in action."
        primaryBtnText="Schedule Free Consultation"
        primaryBtnHref="/zoho/contact/free-consultation"
        secondaryBtnText="Request a Quote"
        secondaryBtnHref="/zoho/contact/request-quote"
        variant="blue"
      />

      <FooterFormSection />
    </div>
  );
}
