// This is a server component (no 'use client')

import SIPCalc from "../sip-calculator/SIP Calc";
import SIPInfo from "../sip-calculator/SIP Info";
import SIPFAQ from "../sip-calculator/SIP Faq";

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
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <SIPCalc />
      <SIPInfo />
      <SIPFAQ />
    </div>
  );
}
