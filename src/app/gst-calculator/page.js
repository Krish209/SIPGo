// This is a server component (no 'use client')

import GSTCalculator from "./GST Calc";

export const metadata = {
  title: "GST Calculator - Calculate Goods and Services Tax Online",
  description:
    "Easily calculate GST amounts on products and services using our GST Calculator. Supports various tax slabs including CGST, SGST, and IGST.",
  keywords: [
    "GST Calculator",
    "India GST",
    "Goods and Services Tax",
    "GST Inclusive",
    "GST Exclusive",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/gst-calculator",
    title: "GST Calculator - Calculate Goods and Services Tax Online",
    description:
      "Easily calculate GST amounts on products and services using our GST Calculator. Supports various tax slabs including CGST, SGST, and IGST.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "GST Calculator - Calculate Goods and Services Tax Online",
    description:
      "Easily calculate GST amounts on products and services using our GST Calculator. Supports various tax slabs including CGST, SGST, and IGST.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/gst-calculator",
  },
};

export default function GSTCalculatorPage() {
  return <GSTCalculator />;
}
