// This is a server component (no 'use client')

import PPFCalc from "./PPF Calc";
import PPFFAQ from "./PPF Faq";
import PPFInfo from "./PPF Info";

export const metadata = {
  title: "PPF Calculator - Calculate Public Provident Fund Returns",
  description:
    "Use our PPF Calculator to estimate your Public Provident Fund maturity amount, interest earned, and investment planning over 15 years.",
  keywords: [
    "PPF Calculator",
    "Public Provident Fund",
    "PPF Returns",
    "Tax Saving Calculator",
    "80C Investment",
    "Government Savings Scheme",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/ppf-calculator",
    title: "PPF Calculator - Calculate Public Provident Fund Returns",
    description:
      "Use our PPF Calculator to estimate your Public Provident Fund maturity amount, interest earned, and investment planning over 15 years.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "PPF Calculator - Calculate Public Provident Fund Returns",
    description:
      "Use our PPF Calculator to estimate your Public Provident Fund maturity amount, interest earned, and investment planning over 15 years.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/ppf-calculator",
  },
};

export default function PPFCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <PPFCalc />
      <PPFInfo />
      <PPFFAQ />
    </div>
  );
}
