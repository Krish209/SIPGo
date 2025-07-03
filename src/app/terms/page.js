// This is a server component (no 'use client')

import TermsAndConditions from "./Terms&Condition";

export const metadata = {
  title: "Terms & Conditions | SIPGo Financial Tools",
  description:
    "Terms governing use of SIPGo's financial calculators and services. Learn your rights and obligations.",
  keywords: [
    "Terms and Condition",
    "SIPGo",
    "Financial Calculators",
    "Usage Policy",
    "SIPGo Terms",
  ],
  effectiveDate: "2025-01-15",
  lastUpdated: "2025-06-01",

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/terms",
    title: "Terms & Conditions | SIPGo Financial Tools",
    description:
      "Terms governing use of SIPGo's financial calculators and services. Learn your rights and obligations.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | SIPGo Financial Tools",
    description:
      "Terms governing use of SIPGo's financial calculators and services. Learn your rights and obligations.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/terms",
  },
};

export default function StopwatchPage() {
  return <TermsAndConditions />;
}
