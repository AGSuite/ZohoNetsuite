import Link from 'next/link';
import { ZohoHero } from './components/ZohoHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho Solutions | CRM, HR, Finance & Automation | AGSuite",
  description: "Transform your business with Zoho's integrated suite of applications. AGSuite is an Advanced Zoho Partner providing implementation, customization, and support.",
  openGraph: {
    title: "Zoho Solutions | AGSuite Technologies",
    description: "Complete Business Software Suite - Streamline operations and boost productivity.",
    images: ["/images/Background/heropinkbg.webp"],
  },
};

const ZohoMetrics = dynamic(() => import('./components/ZohoMetrics').then(mod => mod.default));
const ZohoDashboardHero = dynamic(() => import('./components/ZohoDashboardHero').then(mod => mod.default));
import dynamic from 'next/dynamic';

const ZohoIndustries = dynamic(() => import('./components/ZohoIndustries').then(mod => mod.default));
const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('../components/home/FAQ').then(mod => mod.FAQ));

const ZohoServices = dynamic(() => import('./components/ZohoServices').then(mod => mod.default));
const ZohoCTA = dynamic(() => import('./components/ZohoCTA').then(mod => mod.default));
// const ZohoHowItWorks = dynamic(() => import('./components/ZohoHowItWorks').then(mod => mod.default));
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


      {/* <ZohoHowItWorks /> */}

      <ZohoWhyChooseUs />

      <ZohoTestimonialSection />


      


      <FAQ variant="zoho" />



      <FooterFormSection />
    </div>
  );
}
