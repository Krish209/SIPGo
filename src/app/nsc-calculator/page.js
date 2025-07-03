// This is a server component (no 'use client')

import NSCCalc from "./NSC Calc";
import NSCInfo from "./NSC Info";
import NSCFAQ from "./NSC Faq";

export const metadata = {
  title: "NSC Calculator - Calculate National Savings Certificate Maturity",
  description:
    "Use the NSC Calculator to find the maturity value of your investment under the National Savings Certificate scheme. Includes interest rate and tenure details.",
  keywords: [
    "NSC Calculator",
    "National Savings Certificate",
    "NSC Interest",
    "NSC Maturity Value",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/nsc-calculator",
    title: "NSC Calculator - Calculate National Savings Certificate Maturity",
    description:
      "Use the NSC Calculator to find the maturity value of your investment under the National Savings Certificate scheme. Includes interest rate and tenure details.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "NSC Calculator - Calculate National Savings Certificate Maturity",
    description:
      "Use the NSC Calculator to find the maturity value of your investment under the National Savings Certificate scheme. Includes interest rate and tenure details.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/nsc-calculator",
  },
};

export default function NSCCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <NSCCalc />
      <NSCInfo />
      <NSCFAQ />
    </div>
  );
}
