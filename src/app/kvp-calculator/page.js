// This is a server component (no 'use client')

import KVP from "./KVP Calc";
import KVPFAQ from "./KVP Faq";
import KVPInfo from "./KVP Info";

export const metadata = {
  title: "KVP Calculator - Calculate Maturity Value for Kisan Vikas Patra",
  description:
    "Estimate KVP maturity value and learn about the Kisan Vikas Patra scheme including interest rate, tenure, and tax rules.",
  keywords: [
    "KVP Calculator",
    "Kisan Vikas Patra Interest",
    "KVP Maturity",
    "KVP Tax",
    "Savings Scheme India",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/kvp-calculator",
    title: "KVP Calculator - Calculate Maturity Value for Kisan Vikas Patra",
    description:
      "Estimate KVP maturity value and learn about the Kisan Vikas Patra scheme including interest rate, tenure, and tax rules.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "KVP Calculator - Calculate Maturity Value for Kisan Vikas Patra",
    description:
      "Estimate KVP maturity value and learn about the Kisan Vikas Patra scheme including interest rate, tenure, and tax rules.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/kvp-calculator",
  },
};

export default function KVPCalculatorPage() {
  return (
    <div className="py-4">
      <KVP />
      <KVPInfo />
      <KVPFAQ />
    </div>
  );
}
