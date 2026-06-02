import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Phone, Calendar, User, Clock } from "lucide-react";
import { getBlogBySlug, BLOG_ARTICLES } from "@/data/blogs";
import LeadForm from "@/components/custom/LeadForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getBlogBySlug(resolvedParams.slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested blog article could not be found."
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/blog/${article.slug}`
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://rainbowentertainment.in/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author],
      images: [
        {
          url: article.coverImage,
          alt: article.title
        }
      ]
    }
  };
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = getBlogBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Schema.org BlogPosting JSON-LD
  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "image": article.coverImage,
    "datePublished": article.publishedDate,
    "author": {
      "@type": "Person",
      "name": article.author.split(",")[0]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rainbow Entertainment",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rainbowentertainment.in/logo.png"
      }
    },
    "description": article.summary
  };

  return (
    <div className="bg-white pt-24 pb-20">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-gold hover:text-charcoal transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Content Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column: Article Body */}
        <div className="lg:col-span-2">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-gray-100 shadow-sm mb-8">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-4 items-center text-gray-400 text-xs md:text-sm mb-6 border-b border-gray-100 pb-4">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-gold" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold" />
              Published on {article.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal leading-tight">
            {article.title}
          </h1>

          {/* Render article HTML */}
          <div
            className="prose prose-gold max-w-none mt-8 text-gray-600 space-y-6 text-sm md:text-base leading-relaxed
                       prose-h2:text-2xl prose-h2:font-serif prose-h2:font-bold prose-h2:text-charcoal prose-h2:mt-8
                       prose-p:mt-4 prose-lead:text-lg prose-lead:font-medium"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="flex gap-2 flex-wrap border-t border-gray-100 mt-10 pt-6">
            <span className="text-xs font-bold text-charcoal uppercase tracking-wider mr-2 self-center">Tags:</span>
            {article.tags.map(tag => (
              <span key={tag} className="text-xs font-semibold bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full text-charcoal-light">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Inquire Sidebar */}
        <div className="bg-charcoal border border-gold/15 rounded-3xl p-6 md:p-8 shadow-xl text-white sticky top-28">
          <span className="gold-gradient text-xs uppercase tracking-widest font-bold font-sans">Quick Consultation</span>
          <h3 className="text-xl md:text-2xl font-serif font-bold mt-1 text-white">Inspired by this article?</h3>
          <p className="text-white/60 text-xs mt-2 mb-6">
            Contact us to implement these trends for your upcoming event.
          </p>

          <LeadForm compact={true} />

          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-3">
            <a
              href="https://wa.me/919999999999?text=Hi,%20I'd%20like%20to%20consult%20about%20event%20ideas%20featured%20on%20your%20blog."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-sans text-xs tracking-widest font-bold uppercase py-3 rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              WhatsApp Consult
            </a>
            <a
              href="tel:+919999999999"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold font-sans text-xs tracking-widest font-bold uppercase py-3 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-gold" />
              Call Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
