import React from 'react';
import { Metadata } from 'next';
import SmartCommissionClient from './SmartCommissionClient';

export const metadata: Metadata = {
  title: "NetSuite Smart Commission Add-on | AGSuite Technologies",
  description: "Automate complex sales commission structures. Eliminate spreadsheets and motivate your sales team with real-time incentive tracking.",
};

export default function SmartCommissionPage() {
  return <SmartCommissionClient />;
}
