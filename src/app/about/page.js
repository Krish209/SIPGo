// This is a server component (no 'use client')

import AboutPage from "./About Us";

export const metadata = {
  title: "About SIPGo - Financial Calculator Experts",
  description:
    "SIPGo provides accurate SIP, PPF, and FD calculators to simplify investment planning in India. Learn about our mission and expertise.",
  keywords: [
    "About SIPGo",
    "Financial Calculators",
    "Investment Tools",
    "SIP",
    "PPF",
    "FD",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/about",
    title: "About SIPGo - Financial Calculator Experts",
    description:
      "SIPGo provides accurate SIP, PPF, and FD calculators to simplify investment planning in India. Learn about our mission and expertise.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "About SIPGo - Financial Calculator Experts",
    description:
      "SIPGo provides accurate SIP, PPF, and FD calculators to simplify investment planning in India. Learn about our mission and expertise.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/about",
  },
};

export default function AboutUsPage() {
  return <AboutPage />;
}
