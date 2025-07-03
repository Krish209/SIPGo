// This is a server component (no 'use client')

import Contact from "./Contact";

export const metadata = {
  title:
    "Contact SIPGo - Get Help with Financial Calculators & Investment Tools",
  description:
    "Need help with our financial calculators? Contact SIPGo's support team for assistance with SIP, PPF, FD, and other investment calculation tools.",
  keywords: [
    "contact SIPGo",
    "financial calculator support",
    "investment tools help",
    "customer service",
    "SIP calculator help",
    "PPF calculator support",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/contact",
    title:
      "Contact SIPGo - Get Help with Financial Calculators & Investment Tools",
    description:
      "Need help with our financial calculators? Contact SIPGo's support team for assistance with SIP, PPF, FD, and other investment calculation tools.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Contact SIPGo - Get Help with Financial Calculators & Investment Tools",
    description:
      "Need help with our financial calculators? Contact SIPGo's support team for assistance with SIP, PPF, FD, and other investment calculation tools.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
