// This is a server component (no 'use client')

import LumpsumCalc from "./Lumpsum Calc";

export const metadata = {
  title: "Lumpsum Calculator - Calculate Returns on One-Time Investment",
  description:
    "Estimate the future value of your one-time mutual fund investment using our Lumpsum Calculator. Ideal for long-term wealth creation planning.",
  keywords: [
    "Lumpsum Calculator",
    "Investment Calculator",
    "Lump Sum Investment",
    "Financial Planning",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/lumpsum-calculator",
    title: "Lumpsum Calculator - Calculate Returns on One-Time Investment",
    description:
      "Estimate the future value of your one-time mutual fund investment using our Lumpsum Calculator. Ideal for long-term wealth creation planning.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lumpsum Calculator - Calculate Returns on One-Time Investment",
    description:
      "Estimate the future value of your one-time mutual fund investment using our Lumpsum Calculator. Ideal for long-term wealth creation planning.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/lumpsum-calculator",
  },
};

export default function LumpsumCalculatorPage() {
  return <LumpsumCalc />;
}
