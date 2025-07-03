// This is a server component (no 'use client')

import FDCalc from "./FD Calc";
import FDFaq from "./FD Faq";
import FdInfo from "./FD Info";

export const metadata = {
  title: "FD Calculator - Calculate Fixed Deposit Interest Online",
  description:
    "Estimate maturity value and interest earned on your Fixed Deposit investment using our easy FD Calculator. Supports both cumulative and non-cumulative FDs.",
  keywords: [
    "FD Calculator",
    "Fixed Deposit Returns",
    "FD Interest",
    "FD Maturity Value",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/fd-calculator",
    title: "FD Calculator - Calculate Fixed Deposit Interest Online",
    description:
      "Estimate maturity value and interest earned on your Fixed Deposit investment using our easy FD Calculator. Supports both cumulative and non-cumulative FDs.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "FD Calculator - Calculate Fixed Deposit Interest Online",
    description:
      "Estimate maturity value and interest earned on your Fixed Deposit investment using our easy FD Calculator. Supports both cumulative and non-cumulative FDs.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/fd-calculator",
  },
};

export default function FDCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <FDCalc />
      <FdInfo />
      <FDFaq />
    </div>
  );
}
