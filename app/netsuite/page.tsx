import Link from 'next/link';
import { NSHero } from './components/NSHero';

import NSMetrics from './components/NSMetrics';
import NSDashboardHero from './components/NSDashboardHero';
import dynamic from 'next/dynamic';

const NSIndustries = dynamic(() => import('./components/NSIndustries').then(mod => mod.default));
const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('../components/home/FAQ').then(mod => mod.FAQ));
const NSServices = dynamic(() => import('./components/NSServices').then(mod => mod.default));
const NetsuiteCTA = dynamic(() => import('./components/NetsuiteCTA').then(mod => mod.default));
const NSHowItWorks = dynamic(() => import('./components/NSHowItWorks').then(mod => mod.default));
const NSWhyChooseUs = dynamic(() => import('./components/NSWhyChooseUs').then(mod => mod.default));
const NSTestimonialSection = dynamic(() => import('./components/NSTestimonialSection').then(mod => mod.default));
const FooterFormSection = dynamic(() => import('../components/home/FooterFormSection').then(mod => mod.default));


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




      <NSServices />

      <NSIndustries />

      <NetsuiteCTA />

      <NSHowItWorks />

      <NSWhyChooseUs />

      <NSTestimonialSection />


      


      <FAQ variant="netsuite" />

      <FooterFormSection />
    </div>
  );
}
