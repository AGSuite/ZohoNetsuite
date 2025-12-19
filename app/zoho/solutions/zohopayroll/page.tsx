import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoPayrollPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Accurate and Compliant Payroll"
      subtitle="Zoho Payroll"
      description="Zoho Payroll is a cloud-based payroll management software that automates your payroll calculations, tax compliance, and statutory filings."
      ctaText="Simplify Your Payroll Process"
      features={[
        { title: "Automated Calculations", description: "Calculate earnings, deductions, and taxes accurately every month." },
        { title: "Statutory Compliance", description: "Stay compliant with local tax laws and statutory requirements automatically." },
        { title: "Employee Self-Service", description: "Empower employees to view their payslips and manage their tax declarations." }
      ]}
    />
  );
}
