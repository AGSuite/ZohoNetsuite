import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoCatalystPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Serverless Developer Platform"
      subtitle="Zoho Catalyst"
      description="Zoho Catalyst is a serverless developer platform that helps you build, deploy, and scale your applications without worrying about infrastructure management."
      ctaText="Scale Your Apps Serverless"
      features={[
        { title: "Serverless Functions", description: "Write and execute your code in the cloud with automated scaling and management." },
        { title: "NoSQL Database", description: "Store and manage your application data with a powerful, scalable NoSQL database." },
        { title: "Mobile SDKs", description: "Build real-time mobile apps with easy-to-use SDKs for iOS and Android." }
      ]}
    />
  );
}
