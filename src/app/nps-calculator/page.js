// This is a server component (no 'use client')

import NPSCalculator from "./NPS Calc";

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
  return <NPSCalculator />;
}
