// This is a server component (no 'use client')

import SIPCalculator from "../sip-calculator/SIP Calc";

export const metadata = {
  title: "Mutual Fund Calculator - Estimate Your Investment Returns",
  description:
    "Use our Mutual Fund Calculator to project your investment growth over time. Calculate potential returns, SIP maturity, and plan your financial goals effectively.",
  keywords: [
    "Mutual Fund Calculator",
    "SIP Calculator",
    "Investment Returns",
    "Mutual Fund Returns",
    "Financial Planning",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/mutual-fund-calculator",
    title: "Mutual Fund Calculator - Estimate Your Investment Returns",
    description:
      "Use our Mutual Fund Calculator to project your investment growth over time. Calculate potential returns, SIP maturity, and plan your financial goals effectively.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mutual Fund Calculator - Estimate Your Investment Returns",
    description:
      "Use our Mutual Fund Calculator to project your investment growth over time. Calculate potential returns, SIP maturity, and plan your financial goals effectively.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/mutual-fund-calculator",
  },
};

export default function MutualFundCalculatorPage() {
  return <SIPCalculator />;
}
