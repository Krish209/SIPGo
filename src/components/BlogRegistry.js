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
