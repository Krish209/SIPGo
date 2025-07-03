// app/blog/[slug]/page.js

import { getBlogBySlug, getAllBlogSlugs } from "@/components/BlogRegistry";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // <-- await params here

  try {
    const { meta } = await getBlogBySlug(slug);

    return {
      title: meta.title,
      description: meta.description,
      alternates: {
        canonical: `https://www.sipgo.in/blog/${slug}`,
      },
      openGraph: {
        title: meta.title,
        description: meta.description,
        images: [meta.image],
        type: 'article',
        publishedTime: meta.date,
        tags: meta.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
        images: [meta.image],
      },
    };
  } catch {
    return {
      title: 'Not Found',
      description: 'The blog post you requested was not found.',
    };
  }
}

export default async function BlogPage({ params }) {
  const { slug } = await params; // <-- await params here

  try {
    const { Component } = await getBlogBySlug(slug);
    if (!Component) return notFound();

    return <Component />;
  } catch (err) {
    console.error(`Blog loading error for "${slug}":`, err);
    return notFound();
  }
}
