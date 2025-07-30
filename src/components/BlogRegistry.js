// components/BlogRegistry.js

export const blogModules = {
  "how-does-compounding-work": () => import("../content/blog/how-does-compounding-work.jsx"),
  "sip-vs-lumpsum": () => import("../content/blog/sip-vs-lumpsum.jsx"),
  "why-risk-is-part-of-investing": () => import("../content/blog/why-risk-is-part-of-investing.jsx"),
  "investing-vs-gambling-whats-the-real-difference": () => import("../content/blog/investing-vs-gambling-whats-the-real-difference.jsx"),
  "beating-inflation": () => import("../content/blog/beating-inflation.jsx"),
  "what-are-stocks-etfs-mutual-funds-and-bonds": () => import("../content/blog/what-are-stocks-etfs-mutual-funds-and-bonds.jsx"),
  "how-to-create-passive-income-with-investments": () => import("../content/blog/how-to-create-passive-income-with-investments.jsx"),
  "how-to-diversify-your-investment-portfolio": () => import("../content/blog/how-to-diversify-your-investment-portfolio.jsx"),
  "how-do-inflation-and-taxes-impact-investments": () => import("../content/blog/how-do-inflation-and-taxes-impact-investments.jsx"),
  "how-to-invest-if-you-are-self-employed-or-a-freelancer": () => import("../content/blog/how-to-invest-if-you-are-self-employed-or-a-freelancer.jsx"),
  "stocks-vs-mutual-funds": () => import("../content/blog/stocks-vs-mutual-funds.jsx"),
  "difference-between-saving-and-investing": () => import("../content/blog/difference-between-saving-and-investing.jsx"),
  "how-to-achieve-a-monthly-pension-of-50k-with-nps": () => import("../content/blog/how-to-achieve-a-monthly-pension-of-50k-with-nps.jsx"),
  
  "warren-buffett-investing-2025-hypothetical": () => import("../content/blog/warren-buffett-investing-2025-hypothetical.jsx"),
  "what-billionaires-teach-their-kids-about-money": () => import("../content/blog/what-billionaires-teach-their-kids-about-money.jsx"),
  "what-gen-z-investors-are-doing-differently": () => import("../content/blog/what-gen-z-investors-are-doing-differently.jsx"),
  "why-your-investment-strategy-is-failing": () => import("../content/blog/Why Your Investment Strategy Is Failing.jsx"),
  "psychological-traps-new-investors-fall": () => import("../content/blog/Psychological Traps New Investors Fall.jsx"),

  "how-childhood-shapes-financial-habits": () => import("../content/blog/How Childhood Stories Shape Your Financial Future.jsx"),
  "digital-assets-new-inheritance": () => import("../content/blog/How Digital Assets Are Becoming the New Inheritance.jsx"),
  "how-i-doubled-investment-returns": () => import("../content/blog/How I Doubled My Investment Returns by Avoiding These Common Traps.jsx"),
  "how-much-money-to-retire-early": () => import("../content/blog/How Much Money Do You Need to Stop Working Forever.jsx"),
  "build-wealth-in-20s-no-money": () => import("../content/blog/How to Build Wealth with Little to No Money in Your 20s.jsx"),
  "how-to-spot-a-financial-scam-before-you-invest-2025": () => import("../content/blog/How to Spot a Financial Scam Before You Invest.jsx"),
  "how-to-monetize-your-hobbies": () => import("../content/blog/How to Use Your Hobbies to Create Multiple Income Streams.jsx"),
  "if-elon-musk-build-stock-portfolio-instead-of-a-rocket-company": () => import("../content/blog/If Elon Musk Built a Stock Portfolio Instead of a Rocket Company.jsx"),
  "smarter-than-90-percent-investors": () => import("../content/blog/If You Can Understand This, You’re Already Smarter Than 90% of Investors.jsx"),
  "retirement-planning-after-40-crorepati": () => import("../content/blog/Retirement Planning for Late Starters.jsx"),
  "money-beliefs-holding-you-back-from-your-first-million": () => import("../content/blog/The 5 Money Beliefs Holding You Back From Your First Million.jsx"),
  "hidden-investment-fees-india": () => import("../content/blog/The Hidden Fees That Could Be Eating Your Investment Returns.jsx"),
  "billionaire-secret-investment-strategy": () => import("../content/blog/The One Investment Strategy Billionaires Don’t Want You to Know About.jsx"),
  "the-rise-of-silent-wealth": () => import("../content/blog/The Rise of Silent Wealth.jsx"),
  "untold-secrets-billionaires-starting-with-nothing": () => import("../content/blog/The Untold Secrets Billionaires Won’t Admit About Starting With Nothing.jsx"),
  "investment-habit-millionaire-by-50": () => import("../content/blog/This One Investment Habit Could Make You a Millionaire by 50.jsx"),
  "never-sell-stocks-long-term-investing": () => import("../content/blog/What Happens If You Never Sell Your Stocks.jsx"),
  "nfts-ownership-wealth-future": () => import("../content/blog/What NFTs Mean for the Future of Ownership and Wealth.jsx"),
  "what-schools-should-teach-about-money": () => import("../content/blog/What Schools Should Teach About Money — But Don’t.jsx"),
  "how-smart-investors-handle-market-bubbles": () => import("../content/blog/What Smart Investors Do During Market Bubbles.jsx"),
  "why-investing-feels-boring": () => import("../content/blog/Why Investing Feels Boring—and That’s a Sign You’re Doing It Right.jsx"),
  "why-beginners-lose-money": () => import("../content/blog/Why Most Beginners Lose Money and How You Can Win Instead.jsx"),
  "side-hustles-as-full-time-income-2025": () => import("../content/blog/Why Side Hustles Are the New Full-Time Income for Young Professionals in 2025.jsx"),
  "should-you-spend-or-invest-1-lakh": () => import("../content/blog/Would You Rather Spend ₹1 Lakh or Invest It.jsx"),
  "youre-not-lazy-adopt-owner-mindset": () => import("../content/blog/You’re Not Lazy — You Just Haven’t Adopted an Owner Mindset Yet.jsx"),
};

export const getAllBlogSlugs = () => Object.keys(blogModules);

export const getBlogBySlug = async (slug) => {
  const loader = blogModules[slug];
  if (!loader) throw new Error("Blog not found");
  const mod = await loader();
  return {
    Component: mod.default,
    meta: mod.meta,
  };
};
