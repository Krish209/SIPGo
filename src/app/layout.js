import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // 👈 Import Script
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SIPGo - Smart Financial Calculators for Investment Planning",
  description:
    "Free online financial calculators for SIP, mutual funds, PPF, FD & more. Calculate returns, compare investments & plan your financial future with SIPGo's accurate tools.",
  keywords:
    "SIP calculator, investment calculator, mutual fund calculator, financial planning tools, PPF calculator, FD calculator, retirement planning, wealth management",
  alternates: {
    canonical: "https://www.sipgo.in/",
    languages: {
      "en": "https://www.sipgo.in/",
      "x-default": "https://www.sipgo.in/",
    },
  },

  openGraph: {
    title: "SIPGo - Smart Financial Calculators for Investment Planning",
    description:
      "Free online financial calculators for SIP, mutual funds, PPF, FD & more. Calculate returns, compare investments & plan your financial future with SIPGo's accurate tools.",
    url: "https://www.sipgo.in/",
    type: "website",
    images: [
      {
        url: "https://www.sipgo.in/images/logo.png",
        width: 1200,
        height: 630,
        alt: "SIPGo Logo",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "SIPGo - Smart Financial Calculators for Investment Planning",
    description:
      "Free online financial calculators for SIP, mutual funds, PPF, FD & more. Calculate returns, compare investments & plan your financial future with SIPGo's accurate tools.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Inject Ahrefs Analytics Script in <head> */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="fdkjjdfdfdf"
          strategy="afterInteractive"
        />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={inter.variable}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
