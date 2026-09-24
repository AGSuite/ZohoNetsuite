import { getZohoPosts } from '../../sanity/lib/zohoFetch';
import { ZohoHero } from './components/ZohoHero';
import ZohoPageClient from './components/ZohoPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho Solutions | CRM, HR, Finance & Automation | AGSuite",
  description: "Transform your business with Zoho's integrated suite of applications. AGSuite is a Zoho Premium Partner providing implementation, customization, and support.",
  openGraph: {
    title: "Zoho Solutions | AGSuite Technologies",
    description: "Complete Business Software Suite - Streamline operations and boost productivity.",
    images: ["/images/Background/heropinkbg.webp"],
  },
};

export default async function ZohoPage() {
  const blogs = await getZohoPosts();

  return (
    <div className="relative">
      <ZohoHero />

      <ZohoPageClient blogs={blogs} />
    </div>
  );
}
