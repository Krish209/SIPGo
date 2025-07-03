// This is a server component (no 'use client')

import SSY from "./SSY Calc";

export const metadata = {
  title: "SSY Calculator - Sukanya Samriddhi Yojana Maturity Calculator",
  description:
    "Calculate the maturity amount and interest earned on your SSY account using our Sukanya Samriddhi Yojana Calculator. Ideal for girl child savings planning.",
  keywords: [
    "SSY Calculator",
    "Sukanya Samriddhi Yojana",
    "SSY Interest",
    "SSY Maturity Value",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/ssy-calculator",
    title: "SSY Calculator - Sukanya Samriddhi Yojana Maturity Calculator",
    description:
      "Calculate the maturity amount and interest earned on your SSY account using our Sukanya Samriddhi Yojana Calculator. Ideal for girl child savings planning.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "SSY Calculator - Sukanya Samriddhi Yojana Maturity Calculator",
    description:
      "Calculate the maturity amount and interest earned on your SSY account using our Sukanya Samriddhi Yojana Calculator. Ideal for girl child savings planning.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/ssy-calculator",
  },
};

export default function SSYCalculatorPage() {
  return <SSY />;
}
