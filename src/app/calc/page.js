// This is a server component (no 'use client')

import AllCalculator from "./Allcalculator";

export const metadata = {
  title: "Financial Calculators - SIP, EMI, PPF, FD & More | SIPGo",
  description:
    "Comprehensive suite of 20+ financial calculators for SIP, mutual funds, loans, tax-saving investments, and retirement planning. Compare returns instantly.",
  keywords: [
    "SIP Calculator",
    "Lumpsum Calculator",
    "Step-up SIP Calculator",
    "SWP Calculator",
    "PPF Calculator",
    "FD Calculator",
    "RD Calculator",
    "NPS Calculator",
    "NSC Calculator",
    "SSY Calculator",
    "Sukanya Samriddhi Calculator",
    "EMI Calculator",
    "Home Loan Calculator",
    "Car Loan Calculator",
    "Personal Loan Calculator",
    "Education Loan Calculator",
    "Retirement Calculator",
    "Child Education Calculator",
    "Inflation Calculator",
    "Gratuity Calculator",
    "GST Calculator",
    "Compound Interest Calculator",
    "Simple Interest Calculator",
    "ROI Calculator",
    "Tax Saving Investments",
    "Financial Planning",
    "Wealth Management Tools",
    "Investment Growth Calculator",
    "Mutual Fund Returns",
    "SIP Returns Calculation",
    "Investment Comparison",
    "Retirement Planning",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/calc",
    title: "Financial Calculators - SIP, EMI, PPF, FD & More | SIPGo",
    description:
      "Comprehensive suite of 20+ financial calculators for SIP, mutual funds, loans, tax-saving investments, and retirement planning. Compare returns instantly.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Financial Calculators - SIP, EMI, PPF, FD & More | SIPGo",
    description:
      "Comprehensive suite of 20+ financial calculators for SIP, mutual funds, loans, tax-saving investments, and retirement planning. Compare returns instantly.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/calc",
  },
};

export default function AllCalculatorPage() {
  return <AllCalculator />;
}
