import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite Data Backup Solution | AGSuite",
  description: "Secure your NetSuite data with automated off-site backups.",
};

export default function DataBackupPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="NetSuite Data Backup"
      subtitle="Security & Continuity"
      description="Protect your business-critical data. Automated, secure, and encrypted backups for your entire NetSuite environment."
      ctaText="Secure Your Data"
      isSolutionPage={true}
      heroImage="/images/Solutions/backup-hero.webp"
      features={[
        { title: "One-Click Restore", description: "Restore specific records or entire datasets instantly.", image: "/images/Solutions/restore.webp" },
        { title: "Long-term Archiving", description: "Stay compliant with data retention laws with secure archiving.", image: "/images/Solutions/archiving.webp" }
      ]}
    />
  );
}
