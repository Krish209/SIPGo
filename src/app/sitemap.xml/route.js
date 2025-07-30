// File: /app/sitemap.xml/route.ts (Next.js App Router)
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.sipgo.in";
  const lastMod = "2025-07-29";
  // const lastMod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const pages = [
    "",
    "about",
    "contact",
    "terms",
    "privacy-policy",
    "disclaimer",
    "blog", // blog home

    // blog posts
    "blog/how-to-achieve-a-monthly-pension-of-50k-with-nps",
    "blog/sip-vs-lumpsum",
    "blog/why-risk-is-part-of-investing",
    "blog/investing-vs-gambling-whats-the-real-difference",
    "blog/beating-inflation",
    "blog/what-are-stocks-etfs-mutual-funds-and-bonds",
    "blog/how-to-create-passive-income-with-investments",
    "blog/how-does-compounding-work",
    "blog/how-to-diversify-your-investment-portfolio",
    "blog/how-do-inflation-and-taxes-impact-investments",
    "blog/how-to-invest-if-you-are-self-employed-or-a-freelancer",
    "blog/stocks-vs-mutual-funds",
    "blog/difference-between-saving-and-investing",

    // 🔽 Newly added blog posts (add these)
    "blog/warren-buffett-investing-2025-hypothetical",
    "blog/what-billionaires-teach-their-kids-about-money",
    "blog/what-gen-z-investors-are-doing-differently",
    "blog/why-your-investment-strategy-is-failing",
    "blog/psychological-traps-new-investors-fall",
    "blog/how-childhood-shapes-financial-habits",
    "blog/digital-assets-new-inheritance",
    "blog/how-i-doubled-investment-returns",
    "blog/how-much-money-to-retire-early",
    "blog/build-wealth-in-20s-no-money",
    "blog/how-to-spot-a-financial-scam-before-you-invest-2025",
    "blog/how-to-monetize-your-hobbies",
    "blog/if-elon-musk-build-stock-portfolio-instead-of-a-rocket-company",
    "blog/smarter-than-90-percent-investors",
    "blog/retirement-planning-after-40-crorepati",
    "blog/money-beliefs-holding-you-back-from-your-first-million",
    "blog/hidden-investment-fees-india",
    "blog/billionaire-secret-investment-strategy",
    "blog/the-rise-of-silent-wealth",
    "blog/untold-secrets-billionaires-starting-with-nothing",
    "blog/investment-habit-millionaire-by-50",
    "blog/never-sell-stocks-long-term-investing",
    "blog/nfts-ownership-wealth-future",
    "blog/what-schools-should-teach-about-money",
    "blog/how-smart-investors-handle-market-bubbles",
    "blog/why-investing-feels-boring",
    "blog/why-beginners-lose-money",
    "blog/side-hustles-as-full-time-income-2025",
    "blog/should-you-spend-or-invest-1-lakh",
    "blog/youre-not-lazy-adopt-owner-mindset",

    // utility
    "calc",

    // saving
    "ppf-calculator",
    "fd-calculator",
    "nps-calculator",
    "nsc-calculator",
    "ssy-calculator",
    "rd-calculator",
    "kvp-calculator",

    // loans
    "emi-calculator",
    "car-loan-calculator",
    "home-loan-calculator",
    "personal-loan-calculator",
    "education-loan-calculator",

    // investment
    "sip-calculator",
    "lumpsum-calculator",
    "mutual-fund-calculator",
    "step-up-sip-calculator",
    "swp-calculator",
    "gst-calculator",
    "inflation-calculator",
    "gratuity-calculator",
    "roi-calculator",
    "dividend-calculator",

    // interest
    "simple-interest-calculator",
    "compound-interest-calculator",
  ];
  const xmlItems = pages
    .map((slug) => {
      const loc = slug ? `${baseUrl}/${slug}` : baseUrl;
      const priority = slug.startsWith("blog")
        ? "0.9"
        : slug === "" ||
          slug === "about" ||
          slug === "contact" ||
          slug === "terms" ||
          slug === "privacy-policy" ||
          slug === "disclaimer"
        ? "1.0"
        : slug === "blog"
        ? "0.9"
        : "0.8";

      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Sitemap for sipgo.in -->
${xmlItems}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
