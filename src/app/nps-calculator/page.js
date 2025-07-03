// This is a server component (no 'use client')

import NPSCalc from "./NPS Calc";
import NPSInfo from "./NPS Info";
import NPSFAQ from "./NPS Faq";

export const metadata = {
  title: "NPS Calculator - Calculate National Pension Scheme Returns",
  description:
    "Plan your retirement with our NPS Calculator. Calculate your expected pension wealth, annuity income, and lump sum at retirement.",
  keywords: [
    "NPS Calculator",
    "National Pension Scheme",
    "Pension Calculator",
    "NPS Returns",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/nps-calculator",
    title: "NPS Calculator - Calculate National Pension Scheme Returns",
    description:
      "Plan your retirement with our NPS Calculator. Calculate your expected pension wealth, annuity income, and lump sum at retirement.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "NPS Calculator - Calculate National Pension Scheme Returns",
    description:
      "Plan your retirement with our NPS Calculator. Calculate your expected pension wealth, annuity income, and lump sum at retirement.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },
  
  alternates: {
    canonical: "https://www.sipgo.in/nps-calculator",
  },
};

export default function NPSCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <NPSCalc />
      <NPSInfo />
      <NPSFAQ />
    </div>
  );
}
