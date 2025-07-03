// This is a server component (no 'use client')

import Gratuity from "./Gratuity Calc";

export const metadata = {
  title: "Gratuity Calculator - Calculate Gratuity Amount Online",
  description:
    "Estimate your gratuity payout as per the Payment of Gratuity Act using our easy-to-use Gratuity Calculator. Useful for both private and public sector employees.",
  keywords: [
    "Gratuity Calculator",
    "Salary Gratuity India",
    "Gratuity Formula",
    "Gratuity Calculation Online",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/gratuity-calculator",
    title: "Gratuity Calculator - Calculate Gratuity Amount Online",
    description:
      "Estimate your gratuity payout as per the Payment of Gratuity Act using our easy-to-use Gratuity Calculator. Useful for both private and public sector employees.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gratuity Calculator - Calculate Gratuity Amount Online",
    description:
      "Estimate your gratuity payout as per the Payment of Gratuity Act using our easy-to-use Gratuity Calculator. Useful for both private and public sector employees.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/gratuity-calculator",
  },
};

export default function GratuityPage() {
  return <Gratuity />;
}
