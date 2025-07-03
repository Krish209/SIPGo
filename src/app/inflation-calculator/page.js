// This is a server component (no 'use client')

import InflationCalc from "./Inflation Calc";
import InflationInfo from "./Inflation Info";
import InflationFAQ from "./Inflation Faq";

export const metadata = {
  title: "Inflation Calculator - Real Value of Money & Investment Impact",
  description:
    "Calculate the real value of money over time and understand the impact of inflation on your investments with our Inflation Calculator.",
  keywords: [
    "Inflation Calculator",
    "Real Value of Money",
    "Inflation Impact",
    "Investment Planning",
    "Future Value Calculator",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/inflation-calculator",
    title: "Inflation Calculator - Real Value of Money & Investment Impact",
    description:
      "Calculate the real value of money over time and understand the impact of inflation on your investments with our Inflation Calculator.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Inflation Calculator - Real Value of Money & Investment Impact",
    description:
      "Calculate the real value of money over time and understand the impact of inflation on your investments with our Inflation Calculator.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/inflation-calculator",
  },
};

export default function InflationCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <InflationCalc />
      <InflationInfo />
      <InflationFAQ />
    </div>
  );
}
