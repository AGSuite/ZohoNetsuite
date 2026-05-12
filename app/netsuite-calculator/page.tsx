import NetSuitePricingCalculator from "@/app/netsuite/components/NetSuitePricingCalculator";

export const metadata = {
    title: "NetSuite Pricing Calculator | AGSuite Technologies",
    description: "Calculate your NetSuite ROI instantly with our intelligent pricing calculator.",
};

export default function NetSuiteCalculatorPage() {
    return (
        <div className="pt-16 md:pt-20 pb-10 px-3 sm:px-4 md:px-6 flex justify-center">
            <NetSuitePricingCalculator />
        </div>
    );
}




