// This is a server component (no 'use client')

import Disclaimer from "./Disclaimer";

export const metadata = {
  title: "Disclaimer | SIPGo Financial Calculators",
  description:
    "Legal disclaimer for SIPGo's financial calculators. Our tools provide estimates only, not financial advice.",
  keywords: [
    "Disclaimer",
    "SIPGo",
    "Financial Calculators",
    "SIPGo disclaimer",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/disclaimer",
    title: "Disclaimer | SIPGo Financial Calculators",
    description:
      "Legal disclaimer for SIPGo's financial calculators. Our tools provide estimates only, not financial advice.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | SIPGo Financial Calculators",
    description:
      "Legal disclaimer for SIPGo's financial calculators. Our tools provide estimates only, not financial advice.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/disclaimer",
  },
};

export default function SleepLengthCheckerPage() {
  return <Disclaimer />;
}
