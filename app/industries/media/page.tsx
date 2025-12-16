import PageTemplate from '@/app/components/PageTemplate';
import { Footer } from '@/app/components/Footer';

export default function MediaPage() {
  return (
    <>
      <PageTemplate
        title="Media & Publishing Solutions"
        subtitle="Manage Content and Revenue Streams Efficiently"
        description="Streamline content production, distribution, and monetization with integrated media solutions."
        features={[
          { title: "Content Management", description: "Organize and track content production" },
          { title: "Rights Management", description: "Manage content rights and licensing" },
          { title: "Subscription Management", description: "Handle digital subscriptions and paywalls" },
          { title: "Ad Revenue Tracking", description: "Monitor advertising revenue streams" },
          { title: "Audience Analytics", description: "Understand your audience engagement" },
          { title: "Multi-Platform Distribution", description: "Publish across digital and print channels" }
        ]}
        ctaText="Transform Your Media Business"
      />
      <Footer />
    </>
  );
}
