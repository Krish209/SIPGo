import Link from "next/link";
import { blogPosts } from "@/components/BlogPost";
import Image from "next/image";

export const metadata = {
  title: "Financial Blog - Expert Investment Insights & Tips | SIPGo",
  description:
    "Explore our financial blog for expert insights on SIP, mutual funds, tax planning, and wealth management strategies.",
  keywords: [
    "financial blog",
    "investment tips",
    "SIP guide",
    "mutual funds",
    "tax planning",
  ],

  openGraph: {
    type: "website",
    url: "https://www.sipgo.in/blog",
    title: "Financial Blog - Expert Investment Insights & Tips | SIPGo",
    description:
      "Explore our financial blog for expert insights on SIP, mutual funds, tax planning, and wealth management strategies.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Financial Blog - Expert Investment Insights & Tips | SIPGo",
    description:
      "Explore our financial blog for expert insights on SIP, mutual funds, tax planning, and wealth management strategies.",
    images: ["https://www.sipgo.in/images/logo.png"],
  },

  alternates: {
    canonical: "https://www.sipgo.in/blog",
  },
};


function BlogHome() {
  // SEO Meta Variables
  const pageTitle =
    "Financial Blog - Expert Investment Insights & Tips | SIPGo";
  const pageDescription =
    "Explore our financial blog for expert insights on SIP, mutual funds, tax planning, and wealth management strategies.";
  const canonicalUrl = "https://www.sipgo.in/blog";

  return (
    <div className="min-h-screen text-primary bg-gradient-to-b from-indigo-50 to-white">
      {/* Page Content */}
      <section className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
          📚 SIPGo Financial Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 group"
            >
              <Link href={post.path} className="flex flex-col h-full">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Illustration image for ${post.title}`}
                    className="w-full h-46 object-cover transition-transform duration-300 group-hover:scale-105"
                    width={800} // Replace with your image's actual width
                    height={600} // Replace with your image's actual height
                    loading="lazy"
                  />
                </div>

                <div className="px-4 py-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                    <span className="text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded-md text-xs">
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-2 text-xs">
                      <span>{post.date}</span>
                      <span className="text-gray-300">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-base md:text-lg font-semibold group-hover:text-indigo-600 transition md:min-h-14 mb-1">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogHome;
