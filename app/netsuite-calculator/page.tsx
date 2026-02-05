import NetSuitePricingCalculator from "@/app/netsuite/components/NetSuitePricingCalculator";

export const metadata = {
    title: "NetSuite Pricing Calculator | AGSuite Technologies",
    description: "Calculate your NetSuite ROI instantly with our intelligent pricing calculator.",
};

export default function NetSuiteCalculatorPage() {
    return (
        <div className="pt-20">
            <NetSuitePricingCalculator />
        </div>
    );
}
