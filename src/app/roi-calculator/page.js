// This is a server component (no 'use client')

import ROICalc from "./ROI Calc";
import ROIInfo from "./ROI Info";
import ROIFAQ from "./ROI Faq";

export const metadata = {
  title: "ROI Calculator - Return on Investment Calculator",
  description:
    "Calculate your Return on Investment (ROI) with our simple and accurate ROI Calculator. Ideal for evaluating business and personal investment returns.",
  keywords: [
    "ROI Calculator",
    "Return on Investment",
    "Investment Returns",
    "Portfolio ROI",
    "Financial Calculator",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/roi-calculator",
    title: "ROI Calculator - Return on Investment Calculator",
    description:
      "Calculate your Return on Investment (ROI) with our simple and accurate ROI Calculator. Ideal for evaluating business and personal investment returns.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "ROI Calculator - Return on Investment Calculator",
    description:
      "Calculate your Return on Investment (ROI) with our simple and accurate ROI Calculator. Ideal for evaluating business and personal investment returns.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/roi-calculator",
  },
};

export default function ROICalculatorPage() {
  return (
    <div className="max-w-screen-lg md:mx-auto space-y-6">
      <ROICalc />
      <ROIInfo />
      <ROIFAQ />
    </div>
  );
}
