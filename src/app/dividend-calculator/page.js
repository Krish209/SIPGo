// This is a server component (no 'use client')

import DividendYieldCalc from "./Dividend Yield Calc";

export const metadata = {
  title: "Dividend Calculator - Estimate Dividend Income & Yield",
  description:
    "Calculate your expected dividend income and yield based on shares held and dividend declared. Plan your income from equity investments more effectively.",
  keywords: [
    "Dividend Calculator",
    "Dividend Income",
    "Stock Yield",
    "Passive Income",
    "Dividend Yield Calculator",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/dividend-calculator",
    title: "Dividend Calculator - Estimate Dividend Income & Yield",
    description:
      "Calculate your expected dividend income and yield based on shares held and dividend declared. Plan your income from equity investments more effectively.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dividend Calculator - Estimate Dividend Income & Yield",
    description:
      "Calculate your expected dividend income and yield based on shares held and dividend declared. Plan your income from equity investments more effectively.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/dividend-calculator",
  },
};

export default function DividendYieldCalcPage() {
  return <DividendYieldCalc />;
}
