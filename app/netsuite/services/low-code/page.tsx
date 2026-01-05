"use client";
import React from 'react';
import SolutionPageTemplate from '../../../components/SolutionPageTemplate';
import { Code2, Zap, Rocket, ShieldCheck, Smartphone, Settings, LineChart, Layout, Cpu } from 'lucide-react';

export default function NetSuiteLowCodeServices() {
  return (
    <SolutionPageTemplate
      theme="netsuite"
      hero={{
        title: "Agile Low-Code Development for NetSuite",
        subtitle: "Custom Innovation",
        description: "Don't let rigid systems limit your business potential. We build custom-tailored applications and extensions using NetSuite's SuiteCloud platform—delivering bespoke solutions with speed and precision.",
        image: "/images/lap/lap4.webp",
        cardTitle: "SuiteSuccess",
        cardText: "Rapid development & deployment.",
        quote: "The best applications are those that evolve as fast as your business needs."
      }}
      intro={{
        title: "Extend NetSuite Beyond Standard Capabilities",
        subtitle: "The SuiteCloud Revolution",
        description: "Every business has unique requirements that standard ERP features might not meet. Our SuiteCloud developers specialize in building custom SuiteApps, mobile extensions, and automated workflows that mirror your exact business processes.",
        description2: "Using SuiteScript, SuiteFlow, and SuiteTalk, we transform your complex operational requirements into high-performance digital tools, ensuring 100% alignment with your strategy.",
        image: "/images/aboutus/vision.webp",
        linkText: "View Developer Portfolio",
        linkHref: "/netsuite/casestudy"
      }}
      stats={[
        { label: 'Custom Apps Built', value: 250, suffix: '+', icon: Rocket },
        { label: 'Dev Cycle Reduction', value: 60, suffix: '%', icon: Zap },
        { label: 'Cost Efficiency', value: 40, suffix: '%', icon: LineChart },
        { label: 'Uptime Reliability', value: 99, suffix: '.9%', icon: ShieldCheck },
      ]}
      sections={{
        title: "End-to-End SuiteCloud Development",
        subtitle: "Our Dev Process",
        description: "We manage the entire development lifecycle within the NetSuite ecosystem.",
        items: [
          {
            title: "SuiteScript Development",
            description: "Building powerful server-side scripts to automate complex business logic and data processing.",
            icon: Code2,
            href: "/netsuite/contact"
          },
          {
            title: "SuiteFlow Automation",
            description: "Designing visual workflows for approval processes, lead routing, and transaction management.",
            icon: Settings,
            href: "/netsuite/contact"
          },
          {
            title: "Mobile SuiteApps",
            description: "Developing custom mobile-first applications for field services, warehouse management, and more.",
            icon: Smartphone,
            href: "/netsuite/contact"
          }
        ]
      }}
      challenges={{
        title: "Solving Development Gaps",
        subtitle: "Challenges",
        items: [
          {
            title: "Rigid System Limits",
            description: "Standard software often forces you to change your processes. Our custom low-code solutions adapt the software to you.",
            image: "/images/lap/lap1.webp"
          },
          {
            title: "Complexity Overload",
            description: "Managing custom code in an ERP can be risky. We use NetSuite's native frameworks to ensure stability and upgrade-compatibility.",
            image: "/images/lap/lap2.webp"
          },
          {
            title: "Time-to-Market",
            description: "Traditional enterprise development takes too long. Our low-code approach delivers functional tools in weeks, not months.",
            image: "/images/lap/lap5.webp"
          }
        ]
      }}
      benefits={{
        title: "The SuiteCloud Edge",
        subtitle: "Benefits",
        items: [
          {
            title: "Scalable Innovation",
            description: "Build on a platform that scales with you, ensuring your custom tools remain fast and reliable as your data grows.",
            image: "/images/aboutus/mission1.webp"
          },
          {
            title: "Future-Proof Design",
            description: "Our solutions are built using NetSuite's version-independent frameworks, ensuring they work across all future updates.",
            image: "/images/aboutus/visiongirl.webp"
          },
          {
            title: "Integrated Experience",
            description: "Custom apps live directly within NetSuite, providing a seamless user interface and unified data pool.",
            image: "/images/aboutus/niche1.webp"
          }
        ]
      }}
      cta={{
        title: "Have a Custom SuiteApp Idea?",
        primaryBtnText: "Start My Free Discovery",
        primaryBtnHref: "/netsuite/contact",
        secondaryBtnText: "View Solutions",
        secondaryBtnHref: "/netsuite/solutions"
      }}
    />
  );
}
