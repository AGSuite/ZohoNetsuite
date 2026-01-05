import React from 'react';
import { Metadata } from 'next';
import IndiaLocalizationClient from './IndiaLocalizationClient';

export const metadata: Metadata = {
  title: "NetSuite India Localization Add-on | AGSuite",
  description: "Stay compliant with Indian tax laws. GST, TDS, and E-invoicing within NetSuite.",
};

export default function IndiaLocalizationAddonPage() {
  return <IndiaLocalizationClient />;
}
