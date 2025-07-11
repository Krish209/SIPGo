// This is a server component (no 'use client')

import RDCalc from "./RD Calc";
import RDInfo from "./RD Info";
import RDFAQ from "./RD Faq";

export const metadata = {
  title: "RD Calculator - Calculate Recurring Deposit Maturity Value",
  description:
    "Estimate returns and maturity value on your recurring deposit using our RD Calculator. Helps plan monthly savings effectively.",
  keywords: [
    "RD Calculator",
    "Recurring Deposit Returns",
    "RD Interest",
    "RD Maturity Value",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/rd-calculator",
    title: "RD Calculator - Calculate Recurring Deposit Maturity Value",
    description:
      "Estimate returns and maturity value on your recurring deposit using our RD Calculator. Helps plan monthly savings effectively.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "RD Calculator - Calculate Recurring Deposit Maturity Value",
    description:
      "Estimate returns and maturity value on your recurring deposit using our RD Calculator. Helps plan monthly savings effectively.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/rd-calculator",
  },
};

export default function RDCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <RDCalc />
      <RDInfo />
      <RDFAQ />
    </div>
  );
}
