// This is a server component (no 'use client')

import SimpleInterestCalc from "./SimpleInterest Calc";
import SimpleInterestInfo from "./SimpleInterest Info";
import SimpleInterestFAQ from "./SimpleInterest Faq";

export const metadata = {
  title: "Simple Interest Calculator - Calculate Interest Easily",
  description:
    "Use our Simple Interest Calculator to quickly compute interest based on principal, rate, and time period. Ideal for short-term loans and deposits.",
  keywords: [
    "Simple Interest Calculator",
    "Calculate Interest",
    "Principal Interest Calculation",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/simple-interest-calculator",
    title: "Simple Interest Calculator - Calculate Interest Easily",
    description:
      "Use our Simple Interest Calculator to quickly compute interest based on principal, rate, and time period. Ideal for short-term loans and deposits.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Simple Interest Calculator - Calculate Interest Easily",
    description:
      "Use our Simple Interest Calculator to quickly compute interest based on principal, rate, and time period. Ideal for short-term loans and deposits.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/simple-interest-calculator",
  },
};

export default function SimpleInterestCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <SimpleInterestCalc />
      <SimpleInterestInfo />
      <SimpleInterestFAQ />
    </div>
  );
}
