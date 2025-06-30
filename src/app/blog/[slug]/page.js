// app/blog/[slug]/page.js

import { getBlogBySlug, getAllBlogSlugs } from "@/components/BlogRegistry";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// export default async function BlogPage({ params }) {
//   const slug = params?.slug;
//   if (!slug) return notFound();

//   const { Component } = await getBlogBySlug(slug);
//   if (!Component) return notFound();

//   return <Component />;
// }

// export default async function BlogPage({ params: { slug } }) {
//   const { Component } = await getBlogBySlug(slug);
//   return <Component />;
// }


export default async function BlogPage({ params }) {
  try {
    console.log("Rendering blog page for slug:", params.slug); // helpful logging
    const { Component } = await getBlogBySlug(params.slug);
    return <Component />;
  } catch (err) {
    console.error("Error loading blog:", err);
    return notFound();
  }
}

