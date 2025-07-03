// This is a server component (no 'use client')

import SIPCalc from "./SIP Calc";
import SIPInfo from "./SIP Info";
import SIPFAQ from "./SIP Faq";

export const metadata = {
  title: "SIP Calculator - Calculate Monthly SIP Returns Online",
  description:
    "Use our SIP Calculator to estimate your mutual fund returns based on investment amount, duration, and expected rate of return. Start planning your investments today.",
  keywords: [
    "SIP Calculator",
    "Mutual Fund SIP Returns",
    "Investment Planning",
    "SIP Maturity",
    "Compounding Calculator",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/sip-calculator",
    title: "SIP Calculator - Calculate Monthly SIP Returns Online",
    description:
      "Use our SIP Calculator to estimate your mutual fund returns based on investment amount, duration, and expected rate of return. Start planning your investments today.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "SIP Calculator - Calculate Monthly SIP Returns Online",
    description:
      "Use our SIP Calculator to estimate your mutual fund returns based on investment amount, duration, and expected rate of return. Start planning your investments today.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/sip-calculator",
  },
};

export default function SIPCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <SIPCalc />
      <SIPInfo />
      <SIPFAQ />
    </div>
  );
}
