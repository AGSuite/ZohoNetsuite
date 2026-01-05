import React from 'react';
import { Metadata } from 'next';
import NetSuiteTrainingClient from './NetSuiteTrainingClient';

export const metadata: Metadata = {
  title: "NetSuite Training Services | AGSuite Technologies",
  description: "Empower your team with specialized NetSuite training. From functional basics to advanced SuiteCloud development, we ensure your success.",
};

export default function TrainingServicesPage() {
  return <NetSuiteTrainingClient />;
}
