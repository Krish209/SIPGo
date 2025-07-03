// This is a server component (no 'use client')

import StepUpSIPCalc from "./StepUpSIP Calc";
import StepUpSIPInfo from "./StepUpSIP Info";
import StepUpSIPFAQ from "./StepUpSIP Faq";

export const metadata = {
  title: "Step-Up SIP Calculator - Grow Your Investment with Increasing SIPs",
  description:
    "Plan your investment strategy with our Step-Up SIP Calculator. Estimate returns when you gradually increase your monthly SIP contributions.",
  keywords: [
    "Step-Up SIP Calculator",
    "Increasing SIP",
    "Wealth Planning",
    "SIP Growth",
    "Mutual Fund Growth SIP",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/step-up-sip-calculator",
    title: "Step-Up SIP Calculator - Grow Your Investment with Increasing SIPs",
    description:
      "Plan your investment strategy with our Step-Up SIP Calculator. Estimate returns when you gradually increase your monthly SIP contributions.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Step-Up SIP Calculator - Grow Your Investment with Increasing SIPs",
    description:
      "Plan your investment strategy with our Step-Up SIP Calculator. Estimate returns when you gradually increase your monthly SIP contributions.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/step-up-sip-calculator",
  },
};


export default function StepUpSIPCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <StepUpSIPCalc />
      <StepUpSIPInfo />
      <StepUpSIPFAQ />
    </div>
  );
}
