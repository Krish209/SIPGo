// This is a server component (no 'use client')

import PrivacyPolicy from "./Privacy Policy";

export const metadata = {
  title: "Privacy Policy | SIPGo Financial Calculators",
  description:
    "Learn how SIPGo protects your data when using our financial calculators. We comply with Indian data protection standards.",
  keywords: [
    "Privacy Policy",
    "SIPGo",
    "Financial Calculators",
    "Data Protection",
    "SIPGo Policy",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/privacy-policy",
    title: "Privacy Policy | SIPGo Financial Calculators",
    description:
      "Learn how SIPGo protects your data when using our financial calculators. We comply with Indian data protection standards.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SIPGo Financial Calculators",
    description:
      "Learn how SIPGo protects your data when using our financial calculators. We comply with Indian data protection standards.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/privacy-policy",
  },

  // Optional metadata fields you might want to keep track of
  effectiveDate: "2025-01-18",
  lastUpdated: "2025-06-11",
};

export default function TimeCalculatorPage() {
  return <PrivacyPolicy />;
}
