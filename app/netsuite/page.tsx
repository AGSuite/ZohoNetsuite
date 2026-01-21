import Link from 'next/link';
import { NSHero } from './components/NSHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Oracle NetSuite ERP Solutions | AGSuite Technologies",
  description: "Scale your business with the world's #1 Cloud ERP. AGSuite offers expert NetSuite implementation, integration, and managed services.",
  openGraph: {
    title: "NetSuite ERP Solutions | AGSuite Technologies",
    description: "Cloud ERP for Fast-Growing Companies. Run your entire business in the cloud.",
    images: ["/images/Background/herobluebg.webp"],
  },
};

const NSMetrics = dynamic(() => import('./components/NSMetrics').then(mod => mod.default));
const NSDashboardHero = dynamic(() => import('./components/NSDashboardHero').then(mod => mod.default));
import dynamic from 'next/dynamic';

const NSIndustries = dynamic(() => import('./components/NSIndustries').then(mod => mod.default));
const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('../components/home/FAQ').then(mod => mod.FAQ));
const NSServices = dynamic(() => import('./components/NSServices').then(mod => mod.default));
const NetsuiteCTA = dynamic(() => import('./components/NetsuiteCTA').then(mod => mod.default));
// const NSHowItWorks = dynamic(() => import('./components/NSHowItWorks').then(mod => mod.default));
const NSWhyChooseUs = dynamic(() => import('./components/NSWhyChooseUs').then(mod => mod.default));
const NSTestimonialSection = dynamic(() => import('./components/NSTestimonialSection').then(mod => mod.default));
const FooterFormSection = dynamic(() => import('../components/home/FooterFormSection').then(mod => mod.default));
const FooterFormSectionDark = dynamic(() => import('../components/home/FooterFormSectionDark').then(mod => mod.default));
const FooterFormLight = dynamic(() => import('../components/home/FooterFormLight').then(mod => mod.default));
const FooterFormRed = dynamic(() => import('../components/home/FooterFormRed').then(mod => mod.default));

// Alternative Contact Form Designs
const ContactFormDesign1 = dynamic(() => import('./components/ContactFormDesign1').then(mod => mod.default));
const ContactFormDesign2 = dynamic(() => import('./components/ContactFormDesign2').then(mod => mod.default));
const ContactFormDesign4 = dynamic(() => import('./components/ContactFormDesign4').then(mod => mod.default));


export default function NetSuitePage() {
  return (
    <div className="relative">
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

      {/* <NSHowItWorks /> */}

      <NSWhyChooseUs />

      <NSTestimonialSection />





      <FAQ variant="netsuite" />

      <FooterFormSection />
      <FooterFormLight />
      <FooterFormRed />
      {/*<FooterFormSectionDark />
      <ContactFormDesign1 />
      <ContactFormDesign2 />*/}
      <ContactFormDesign4 />
    </div>
  );
}
