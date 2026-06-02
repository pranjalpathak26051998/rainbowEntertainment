import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BLOG_ARTICLES } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Event Planning Blog & Guides | Rainbow Entertainment",
  description: "Read our SEO-focused event planning guides. Learn about best wedding entertainment ideas, DJ setup specs, and hiring Sufi bands in Delhi NCR.",
  alternates: {
    canonical: "/blog"
  }
};

export default function BlogIndexPage() {
  return (
    <div className="bg-white pt-24 pb-24">
      {/* Header Banner */}
      <section className="relative py-20 dark-section text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light opacity-80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Expert Advice & Checklists</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2">The Event Planning Blog</h1>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Get professional insights from our coordinators on budgeting, staging structures, and hiring live artists in India.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-gray-50 border border-gray-100 hover:border-gold/20 rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-[16/10] shrink-0">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                  {article.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-charcoal/90 text-gold px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-gray-400 text-xs font-semibold">
                    {article.publishedDate} &bull; {article.readTime}
                  </span>
                  <h2 className="text-xl font-serif font-bold text-charcoal mt-2 line-clamp-2 group-hover:text-gold transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-xs md:text-sm mt-3 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">By {article.author.split(",")[0]}</span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-gold hover:text-charcoal transition-colors"
                  >
                    Read Post
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
