// This is a server component (no 'use client')

import CompoundInterestCalc from "./CompoundInterest Calc";
import CompoundingInterestInfo from "./CompoundInterest Info";
import CompoundInterestFAQ from "./CompoundInterest Faq";

export const metadata = {
  title: "Compound Interest Calculator - Estimate Growth Over Time",
  description:
    "Estimate how your money grows with compounding using our Compound Interest Calculator. Great for long-term investment planning.",
  keywords: [
    "Compound Interest Calculator",
    "Investment Calculator",
    "Compound Interest Returns",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/compound-interest-calculator",
    title: "Compound Interest Calculator - Estimate Growth Over Time",
    description:
      "Estimate how your money grows with compounding using our Compound Interest Calculator. Great for long-term investment planning.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Compound Interest Calculator - Estimate Growth Over Time",
    description:
      "Estimate how your money grows with compounding using our Compound Interest Calculator. Great for long-term investment planning.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/compound-interest-calculator",
  },
};

export default function CompoundInterestCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <CompoundInterestCalc />
      <CompoundingInterestInfo />
      <CompoundInterestFAQ />
    </div>
  );
}
