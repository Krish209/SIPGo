// This is a server component (no 'use client')

import SWPCalc from "./SWP Calc";
import SWPInfo from "./SWP Info";
import SWPFAQ from "./SWP Faq";

export const metadata = {
  title: "SWP Calculator - Calculate Systematic Withdrawal Plan Returns",
  description:
    "Use our SWP Calculator to estimate how much you can withdraw regularly from your mutual fund investments without exhausting your corpus.",
  keywords: [
    "SWP Calculator",
    "Systematic Withdrawal",
    "Mutual Fund Income",
    "SWP Planning",
    "Investment Withdrawals",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/swp-calculator",
    title: "SWP Calculator - Calculate Systematic Withdrawal Plan Returns",
    description:
      "Use our SWP Calculator to estimate how much you can withdraw regularly from your mutual fund investments without exhausting your corpus.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "SWP Calculator - Calculate Systematic Withdrawal Plan Returns",
    description:
      "Use our SWP Calculator to estimate how much you can withdraw regularly from your mutual fund investments without exhausting your corpus.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/swp-calculator",
  },
};

export default function SWPCalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <SWPCalc />
      <SWPInfo />
      <SWPFAQ />
    </div>
  );
}
